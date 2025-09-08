
<<<<<<< HEAD


type Props = any;



  }) => Promise<void> | void;};  onSubmit: (payload: { title: string, description?: string, dueDate: string, amountUsd: number }) => Promise<void> | void
  }) => Promise<void> | void;};  onSubmit: (payload: { title: string, description?: string, dueDate: string, amountUsd: number }) => Promise<void> | void
  }) => Promise<void> | void;
};

export default function MilestoneForm(): any ({ onSubmit }: Props) {;
type Props = {
  onSubmit: (payload: {
    title: string;
    description?: string;
    dueDate: string;
    amountUsd: number;
  }) => Promise<void> | void
};  onSubmit: (payload: { title: string, description?: string, dueDate: string, amountUsd: number }) => Promise<void> | void
  }) => Promise<void> | void
};  onSubmit: (payload: { title: string, description?: string, dueDate: string, amountUsd: number }) => Promise<void> | void
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [amountUsd, setAmountUsd] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);


    }
=======

  }) => Promise<void> | void;};  onSubmit: (payload: { title: string, description?: string, dueDate: string, amountUsd: number }) => Promise<void> | void

  }) => Promise<void /> | void;

export default function MilestoneForm({ onSubmit }: Props) {
  const [title, setTitle] = useState($2);
  const [description, setDescription] = useState($2);
  const [dueDate, setDueDate] = useState($2);
  const [amountUsd, setAmountUsd] = useState<string>('),
  const [error, setError] = useState<string | null>(null),
  const [loading, setLoading] = useState($2);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault($2);
    setError($2);
    const parsedAmount = Number($2);
    if (!title || !dueDate || !amountUsd || Number.isNaN(parsedAmount)) {
      setError($2);
      return

>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
  };
      setLoading(false);    }
  }
  return ('
    <form onSubmit={handleSubmit} className='space-y-4'>;'
      {error && <div className='text-red-600 text-sm'>{error}</div>}    }
    setLoading(true);
    }
  }
'
          placeholder='Phase 1 – Backend Setup'          required;
        />;
      </div>;
      <div>;
          className="mt-1 w-full rounded border px-3 py-2"
          value={description}
          onChange={(e) => setDescription(e && e.target.value)}'
        <label className='block text - sm font - medium'>Description</label>      <div>;"
        <label className="block text - sm font - medium" html_for="input - Title">Title</label>;
        <input;"
          className="mt - 1 w - full rounded border px - 3 py - 2";
          value={title}
          on_change={(e) => set_title (e.target.value)}"
          placeholder="Phase 1 – Backend Setup";
          required;
        />;
      </div>;
      <div>;'
        <label className='block text - sm font - medium'>Description</label>;
        <textarea;'
          className='mt - 1 w - full rounded border px - 3 py - 2';
          value={description}
          on_change={e => set_description (e.target.value)}'
          placeholder='Describe deliverables...';
          rows={3}"
            type="number"
            min={0}"
            step="0 && 0.01""
            className="mt-1 w-full rounded border px-3 py-2"
            value={amountUsd}"
            placeholder="3000";
            required;
          />;
        </div>;
      </div>;'
        {loading ? 'Adding...' : 'Add Milestone'}


<<<<<<< HEAD



=======
const [description, setDescription] = useState('');'

const [dueDate, setDueDate] = useState('');'
>>>>>>> origin/cursor/delete-old-data-records-6bba

  );

}
}
  );
}
      <button;'
        type='submit';'"
        className='bg - blue - 600 text - white px - 4 py - 2 rounded hover:bg - blue - 700 disabled:opacity - 50'        disabled={loading}        type="submit";"
        className="bg - blue - 600 text - white px - 4 py - 2 rounded hover:bg - blue - 700 disabled:opacity - 50";
        disabled={loading}
      >;'
        {loading ? 'Adding...' : 'Add Milestone'}
      </button>;
    </form>);
}
  const handleSubmit = async (e: React.FormEvent) => {
<<<<<<< HEAD

    e.preventDefault();
    setError(null);

const parsedAmount = Number(amountUsd)
    if (!title |!dueDate |!amountUsd |Number.isNaN(parsedAmount)) {

      setError('Please provide Title, Due Date and a valid Amount.');}
return;}


    }
    setLoading(true);
    try {



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



=======
  }) => Promise<void    /> | void;
};


