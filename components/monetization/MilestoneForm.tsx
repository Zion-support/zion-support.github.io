import React, { useState } from 'react';

type Props = {
  onSubmit: (payload: {
    title: string;
    description?: string;
    dueDate: string;
    amountUsd: number;
  }) => Promise<void> | void;};
=======
  onSubmit: (payload: { title: string, description?: string, dueDate: string, amountUsd: number }) => Promise<void> | void
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
};
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export default function MilestoneForm({ onSubmit }: Props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [amountUsd, setAmountUsd] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const parsedAmount = Number(amountUsd);
    if (!title || !dueDate || !amountUsd || Number.isNaN(parsedAmount)) {
      setError('Please provide Title, Due Date and a valid Amount.');
      return;
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    }
    setLoading(true);
    try {
      await onSubmit({
        title,
        description: description || undefined,
        dueDate,
        amountUsd: parsedAmount,
      });
      setTitle('');
      setDescription('');
      setDueDate('');
      setAmountUsd('');
    } catch (err: any) {
      setError(err?.message || 'Failed to create milestone');
    } finally {
      setLoading(false);    }
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      {error && <div className='text-red-600 text-sm'>{error}</div>}
=======
      setLoading(false)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
  };

  return (
<<<<<<< HEAD
    <form onSubmit={handleSubmit} className='space-y-4'>
      {error && <div className='text-red-600 text-sm'>{error}</div>}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      <div>
        <label className='block text-sm font-medium'>Title</label>
        <input
          className='mt-1 w-full rounded border px-3 py-2'
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder='Phase 1 – Backend Setup'          required
        />
      </div>
      <div>
        <label className='block text-sm font-medium'>Description</label>
=======
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Phase 1 – Backend Setup"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          required
        />
      </div>
      <div>
<<<<<<< HEAD
        <label className='block text-sm font-medium'>Description</label>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        <textarea
          className='mt-1 w-full rounded border px-3 py-2'
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder='Describe deliverables...'
          rows={3}
        />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div>
          <label className='block text-sm font-medium'>Due Date</label>
          <input
            type='date'
            className='mt-1 w-full rounded border px-3 py-2'
            value={dueDate}
            onChange={e => setDueDate(e.target.value)}            required
          />
        </div>
        <div>
          <label className='block text-sm font-medium'>Amount (USD)</label>
=======
            onChange={(e) => setDueDate(e.target.value)}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            required
          />
        </div>
        <div>
<<<<<<< HEAD
          <label className='block text-sm font-medium'>Amount (USD)</label>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          <input
            type='number'
            min={0}
            step='0.01'
            className='mt-1 w-full rounded border px-3 py-2'
            value={amountUsd}
            onChange={e => setAmountUsd(e.target.value)}
            placeholder='3000'            required
=======
            onChange={(e) => setAmountUsd(e.target.value)}
            placeholder="3000"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            required
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          />
        </div>
      </div>
      <button
        type='submit'
        className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50'        disabled={loading}
=======
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        disabled={loading}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      >
        {loading ? 'Adding...' : 'Add Milestone'}
      </button>
    </form>
  );
}
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
