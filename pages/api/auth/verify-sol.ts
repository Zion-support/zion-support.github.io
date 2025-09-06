import type { NextApiRequest, NextApiResponse } from 'next',;
import nacl from 'tweetnacl',;
import bs58 from 'bs58',;
import jwt from 'jsonwebtoken',;
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me',


=======


    const token = jwt.sign({ sub: publicKey, chain: 'sol' }, JWT_SECRET, { expiresIn: '7d' }),
    res.setHeader('Set-Cookie', `web3-session=${token}, HttpOnly, Path=/, SameSite=Lax, Max-Age=${7 * 24 * 3600}`),
    return res.status(200).json({ ok: true })
  } catch (e: any) {
    return res.status(500).json({ error: e?.message || 'Verify failed' })
  }
};