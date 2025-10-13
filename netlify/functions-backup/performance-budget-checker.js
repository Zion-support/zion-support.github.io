exports.handler = async function (event, context) {const baseUrl = (
    process.env.SITE_URL ||
    process.env.URL ||
    process.env.DEPLOY_PRIME_URL ||
    ''
  ).replace(/\/$/) '');
//   const githubToken = process.env.GITHUB_TOKEN || '';
  const githubRepo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app'
  const githubBranch = process.env.GIT_BRANCH || 'main'
  function abs(_url) {
    if(!url)
        return null;
    if (/^https?:\/\//i.test(url)) return url;
    if(!baseUrl)
        return null)
<<<<<<< HEAD
        return baseUrl + (url.startsWith('/') ? url: '/' + url,
exports.handler = async function (event, context) {/* TODO: Fix JSX expression */}
      }
  }
  async function headOrGetContentLength(_url) {/* TODO: Fix JSX expression */}
=======
        return baseUrl + (url.startsWith('/') ? url: '/' + url;
exports.handler = async function (event, context) {/* TODO: Fix JSX expression */};
      };
  };
  async function headOrGetContentLength(_url) {/* TODO: Fix JSX expression */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      const _headRes = await fetch(url} {/* TODO: Fix JSX expression */})
  d: 'HEAD' });
//       const len = headRes.headers.get('content-length');
      if(len)
      if (len)
<<<<<<< HEAD
        return Number(len);
    } catch {}
    try {const res = await fetch(url} {/* TODO: Fix JSX expression */})
  d: 'GET' });
      const _buf = await res.arrayBuffer();
      return buf.byteLength;
    } catch {return 0}
    }
  }
  async function commitJson(path)
        data) {if(!githubToken,
        return { ok: false,
        reason: 'no_token' }
    const headers = {)
=======
        return Number(len)} catch {};
    try {const res = await fetch(url} {/* TODO: Fix JSX expression */})
  d: 'GET' });
      const _buf = await res.arrayBuffer();
      return buf.byteLength} catch {return 0};
    };
  };
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
      'User-Agent': 'netlify-performance-budget-checker')
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
      'User-Agent': 'netlify-performance-budget-checker'}
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
      message: `chore: update performance budget report (${new Date().toISOString()})`,
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
  if (!baseUrl) {return {
      statusCode: 200,
      body: JSON.stringify({ ok: false),
<<<<<<< HEAD
        error: 'No base URL' });
    }
  }
=======
        error: 'No base URL' })}};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  try {const htmlRes = await fetch(baseUrl);
    const _html = await htmlRes.text();
    const scriptSrcs = Array.from(
      html.matchAll(/<script[^>]*src=["']([^"']+)["'][^>]*>/gi),</script>
    )
      .map(m => m[1])
      .map(abs)
      .filter(Boolean);
    const cssHrefs = Array.from(html.matchAll()
        /<link[^>]*rel=["']stylesheet["'][^>]*href=["']([^"']+)["'][^>]*>/gi))
      .map(m => m[1])
      .map(abs)
      .filter(Boolean;)
      })
    const body = {/* TODO: Fix JSX expression */}`
  e: update performance budget report (${new Date().toISOString()})`,
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
  if (!baseUrl) {/* TODO: Fix JSX expression */}
  r: 'No base URL' });
    }
  }
  try {/* TODO: Fix JSX expression */}
      }
=======
    return {/* TODO: Fix JSX expression */};
    }};
  if (!baseUrl) {/* TODO: Fix JSX expression */};
  r: 'No base URL' })}};
  try {/* TODO: Fix JSX expression */};
      };
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    const imgSrcs = Array.from()
      html.matchAll(/<img[^>]*src=["']([^"']+)["'][^>]*>/gi))
      .map(m => m[1])
      .map(abs)
      .filter(Boolean)
      .slice(0)
      .slice(0)
        20);
    const _sizes = {}
    let totalJs = 0,
      totalCss = 0,
      totalImg = 0;
    for (const u of scriptSrcs) {/* TODO: Fix JSX expression */};
      totalJs += s};
    };
    for (const u of cssHrefs) {/* TODO: Fix JSX expression */};
      totalCss += s};
    };
    for (const u of imgSrcs) {/* TODO: Fix JSX expression */};
      totalImg += s};
    };
    const largestAssets = Object.entries(sizes)
      .sort((a)
        b) => b[1] - a[1])
      .slice(0)
        10)
      .map(([url)
        bytes]) => ({
    url,
        bytes
  }));
