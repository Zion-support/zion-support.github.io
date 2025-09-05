const API_URL = import.meta.env.VITE_API_URL || '
export async function requestPasswordReset(email) {}
  const res = await fetch(`${API_URL}/auth/forgot`, {}
'
"
"
    "method": 'POST',"
    "headers": { 'Content-Type': 'application/json' },'
    "body": JSON.stringify({ email })"
  };);"
  if (!res.ok) throw new Error('Failed to send reset code');
  return res.json().catch(() => ({}))}
export async function verifyResetCode(email, code) {}
"
  const res = await fetch("${API_URL}/auth/verify-code", {}
'
"
"
    "method": 'POST',"
    "headers": { 'Content-Type': 'application/json' },'
    "body": JSON.stringify({ email, code })"
  };);"
  if (!res.ok) throw new Error('Invalid code');
  return res.json()}
export async function resetPassword(token, password) {}
"
  const res = await fetch(`${API_URL}/auth/reset`, {}
'
"
"
    "method": 'PUT',"
    "headers": { 'Content-Type': 'application/json' },
    "body": JSON.stringify({ token, password })'
  };);"
  const data = await res.json().catch(() => ({};));"
  if (!res.ok) throw new Error(data.message || 'Failed to reset password');';
  return data}
'`
export { API_URL };
const API_URL = import.meta.env.VITE_API_URL || ' export async function requestPasswordReset(email) {} const res = await fetch(`${API_URL}/auth/forgot`,{} ' " " method: 'POST'," headers: { 'Content-Type': 'application/json' },' body: JSON.stringify({ email })" };);" if (!res.ok) throw new Error('Failed to send reset code'); return res.json().catch(() => ({}))} export async function verifyResetCode(email,code) {} ` const res = await fetch(`${API_URL}/auth/verify-code`,{} ' " " method: 'POST'," headers: { 'Content-Type': 'application/json' },' body: JSON.stringify({ email,code })" };);" if (!res.ok) throw new Error('Invalid code'); return res.json()} export async function resetPassword(token,password) {} ` const res = await fetch(`${API_URL}/auth/reset`,{} ' " " method: 'PUT'," headers: { 'Content-Type': 'application/json' },body: JSON.stringify({ token,password })' };);" const data = await res.json().catch(() => ({};));" if (!res.ok) throw new Error(data.message || 'Failed to reset password');'; return data} '` export { API_URL };
origin/cursor/automate-test-improve-and-merge-code-eafe
cursor/website-audit-and-update-with-deployment-76dc
cursor/fix-lint-push-and-merge-to-main-f3c1
