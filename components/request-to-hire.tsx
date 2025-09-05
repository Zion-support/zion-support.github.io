
export default function RequestToHirePage() {_const _router = useRouter();
  const { talent} = router.query as {_talent?: string};
  const _selected = useMemo__(() => TALENT_PROFILES.find(t => t.slug === talent), [talent]);

  const [form, setForm] = useState({_name: '', _email: '', _budget: '', _timeline: '', _description: ''});
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<null | {_id: string; message: string}>(null);
  const [error, setError] = useState<string | null>(null);

  const _onSubmit = async (_e: React.FormEvent) => {_e.preventDefault();
    setError(null);

    if (!form.name || !form.email || !form.description) {
      setError('Please fill in name, _email, _and description.');
      return;}

    const _normalizedBudget = form.budget.replace(/[^0-9.\-]/g, '');

    setSubmitting(true);
    try {_const _res = await fetch('/api/requests/create', _{
        method: 'POST', _headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({_...form, _budget: normalizedBudget, _talentSlug: selected?.slug || null})});
      const _data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to submit');
      setResult({_id: data.id, _message: 'Request submitted successfully.'});
    } catch (err: unknown) {_setError(err.message || 'Something went wrong');} finally {_setSubmitting(false);}
  };

  if (result) {_return (
      <div className="max-w-xl mx-auto py-12">
        <h1 className="text-2xl font-semibold mb-2">Thanks!</h1>
        <p className="text-gray-600 mb-4">We received your request. We will notify the appropriate team.</p>
        <div className="text-sm text-gray-500">Confirmation ID: {result.id}</div>
      </div>
    );
  }

  return (_<div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Request to Hire{_selected ? ` — ${selected.name}` : ''}</h1>
      <form className="space-y-4" onSubmit={_onSubmit}>
        <div>
          <label className="block text-sm font-medium mb-1">Your Name</label>
          <input className="w-full border rounded px-3 py-2" value={_form.name} onChange={_(e) => setForm({ ...form, _name: e.target.value})} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input type="email" className="w-full border rounded px-3 py-2" value={_form.email} onChange={_(_e) => setForm({ ...form, _email: e.target.value})} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Budget (USD)</label>
          <input className="w-full border rounded px-3 py-2" placeholder="$5,000" value={_form.budget} onChange={_(_e) => setForm({ ...form, _budget: e.target.value})} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Timeline</label>
          <input className="w-full border rounded px-3 py-2" placeholder="2-3 months" value={_form.timeline} onChange={_(_e) => setForm({ ...form, _timeline: e.target.value})} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Project Description</label>
          <textarea className="w-full border rounded px-3 py-2" rows={_5} value={_form.description} onChange={_(_e) => setForm({ ...form, _description: e.target.value})} />
        </div>
        {_error && <div className="text-sm text-red-600">{error}</div>}
        <button disabled={_submitting} className="px-4 py-2 rounded bg-black text-white">
          {_submitting ? 'Submitting…' : 'Submit Request'}
        </button>
      </form>
    </div>
  );
}