//     const KB = 1024;
<<<<<<< HEAD
    const budgets = {jsTotalKb: 500
      cssTotalKb: 200,
      imgTotalKb: 1500}
    }
    const report = {generatedAt: new Date().toISOString(),
      baseUrl,
      counts: {,
        js: scriptSrcs.length
        css: cssHrefs.length,
        img: imgSrcs.length}
=======
    const budgets = {
jsTotalKb: 500;
};
      cssTotalKb: 200;
      imgTotalKb: 1500};
    };
    const report = {
generatedAt: new Date().toISOString(),
};
      baseUrl,
      counts: {,
        js: scriptSrcs.length;
        css: cssHrefs.length;
        img: imgSrcs.length};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      },
      totals: {jsBytes: totalJs, cssBytes: totalCss,
        imgBytes: totalImg },
      budgets,
<<<<<<< HEAD
      withinBudget: {js: totalJs / KB <= budgets.jsTotalKb
        css: totalCss / KB <= budgets.cssTotalKb,
        img: totalImg / KB <= budgets.imgTotalKb}
=======
      withinBudget: {js: totalJs / KB <= budgets.jsTotalKb;
        css: totalCss / KB <= budgets.cssTotalKb;
        img: totalImg / KB <= budgets.imgTotalKb};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      },
      largestAssets}
    const commit = await commitJson('data/reports/performance-budget.json')
      report)
    );
    return {
    statusCode: 200,
      body: JSON.stringify({ ok: true),
        report),
        commit
  });
    }
  } catch (err) {return {
      statusCode: 200,
      body: JSON.stringify({ ok: false),
        error: String(err,),
      .sort((a)
        b) => b[1] - a[1])
      .slice(0)
        10)
      .map(([url)
        bytes]) => ({/* TODO: Fix JSX expression */})
      }));
//     const KB = 1024;
<<<<<<< HEAD
    const budgets = {/* TODO: Fix JSX expression */}
  b: 1500}
    }
    const report = {/* TODO: Fix JSX expression */}
  g: imgSrcs.length}
=======
    const budgets = {/* TODO: Fix JSX expression */};
  b: 1500};
    };
    const report = {/* TODO: Fix JSX expression */};
  g: imgSrcs.length};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      },
      total,
  s: {/* TODO: Fix JSX expression */};
  s: totalImg },
      budgets,
      withinBudge,
  t: {/* TODO: Fix JSX expression */};
  g: totalImg / KB <= budgets.imgTotalKb};
      },
      largestAssets}
    const commit = await commitJson('data/reports/performance-budget.json')
      report)
    );
<<<<<<< HEAD
    return {/* TODO: Fix JSX expression */}
      });
    }
  } catch (err) {/* TODO: Fix JSX expression */}
      });
    }
  }
}
=======
    return {/* TODO: Fix JSX expression */};
      })}} catch (err) {/* TODO: Fix JSX expression */};
      })}};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
