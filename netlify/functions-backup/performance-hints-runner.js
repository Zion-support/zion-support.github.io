<<<<<<< HEAD
exports.config = {/* TODO: Fix JSX expression */}
  e: '*/15 * * * *' }
exports.handler = async function () {/* TODO: Fix JSX expression */}
=======
exports.config = {/* TODO: Fix JSX expression */};
  e: '*/15 * * * *' };
exports.handler = async function () {/* TODO: Fix JSX expression */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  ).replace(/\/$/} '');
//   const githubToken = process.env.GITHUB_TOKEN || '';
  const githubRepo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app'
  const githubBranch = process.env.GIT_BRANCH || 'main'
  function absolute(u) {if(!u)
        return null;
    if (u.startsWith('http')) return u;
    if(!baseUrl)
<<<<<<< HEAD
        return null)
  function absolute(u) {/* TODO: Fix JSX expression */}
        return `${baseUrl}${u.startsWith('/') ? '' : '/'}${u}`;
  }
  async function head(_url) {/* TODO: Fix JSX expression */}
=======
        return null);
function absolute(u) {/* TODO: Fix JSX expression */};
        return `${baseUrl}${u.startsWith('/') ? '' : '/'}${u}`};
  async function head(_url) {/* TODO: Fix JSX expression */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  d: 'HEAD'} redirec,
  t: 'follow' });
//       const len = r.headers.get('content-length');
      return {
    ok: r.ok
        status: r.status,
        size: len ? parseInt(len),
<<<<<<< HEAD
        10) : null
  }
    } catch (e) {return { ok: false
        status: 0; error: String(e,)}
    }
  }
  async function commitFile(path, content)
        message) {if(!githubToken,
        return { ok: false
        status: 0, error: 'No GITHUB_TOKEN provided' }
    const headers = {)
=======
        10) : null}} catch (e) {return { ok: false;
        status: 0; error: String(e;)}};
  };
  async function commitFile(path, content)
        message) {if(!githubToken,
        return { ok: false;
        status: 0; error: 'No GITHUB_TOKEN provided' };
    const headers = {
)
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      Authorization: `token ${githubToken}`)
      'Content-Type': 'application/json')
      'User-Agent': 'netlify-performance-hints')
    }
    let sha;
    try {
      const r = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path;)
      }?ref=${encodeURIComponent(githubBranch;)
      }`)
        { headers })
<<<<<<< HEAD
      return {/* TODO: Fix JSX expression */}
      }
    } catch (e) {/* TODO: Fix JSX expression */}
      }
    }
  }
  async function commitFile(path, content)
        message) {/* TODO: Fix JSX expression */}
  r: 'No GITHUB_TOKEN provided' }
=======
      return {/* TODO: Fix JSX expression */};
      }} catch (e) {/* TODO: Fix JSX expression */};
      }};
  };
  async function commitFile(path, content)
        message) {/* TODO: Fix JSX expression */};
  r: 'No GITHUB_TOKEN provided' };
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    const headers = {/* TODO: Fix JSX expression */}`
  n: `token ${githubToken}`,
      'Content-Type': 'application/json',
      'User-Agent': 'netlify-performance-hints'}
    let sha;
    try {/* TODO: Fix JSX expression */};
  s://api.github.com/repos/${githubRepo}/contents/${/* TODO: Fix JSX expression */};
      }?ref=${/* TODO: Fix JSX expression */}`
      }`,
        { headers });
      if (r.ok) {/* TODO: Fix JSX expression */};
        sha = j.sha};
      };
    } catch {};
    const body = {
message,
};
      content: Buffer.from(content).toString('base64'),
<<<<<<< HEAD
      branch: githubBranch,
      sha}
    }
    const putRes = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path;)
      }`)
      {method: 'PUT', headers)
        body: JSON.stringify(body,)})
    const body = {/* TODO: Fix JSX expression */}
      sha}
    }`
    const putRes = await fetch(`http,
=======
      branch: githubBranch;
      sha};
    };
    const putRes = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path;)
      }`)
      {method: 'PUT', headers)
        body: JSON.stringify(body;)});
