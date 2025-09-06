
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React, { useState } from 'react';

<<<<<<< HEAD
type Props = {;
  onSubmit: (payload: {;
    title: string;
    description?: string;
    dueDate: string;
    amountUsd: number;
<<<<<<< HEAD
  }) => Promise<void> | void;};  onSubmit: (payload: { title: string, description?: string, dueDate: string, amountUsd: number }) => Promise<void> | void
}
export default function MilestoneForm({ onSubmit }: Props) {
=======
  }) => Promise<void> | void;};  onSubmit: (payload: { title: string, description?: string, dueDate: string, amountUsd: number }) => Promise<void> | void;
=======
type Props = {
  onSubmit: (payload: { title: string, description?: string, dueDate: string, amountUsd: number }) => Promise<void> | void
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
};

export default function MilestoneForm(): any ({ onSubmit }: Props) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [amountUsd, setAmountUsd] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
<<<<<<< HEAD
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const parsedAmount = Number(amountUsd)
    if (!title |!dueDate |!amountUsd |Number.isNaN(parsedAmount)) {
=======

  const handleSubmit = async (e: React && React.FormEvent) => {;
    e && e.preventDefault();
    setError(null);
    const parsedAmount = Number(amountUsd),;
    if (!title || !dueDate || !amountUsd || Number && Number.isNaN(parsedAmount)) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      setError('Please provide Title, Due Date and a valid Amount.');
<<<<<<< HEAD
      return;
    }
    setLoading(true);
<<<<<<< HEAD
    try {
      await onSubmit({
        title
        description: description |undefined
        dueDate
        amountUsd: parsedAmount
=======
    try {;
      await onSubmit({;
        title,;
        description: description || undefined,;
        dueDate,;
        amountUsd: parsedAmount,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      });
      setTitle('');
      setDescription('');
      setDueDate('');
      setAmountUsd('');
<<<<<<< HEAD
    } catch (err: any) {
      setError(err?.message |'Failed to create milestone');
    } finally {
=======
    } catch (err: any) {;
      setError(err?.message || 'Failed to create milestone');
    } finally {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      setLoading(false);    }
  }
  return (
    <form onSubmit={handleSubmit} className='space-y-4'>;
      {error && <div className='text-red-600 text-sm'>{error}</div>}    }
=======
      return
    }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    setLoading(true);
<<<<<<< HEAD
    try {
      await onSubmit({ title, description: description |undefined, dueDate, amountUsd: parsedAmount })
      setTitle('');
      setDescription('');
      setDueDate('');
      setAmountUsd('')
    } catch (err: any) {
      setError(err?.message |'Failed to create milestone')
    } finally {
      setLoading(false)
<<<<<<< HEAD
=======
    try {;
      await onSubmit({ title, description: description || undefined, dueDate, amountUsd: parsedAmount }),;
      setTitle('');
      setDescription('');
      setDueDate('');
      setAmountUsd('');
    } catch (err: any) {;
      setError(err?.message || 'Failed to create milestone');
    } finally {;
      setLoading(false);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    }
  }

  return (
<<<<<<< HEAD
    <form onSubmit={handleSubmit} className='space-y-4'>;
      {error && <div className='text-red-600 text-sm'>{error}</div>}
      <div>;
        <label className='block text-sm font-medium'>Title</label>;
        <input
          className='mt-1 w-full rounded border px-3 py-2'
          value={title}
          onChange={e => setTitle(e && e.target.value)}
          placeholder='Phase 1 – Backend Setup'          required;
        />;
      </div>;
      <div>;
        <label className='block text-sm font-medium'>Description</label>      <div>;
        <label className="block text-sm font-medium" htmlFor="input-Title">Title</label>;
        <input
          className="mt-1 w-full rounded border px-3 py-2"
          value={title}
          onChange={(e) => setTitle(e && e.target.value)}
          placeholder="Phase 1 – Backend Setup";
          required;
        />;
      </div>;
      <div>;
        <label className='block text-sm font-medium'>Description</label>;
        <textarea
          className='mt-1 w-full rounded border px-3 py-2'
          value={description}
          onChange={e => setDescription(e && e.target.value)}
          placeholder='Describe deliverables...';
          rows={3}
        />;
      </div>;
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>;
        <div>;
          <label className='block text-sm font-medium'>Due Date</label>;
          <input
            type='date'
            className='mt-1 w-full rounded border px-3 py-2'
            value={dueDate}
            onChange={e => setDueDate(e && e.target.value)}            required;
          />;
        </div>;
        <div>;
          <label className='block text-sm font-medium'>Amount (USD)</label>        <textarea
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
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium" htmlFor="input-Description">Description</label>
        <textarea
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
          className="mt-1 w-full rounded border px-3 py-2"
          value={description}
          onChange={(e) => setDescription(e && e.target.value)}
          placeholder="Describe deliverables...";
          rows={3}
        />;
      </div>;
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
        <div>;
          <label className="block text-sm font-medium" htmlFor="input-Due Date">Due Date</label>;
          <input
            type="date"
            className="mt-1 w-full rounded border px-3 py-2"
            value={dueDate}
<<<<<<< HEAD
            onChange={(e) => setDueDate(e && e.target.value)}
            required;
          />;
        </div>;
        <div>;
          <label className='block text-sm font-medium'>Amount (USD)</label>;
          <input
            type='number'
            min={0}
            step='0 && 0.01'
            className='mt-1 w-full rounded border px-3 py-2'
            value={amountUsd}
            onChange={e => setAmountUsd(e && e.target.value)}
            placeholder='3000'            required          <input
=======
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium" htmlFor="input-Amount (USD)">Amount (USD)</label>
          <input
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
            type="number"
            min={0}
            step="0 && 0.01"
            className="mt-1 w-full rounded border px-3 py-2"
            value={amountUsd}
<<<<<<< HEAD
            onChange={(e) => setAmountUsd(e && e.target.value)}
            placeholder="3000";
            required;
          />;
        </div>;
      </div>;
      <button
        type='submit'
        className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50'        disabled={loading}        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        disabled={loading}>;
=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
        {loading ? 'Adding...' : 'Add Milestone'}
<<<<<<< HEAD
      </button>
    </form>
<<<<<<< HEAD
);
}
=======
      </button>;
    </form>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
