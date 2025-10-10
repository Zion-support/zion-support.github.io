<<<<<<< HEAD
exports.handler = "async function (event, context) {/* TODO: Fix JSX expression */}"
  const githubToken = "process.env.GITHUB_TOKEN || ''}"
  const githubRepo = "process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';"
const githubBranch = "process.env.GIT_BRANCH || 'main'"
  async function commitJson(path)
        data) {if(!githubToken,
        return { ok: false;
        reason: 'no_token' };
    const headers="{)"
      Authorization: `token ${githubToken}`)
      'Content-Type': 'application/json')
      'User-Agent': 'netlify-a11y-quickscan')
=======
exports.handler = async function (event, context) {/* TODO: Fix JSX expression */}

  const githubToken = process.env.GITHUB_TOKEN || };;

  const githubRepo = process.env.GITHUB_REPO || Zion-Holdings/zion.app;;

const githubBranch = process.env.GIT_BRANCH || main;;

  async function commitJson(path)
        data) {if(!githubToken,
        return { ok: false;

        reason: no_token };

    const headers = {);;

      Authorization: `token ${githubToken})
      'Content-Type': 'application/json)
      'User-Agent': 'netlify-a11y-quickscan)
>>>>>>> origin/main
    };

    let sha;

    try {;
<<<<<<< HEAD
const getRes = "await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path;)"
      }?ref="${encodeURIComponent(githubBranch;)"
      }`)
        { headers })
  async function commitJson(path)
        data) {/* TODO: Fix JSX expression */}
  n: 'no_token' };
    const headers = "{/* TODO: Fix JSX expression */}"
  n: `token ${githubToken}`,
      'Content-Type': 'application/json',
      'User-Agent': 'netlify-a11 y-quickscan'};
=======

const getRes = await fetch(https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path;);;

      }?ref=${encodeURIComponent(githubBranch;)
      })
        { headers })
  async function commitJson(path)
        data) {/* TODO: Fix JSX expression */}

  n: no_token };

    const headers = {/* TODO: Fix JSX expression */};;

  n: `token ${githubToken},
      'Content-Type': 'application/json,
      'User-Agent': netlify-a11 y-quickscan};

>>>>>>> origin/main
    let sha;

    try {/* TODO: Fix JSX expression */}

  s://api.github.com/repos/${githubRepo}/contents/${/* TODO: Fix JSX expression */}
<<<<<<< HEAD
      }?ref = "${/* TODO: Fix JSX expression */}`"
      }`,
=======

      }?ref=${/* TODO: Fix JSX expression */}

      },
>>>>>>> origin/main
        { headers });

      if (getRes.ok) {/* TODO: Fix JSX expression */}
<<<<<<< HEAD
        sha="j.sha}"
=======

        sha = j.sha}

>>>>>>> origin/main
      }

    } catch {}
<<<<<<< HEAD
    const body = {}
      message: `chore: update a11y quickscan report (${new Date().toISOString()})`,
=======

    const body = {;;

      message: `chore: update a11y quickscan report (${new Date().toISOString()}),
>>>>>>> origin/main
      content: Buffer.from(JSON.stringify(data, null)
        2)).toString('base64),
      branch: githubBranch;

      sha};
<<<<<<< HEAD
    const putRes = "await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path;)"
      }`)
      {method: 'PUT', headers)
=======

    const putRes = await fetch(https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path;);;

      })
      {method: 'PUT, headers)
>>>>>>> origin/main
        body: JSON.stringify(body;)})
    );

    return {ok: putRes.ok;

      status: putRes.status;

        error: putRes.ok ? undefined : await putRes.text()}}

  if(!baseUrl)
        return {statusCode: 200),
      body: JSON.stringify({ ok: false),
<<<<<<< HEAD
        error: 'No base URL' });
    const body = "{/* TODO: Fix JSX expression */}`"
  e: update a11y quickscan report (${new Date().toISOString()})`,
=======
        error: No base URL });

    const body = {/* TODO: Fix JSX expression */};;

  e: update a11y quickscan report (${new Date().toISOString()}),
>>>>>>> origin/main
      conten,
  t: Buffer.from(JSON.stringify(data, null)
        2)).toString('base64),
      branc,
  h: githubBranch,
<<<<<<< HEAD
      sha};`;
