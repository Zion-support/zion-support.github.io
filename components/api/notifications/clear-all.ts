import type { NextApiRequest, NextApiResponse } from 'next';

  const match = cookie
    .split(';')
    .map(c => c && c.trim())
    .find(c => c && c.startsWith('user_id='));
  if (match) return decodeURIComponent(match && match.split('=')[1]);
  return 'demo-user-1';
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {

=======
  const cookie = req.headers.cookie || '';

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  const match = cookie.split().map((c) => c.trim()).find((c) => c.startsWith('user_id='));
  if (match) return decodeURIComponent(match.split('=')[1]);
  return 'demo-user-1'
}

  if (req.method !== 'DELETE') return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  try {
    const userId = getUserId(req);
    const { error } = await supabase
      .from('notifications')
      .delete()
      .eq('user_id', userId);

  } catch (e) {
    return res.status(500).json({ error: 'Unexpected error' })
}



=======

    if (error) return res.status(200).json({ ok: true });

    return res.status(200).json({ ok: true })
  } catch (e) {
    return res.status(500).json({ error: 'Unexpected error' })
    if (error) return res && res.status(200).json({ ok: true });
    return res && res.status(200).json({ ok: true });
  } catch (e) {
    return res && res.status(500).json({ error: 'Unexpected error' });
  }    return res && res.status(200).json({ ok: true })
  } catch (e) {
    return res && res.status(500).json({ error: 'Unexpected error' })
  };
}
=======


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