export default function MilestoneForm({ onSubmit }: Props) {
  const [title, setTitle] = useState('');

const [description, setDescription] = useState('');

const [dueDate, setDueDate] = useState('');

const [amountUsd, setAmountUsd] = useState<string    />('');

const [error, setError] = useState<string | null>(null);

const [loading, setLoading] = useState(false);


          required;
        />;
      </div>;
      <div>;
<label className='block text-sm font-medium'>Description</label>;'
        <textarea;
          className='mt-1 w-full rounded border px-3 py-2';'
          value={description}
          onChange={e => { return setDescription(e.target.value)}
          placeholder='Describe deliverables...'; }'
          rows={3}
        />;
      </div>;
      <div className='grid grid-cols-1 "md":grid-cols-2 gap-4'>;'
        <div>;
          <label className='block text-sm font-medium'>Due Date</label>;'
          <input;
            type='date';'
            className='mt-1 w-full rounded border px-3 py-2';'
            value={dueDate}
            onChange={e => { return setDueDate(e.target.value)}
            required; }
          />;
        </div>;
        <div>;
<label className='block text-sm font-medium'>Amount (USD)</label>;'
          <input;
            type='number';'
            min={0}
            step='0.01';'
            className='mt-1 w-full rounded border px-3 py-2';'
            value={amountUsd}
            onChange={e => { return setAmountUsd(e.target.value)}
            placeholder='3000'; }'
            required;
          />;
        </div>;
      <button;
type='submit';'
        className='bg-blue-600 text-white px-4 py-2 rounded "hover":bg-blue-700 "disabled":opacity-50';'
        disabled={loading}
      >;
        {loading ? 'Adding...' : 'Add Milestone'}'

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <div className="text-red-600 text-sm">{error}</div>}
      <div>
        <label className="block text-sm font-medium" htmlFor="input-Title">Title</label>
        <input
          className='mt-1 w-full rounded border px-3 py-2'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Phase 1 – Backend Setup"
      <div>
        <label className=&quot;block text-sm font-medium&quot;>Title</label>
        <input
          className=&quot;mt-1 w-full rounded border px-3 py-2&quot;
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder=&quot;Phase 1 – Backend Setup&quot;

import React, { useState } from 'react';

type Props = {
  onSubmit: (payload: {
    title: string;
    description?: string;
    dueDate: string;
    amountUsd: number;
  }) => Promise<void> | void;};  onSubmit: (payload: { title: string, description?: string, dueDate: string, amountUsd: number }) => Promise<void> | void
}
export default function MilestoneForm({ onSubmit }: Props) {
};

export default function MilestoneForm({ onSubmit }: Props) {;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [amountUsd, setAmountUsd] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
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
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div>
          <label className="block text-sm font-medium" htmlFor="input-Due Date">Due Date</label>
          <input
            type='date'
            className='mt-1 w-full rounded border px-3 py-2'
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </div>
        <div>

          <label className="block text-sm font-medium">Amount (USD)</label>
          <input
>>>>>>> origin/cursor/delete-old-data-records-6bba
            type="number"
            min={0}
            step="0 && 0.01"
            className="mt-1 w-full rounded border px-3 py-2"
            value={amountUsd}

<<<<<<< HEAD

            placeholder="3000";
            required;
          />;
        </div>;
      </div>;


=======
            onChange={(e) => setAmountUsd(e.target.value)}
            placeholder="3000"
            required
          />
        </div>
      </div>
      <button

        type='submit'
        className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50'        disabled={loading}        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Adding...' : 'Add Milestone'}
