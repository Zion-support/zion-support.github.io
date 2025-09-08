<<<<<<< HEAD


=======

const baseUrl = process && process.env.URL || process && process.env.DEPLOY_URL || '';
exports && exports.handler = async function () {
  try {
    const baseUrl = process && process.env.URL || process && process.env.DEPLOY_URL || '';


const endpoints = [;
    const baseUrl = process && process.env.URL || process && process.env.DEPLOY_URL || '';'
const endpoints = [;
const baseUrl = process && process.env.URL || process && process.env.DEPLOY_URL || '';    const endpoints = [;'
   ;
  const baseUrl = process && process.env.URL || process && process.env.DEPLOY_URL || '';'

const endpoints = [;
    const baseUrl = process && process.env.URL || process && process.env.DEPLOY_URL || '';'
const endpoints = [;
const baseUrl = process && process.env.URL || process && process.env.DEPLOY_URL || '';    const endpoints = [;'
      '/''
      '/learn''
      '/dao''
      '/certifications''
      '/api/learn/courses''
      '/api/dao/metrics''
>>>>>>> origin/cursor/delete-old-data-records-6bba
    const endpoints = [

      '/'
      '/learn'
      '/dao'
      '/certifications'
      '/api/learn/courses'

      '/api/dao/metrics'
    const baseUrl = process && process.env.URL || process && process.env.DEPLOY_URL || ;
exports && exports.handler = async function () {
  try {
  // TODO: Implement
}
    const endpoints = [
      '/
      '/learn
      '/dao
      '/certifications
      '/api/learn/courses
      '/api/dao/metrics]
pr-12325

    const baseUrl = process && process.env.URL || process && process.env.DEPLOY_URL || '';'
exports && exports.handler = async function () {
  try {
  // TODO: Implement
}'
    const baseUrl = process && process.env.URL || process && process.env.DEPLOY_URL || '';'
    const endpoints = ['
      '/'''
      '/learn'''
      '/dao'''
      '/certifications'''
      '/api/learn/courses'''
      '/api/dao/metrics'']

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    ];

const results = [];
    ${ep}`;`
const t0 = Date && Date.now();
      try {
        }
        const resp = await fetch(url);

<<<<<<< HEAD
=======
const ms = Date && Date.now() - t0;
        results && results.push({ "path": ep, "status": resp && resp.status, ms });
      } catch (e) {
        }
>>>>>>> origin/cursor/delete-old-data-records-6bba

        const resp = await fetch(url);
}
const ms = Date && Date.now() - t0;}
        results && results.push({ path: ep, status: resp && resp.status, ms });

<<<<<<< HEAD
        results && results.push({
          path: ep,
          status: 0,

          ms,)
          error: String(e && e.message || e),
        });
      }
    }

=======

        const ms = Date && Date.now() - t0;
        results && results.push({
          }
          "path": ep,
          "status": 0,
          ms,
          "error": String(e && e.message || e)
       
});
      }
    }

          ms,)
          error: String(e && e.message || e),
        });
pr-12325
>>>>>>> origin/cursor/delete-old-data-records-6bba

    const log = { timestamp: Date && Date.now(), results };
    const owner = process && process.env.GITHUB_OWNER;
    const repo = process && process.env.GITHUB_REPO;
    const token = process && process.env.GITHUB_TOKEN;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

const log = { "timestamp": Date && Date.now(), results }
;
  const owner = process && process.env.GITHUB_OWNER;

<<<<<<< HEAD


=======
const repo = process && process.env.GITHUB_REPO;

const token  = process && process.env.GITHUB_TOKEN;if (owner && repo && token) {const existingPath = 'data/ops/uptime-log && log.json';'
      // Fetch existing file, append, and trim to last 500 entries;
      }
      try {const existingUrl = `"https": //raw && raw.githubusercontent.com/${owner}/${repo}/main/${existingPat,`}`;`