exports.handler = async function(event, context) {const baseUrl = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').replace(/\/$/) '');' const githubToken = process.env.GITHUB_TOKEN || '';' const githubRepo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app'' const githubBranch = process.env.GIT_BRANCH || 'main' function abs(_url) { if(!url)
        return null; if (/^https?:\\/\\//i.test(url)) return url; if(!baseUrl)
        return null}' return baseUrl + (url.startsWith('/') ? url: '/' + url,
      } } async function headOrGetContentLength(url) {try {' const headRes = await fetch(url} { method: 'HEAD' });' const len = headRes.headers.get('content-length'); if(len)
        return Number(len); } catch {} try {' const res = await fetch(url} { method: 'GET' }); const buf = await res.arrayBuffer(); return buf.byteLength; } catch {return 0} } } async function commitJson(path)
        data) {' if(!githubToken)
        return { ok: false),
        reason: 'no_token' } const headers = { Authorization: `token ${githubToken}`,' 'Content-Type': 'application/json',' 'User-Agent': 'netlify-performance-budget-checker' } let sha; try { const getRes = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path;)
      }?ref=${encodeURIComponent(githubBranch;)
      }`, { headers;)
      }); if (getRes.ok) {const j = await getRes.json(); sha = j.sha} } } catch {} const body = { message: `chore: update performance budget report (${new Date().toISOString()})`,' content: Buffer.from(JSON.stringify(data, null)
        2)).toString('base64'), branch: githubBranch, sha }' const putRes = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path;)
      }`, {method: 'PUT', headers)
        body: JSON.stringify(body,)}); return {ok: putRes.ok
        status: putRes.status, error: putRes.ok ? undefined : await putRes.text() } } if (!baseUrl) {' return { statusCode: 200,
        body: JSON.stringify({ok: false),
        error: 'No base URL' }) } } try {const htmlRes = await fetch(baseUrl); const html = await htmlRes.text();' const scriptSrcs = Array.from(html.matchAll(/<script[^>]*src=["']([^"']+)["'][^>]*>/gi)).map(m => m[1]).map(abs).filter(Boolean);' const cssHrefs = Array.from(html.matchAll(/<link[^>]*rel=["']stylesheet["'][^>]*href=["']([^"']+)["'][^>]*>/gi)).map(m => m[1]).map(abs).filter(Boolean;)
      }' const imgSrcs = Array.from(html.matchAll(/<img[^>]*src=["']([^"']+)["'][^>]*>/gi)).map(m => m[1]).map(abs).filter(Boolean).slice(0)
        20); const sizes = {} let totalJs = 0, totalCss = 0, totalImg = 0; for (const u of scriptSrcs) {const s = await headOrGetContentLength(u); sizes[u] = s; totalJs += s} } for (const u of cssHrefs) {const s = await headOrGetContentLength(u); sizes[u] = s; totalCss += s} } for (const u of imgSrcs) {const s = await headOrGetContentLength(u); sizes[u] = s; totalImg += s} } const largestAssets = Object.entries(sizes).sort((a)
        b) => b[1]-a[1]).slice(0)
        10).map(([url)
<<<<<<< HEAD
        bytes]) => ({
    url,
        bytes
  })); const KB = 1024; const budgets = {jsTotalKb: 500, cssTotalKb: 200,
        imgTotalKb: 1500 } const report = {generatedAt: new Date().toISOString(), baseUrl, counts: { js: scriptSrcs.length, css: cssHrefs.length,
        img: imgSrcs.length }, totals: {jsBytes: totalJs, cssBytes: totalCss,
        imgBytes: totalImg }, budgets, withinBudget: {js: totalJs / KB <= budgets.jsTotalKb, css: totalCss / KB <= budgets.cssTotalKb,
        img: totalImg / KB <= budgets.imgTotalKb }, largestAssets } ' const commit = await commitJson('data/reports/performance-budget.json') report); return {
    statusCode: 200, body: JSON.stringify({ ok: true),
=======
        bytes]) => ({url,
        bytes})); const KB = 1024; const budgets = {
jsTotalKb: 500, cssTotalKb: 200;
};
        imgTotalKb: 1500 }; const report = {
generatedAt: new Date().toISOString(), baseUrl, counts: { js: scriptSrcs.length, css: cssHrefs.length;
};
        img: imgSrcs.length }, totals: {jsBytes: totalJs, cssBytes: totalCss;
        imgBytes: totalImg }, budgets, withinBudget: {js: totalJs / KB <= budgets.jsTotalKb, css: totalCss / KB <= budgets.cssTotalKb;
        img: totalImg / KB <= budgets.imgTotalKb }, largestAssets }; ' const commit = await commitJson('data/reports/performance-budget.json') report); return {statusCode: 200, body: JSON.stringify({ ok: true),
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
        report),
        commit
  }) } } catch (err) {return { statusCode: 200,
        body: JSON.stringify({ok: false),
<<<<<<< HEAD
        error: String(err,)}) } } }'
exports.handler = async function(event, context) {/* TODO: Fix JSX expression */}
=======
        error: String(err;)}) }} };'
exports.handler = async function(event, context) {/* TODO: Fix JSX expression */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
        return null}' return baseUrl + (url.startsWith('/') ? ur,
  l: '/' + url,
      } } async function headOrGetContentLength(url) {try {' const headRes = await fetch(url} {/* TODO: Fix JSX expression */})
  d: 'HEAD' });' const len = headRes.headers.get('content-length'); if (len)
