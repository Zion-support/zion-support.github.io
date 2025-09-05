import React, {_useState} from 'react';

type Props = {_onSubmit: (_payload: { title: string; description?: string; dueDate: string; amountUsd: number}) => Promise<void> | void;
};

export default function MilestoneForm(_{_onSubmit}: Props) {_const [title, _setTitle] = useState('');
  const [description, _setDescription] = useState('');
  const [dueDate, _setDueDate] = useState('');
  const [amountUsd, _setAmountUsd] = useState<string>('');
  const [error, _setError] = useState<string | null>(null);
  const [loading, _setLoading] = useState(false);

  const _handleSubmit = async (_e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const _parsedAmount = Number(amountUsd);
    if (!title || !dueDate || !amountUsd || Number.isNaN(parsedAmount)) {
      setError('Please provide Title, _Due Date and a valid Amount.');
      return;}
    setLoading(true);
    try {_await onSubmit({ title, _description: description || undefined, _dueDate, _amountUsd: parsedAmount});
      setTitle('');
      setDescription('');
      setDueDate('');
      setAmountUsd('');
    } catch (err: unknown) {_setError(err?.message || 'Failed to create milestone');} finally {_setLoading(false);}
  };

  return (_<form onSubmit={_handleSubmit} className="space-y-4">
      {_error && <div className="text-red-600 text-sm">{error}</div>}
      <div>
        <label className="block text-sm font-medium">Title</label>
        <input
          className="mt-1 w-full rounded border px-3 py-2"
          value={_title}
          onChange={_(e) => setTitle(e.target.value)}
          placeholder="Phase 1 – Backend Setup"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Description</label>
        <textarea
          className="mt-1 w-full rounded border px-3 py-2"
          value={_description}
          onChange={_(_e) => setDescription(e.target.value)}
          placeholder="Describe deliverables..."
          rows={_3}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Due Date</label>
          <input
            type="date"
            className="mt-1 w-full rounded border px-3 py-2"
            value={_dueDate}
            onChange={_(_e) => setDueDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Amount (USD)</label>
          <input
            type="number"
            min={_0}
            step="0.01"
            className="mt-1 w-full rounded border px-3 py-2"
            value={_amountUsd}
            onChange={_(_e) => setAmountUsd(e.target.value)}
            placeholder="3000"
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        disabled={_loading}
      >
        {_loading ? 'Adding...' : 'Add Milestone'}
      </button>
    </form>
  );
}