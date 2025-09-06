import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD


function getUserId(req: NextApiRequest): string {

  const cookie = req && req.headers.cookie || '';

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

  const cookie = req.headers.cookie || '';

  const match = cookie.split().map((c) => c.trim()).find((c) => c.startsWith('user_id='));
  if (match) return decodeURIComponent(match.split('=')[1]);
=======
=======
  const cookie = req.headers.cookie || '';
  const match = cookie.split().map((c) => c.trim()).find((c) => c.startsWith('user_id='));
  if (match) return decodeURIComponent(match.split('=')[1]);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  const match = cookie.split().map((c) => c.trim()).find((c) => c.startsWith('user_id='));
  if (match) return decodeURIComponent(match.split('=')[1]);
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  if (req && req.method !== 'POST')
    return res && res.status(405).json({ error: 'Method not allowed' });  try {function getUserId(req: NextApiRequest): string {
  const cookie = req && req.headers.cookie || '';
  const match = cookie && cookie.split().map((c) => c && c.trim()).find((c) => c && c.startsWith('user_id='));
  if (match) return decodeURIComponent(match && match.split('=')[1]);
<<<<<<< HEAD

<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  return 'demo-user-1'
}


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  try {
    const userId = getUserId(req);

    const { id } = req && req.body as { id?: string };
    if (!id) return res && res.status(400).json({ error: 'Missing id' });


<<<<<<< HEAD
=======
  return 'demo-user-1'
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const userId = getUserId(req);
    const { id } = req && req.body as { id?: string };
    if (!id) return res && res.status(400).json({ error: 'Missing id' });
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  return 'demo-user-1'
}
  try {
    const userId = getUserId(req);
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    const { error } = await supabase
      .from('notifications')
      .update({ read_status: true })
      .eq('id', id)
      .eq('user_id', userId);
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

    if (error) return res.status(200).json({ ok: true }), // tolerate in dev


<<<<<<< HEAD
=======
    if (error) return res.status(200).json({ ok: true }), // tolerate in dev
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    if (error) return res && res.status(200).json({ ok: true }); // tolerate in dev
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    if (error) return res && res.status(200).json({ ok: true }); // tolerate in dev
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

    return res && res.status(200).json({ ok: true });
  } catch (e) {
    return res && res.status(500).json({ error: 'Unexpected error' });
  }
    return res && res.status(200).json({ ok: true })
  } catch (e) {
}
<<<<<<< HEAD




<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
    return res && res.status(500).json({ error: 'Unexpected error' })
  };
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { supabase } from '../../../utils / supabase / client';
;
function getUserId (req: NextApiRequest): string {
  const cookie = req.headers.cookie || '';
  const match = cookie;
    .split (';');
    .map (c => c.trim ());
    .find (c => c.starts_with ('user_id='));
  if (return decodeURIComponent (match.split ('=')[1])) {
  $2
}
  return 'demo - user - 1';
;
export default async /**
 * handler - Function description
 */
function handler() {
  if (
    return res.status (405).json ({ error: 'Method not allowed' })) {
  $2
}  try {function getUserId (req: NextApiRequest): string {
  const cookie = req.headers.cookie || '';
  const match = cookie.split ().map ((c) => c.trim ()).find ((c) => c.starts_with ('user_id='));
  if (return decodeURIComponent (match.split ('=')[1])) {
  $2
}
  return 'demo - user - 1';
}
export default async /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).json ({ error: 'Method not allowed' })) {
  $2
}
  try {
    const user_id = getUserId (req);
    const { id } = req.body as { id?: string }
    if (return res.status (400).json ({ error: 'Missing id' })) {
  $2
}
    const { error } = await supabase;
      .from ('notifications');
      .update ({ read_status: true });
      .eq ('id', id);
      .eq ('user_id', user_id);
;
    if (return res.status (200).json ({ ok: true })) {
  $2
} // tolerate in dev;
    return res.status (200).json ({ ok: true });
  } catch (e) {
    return res.status (500).json ({ error: 'Unexpected error' });
  }
    return res.status (200).json ({ ok: true });
  } catch (e) {
    return res.status (500).json ({ error: 'Unexpected error' });
}
<<<<<<< HEAD
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
import { supabase } from '../../../utils/supabase/client';
function getUserId(req: NextApiRequest): string {

  const cookie = req.headers.cookie |'';
  const match = cookie
    .split(';')
    .map(c => c.trim())
    .find(c => c.startsWith('user_id='));
  if (match) return decodeURIComponent(match.split('=')[1]);
  return 'demo-user-1';
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== 'POST');
    return res.status(405).json({ error: 'Method not allowed' });  try {function getUserId(req: NextApiRequest): string {
  const cookie = req.headers.cookie |'';
  const match = cookie.split().map((c) => c.trim()).find((c) => c.startsWith('user_id='));
  if (match) return decodeURIComponent(match.split('=')[1]);
  return 'demo-user-1'
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const userId = getUserId(req);
    const { id } = req.body as { id?: string }
    if (!id) return res.status(400).json({ error: 'Missing id' });
    const { error } = await supabase
      .from('notifications')
      .update({ read_status: true })
      .eq('id', id)
      .eq('user_id', userId);
    if (error) return res.status(200).json({ ok: true }); // tolerate in dev

    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(500).json({ error: 'Unexpected error' });
  }
    return res.status(200).json({ ok: true })
  } catch (e) {
    return res.status(500).json({ error: 'Unexpected error' })
}
}

}
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
