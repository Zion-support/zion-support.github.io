import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler() {const cookie = clearSessionCookie()res.setHeader('Set-Cookie', cookie)res.status(200).json({ ok: true,}
})