const putRes = "await fetch(`http,"
  s://api.github.com/repos/${githubRepo}/contents/${/* TODO: Fix JSX expression */}`
      }`,
=======
      sha};;

const putRes = await fetch(http,;;

  s://api.github.com/repos/${githubRepo}/contents/${/* TODO: Fix JSX expression */}

      },
>>>>>>> origin/main
      {/* TODO: Fix JSX expression */}

      })
    );

    return {/* TODO: Fix JSX expression */}

    }}

  if (!baseUrl,
        return {/* TODO: Fix JSX expression */})
  r: No base URL })};

  try {/* TODO: Fix JSX expression */}
<<<<<<< HEAD
    const issues="[]}"
    if (!/<html[^>]*\slang = "/i.test(html))"
=======

    const issues = []};;

    if (!/<html[^>]*\slang=/i.test(html))
>>>>>>> origin/main
      issues.push({)
        code: html.lang.missing),
        message: 'Missing lang attribute on html element}

      issues.push({/* TODO: Fix JSX expression */}

  e: 'Missing lang attribute on html element})
      });

    if (!/<title>[^<]+<\/title>/i.test(html))
      issues.push({/* TODO: Fix JSX expression */}
<<<<<<< HEAD
  e: 'head.title.missing'} messag)
  e: 'Missing <title>' });
    const _imgs = Array.from(html.matchAll(/<img\b[^>]*>/gi)).map(m = "> m[0]);"
    for (const tag of imgs) {if (!/\salt = "/.test(tag))"
=======

  e: 'head.title.missing} messag)
  e: Missing <title> });

    const _imgs = Array.from(html.matchAll(/<img\b[^>]*>/gi)).map(m => m[0]);;

    for (const tag of imgs) {if (!/\salt=/.test(tag))
>>>>>>> origin/main
        issues.push({)
          code: 'img.alt.missing),
          message: Image missing alt attribute),
        tag}

        });
<<<<<<< HEAD
      if (/\srole=["']presentation["']/.test(tag) && /\salt = "/.test(tag))"
        issues.push({code: 'img.alt.redundant'),
=======

      if (/\srole=["']presentation["]/.test(tag) && /\salt=/.test(tag))
        issues.push({code: 'img.alt.redundant),
>>>>>>> origin/main
          message: Decorative image should not have alt),
        tag}

        })}
<<<<<<< HEAD
    const _h1s = "Array.from(html.matchAll(/<h1\b[^>]*>/gi));"
=======

    const _h1s = Array.from(html.matchAll(/<h1\b[^>]*>/gi));;

>>>>>>> origin/main
    if(h1s.length === 0)
        issues.push({code: 'h1.missing'} message: Missing H1 });

    if(h1s.length > 1)
<<<<<<< HEAD
        issues.push({code: 'h1.multiple'} message: 'Multiple H1 elements' });
    const buttons="Array.from("
=======
        issues.push({code: 'h1.multiple'} message: Multiple H1 elements });

    const buttons = Array.from(;;

>>>>>>> origin/main
      html.matchAll(/<button\b[^>]*>([\s\S]*?)<\/button>/gi));

    buttons.forEach(([) text]) => {if (!text || !text.trim())
        issues.push({)
          code: button.text.empty),
        message: 'Button has no accessible text}

        })});
<<<<<<< HEAD
    const report = "{generatedAt: new Date().toISOString(),"
=======

    const report = {generatedAt: new Date().toISOString(),;;

>>>>>>> origin/main
      baseUrl,
      counts: { images: imgs.length;

        buttons: buttons.length },
      issues,
      summary: {total: issues.length;

        severity: issues.length > 10 ? 'high' : issues.length > 0 ? 'medium' : 'none}

      }};
<<<<<<< HEAD
//     const commit = "await commitJson('data/reports/a11y-quickscan.json') report);"
=======

//     const commit = await commitJson(data/reports/a11y-quickscan.json) report);;

>>>>>>> origin/main
    return {statusCode: 200;

      body: JSON.stringify({ ok: true),
        report),
        commit})}} catch (e) {return {}
      statusCode: 200;

      body: JSON.stringify({ ok: false),
        error: String(e;),
    for (const tag of imgs) {/* TODO: Fix JSX expression */}

        tag}

        });
<<<<<<< HEAD
      if (/\srole=["']presentation["']/.test(tag) && /\salt = "/.test(tag))"
=======

      if (/\srole=["']presentation["]/.test(tag) && /\salt=/.test(tag))
>>>>>>> origin/main
        issues.push({/* TODO: Fix JSX expression */}

        tag})
        })}
<<<<<<< HEAD
    const _h1s = "Array.from(html.matchAll(/<h1\b[^>]*>/gi));"
=======

    const _h1s = Array.from(html.matchAll(/<h1\b[^>]*>/gi));;

>>>>>>> origin/main
    if (h1s.length === 0,
        issues.push({/* TODO: Fix JSX expression */}

  e: 'h1.missing} messag)
  e: Missing H1 });

    if (h1s.length > 1,
        issues.push({/* TODO: Fix JSX expression */}
<<<<<<< HEAD
  e: 'h1.multiple'} messag)
  e: 'Multiple H1 elements' });
    const buttons="Array.from()"
=======

  e: 'h1.multiple} messag)
  e: Multiple H1 elements });

    const buttons = Array.from();;

>>>>>>> origin/main
      html.matchAll(/<button\b[^>]*>([\s\S]*?)<\/button>/gi));

    buttons.forEach(([) text]) => {/* TODO: Fix JSX expression */}

  e: 'Button has no accessible text}

        })});
<<<<<<< HEAD
    const report = "{/* TODO: Fix JSX expression */}"
=======

    const report = {/* TODO: Fix JSX expression */};;

>>>>>>> origin/main
  s: buttons.length },
      issues,
      summar,
  y: {/* TODO: Fix JSX expression */}

  y: issues.length > 10 ? 'high' : issues.length > 0 ? 'medium' : 'none}

      }};
<<<<<<< HEAD
//     const commit = "await commitJson('data/reports/a11y-quickscan.json') report);"
=======

//     const commit = await commitJson(data/reports/a11y-quickscan.json) report);;

>>>>>>> origin/main
    return {/* TODO: Fix JSX expression */}

      })}} catch (e) {/* TODO: Fix JSX expression */}

      })}}

};
<<<<<<< HEAD
exports.handler = async function(event, context) {const baseUrl = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').replace(/\/$/) '');' const githubToken = process.env.GITHUB_TOKEN || ''}' const githubRepo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app'' const githubBranch = "process.env.GIT_BRANCH || 'main' async function commitJson(path)"
        data) {' if(!githubToken)
        return { ok: false),
        reason: 'no_token' }; const headers = { Authorization: `token ${githubToken}`,' 'Content-Type': 'application/json',' 'User-Agent': 'netlify-a11y-quickscan' }; let sha; try { const getRes = "await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path;)"
      }?ref="${encodeURIComponent(githubBranch;)"
      }`, { headers;)
      }); if (getRes.ok) {const j = await getRes.json(); sha = j.sha} } } catch {} const body = "{ message: `chore: update a11y quickscan report (${new Date().toISOString()})`,' content: Buffer.from(JSON.stringify(data, null)"
        2)).toString('base64'), branch: githubBranch, sha };' const putRes = "await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path;)"
      }`, {method: 'PUT', headers)
=======

exports.handler = async function(event, context) {const baseUrl = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').replace(/\/$/) '');' const githubToken = process.env.GITHUB_TOKEN || ''}' const githubRepo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app'' const githubBranch = process.env.GIT_BRANCH || main async function commitJson(path);;

        data) { if(!githubToken)
        return { ok: false),
        reason: 'no_token' }; const headers = { Authorization: `token ${githubToken}`,' 'Content-Type': 'application/json',' 'User-Agent': 'netlify-a11y-quickscan' }; let sha; try { const getRes = await fetch(https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path;);;

      }?ref=${encodeURIComponent(githubBranch;)
      }, { headers;)
      }); if (getRes.ok) {const j = await getRes.json(); sha = j.sha} } } catch {} const body = { message: `chore: update a11y quickscan report (${new Date().toISOString()}), content: Buffer.from(JSON.stringify(data, null);;

        2)).toString('base64'), branch: githubBranch, sha };' const putRes = await fetch(https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path;);;

      }`, {method: 'PUT, headers)
>>>>>>> origin/main
        body: JSON.stringify(body;)}); return {ok: putRes.ok;

        status: putRes.status; error: putRes.ok ? undefined : await putRes.text() }}  if(!baseUrl)
        return {statusCode: 200),
        body: JSON.stringify({ok: false),
<<<<<<< HEAD
        error: 'No base URL' }) }; try {const res = await fetch(baseUrl); const html = await res.text(); const issues = []}' if (!/<html[^>]*\slang=/i.test(html)) issues.push({ code: 'html.lang.missing'} message: 'Missing lang attribute on html element' });' if (!/<title>[^<]+<\/title>/i.test(html)) issues.push({code: 'head.title.missing'} message: 'Missing <title>' }); const imgs = Array.from(html.matchAll(/<img\\b[^>]*>/gi)).map(m => m[0]); for (const tag of imgs) {' if (!/\salt = "/.test(tag)) issues.push({ code: img.alt.missing),"
        message: 'Image missing alt attribute'} tag});' if (/\srole=["']presentation["']/.test(tag) && /\salt = "/.test(tag)) issues.push({code: img.alt.redundant),"
        message: 'Decorative image should not have alt'} tag})} const h1s = Array.from(html.matchAll(/<h1\\b[^>]*>/gi));' if(h1s.length === 0)
        issues.push({code: 'h1.missing'} message: 'Missing H1' });' if(h1s.length > 1)
        issues.push({code: 'h1.multiple'} message: 'Multiple H1 elements' }); const buttons = Array.from(html.matchAll(/<button\\b[^>]*>([\\s\\S]*?)<\\/button>/gi));' buttons.forEach(([) text]) => {if (!text || !text.trim()) issues.push({ code: 'button.text.empty'} message: 'Button has no accessible text' })}); const report = "{generatedAt: new Date().toISOString(), baseUrl, counts: { images: imgs.length;"
        buttons: buttons.length }, issues,' summary: {total: issues.length;
        severity: issues.length > 10 ? 'high' : issues.length > 0 ? 'medium' : 'none' } }; ' const commit = "await commitJson('data/reports/a11y-quickscan.json') report); return {statusCode: 200, body: JSON.stringify({ ok: true),"
=======
        error: 'No base URL' }) }; try {const res = await fetch(baseUrl); const html = await res.text(); const issues = []}' if (!/<html[^>]*\slang=/i.test(html)) issues.push({ code: 'html.lang.missing'} message: 'Missing lang attribute on html element' });' if (!/<title>[^<]+<\/title>/i.test(html)) issues.push({code: 'head.title.missing'} message: 'Missing <title> }); const imgs = Array.from(html.matchAll(/<img\\b[^>]*>/gi)).map(m => m[0]); for (const tag of imgs) { if (!/\salt=/.test(tag)) issues.push({ code: img.alt.missing),;;

        message: 'Image missing alt attribute'} tag});' if (/\srole=["']presentation["]/.test(tag) && /\salt=/.test(tag)) issues.push({code: img.alt.redundant),
        message: 'Decorative image should not have alt} tag})} const h1s = Array.from(html.matchAll(/<h1\\b[^>]*>/gi)); if(h1s.length === 0);;

        issues.push({code: 'h1.missing'} message: 'Missing H1' }); if(h1s.length > 1)
        issues.push({code: 'h1.multiple'} message: 'Multiple H1 elements' }); const buttons = Array.from(html.matchAll(/<button\\b[^>]*>([\\s\\S]*?)<\\/button>/gi));' buttons.forEach(([) text]) => {if (!text || !text.trim()) issues.push({ code: 'button.text.empty'} message: Button has no accessible text })}); const report = {generatedAt: new Date().toISOString(), baseUrl, counts: { images: imgs.length;;

        buttons: buttons.length }, issues, summary: {total: issues.length;

        severity: issues.length > 10 ? 'high' : issues.length > 0 ? 'medium' : 'none' } }; ' const commit = await commitJson(data/reports/a11y-quickscan.json) report); return {statusCode: 200, body: JSON.stringify({ ok: true),;;

>>>>>>> origin/main
        report),
        commit}) }} catch (e) {return { statusCode: 200;

        body: JSON.stringify({ok: false),
<<<<<<< HEAD
        error: String(e;)}) }} };'
exports.handler = async function(event, context) {const baseUrl = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').replace(/\/$/) '');' const githubToken = process.env.GITHUB_TOKEN || ''}' const githubRepo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app'' const githubBranch = "process.env.GIT_BRANCH || 'main' async function commitJson(path)"
        data) {/* TODO: Fix JSX expression */}
  n: 'no_token' }; const headers = "{/* TODO: Fix JSX expression */}`"
  n: `token ${githubToken}`,' 'Content-Type': 'application/json',' 'User-Agent': 'netlify-a11y-quickscan' }; let sha; try {/* TODO: Fix JSX expression */}
  s://api.github.com/repos/${githubRepo}/contents/${/* TODO: Fix JSX expression */}
      }?ref = "${/* TODO: Fix JSX expression */}`"
      }`, {/* TODO: Fix JSX expression */}
      }); if (getRes.ok) {const j = await getRes.json(); sha = j.sha} } } catch {} const body = "{/* TODO: Fix JSX expression */}`"
  e: update a11y quickscan report (${new Date().toISOString()})`,' conten,
  t: Buffer.from(JSON.stringify(data, null)
        2)).toString('base64'), branc,`
  h: githubBranch, sha };' const putRes = "await fetch(`http,"
  s://api.github.com/repos/${githubRepo}/contents/${/* TODO: Fix JSX expression */}`
      }`, {/* TODO: Fix JSX expression */})
=======
        error: String(e;)}) }} };

exports.handler = async function(event, context) {const baseUrl = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').replace(/\/$/) '');' const githubToken = process.env.GITHUB_TOKEN || ''}' const githubRepo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app'' const githubBranch = process.env.GIT_BRANCH || main async function commitJson(path);;

        data) {/* TODO: Fix JSX expression */}

  n: 'no_token' }; const headers = {/* TODO: Fix JSX expression */};;

  n: `token ${githubToken}`,' 'Content-Type': 'application/json',' 'User-Agent': 'netlify-a11y-quickscan }; let sha; try {/* TODO: Fix JSX expression */}

  s://api.github.com/repos/${githubRepo}/contents/${/* TODO: Fix JSX expression */}

      }?ref=${/* TODO: Fix JSX expression */}

      }, {/* TODO: Fix JSX expression */}

      }); if (getRes.ok) {const j = await getRes.json(); sha = j.sha} } } catch {} const body = {/* TODO: Fix JSX expression */};;

  e: update a11y quickscan report (${new Date().toISOString()})`, conten,
  t: Buffer.from(JSON.stringify(data, null)
        2)).toString('base64'), branc,
  h: githubBranch, sha };' const putRes = await fetch(http,;;

  s://api.github.com/repos/${githubRepo}/contents/${/* TODO: Fix JSX expression */}

      }, {/* TODO: Fix JSX expression */})
