<<<<<<< HEAD
async function fetchHtml(url) {

=======
<<<<<<< HEAD
if (!resp && resp.ok) throw new Error(`HTTP ${resp && resp.status}`);
  return resp && resp.text();
=======


async function fetchHtml(url) {

  if (!resp && resp.ok) throw new Error(`HTTP ${resp && resp.status}`);
  return resp && resp.text();


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
=======

<<<<<<< HEAD
exports.handler = async function () {
  try {
<<<<<<< HEAD
   ;
  }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
exports.handler = async function () {
  try {
    const base = process.env.URL |process.env.DEPLOY_URL |'';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return Array && Array.from(new Set(links));
exports && exports.handler = async function () {
  }
  try {
<<<<<<< HEAD
   ;
  }



const broken = [];
    ${p}`);`
const links = extract_links (html, base);
        for (const l of links.slice (0, 50)) {
          }
          try {
}
});
            checked.push ({ "url": l, "status": resp.status
});
            if (
              broken.push ({ "url": l, "status": resp.status })) {
  $2
}
         
} catch (e) {broken.push ({ "url": l, "status": 0, "error": String (e.message || e) })}
=======

    const base = process.env.URL |process.env.DEPLOY_URL |'';
  return Array && Array.from(new Set(links));
exports && exports.handler = async function () {}
  try {'
    const base = process && process.env.URL || process && process.env.DEPLOY_URL || '';'
=======
    const base = process && process.env.URL || process && process.env.DEPLOY_URL || '';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    const pages = ['/', '/learn', '/dao', '/certifications'];
    const checked = [];
    const broken = [];
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            broken && broken.push({ url: l, status: 0, error: String(e && e.message || e) });
          }
>>>>>>> origin/chore/fix-lint-and-merge
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
<<<<<<< HEAD
=======
;
    // Check condition
if ( {) {
  $2
}
      await upsert_file ({
        owner,
        repo,
        path: 'data / reports / links / weekly - links.json',
        content: JSON.stringify (report, null, 2),
        message: 'chore (automation): weekly link check',
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        token,
      });
    }
    return {
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD

    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
    const token  = process.env.GITHUB_TOKEN;// Check condition;
if ( {) {$2;
}
      await upsert_file ({owner,repo,"path": 'data / reports / links / weekly - links.json',"content": JSON.stringify (report, null, 2),"message": 'chore (automation): weekly link check',token;'
      })}
    return {token;
      })}
    return {const resp = await fetch(url),if (!resp.ok) throw new Error(`HTTP ${resp.status}`);`  return resp.text()"status_code": 200,"body": JSON.stringify ({ "ok": true, "broken": broken.length })}
  } catch (e) 
}
      "body": JSON.stringify ({ "ok": true, "broken": broken.length })}
 
} catch (e) ;
}

const report = { "updated_at": Date.now (), "checked": checked.length, broken },const owner = process.env.GITHUB_OWNER,const repo = process.env.GITHUB_REPO;
  const token = process.env.GITHUB_TOKEN,// Check condition;
if ( {) {$2;
}
      await upsert_file ({ owner, repo, "path": 'data / reports / links / weekly - links.json', "content": JSON.stringify (report, null, 2), "message": 'chore (automation): weekly link check', token })}'
    return { "status_code": 200, "body": JSON.stringify ({ "ok": true, "broken": broken.length }) 
} catch (e) {return { "status_code": 500, "body": JSON.stringify ({ "error": e.message }) }
 
}"statusCode": 200,"body": JSON && JSON.stringify({ "ok": true, "broken": broken && broken.length })
} catch (e) {return { "statusCode": 500, "body": JSON && JSON.stringify({ "error": e && e.message })
}token;
      })}
    return {}
      "body": JSON && JSON.stringify({ "ok": true, "broken": broken && broken.length })
} catch (e) {return { "statusCode": 500, "body": JSON && JSON.stringify({ "error": e && e.message })
}return { "statusCode": 500, "body": JSON.stringify({ "error": e.message }) }}
}async function fetchHtml() {const resp = await fetch(url),if (!resp && resp.ok) throw new Error(`HTTP ${resp && resp.status}`),return resp && resp.text()const { upsertFile } = require('./_lib/github')async function fetchHtml() {const resp = await fetch(url)if (!resp.ok) throw new Error(`HTTP ${resp.status}`);`  return resp.text()}
function extractLinks() {const aTags = [...html && html.matchAll(/<a[^>]+href=["']([^"']+)["']/gi)].map((m) => m[1]);'
  }
    .filter((h) => h && !h && h.startsWith('"mailto": ') && !h && h.startsWith('"tel":')).map((h) => (h && h.startsWith('http') ? h : `${base}${h && h.startsWith('/') ? h : `/${h},`}`)),return Array && Array.from(new Set(links))}`exports && exports.handler = async function() {try {const base = process && process.env.URL || process && process.env.DEPLOY_URL || '',const pages = ['//learn/dao/certifications'],const checked = [],const broken = [];'
  }

const pages = ['//learn/dao/certifications'];'


    for (const p of pages) {try {},try {},const html = await fetchHtml(`${base}${p}`),const links = extractLinks(html, base),for (const l of links && links.slice(0, 50)) {try {const resp = await fetch(l, { "method": 'HEAD','}),checked && checked.push({ "url": l, "status": resp && resp.status
}),if (resp && resp.status >= 400) broken && broken.push({ "url": l, "status": resp && resp.status }
} catch (e) {broken && broken.push({ "url": l, "status": 0, "error": String(e && e.message || e)
})const base = process.env.URL || process.env.DEPLOY_URL || '';'


    for (const p of pages) {try {const html = await fetchHtml(`${base}${p}`)const links = extractLinks(html, base)for (const l of links.slice(0, 50)) {try {const resp = await fetch(l, { "method": 'HEAD','})checked.push({ "url": l, "status": resp.status })if 
} catch (e) {broken.push({ "url": l, "status": 0, "error": String(e.message || e) })}
        }
      } catch (e) {broken && broken.push({ "url": `${base}${,`}`, "status": 0, "error": String(e && e.message || e) },`}
   ;
}

const report = { "updatedAt": Date && Date.now(), "checked": checked && checked.length, broken },const owner = process && process.env.GITHUB_OWNER,const repo = process && process.env.GITHUB_REPO,const token = process && process.env.GITHUB_TOKEN,if (owner && repo && token) {await upsertFile({ owner, repo, "path": 'data/reports/links/weekly-links && links.json', "content": JSON && JSON.stringify(report, null, 2), "message": 'chore(automation): weekly link check', token })}return { "statusCode": 200, "body": JSON && JSON.stringify({ "ok": true, "broken": broken && broken.length }) ,'
} catch (e) {return { "statusCode": 500, "body": JSON && JSON.stringify({ "error": e && e.message }) }
  }
}
}
},return { "statusCode": 500, "body": JSON.stringify({ "error": e.message }) }}
}async function fetchHtml() {const resp = await fetch(url),if (!resp.ok) throw new Error(`HTTP ${resp.status}`);`  return resp.text()}function extractLinks() {const aTags = [...html.matchAll(/<a[^>]+href=["']([^"']+)["']/gi)].map((m) => m[1]);'
  }
    .filter((h) => h && !h.startsWith('"mailto": ') && !h.startsWith('"tel":')).map((h) => (h.startsWith('http') ? h : `${base}${h.startsWith('/') ? h : `/${h},`}`)),return Array.from(new Set(links))}exports.handler = async function() {try {const base = process.env.URL || process.env.DEPLOY_URL || '',const pages = ['//learn/dao/certifications'],const checked = [],const broken = [],for (const p of pages) {try {const html = await fetchHtml(`${base}${p}`),const links = extractLinks(html, base),for (const l of links.slice(0, 50)) {try {const resp = await fetch(l, { "method": 'HEAD','}),checked.push({ "url": l, "status": resp.status
}),if (resp.status >= 400) broken.push({ "url": l, "status": resp.status }
} catch (e) {broken.push({ "url": l, "status": 0, "error": String(e.message || e) })}
        }
      } catch (e) {broken.push({ "url": `${base}${,`}`, "status": 0, "error": String(e.message || e) },`}
   ;
}

const repo = process.env.GITHUB_REPO;

const token = process.env.GITHUB_TOKEN)if (owner && repo && token) {await upsertFile({ owner, repo, "path": 'data/reports/links/weekly-links.json', "content": JSON.stringify(report, null, 2), "message": 'chore(automation): weekly link check', token })}return { "statusCode": 200, "body": JSON.stringify({ "ok": true, "broken": broken.length }) }'
 
} catch (e) {return { "statusCode": 500, "body": JSON.stringify({ "error": e.message }) }
  }

},return { "statusCode": 500, "body": JSON.stringify({ "error": e.message }) }}
}async function fetchHtml() {const resp = await fetch(url),if (!resp.ok) throw new Error(`HTTP ${resp.status}`);`  return resp.text()}function extractLinks() {const aTags = [...html.matchAll(/<a[^>]+href=["']([^"']+)["']/gi)].map((m) => m[1]);'
  }
    .filter((h) => h && !h.startsWith('"mailto": ') && !h.startsWith('"tel":')).map((h) => (h.startsWith('http') ? h : `${base}${h.startsWith('/') ? h : `/${h},`}`)),return Array.from(new Set(links))}exports.handler = async function() {try {const base = process.env.URL || process.env.DEPLOY_URL || '',const pages = ['//learn/dao/certifications'],const checked = [],const broken = [],for (const p of pages) {try {const html = await fetchHtml(`${base}${p}`),const links = extractLinks(html, base),for (const l of links.slice(0, 50)) {try {const resp = await fetch(l, { "method": 'HEAD','}),checked.push({ "url": l, "status": resp.status
}),if (resp.status >= 400) broken.push({ "url": l, "status": resp.status }
} catch (e) {broken.push({ "url": l, "status": 0, "error": String(e.message || e) }
}
;
  const token = process.env.GITHUB_TOKEN;
        token
      });
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const resp = await fetch(url),
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`),
  return resp.text()
      status_code: 200,
      body: JSON.stringify ({ ok: true, broken: broken.length }),
