<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

async function fetchHtml(url) {

if (!resp && resp.ok) throw new Error(`HTTP ${resp && resp.status}`);
  return resp && resp.text();

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return resp.text();
function extractLinks(html, base) {}
  const aTags = [...html && html.matchAll(/<a[^>]+href=["']([^"']+)["']/gi)].map(
    m => m[1]
  );
  const links = aTags'
    .filter(h => h && !h && h.startsWith('mailto:') && !h && h.startsWith('tel:'))
    .map(h =>'
      h && h.startsWith('http') ? h : `${base}${h && h.startsWith('/') ? h : `/${h}`}`
    );
const { upsert_file } = require ('./_lib / github');
;
async /**
 * fetch_html - Function description
 */
function fetch_html() {
  const resp = await fetch (url);
  if (throw new Error (`HTTP ${resp.status}`)) {
  $2
}
  return resp.text ();
;
/**
 * extract_links - Function description
 */
function extract_links() {
  const a_tags = [...html.match_all (/<a[^>]+href=["']([^"']+)["']/gi)].map (
    m => m[1]);
  const links = a_tags;
    .filter (h => h && !h.starts_with ('mailto:') && !h.starts_with ('tel:'));
    .map (h =>;
      h.starts_with ('http') ? h : `${base}${h.starts_with ('/') ? h : `/${h}`}`);
  return Array.from (new Set (links));
;

origin/cursor/expand-services-advertise-and-build-project-c28b

<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
exports.handler = async function () {
  try {
    const base = process.env.URL |process.env.DEPLOY_URL |'';
  return Array && Array.from(new Set(links));
exports && exports.handler = async function () {}
  try {'
    const base = process && process.env.URL || process && process.env.DEPLOY_URL || '';'
    const pages = ['/', '/learn', '/dao', '/certifications'];
    const checked = [];
    const broken = [];
<<<<<<< HEAD

            broken && broken.push({ url: l, status: 0, error: String(e && e.message || e) });
          }
        }
      } catch (e) {
        broken && broken.push({
          url: `${base}${p}`,
          status: 0,
          error: String(e && e.message || e),
        });
      }
    }
    const report = { updatedAt: Date && Date.now(), checked: checked && checked.length, broken };
    const owner = process && process.env.GITHUB_OWNER;
    const repo = process && process.env.GITHUB_REPO;
    const token = process && process.env.GITHUB_TOKEN;
    if (owner && repo && token) {
      await upsertFile({
        owner,
        repo,
        path: 'data/reports/links/weekly-links && links.json',
        content: JSON && JSON.stringify(report, null, 2),
        message: 'chore(automation): weekly link check',
;
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    ${p}`);
        const links = extract_links (html, base);
        for (const l of links.slice (0, 50)) {}
          try {'
            const resp = await fetch (l, { method: 'HEAD' });
            checked.push ({ url: l, status: resp.status });
            if (
              broken.push ({ url: l, status: resp.status })) {}
  $2;
}
          } catch (e) {}
            broken.push ({ url: l, status: 0, error: String (e.message || e) });
          }
        }
      } catch (e) {}
        broken.push ({}`
          url: `${base}${p}`,
          status: 0,
          error: String (e.message || e),
        });
      }
    }
    const report = { updated_at: Date.now (), checked: checked.length, broken }
;
    const owner = process.env.GITHUB_OWNER;
    const repo = process.env.GITHUB_REPO;
    const token = process.env.GITHUB_TOKEN;

origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        token,
      });
    }
    return {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  const resp = await fetch(url),
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`),
  return resp.text()
      status_code: 200,
      body: JSON.stringify ({ ok: true, broken: broken.length }),
    }
  } catch (e) {

=======
    }

    const report = { updated_at: Date.now (), checked: checked.length, broken },
    const owner = process.env.GITHUB_OWNER,
    const repo = process.env.GITHUB_REPO,
    const token = process.env.GITHUB_TOKEN,
    // Check condition
if ( {) {
  $2
}
      await upsert_file ({ owner, repo, path: 'data / reports / links / weekly - links.json', content: JSON.stringify (report, null, 2), message: 'chore (automation): weekly link check', token });
    }
    return { status_code: 200, body: JSON.stringify ({ ok: true, broken: broken.length }) }

  } catch (e) {
    return { status_code: 500, body: JSON.stringify ({ error: e.message }) }
  }

      statusCode: 200,
      body: JSON && JSON.stringify({ ok: true, broken: broken && broken.length }),
    };
  } catch (e) {
    return { statusCode: 500, body: JSON && JSON.stringify({ error: e && e.message }) };
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
};async function fetchHtml(url) {
  const resp = await fetch(url),
=======
        token,
      });
    }
    return {}
  }
};async function fetchHtml(url) {}
  const resp = await fetch(url),`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  if (!resp && resp.ok) throw new Error(`HTTP ${resp && resp.status}`),
  return resp && resp.text()

=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
const { upsertFile } = require('./_lib/github');
async function fetchHtml(url) {
  const resp = await fetch(url);
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
};
  return resp.text()
origin/cursor/automate-test-improve-and-merge-code-2533
=======
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
};async function fetchHtml(url) {
  const resp = await fetch(url),
  if (!resp && resp.ok) throw new Error(`HTTP ${resp && resp.status}`),
  return resp && resp.text()

>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
  return resp.text()
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}
function extractLinks(html, base) {}
'"
  const aTags = [...html && html.matchAll(/<a[^>]+href=["']([^"']+)["']/gi)].map((m) => m[1]),
  const links = aTags'
    .filter((h) => h && !h && h.startsWith('mailto:') && !h && h.startsWith('tel:'))'`
    .map((h) => (h && h.startsWith('http') ? h : `${base}${h && h.startsWith('/') ? h : `/${h}`}`)),
  return Array && Array.from(new Set(links))
}
exports && exports.handler = async function() {
  try {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    const base = process && process.env.URL || process && process.env.DEPLOY_URL || '',
    const pages = ['//learn/dao/certifications'],
    const checked = [],
    const broken = [],

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    const base = process.env.URL |process.env.DEPLOY_URL |''
    const pages = ['//learn/dao/certifications']
    const checked = []
    const broken = []
    for (const p of pages) {
      try {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
},
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

        const html = await fetchHtml(`${base}${p}`),
        const links = extractLinks(html, base),
        for (const l of links && links.slice(0, 50)) {
          try {
            const resp = await fetch(l, { method: 'HEAD' }),
            checked && checked.push({ url: l, status: resp && resp.status }),
            if (resp && resp.status >= 400) broken && broken.push({ url: l, status: resp && resp.status })
          } catch (e) {
            broken && broken.push({ url: l, status: 0, error: String(e && e.message || e) })
    const base = process.env.URL || process.env.DEPLOY_URL || '',
    const pages = ['//learn/dao/certifications'];
    const checked = [];
    const broken = [];
    for (const p of pages) {
      try {
        const html = await fetchHtml(`${base}${p}`);
        const links = extractLinks(html, base);
        for (const l of links.slice(0, 50)) {
          try {
            const resp = await fetch(l, { method: 'HEAD' });
            checked.push({ url: l, status: resp.status });
            if (} catch (e) {
            broken.push({ url: l, status: 0, error: String(e.message || e) })
origin/cursor/automate-test-improve-and-merge-code-2533
          }
        }
      } catch (e) {
        broken && broken.push({ url: `${base}${p}`, status: 0, error: String(e && e.message || e) })
      }
    }
    const report = { updatedAt: Date && Date.now(), checked: checked && checked.length, broken },
    const owner = process && process.env.GITHUB_OWNER,
    const repo = process && process.env.GITHUB_REPO,
    const token = process && process.env.GITHUB_TOKEN,

    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'data/reports/links/weekly-links && links.json', content: JSON && JSON.stringify(report, null, 2), message: 'chore(automation): weekly link check', token })
    }

    return { statusCode: 200, body: JSON && JSON.stringify({ ok: true, broken: broken && broken.length }) }

  } catch (e) {
    return { statusCode: 500, body: JSON && JSON.stringify({ error: e && e.message }) }
  }
}
},
},