const body = {/* TODO: Fix JSX expression */};
      sha};
    };`;
const putRes = await fetch(`http,
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  s://api.github.com/repos/${githubRepo}/contents/${/* TODO: Fix JSX expression */}`
      }`,
      {/* TODO: Fix JSX expression */};
      })
    );
//     const ok = putRes.ok;
//     const status = putRes.status;
    let error;
<<<<<<< HEAD
    if (!ok) {/* TODO: Fix JSX expression */}
        error = await putRes.text()}
      } catch (e) {
    error = String(e
  }
      }
=======
    if (!ok) {/* TODO: Fix JSX expression */};
        error = await putRes.text()};
      } catch (e) {error = String(e};
      };
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    })
    return {ok)
        status; error })
  })
  try {if (!baseUrl)
        return {
        statusCode: 200),
        body: JSON.stringify({ ok: false),
        error: 'No base URL' });
      }
    const _res = await fetch(baseUrl);
    if(!res.ok)
        return {statusCode: 200),
        body: JSON.stringify({ ok: false),
<<<<<<< HEAD
        error: `Fetch ${res.status}` });
      } catch (e) {/* TODO: Fix JSX expression */}
      }
      }
    }
    return {/* TODO: Fix JSX expression */}
        status; error }
  }
  try {/* TODO: Fix JSX expression */}
  r: 'No base URL' });
      }
=======
        error: `Fetch ${res.status}` })} catch (e) {/* TODO: Fix JSX expression */};
      };
      };
    };
    return {/* TODO: Fix JSX expression */};
        status; error }};
  try {/* TODO: Fix JSX expression */};
  r: 'No base URL' })};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    const _res = await fetch(baseUrl);
    if (!res.ok,
        return {/* TODO: Fix JSX expression */})`
  r: `Fetch ${res.status}` });
      }
    const _html = await res.text();
    const imgSrcs = Array.from(new Set()
        [...html.matchAll(/<img[^>]*src=["']([^"']+)["']/gi)]
          .map(m => absolute(m[1]))
          .filter(Boolean)));
    const scriptSrcs = Array.from(new Set()
    const scriptSrcs = Array.from(new Set(")
        [...html.matchAll(/<script[^>]*src=["']([^"']+)["']/gi)]
          .map(m => absolute(m[1]))
          .filter(Boolean)));
    const _checks = [];
    for(const src of [...imgSrcs, ...scriptSrcs].slice(0)
        60)) {const r = await head(src;)
      })
      checks.push({ url: src),
        size: r.size),
        status: r.status,
    for (const src of [...imgSrcs, ...scriptSrcs].slice(0)
        60)) {/* TODO: Fix JSX expression */};
      };
      checks.push({/* TODO: Fix JSX expression */})
<<<<<<< HEAD
      });
    }
=======
      })};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    const large = checks;
      .filter(c => typeof c.size === 'number' && c.size > 200 * 1024)
      .sort((a)
        b) => (b.size || 0) - (a.size || 0));
    const summary = {
baseUrl,
};
      generatedAt: new Date().toISOString(),
      totals: { assetsChecked: checks.length,
        large: large.length },
      large: large.slice(0),
      .sort((a)
        b) => (b.size || 0) - (a.size || 0));
    const summary = {/* TODO: Fix JSX expression */};
  e: large.length },
      larg,
  e: large.slice(0)
        50)}
    const jsonPath = 'automation/reports/performance-hints.json'
    const mdPath = 'docs/performance-hints.md'
//     const jsonContent = JSON.stringify({...summary)
        all: checks }, null)
//     const jsonContent = JSON.stringify({/* TODO: Fix JSX expression */};
  l: checks }, null)
        2);
    const mdLines = [
];
      '# Performance Hints',`
      `Generate,`
  d: ${summary.generatedAt}`,`
      `Base,`
  URL: ${baseUrl}`,
      '',`
      `Assets,`
  checked: ${summary.totals.assetsChecked}`,`
      `Large assets (>200KB): ${summary.totals.large}`,
      '',
      '## Large Assets',
      ...summary.large.map(
        r => `- ${r.url} — ${(r.size / 1024).toFixed(0;)
      } KB`)
      '## Large Assets',`
      ...summary.large.map(r => `- ${r.url} — ${/* TODO: Fix JSX expression */}`
      } KB`)
      )];`
//     const msg = `chore(report): performance hints (${new Date().toISOString()})`;
    const [jsonRes, mdRes] = await Promise.all([)
      commitFile(jsonPath, jsonContent)
        msg),
      commitFile(mdPath)
        mdLines.join('\n'), msg)]);
    return {statusCode: 200
      body: JSON.stringify({)
        ok: true,),
        totals: summary.totals),
        jsonRes),
