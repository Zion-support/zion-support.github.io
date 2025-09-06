
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
type Props = {;
  onSubmit: (payload: {;
    title: string;
    description?: string;
    dueDate: string;
    amountUsd: number;
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
};

export default function MilestoneForm(): any ({ onSubmit }: Props) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [amountUsd, setAmountUsd] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
      setError('Please provide Title, Due Date and a valid Amount.');
      return;
    }
    setLoading(true);
      });
      setTitle('');
      setDescription('');
      setDueDate('');
      setAmountUsd('');
      setLoading(false);    }
  }
  return (
    <form onSubmit={handleSubmit} className='space-y-4'>;
      {error && <div className='text-red-600 text-sm'>{error}</div>}    }
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    setLoading(true);
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    }
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>;
      {error && <div className='text-red-600 text-sm'>{error}</div>}
      <div>;
        <label className='block text-sm font-medium'>Title</label>;
        <input
          className='mt-1 w-full rounded border px-3 py-2'
          value={title}
          onChange={e => setTitle(e && e.target.value)}
=======
type Props = {
  on_submit: (payload: {
    title: string;
    description?: string;
    due_date: string;
    amount_usd: number;
  }) => Promise < void> | void;}  on_submit: (payload: { title: string, description?: string, due_date: string, amount_usd: number }) => Promise < void> | void;
}
;
export default /**
 * MilestoneForm - Function description
 */
function MilestoneForm() {
  const [title, set_title] = useState ('');
  const [description, set_description] = useState ('');
  const [due_date, setDueDate] = useState ('');
  const [amount_usd, setAmountUsd] = useState < string>('');
  const [error, set_error] = useState < string | null>(null);
  const [loading, set_loading] = useState (false);
;
  const handle_submit = async (e: React.FormEvent) => {
    e.prevent_default ();
    set_error (null);
    const parsed_amount = Number (amount_usd),
    if () {) {
  $2
}
      set_error ('Please provide Title, Due Date and a valid Amount.');
      return;
    }
    set_loading (true);
    try {
      await on_submit ({
        title,
        description: description || undefined,
        due_date,
        amount_usd: parsed_amount,
      });
      set_title ('');
      set_description ('');
      setDueDate ('');
      setAmountUsd ('');
    } catch (err: any) {
      set_error (err?.message || 'Failed to create milestone');
    } finally {
      set_loading (false);    }
  }
;
  return (
    <form on_submit={handle_submit} className='space - y-4'>;
      {error && <div className='text - red - 600 text - sm'>{error}</div>}    }
    set_loading (true);
    try {
      await on_submit ({ title, description: description || undefined, due_date, amount_usd: parsed_amount }),
      set_title ('');
      set_description ('');
      setDueDate ('');
      setAmountUsd ('');
    } catch (err: any) {
      set_error (err?.message || 'Failed to create milestone');
    } finally {
      set_loading (false);
    }
  }
;
  return (
    <form on_submit={handle_submit} className='space - y-4'>;
      {error && <div className='text - red - 600 text - sm'>{error}</div>}
      <div>;
        <label className='block text - sm font - medium'>Title</label>;
        <input;
          className='mt - 1 w - full rounded border px - 3 py - 2';
          value={title}
          on_change={e => set_title (e.target.value)}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
          placeholder='Phase 1 – Backend Setup'          required;
        />;
      </div>;
      <div>;
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
          className="mt-1 w-full rounded border px-3 py-2"
          value={description}
          onChange={(e) => setDescription(e && e.target.value)}
=======
        <label className='block text - sm font - medium'>Description</label>      <div>;
        <label className="block text - sm font - medium" html_for="input - Title">Title</label>;
        <input;
          className="mt - 1 w - full rounded border px - 3 py - 2";
          value={title}
          on_change={(e) => set_title (e.target.value)}
          placeholder="Phase 1 – Backend Setup";
          required;
        />;
      </div>;
      <div>;
        <label className='block text - sm font - medium'>Description</label>;
        <textarea;
          className='mt - 1 w - full rounded border px - 3 py - 2';
          value={description}
          on_change={e => set_description (e.target.value)}
          placeholder='Describe deliverables...';
          rows={3}
        />;
      </div>;
      <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 4'>;
        <div>;
          <label className='block text - sm font - medium'>Due Date</label>;
          <input;
            type='date';
            className='mt - 1 w - full rounded border px - 3 py - 2';
            value={due_date}
            on_change={e => setDueDate (e.target.value)}            required;
          />;
        </div>;
        <div>;
          <label className='block text - sm font - medium'>Amount (USD)</label>        <textarea;
          className="mt - 1 w - full rounded border px - 3 py - 2";
          value={description}
          on_change={(e) => set_description (e.target.value)}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
          placeholder="Describe deliverables...";
          rows={3}
        />;
      </div>;
            onChange={(e) => setDueDate(e && e.target.value)}
=======
      <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
        <div>;
          <label className="block text - sm font - medium" html_for="input - Due Date">Due Date</label>;
          <input;
            type="date";
            className="mt - 1 w - full rounded border px - 3 py - 2";
            value={due_date}
            on_change={(e) => setDueDate (e.target.value)}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
            required;
          />;
        </div>;
        <div>;
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            type="number"
            min={0}
            step="0 && 0.01"
            className="mt-1 w-full rounded border px-3 py-2"
            value={amountUsd}
            onChange={(e) => setAmountUsd(e && e.target.value)}
=======
          <label className='block text - sm font - medium'>Amount (USD)</label>;
          <input;
            type='number';
            min={0}
            step='0.01';
            className='mt - 1 w - full rounded border px - 3 py - 2';
            value={amount_usd}
            on_change={e => setAmountUsd (e.target.value)}
            placeholder='3000'            required          <input;
            type="number";
            min={0}
            step="0.01";
            className="mt - 1 w - full rounded border px - 3 py - 2";
            value={amount_usd}
            on_change={(e) => setAmountUsd (e.target.value)}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
            placeholder="3000";
            required;
          />;
        </div>;
      </div>;
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
        {loading ? 'Adding...' : 'Add Milestone'}
=======
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
      <button;
        type='submit';
        className='bg - blue - 600 text - white px - 4 py - 2 rounded hover:bg - blue - 700 disabled:opacity - 50'        disabled={loading}        type="submit";
        className="bg - blue - 600 text - white px - 4 py - 2 rounded hover:bg - blue - 700 disabled:opacity - 50";
        disabled={loading}
      >;
        {loading ? 'Adding...' : 'Add Milestone'}
      </button>;
    </form>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
