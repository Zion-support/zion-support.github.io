import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { role = 'guest', talent } = req.query as {
    role?: string;
    talent?: string;
  };
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { role = 'guest', talent } = req.query as { role?: string, talent?: string };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { role = 'guest', talent } = req.query as { role?: string, talent?: string };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

  const headers: Record<string, string> = {};
  const cookies: string[] = [];
  const set = (k: string, v: string, days = 7) => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
<<<<<<< HEAD
<<<<<<< HEAD
    cookies.push(
      `${k}=${encodeURIComponent(v)}; Path=/; SameSite=Lax; Expires=${expires}`
    );
=======
    cookies.push(`${k}=${encodeURIComponent(v)}, Path=/, SameSite=Lax, Expires=${expires}`)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };

  if (role === 'admin' || role === 'talent' || role === 'guest') {
    set('role', role)
  }
  if (talent) {
    set('talentSlug', talent)
  }
  set('userId', role === 'guest' ? '' : 'test-user');

  headers['Set-Cookie'] = cookies.join();
  res.writeHead(302, { ...headers, Location: '/' });
<<<<<<< HEAD
  res.end();
=======
    cookies.push(`${k}=${encodeURIComponent(v)}, Path=/, SameSite=Lax, Expires=${expires}`)
  };

  if (role === 'admin' || role === 'talent' || role === 'guest') {
    set('role', role)
  }
  if (talent) {
    set('talentSlug', talent)
  }
  set('userId', role === 'guest' ? '' : 'test-user');

  headers['Set-Cookie'] = cookies.join();
  res.writeHead(302, { ...headers, Location: '/' });
  res.end()
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  res.end()
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
