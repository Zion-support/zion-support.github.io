

export default function PostJobPage() {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [skills, setSkills] = useState<string>('')
  const [budgetMinUsd, setBudgetMinUsd] = useState<string>('')
  const [budgetMaxUsd, setBudgetMaxUsd] = useState<string>('')
  const [deliveryDeadlineIso, setDeliveryDeadlineIso] = useState<string>('')
  const [clientEmail, setClientEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  async function handleSubmit(e: React.FormEvent) {

    e.preventDefault();
    setError(null);

    if (!title || !description || !category || !clientEmail) {
      setError('Please fill in all required fields.');

      return
    }
    try {
      setIsSubmitting(true)
      const res = await fetch('/api/jobs', {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({


      router.push(`/client/dashboard`)
    } catch (err: any) {
      setError(err.message |'Something went wrong')
    } finally {

      setIsSubmitting(false),

    }



=======
import { useState } from 'react';
import { useRouter } from 'next/router';
export default function PostJobPage(req, res) {
  try {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [skills, setSkills] = useState<string>('');
  const [budgetMinUsd, setBudgetMinUsd] = useState<string>('');
  const [budgetMaxUsd, setBudgetMaxUsd] = useState<string>('');
  const [deliveryDeadlineIso, setDeliveryDeadlineIso] = useState<string>('');
  const [clientEmail, setClientEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  async function handleSubmit(e: React.FormEvent) {;
    e.preventDefault(),;
    setError(null);
    if (!title || !description || !category || !clientEmail) {;
      setError('Please fill in all required fields.');
      return;
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });



  }
}
;
    try {
      setIsSubmitting(true);
      const res = await fetch('/api/jobs', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON.stringify({;
          title,;
          description,;
          category,;
          requiredSkills: skills;
            .split();
            .map((s) => s.trim());
            .filter(Boolean);
          budgetMinUsd: budgetMinUsd ? Number(budgetMinUsd) : undefined,;
          budgetMaxUsd: budgetMaxUsd ? Number(budgetMaxUsd) : undefined,;
          deliveryDeadlineIso: deliveryDeadlineIso || undefined,;
          clientEmail})}),;
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to post job');
      router.push(`/client/dashboard`);
    } catch (error) {
      setError(err.message || 'Something went wrong');
    } finally {;
      setIsSubmitting(false);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Post a Job</h1>


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Project Title *</label>
          <input className="mt-1 w-full border rounded p-2" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium">Description *</label>
          <textarea className="mt-1 w-full border rounded p-2" rows={6} value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium">Category *</label>
          <input className="mt-1 w-full border rounded p-2" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="e.g., LLM App, Data Engineering" />
        </div>
        <div>
          <label className="block text-sm font-medium">Required Skills (comma-separated)</label>
          <input className="mt-1 w-full border rounded p-2" value={skills} onChange={(e) => setSkills(e.target.value)} placeholder="OpenAI, LangChain, RAG" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Budget Min (USD)</label>
            <input type="number" className="mt-1 w-full border rounded p-2" value={budgetMinUsd} onChange={(e) => setBudgetMinUsd(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium">Budget Max (USD)</label>
            <input type="number" className="mt-1 w-full border rounded p-2" value={budgetMaxUsd} onChange={(e) => setBudgetMaxUsd(e.target.value)} />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium">Delivery Deadline (ISO or YYYY-MM-DD)</label>
          <input className="mt-1 w-full border rounded p-2" value={deliveryDeadlineIso} onChange={(e) => setDeliveryDeadlineIso(e.target.value)} placeholder="2025-09-30" />
        </div>
        <div>
          <label className="block text-sm font-medium">Email *</label>
          <input type="email" className="mt-1 w-full border rounded p-2" value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} placeholder="you@example.com" />
        </div>
        <div className="pt-2">
          <button type="submit" className="px-4 py-2 rounded bg-black text-white disabled:opacity-50" disabled={isSubmitting}>


  );
};

=======
            {isSubmitting ? 'Posting…' : 'Post Job'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}

=======
}

=======
import { useState } from 'react',
import { use_router } from 'next / router',
export default /**
 * PostJobPage - Function description
 */
function PostJobPage() {
  const router = use_router (),
  const [title, set_title] = useState (''),
  const [description, set_description] = useState (''),
  const [category, set_category] = useState (''),
  const [skills, set_skills] = useState < string>(''),
  const [budgetMinUsd, setBudgetMinUsd] = useState < string>(''),
  const [budgetMaxUsd, setBudgetMaxUsd] = useState < string>(''),
  const [deliveryDeadlineIso, setDeliveryDeadlineIso] = useState < string>(''),
  const [client_email, setClientEmail] = useState (''),
  const [is_submitting, setIsSubmitting] = useState (false),
  const [error, set_error] = useState < string | null>(null),
  async /**
 * handle_submit - Function description
 */
function handle_submit() {
    e.prevent_default (),
    set_error (null),
    // Check condition
if ( {) {
  $2
}
      set_error ('Please fill in all required fields.'),
      return;
    }
    try {
      setIsSubmitting (true),
      const res = await fetch ('/api / jobs', {
        method: 'POST',
        headers: { 'Content - Type': 'application / json' },
        body: JSON.stringify ({
          title,
          description,
          category,
          required_skills: skills;
            .split ();
            .map ((s) => s.trim ());
            .filter (Boolean),
          budgetMinUsd: budgetMinUsd ? Number (budgetMinUsd) : undefined,
          budgetMaxUsd: budgetMaxUsd ? Number (budgetMaxUsd) : undefined,
          deliveryDeadlineIso: deliveryDeadlineIso || undefined,
          client_email})}),
      const data = await res.json (),
      if (throw new Error (data.error || 'Failed to post job'), ) {
  $2
}
      router.push (`/client / dashboard`);
    } catch (err: any) {
      set_error (err.message || 'Something went wrong');
    } finally {
      setIsSubmitting (false);
    }
  }
  return (
    <div className="max - w-2xl mx - auto">;
      <h1 className="text - 2xl font - semibold mb - 4">Post a Job</h1>;
      {error && <p className="text - red - 600 mb - 3">{error}</p>}
      <form on_submit={handle_submit} className="space - y-4">;
        <div>;
          <label className="block text - sm font - medium">Project Title *</label>;
          <input className="mt - 1 w - full border rounded p - 2" value={title} on_change={(e) => set_title (e.target.value)} />;
        </div>;
        <div>;
          <label className="block text - sm font - medium">Description *</label>;
          <textarea className="mt - 1 w - full border rounded p - 2" rows={6} value={description} on_change={(e) => set_description (e.target.value)} />;
        </div>;
        <div>;
          <label className="block text - sm font - medium">Category *</label>;
          <input className="mt - 1 w - full border rounded p - 2" value={category} on_change={(e) => set_category (e.target.value)} placeholder="e.g., LLM App, Data Engineering" />;
        </div>;
        <div>;
          <label className="block text - sm font - medium">Required Skills (comma - separated)</label>;
          <input className="mt - 1 w - full border rounded p - 2" value={skills} on_change={(e) => set_skills (e.target.value)} placeholder="OpenAI, LangChain, RAG" />;
        </div>;
        <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
          <div>;
            <label className="block text - sm font - medium">Budget Min (USD)</label>;
            <input type="number" className="mt - 1 w - full border rounded p - 2" value={budgetMinUsd} on_change={(e) => setBudgetMinUsd (e.target.value)} />;
          </div>;
          <div>;
            <label className="block text - sm font - medium">Budget Max (USD)</label>;
            <input type="number" className="mt - 1 w - full border rounded p - 2" value={budgetMaxUsd} on_change={(e) => setBudgetMaxUsd (e.target.value)} />;
          </div>;
        </div>;
        <div>;
          <label className="block text - sm font - medium">Delivery Deadline (ISO or YYYY - MM - DD)</label>;
          <input className="mt - 1 w - full border rounded p - 2" value={deliveryDeadlineIso} on_change={(e) => setDeliveryDeadlineIso (e.target.value)} placeholder="2025 - 09 - 30" />;
        </div>;
        <div>;
          <label className="block text - sm font - medium">Email *</label>;
          <input type="email" className="mt - 1 w - full border rounded p - 2" value={client_email} on_change={(e) => setClientEmail (e.target.value)} placeholder="you@example.com" />;
        </div>;
        <div className="pt - 2">;
          <button type="submit" className="px - 4 py - 2 rounded bg - black text - white disabled:opacity - 50" disabled={is_submitting}>;
            {is_submitting ? 'Posting…' : 'Post Job'}
          </button>;
        </div>;
      </form>;

    </div>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
