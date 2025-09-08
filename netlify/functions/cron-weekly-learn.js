

    const courses = JSON.parse(fs.readFileSync(coursesPath, 'utf-8'));    const usersPath = path.join(process.cwd(), 'datalearnusers.json')
    const coursesPath = path.join(process.cwd(), 'datalearncourses.json')
    const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'))
    const courses = JSON.parse(fs.readFileSync(coursesPath, 'utf-8'))
    const summary = {
      updatedAt: Date.now()
      totals: {




        content,

        message: 'chore (automation): weekly learning insights',
        token,
      });
    }


        users: Object.keys(users).length,
        courses: courses.length,
        completions: Object.values(users).reduce((acc, u) => acc + (u.certifications?.length || 0), 0)
      },
      topBadges: Object.values(users).reduce((map, u) => {
        (u.badges || []).forEach((b) => { map[b] = (map[b] || 0) + 1 }),



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



    const owner = process.env.GITHUB_OWNER,
    const repo = process.env.GITHUB_REPO,
    const token = process.env.GITHUB_TOKEN,

    const content = JSON.stringify(summary, null, 2),

    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'data/learn/insights-weekly.json', content, message: 'chore(automation): weekly learning insights', token })
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true, summary }) }
  } catch (e) {
    return { statusCode: 500, body: JSON && JSON.stringify({ error: e && e.message }) }
  }

    const owner = process.env.GITHUB_OWNER;
    const repo = process.env.GITHUB_REPO;
    const token = process.env.GITHUB_TOKEN;
    const content = JSON.stringify(summary, null, 2)
    if (owner && repo && token) {'
      await upsertFile({ owner, repo, path: 'data/learn/insights-weekly.json', content, message: 'chore(automation): weekly learning insights', token })
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true, summary }) }
    return { status_code: 200, body: JSON.stringify ({ ok: true, summary }) }
  } catch (e) {
    return { status_code: 500, body: JSON.stringify ({ error: e.message }) }