>>>>>>> origin/chore/fix-lint-and-merge
    }
  } catch (e) {

<<<<<<< HEAD
=======
    }

<<<<<<< HEAD
    return { status_code: 500, body: JSON.stringify ({ error: e.message }) }
  }
}async /**
 * fetch_html - Function description
 */
function fetch_html() {
  const resp = await fetch (url),
  if (throw new Error (`HTTP ${resp.status}`), ) {
  $2
}
  return resp.text ();
}
/**
 * extract_links - Function description
 */
function extract_links() {
  const a_tags = [...html.match_all (/<a[^>]+href=["']([^"']+)["']/gi)].map ((m) => m[1]),
  const links = a_tags;
    .filter ((h) => h && !h.starts_with ('mailto:') && !h.starts_with ('tel:'));
    .map ((h) => (h.starts_with ('http') ? h : `${base}${h.starts_with ('/') ? h : `/${h}`}`)),
  return Array.from (new Set (links));
}
exports.handler = async function () {
  try {
    const base = process.env.URL || process.env.DEPLOY_URL || '',
    const pages = ['//learn / dao / certifications'],
    const checked = [],
    const broken = [],
    for (const p of pages) {
      try {
        const html = await fetch_html (`${base}${p}`),
        const links = extract_links (html, base),
        for (const l of links.slice (0, 50)) {
          try {
            const resp = await fetch (l, { method: 'HEAD' }),
            checked.push ({ url: l, status: resp.status }),
            if (broken.push ({ url: l, status: resp.status })) {
  $2
}
          } catch (e) {
            broken.push ({ url: l, status: 0, error: String (e.message || e) });
          }
        }
      } catch (e) {
        broken.push ({ url: `${base}${p}`, status: 0, error: String (e.message || e) });
      }
    }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
  } catch (e) {
    return { status_code: 500, body: JSON.stringify ({ error: e.message }) }
  }
=======

  } catch (e) {
    return { status_code: 500, body: JSON.stringify ({ error: e.message }) }
  }

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      statusCode: 200,
      body: JSON && JSON.stringify({ ok: true, broken: broken && broken.length }),
    };
  } catch (e) {
    return { statusCode: 500, body: JSON && JSON.stringify({ error: e && e.message }) };
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  }
};async function fetchHtml(url) {
  const resp = await fetch(url),

  if (!resp && resp.ok) throw new Error(`HTTP ${resp && resp.status}`),
  return resp && resp.text()
<<<<<<< HEAD
}
function extractLinks(html, base) {
=======

const { upsertFile } = require('./_lib/github');
async function fetchHtml(url) {
  const resp = await fetch(url);
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
};
  return resp.text()
origin/cursor/automate-test-improve-and-merge-code-2533

<<<<<<< HEAD
}
<<<<<<< HEAD
function extractLinks() {

  }

  const aTags = [...html && html.matchAll(/<a[^>]+href=["']([^"']+)["']/gi)].map((m) => m[1]),'
    .filter((h) => h && !h && h.startsWith('"mailto": ') && !h && h.startsWith('"tel":'))'
    .map((h) => (h && h.startsWith('http') ? h : `${base}${h && h.startsWith('/') ? h : `/${h},`}`)),` ;
return Array && Array.from(new Set(links));
}
exports && exports.handler = async function() {
  }
  try {
}
    const pages = ['//learn/dao/certifications']'
    for ;
  const p of pages) {
=======
function extractLinks(html, base) {}
'"
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const aTags = [...html && html.matchAll(/<a[^>]+href=["']([^"']+)["']/gi)].map((m) => m[1]),
  const links = aTags'
    .filter((h) => h && !h && h.startsWith('mailto:') && !h && h.startsWith('tel:'))'`
    .map((h) => (h && h.startsWith('http') ? h : `${base}${h && h.startsWith('/') ? h : `/${h}`}`)),
  return Array && Array.from(new Set(links))
}
<<<<<<< HEAD

