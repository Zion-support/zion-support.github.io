

import React, { useState } from 'react';
type Props = {
  onSubmit: (payload: { title: string, description?: string, dueDate: string, amountUsd: number}) => Promise<void> | void
},

export default function MilestoneForm({ onSubmit }: Props) {
  const [title, setTitle] = useState($2);
  const [description, setDescription] = useState($2);
  const [dueDate, setDueDate] = useState($2);
  const [amountUsd, setAmountUsd] = useState<string>(''),
  const [error, setError] = useState<string | null>(null),
  const [loading, setLoading] = useState($2);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault($2);
    setError($2);
    const parsedAmount = Number($2);
    if (!title || !dueDate || !amountUsd || Number.isNaN(parsedAmount)) {
      setError($2);
      return
    }
    setLoading($2);
    try {
      await onSubmit($2);
      setTitle($2);
      setDescription($2);
      setDueDate($2);
      setAmountUsd('')
    } catch (err: any) {
      setError(err?.message || 'Failed to create milestone')
    } finally {
      setLoading(false)
    }
  },

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <div className="text-red-600 text-sm">{error}</div>}
      <div>
        <label className="block text-sm font-medium">Title</label>
        <input
          className="mt-1 w-full rounded border px-3 py-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Phase 1 – Backend Setup"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Description</label>
        <textarea
          className="mt-1 w-full rounded border px-3 py-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe deliverables..."
          rows={3}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Due Date</label>
          <input
            type="date"
            className="mt-1 w-full rounded border px-3 py-2"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Amount (USD)</label>
          <input
            type="number"
            min={0}
            step="0.01"
            className="mt-1 w-full rounded border px-3 py-2"
            value={amountUsd}
            onChange={(e) => setAmountUsd(e.target.value)}
            placeholder="3000"
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Adding...' : 'Add Milestone'}
      </button>
    </form>
);
}
}