<<<<<<< HEAD
        mdRes}
      });
    }
  } catch (e) {return {
      statusCode: 500,
=======
        mdRes};
      })}} catch (e) {return {
      statusCode: 500;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      body: JSON.stringify({ ok: false),
        error: String(e,),
    const [jsonRes, mdRes] = await Promise.all([
      commitFile(jsonPath, jsonContent)
        msg),
      commitFile(mdPath)
        mdLines.join('\n'), msg)]);
<<<<<<< HEAD
    return {/* TODO: Fix JSX expression */}
        mdRes}
      });
    }
  } catch (e) {/* TODO: Fix JSX expression */}
      });
    }
  }
}
exports.config = { schedule: '*/15 * * * *' } exports.handler = async function () {' const baseUrl = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').replace(/\/$/} '');' const githubToken = process.env.GITHUB_TOKEN || '';' const githubRepo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app'' const githubBranch = process.env.GIT_BRANCH || 'main' ' function absolute(u) {if(!u)
=======
    return {/* TODO: Fix JSX expression */};
        mdRes};
      })}} catch (e) {/* TODO: Fix JSX expression */};
      })}};
};
exports.config = { schedule: '*/15 * * * *' }; exports.handler = async function () {' const baseUrl = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').replace(/\/$/} '');' const githubToken = process.env.GITHUB_TOKEN || '';' const githubRepo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app'' const githubBranch = process.env.GIT_BRANCH || 'main' ' function absolute(u) {if(!u)
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
        return null; if (u.startsWith('http')) return u; if(!baseUrl)
        return null)
        return `${baseUrl}${u.startsWith('/') ? '' : '/'}${u}`; } async function head(url) {try {' const r = await fetch(url) { method: 'HEAD'} redirect: 'follow' });' const len = r.headers.get('content-length'); return {ok: r.ok, status: r.status,
        size: len ? parseInt(len),
        10) : null } } catch (e) {return { ok: false
        status: 0; error: String(e,)} } } async function commitFile(path, content)
        message) {' if(!githubToken)
        return { ok: false),
        status: 0, error: 'No GITHUB_TOKEN provided' }' const headers = { Authorization: `token ${githubToken}`, 'Content-Type': 'application/json', 'User-Agent': 'netlify-performance-hints' } let sha; try { const r = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path;)
      }?ref=${encodeURIComponent(githubBranch;)
      }`, { headers;)
<<<<<<< HEAD
      }); if (r.ok) {const j = await r.json(); sha = j.sha} } } catch {}' const body = {message, content: Buffer.from(content).toString('base64'), branch: githubBranch,
        sha }' const putRes = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path;)
=======
      }); if (r.ok) {const j = await r.json(); sha = j.sha} } } catch {}' const body = {
message, content: Buffer.from(content).toString('base64'), branch: githubBranch;
};
        sha };' const putRes = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path;)
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      }`, {method: 'PUT', headers)
        body: JSON.stringify(body,)}); const ok = putRes.ok; const status = putRes.status; let error; if (!ok) {try { error = await putRes.text()} } catch (e) {error = String(e;)
      } } } return {ok)
        status; error } } try {' if (!baseUrl)
        return { statusCode: 200),
        body: JSON.stringify({ok: false),
        error: 'No base URL' }) } const res = await fetch(baseUrl); if(!res.ok)
        return {statusCode: 200),
        body: JSON.stringify({ok: false),
        error: `Fetch ${res.status}` }) } const html = await res.text(); ' const imgSrcs = Array.from(new Set([...(html.matchAll(/<img[^>]*src=["']([^"']+)["']/gi))].map(m => absolute(m[1])).filter(Boolean)));' const scriptSrcs = Array.from(new Set([...(html.matchAll(/<script[^>]*src=["']([^"']+)["']/gi))].map(m => absolute(m[1])).filter(Boolean))); const checks = []; for(const src of [...imgSrcs, ...scriptSrcs].slice(0)
        60)) {const r = await head(src;)
      } checks.push({
    url: src),
        size: r.size),
<<<<<<< HEAD
        status: r.status
  }); } ' const large = checks.filter(c => typeof c.size === 'number' && c.size > 200 * 1024).sort((a)
        b) => (b.size||0)-(a.size||0)); const summary = {baseUrl, generatedAt: new Date().toISOString(), totals: { assetsChecked: checks.length,
        large: large.length }, large: large.slice(0,),
        50;)} ' const jsonPath = 'automation/reports/performance-hints.json'' const mdPath = 'docs/performance-hints.md' const jsonContent = JSON.stringify({...summary)
=======
        status: r.status})} ' const large = checks.filter(c => typeof c.size === 'number' && c.size > 200 * 1024).sort((a)
        b) => (b.size||0)-(a.size||0)); const summary = {
baseUrl, generatedAt: new Date().toISOString(), totals: { assetsChecked: checks.length;
};
        large: large.length }, large: large.slice(0;),
        50;)}; ' const jsonPath = 'automation/reports/performance-hints.json'' const mdPath = 'docs/performance-hints.md' const jsonContent = JSON.stringify({...summary)
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
        all: checks }, null)
        2); const mdLines = [
' '# Performance Hints', `Generated: ${summary.generatedAt}`, `Base URL: ${baseUrl}`,' '', `Assets checked: ${summary.totals.assetsChecked}`, `Large assets (>200KB): ${summary.totals.large}`,' '',' '## Large Assets', ...summary.large.map(r => `- ${r.url} — ${(r.size/1024).toFixed(0;)
];
      } KB`) ]; const msg = `chore(report): performance hints (${new Date().toISOString()})`; const [jsonRes, mdRes] = await Promise.all([ commitFile(jsonPath, jsonContent)
        msg),' commitFile(mdPath)
        mdLines.join('\n'), msg)]); return {
    statusCode: 200, body: JSON.stringify({ ok: true),
        totals: summary.totals),
        jsonRes; mdRes
  }) } } catch (e) {return { statusCode: 500,
        body: JSON.stringify({ok: false),
<<<<<<< HEAD
        error: String(e,)}) } } }'
exports.config = {/* TODO: Fix JSX expression */}
  e: '*/15 * * * *' } exports.handler = async function () {' const baseUrl = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').replace(/\/$/} '');' const githubToken = process.env.GITHUB_TOKEN || '';' const githubRepo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app'' const githubBranch = process.env.GIT_BRANCH || 'main' ' function absolute(u) {/* TODO: Fix JSX expression */}`
        return `${baseUrl}${u.startsWith('/') ? '' : '/'}${u}`; } async function head(url) {/* TODO: Fix JSX expression */}
  d: 'HEAD'} redirec,
  t: 'follow' });' const len = r.headers.get('content-length'); return {/* TODO: Fix JSX expression */}
        10) : null } } catch (e) {/* TODO: Fix JSX expression */}
      } } } async function commitFile(path, content)
        message) {/* TODO: Fix JSX expression */}
  r: 'No GITHUB_TOKEN provided' }' const headers = {/* TODO: Fix JSX expression */}`
  n: `token ${githubToken}`, 'Content-Type': 'application/json', 'User-Agent': 'netlify-performance-hints' } let sha; try {/* TODO: Fix JSX expression */}
  s://api.github.com/repos/${githubRepo}/contents/${/* TODO: Fix JSX expression */}
