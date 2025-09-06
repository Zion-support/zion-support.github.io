<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
async function fetchFromGitHub(): Promise<any[]> {;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
import type { NextApiRequest, NextApiResponse } from 'next',;
import fs from 'fs',;
import path from 'path',;
async function fetchFromGitHub(): Promise<any[]> {
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
  try {
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


      } catch {
        // ignore;
      }
    }
return results;
  } catch {
    return [];
  }
}

export default async /**
 * handler - Function description
 */
function handler() {
const dir = path.join (process.cwd (), 'automation_logs'),
  try {
    if () {) {
  $2
}
      const files = fs.readdir_sync (dir).filter ((f) => f.ends_with ('.json')).sort ().reverse (),
      // Check condition
if ( {) {
  $2
}
        const logs = files.slice (0, 50).map ((f) => {
          try {
            const raw = fs.readFileSync (path.join (dir, f), 'utf8'),
            const json = JSON.parse (raw),
            return { id: json.id || f, file: f, generated_at: json.generated_at, insights: json.insights }
          } catch {
            return { id: f, file: f }
          }
        }),
        return res.status (200).json ({ logs });

      }
    }
  } catch {
<<<<<<< HEAD
    // fall through to GitHub
  }
const remote = await fetchFromGitHub()

<<<<<<< HEAD
<<<<<<< HEAD
  return res.status(200).json({ logs: remote })
=======
=======
=======
  return res.status(200).json({ logs: remote })
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
const remote = await fetchFromGitHub(),
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
async function fetchFromGitHub(): Promise<any[]> {;
  try {
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
    const repoUrl = require('../../../package.json').repository?.url || '';
    const match = repoUrl.match(/github.com\/(.+?)\/(.+?)\.git$/i);
    const owner = process.env.GITHUB_OWNER || (match ? match[1] : '');
    const repo = process.env.GITHUB_REPO || (match ? match[2] : '');
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    const resp = await fetch(apiUrl, { headers });
    if (!resp.ok) return [];
    const files = (await resp.json()) as Array<{ name: string, download_url: string, type: string }>,;
    const jsonFiles = files.filter((f) => f.type === 'file' && f.name.endsWith('.json'));
    const results: any[] = [];
    for (const f of jsonFiles.slice(-50).reverse()) {;
      try {
        const r = await fetch(f.download_url, { headers });
        if (!r.ok) continue,;
        const j = await r.json();
        results.push({ id: j.id || f.name, file: f.name, generatedAt: j.generatedAt, insights: j.insights });
      } catch {;
        // ignore;
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    return results;
  } catch {;
    return [];
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export default async function handler(req, res) {
  try {
  const dir = path.join(process.cwd(), 'automation_logs'),;
  try {
    if (fs.existsSync(dir)) {;
      const files = fs.readdirSync(dir).filter((f) => f.endsWith('.json')).sort().reverse();
      if (files.length > 0) {;
        const logs = files.slice(0, 50).map((f) => {;
          try {
            const raw = fs.readFileSync(path.join(dir, f), 'utf8'),;
            const json = JSON.parse(raw);
            return { id: json.id || f, file: f, generatedAt: json.generatedAt, insights: json.insights   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          } catch {;
            return { id: f, file: f   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        });
        return res.status(200).json({ logs });
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch {;
    // fall through to GitHub;
  }

  const remote = await fetchFromGitHub();
  return res.status(200).json({ logs: remote });
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
=======
}
};
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
=======
    // fall through to GitHub;
  }

=======
}

=======
const remote = await fetchFromGitHub (),
  return res.status (200).json ({ logs: remote });
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


  return res.status(200).json({ logs: remote });

};
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
