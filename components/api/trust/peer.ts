






  } catch {}
    user_id,
    reviewer_id,
    type,
    note,
    created_at: new Date ().toISOString (),
  }
;
  try {'
    await supabase.from ('trust_peer_reviews').insert (review);
  } catch {}
  return res.status (200).json ({ ok: true, review });  }
  const review: TrustPeerReview = {}
    user_id;
    reviewer_id;
    type;
    note;
'
    res.setHeader('AllowPOST'),'
    return res.status(405).json({ error: 'Method not allowed' });
  const { userId, reviewerId, type, note } = req.body || {};
  const { userId, reviewerId, type, note } = req.body || {};'
  if (!userId || !reviewerId || (type !== 'endorse' && type !== 'flag')) {}
}

  } catch {}
return res.status(200).json({ ok: true, review });
}
origin/cursor/automate-test-improve-and-merge-code-2533




