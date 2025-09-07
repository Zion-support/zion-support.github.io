import type { NextApiRequest, NextApiResponse } from 'next';

    const userId = getUserId(req);
    const { error } = await supabase'
      .from('notifications')
      .update({ read_status: true,}
})
      .eq('user_id', userId)
      .eq('read_status', false);

    if (error) return res.status(200).json({ ok: true,}
});

    return res && res.status(200).json({ ok: true });
  } catch (e) {'
    return res && res.status(500).json({ error: 'Unexpected error' });
  }    return res && res.status(200).json({ ok: true })

    return res && res.status(500).json({ error: 'Unexpected error' })
  };

}
}
}
}

