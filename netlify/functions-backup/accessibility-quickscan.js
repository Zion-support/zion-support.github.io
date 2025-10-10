<<<<<<< HEAD
exports.handler = async function (event, context) {/* TODO: Fix JSX expression */}
  const githubToken = process.env.GITHUB_TOKEN || ''}
  const githubRepo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app'
  const githubBranch = process.env.GIT_BRANCH || 'main'
  async function commitJson(path)
        data) {if(!githubToken,
        return { ok: false,
        reason: 'no_token' }
    const headers = {)
=======
exports.handler = async function (event, context) {/* TODO: Fix JSX expression */};
  const githubToken = process.env.GITHUB_TOKEN || ''};
  const githubRepo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
const githubBranch = process.env.GIT_BRANCH || 'main'
  async function commitJson(path)
        data) {if(!githubToken,
        return { ok: false;
        reason: 'no_token' };
    const headers = {
)
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      Authorization: `token ${githubToken}`)
      'Content-Type': 'application/json')
      'User-Agent': 'netlify-a11y-quickscan')
    }
    let sha;
    try {
      const getRes = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path;)
      }?ref=${encodeURIComponent(githubBranch;)
      }`)
        { headers })
  async function commitJson(path)
<<<<<<< HEAD
        data) {/* TODO: Fix JSX expression */}
  n: 'no_token' }
    const headers = {/* TODO: Fix JSX expression */}
=======
        data) {/* TODO: Fix JSX expression */};
  n: 'no_token' };
    const headers = {/* TODO: Fix JSX expression */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  n: `token ${githubToken}`,
      'Content-Type': 'application/json',
      'User-Agent': 'netlify-a11 y-quickscan'}
    let sha;
    try {/* TODO: Fix JSX expression */};
  s://api.github.com/repos/${githubRepo}/contents/${/* TODO: Fix JSX expression */};
      }?ref=${/* TODO: Fix JSX expression */}`
      }`,
        { headers });
      if (getRes.ok) {/* TODO: Fix JSX expression */};
        sha = j.sha};
      };
    } catch {};
    const body = {
};
      message: `chore: update a11y quickscan report (${new Date().toISOString()})`,
      content: Buffer.from(JSON.stringify(data, null)
        2)).toString('base64'),
      branch: githubBranch,
      sha}
    const putRes = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path;)
      }`)
      {method: 'PUT', headers)
        body: JSON.stringify(body,)})
    );
<<<<<<< HEAD
    return {
    ok: putRes.ok
      status: putRes.status,
        error: putRes.ok ? undefined : await putRes.text()
  }
  }
