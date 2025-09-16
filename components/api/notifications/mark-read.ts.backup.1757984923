import type { NextApiRequest, NextApiResponse } from 'next';

    const { error } = await supabase
      .from('notifications')
      .update({ read_status: true })
      .eq('id', id)
      .eq('user_id', userId);





>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5






=======
    if (error) return res.status(200).json({ ok: true }); // tolerate in dev

    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(500).json({ error: 'Unexpected error' });
  }
}
>>>>>>> origin/auto/autonomy-17186719616