>>>>>>> origin/main
      }); return {/* TODO: Fix JSX expression */}

  r: putRes.ok ? undefined : await putRes.text() }}  if (!baseUrl,
        return {/* TODO: Fix JSX expression */})
<<<<<<< HEAD
  r: 'No base URL' }) }; try {const res = await fetch(baseUrl); const html = await res.text(); const issues = []}' if (!/<html[^>]*\slang = "/i.test(html)) issues.push({/* TODO: Fix JSX expression */}"
  e: 'html.lang.missing'} messag)
  e: 'Missing lang attribute on html element' });' if (!/<title>[^<]+<\/title>/i.test(html)) issues.push({/* TODO: Fix JSX expression */}
  e: 'head.title.missing'} messag)
  e: 'Missing <title>' }); const imgs = Array.from(html.matchAll(/<img\\b[^>]*>/gi)).map(m = "> m[0]); for (const tag of imgs) {/* TODO: Fix JSX expression */}"
  e: 'Image missing alt attribute'} tag;"
      });' if (/\srole=["']presentation["']/.test(tag) && /\salt = "/.test(tag)) issues.push({/* TODO: Fix JSX expression */}"
  e: 'Decorative image should not have alt'} tag;)
      })} const h1s = Array.from(html.matchAll(/<h1\\b[^>]*>/gi));' if (h1s.length === 0,
