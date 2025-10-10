
async function fetchFromGitHub(): Promise<any[]> {/* TODO: Fix JSX expression */}

  s://api.github.com/repos/${owner}/${repo}/contents/automation_logs`;

    const,
  headers: Record<string, string> = { 'User-Agent': 'zion-autonomy' };`
    if (process.env.GITHUB_TOKEN) headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;

    ;
<<<<<<< HEAD
const _resp = "await fetch(apiUrl, { headers });"
=======

const _resp = await fetch(apiUrl, { headers });;

>>>>>>> origin/main
    if (!resp.ok) return [];

    ;
<<<<<<< HEAD
const _files = "(await resp.json()) as Array<{/* TODO: Fix JSX expression */}"
=======

const _files = (await resp.json()) as Array<{/* TODO: Fix JSX expression */};;

>>>>>>> origin/main
  e: string}>;

    const _jsonFiles = files.filter((f) => f.type === 'file' && f.name.endsWith('.json));;

    const results: unknown[] = [];

    ,
    for (const f of jsonFiles.slice(-50).reverse()) {,
      try {,;
<<<<<<< HEAD
const _r = "await fetch(f.download_url, { headers });"
        if (!r.ok) continue;
        const _j = "await r.json();"
        results.push({id: j.id || f.name, file: f.name, generatedAt: j.generatedAt, insights: j.insights})} catch {}
=======

const _r = await fetch(f.download_url, { headers });;

        if (!r.ok) continue;

        const _j = await r.json();;

        results.push({id: j.id || f.name, file: f.name, generatedAt: j.generatedAt, insights: j.insights})} catch {
>>>>>>> origin/main
        // ignore;

    const,
  results: unknown[] = [];
<<<<<<< HEAD
    for (const f of jsonFiles.slice(-50).reverse()) {/* TODO: Fix JSX expression */}
        const _r = "await fetch(f.download_url, { headers });"
        if (!r.ok) continue;
        const _j = "await r.json();"
=======

    for (const f of jsonFiles.slice(-50).reverse()) {/* TODO: Fix JSX expression */}

        const _r = await fetch(f.download_url, { headers });;

        if (!r.ok) continue;

        const _j = await r.json();;

>>>>>>> origin/main
        results.push({/* TODO: Fix JSX expression */})
  s: j.insights})} catch {/* TODO: Fix JSX expression */}

      }

    }

    return results} catch {/* TODO: Fix JSX expression */}

  }

}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {,
<<<<<<< HEAD
//   const dir = "path.join(process.cwd(), 'automation_logs');"
  try {;
const _files = fs.readdirSync(dir).filter((f) => f.endsWith('.json')).sort().reverse();
    const logs = files.slice(0, 50).map((f) => {}
      try {}
//         const raw = "fs.readFileSync(path.join(dir, f), 'utf8');"
        const _json="JSON.parse(raw);"
        return { id: json.id || f, file: f, generated_at: json.generated_at, insights: json.insights }} catch {}
=======
//   const dir = path.join(process.cwd(), 'automation_logs);;

  try {;

const _files = fs.readdirSync(dir).filter((f) => f.endsWith('.json)).sort().reverse();;

    const logs = files.slice(0, 50).map((f) => {;;

      try {
//         const raw = fs.readFileSync(path.join(dir, f), 'utf8);;

        const _json = JSON.parse(raw);;

        return { id: json.id || f, file: f, generated_at: json.generated_at, insights: json.insights }} catch {
>>>>>>> origin/main
        return { id: f, file: f };

export default async function handler(re,
  q: NextApiRequest, re)
  s: NextApiResponse) {/* TODO: Fix JSX expression */}

  s: json.insights }} catch {/* TODO: Fix JSX expression */}

  e: f }}

    });
<<<<<<< HEAD
    return res.status(200).json({ logs })} catch {}
=======

    return res.status(200).json({ logs })} catch {
>>>>>>> origin/main
    // fall through to GitHub} catch {/* TODO: Fix JSX expression */}

  }
<<<<<<< HEAD
  
//   const remote = "await fetchFromGitHub();"
=======

//   const remote = await fetchFromGitHub();;

>>>>>>> origin/main
  return res.status(200).json({/* TODO: Fix JSX expression */})
  s: remote })}`