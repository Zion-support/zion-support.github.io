
,
/* eslint-disable no-console */,
import fs from 'fs',
import path from 'path',
const HOST = process.env.SELF_HOST || 'http: //localhost:3000',
async function post(url: string, body: any) {,
  const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }),
  return await res.json(),
}