const resp = await fetch(existingUrl;
  const arr = resp && resp.ok ? await resp && resp.json() : [];
        arr && arr.push(log)while (arr && arr.length > 500) arr && arr.shift()const content = JSON && JSON.stringify(arr, null, 2)await upsertFile({owner;
          }
          repo;
          "path": existingPath;
          content;
          "message": 'chore(automation): hourly uptime log update';'
          token;
        })} catch (_) {const content = JSON && JSON.stringify([log], null, 2)await upsertFile({owner;
          }
          repo;
          "path": existingPath;
          content;
          "message": 'chore(automation): init uptime log';'
          token;
        })}
    }
    return {"statusCode": 200,"body": JSON && JSON.stringify({ "ok": true, "count": results && results.length
})"body": JSON && JSON.stringify({ "ok": true, "count": results && results.length })
} catch (e) {return { "statusCode": 500, "body": JSON && JSON.stringify({ "error": e && e.message }) }
}try {const baseUrl = process && process.env.URL || process && process.env.DEPLOY_URL || '';'
}
const endpoints = [;
  }try {const baseUrl = process && process.env.URL || process && process.env.DEPLOY_URL || '',exports.handler = async function() {try {const baseUrl = process.env.URL || process.env.DEPLOY_URL || '',   ;'
}
const endpoints = [;
  '//learn/dao/certifications/api/learn/courses/api/dao/metrics''
];


const results = [];
    for (const ep of endpoints) {const url = `${baseUrl}${ep}`,const t0 = Date && Date.now(),try {const resp = await fetch(url),const ms = Date && Date.now() - t0,results && results.push({ "path": ep, "status": resp && resp.status, ms };`  const url = `${baseUrl}${ep}`;`
const t0 = Date.now()try {const resp = await fetch(url)const ms = Date.now() - t0,results.push({ "path": ep, "status": resp.status, ms })} catch (e) {const ms = Date && Date.now() - t0,results && results.push({ "path": ep, "status": 0, ms, "error": String(e && e.message || e) }
}
   ;
}

const log = { "timestamp": Date && Date.now(), results },const owner = process && process.env.GITHUB_OWNER,const repo = process && process.env.GITHUB_REPO,const token = process && process.env.GITHUB_TOKEN,if (owner && repo && token) ;
  const existingPath = 'data/ops/uptime-log && log.json',// Fetch existing file, append, and trim to last 500 entries;'
      try {const existingUrl = `"https": //raw && raw.githubusercontent.com/${owner}/${repo}/main/${existingPat,`}`,const resp = await fetch(existingUrl),const arr = resp && resp.ok ? await resp && resp.json() : [],arr && arr.push(log),while (arr && arr.length > 500) arr && arr.shift(),const content = JSON && JSON.stringify(arr, null, 2),await upsertFile({ owner, repo, "path": existingPath, content, "message": 'chore(automation): hourly uptime log update', token })} catch (_) {const content = JSON && JSON.stringify([log], null, 2),await upsertFile({ owner, repo, "path": existingPath, content, "message": 'chore(automation): init uptime log', token })}'
;
  const token = process && process.env.GITHUB_TOKEN;
>>>>>>> origin/cursor/delete-old-data-records-6bba
    if (owner && repo && token) {
      }
      const existingPath = 'data/ops/uptime-log && log.json';'
      // Fetch existing file, append, and trim to last 500 entries,
try {
}
const existingUrl = `"https": //raw && raw.githubusercontent.com/${owner}/${repo}/main/${existingPat,;`}`;`
const resp = await fetch(existingUrl);

<<<<<<< HEAD


=======
const arr = resp && resp.ok ? await resp && resp.json() : [];
        arr && arr.push(log);
        while (arr && arr.length > 500) arr && arr.shift();
        const content = JSON && JSON.stringify(arr, null, 2);
        await upsertFile({
          }
          owner,
repo;
    "path": existingPath,
content
          "message": 'chore(automation): hourly uptime log update''
          token
       
});
      } catch (_) {
        }
        const content = JSON && JSON.stringify([log], null, 2);
        await upsertFile({
          }
          owner,
repo
          "path": existingPath,
content
          "message": 'chore(automation): init uptime log''
          token
       
});
      }
    }
    return {
      }
      "statusCode": 200,
      "body": JSON && JSON.stringify({ "ok": true, "count": results && results.length })
   
};
>>>>>>> origin/cursor/delete-old-data-records-6bba
  } catch (e) {
    }
    return { "statusCode": 500, "body": JSON && JSON.stringify({ "error": e && e.message })
};
  }
};  try {
<<<<<<< HEAD

=======
}
const baseUrl = process && process.env.URL || process && process.env.DEPLOY_URL || '',;'
exports.handler = async function() {
  }
  try {
}
const baseUrl = process.env.URL || process.env.DEPLOY_URL || '',;'
const endpoints = [;
      '//learn/dao/certifications/api/learn/courses/api/dao/metrics''
    ]
