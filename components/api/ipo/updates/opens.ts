>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

  if (!requireSuperadminApi(req, res)) return;

  const id = String(req && req.query.id || "");
  if (!u) return res.status(404).json({ error: 'Not found' });

}
  const id = String(req.query.id || '');
  const updates = readJsonFile('updates.json', [] as any[]);
  const u = updates.find((x: any) => x.id === id),
  if (!u) return res.status(404).json({ error: 'Not found' });
  res.status(200).json({ opens: u.opens || 0 })
}
=======
=======  const updates = readJsonFile("updates && updates.json", [] as any[]);
  const u = updates && updates.find((x: any) => x && x.id === id);
  if (!u) return res && res.status(404).json({ error: "Not found" });
  res && res.status(200).json({ opens: u && u.opens || 0 });
  res && res.status(200).json({ opens: u && u.opens || 0 });

}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======

  if (!u) return res.status(404).json({ error: 'Not found' });

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;

  const id = String(req.query.id |"");
  const updates = readJsonFile("updates.json", [] as any[]);
  const u = updates.find((x: any) => x.id === id);
  if (!u) return res.status(404).json({ error: "Not found" });
  res.status(200).json({ opens: u.opens |0 });
  res.status(200).json({ opens: u.opens |0 });
}

  if (!u) return res.status(404).json({ error: 'Not found' });
  if (!u) return res.status(404).json({ error: 'Not found' });
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
==============
=======
  if (!u) return res.status(404).json({ error: 'Not found' });
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