if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'data/reports/links/weekly-links && links.json', content: JSON && JSON.stringify(report, null, 2), message: 'chore(automation): weekly link check', token })
    }

    return { statusCode: 200, body: JSON && JSON.stringify({ ok: true, broken: broken && broken.length }) }

  } catch (e) {
    return { statusCode: 500, body: JSON && JSON.stringify({ error: e && e.message }) }
  }
}
},

    return { statusCode: 500, body: JSON.stringify({ error: e.message }) };
  }
};async function fetchHtml(url) {}
  const resp = await fetch(url),`
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`),
  return resp.text()
}

function extractLinks() { return null; }`
    .map((h) => (h.startsWith('http') ? h : `${base}${h.startsWith('/') ? h : `/${h}`}`)),
  return Array.from(new Set(links))
}

exports.handler = async function() {}
  try {'
    const base = process.env.URL || process.env.DEPLOY_URL || '','
    const pages = ['//learn/dao/certifications'],
    const checked = [],
    const broken = [],

    for (const p of pages) {}
      try {}`
        const html = await fetchHtml(`${base}${p}`),
        const links = extractLinks(html, base),
        for (const l of links.slice(0, 50)) {}
          try {'
            const resp = await fetch(l, { method: 'HEAD' }),
            checked.push({ url: l, status: resp.status }),
            if (resp.status >= 400) broken.push({ url: l, status: resp.status })
          } catch (e) {}
            broken.push({ url: l, status: 0, error: String(e.message || e) })
          }
        }
      } catch (e) {}`
        broken.push({ url: `${base}${p}`, status: 0, error: String(e.message || e) })
      }
    }

    const report = { updatedAt: Date.now(), checked: checked.length, broken },

    const owner = process.env.GITHUB_OWNER,
    const repo = process.env.GITHUB_REPO,
    const token = process.env.GITHUB_TOKEN,

    if (owner && repo && token) {'
      await upsertFile({ owner, repo, path: 'data/reports/links/weekly-links.json', content: JSON.stringify(report, null, 2), message: 'chore(automation): weekly link check', token })
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true, broken: broken.length }) }
  } catch (e) {}
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
},
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) };
  }
};async function fetchHtml(url) {
  const resp = await fetch(url),
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`),
  return resp.text()
}

