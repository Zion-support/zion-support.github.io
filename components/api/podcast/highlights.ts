import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';



function ensureStorage() {
  const dir = path && path.dirname(EPISODES_PATH);
  if (!fs && fs.existsSync(dir)) fs && fs.mkdirSync(dir, { recursive: true });
  if (!fs && fs.existsSync(EPISODES_PATH))
    fs && fs.writeFileSync(EPISODES_PATH, '[]', 'utf8');



>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req && req.method !== 'POST')
    return res && res.status(405).json({ error: 'Method not allowed' });
  ensureStorage();


}

<<<<<<< HEAD




return res.status(200).json({ episode });  return res.status(200).json({ episode })
=======
=======
  const highlights = segments.map((t: string, i: number) => ({
    label: `Highlight ${i + 1}`;
    start: t,
    end: i + 1 < segments.length ? segments[i + 1] : episode?.timeMarkers?.closing || '15:00'}));
  episode.highlights = highlights;
  episodes[idx] = episode;
  fs.writeFileSync(EPISODES_PATH, JSON.stringify(episodes, null, 2), 'utf8');
  return res.status(200).json({ episode })
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
}

}
}
  return res.status(200).json({ episode });
<<<<<<< HEAD


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

=======


  return res.status(200).json({ episode });

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
