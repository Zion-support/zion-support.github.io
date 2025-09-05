<<<<<<< HEAD
import { useState } from 'react',;
import { useRouter } from 'next/router',;
;
export default function PostJobPage() {;
  const router = useRouter(),;
  const [title, setTitle] = useState(''),;
  const [description, setDescription] = useState(''),;
  const [category, setCategory] = useState(''),;
  const [skills, setSkills] = useState<string>(''),;
  const [budgetMinUsd, setBudgetMinUsd] = useState<string>(''),;
  const [budgetMaxUsd, setBudgetMaxUsd] = useState<string>(''),;
  const [deliveryDeadlineIso, setDeliveryDeadlineIso] = useState<string>(''),;
  const [clientEmail, setClientEmail] = useState(''),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
;
  async function handleSubmit(e:React.FormEvent) {;
    e.preventDefault(),;
    setError(null),;
;
    if (!title || !description || !category || !clientEmail) {;
      setError('Please fill in all required fields.'),;
      return;
    }
;
    try {;
      setIsSubmitting(true),;
      const res = await fetch('/api/jobs', {;
        method:'POST',;
        headers:{ 'Content-Type':'application/json' },;
        body:JSON.stringify({;
          title,;
          description,;
          category,;
          requiredSkills:skills;
            .split();
            .map((s) => s.trim());
            .filter(Boolean),;
          budgetMinUsd:budgetMinUsd ? Number(budgetMinUsd) :undefined,;
          budgetMaxUsd:budgetMaxUsd ? Number(budgetMaxUsd) :undefined,;
          deliveryDeadlineIso:deliveryDeadlineIso || undefined,;
          clientEmail})}),;
;
      const data = await res.json(),;
      if (!res.ok) throw new Error(data.error || 'Failed to post job'),;
;
      router.push(`/client/dashboard`),;
    } catch (err:any) {;
      setError(err.message || 'Something went wrong');
    } finally {;
      setIsSubmitting(false),;
    }
  }
;
  return (;
    <div className="max-w-2xl mx-auto">;
      <h1 className="text-2xl font-semibold mb-4">Post a Job</h1>;
      {error && <p className="text-red-600 mb-3">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">;
        <div>;
          <label className="block text-sm font-medium">Project Title *</label>;
          <input className="mt-1 w-full border rounded p-2" value={title} onChange={(e) => setTitle(e.target.value)} />;
        </div>;
        <div>;
          <label className="block text-sm font-medium">Description *</label>;
          <textarea className="mt-1 w-full border rounded p-2" rows={6} value={description} onChange={(e) => setDescription(e.target.value)} />;
        </div>;
        <div>;
          <label className="block text-sm font-medium">Category *</label>;
          <input className="mt-1 w-full border rounded p-2" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="e.g., LLM App, Data Engineering" />;
        </div>;
        <div>;
          <label className="block text-sm font-medium">Required Skills (comma-separated)</label>;
          <input className="mt-1 w-full border rounded p-2" value={skills} onChange={(e) => setSkills(e.target.value)} placeholder="OpenAI, LangChain, RAG" />;
        </div>;
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
          <div>;
            <label className="block text-sm font-medium">Budget Min (USD)</label>;
            <input type="number" className="mt-1 w-full border rounded p-2" value={budgetMinUsd} onChange={(e) => setBudgetMinUsd(e.target.value)} />;
          </div>;
          <div>;
            <label className="block text-sm font-medium">Budget Max (USD)</label>;
            <input type="number" className="mt-1 w-full border rounded p-2" value={budgetMaxUsd} onChange={(e) => setBudgetMaxUsd(e.target.value)} />;
          </div>;
        </div>;
        <div>;
          <label className="block text-sm font-medium">Delivery Deadline (ISO or YYYY-MM-DD)</label>;
          <input className="mt-1 w-full border rounded p-2" value={deliveryDeadlineIso} onChange={(e) => setDeliveryDeadlineIso(e.target.value)} placeholder="2025-09-30" />;
        </div>;
        <div>;
          <label className="block text-sm font-medium">Email *</label>;
          <input type="email" className="mt-1 w-full border rounded p-2" value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} placeholder="you@example.com" />;
        </div>;
        <div className="pt-2">;
          <button type="submit" className="px-4 py-2 rounded bg-black text-white disabled:opacity-50" disabled={isSubmitting}>;
            {isSubmitting ? 'Posting…' :'Post Job'}
          </button>;
        </div>;
      </form>;
    </div>;
  ),;
=======
import { useState } from 'react',
import { useRouter } from 'next/router',
export default function PostJobPage() {
  const router = useRouter(),
  const [title, setTitle] = useState(''),
  const [description, setDescription] = useState(''),
  const [category, setCategory] = useState(''),
  const [skills, setSkills] = useState<string>(''),
  const [budgetMinUsd, setBudgetMinUsd] = useState<string>(''),
  const [budgetMaxUsd, setBudgetMaxUsd] = useState<string>(''),
  const [deliveryDeadlineIso, setDeliveryDeadlineIso] = useState<string>(''),
  const [clientEmail, setClientEmail] = useState(''),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [error, setError] = useState<string | null>(null),

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault(),
    setError(null),

    if (!title || !description || !category || !clientEmail) {
      setError('Please fill in all required fields.'),
      return
    }

    try {
      setIsSubmitting(true),
      const res = await fetch('/api/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          description,
          category,
          requiredSkills: skills
            .split()
            .map((s) => s.trim())
            .filter(Boolean),
          budgetMinUsd: budgetMinUsd ? Number(budgetMinUsd) : undefined,
          budgetMaxUsd: budgetMaxUsd ? Number(budgetMaxUsd) : undefined,
          deliveryDeadlineIso: deliveryDeadlineIso || undefined,
          clientEmail})}),

      const data = await res.json(),
      if (!res.ok) throw new Error(data.error || 'Failed to post job'),

      router.push(`/client/dashboard`)
    } catch (err: any) {
      setError(err.message || 'Something went wrong')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className=&quot;max-w-2xl mx-auto&quot;>
      <h1 className=&quot;text-2xl font-semibold mb-4&quot;>Post a Job</h1>
      {error && <p className=&quot;text-red-600 mb-3&quot;>{error}</p>}
      <form onSubmit={handleSubmit} className=&quot;space-y-4&quot;>
        <div>
          <label className=&quot;block text-sm font-medium&quot;>Project Title *</label>
          <input className=&quot;mt-1 w-full border rounded p-2&quot; value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label className=&quot;block text-sm font-medium&quot;>Description *</label>
          <textarea className=&quot;mt-1 w-full border rounded p-2&quot; rows={6} value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label className=&quot;block text-sm font-medium&quot;>Category *</label>
          <input className=&quot;mt-1 w-full border rounded p-2&quot; value={category} onChange={(e) => setCategory(e.target.value)} placeholder=&quot;e.g., LLM App, Data Engineering&quot; />
        </div>
        <div>
          <label className=&quot;block text-sm font-medium&quot;>Required Skills (comma-separated)</label>
          <input className=&quot;mt-1 w-full border rounded p-2&quot; value={skills} onChange={(e) => setSkills(e.target.value)} placeholder=&quot;OpenAI, LangChain, RAG&quot; />        </div>
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
          <div>
            <label className=&quot;block text-sm font-medium&quot;>Budget Min (USD)</label>
            <input type=&quot;number&quot; className=&quot;mt-1 w-full border rounded p-2&quot; value={budgetMinUsd} onChange={(e) => setBudgetMinUsd(e.target.value)} />
          </div>
          <div>
            <label className=&quot;block text-sm font-medium&quot;>Budget Max (USD)</label>
            <input type=&quot;number&quot; className=&quot;mt-1 w-full border rounded p-2&quot; value={budgetMaxUsd} onChange={(e) => setBudgetMaxUsd(e.target.value)} />
          </div>
        </div>
        <div>
          <label className=&quot;block text-sm font-medium&quot;>Delivery Deadline (ISO or YYYY-MM-DD)</label>
          <input className=&quot;mt-1 w-full border rounded p-2&quot; value={deliveryDeadlineIso} onChange={(e) => setDeliveryDeadlineIso(e.target.value)} placeholder=&quot;2025-09-30&quot; />
        </div>
        <div>
          <label className=&quot;block text-sm font-medium&quot;>Email *</label>
          <input type=&quot;email&quot; className=&quot;mt-1 w-full border rounded p-2&quot; value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} placeholder=&quot;you@example.com&quot; />
        </div>
        <div className=&quot;pt-2&quot;>
          <button type=&quot;submit&quot; className=&quot;px-4 py-2 rounded bg-black text-white disabled:opacity-50&quot; disabled={isSubmitting}>
            {isSubmitting ? 'Posting…' : 'Post Job'}          </button>
        </div>
      </form>
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}