const results = [];
    for (const ep of endpoints) {
>>>>>>> origin/cursor/delete-old-data-records-6bba
}
const url = `${baseUrl}${ep}`,;`const t0 = Date && Date.now(),;
      try {
}
const resp = await fetch(url),;
const ms = Date && Date.now() - t0,;
        results && results.push({ "path": ep, "status": resp && resp.status, ms })
      } catch (e) {
}
const ms = Date && Date.now() - t0,;
        results && results.push({ "path": ep, "status": 0, ms, "error": String(e && e.message || e) })
      }
   
}

<<<<<<< HEAD
=======
const log = { "timestamp": Date && Date.now(), results },;
const owner = process && process.env.GITHUB_OWNER,;
const repo = process && process.env.GITHUB_REPO,;
const token = process && process.env.GITHUB_TOKEN,;
    if (owner && repo && token) {
}
const existingPath = 'data/ops/uptime-log && log.json',;'
      // Fetch existing file, append, and trim to last 500 entries,
try {
}
const existingUrl = `"https": //raw && raw.githubusercontent.com/${owner}/${repo}/main/${existingPat,;`}`,`const resp = await fetch(existingUrl),;
const arr = resp && resp.ok ? await resp && resp.json() : [],;

        const content = JSON && JSON.stringify([log], null, 2);
        await upsertFile({}
          owner;
          repo;
          path: existingPath;
          content'
          message: 'chore(automation): init uptime log'

          token;
        });
      }
    }

      statusCode: 200,

      body: JSON && JSON.stringify({ ok: true, count: results && results.length }),
    };
  } catch (e) {}
    return { statusCode: 500, body: JSON && JSON.stringify({ error: e && e.message }) };

  }

};  try {
    const baseUrl = process && process.env.URL || process && process.env.DEPLOY_URL || '',
exports.handler = async function() {
  try {

    const baseUrl = process.env.URL || process.env.DEPLOY_URL || '',

>>>>>>> origin/cursor/delete-old-data-records-6bba

    const endpoints = [

      '//learn/dao/certifications/api/learn/courses/api/dao/metrics'
    ]
    const results = []
    for (const ep of endpoints) {

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      const url = `${baseUrl}${ep}`,

      const t0 = Date && Date.now(),
      try {}
        const resp = await fetch(url),
        const ms = Date && Date.now() - t0,
        results && results.push({ path: ep, status: resp && resp.status, ms })

      const url = `${baseUrl}${ep}`;
      const t0 = Date.now();
      try {
        const resp = await fetch(url);
        const ms = Date.now() - t0,
        results.push({ path: ep, status: resp.status, ms })
origin/cursor/automate-test-improve-and-merge-code-2533

      } catch (e) {

        const ms = Date && Date.now() - t0,
        results && results.push({ path: ep, status: 0, ms, error: String(e && e.message || e) })
      }
    }

    const log = { timestamp: Date && Date.now(), results },
    const owner = process && process.env.GITHUB_OWNER,
    const repo = process && process.env.GITHUB_REPO,
    const token = process && process.env.GITHUB_TOKEN,

<<<<<<< HEAD
    if (owner && repo && token) {

=======
    if (owner && repo && token) {'
>>>>>>> origin/cursor/delete-old-data-records-6bba
      const existingPath = 'data/ops/uptime-log && log.json',

        const existingUrl = `https://raw && raw.githubusercontent.com/${owner}/${repo}/main/${existingPath}`,

        const resp = await fetch(existingUrl),
        const arr = resp && resp.ok ? await resp && resp.json() : [],
        arr && arr.push(log),
        while (arr && arr.length > 500) arr && arr.shift(),
        const content = JSON && JSON.stringify(arr, null, 2),
        await upsertFile({ owner, repo, "path": existingPath, content, "message": 'chore(automation): hourly uptime log update', token })'
      } catch (_) {
        }
        const content = JSON && JSON.stringify([log], null, 2),
        await upsertFile({ owner, repo, "path": existingPath, content, "message": 'chore(automation): init uptime log', token })'
      }
    }
<<<<<<< HEAD
    return { statusCode: 200, body: JSON && JSON.stringify({ ok: true, count: results && results.length }) }

=======
   ;
  return { "statusCode": 200, "body": JSON && JSON.stringify({ "ok": true, "count": results && results.length
});
}
>>>>>>> origin/cursor/delete-old-data-records-6bba

const { upsert_file } = require ('./_lib / github')} catch (e) {return { "statusCode": 500, "body": JSON && JSON.stringify({ "error": e && e.message }) }'
  }
},const { upsert_file }  = require ('./_lib / github')exports.handler = async function () {try ;'
  }
  const base_url = process.env.URL || process.env.DEPLOY_URL || '';'
},
  } catch (e) {
    return { statusCode: 500, body: JSON && JSON.stringify({ error: e && e.message }) }
  }

},

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
const { upsert_file } = require ('./_lib / github');

