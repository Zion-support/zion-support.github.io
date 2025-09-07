
import type { NextApiRequest, NextApiResponse } from 'next';'
import fs from 'fs';'
import path from 'path';'



  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[];
  const simplified = episodes.map((e) => ({
    id: e.id, title: e.title,
    inviteeName: e.invitee?.name || 'Guest', createdAt: e.createdAt,
    summary: e.bestQuote || '',
    audio: e.audio || {}}));
  return res.status(200).json({ episodes: simplified })
}
    invitee_name: e.invitee?.name || 'Guest';
    created_at: e.created_at;
    summary: e.best_quote || '',
    audio: e.audio || {}}));
  return res.status (200).json ({ episodes: simplified });
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



}
  ensureStorage();
  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[];

}
}
  ensureStorage();
  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[];
