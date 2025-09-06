const fs = require('fs');
const path = require('path');
const { upsertFile } = require('./_lib/github');
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

exports.handler = async function () {
  try {
    const usersPath = path.join(process.cwd(), 'data', 'learn', 'users.json');
    const coursesPath = path.join(
      process.cwd(),
      'data',
      'learn',
      'courses.json'
    );
    const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
    const courses = JSON.parse(fs.readFileSync(coursesPath, 'utf-8'));
<<<<<<< HEAD
=======
=======
exports.handler = async function() {
  try {
=======
exports.handler = async function() {
  try {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    const usersPath = path.join(process.cwd(), 'datalearnusers.json'),
    const coursesPath = path.join(process.cwd(), 'datalearncourses.json'),
    const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8')),
    const courses = JSON.parse(fs.readFileSync(coursesPath, 'utf-8')),
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    const summary = {
      updatedAt: Date.now(),
      totals: {
        users: Object.keys(users).length,
        courses: courses.length,
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        completions: Object.values(users).reduce(
          (acc, u) => acc + (u.certifications?.length || 0),
          0
        ),
<<<<<<< HEAD
=======
=======
        completions: Object.values(users).reduce((acc, u) => acc + (u.certifications?.length || 0), 0)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      },
      topBadges: Object.values(users).reduce((map, u) => {
        (u.badges || []).forEach(b => {
          map[b] = (map[b] || 0) + 1;
        });
        return map;
      }, {}),
    };

    const owner = process.env.GITHUB_OWNER;
    const repo = process.env.GITHUB_REPO;
    const token = process.env.GITHUB_TOKEN;

    const content = JSON.stringify(summary, null, 2);

    if (owner && repo && token) {
      await upsertFile({
        owner,
        repo,
        path: 'data/learn/insights-weekly.json',
        content,
        message: 'chore(automation): weekly learning insights',
        token,
      });
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true, summary }) };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) };
  }
<<<<<<< HEAD
};
=======
<<<<<<< HEAD
};
=======
        completions: Object.values(users).reduce((acc, u) => acc + (u.certifications?.length || 0), 0)
      },
      topBadges: Object.values(users).reduce((map, u) => {
        (u.badges || []).forEach((b) => { map[b] = (map[b] || 0) + 1 }),
        return map
      }, {})
    },

    const owner = process.env.GITHUB_OWNER,
    const repo = process.env.GITHUB_REPO,
    const token = process.env.GITHUB_TOKEN,

    const content = JSON.stringify(summary, null, 2),

    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'data/learn/insights-weekly.json', content, message: 'chore(automation): weekly learning insights', token })
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true, summary }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
},
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
},
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
