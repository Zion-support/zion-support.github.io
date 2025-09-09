export const handler = async (event) => {
  try {
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'Method Not Allowed' })
      };
    }

    const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || process.env.NETLIFY_GITHUB_TOKEN;
    if (!token) {
      return {
        statusCode: 500,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'Missing GitHub token' })
      };
    }

    const { owner, repo, path, content, message } = JSON.parse(event.body || '{}');
    if (!owner || !repo || !path || typeof content !== 'string') {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'owner, repo, path, and content are required' })
      };
    }

    const baseUrl = 'https://api.github.com';
    const fileUrl = `${baseUrl}/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/contents/${encodeURIComponent(path)}`;

    // First, get existing file to retrieve sha (if present)
    const getResp = await fetch(fileUrl, {
      method: 'GET',
      headers: {
        Authorization: `token ${token}`,
        Accept: 'application/vnd.github+json'
      }
    });

    let existingSha = undefined;
    if (getResp.status === 200) {
      const existingJson = await getResp.json();
      existingSha = existingJson && existingJson.sha;
    } else if (getResp.status !== 404) {
      const text = await getResp.text();
      return {
        statusCode: getResp.status,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'Failed to read existing file', details: text })
      };
    }

    const putBody = {
      message: message || `chore: update ${path}`,
      content: Buffer.from(content).toString('base64'),
      sha: existingSha
    };

    const putResp = await fetch(fileUrl, {
      method: 'PUT',
      headers: {
        Authorization: `token ${token}`,
        Accept: 'application/vnd.github+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(putBody)
    });

    const resultText = await putResp.text();
    if (!putResp.ok) {
      return {
        statusCode: putResp.status,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'Failed to upsert file', details: resultText })
      };
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: resultText
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: error.message })
    };
  }
};
