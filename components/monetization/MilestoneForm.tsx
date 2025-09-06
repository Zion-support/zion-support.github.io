import React, { useState } from 'react';

type Props = {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  onSubmit: (payload: {
    title: string;
    description?: string;
    dueDate: string;
    amountUsd: number;
<<<<<<< HEAD
  }) => Promise<void> | void;};
=======
  }) => Promise<void> | void;
=======
  onSubmit: (payload: { title: string, description?: string, dueDate: string, amountUsd: number }) => Promise<void> | void
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
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
<<<<<<< HEAD
      return;
=======
<<<<<<< HEAD
<<<<<<< HEAD
      return;
=======
      return
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
<<<<<<< HEAD
      setLoading(false);    }
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      {error && <div className='text-red-600 text-sm'>{error}</div>}
=======
<<<<<<< HEAD
      setLoading(false);
=======
      return
    }
    setLoading(true);
    try {
      await onSubmit({ title, description: description || undefined, dueDate, amountUsd: parsedAmount }),
      setTitle('');
      setDescription('');
      setDueDate('');
      setAmountUsd('')
    } catch (err: any) {
      setError(err?.message || 'Failed to create milestone')
    } finally {
      setLoading(false)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      setLoading(false)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
  };

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <form onSubmit={handleSubmit} className='space-y-4'>
      {error && <div className='text-red-600 text-sm'>{error}</div>}
=======
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <div className="text-red-600 text-sm">{error}</div>}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      <div>
        <label className='block text-sm font-medium'>Title</label>
        <input
          className='mt-1 w-full rounded border px-3 py-2'
          value={title}
<<<<<<< HEAD
          onChange={e => setTitle(e.target.value)}
          placeholder='Phase 1 – Backend Setup'          required
        />
      </div>
      <div>
        <label className='block text-sm font-medium'>Description</label>
=======
<<<<<<< HEAD
          onChange={e => setTitle(e.target.value)}
          placeholder='Phase 1 – Backend Setup'
=======
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <div className="text-red-600 text-sm">{error}</div>}
      <div>
        <label className="block text-sm font-medium" htmlFor="input-Title">Title</label>
        <input
          className="mt-1 w-full rounded border px-3 py-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Phase 1 – Backend Setup"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Phase 1 – Backend Setup"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          required
        />
      </div>
      <div>
<<<<<<< HEAD
<<<<<<< HEAD
        <label className='block text-sm font-medium'>Description</label>
=======
        <label className="block text-sm font-medium" htmlFor="input-Description">Description</label>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
<<<<<<< HEAD
            onChange={e => setDueDate(e.target.value)}            required
          />
        </div>
        <div>
          <label className='block text-sm font-medium'>Amount (USD)</label>
=======
<<<<<<< HEAD
            onChange={e => setDueDate(e.target.value)}
=======
        <label className="block text-sm font-medium" htmlFor="input-Description">Description</label>
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
          <label className="block text-sm font-medium" htmlFor="input-Due Date">Due Date</label>
          <input
            type="date"
            className="mt-1 w-full rounded border px-3 py-2"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            onChange={(e) => setDueDate(e.target.value)}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            required
          />
        </div>
        <div>
<<<<<<< HEAD
<<<<<<< HEAD
          <label className='block text-sm font-medium'>Amount (USD)</label>
=======
          <label className="block text-sm font-medium" htmlFor="input-Amount (USD)">Amount (USD)</label>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          <input
            type='number'
            min={0}
            step='0.01'
            className='mt-1 w-full rounded border px-3 py-2'
            value={amountUsd}
<<<<<<< HEAD
            onChange={e => setAmountUsd(e.target.value)}
            placeholder='3000'            required
=======
<<<<<<< HEAD
            onChange={e => setAmountUsd(e.target.value)}
            placeholder='3000'
=======
          <label className="block text-sm font-medium" htmlFor="input-Amount (USD)">Amount (USD)</label>
          <input
            type="number"
            min={0}
            step="0.01"
            className="mt-1 w-full rounded border px-3 py-2"
            value={amountUsd}
            onChange={(e) => setAmountUsd(e.target.value)}
            placeholder="3000"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
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
<<<<<<< HEAD
        type='submit'
        className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50'        disabled={loading}
=======
<<<<<<< HEAD
<<<<<<< HEAD
        type='submit'
        className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50'
=======
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
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
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
