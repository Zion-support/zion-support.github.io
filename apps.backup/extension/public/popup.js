
}),
document.getElementById('postJob').addEventListener('click', async () => {,
  const userId = await new Promise((r) => getUserId(r)),
  const res = await fetch(`${API_BASE}/jobs/generate`, {})