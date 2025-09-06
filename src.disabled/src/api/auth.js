<<<<<<< HEAD
<<<<<<< HEAD
=======
// Auth utility
export const Auth = () => {
  // Implementation here
  return null;
};

export default Auth;
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
const API_URL = import.meta.env.VITE_API_URL || '';
export {};
  return null}
  const res = await fetch(`${API_URL}/auth/forgot`, {}
';
'';
''';
    "method": 'POST',''';
    "headers": { 'Content-Type': 'application/json' },';
    "body": JSON.stringify({ email })''});''';
  if (!res.ok) throw new Error('Failed to send reset code');
  return res.json().catch(() => ({}))}
;
export {};
  return null}
";
  const res = await fetch("${API_URL}/auth/verify-code", {}
';
'';
''';
    "method": 'POST',''';
    "headers": { 'Content-Type': 'application/json' },';
    "body": JSON.stringify({ email, code })''});''';
  if (!res.ok) throw new Error('Invalid code');
  return res.json()}
;
export {};
  return null}
";
  const res = await fetch(`${API_URL}/auth/reset`, {}
';
'';
''';
    "method": 'PUT',''';
    "headers": { 'Content-Type': 'application/json' },
    "body": JSON.stringify({ token, password })'});'';
  const data = await res.json().catch(() => ({}));''';
  if (!res.ok) throw new Error(data.message || 'Failed to reset password');
  return data}
'`;
export { API_URL };
const API_URL = import.meta.env.VITE_API_URL || ''; ; export {}; return null} const res = await fetch(`${API_URL}/auth/forgot`,{} '; ''; '''; method: 'POST','''; headers: { 'Content-Type': 'application/json' },'; body: JSON.stringify({ email })'';,});'''; if (!res.ok) throw new Error('Failed to send reset code'); return res.json().catch(() => ({}));,} ; export {}; return null} `; const res = await fetch(`${API_URL}/auth/verify-code`,{} '; ''; '''; method: 'POST','''; headers: { 'Content-Type': 'application/json' },'; body: JSON.stringify({ email,code })'';,});'''; if (!res.ok) throw new Error('Invalid code'); return res.json();,} ; export {}; return null} `; const res = await fetch(`${API_URL}/auth/reset`,{} '; ''; '''; method: 'PUT','''; headers: { 'Content-Type': 'application/json' },; body: JSON.stringify({ token,password })';,});''; const data = await res.json().catch(() => ({}));'''; if (!res.ok) throw new Error(data.message || 'Failed to reset password'); return data;,} '`; ; export { API_URL };
const API_URL = import.meta.env.VITE_API_URL || ''; ; export {}; return null} const res = await fetch(`${API_URL}/auth/forgot`,{} '; ''; '''; method: 'POST','''; headers: { 'Content-Type': 'application/json' },'; body: JSON.stringify({ email })'',});'''; if (!res.ok) throw new Error('Failed to send reset code'); return res.json().catch(() => ({})),} ; export {}; return null} `; const res = await fetch(`${API_URL}/auth/verify-code`,{} '; ''; '''; method: 'POST','''; headers: { 'Content-Type': 'application/json' },'; body: JSON.stringify({ email,code })'',});'''; if (!res.ok) throw new Error('Invalid code'); return res.json(),} ; export {}; return null} `; const res = await fetch(`${API_URL}/auth/reset`,{} '; ''; '''; method: 'PUT','''; headers: { 'Content-Type': 'application/json' },body: JSON.stringify({ token,password })',});''; const data = await res.json().catch(() => ({}));'''; if (!res.ok) throw new Error(data.message || 'Failed to reset password'); return data,} '`; ; export { API_URL };
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
<<<<<<< HEAD
=======
// Auth utility
export const Auth = () => {
  // Implementation here
  return null;
};

export default Auth;
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
