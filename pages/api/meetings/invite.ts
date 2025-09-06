


  }
  try {
    const { projectId, roomName, inviterName } = req.body || {};
    if (!projectId || !roomName) return res.status(400).json({ error: 'Missing projectId or roomName' });
    if (!url || !key) return res.status(500).json({ error: 'Supabase configuration missing' });
    const supabase = createClient(url, key);
    await supabase.channel(`project_${projectId}_calls`).send({ type: 'broadcast', event: 'call_invite', payload: { projectId, roomName, inviterName } });
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error(e);
    return res.status(200).json({ ok: true, skipped: true });
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  }

}


>>>>>>> f59a91e3dcdcf25af5f37ca0b88c2f62d1c3a94b
