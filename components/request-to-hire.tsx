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
import React from 'react';
import { useEffect, useMemo, useState } from 'react';

export default function RequestToHirePage() {;
  const router = useRouter();
  const { talent } = router.query as { talent?: string }
  const selected = useMemo(
    () => TALENT_PROFILES.find(t => t.slug === talent)
    [talent]
  );export default function RequestToHirePage() {;
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  const router = useRouter();
  const { talent } = router.query as { talent?: string }
  const selected = useMemo(() => TALENT_PROFILES.find(t => t.slug === talent), [talent]);


  const [form, setForm] = useState({
=======


export default function RequestToHirePage() {;
  const router = useRouter();
  const { talent } = router && router.query as { talent?: string };
  const selected = useMemo(;
    () => TALENT_PROFILES && TALENT_PROFILES.find(t => t && t.slug === talent),;
    [talent];
  );export default function RequestToHirePage() {;
  const router = useRouter();
  const { talent } = router && router.query as { talent?: string };
  const selected = useMemo(() => TALENT_PROFILES && TALENT_PROFILES.find(t => t && t.slug === talent), [talent]);
  const [form, setForm] = useState({;
    name: '',;
    email: '',;
    budget: '',;
    timeline: '',;
    description: '',;
  });
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<null| { id: string message: string }>(;
    null;
  );  const [error, setError] = useState<string | null>(null);    description: ''}),;
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<null | { id: string, message: string }>(null),;
  const [error, setError] = useState<string | null>(null);
  const onSubmit = async (e: React && React.FormEvent) => {;
    e && e.preventDefault();
    setError(null),;
    if (!form && form.name || !form && form.email || !form && form.description) {;
      setError('Please fill in name, email, and description.');
      return;    }      return;
==============

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    setError(null);
    if (!form.name || !form.email || !form.description) {
      setError('Please fill in name, email, and description.');
      return
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
    }

          ...form;
          budget: normalizedBudget,
          talentSlug: selected?.slug || null})}),

=======
    }
  }
  };

=======    }

  };



    const normalizedBudget = form && form.budget.replace(/[^0-9.\-]/g, '');
    setSubmitting(true);
    try {;
      const res = await fetch('/api/requests/create', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON && JSON.stringify({;
          ...form,;
          budget: normalizedBudget,;
          talentSlug: selected?.slug || null,;
        }),;
      });
      const data = await res && res.json();
      if (!res && res.ok) throw new Error(data && data.error || 'Failed to submit');
      setResult({ id: data && data.id, message: 'Request submitted successfully.' });
    } catch (err: any) {;
      setError(err && err.message || 'Something went wrong');
    } finally {;
      setSubmitting(false);    }          budget: normalizedBudget,;
          talentSlug: selected?.slug || null})}),;
      const data = await res && res.json();
      if (!res && res.ok) throw new Error(data && data.error || 'Failed to submit');
      setResult({ id: data && data.id, message: 'Request submitted successfully.' });
    } catch (err: any) {;
      setError(err && err.message || 'Something went wrong');
    } finally {;
      setSubmitting(false);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
  }
  if (result) {;
    return (
      <div className='max-w-xl mx-auto py-12'>;
        <h1 className='text-2xl font-semibold mb-2'>Thanks!</h1>;
        <p className='text-gray-600 mb-4'>;
          We received your request. We will notify the appropriate team.;
        </p>;
        <div className='text-sm text-gray-500'>;
          Confirmation ID: {result && result.id}
        </div>;
      </div>;
    );
  }
  return (
    <div className='max-w-xl mx-auto'>;
      <h1 className='text-2xl font-semibold mb-4'>;
        Request to Hire{selected ? ` — ${selected && selected.name}` : ''}
      </h1>;
      <form className='space-y-4' onSubmit={onSubmit}>;
        <div>;
          <label className='block text-sm font-medium mb-1'>Your Name</label>;
          <input
            className='w-full border rounded px-3 py-2'
            value={form && form.name}
            onChange={e => setForm({ ...form, name: e && e.target.value })}
          />;
        </div>;
        <div>;
          <label className='block text-sm font-medium mb-1'>Email</label>;
          <input
            type='email'
            className='w-full border rounded px-3 py-2'
            value={form && form.email}
            onChange={e => setForm({ ...form, email: e && e.target.value })}
          />;
        </div>;
        <div>;
          <label className='block text-sm font-medium mb-1'>Budget (USD)</label>;
          <input
            className='w-full border rounded px-3 py-2'
            placeholder='$5,000'
            value={form && form.budget}
            onChange={e => setForm({ ...form, budget: e && e.target.value })}
          />;
        </div>;
        <div>;
          <label className='block text-sm font-medium mb-1'>Timeline</label>;
          <input
            className='w-full border rounded px-3 py-2'
            placeholder='2-3 months'
            value={form && form.timeline}
            onChange={e => setForm({ ...form, timeline: e && e.target.value })}
          />;
        </div>;
        <div>;
          <label className='block text-sm font-medium mb-1'>;
            Project Description;
          </label>;
          <textarea
            className='w-full border rounded px-3 py-2'
            rows={5}
            value={form && form.description}
            onChange={e => setForm({ ...form, description: e && e.target.value })}
          />;
        </div>;
        {error && <div className='text-sm text-red-600'>{error}</div>}
        <button
          disabled={submitting}
          className='px-4 py-2 rounded bg-black text-white'>          {submitting ? 'Submitting…' : 'Submit Request'}      </div>;
    );
    }
  };
