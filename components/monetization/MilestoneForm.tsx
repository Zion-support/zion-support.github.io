import React, { useState } from 'react';

type Props = {
  onSubmit: (payload: {
    title: string;
    description?: string;
    dueDate: string;
    amountUsd: number;
  }) => Promise<void> | void;};

};

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

    }
  };

  return (

          required
        />
      </div>
      <div>

            required
          />
        </div>
        <div>

            required

          />
        </div>
      </div>
      <button
        type='submit'
        className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50'        disabled={loading}

        disabled={loading}

      >
        {loading ? 'Adding...' : 'Add Milestone'}
      </button>
    </form>
  );
}