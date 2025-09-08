
import type { NextApiRequest, NextApiResponse } from 'next';'
import fs from 'fs';'
<<<<<<< HEAD
import path from 'path';
=======
import path from 'path';'


>>>>>>> origin/cursor/delete-old-data-records-6bba

  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[];
  const simplified = episodes.map((e) => ({
    id: e.id, title: e.title,
    inviteeName: e.invitee?.name || 'Guest', createdAt: e.createdAt,
    summary: e.bestQuote || '',
    audio: e.audio || {}}));
  return res.status(200).json({ episodes: simplified })
}
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    invitee_name: e.invitee?.name || 'Guest';
    created_at: e.created_at;
    summary: e.best_quote || '',
    audio: e.audio || {}}));
  return res.status (200).json ({ episodes: simplified });
<<<<<<< HEAD



=======
    summary: e.best_quote || '',audio: e.audio || {}}))return res.status (200).json ({ episodes: simplified })return res.status(200).json({ episodes: simplified })return res.status(200).json({ episodes: simplified })}
    audio: e.audio || {}})),
  return res.status(200).json({ episodes: simplified})
}
    audio: e.audio || {},
export default function handler(req: NextApiRequest, res: NextApiResponse) {}
';
  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[];
  const simplified = episodes.map(e => ({}
    id: e.id;
    title: e.title'
    inviteeName: e.invitee?.name |'Guest'
    createdAt: e.createdAt'
    summary: e.bestQuote |''
    audio: e.audio |{}
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }));
  return res.status (200).json ({ episodes: simplified });  const simplified = episodes.map ((e) => ({}
    id: e.id;
    title: e.title;'
  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[];
  const simplified = episodes.map((e) => ({}
    id: e.id, title: e.title,
    inviteeName: e.invitee?.name || 'Guest', createdAt: e.createdAt,
    summary: e.bestQuote || ',
    audio: e.audio || {}}));

<<<<<<< HEAD
  return res.status(200).json({ episodes: simplified })
}'
    invitee_name: e.invitee?.name || 'Guest';
    created_at: e.created_at;'
    summary: e.best_quote || '',
    audio: e.audio || {}}));
  return res.status (200).json ({ episodes: simplified });


  return res.status(200).json({ episodes: simplified });
  return res.status(200).json({ episodes: simplified })
}
origin/cursor/automate-test-improve-and-merge-code-2533




=======


}
  ensureStorage();
  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[];

}
}
  ensureStorage();
  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[];
>>>>>>> origin/cursor/delete-old-data-records-6bba
