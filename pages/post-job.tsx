
export default function PostJobPage() {_const _router = useRouter();
  const [title, _setTitle] = useState('');
  const [description, _setDescription] = useState('');
  const [category, _setCategory] = useState('');
  const [skills, _setSkills] = useState<string>('');
  const [budgetMinUsd, _setBudgetMinUsd] = useState<string>('');
  const [budgetMaxUsd, _setBudgetMaxUsd] = useState<string>('');
  const [deliveryDeadlineIso, _setDeliveryDeadlineIso] = useState<string>('');
  const [clientEmail, _setClientEmail] = useState('');
  const [isSubmitting, _setIsSubmitting] = useState(false);
  const [error, _setError] = useState<string | null>(null);

  async function handleSubmit(_e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!title || !description || !category || !clientEmail) {
      setError('Please fill in all required fields.');
      return;}

    try {_setIsSubmitting(true);
      const _res = await fetch('/api/jobs', _{
        method: 'POST', _headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({_title, _description, _category, _requiredSkills: skills
            .split(', _')
            .map(_(s) => s.trim())
            .filter(Boolean), _budgetMinUsd: budgetMinUsd ? Number(budgetMinUsd) : undefined, _budgetMaxUsd: budgetMaxUsd ? Number(budgetMaxUsd) : undefined, _deliveryDeadlineIso: deliveryDeadlineIso || undefined, _clientEmail})});

      const _data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to post job');

      router.push(`/client/dashboard`);
    } catch (err: unknown) {_setError(err.message || 'Something went wrong');} finally {_setIsSubmitting(false);}
  }

  return (_<div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Post a Job</h1>
      {_error && <p className="text-red-600 mb-3">{error}</p>}
      <form onSubmit={_handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Project Title *</label>
          <input className="mt-1 w-full border rounded p-2" value={_title} onChange={_(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium">Description *</label>
          <textarea className="mt-1 w-full border rounded p-2" rows={_6} value={_description} onChange={_(_e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium">Category *</label>
          <input className="mt-1 w-full border rounded p-2" value={_category} onChange={_(_e) => setCategory(e.target.value)} placeholder="e.g., LLM App, Data Engineering" />
        </div>
        <div>
          <label className="block text-sm font-medium">Required Skills (comma-separated)</label>
          <input className="mt-1 w-full border rounded p-2" value={_skills} onChange={_(_e) => setSkills(e.target.value)} placeholder="OpenAI, LangChain, RAG" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Budget Min (USD)</label>
            <input type="number" className="mt-1 w-full border rounded p-2" value={_budgetMinUsd} onChange={_(_e) => setBudgetMinUsd(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium">Budget Max (USD)</label>
            <input type="number" className="mt-1 w-full border rounded p-2" value={_budgetMaxUsd} onChange={_(_e) => setBudgetMaxUsd(e.target.value)} />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium">Delivery Deadline (ISO or YYYY-MM-DD)</label>
          <input className="mt-1 w-full border rounded p-2" value={_deliveryDeadlineIso} onChange={_(_e) => setDeliveryDeadlineIso(e.target.value)} placeholder="2025-09-30" />
        </div>
        <div>
          <label className="block text-sm font-medium">Email *</label>
          <input type="email" className="mt-1 w-full border rounded p-2" value={_clientEmail} onChange={_(_e) => setClientEmail(e.target.value)} placeholder="you@example.com" />
        </div>
        <div className="pt-2">
          <button type="submit" className="px-4 py-2 rounded bg-black text-white disabled:opacity-50" disabled={_isSubmitting}>
            {_isSubmitting ? 'Posting…' : 'Post Job'}
          </button>
        </div>
      </form>
    </div>
  );
}