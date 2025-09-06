<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
};

export default function MilestoneForm(): any ({ onSubmit }: Props) {;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
type Props = {
  onSubmit: (payload: {
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
import React, { useState } from 'react';
type Props = any;
origin/cursor/automate-test-improve-and-merge-code-2533
    title: string;
    description?: string;
    dueDate: string;
    amountUsd: number;
<<<<<<< HEAD
<<<<<<< HEAD
  }) => Promise<void> | void;};  onSubmit: (payload: { title: string, description?: string, dueDate: string, amountUsd: number }) => Promise<void> | void
  }) => Promise<void> | void;};  onSubmit: (payload: { title: string, description?: string, dueDate: string, amountUsd: number }) => Promise<void> | void
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  }) => Promise<void> | void
};  onSubmit: (payload: { title: string, description?: string, dueDate: string, amountUsd: number }) => Promise<void> | void
  }) => Promise<void> | void
};  onSubmit: (payload: { title: string, description?: string, dueDate: string, amountUsd: number }) => Promise<void> | void
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  }) => Promise<void> | void;
};

export default function MilestoneForm({ onSubmit }: Props) {
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [amountUsd, setAmountUsd] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
<<<<<<< HEAD
<<<<<<< HEAD
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
      setTitle('');
      setDescription('');
      setDueDate('');
      setAmountUsd('');
    } catch (err: any) {
      setError(err?.message |'Failed to create milestone');
    } finally {
      setLoading(false);    }

  return (
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    }
  }
  };
      setLoading(false);    }
  }
  return (
    <form onSubmit={handleSubmit} className='space-y-4'>;
      {error && <div className='text-red-600 text-sm'>{error}</div>}    }
    setLoading(true);
    }
  }

          placeholder='Phase 1 – Backend Setup'          required;
        />;
      </div>;
      <div>;
<<<<<<< HEAD

=======
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <div className="text-red-600 text-sm">{error}</div>}
      <div>
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        <label className="block text-sm font-medium" htmlFor="input-Title">Title</label>
        <input
          className="mt-1 w-full rounded border px-3 py-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Phase 1 – Backend Setup"

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          className="mt-1 w-full rounded border px-3 py-2"
          value={description}
          onChange={(e) => setDescription(e && e.target.value)}
        <label className='block text - sm font - medium'>Description</label>      <div>;
        <label className="block text-sm font-medium" html_for="input - Title">Title</label>;
        <input;
          className="mt - 1 w - full rounded border px-3 py-2";
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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </div>
        <div>

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            type="number"
            min={0}
            step="0 && 0.01"
            className="mt-1 w-full rounded border px-3 py-2"
            value={amountUsd}
            placeholder="3000";
            required;
          />;
        </div>;
      </div>;
<<<<<<< HEAD

=======
            onChange={(e) => setAmountUsd(e.target.value)}
            placeholder="3000"
            required
          />
        </div>
      </div>
      <button

        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        disabled={loading}
      >

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
        {loading ? 'Adding...' : 'Add Milestone'}

}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  );
=======
        {loading ? 'Adding...' : 'Add Milestone'}

      </button>;
    </form>;
  );

  );

}
}
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      <button;
        type='submit';
        className='bg - blue - 600 text - white px - 4 py - 2 rounded hover:bg - blue - 700 disabled:opacity - 50'        disabled={loading}        type="submit";
        className="bg - blue - 600 text - white px - 4 py - 2 rounded hover:bg - blue-700 disabled:opacity-50";
        disabled={loading}
      >;
        {loading ? 'Adding...' : 'Add Milestone'}
      </button>;
    </form>);
}
<<<<<<< HEAD
<<<<<<< HEAD
  );
}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
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
      setTitle('');
      setDescription('');
      setDueDate('');
      setAmountUsd('');
    } catch (err: any) {
      setError(err?.message |'Failed to create milestone');
    } finally {
      setLoading(false);
    }
  }
  return (
<form onSubmit={handleSubmit} className='space-y-4'>
      {error && <div className='text-red-600 text-sm'>{error}</div>}
      <div>
        <label className='block text-sm font-medium'>Title</label>
        <input
          className='mt-1 w-full rounded border px-3 py-2'
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder='Phase 1 – Backend Setup'
          required
        />
      </div>
      <div>
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
            onChange={e => setDueDate(e.target.value)}
            required
          />
        </div>
        <div>
<label className='block text-sm font-medium'>Amount (USD)</label>
          <input
            type='number'
            min={0}
            step='0.01'
            className='mt-1 w-full rounded border px-3 py-2'
            value={amountUsd}
            onChange={e => setAmountUsd(e.target.value)}
            placeholder='3000'
            required
          />
        </div>
      </div>
      <button
type='submit'
        className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50'
        disabled={loading}
      >
        {loading ? 'Adding...' : 'Add Milestone'}
      </button>
    </form>
  );
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