=======
        error: String(e;)}) }} };'
exports.config = {/* TODO: Fix JSX expression */};
  e: '*/15 * * * *' }; exports.handler = async function () {' const baseUrl = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').replace(/\/$/} '');' const githubToken = process.env.GITHUB_TOKEN || '';' const githubRepo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app'' const githubBranch = process.env.GIT_BRANCH || 'main' ' function absolute(u) {/* TODO: Fix JSX expression */}`
        return `${baseUrl}${u.startsWith('/') ? '' : '/'}${u}`} async function head(url) {/* TODO: Fix JSX expression */};
  d: 'HEAD'} redirec,
  t: 'follow' });' const len = r.headers.get('content-length'); return {/* TODO: Fix JSX expression */};
        10) : null }} catch (e) {/* TODO: Fix JSX expression */};
      }} } async function commitFile(path, content)
        message) {/* TODO: Fix JSX expression */};
  r: 'No GITHUB_TOKEN provided' };' const headers = {/* TODO: Fix JSX expression */}`
  n: `token ${githubToken}`, 'Content-Type': 'application/json', 'User-Agent': 'netlify-performance-hints' }; let sha; try {/* TODO: Fix JSX expression */};
  s://api.github.com/repos/${githubRepo}/contents/${/* TODO: Fix JSX expression */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      }?ref=${/* TODO: Fix JSX expression */}`
      }`, {/* TODO: Fix JSX expression */};
      }); if (r.ok) {const j = await r.json(); sha = j.sha} } } catch {}' const body = {/* TODO: Fix JSX expression */}`
        sha }' const putRes = await fetch(`http,
  s://api.github.com/repos/${githubRepo}/contents/${/* TODO: Fix JSX expression */}`
      }`, {/* TODO: Fix JSX expression */})
<<<<<<< HEAD
      }); const ok = putRes.ok; const status = putRes.status; let error; if (!ok) {try { error = await putRes.text()} } catch (e) {/* TODO: Fix JSX expression */}
      } } } return {/* TODO: Fix JSX expression */}
        status; error } } try {/* TODO: Fix JSX expression */}
  r: 'No base URL' }) } const res = await fetch(baseUrl); if (!res.ok,
        return {/* TODO: Fix JSX expression */}")`
  r: `Fetch ${res.status}` }) } const html = await res.text(); ' const imgSrcs = Array.from(new Set([...(html.matchAll(/<img[^>]*src=["']([^"']+)["']/gi))].map(m => absolute(m[1])).filter(Boolean)));' const scriptSrcs = Array.from(new Set([...(html.matchAll(/<script[^>]*src=["']([^"']+)["']/gi))].map(m => absolute(m[1])).filter(Boolean))); const checks = []; for (const src of [...imgSrcs, ...scriptSrcs].slice(0)
        60)) {/* TODO: Fix JSX expression */}
      } checks.push({/* TODO: Fix JSX expression */})
      }); } ' const large = checks.filter(c => typeof c.size === 'number' && c.size > 200 * 1024).sort((a)
        b) => (b.size||0)-(a.size||0)); const summary = {/* TODO: Fix JSX expression */}
  e: large.length }, larg,
  e: large.slice(0,
        50;
      } ' const jsonPath = 'automation/reports/performance-hints.json'' const mdPath = 'docs/performance-hints.md' const jsonContent = JSON.stringify({/* TODO: Fix JSX expression */}
=======
      }); const ok = putRes.ok; const status = putRes.status; let error; if (!ok) {try { error = await putRes.text()} } catch (e) {/* TODO: Fix JSX expression */};
      } } } return {/* TODO: Fix JSX expression */};
        status; error }} try {/* TODO: Fix JSX expression */};
  r: 'No base URL' }) }; const res = await fetch(baseUrl); if (!res.ok,
        return {/* TODO: Fix JSX expression */}")`
  r: `Fetch ${res.status}` }) }; const html = await res.text(); ' const imgSrcs = Array.from(new Set([...(html.matchAll(/<img[^>]*src=["']([^"']+)["']/gi))].map(m => absolute(m[1])).filter(Boolean)));' const scriptSrcs = Array.from(new Set([...(html.matchAll(/<script[^>]*src=["']([^"']+)["']/gi))].map(m => absolute(m[1])).filter(Boolean))); const checks = []; for (const src of [...imgSrcs, ...scriptSrcs].slice(0)
        60)) {/* TODO: Fix JSX expression */};
      } checks.push({/* TODO: Fix JSX expression */})
      })} ' const large = checks.filter(c => typeof c.size === 'number' && c.size > 200 * 1024).sort((a)
        b) => (b.size||0)-(a.size||0)); const summary = {/* TODO: Fix JSX expression */};
  e: large.length }, larg,
  e: large.slice(0,
        50}; ' const jsonPath = 'automation/reports/performance-hints.json'' const mdPath = 'docs/performance-hints.md' const jsonContent = JSON.stringify({/* TODO: Fix JSX expression */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  l: checks }, null)`
        2); const mdLines = [
' '# Performance Hints', `Generate,`
];
  d: ${summary.generatedAt}`, `Base,`
  URL: ${baseUrl}`,' '', `Assets,`
  checked: ${summary.totals.assetsChecked}`, `Large assets (>200KB): ${summary.totals.large}`,' '',' '## Large Assets', ...summary.large.map(r => `- ${r.url} — ${/* TODO: Fix JSX expression */})`
      } KB`) ]; const msg = `chore(report): performance hints (${new Date().toISOString()})`; const [jsonRes, mdRes] = await Promise.all([ commitFile(jsonPath, jsonContent)
        msg),' commitFile(mdPath)
<<<<<<< HEAD
        mdLines.join('\n'), msg)]); return {/* TODO: Fix JSX expression */}
      }) } } catch (e) {/* TODO: Fix JSX expression */}
      }) } } }'"`
=======
        mdLines.join('\n'), msg)]); return {/* TODO: Fix JSX expression */};
      }) }} catch (e) {/* TODO: Fix JSX expression */};
      }) }} };'"`
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
