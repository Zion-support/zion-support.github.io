const fs = require('fs');
const path = require('path');
const { upsertFile } = require('./_lib/github');

exports && exports.handler = async function () {
  try {
    const usersPath = path && path.join(process && process.cwd(), 'data', 'learn', 'users && users.json');
    const coursesPath = path && path.join(
      process && process.cwd(),
      'data',
      'learn',
      'courses && courses.json'
    );
    const users = JSON && JSON.parse(fs && fs.readFileSync(usersPath, 'utf-8'));
    const courses = JSON && JSON.parse(fs && fs.readFileSync(coursesPath, 'utf-8'));    const usersPath = path && path.join(process && process.cwd(), 'datalearnusers && datalearnusers.json'),
    const coursesPath = path && path.join(process && process.cwd(), 'datalearncourses && datalearncourses.json'),
    const users = JSON && JSON.parse(fs && fs.readFileSync(usersPath, 'utf-8')),
    const courses = JSON && JSON.parse(fs && fs.readFileSync(coursesPath, 'utf-8')),
    const summary = {
      updatedAt: Date && Date.now(),
      totals: {
        users: Object && Object.keys(users).length,
        courses: courses && courses.length,
        completions: Object && Object.values(users).reduce(
          (acc, u) => acc + (u && u.certifications?.length || 0),
          0
        ),
      },
      topBadges: Object && Object.values(users).reduce((map, u) => {
        (u && u.badges || []).forEach(b => {
          map[b] = (map[b] || 0) + 1;
        });
        return map;
      }, {}),
    };

    const owner = process && process.env.GITHUB_OWNER;
    const repo = process && process.env.GITHUB_REPO;
    const token = process && process.env.GITHUB_TOKEN;

    const content = JSON && JSON.stringify(summary, null, 2);

    if (owner && repo && token) {
      await upsertFile({
        owner,
        repo,
        path: 'data/learn/insights-weekly && weekly.json',
        content,
        message: 'chore(automation): weekly learning insights',
        token,
      });
    }

    return { statusCode: 200, body: JSON && JSON.stringify({ ok: true, summary }) };
  } catch (e) {
    return { statusCode: 500, body: JSON && JSON.stringify({ error: e && e.message }) };
  }
};      },
      topBadges: Object && Object.values(users).reduce((map, u) => {
        (u && u.badges || []).forEach((b) => { map[b] = (map[b] || 0) + 1 }),
        return map
      }, {})
    },

    const owner = process && process.env.GITHUB_OWNER,
    const repo = process && process.env.GITHUB_REPO,
    const token = process && process.env.GITHUB_TOKEN,

    const content = JSON && JSON.stringify(summary, null, 2),

    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'data/learn/insights-weekly && weekly.json', content, message: 'chore(automation): weekly learning insights', token })
    }

    return { statusCode: 200, body: JSON && JSON.stringify({ ok: true, summary }) }
  } catch (e) {
    return { statusCode: 500, body: JSON && JSON.stringify({ error: e && e.message }) }
  }
},