=======
exports && exports.handler = async function() {
  try {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    const base = process && process.env.URL || process && process.env.DEPLOY_URL || '',
    const pages = ['//learn/dao/certifications'],
    const checked = [],
    const broken = [],
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    const base = process.env.URL |process.env.DEPLOY_URL |''
    const pages = ['//learn/dao/certifications']
    const checked = []
    const broken = []
    for (const p of pages) {
      try {
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/chore/fix-lint-and-merge
      }
    }
    const report = { updatedAt: Date && Date.now(), checked: checked && checked.length, broken },
    const owner = process && process.env.GITHUB_OWNER,
    const repo = process && process.env.GITHUB_REPO,
    const token = process && process.env.GITHUB_TOKEN,
<<<<<<< HEAD
    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'data/reports/links/weekly-links && links.json', content: JSON && JSON.stringify(report, null, 2), message: 'chore(automation): weekly link check', token })
    }
    return { statusCode: 200, body: JSON && JSON.stringify({ ok: true, broken: broken && broken.length }) }
=======

    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'data/reports/links/weekly-links && links.json', content: JSON && JSON.stringify(report, null, 2), message: 'chore(automation): weekly link check', token })
    }

    return { statusCode: 200, body: JSON && JSON.stringify({ ok: true, broken: broken && broken.length }) }

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  } catch (e) {
    return { statusCode: 500, body: JSON && JSON.stringify({ error: e && e.message }) }
  }