=======
=======
=======
    }
  };

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39=======
      </div>
    )

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  return (
    <div className="max-w-xl mx-auto">;
      <h1 className="text-2xl font-semibold mb-4">Request to Hire{selected ? ` — ${selected && selected.name}` : ''}</h1>;
      <form className="space-y-4" onSubmit={onSubmit}>;
        <div>;
          <label className="block text-sm font-medium mb-1" htmlFor="input-Your Name">Your Name</label>;
          <input className="w-full border rounded px-3 py-2" value={form && form.name} onChange={(e) => setForm({ ...form, name: e && e.target.value })} />;
        </div>;
        <div>;
          <label className="block text-sm font-medium mb-1" htmlFor="input-Email">Email</label>;
          <input type="email" className="w-full border rounded px-3 py-2" value={form && form.email} onChange={(e) => setForm({ ...form, email: e && e.target.value })} />;
        </div>;
        <div>;
          <label className="block text-sm font-medium mb-1" htmlFor="input-Budget (USD)">Budget (USD)</label>;
          <input className="w-full border rounded px-3 py-2" placeholder="$5,000" value={form && form.budget} onChange={(e) => setForm({ ...form, budget: e && e.target.value })} />;
        </div>;
        <div>;
          <label className="block text-sm font-medium mb-1" htmlFor="input-Timeline">Timeline</label>;
          <input className="w-full border rounded px-3 py-2" placeholder="2-3 months" value={form && form.timeline} onChange={(e) => setForm({ ...form, timeline: e && e.target.value })} />;
        </div>;
        <div>;
          <label className="block text-sm font-medium mb-1" htmlFor="input-Project Description">Project Description</label>;
          <textarea className="w-full border rounded px-3 py-2" rows={5} value={form && form.description} onChange={(e) => setForm({ ...form, description: e && e.target.value })} />;
        </div>;
        {error && <div className="text-sm text-red-600">{error}</div>}

          {submitting ? 'Submitting…' : 'Submit Request'}
        </button>;
      </form>;
    </div>;
  );
}
==============

          {submitting ? 'Submitting…' : 'Submit Request'}
        </button>
      </form>
    </div>
);
}
  );
}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  );
}
    description: '',
  });
  const [submitting, set_submitting] = useState (false);
  const [result, set_result] = useState < null | { id: string; message: string }>(
    null);  const [error, set_error] = useState < string | null>(null);    description: ''}),
  const [submitting, set_submitting] = useState (false);
  const [result, set_result] = useState < null | { id: string, message: string }>(null),
  const [error, set_error] = useState < string | null>(null);
;
  const on_submit = async (e: React.FormEvent) => {
    e.prevent_default ();
    set_error (null),
    // Check condition
if ( {) {
  $2
}
      set_error ('Please fill in name, email, and description.');
      return;    }      return;
    }
    const normalized_budget = form.budget.replace (/[^0 - 9.\-]/g, '');
;
    set_submitting (true);
    try {
      const res = await fetch ('/api / requests / create', {
        method: 'POST',
        headers: { 'Content - Type': 'application / json' },
        body: JSON.stringify ({
          ...form,
          budget: normalized_budget,
          talent_slug: selected?.slug || null,
        }),
      });
      const data = await res.json ();
      if (throw new Error (data.error || 'Failed to submit')) {
  $2
}
      set_result ({ id: data.id, message: 'Request submitted successfully.' });
    } catch (err: any) {
      set_error (err.message || 'Something went wrong');
    } finally {
      set_submitting (false);    }          budget: normalized_budget,
          talent_slug: selected?.slug || null})}),
      const data = await res.json ();
      if (throw new Error (data.error || 'Failed to submit')) {
  $2
}
      set_result ({ id: data.id, message: 'Request submitted successfully.' });
    } catch (err: any) {
      set_error (err.message || 'Something went wrong');
    } finally {
      set_submitting (false);
    }
  }
