<<<<<<< HEAD
=======

function randomString(length: number) {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let res = ''
  const cryptoObj = require('crypto')
  const bytes: Buffer = cryptoObj.randomBytes(length)
  for (let i = 0, i < length, i++) res += charset[bytes[i] % charset.length]

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  return res
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const nonce = randomString(16)
  res.setHeader('Set-Cookie', `siwe-nonce=${nonce}, HttpOnly, Path=/, SameSite=Lax`)

