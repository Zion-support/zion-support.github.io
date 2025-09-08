
const normalizedBudget = form.budget.replace(/[^0-9.\-]/g, '')setSubmitting(true)try ;
  const res = await fetch('/api/requests/create', {method: 'POST';}
        headers: { 'Content-Type': 'application/json',}
}
        body: JSON.stringify({...form,budget: normalizedBudget,talentSlug: selected?.slug || null,}),})const data = await res.json()if (!res.ok) throw new Error(data.error |'Failed to submit')setResult({ id: data.id, message: 'Request submitted successfully.' })} catch (err: any) {setError(err.message |'Something went wrong')} finally {setSubmitting(false)}
 ,
}
  if (result) ;
  return (<div className='max-w-xl mx-auto py-12'    />;
        <h1 className='text-2xl font-semibold mb-2'    />Thanks!</h1>;
        <p className='text-gray-600 mb-4'    />;




        <div    />;
          <label className='block text-sm font-medium mb-1'    />Email</label>;
          <input;
            type='email';
            className='w-full border rounded px-3 py-2';


        <div    />;
          <label className='block text-sm font-medium mb-1'    />Budget (USD)</label>;
          <input;
            className='w-full border rounded px-3 py-2';
            placeholder='$5,000';


        <div    />;
          <label className='block text-sm font-medium mb-1'    />Timeline</label>;
          <input;
            className='w-full border rounded px-3 py-2';
            placeholder='2-3 months';


        <div    />;
          <label className='block text-sm font-medium mb-1'    />;
            Project Description;
          </label>;
          <textarea;
            className='w-full border rounded px-3 py-2';




        {error && <div className="text-sm text-red-600">{error}</div>}


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
    }
  }
  };

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

