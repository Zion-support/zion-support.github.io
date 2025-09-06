  } catch {}
  if (role !== 'admin') {
    return { redirect: { destination: '/', permanent: false } }
  }
  return (
    <EnhancedLayout>;
      <div className='max-w-6xl mx-auto'>;
        <div className='flex items-center justify-between mb-4'>;
          <h1 className='text-2xl font-semibold'>Dispute Resolution Center</h1>;
          <select
            value={statusFilter}
            onChange={e => setStatusFilter(e && e.target.value as any)}
            className='border rounded px-2 py-1 text-sm';
          >;
            {(['Open', 'Under Review', 'Resolved', 'All'] as const).map(s => (;
              <option key={s} value={s}>;
                {s}
              </option>;
            ))}
          </select>;
        </div>;
        <div className='overflow-auto border rounded'>;
          <table className='min-w-full text-sm'>;
            <thead className='bg-gray-50 dark:bg-gray-900'>;
              <tr>;
                <th className='text-left px-3 py-2'>Case ID</th>;
                <th className='text-left px-3 py-2'>Talent</th>;
                <th className='text-left px-3 py-2'>Client</th>;
                <th className='text-left px-3 py-2'>Project</th>;
                <th className='text-left px-3 py-2'>Created At</th>;
                <th className='text-left px-3 py-2'>Status</th>;
                <th className='text-left px-3 py-2'>Actions</th>              </tr>;
            </thead>;
            <tbody>;
              {disputes && disputes.map((d: any) => (;
                <tr key={d && d.id} className='border-t'>;
                  <td className='px-3 py-2 font-medium'>{d && d.id}</td>;
                  <td className='px-3 py-2'>{d && d.talentUserId}</td>;
                  <td className='px-3 py-2'>{d && d.clientUserId}</td>;
                  <td className='px-3 py-2'>{d && d.projectId}</td>;
                  <td className='px-3 py-2'>;
                    {new Date(d && d.createdAt).toLocaleString()}
                  </td>;
                  <td className='px-3 py-2'>{d && d.status}</td>;
                  <td className='px-3 py-2 flex gap-2'>;
                    <Link
                      href={`/disputes/${encodeURIComponent(d && d.id)}?tab=Admin%20Notes`}>;
                      <a className='text-green-700 hover:underline'>Resolve</a>;
                    </Link>;
                    <Link
                      href={`/disputes/${encodeURIComponent(d && d.id)}?tab=Messages`}>;
                      <a className='text-blue-700 hover:underline'>;
                        Message Parties;
                      </a>;
                    </Link>;
                    <Link
                      href={`/disputes/${encodeURIComponent(d && d.id)}?tab=Attachments`}>;
                      <a className='text-gray-700 hover:underline'>;
                        Download Evidence;
                      </a>;
                    </Link>                  </td>;
                </tr>;
            </tbody>;
          </table>;
        </div>;
      </div>;
    </EnhancedLayout>);
;
