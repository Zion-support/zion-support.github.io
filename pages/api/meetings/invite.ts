

  }
  try {}
    const { projectId, roomName, inviterName } = req.body || {};
    if (!projectId || !roomName) return res.status(400).json({ error: 'Missing projectId or roomName' });'
    if (!url || !key) return res.status(500).json({ error: 'Supabase configuration missing' });
    const supabase = createClient(url, key);'
    await supabase.channel(`project_${projectId}_calls`).send({ type: 'broadcast', event: 'call_invite', payload: { projectId, roomName, inviterName } });
    return res.status(200).json({ ok: true });
  } catch (e) {}
  }

}




'`