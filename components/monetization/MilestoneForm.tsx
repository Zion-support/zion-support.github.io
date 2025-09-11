
<<<<<<< HEAD
<<<<<<< HEAD
  }) => Promise<void> | void;};  onSubmit: (payload: { title: string, description?: string, dueDate: string, amountUsd: number }) => Promise<void> | void;
type Props = {
  onSubmit: (payload: { title: string, description?: string, dueDate: string, amountUsd: number }) => Promise<void> | void
};
export default function MilestoneForm(): any ({ onSubmit }: Props) {;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

};
export default function MilestoneForm(): any ({ onSubmit }: Props) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }) => Promise<void> | void;};  onSubmit: (payload: { title: string, description?: string, dueDate: string, amountUsd: number }) => Promise<void> | void

};

export default function MilestoneForm({ onSubmit }: Props) {;

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [amountUsd, setAmountUsd] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const handleSubmit = async (e: React && React.FormEvent) => {;
    e && e.preventDefault();
    setError(null);
    const parsedAmount = Number(amountUsd),;
    if (!title || !dueDate || !amountUsd || Number && Number.isNaN(parsedAmount)) {;
<<<<<<< HEAD
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
=======

      setError('Please provide Title, Due Date and a valid Amount.');


    setLoading(true);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
  };

=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    }
  }
=======

  };

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  return (


<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          placeholder='Phase 1 – Backend Setup'          required;
        />;
      </div>;
      <div>;
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
      <div>
        <label className=&quot;block text-sm font-medium&quot;>Title</label>
        <input
          className=&quot;mt-1 w-full rounded border px-3 py-2&quot;
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder=&quot;Phase 1 – Backend Setup&quot;

import React, { useState } from 'react';

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
type Props = {
  onSubmit: (payload: {
    title: string;
    description?: string;
    dueDate: string;
    amountUsd: number;
  }) => Promise<void> | void;};  onSubmit: (payload: { title: string, description?: string, dueDate: string, amountUsd: number }) => Promise<void> | void
<<<<<<< HEAD
}
export default function MilestoneForm({ onSubmit }: Props) {
};

export default function MilestoneForm({ onSubmit }: Props) {;
=======
  }) => Promise<void> | void;};  onSubmit: (payload: { title: string, description?: string, dueDate: string, amountUsd: number }) => Promise<void> | void

};

export default function MilestoneForm({ onSubmit }: Props) {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      setError('Please provide Title, Due Date and a valid Amount.');
      return;
    }
    setLoading(true);
    try {
      await onSubmit({
        title
        description: description |undefined
        dueDate
        amountUsd: parsedAmount
      });
=======


  const handleSubmit = async (e: React && React.FormEvent) => {;
    e && e.preventDefault();
    setError(null);
    const parsedAmount = Number(amountUsd),;
    if (!title || !dueDate || !amountUsd || Number && Number.isNaN(parsedAmount)) {;

      setError('Please provide Title, Due Date and a valid Amount.');


    setLoading(true);

    try {;
      await onSubmit({ title, description: description || undefined, dueDate, amountUsd: parsedAmount }),;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      setTitle('');
      setDescription('');
      setDueDate('');
      setAmountUsd('');
    } catch (err: any) {
      setError(err?.message |'Failed to create milestone');
    } finally {
      setLoading(false);    }
  }
  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      {error && <div className='text-red-600 text-sm'>{error}</div>}    }
    setLoading(true);
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
    }
  }
  };

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
=======


          placeholder='Phase 1 – Backend Setup'          required;
        />;
      </div>;
      <div>;

=======
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <div className="text-red-600 text-sm">{error}</div>}
      <div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <label className="block text-sm font-medium" htmlFor="input-Title">Title</label>
        <input
          className="mt-1 w-full rounded border px-3 py-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Phase 1 – Backend Setup"
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          required
        />
      </div>
      <div>
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
        <label className="block text-sm font-medium" htmlFor="input-Description">Description</label>
        <textarea

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        <label className="block text-sm font-medium" htmlFor="input-Description">Description</label>
        <textarea

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          className="mt-1 w-full rounded border px-3 py-2"
          value={description}
          onChange={(e) => setDescription(e && e.target.value)}
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
      <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
        <div>;
          <label className="block text - sm font - medium" html_for="input - Due Date">Due Date</label>;
          <input;
            type="date";
            className="mt - 1 w - full rounded border px - 3 py - 2";
            value={due_date}
            on_change={(e) => setDueDate (e.target.value)}
=======
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
          placeholder="Describe deliverables...";
          rows={3}
        />;
      </div>;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            required;
          />;
        </div>;
        <div>;
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
            required
          />
        </div>
        <div>
<<<<<<< HEAD
<<<<<<< HEAD
          <label className='block text-sm font-medium'>Amount (USD)</label>
          <input
            type='number'
            min={0}
            step='0.01'
            className='mt-1 w-full rounded border px-3 py-2'
            value={amountUsd}
            onChange={e => setAmountUsd(e.target.value)}
            placeholder='3000'            required          <input
=======
          <label className="block text-sm font-medium" htmlFor="input-Amount (USD)">Amount (USD)</label>
          <input

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          <label className="block text-sm font-medium" htmlFor="input-Amount (USD)">Amount (USD)</label>
          <input

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            type="number"
            min={0}
            step="0 && 0.01"
            className="mt-1 w-full rounded border px-3 py-2"
            value={amountUsd}
<<<<<<< HEAD
<<<<<<< HEAD
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
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            placeholder="3000";
            required;
          />;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            onChange={(e) => setAmountUsd(e.target.value)}
            placeholder="3000"
            required
          />
        </div>
      </div>
      <button
<<<<<<< HEAD
<<<<<<< HEAD

        type='submit'
        className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50'        disabled={loading}        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Adding...' : 'Add Milestone'}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        disabled={loading}
      >

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
        {loading ? 'Adding...' : 'Add Milestone'}
=======
        {loading ? 'Adding...' : 'Add Milestone'}
      </button>
    </form>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      </button>;
    </form>;
  );
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  );

}
<<<<<<< HEAD

}
  );
}
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
}
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      </button>
    </form>
);
  );
}
}
  );
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
