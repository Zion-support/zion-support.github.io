
export async function loginUser(_email: string, _password: string) {_try {
    const _res = await fetch('/api/auth/login', _{
      method: 'POST', _headers: {
        'Content-Type': 'application/json'},
      body: JSON.stringify({_email, _password})});
    const _data = await res.json().catch__(() => ({}));
    return {_res, _data};
  } catch (error) {_throw error;}
}
