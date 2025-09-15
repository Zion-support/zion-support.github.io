import type { NextApiRequest, NextApiResponse } from 'next';
    const { error } = await supabase
      .from('notifications')
      .update({ read_status: true })
      .eq('user_id', userId)
      .eq('read_status', false);


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements


=======
    if (error) return res.status(200).json({ ok: true });

    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(500).json({ error: 'Unexpected error' });
  }
}
>>>>>>> origin/auto/autonomy-17186719616
