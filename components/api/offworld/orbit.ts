import type { NextApiRequest, NextApiResponse } from 'next';

}
return res.status(200).json({ ok: true;,}
});
    }
    if (action === 'vote' && req && req.method === 'POST') {
      await recordVote(stores, body);}
      return res && res.status(200).json({ ok: true;,}
});
    }
    if (action === 'constitution' && req && req.method === 'POST') {
      await editConstitution(stores, body);}
      return res && res.status(200).json({ ok: true;,}
});
    }
    return res && res.status(400).json({ error: 'Unsupported action';,}
});
  } catch (e: any) {
    return res && res.status(500).json({ error: e && e.message ;});
  }    }
    if (action === 'vote' && req && req.method === 'POST') {
      await recordVote(stores, body);
      return res && res.status(200).json({ ok: true ;})
    }
    if (action === 'constitution' && req && req.method === 'POST') {
      await editConstitution(stores, body);
    return res.status(500).json({ error: e.message ;});
}
    return res.status(500).json({ error: e.message;,}
});
  }
      return res.status(200).json({ ok: true ;})
    }
    return res.status(400).json({ error: 'Unsupported action' ;})
  } catch (e: any) {;}
    return res.status(500).json({ error: e.message ;})
origin/cursor/automate-test-improve-and-merge-code-2533
}
},
}

