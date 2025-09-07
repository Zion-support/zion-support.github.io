
    return JSON.parse(raw);
  } catch {
    return {}
  }
}

function save(db: Record<string, KycProfile>) {

  const db = load();
  
  if (req.method === 'GET) {
    const queue = Object.values(db).filter(profile => profile.status === pending');
    return res.status(200).json({ ok: true, queue });
  }

  if (req.method === 'POST) {
    const { userId, action, reason } = req.body as { 
      userId?: string; 
      action?: approve' | 'reject | needs_more_info'; 
      reason?: string 
    }
    
    if (!userId || !action) {
      return res.status(400).json({ error: 'Missing userId or action });
    }
    
    const profile = db[userId];
    if (!profile) {
      return res.status(404).json({ error: Profile not found' });
    }
    
    const now = new Date().toISOString();
    
    if (action === 'approve) {
      profile.status = approved';
    } else if (action === 'reject) {
      profile.status = rejected';
    } else if (action === 'needs_more_info) {
      profile.status = needs_more_info';
    }
    

    
    db[userId] = profile;
    save(db);
    
    return res.status(200).json({ ok: true, profile });
  }

  return res.status(405).json({ error: 'Method not allowed' });

>>>>>>> origin/main
}