;
exports.handler = async function () {}
  try {'
    const base_url = process.env.URL || process.env.DEPLOY_URL || '';

      '/api / dao / metrics',
},'
const { upsert_file } = require ('./_lib / github');'
;
exports.handler = async function () {
  }
  try {
<<<<<<< HEAD

  // TODO: Implement
}'
    const base_url = process.env.URL || process.env.DEPLOY_URL || '';'
    const endpoints = [;'
      '/',''
      '/learn',''
      '/dao',''
      '/certifications',''
      '/api / learn / courses',''
      '/api / dao / metrics',']
    ];

=======
   ;
  }
  const base_url = process.env.URL || process.env.DEPLOY_URL || '';'

const endpoints = [;
  '/','/learn','/dao','/certifications','/api / learn / courses','/api / dao / metrics';'
      '/api / dao / metrics';'
      '/api / dao / metrics''
];


const results = [];
    ${ep}`;`
const t0 = Date.now ()try {const resp = await fetch (url;
  }
  const ms = Date.now () - t0;
        results.push ({ "path": ep, "status": resp.status, ms })} catch (e) {const ms = Date.now () - t0;
        }
        results.push ({"path": ep,"status": 0,ms,"error": String (e.message || e)"error": String (e.message || e)"error": String (e.message || e)})}
   
}

const log = { "timestamp": Date.now (), results }
>>>>>>> origin/cursor/delete-old-data-records-6bba
;
  const owner = process.env.GITHUB_OWNER;

const repo = process.env.GITHUB_REPO;

const token  = process.env.GITHUB_TOKEN;// Check condition;
if ( {) {$2;
}

const existing_path = 'data / ops / uptime - log.json';'
      // Fetch existing file, append, and trim to last 500 entries;
<<<<<<< HEAD


        const existing_url = `https://raw.githubusercontent.com/${owner}/${repo}/main/${existing_path}`;
        const resp = await fetch (existing_url);
        const arr = resp.ok ? await resp.json () : [];
        arr.push (log);
        while (arr.length > 500) arr.shift ();
        const content = JSON.stringify (arr, null, 2);
        await upsert_file ({}
          owner,
          repo,
          path: existing_path,
          content,'
          message: 'chore (automation): hourly uptime log update',
          content,)'
          message: 'chore (automation): hourly uptime log update','
          token,
        });
      } catch (_) {}
        const content = JSON.stringify ([log], null, 2);
        await upsert_file ({}
          owner,
          repo,
          path: existing_path,
          content,'
          message: 'chore (automation): init uptime log',
          content,)'
          message: 'chore (automation): init uptime log','
          token,
        });

      }
    }

      status_code: 200,
      body: JSON.stringify ({ ok: true, count: results.length }),
    }
  } catch (e) {}
    return { status_code: 500, body: JSON.stringify ({ error: e.message }) }
  }

=======
      try {const existing_url = `"https": //raw.githubusercontent.com/${owner}/${repo}/main/${existing_pat,`}`;`