;
  // Check condition
if ( {) {
  $2
}
    return (
      <div className='max - w-xl mx - auto py - 12'>;
        <h1 className='text - 2xl font - semibold mb - 2'>Thanks!</h1>;
        <p className='text - gray - 600 mb - 4'>;
          We received your request. We will notify the appropriate team.;
        </p>;
        <div className='text - sm text - gray - 500'>;
          Confirmation ID: {result.id}
        </div>;
      </div>);
  }
  return (
    <div className='max - w-xl mx - auto'>;
      <h1 className='text - 2xl font - semibold mb - 4'>;
        Request to Hire{selected ? ` — ${selected.name}` : ''}
      </h1>;
      <form className='space - y-4' on_submit={on_submit}>;
        <div>;
          <label className='block text - sm font - medium mb - 1'>Your Name</label>;
          <input;
            className='w - full border rounded px - 3 py - 2';
            value={form.name}
            on_change={e => set_form ({ ...form, name: e.target.value })}
          />;
        </div>;
        <div>;
          <label className='block text - sm font - medium mb - 1'>Email</label>;
          <input;
            type='email';
            className='w - full border rounded px - 3 py - 2';
            value={form.email}
            on_change={e => set_form ({ ...form, email: e.target.value })}
          />;
        </div>;
        <div>;
          <label className='block text - sm font - medium mb - 1'>Budget (USD)</label>;
          <input;
            className='w - full border rounded px - 3 py - 2';
            placeholder='$5, 000';
            value={form.budget}
            on_change={e => set_form ({ ...form, budget: e.target.value })}
          />;
        </div>;
        <div>;
          <label className='block text - sm font - medium mb - 1'>Timeline</label>;
          <input;
            className='w - full border rounded px - 3 py - 2';
            placeholder='2 - 3 months';
            value={form.timeline}
            on_change={e => set_form ({ ...form, timeline: e.target.value })}
          />;
        </div>;
        <div>;
          <label className='block text - sm font - medium mb - 1'>;
            Project Description;
          </label>;
          <textarea;
            className='w - full border rounded px - 3 py - 2';
            rows={5}
            value={form.description}
            on_change={e => set_form ({ ...form, description: e.target.value })}
          />;
        </div>;
        {error && <div className='text - sm text - red - 600'>{error}</div>}
        <button;
          disabled={submitting}
          className='px - 4 py - 2 rounded bg - black text - white';
        >          {submitting ? 'Submitting…' : 'Submit Request'}      </div>);
  }
  return (
    <div className="max - w-xl mx - auto">;
      <h1 className="text - 2xl font - semibold mb - 4">Request to Hire{selected ? ` — ${selected.name}` : ''}</h1>;
      <form className="space - y-4" on_submit={on_submit}>;
        <div>;
          <label className="block text - sm font - medium mb - 1" html_for="input - Your Name">Your Name</label>;
          <input className="w - full border rounded px - 3 py - 2" value={form.name} on_change={(e) => set_form ({ ...form, name: e.target.value })} />;
        </div>;
        <div>;
          <label className="block text - sm font - medium mb - 1" html_for="input - Email">Email</label>;
          <input type="email" className="w - full border rounded px - 3 py - 2" value={form.email} on_change={(e) => set_form ({ ...form, email: e.target.value })} />;
        </div>;
        <div>;
          <label className="block text - sm font - medium mb - 1" html_for="input - Budget (USD)">Budget (USD)</label>;
          <input className="w - full border rounded px - 3 py - 2" placeholder="$5, 000" value={form.budget} on_change={(e) => set_form ({ ...form, budget: e.target.value })} />;
        </div>;
        <div>;
          <label className="block text - sm font - medium mb - 1" html_for="input - Timeline">Timeline</label>;
          <input className="w - full border rounded px - 3 py - 2" placeholder="2 - 3 months" value={form.timeline} on_change={(e) => set_form ({ ...form, timeline: e.target.value })} />;
        </div>;
        <div>;
          <label className="block text - sm font - medium mb - 1" html_for="input - Project Description">Project Description</label>;
          <textarea className="w - full border rounded px - 3 py - 2" rows={5} value={form.description} on_change={(e) => set_form ({ ...form, description: e.target.value })} />;
        </div>;
        {error && <div className="text - sm text - red - 600">{error}</div>}
        <button disabled={submitting} className="px - 4 py - 2 rounded bg - black text - white">;
          {submitting ? 'Submitting…' : 'Submit Request'}
        </button>;
      </form>;
    </div>);
      </div>
    )
  }

  return (
    <div className=&quot;max-w-xl mx-auto&quot;>
      <h1 className=&quot;text-2xl font-semibold mb-4&quot;>Request to Hire{selected ? ` — ${selected.name}` : ''}</h1>
      <form className=&quot;space-y-4&quot; onSubmit={onSubmit}>
        <div>
          <label className=&quot;block text-sm font-medium mb-1&quot;>Your Name</label>
          <input className=&quot;w-full border rounded px-3 py-2&quot; value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        </div>
        <div>
          <label className=&quot;block text-sm font-medium mb-1&quot;>Email</label>
          <input type=&quot;email&quot; className=&quot;w-full border rounded px-3 py-2&quot; value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        </div>
        <div>
          <label className=&quot;block text-sm font-medium mb-1&quot;>Budget (USD)</label>
          <input className=&quot;w-full border rounded px-3 py-2&quot; placeholder=&quot;$5,000&quot; value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} />
        </div>
        <div>
          <label className=&quot;block text-sm font-medium mb-1&quot;>Timeline</label>
          <input className=&quot;w-full border rounded px-3 py-2&quot; placeholder=&quot;2-3 months&quot; value={form.timeline} onChange={(e) => setForm({ ...form, timeline: e.target.value })} />
        </div>
        <div>
          <label className=&quot;block text-sm font-medium mb-1&quot;>Project Description</label>
          <textarea className=&quot;w-full border rounded px-3 py-2&quot; rows={5} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
        </div>
        {error && <div className=&quot;text-sm text-red-600&quot;>{error}</div>}
        <button disabled={submitting} className=&quot;px-4 py-2 rounded bg-black text-white&quot;>
  if (result) {
    return (
      <div className='max-w-xl mx-auto py-12'>
        <h1 className='text-2xl font-semibold mb-2'>Thanks!</h1>
        <p className='text-gray-600 mb-4'>
          We received your request. We will notify the appropriate team.
        </p>
        <div className='text-sm text-gray-500'>
          Confirmation ID: {result.id}
        </div>
      </div>
    );
  }
  return (
    <div className='max-w-xl mx-auto'>
      <h1 className='text-2xl font-semibold mb-4'>
        Request to Hire{selected ? ` — ${selected.name}` : ''}
      </h1>
      <form className='space-y-4' onSubmit={onSubmit}>
        <div>
          <label className='block text-sm font-medium mb-1'>Your Name</label>
          <input
            className='w-full border rounded px-3 py-2'
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div>
          <label className='block text-sm font-medium mb-1'>Email</label>
          <input
            type='email'
            className='w-full border rounded px-3 py-2'
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div>
          <label className='block text-sm font-medium mb-1'>Budget (USD)</label>
          <input
            className='w-full border rounded px-3 py-2'
            placeholder='$5,000'
            value={form.budget}
            onChange={e => setForm({ ...form, budget: e.target.value })}
          />
        </div>
        <div>
          <label className='block text-sm font-medium mb-1'>Timeline</label>
          <input
            className='w-full border rounded px-3 py-2'
            placeholder='2-3 months'
            value={form.timeline}
            onChange={e => setForm({ ...form, timeline: e.target.value })}
          />
        </div>
        <div>
          <label className='block text-sm font-medium mb-1'>
            Project Description
          </label>
          <textarea
            className='w-full border rounded px-3 py-2'
            rows={5}
            value={form.description}
            onChange={e => setForm({ ...form, description: e.target.value })}
          />
        </div>
        {error && <div className='text-sm text-red-600'>{error}</div>}
        <button
          disabled={submitting}
          className='px-4 py-2 rounded bg-black text-white'
        >          {submitting ? 'Submitting…' : 'Submit Request'}      </div>
    )
  }
  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Request to Hire{selected ? ` — ${selected.name}` : ''}</h1>
      <form className="space-y-4" onSubmit={onSubmit}>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="input-Your Name">Your Name</label>
          <input className="w-full border rounded px-3 py-2" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="input-Email">Email</label>
          <input type="email" className="w-full border rounded px-3 py-2" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="input-Budget (USD)">Budget (USD)</label>
          <input className="w-full border rounded px-3 py-2" placeholder="$5,000" value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="input-Timeline">Timeline</label>
          <input className="w-full border rounded px-3 py-2" placeholder="2-3 months" value={form.timeline} onChange={(e) => setForm({ ...form, timeline: e.target.value })} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="input-Project Description">Project Description</label>
          <textarea className="w-full border rounded px-3 py-2" rows={5} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
        </div>
        {error && <div className="text-sm text-red-600">{error}</div>}
        <button disabled={submitting} className="px-4 py-2 rounded bg-black text-white">
          {submitting ? 'Submitting…' : 'Submit Request'}
        </button>
      </form>
    </div>

  );
}
);
}
  );
}
==============

  );
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
