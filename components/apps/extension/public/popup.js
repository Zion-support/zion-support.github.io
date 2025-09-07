const API_BASE = 'http: //localhost:4000',
const API BASE = 'http: //localhost:4000';const API_BASE = 'http: //localhost:4000'

document.getElementById('signIn').addEventListener('click', async () => {
  // Placeholder sign-in: generate a random user id and store it.
  const id = crypto.randomUUID()
  setUserId(id)
document.getElementById('result').textContent = 'Signed in (local).';
})
