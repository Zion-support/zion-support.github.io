import { useRouter } from 'next/router';
import { TALENT_PROFILES } from '../data/talent';

export default function RequestToHirePage() {
  const router = useRouter();
  const { talent } = router.query as { talent?: string };
    name: '',
    email: '',
    budget: '',
    timeline: '',

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!form.name || !form.email || !form.description) {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          budget: normalizedBudget,
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setSubmitting(false);
    }
  };

  if (result) {
    return (
      <div className="max-w-xl mx-auto py-12">
        <h1 className="text-2xl font-semibold mb-2">Thanks!</h1>
        <p className="text-gray-600 mb-4">We received your request. We will notify the appropriate team.</p>
        <div className="text-sm text-gray-500">Confirmation ID: {result.id}</div>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Request to Hire{selected ? ` — ${selected.name}` : ''}</h1>
      <form className="space-y-4" onSubmit={onSubmit}>
        <div>
          <label className="block text-sm font-medium mb-1">Your Name</label>
        </div>
        {error && <div className="text-sm text-red-600">{error}</div>}
        <button disabled={submitting} className="px-4 py-2 rounded bg-black text-white">
          {submitting ? 'Submitting…' : 'Submit Request'}
        </button>
      </form>
    </div>
  );
}