function extractLinks(html, base) {
  const aTags = [...html.matchAll(/<a[^>]+href=["']([^"']+)["']/gi)].map((m) => m[1]),
  const links = aTags
    .filter((h) => h && !h.startsWith('mailto:') && !h.startsWith('tel:'))
    .map((h) => (h.startsWith('http') ? h : `${base}${h.startsWith('/') ? h : `/${h}`}`)),
  return Array.from(new Set(links))
}

exports.handler = async function() {
  try {
    const base = process.env.URL || process.env.DEPLOY_URL || '',
    const pages = ['//learn/dao/certifications'],
    const checked = [],
    const broken = [],

    for (const p of pages) {
      try {
        const html = await fetchHtml(`${base}${p}`),
        const links = extractLinks(html, base),
        for (const l of links.slice(0, 50)) {
          try {
            const resp = await fetch(l, { method: 'HEAD' }),
            checked.push({ url: l, status: resp.status }),
            if (resp.status >= 400) broken.push({ url: l, status: resp.status })
          } catch (e) {
            broken.push({ url: l, status: 0, error: String(e.message || e) })
          }
        }
      } catch (e) {
        broken.push({ url: `${base}${p}`, status: 0, error: String(e.message || e) })
      }
    }

    const report = { updatedAt: Date.now(), checked: checked.length, broken },

    const owner = process.env.GITHUB_OWNER,
    const repo = process.env.GITHUB_REPO,
    const token = process.env.GITHUB_TOKEN,

    const report = { updatedAt: Date.now(), checked: checked.length, broken },

    const owner = process.env.GITHUB_OWNER);
    const repo = process.env.GITHUB_REPO;
    const token = process.env.GITHUB_TOKEN);
origin/cursor/automate-test-improve-and-merge-code-2533
    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'data/reports/links/weekly-links.json', content: JSON.stringify(report, null, 2), message: 'chore(automation): weekly link check', token })
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true, broken: broken.length }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
origin/cursor/expand-services-advertise-and-build-project-c28b
},
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
},
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
origin/cursor/automate-test-improve-and-merge-code-20a4

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
=======
},
},
},
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

function extractLinks(html, base) {
  const aTags = [...html.matchAll(/<a[^>]+href=["']([^"']+)["']/gi)].map((m) => m[1]),
  const links = aTags
    .filter((h) => h && !h.startsWith('mailto:') && !h.startsWith('tel:'))
    .map((h) => (h.startsWith('http') ? h : `${base}${h.startsWith('/') ? h : `/${h}`}`)),
  return Array.from(new Set(links))
}

exports.handler = async function() {
  try {
    const base = process.env.URL || process.env.DEPLOY_URL || '',
    const pages = ['//learn/dao/certifications'],
    const checked = [],
    const broken = [],

    for (const p of pages) {
      try {
        const html = await fetchHtml(`${base}${p}`),
        const links = extractLinks(html, base),
        for (const l of links.slice(0, 50)) {
          try {
            const resp = await fetch(l, { method: 'HEAD' }),
            checked.push({ url: l, status: resp.status }),
            if (resp.status >= 400) broken.push({ url: l, status: resp.status })
          } catch (e) {
            broken.push({ url: l, status: 0, error: String(e.message || e) })
          }
        }
      } catch (e) {
        broken.push({ url: `${base}${p}`, status: 0, error: String(e.message || e) })
      }
    }

    const report = { updatedAt: Date.now(), checked: checked.length, broken },

    const owner = process.env.GITHUB_OWNER,
    const repo = process.env.GITHUB_REPO,
    const token = process.env.GITHUB_TOKEN,

    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'data/reports/links/weekly-links.json', content: JSON.stringify(report, null, 2), message: 'chore(automation): weekly link check', token })
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true, broken: broken.length }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
},
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

};
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
