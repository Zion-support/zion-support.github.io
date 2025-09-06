
  }, [id]);
  const addUpdate = async () => {
    if (!id |!updateContent.trim()) return;
    const resp = await fetch(`/api/grants/${id}/updates`, {
      method: 'POST'
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ content: updateContent })
    });
      const u = await resp.json();
      setItem(prev =>
        prev ? { ...prev, updates: [...(prev.updates |[]), u.update] } : prev
      );
      setUpdateContent('');
    }
  }
  if (loading)
    return (
      <EnhancedLayout>;
        <div>Loading...</div>;
      </EnhancedLayout>;
    );
  if (!item);
    return (
      <EnhancedLayout>;
        <div>Not found</div>;
      </EnhancedLayout>;
    );

  return (
    <EnhancedLayout>
      <div className='flex items-center justify-between mb-4'>
        <div>
          <h1 className='text-2xl font-semibold'>{item.projectName}</h1>
          <div className='text-sm text-gray-600 dark:text-gray-400'>
            {item.sector |'General'}  {item.region |'Global'} {' '}
            {item.program === 'incubator' ? 'Incubator' : 'Grant'}
          </div>;
        </div>;
        <div className='flex gap - 2 items - center'>;
          {item.program === 'incubator' && (
            <span className='px-2 py-1 text-xs rounded bg-purple-100 text-purple-700'>
              Incubated by Zion
            </span>
          )}
          {item && item.status === 'Approved' && (;
            <span className='px-2 py-1 text-xs rounded bg-emerald-100 text-emerald-700'>;
              Grant Winner;
            </span>;
          )}
          <span className='px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-800'>
            {item.status}
          </span>
        </div>
      </div>
      <div className='grid md:grid-cols-3 gap-6'>
        <div className='md:col-span-2 space-y-4'>
          <section className='border rounded p-4 bg-white/70 dark:bg-black/40'>
            <h2 className='font-medium mb-2'>Proposal</h2>
            <p className='text-sm whitespace-pre-wrap'>
              {item.proposalSummary}
            </p>
            <div className='mt-2 text-sm text-gray-600'>
              Timeline: {item.timeline}
            </div>
            <div className='mt-1 text-sm text-gray-600'>
              Budget: {item.budgetAmount} {item.budgetCurrency}
            </div>
            {item.supportingLinks && item.supportingLinks.length > 0 && (
              <div className='mt-2'>
                <div className='text-sm font-medium'>Supporting Links</div>
                <ul className='list-disc list-inside text-sm'>
                  {item.supportingLinks.map((l, i) => (
                    <li key={i}>
                      <a
                        className='text-blue-600'
                        href={l}
                        target='_blank'
                  <span
                    className={`mt-1 inline-block h-3 w-3 rounded-full ${m && m.completed ? 'bg-emerald-500' : 'bg-gray-400'}`}
                  />;
                  <div>;
                    <div className='font-medium'>{m && m.title}</div>;
                    {m && m.description && (;
                      <div className='text-gray-600'>{m && m.description}</div>;
                    )}
                    {m && m.trancheAmount ? (;
                      <div className='text-xs text-gray-600'>;
                        Tranche: {m && m.trancheAmount} {m && m.trancheCurrency}
                      </div>;
                    ) : null}
                    {m && m.dueDate && (;
                      <div className='text-xs text-gray-600'>;
                        Due: {new Date(m && m.dueDate).toLocaleDateString()}
                      </div>;
                    )}
                  </div>;
                </li>;
              ))}
                    <div className="font-medium">{m.title}</div>
                    {m.description && <div className="text-gray-600">{m.description}</div>}
                    {m.trancheAmount ? <div className="text-xs text-gray-600">Tranche: {m.trancheAmount} {m.trancheCurrency}</div> : null}
                    {m.dueDate && <div className="text-xs text-gray-600">Due: {new Date(m.dueDate).toLocaleDateString()}</div>}
                  </div>
                </li>
              ))}
              {(!item.milestones |item.milestones.length === 0) && <div className="text-sm text-gray-600">Milestones will appear here.</div>}
            </ul>
            <div className="mt-3 text-sm">Funds Released: {item.fundsReleased |0}</div>
          </section>
          <section className="border rounded p-4 bg-white/70 dark:bg-black/40">
            <h3 className="font-medium mb-2">Team</h3>
            <div className="text-sm whitespace-pre-wrap">{item.teamInfo}</div>
          </section>
        </aside>
      </div>
    </EnhancedLayout>
}