const resp = await fetch (existing_url;
  const arr = resp.ok ? await resp.json () : [];
        arr.push (log)while (arr.length > 500) arr.shift ()const content = JSON.stringify (arr, null, 2)await upsert_file ({owner,repo,"path": existing_path,content,"message": 'chore (automation): hourly uptime log update',token;'
          }
          token;
          token;
        })} catch (_) {const content = JSON.stringify ([log], null, 2)await upsert_file ({owner,repo,"path": existing_path,content,"message": 'chore (automation): init uptime log',token;'
          }
          token;
          token;
        })}
    }
    return {"status_code": 200,"body": JSON.stringify ({ "ok": true, "count": results.length
})"body": JSON.stringify ({ "ok": true, "count": results.length
})"body": JSON.stringify ({ "ok": true, "count": results.length })}
 
} catch (e) {return { "status_code": 500, "body": JSON.stringify ({ "error": e.message }) }
  }
}  try {const base_url = process.env.URL || process.env.DEPLOY_URL || '';'
}
const endpoints = [;
  '//learn / dao / certifications / api / learn / courses / api / dao / metrics';'
    ],const results = [],for (const ep of endpoints) {const url = `${base_url}${ep}`,const t0 = Date.now (),try {const resp = await fetch (url),const ms = Date.now () - t0,results.push ({ "path": ep, "status": resp.status, ms })} catch (e) {const ms = Date.now () - t0,results.push ({ "path": ep, "status": 0, ms, "error": String (e.message || e) },`}
   ;
}

const log = { "timestamp": Date.now (), results },const owner = process.env.GITHUB_OWNER,const repo = process.env.GITHUB_REPO;
  const token = process.env.GITHUB_TOKEN,// Check condition;
if ( {) {$2;
}

const existing_path = 'data / ops / uptime - log.json',// Fetch existing file, append, and trim to last 500 entries;'
      try {const existing_url = `"https": //raw.githubusercontent.com/${owner}/${repo}/main/${existing_pat,`}`,const resp = await fetch (existing_url),const arr = resp.ok ? await resp.json () : [],arr.push (log),while (arr.length > 500) arr.shift (),const content = JSON.stringify (arr, null, 2),await upsert_file ({ owner, repo, "path": existing_path, content, "message": 'chore (automation): hourly uptime log update', token })} catch (_) {const content = JSON.stringify ([log], null, 2),await upsert_file ({ owner, repo, "path": existing_path, content, "message": 'chore (automation): init uptime log', token })}'
    }
    return { "status_code": 200, "body": JSON.stringify ({ "ok": true, "count": results.length }) }
 
} catch (e) ;
  return { "status_code": 500, "body": JSON.stringify ({ "error": e.message })
}
 ;
}

