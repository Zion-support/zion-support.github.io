
<<<<<<< HEAD
<<<<<<< HEAD
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


=======
  }) => Promise<void> | void;};  onSubmit: (payload: { title: string, description?: string, dueDate: string, amountUsd: number }) => Promise<void> | void;
type Props = {
  onSubmit: (payload: { title: string, description?: string, dueDate: string, amountUsd: number }) => Promise<void> | void
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
};

export default function MilestoneForm(): any ({ onSubmit }: Props) {;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  }) => Promise<void> | void;};  onSubmit: (payload: { title: string, description?: string, dueDate: string, amountUsd: number }) => Promise<void> | void

};

export default function MilestoneForm({ onSubmit }: Props) {;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [amountUsd, setAmountUsd] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const handleSubmit = async (e: React && React.FormEvent) => {;
    e && e.preventDefault();
    setError(null);
    const parsedAmount = Number(amountUsd),;
    if (!title || !dueDate || !amountUsd || Number && Number.isNaN(parsedAmount)) {;
<<<<<<< HEAD

      setError('Please provide Title, Due Date and a valid Amount.');


    setLoading(true);

=======
      setError('Please provide Title, Due Date and a valid Amount.');
    try {;
      await onSubmit({;
        title,;
        description: description || undefined,;
        dueDate,;
        amountUsd: parsedAmount,;
      });
      setTitle('');
      setDescription('');
      setDueDate('');
      setAmountUsd('');
    } catch (err: any) {;
      setError(err?.message || 'Failed to create milestone');
    } finally {;
      setLoading(false);    }
  }
  return (
    <form onSubmit={handleSubmit} className='space-y-4'>;
      {error && <div className='text-red-600 text-sm'>{error}</div>}    }
      return
    }
    setLoading(true);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    }
  }
=======

  };

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  };

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  return (


<<<<<<< HEAD
=======
    }
  }
  return (
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          placeholder='Phase 1 – Backend Setup'          required;
        />;
      </div>;
      <div>;
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <div className="text-red-600 text-sm">{error}</div>}
      <div>
        <label className="block text-sm font-medium" htmlFor="input-Title">Title</label>
        <input
          className="mt-1 w-full rounded border px-3 py-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Phase 1 – Backend Setup"
<<<<<<< HEAD
=======
      <div>
        <label className=&quot;block text-sm font-medium&quot;>Title</label>
        <input
          className=&quot;mt-1 w-full rounded border px-3 py-2&quot;
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder=&quot;Phase 1 – Backend Setup&quot;

import React, { useState } from 'react';

=======
};

export default function MilestoneForm(): any ({ onSubmit }: Props) {;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
type Props = {
  onSubmit: (payload: {
    title: string;
    description?: string;
    dueDate: string;
    amountUsd: number;
  }) => Promise<void> | void;};  onSubmit: (payload: { title: string, description?: string, dueDate: string, amountUsd: number }) => Promise<void> | void
  }) => Promise<void> | void;};  onSubmit: (payload: { title: string, description?: string, dueDate: string, amountUsd: number }) => Promise<void> | void
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [amountUsd, setAmountUsd] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
    }
  }
  };
      setLoading(false);    }
  }
  return (
<<<<<<< HEAD
    <form onSubmit={handleSubmit} className='space-y-4'>
      {error && <div className='text-red-600 text-sm'>{error}</div>}
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
        <label className='block text-sm font-medium'>Description</label>      <div>
        <label className="block text-sm font-medium" htmlFor="input-Title">Title</label>
        <input
          className="mt-1 w-full rounded border px-3 py-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Phase 1 – Backend Setup"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          required
        />
      </div>
      <div>
<<<<<<< HEAD
        <label className="block text-sm font-medium" htmlFor="input-Description">Description</label>
        <textarea

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
        <label className='block text-sm font-medium'>Description</label>
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
          <label className='block text-sm font-medium'>Amount (USD)</label>        <textarea
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    <form onSubmit={handleSubmit} className='space-y-4'>;
      {error && <div className='text-red-600 text-sm'>{error}</div>}    }
    setLoading(true);
    }
  }

          placeholder='Phase 1 – Backend Setup'          required;
        />;
      </div>;
      <div>;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD
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


=======
      <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
        <div>;
          <label className="block text - sm font - medium" html_for="input - Due Date">Due Date</label>;
          <input;
            type="date";
            className="mt - 1 w - full rounded border px - 3 py - 2";
            value={due_date}
            on_change={(e) => setDueDate (e.target.value)}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            required;
          />;
        </div>;
        <div>;
<<<<<<< HEAD

=======
=======
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium" htmlFor="input-Due Date">Due Date</label>
          <input
            type="date"
            className="mt-1 w-full rounded border px-3 py-2"
            value={dueDate}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </div>
        <div>
<<<<<<< HEAD
          <label className="block text-sm font-medium" htmlFor="input-Amount (USD)">Amount (USD)</label>
          <input

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
          <label className='block text-sm font-medium'>Amount (USD)</label>
          <input
            type='number'
            min={0}
            step='0.01'
            className='mt-1 w-full rounded border px-3 py-2'
            value={amountUsd}
            onChange={e => setAmountUsd(e.target.value)}
            placeholder='3000'            required          <input
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            type="number"
            min={0}
            step="0 && 0.01"
            className="mt-1 w-full rounded border px-3 py-2"
            value={amountUsd}
<<<<<<< HEAD
<<<<<<< HEAD


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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            placeholder="3000";
            required;
          />;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            onChange={(e) => setAmountUsd(e.target.value)}
            placeholder="3000"
            required
          />
        </div>
      </div>
      <button
<<<<<<< HEAD
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        disabled={loading}
      >

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        {loading ? 'Adding...' : 'Add Milestone'}

      </button>;
    </form>;
  );
<<<<<<< HEAD
=======
=======

        type='submit'
        className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50'        disabled={loading}        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Adding...' : 'Add Milestone'}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

  );

}
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
      </button>
    </form>
);
  );
}
}
  );
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