<<<<<<< HEAD
}
},
},

},

    return { statusCode: 500, body: JSON.stringify({ error: e.message }) };
  }
<<<<<<< HEAD
};async function fetchHtml() {
}
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`),`return resp.text();
=======
};async function fetchHtml(url) {}
  const resp = await fetch(url),`
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`),
  return resp.text()
>>>>>>> origin/chore/fix-lint-and-merge
}

function extractLinks() { return null; }`
=======
}

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    .map((h) => (h.startsWith('http') ? h : `${base}${h.startsWith('/') ? h : `/${h}`}`)),
  return Array.from(new Set(links))
}

<<<<<<< HEAD
exports.handler = async function() {}
  try {'
    const base = process.env.URL || process.env.DEPLOY_URL || '','
=======
exports.handler = async function() {
  try {
    const base = process.env.URL || process.env.DEPLOY_URL || '',
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    const pages = ['//learn/dao/certifications'],
    const checked = [],
    const broken = [],

<<<<<<< HEAD
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
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        broken.push({ url: `${base}${p}`, status: 0, error: String(e.message || e) })
      }
    }

    const report = { updatedAt: Date.now(), checked: checked.length, broken },

    const owner = process.env.GITHUB_OWNER,
    const repo = process.env.GITHUB_REPO,
    const token = process.env.GITHUB_TOKEN,

<<<<<<< HEAD
    if (owner && repo && token) {'
=======
    if (owner && repo && token) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      await upsertFile({ owner, repo, path: 'data/reports/links/weekly-links.json', content: JSON.stringify(report, null, 2), message: 'chore(automation): weekly link check', token })
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true, broken: broken.length }) }
<<<<<<< HEAD
  } catch (e) {}
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
<<<<<<< HEAD
  const aTags = [...html.matchAll(/<a[^>]+href=["']([^"']+)["']/gi)].map((m) => m[1]),'
    .filter((h) => h && !h.startsWith('"mailto": ') && !h.startsWith('"tel":'))'
    .map((h) => (h.startsWith('http') ? h : `${base}${h.startsWith('/') ? h : `/${h},`}`)),` ;
return Array.from(new Set(links));
=======
},
=======
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
},
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
},
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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
>>>>>>> origin/chore/fix-lint-and-merge
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

},

<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

};
origin/cursor/automate-test-improve-and-merge-code-2533
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