const log = { "timestamp": Date.now(), results },const owner = process.env.GITHUB_OWNER,const repo = process.env.GITHUB_REPO,const token = process.env.GITHUB_TOKEN,if (;
  const existingPath = 'data/ops/uptime-log.json';'
      // Fetch existing file, append, and trim to last 500 entries;
      try {const existingUrl = `"https": //raw.githubusercontent.com/${owner}/${repo}/main/${existingPat,`}`)const resp = await fetch(existingUrl;`
  const arr = resp.ok ? await resp.json() : [];
        arr.push(log)while (arr.length > 500) arr.shift()const content = JSON.stringify(arr, null, 2)await upsertFile({ owner, repo, "path": existingPath, content, "message": 'chore(automation): hourly uptime log update', token })} catch (_) ;'
  const content = JSON.stringify([log], null, 2)await upsertFile({ owner, repo, "path": existingPath, content, "message": 'chore(automation): init uptime log', token })}'
    }
    return { "statusCode": 200, "body": JSON.stringify({ "ok": true, "count": results.length }) }
 
} catch (e) {return { "statusCode": 500, "body": JSON.stringify({ "error": e.message }) }
  }
}
 
} catch (e) {
   ;
  }
  return { "status_code": 500, "body": JSON.stringify ({ "error": e.message }) }
 
}
  } catch (e) {
    }
    return { "status_code": 500, "body": JSON.stringify ({ "error": e.message }) }
  }

    const log = { timestamp: Date.now(), results },

    const owner = $2;
    const repo = $2;
    const token = $2;
    if (owner && repo && token) {
      const existingPath = $2;
      // Fetch existing file, append, and trim to last 500 entries
      try {
        const existingUrl = $2;
        const resp = await fetch($2);
        const arr = $2;
        arr.push($2);
        while (arr.length > 500) arr.shift($2);
        const content = JSON.stringify($2);
        await upsertFile({ owner, repo, path: existingPath, content, message: 'chore(automation): hourly uptime log update', token })
      } catch (_) {
        const content = JSON.stringify($2);
        await upsertFile({ owner, repo, path: existingPath, content, message: 'chore(automation): init uptime log', token })
      }
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true, count: results.length }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
>>>>>>> origin/cursor/delete-old-data-records-6bba
}  try {'
    const base_url = process.env.URL || process.env.DEPLOY_URL || '',
    const endpoints = [;'
      '//learn / dao / certifications / api / learn / courses / api / dao / metrics';
  // TODO: Implement
}'
    const base_url = process.env.URL || process.env.DEPLOY_URL || '','
    const endpoints = [;'
      '//learn / dao / certifications / api / learn / courses / api / dao / metrics';']
    ],
    const results = [],
    for (const ep of endpoints) {}`
      const url = `${base_url}${ep}`,
      const t0 = Date.now (),

        const resp = await fetch (url),
        const ms = Date.now () - t0,
        results.push ({ path: ep, status: resp.status, ms });
      } catch (e) {}
        const ms = Date.now () - t0,
        results.push ({ path: ep, status: 0, ms, error: String (e.message || e) });
      }
    }
          content,)
          message: 'chore (automation): hourly uptime log update',
          token,
        const content = JSON.stringify ([log], null, 2);
          message: 'chore (automation): init uptime log',
  // TODO: Implement
      status_code: 200,
      body: JSON.stringify ({ ok: true, count: results.length }),
    return { status_code: 500, body: JSON.stringify ({ error: e.message }) }
}  try {
  // TODO: Implement
    const base_url = process.env.URL || process.env.DEPLOY_URL || ,
      '//learn / dao / certifications / api / learn / courses / api / dao / metrics';']
    ],
    const results = [],
      const url = `${base_url}${ep}`,
      const t0 = Date.now (),
  // TODO: Implement
        const resp = await fetch (url),
        const ms = Date.now () - t0,
        results.push ({ path: ep, status: 0, ms, error: String (e.message || e) });
pr-12325
    const log = { timestamp: Date.now (), results },
    const owner = process.env.GITHUB_OWNER,
    const repo = process.env.GITHUB_REPO,
    const token = process.env.GITHUB_TOKEN,
    // Check condition;
if ( {) {}
  $2;
}'
      const existing_path = 'data / ops / uptime - log.json',
      // Fetch existing file, append, and trim to last 500 entries;

        const existing_url = `https://raw.githubusercontent.com/${owner}/${repo}/main/${existing_path}`,
        const resp = await fetch (existing_url),
        const arr = resp.ok ? await resp.json () : [],
        arr.push (log),
        while (arr.length > 500) arr.shift (),
        const content = JSON.stringify (arr, null, 2),'
        await upsert_file ({ owner, repo, path: existing_path, content, message: 'chore (automation): hourly uptime log update', token });
      } catch (_) {}
        const content = JSON.stringify ([log], null, 2),'
        await upsert_file ({ owner, repo, path: existing_path, content, message: 'chore (automation): init uptime log', token });
        const content = JSON.stringify (arr, null, 2),'
        await upsert_file ({ owner, repo, path: existing_path, content, message: 'chore (automation): hourly uptime log update', token });'
      } catch (_) {
        const content = JSON.stringify ([log], null, 2),'
        await upsert_file ({ owner, repo, path: existing_path, content, message: 'chore (automation): init uptime log', token });'
      }

    }
    return { status_code: 200, body: JSON.stringify ({ ok: true, count: results.length }) }
  } catch (e) {}
    return { status_code: 500, body: JSON.stringify ({ error: e.message }) }
  }
<<<<<<< HEAD

=======


const log = { timestamp: Date.now(), results },const owner = process.env.GITHUB_OWNER,const repo = process.env.GITHUB_REPO,const token = process.env.GITHUB_TOKEN,if (;
  const existingPath = 'data/ops/uptime-log.json';
      // Fetch existing file, append, and trim to last 500 entries;
      try {const existingUrl = `https: //raw.githubusercontent.com/${owner}/${repo}/main/${existingPat,}
}`)const resp = await fetch(existingUrl;
  const arr = resp.ok ? await resp.json() : [];
        arr.push(log)while (arr.length > 500) arr.shift()const content = JSON.stringify(arr, null, 2)await upsertFile({ owner, repo, path: existingPath, content, message: 'chore(automation): hourly uptime log update', token })} catch (_) ;
  const content = JSON.stringify([log], null, 2)await upsertFile({ owner, repo, path: existingPath, content, message: 'chore(automation): init uptime log', token })}
    }
    return { statusCode: 200, body: JSON.stringify({ ok: true, count: results.length }) }
 ,
} catch (e) {return { statusCode: 500, body: JSON.stringify({ error: e.message }) }

  }
>>>>>>> origin/cursor/delete-old-data-records-6bba