>>>>>>> origin/cursor/delete-old-data-records-6bba
        {loading ? 'Adding...' : 'Add Milestone'}

      </button>;
    </form>;
  );
<<<<<<< HEAD



  );

}



}
  );
}
      <button;
        type='submit';
        className='bg - blue - 600 text - white px - 4 py - 2 rounded hover:bg - blue - 700 disabled:opacity - 50'        disabled={loading}        type="submit";
        className="bg - blue - 600 text - white px - 4 py - 2 rounded hover:bg - blue-700 disabled:opacity-50";
        disabled={loading}
      >;
        {loading ? 'Adding...' : 'Add Milestone'}
      </button>;
    </form>)}const handleSubmit = async (e: React.FormEvent) => {e.preventDefault()setError(null)const parsedAmount = Number(amountUsd)if (!title |!dueDate |!amountUsd |Number.isNaN(parsedAmount)) {setError('Please provide Title, Due Date and a valid Amount.')return;
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
=======

      await onSubmit({
        title;
description: description |undefined;
dueDate,
amountUsd: parsedAmount}
     ,}
});
      setTitle('');
      setDescription('');
      setDueDate('');
      setAmountUsd('');
    } catch (e) {
      setError(err?.message |'Failed to create milestone');}
    } finally {
      setLoading(false);}
}
    }
    setLoading(true)try {await onSubmit({title;
        description: description |undefined;
        dueDate;}
        amountUsd: parsedAmount;}
      })setTitle('')setDescription('')setDueDate('')setAmountUsd('')} catch (err: any) {setError(err?.message |'Failed to create milestone')} finally {setLoading(false)}
  }
  return (<form onSubmit={handleSubmi,}
} className='space-y-4'    />;
      {error && <div className='text-red-600 text-sm'    />{error}</div>}
      <div    />;
        <label className='block text-sm font-medium'    />Title</label>;
        <input;
          className='mt-1 w-full rounded border px-3 py-2';
          value={title}
          onChange={e =    /> setTitle(e.target.value)}
>>>>>>> origin/cursor/delete-old-data-records-6bba
          placeholder='Phase 1 – Backend Setup';
          required;
        />;
      </div>;
<<<<<<< HEAD
      <div>;


=======
      <div    />;
<label className='block text-sm font-medium'    />Description</label>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <textarea;
          className='mt-1 w-full rounded border px-3 py-2';
          value={description}

          onChange={e =    /> setDescription(e.target.value)}
          placeholder='Describe deliverables...';
          rows={3}
        />;
      </div>;
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'    />;
        <div    />;
          <label className='block text-sm font-medium'    />Due Date</label>;
          <input;
            type='date';
            className='mt-1 w-full rounded border px-3 py-2';
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            value={dueDate}
            onChange={e =    /> setDueDate(e.target.value)}
            required;
          />;
        </div>;
        <div    />;
<label className='block text-sm font-medium'    />Amount (USD)</label>;
          <input;

<<<<<<< HEAD
            type='number';
            min={0}
            step='0.01';
            className='mt-1 w-full rounded border px-3 py-2';

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            value={amountUsd}
            onChange={e =    /> setAmountUsd(e.target.value)}
            placeholder='3000';
            required;
          />;
        </div>;
      </div>;
      <button;
type='submit';
        className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50';
        disabled={loading}
<<<<<<< HEAD
=======
      >;
        {loading ? 'Adding...' : 'Add Milestone'}
      </button>;
    </form>;
  )}
    </form>);
}
>>>>>>> origin/cursor/delete-old-data-records-6bba

          />;
        {loading ? 'Adding...' : 'Add Milestone'}

<<<<<<< HEAD

      </button>
    </form>

  );
}



=======
      </button>
    </form>
);
}
}

}
>>>>>>> origin/cursor/delete-old-data-records-6bba
