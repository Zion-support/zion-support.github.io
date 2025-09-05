import React, { useState } from 'react',;
type Props = {;
  onSubmit: (payload: { title: string, description?: string, dueDate: string, amountUsd: number }) => Promise<void> | void;
},;
export default function MilestoneForm({ onSubmit }: Props) {;
  const [title, setTitle] = useState(''),;
  const [description, setDescription] = useState(''),;
  const [dueDate, setDueDate] = useState(''),;
  const [amountUsd, setAmountUsd] = useState<string>(''),;
  const [error, setError] = useState<string | null>(null),;
  const [loading, setLoading] = useState(false),;
  const handleSubmit = async (e: React.FormEvent) => {;
    e.preventDefault(),;
    setError(null),;
    const parsedAmount = Number(amountUsd),;
    if (!title || !dueDate || !amountUsd || Number.isNaN(parsedAmount)) {;
      setError('Please provide Title, Due Date and a valid Amount.'),;
      return;
    }
    setLoading(true),;
    try {;
      await onSubmit({ title, description: description || undefined, dueDate, amountUsd: parsedAmount }),;
      setTitle(''),;
      setDescription(''),;
      setDueDate('');
      setAmountUsd('');
    } catch (err: any) {;
      setError(err?.message || 'Failed to create milestone');
    } finally {;
      setLoading(false);
    }
<<<<<<< HEAD
  },

  return (
    <form onSubmit={handleSubmit} className=&quot;space-y-4&quot;>
      {error && <div className=&quot;text-red-600 text-sm&quot;>{error}</div>}
      <div>
        <label className=&quot;block text-sm font-medium&quot;>Title</label>
        <input
          className=&quot;mt-1 w-full rounded border px-3 py-2&quot;
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder=&quot;Phase 1 – Backend Setup&quot;
          required
        />
      </div>
      <div>
        <label className=&quot;block text-sm font-medium&quot;>Description</label>
        <textarea
          className=&quot;mt-1 w-full rounded border px-3 py-2&quot;
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder=&quot;Describe deliverables...&quot;
          rows={3}
        />
      </div>
      <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
        <div>
          <label className=&quot;block text-sm font-medium&quot;>Due Date</label>
          <input
            type=&quot;date&quot;
            className=&quot;mt-1 w-full rounded border px-3 py-2&quot;
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label className=&quot;block text-sm font-medium&quot;>Amount (USD)</label>
          <input
            type=&quot;number&quot;
            min={0}
            step=&quot;0.01&quot;
            className=&quot;mt-1 w-full rounded border px-3 py-2&quot;
            value={amountUsd}
            onChange={(e) => setAmountUsd(e.target.value)}
            placeholder=&quot;3000&quot;
            required
          />
        </div>
      </div>
      <button
        type=&quot;submit&quot;
        className=&quot;bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50&quot;
=======
  };
  return (;
    <form onSubmit={handleSubmit} className="space-y-4">;
      {error && <div className="text-red-600 text-sm">{error}</div>}
      <div>;
        <label className="block text-sm font-medium">Title</label>;
        <input;
          className="mt-1 w-full rounded border px-3 py-2";
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Phase 1 – Backend Setup";
          required;
        />;
      </div>;
      <div>;
        <label className="block text-sm font-medium">Description</label>;
        <textarea;
          className="mt-1 w-full rounded border px-3 py-2";
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe deliverables...";
          rows={3}
        />;
      </div>;
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
        <div>;
          <label className="block text-sm font-medium">Due Date</label>;
          <input;
            type="date";
            className="mt-1 w-full rounded border px-3 py-2";
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required;
          />;
        </div>;
        <div>;
          <label className="block text-sm font-medium">Amount (USD)</label>;
          <input;
            type="number";
            min={0}
            step="0.01";
            className="mt-1 w-full rounded border px-3 py-2";
            value={amountUsd}
            onChange={(e) => setAmountUsd(e.target.value)}
            placeholder="3000";
            required;
          />;
        </div>;
      </div>;
      <button;
        type="submit";
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
        disabled={loading}
      >;
        {loading ? 'Adding...' : 'Add Milestone'}
      </button>;
    </form>;
  );
}