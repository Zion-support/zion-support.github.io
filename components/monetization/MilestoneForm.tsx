<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
type Props = any;
origin/cursor/automate-test-improve-and-merge-code-2533
=======

};

export default function MilestoneForm(): any ({ onSubmit }: Props) {;
type Props = {
  onSubmit: (payload: {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
    title: string;
    description?: string;
    dueDate: string;
    amountUsd: number;
<<<<<<< HEAD
  }) => Promise<void> | void;
};

export default function MilestoneForm({ onSubmit }: Props) {
origin/cursor/automate-test-improve-and-merge-code-2533
=======
  }) => Promise<void> | void;};  onSubmit: (payload: { title: string, description?: string, dueDate: string, amountUsd: number }) => Promise<void> | void
  }) => Promise<void> | void;};  onSubmit: (payload: { title: string, description?: string, dueDate: string, amountUsd: number }) => Promise<void> | void
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
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
      setTitle('');
      setDescription('');
      setDueDate('');
      setAmountUsd('');
    } catch (err: any) {
      setError(err?.message |'Failed to create milestone');
    } finally {
      setLoading(false);
=======

;
}export default function MilestoneForm(): any ({ onSubmit }: Props) {type Props = {onSubmit: (payload: {import React, { useState } from 'react';
type Props = any;title: string;
    description?: string;
    dueDate: string;
    amountUsd: number;}) => Promise<void> | void;}onSubmit: (payload: { title: string, description?: string, dueDate: string, amountUsd: number }) => Promise<void> | void;
  }) => Promise<void> | void;}onSubmit: (payload: { title: string, description?: string, dueDate: string, amountUsd: number }) => Promise<void> | void;
  }) => Promise<void> | void;
}export default function MilestoneForm() {const [title, setTitle] = useState('')const [description, setDescription] = useState('')const [dueDate, setDueDate] = useState('')const [amountUsd, setAmountUsd] = useState<string>('')const [error, setError] = useState<string | null>(null)const [loading, setLoading]  = useState(false)}
  }
  }setLoading(false)}
  }
  return (<form onSubmit={handleSubmit} className='space-y-4'>;
      {error && <div className='text-red-600 text-sm'>{error}</div>}    }
    setLoading(true)}
  }placeholder='Phase 1 – Backend Setup'          required;
        />;
      </div>;
      <div>;
          className="mt-1 w-full rounded border px-3 py-2";
=======
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
          className="mt-1 w-full rounded border px-3 py-2"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
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
            type="number";
            min={0}
            step="0 && 0.01";
            className="mt-1 w-full rounded border px-3 py-2";
=======
            type="number"
            min={0}
            step="0 && 0.01"
            className="mt-1 w-full rounded border px-3 py-2"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
            value={amountUsd}
            placeholder="3000";
            required;
          />;
        </div>;
      </div>;
<<<<<<< HEAD
        {loading ? 'Adding...' : 'Add Milestone'}</button>;
    </form>;
  ))}
}
  )}
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
      <button;
        type='submit';
        className='bg - blue - 600 text - white px - 4 py - 2 rounded hover:bg - blue - 700 disabled:opacity - 50'        disabled={loading}        type="submit";
        className="bg - blue - 600 text - white px - 4 py - 2 rounded hover:bg - blue - 700 disabled:opacity - 50";
        disabled={loading}
      >;
        {loading ? 'Adding...' : 'Add Milestone'}
      </button>;
<<<<<<< HEAD
    </form>)}const handleSubmit = async (e: React.FormEvent) => {e.preventDefault()setError(null)const parsedAmount = Number(amountUsd)if (!title |!dueDate |!amountUsd |Number.isNaN(parsedAmount)) {setError('Please provide Title, Due Date and a valid Amount.')return;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
    }
    setLoading(true)try {await onSubmit({title;
        description: description |undefined;
        dueDate;
        amountUsd: parsedAmount;
      })setTitle('')setDescription('')setDueDate('')setAmountUsd('')} catch (err: any) {setError(err?.message |'Failed to create milestone')} finally {setLoading(false)}
  }
  return (<form onSubmit={handleSubmit} className='space-y-4'>;
      {error && <div className='text-red-600 text-sm'>{error}</div>}
      <div>;
        <label className='block text-sm font-medium'>Title</label>;
        <input;
          className='mt-1 w-full rounded border px-3 py-2';
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder='Phase 1 – Backend Setup';
          required;
        />;
      </div>;
      <div>;
<label className='block text-sm font-medium'>Description</label>;
        <textarea;
          className='mt-1 w-full rounded border px-3 py-2';
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder='Describe deliverables...';
          rows={3}
        />;
      </div>;
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>;
        <div>;
          <label className='block text-sm font-medium'>Due Date</label>;
          <input;
            type='date';
            className='mt-1 w-full rounded border px-3 py-2';
            value={dueDate}
            onChange={e => setDueDate(e.target.value)}
            required;
          />;
        </div>;
        <div>;
<label className='block text-sm font-medium'>Amount (USD)</label>;
          <input;
            type='number';
            min={0}
            step='0.01';
            className='mt-1 w-full rounded border px-3 py-2';
            value={amountUsd}
            onChange={e => setAmountUsd(e.target.value)}
            placeholder='3000';
            required;
          />;
        </div>;
      </div>;
      <button;
type='submit';
        className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50';
        disabled={loading}
      >;
        {loading ? 'Adding...' : 'Add Milestone'}
<<<<<<< HEAD
      </button>
    </form>
  );
}
origin/cursor/automate-test-improve-and-merge-code-2533
=======
      </button>;
    </form>;
  )}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
    </form>);
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