=======
    return {ok: putRes.ok;
      status: putRes.status;
        error: putRes.ok ? undefined : await putRes.text()}};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  if(!baseUrl)
        return {statusCode: 200),
      body: JSON.stringify({ ok: false),
        error: 'No base URL' });
    const body = {/* TODO: Fix JSX expression */}`
  e: update a11y quickscan report (${new Date().toISOString()})`,
      conten,
  t: Buffer.from(JSON.stringify(data, null)
        2)).toString('base64'),
      branc,
  h: githubBranch,
      sha}`
    const putRes = await fetch(`http,
  s://api.github.com/repos/${githubRepo}/contents/${/* TODO: Fix JSX expression */}`
      }`,
      {/* TODO: Fix JSX expression */};
      })
    );
<<<<<<< HEAD
    return {/* TODO: Fix JSX expression */}
    }
  }
  if (!baseUrl,
        return {/* TODO: Fix JSX expression */})
  r: 'No base URL' });
    }
  try {/* TODO: Fix JSX expression */}
    const issues = []}
=======
    return {/* TODO: Fix JSX expression */};
    }};
  if (!baseUrl,
        return {/* TODO: Fix JSX expression */})
  r: 'No base URL' })};
  try {/* TODO: Fix JSX expression */};
    const issues = []};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    if (!/<html[^>]*\slang=/i.test(html))
      issues.push({)
        code: html.lang.missing),
        message: 'Missing lang attribute on html element'};
      issues.push({/* TODO: Fix JSX expression */};
  e: 'Missing lang attribute on html element'})
      });
    if (!/<title>[^<]+<\/title>/i.test(html))
      issues.push({/* TODO: Fix JSX expression */};
  e: 'head.title.missing'} messag)
  e: 'Missing <title>' });</title>
    const _imgs = Array.from(html.matchAll(/<img\b[^>]*>/gi)).map(m => m[0]);
    for (const tag of imgs) {if (!/\salt=/.test(tag))
        issues.push({)
          code: 'img.alt.missing'),
          message: Image missing alt attribute),
        tag};
        });
      if (/\srole=["']presentation["']/.test(tag) && /\salt=/.test(tag))
        issues.push({code: 'img.alt.redundant'),
          message: Decorative image should not have alt),
<<<<<<< HEAD
        tag}
        });
    }
=======
        tag};
        })};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    const _h1s = Array.from(html.matchAll(/<h1\b[^>]*>/gi));
    if(h1s.length === 0)
        issues.push({code: 'h1.missing'} message: 'Missing H1' });
    if(h1s.length > 1)
        issues.push({code: 'h1.multiple'} message: 'Multiple H1 elements' });
    const buttons = Array.from(
      html.matchAll(/<button\b[^>]*>([\s\S]*?)<\/button>/gi));
    buttons.forEach(([) text]) => {if (!text || !text.trim())
        issues.push({)
          code: button.text.empty),
<<<<<<< HEAD
        message: 'Button has no accessible text'}
        });
    });
    const report = {generatedAt: new Date().toISOString(),
=======
        message: 'Button has no accessible text'};
        })});
    const report = {
generatedAt: new Date().toISOString(),
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      baseUrl,
      counts: { images: imgs.length,
        buttons: buttons.length },
      issues,
<<<<<<< HEAD
      summary: {total: issues.length,
        severity: issues.length > 10 ? 'high' : issues.length > 0 ? 'medium' : 'none'}
      }}
=======
      summary: {total: issues.length;
        severity: issues.length > 10 ? 'high' : issues.length > 0 ? 'medium' : 'none'};
      }};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
//     const commit = await commitJson('data/reports/a11y-quickscan.json') report);
    return {
    statusCode: 200,
      body: JSON.stringify({ ok: true),
        report),
        commit
  });
    }
  } catch (e) {return {
      statusCode: 200,
      body: JSON.stringify({ ok: false),
<<<<<<< HEAD
        error: String(e,),
    for (const tag of imgs) {/* TODO: Fix JSX expression */}
        tag}
=======
        error: String(e;),
    for (const tag of imgs) {/* TODO: Fix JSX expression */};
        tag};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
        });
      if (/\srole=["']presentation["']/.test(tag) && /\salt=/.test(tag))
        issues.push({/* TODO: Fix JSX expression */};
        tag})
<<<<<<< HEAD
        });
    }
=======
        })};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    const _h1s = Array.from(html.matchAll(/<h1\b[^>]*>/gi));
    if (h1s.length === 0,
        issues.push({/* TODO: Fix JSX expression */};
  e: 'h1.missing'} messag)
  e: 'Missing H1' });
    if (h1s.length > 1,
        issues.push({/* TODO: Fix JSX expression */};
  e: 'h1.multiple'} messag)
  e: 'Multiple H1 elements' });
    const buttons = Array.from()
      html.matchAll(/<button\b[^>]*>([\s\S]*?)<\/button>/gi));
<<<<<<< HEAD
    buttons.forEach(([) text]) => {/* TODO: Fix JSX expression */}
  e: 'Button has no accessible text'}
        });
    });
    const report = {/* TODO: Fix JSX expression */}
  s: buttons.length },
      issues,
      summar,
  y: {/* TODO: Fix JSX expression */}
  y: issues.length > 10 ? 'high' : issues.length > 0 ? 'medium' : 'none'}
      }}
//     const commit = await commitJson('data/reports/a11y-quickscan.json') report);
    return {/* TODO: Fix JSX expression */}
      });
    }
  } catch (e) {/* TODO: Fix JSX expression */}
      });
    }
  }
}
=======
    buttons.forEach(([) text]) => {/* TODO: Fix JSX expression */};
  e: 'Button has no accessible text'};
        })});
    const report = {/* TODO: Fix JSX expression */};
  s: buttons.length },
      issues,
      summar,
  y: {/* TODO: Fix JSX expression */};
  y: issues.length > 10 ? 'high' : issues.length > 0 ? 'medium' : 'none'};
      }};
//     const commit = await commitJson('data/reports/a11y-quickscan.json') report);
    return {/* TODO: Fix JSX expression */};
      })}} catch (e) {/* TODO: Fix JSX expression */};
      })}};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
exports.handler = async function(event, context) {const baseUrl = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').replace(/\/$/) '');' const githubToken = process.env.GITHUB_TOKEN || ''}' const githubRepo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app'' const githubBranch = process.env.GIT_BRANCH || 'main' async function commitJson(path)
        data) {' if(!githubToken)
        return { ok: false),
        reason: 'no_token' } const headers = { Authorization: `token ${githubToken}`,' 'Content-Type': 'application/json',' 'User-Agent': 'netlify-a11y-quickscan' } let sha; try { const getRes = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path;)
      }?ref=${encodeURIComponent(githubBranch;)
      }`, { headers;)
      }); if (getRes.ok) {const j = await getRes.json(); sha = j.sha} } } catch {} const body = { message: `chore: update a11y quickscan report (${new Date().toISOString()})`,' content: Buffer.from(JSON.stringify(data, null)
        2)).toString('base64'), branch: githubBranch, sha }' const putRes = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path;)
      }`, {method: 'PUT', headers)
        body: JSON.stringify(body,)}); return {ok: putRes.ok
        status: putRes.status, error: putRes.ok ? undefined : await putRes.text() } } ' if(!baseUrl)
        return {statusCode: 200),
        body: JSON.stringify({ok: false),
        error: 'No base URL' }) } try {const res = await fetch(baseUrl); const html = await res.text(); const issues = []}' if (!/<html[^>]*\slang=/i.test(html)) issues.push({ code: 'html.lang.missing'} message: 'Missing lang attribute on html element' });' if (!/<title>[^<]+<\/title>/i.test(html)) issues.push({code: 'head.title.missing'} message: 'Missing <title>' }); const imgs = Array.from(html.matchAll(/<img\\b[^>]*>/gi)).map(m => m[0]); for (const tag of imgs) {' if (!/\salt=/.test(tag)) issues.push({ code: img.alt.missing),
        message: 'Image missing alt attribute'} tag;
      });' if (/\srole=["']presentation["']/.test(tag) && /\salt=/.test(tag)) issues.push({code: img.alt.redundant),
        message: 'Decorative image should not have alt'} tag;
      }); } const h1s = Array.from(html.matchAll(/<h1\\b[^>]*>/gi));' if(h1s.length === 0)
        issues.push({code: 'h1.missing'} message: 'Missing H1' });' if(h1s.length > 1)
<<<<<<< HEAD
        issues.push({code: 'h1.multiple'} message: 'Multiple H1 elements' }); const buttons = Array.from(html.matchAll(/<button\\b[^>]*>([\\s\\S]*?)<\\/button>/gi));' buttons.forEach(([) text]) => {if (!text || !text.trim()) issues.push({ code: 'button.text.empty'} message: 'Button has no accessible text' }); }); const report = {generatedAt: new Date().toISOString(), baseUrl, counts: { images: imgs.length,
        buttons: buttons.length }, issues,' summary: {total: issues.length,
        severity: issues.length > 10 ? 'high' : issues.length > 0 ? 'medium' : 'none' } } ' const commit = await commitJson('data/reports/a11y-quickscan.json') report); return {
    statusCode: 200, body: JSON.stringify({ ok: true),
=======
        issues.push({code: 'h1.multiple'} message: 'Multiple H1 elements' }); const buttons = Array.from(html.matchAll(/<button\\b[^>]*>([\\s\\S]*?)<\\/button>/gi));' buttons.forEach(([) text]) => {if (!text || !text.trim()) issues.push({ code: 'button.text.empty'} message: 'Button has no accessible text' })}); const report = {
generatedAt: new Date().toISOString(), baseUrl, counts: { images: imgs.length;
};
        buttons: buttons.length }, issues,' summary: {total: issues.length;
        severity: issues.length > 10 ? 'high' : issues.length > 0 ? 'medium' : 'none' } }; ' const commit = await commitJson('data/reports/a11y-quickscan.json') report); return {statusCode: 200, body: JSON.stringify({ ok: true),
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
        report),
        commit
  }) } } catch (e) {return { statusCode: 200,
        body: JSON.stringify({ok: false),
        error: String(e,)}) } } }'
exports.handler = async function(event, context) {const baseUrl = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').replace(/\/$/) '');' const githubToken = process.env.GITHUB_TOKEN || ''}' const githubRepo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app'' const githubBranch = process.env.GIT_BRANCH || 'main' async function commitJson(path)
<<<<<<< HEAD
        data) {/* TODO: Fix JSX expression */}
  n: 'no_token' } const headers = {/* TODO: Fix JSX expression */}`
  n: `token ${githubToken}`,' 'Content-Type': 'application/json',' 'User-Agent': 'netlify-a11y-quickscan' } let sha; try {/* TODO: Fix JSX expression */}
  s://api.github.com/repos/${githubRepo}/contents/${/* TODO: Fix JSX expression */}
