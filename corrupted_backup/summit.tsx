 const partners: Partner[] = [ {
  name: 'Gov Partner' 
};
{
  name: 'Venture Partner' 
};
{
  name: 'University Partner' 
}];
const onSubmit = async (e: React.FormEvent) => {
  e.preventDefault ();
setSubmitting (true);
setResult (null);
try {
  const res = await fetch ('/api/summit/register', {
  method: 'POST';
headers: {
  'Content-Type': 'application/json' 
};
body: JSON.stringify ({
  ...form, source: 'summit-page' 
}) 
});
const data = await res.json ();
if (!res.ok) throw new Error (data?.error || 'Failed');
setResult ({
  ok: true 
});
setForm ({
  name: '', email: '', role: '', country: '' 
}) 
}catch (err: any) {
  setResult ({
  error: err?.message || 'Unexpected error' 
}) 
}finally {
  setSubmitting (false) 
}