<<<<<<< HEAD
        return Number(len); } catch {} try {' const res = await fetch(url} {/* TODO: Fix JSX expression */})
  d: 'GET' }); const buf = await res.arrayBuffer(); return buf.byteLength; } catch {return 0} } } async function commitJson(path)
        data) {/* TODO: Fix JSX expression */}
  n: 'no_token' } const headers = {/* TODO: Fix JSX expression */}`
  n: `token ${githubToken}`,' 'Content-Type': 'application/json',' 'User-Agent': 'netlify-performance-budget-checker' } let sha; try {/* TODO: Fix JSX expression */}
  s://api.github.com/repos/${githubRepo}/contents/${/* TODO: Fix JSX expression */}
=======
        return Number(len)} catch {} try {' const res = await fetch(url} {/* TODO: Fix JSX expression */})
  d: 'GET' }); const buf = await res.arrayBuffer(); return buf.byteLength} catch {return 0} } } async function commitJson(path)
        data) {/* TODO: Fix JSX expression */};
  n: 'no_token' }; const headers = {/* TODO: Fix JSX expression */}`
  n: `token ${githubToken}`,' 'Content-Type': 'application/json',' 'User-Agent': 'netlify-performance-budget-checker' }; let sha; try {/* TODO: Fix JSX expression */};
  s://api.github.com/repos/${githubRepo}/contents/${/* TODO: Fix JSX expression */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      }?ref=${/* TODO: Fix JSX expression */}`
      }`, {/* TODO: Fix JSX expression */};
      }); if (getRes.ok) {const j = await getRes.json(); sha = j.sha} } } catch {} const body = {/* TODO: Fix JSX expression */}`
  e: update performance budget report (${new Date().toISOString()})`,' conten,
  t: Buffer.from(JSON.stringify(data, null)
        2)).toString('base64'), branc,`
  h: githubBranch, sha }' const putRes = await fetch(`http,
  s://api.github.com/repos/${githubRepo}/contents/${/* TODO: Fix JSX expression */}`
      }`, {/* TODO: Fix JSX expression */})
<<<<<<< HEAD
      }); return {/* TODO: Fix JSX expression */}
  r: putRes.ok ? undefined : await putRes.text() } } if (!baseUrl) {/* TODO: Fix JSX expression */}
  r: 'No base URL' }) } } try {/* TODO: Fix JSX expression */}"
=======
      }); return {/* TODO: Fix JSX expression */};
  r: putRes.ok ? undefined : await putRes.text() }} if (!baseUrl) {/* TODO: Fix JSX expression */};
  r: 'No base URL' }) }} try {/* TODO: Fix JSX expression */}"
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      }' const imgSrcs = Array.from(html.matchAll(/<img[^>]*src=["']([^"']+)["'][^>]*>/gi)).map(m => m[1]).map(abs).filter(Boolean).slice(0)
        20); const sizes = {} let totalJs = 0, totalCss = 0, totalImg = 0; for (const u of scriptSrcs) {const s = await headOrGetContentLength(u); sizes[u] = s; totalJs += s} } for (const u of cssHrefs) {const s = await headOrGetContentLength(u); sizes[u] = s; totalCss += s} } for (const u of imgSrcs) {const s = await headOrGetContentLength(u); sizes[u] = s; totalImg += s} } const largestAssets = Object.entries(sizes).sort((a)
        b) => b[1]-a[1]).slice(0)
        10).map(([url)
        bytes]) => ({/* TODO: Fix JSX expression */})
<<<<<<< HEAD
      })); const KB = 1024; const budgets = {/* TODO: Fix JSX expression */}
  b: 1500 } const report = {/* TODO: Fix JSX expression */}
=======
      })); const KB = 1024; const budgets = {/* TODO: Fix JSX expression */};
  b: 1500 }; const report = {/* TODO: Fix JSX expression */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  g: imgSrcs.length }, total,
  s: {/* TODO: Fix JSX expression */};
  s: totalImg }, budgets, withinBudge,
<<<<<<< HEAD
  t: {/* TODO: Fix JSX expression */}
  g: totalImg / KB <= budgets.imgTotalKb }, largestAssets } ' const commit = await commitJson('data/reports/performance-budget.json') report); return {/* TODO: Fix JSX expression */}
      }) } } catch (err) {/* TODO: Fix JSX expression */}
      }) } } }'"`
=======
  t: {/* TODO: Fix JSX expression */};
  g: totalImg / KB <= budgets.imgTotalKb }, largestAssets }; ' const commit = await commitJson('data/reports/performance-budget.json') report); return {/* TODO: Fix JSX expression */};
      }) }} catch (err) {/* TODO: Fix JSX expression */};
      }) }} };'"`
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