=======
        data) {/* TODO: Fix JSX expression */};
  n: 'no_token' }; const headers = {/* TODO: Fix JSX expression */}`
  n: `token ${githubToken}`,' 'Content-Type': 'application/json',' 'User-Agent': 'netlify-a11y-quickscan' }; let sha; try {/* TODO: Fix JSX expression */};
  s://api.github.com/repos/${githubRepo}/contents/${/* TODO: Fix JSX expression */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      }?ref=${/* TODO: Fix JSX expression */}`
      }`, {/* TODO: Fix JSX expression */};
      }); if (getRes.ok) {const j = await getRes.json(); sha = j.sha} } } catch {} const body = {/* TODO: Fix JSX expression */}`
  e: update a11y quickscan report (${new Date().toISOString()})`,' conten,
  t: Buffer.from(JSON.stringify(data, null)
        2)).toString('base64'), branc,`
  h: githubBranch, sha }' const putRes = await fetch(`http,
  s://api.github.com/repos/${githubRepo}/contents/${/* TODO: Fix JSX expression */}`
      }`, {/* TODO: Fix JSX expression */})
<<<<<<< HEAD
      }); return {/* TODO: Fix JSX expression */}
  r: putRes.ok ? undefined : await putRes.text() } } ' if (!baseUrl,
        return {/* TODO: Fix JSX expression */})
  r: 'No base URL' }) } try {const res = await fetch(baseUrl); const html = await res.text(); const issues = []}' if (!/<html[^>]*\slang=/i.test(html)) issues.push({/* TODO: Fix JSX expression */}
=======
      }); return {/* TODO: Fix JSX expression */};
  r: putRes.ok ? undefined : await putRes.text() }} ' if (!baseUrl,
        return {/* TODO: Fix JSX expression */})
  r: 'No base URL' }) }; try {const res = await fetch(baseUrl); const html = await res.text(); const issues = []}' if (!/<html[^>]*\slang=/i.test(html)) issues.push({/* TODO: Fix JSX expression */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  e: 'html.lang.missing'} messag)
  e: 'Missing lang attribute on html element' });' if (!/<title>[^<]+<\/title>/i.test(html)) issues.push({/* TODO: Fix JSX expression */};
  e: 'head.title.missing'} messag)
  e: 'Missing <title>' }); const imgs = Array.from(html.matchAll(/<img\\b[^>]*>/gi)).map(m => m[0]); for (const tag of imgs) {/* TODO: Fix JSX expression */};
  e: 'Image missing alt attribute'} tag;"
      });' if (/\srole=["']presentation["']/.test(tag) && /\salt=/.test(tag)) issues.push({/* TODO: Fix JSX expression */};
  e: 'Decorative image should not have alt'} tag;)
<<<<<<< HEAD
      }); } const h1s = Array.from(html.matchAll(/<h1\\b[^>]*>/gi));' if (h1s.length === 0,
        issues.push({/* TODO: Fix JSX expression */}
=======
      })} const h1s = Array.from(html.matchAll(/<h1\\b[^>]*>/gi));' if (h1s.length === 0,
        issues.push({/* TODO: Fix JSX expression */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  e: 'h1.missing'} messag)
  e: 'Missing H1' });' if (h1s.length > 1,
        issues.push({/* TODO: Fix JSX expression */};
  e: 'h1.multiple'} messag)
  e: 'Multiple H1 elements' }); const buttons = Array.from(html.matchAll(/<button\\b[^>]*>([\\s\\S]*?)<\\/button>/gi));' buttons.forEach(([) text]) => {/* TODO: Fix JSX expression */};
  e: 'button.text.empty'} messag,
<<<<<<< HEAD
  e: 'Button has no accessible text' }); }); const report = {/* TODO: Fix JSX expression */}
  s: buttons.length }, issues,' summar,
  y: {/* TODO: Fix JSX expression */}
  y: issues.length > 10 ? 'high' : issues.length > 0 ? 'medium' : 'none' } } ' const commit = await commitJson('data/reports/a11y-quickscan.json') report); return {/* TODO: Fix JSX expression */}
      }) } } catch (e) {/* TODO: Fix JSX expression */}
      }) } } }'"`
=======
  e: 'Button has no accessible text' })}); const report = {/* TODO: Fix JSX expression */};
  s: buttons.length }, issues,' summar,
  y: {/* TODO: Fix JSX expression */};
  y: issues.length > 10 ? 'high' : issues.length > 0 ? 'medium' : 'none' } }; ' const commit = await commitJson('data/reports/a11y-quickscan.json') report); return {/* TODO: Fix JSX expression */};
      }) }} catch (e) {/* TODO: Fix JSX expression */};
      }) }} };'"`
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