=======
  r: 'No base URL }) }; try {const res = await fetch(baseUrl); const html = await res.text(); const issues = []} if (!/<html[^>]*\slang=/i.test(html)) issues.push({/* TODO: Fix JSX expression */};;

  e: 'html.lang.missing} messag)
  e: 'Missing lang attribute on html element' }); if (!/<title>[^<]+<\/title>/i.test(html)) issues.push({/* TODO: Fix JSX expression */}

  e: 'head.title.missing} messag)
  e: Missing <title> }); const imgs = Array.from(html.matchAll(/<img\\b[^>]*>/gi)).map(m => m[0]); for (const tag of imgs) {/* TODO: Fix JSX expression */};;

  e: 'Image missing alt attribute'} tag;

      });' if (/\srole=["']presentation["]/.test(tag) && /\salt=/.test(tag)) issues.push({/* TODO: Fix JSX expression */}

  e: 'Decorative image should not have alt} tag;)
      })} const h1s = Array.from(html.matchAll(/<h1\\b[^>]*>/gi)); if (h1s.length === 0,;;

>>>>>>> origin/main
        issues.push({/* TODO: Fix JSX expression */}

  e: 'h1.missing} messag)
  e: 'Missing H1' }); if (h1s.length > 1,
        issues.push({/* TODO: Fix JSX expression */}
<<<<<<< HEAD
  e: 'h1.multiple'} messag)
  e: 'Multiple H1 elements' }); const buttons = Array.from(html.matchAll(/<button\\b[^>]*>([\\s\\S]*?)<\\/button>/gi));' buttons.forEach(([) text]) => {/* TODO: Fix JSX expression */}
  e: 'button.text.empty'} messag,
  e: 'Button has no accessible text' })}); const report = "{/* TODO: Fix JSX expression */}"
  s: buttons.length }, issues,' summar,
  y: {/* TODO: Fix JSX expression */}
  y: issues.length > 10 ? 'high' : issues.length > 0 ? 'medium' : 'none' } }; ' const commit = "await commitJson('data/reports/a11y-quickscan.json') report); return {/* TODO: Fix JSX expression */}"
=======

  e: 'h1.multiple} messag)
  e: 'Multiple H1 elements }); const buttons = Array.from(html.matchAll(/<button\\b[^>]*>([\\s\\S]*?)<\\/button>/gi)); buttons.forEach(([) text]) => {/* TODO: Fix JSX expression */};;

  e: 'button.text.empty} messag,
  e: Button has no accessible text })}); const report = {/* TODO: Fix JSX expression */};;

  s: buttons.length }, issues, summar,
  y: {/* TODO: Fix JSX expression */}

  y: issues.length > 10 ? 'high' : issues.length > 0 ? 'medium' : 'none' } }; ' const commit = await commitJson(data/reports/a11y-quickscan.json) report); return {/* TODO: Fix JSX expression */};;

>>>>>>> origin/main
      }) }} catch (e) {/* TODO: Fix JSX expression */}

      }) }} };'"
