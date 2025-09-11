

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
import useSWR from 'swr';
import React, { useMemo, useState } from 'react';

      }
    );
    set_selected (null);
    mutate ();  }
  return (
    <EnhancedLayout>;

            value={filters && filters.status || ''}
            onChange={e =>;
              setFilters(f => ({ ...f, status: e && e.target.value || undefined }));

            }
            className='border rounded px-2 py-1';
=======
      <div className='max - w-7xl mx - auto'>;
        <div className='flex items - center justify - between mb - 4'>;
          <h1 className='text - 2xl font - semibold'>Admin Content Review</h1>;
        </div>;
        <div className='mb - 4 grid grid - cols - 1 md:grid - cols - 5 gap - 3 text - sm'>;
          <select;
            value={filters.status || ''}
            on_change={e =>;
              set_filters (function => ({ ...f, status: e.target.value || undefined }));
            }
            className='border rounded px - 2 py - 1';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
          >;
            <option value=''>All Statuses</option>;
            <option value='pending'>Pending</option>;
            <option value='approved'>Approved</option>;
            <option value='removed'>Removed</option>;
            <option value='warned'>Warned</option>;
            <option value='banned'>Banned</option>;
          </select>;

            value={filters && filters.contentType || ''}
            onChange={e =>;
              setFilters(f => ({;
                ...f,;
                contentType: e && e.target.value || undefined,;
              }));

            }
            className='border rounded px-2 py-1';
=======
          <select;
            value={filters.content_type || ''}
            on_change={e =>;
              set_filters (function => ({
                ...f,
                content_type: e.target.value || undefined,
              }));
            }
            className='border rounded px - 2 py - 1';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
          >;
            <option value=''>All Types</option>;
            <option value='listing'>Listing</option>;
            <option value='message'>Message</option>;
            <option value='cv'>CV</option>;
            <option value='job'>Job Post</option>;
          </select>;

            value={filters && filters.reason || ''}
            onChange={e =>;
              setFilters(f => ({ ...f, reason: e && e.target.value || undefined }));

            }
            className='border rounded px-2 py-1';
          />;
          <input
            placeholder='User email'

            value={filters && filters.userEmail || ''}
            onChange={e =>;
              setFilters(f => ({;
                ...f,;
                userEmail: e && e.target.value || undefined,;
              }));

            }
            className='border rounded px-2 py-1';
          />;
          <button
            onClick={() => setFilters({ status: 'pending' })}
            className='border rounded px-2 py-1';
=======
          <input;
            placeholder='Reason contains...';
            value={filters.reason || ''}
            on_change={e =>;
              set_filters (function => ({ ...f, reason: e.target.value || undefined }));
            }
            className='border rounded px - 2 py - 1';
          />;
          <input;
            placeholder='User email';
            value={filters.user_email || ''}
            on_change={e =>;
              set_filters (function => ({
                ...f,
                user_email: e.target.value || undefined,
              }));
            }
            className='border rounded px - 2 py - 1';
          />;
          <button;
            on_click={() => set_filters ({ status: 'pending' })}
            className='border rounded px - 2 py - 1';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
          >;
            Reset;
          </button>;
        </div>;


    <EnhancedLayout>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-semibold">Admin Content Review</h1>
        </div>
        <div className='mb-4 grid grid-cols-1 md:grid-cols-5 gap-3 text-sm'>
          <select
            value={filters.status |''}
            onChange={e =>
              setFilters(f => ({ ...f, status: e.target.value |undefined }))
            }
            className='border rounded px-2 py-1'
          >
            <option value=''>All Statuses</option>
            <option value='pending'>Pending</option>
            <option value='approved'>Approved</option>
            <option value='removed'>Removed</option>
            <option value='warned'>Warned</option>
            <option value='banned'>Banned</option>
          </select>
          <select
            value={filters.contentType |''}
            onChange={e =>
              setFilters(f => ({
                ...f
                contentType: e.target.value |undefined
              }))
            }
            className='border rounded px-2 py-1'
          >
            <option value=''>All Types</option>
            <option value='listing'>Listing</option>
            <option value='message'>Message</option>
            <option value='cv'>CV</option>
            <option value='job'>Job Post</option>
          </select>
          <input
            placeholder='Reason contains...'
            value={filters.reason |''}
            onChange={e =>
              setFilters(f => ({ ...f, reason: e.target.value |undefined }))
            }
            className='border rounded px-2 py-1'
          />
          <input
            placeholder='User email'
            value={filters.userEmail |''}
            onChange={e =>
              setFilters(f => ({
                ...f
                userEmail: e.target.value |undefined
              }))
            }
            className='border rounded px-2 py-1'
          />
          <button
            onClick={() => setFilters({ status: 'pending' })}
            className='border rounded px-2 py-1'
          >
            Reset
          </button>
        <div className="mb-4 grid grid-cols-1 md:grid-cols-5 gap-3 text-sm">
          <select value={filters.status || ''} onChange={e => setFilters(f => ({ ...f, status: e.target.value || undefined }))} className="border rounded px-2 py-1">
            <option value="">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="removed">Removed</option>
            <option value="warned">Warned</option>
            <option value="banned">Banned</option>
          </select>
          <select value={filters.contentType || ''} onChange={e => setFilters(f => ({ ...f, contentType: e.target.value || undefined }))} className="border rounded px-2 py-1">
            <option value="">All Types</option>
            <option value="listing">Listing</option>
            <option value="message">Message</option>
            <option value="cv">CV</option>
            <option value="job">Job Post</option>
          </select>
          <input placeholder="Reason contains..." value={filters.reason || ''} onChange={e => setFilters(f => ({ ...f, reason: e.target.value || undefined }))} className="border rounded px-2 py-1" />
          <input placeholder="User email" value={filters.userEmail || ''} onChange={e => setFilters(f => ({ ...f, userEmail: e.target.value || undefined }))} className="border rounded px-2 py-1" />
          <button onClick={() => setFilters({ status: 'pending' })} className="border rounded px-2 py-1">Reset</button>
        </div>
        <div className="overflow-auto border rounded">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
                <th className="text-left px-3 py-2">ID</th>
                <th className="text-left px-3 py-2">Type</th>
                <th className="text-left px-3 py-2">User</th>
                <th className="text-left px-3 py-2">Reason</th>
                <th className="text-left px-3 py-2">AI Scores</th>
                <th className="text-left px-3 py-2">Created</th>
                <th className="text-left px-3 py-2">Status</th>
                <th className="text-left px-3 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {flags.map((f: any) => (
                <tr key={f.id} className="border-t hover:bg-gray-50/50">
                  <td className="px-3 py-2 font-mono text-xs">{f.id}</td>
                  <td className="px-3 py-2">{f.contentType}</td>
                  <td className="px-3 py-2">{f.userEmail}</td>
                  <td className="px-3 py-2 truncate max-w-xs" title={f.reason}>{f.reason}</td>
                  <td className="px-3 py-2 text-xs">T{Math.round(f.aiScores?.toxicity*100)}% / N{Math.round(f.aiScores?.nsfw*100)}% / S{Math.round(f.aiScores?.scam*100)}%</td>
                  <td className="px-3 py-2">{new Date(f.createdAt).toLocaleString()}</td>
                  <td className="px-3 py-2">{f.status}</td>
                  <td className="px-3 py-2">
                    <button onClick={() => setSelected(f)} className="px-2 py-1 rounded border">Review</button>
                  </td>
                </tr>
              ))}
              {flags.length === 0 && (


=======


}

=======
                <tr><td colSpan={8} className="px-3 py-6 text-center text-gray-500">No results</td></tr>
              )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            </tbody>;
          </table>;
        </div>;
      </div>;

      {selected && (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        <ModerationModal
          flag={selected}
          onClose={() => setSelected(null)}
          onAction={handleAction}
        />;
      )}


=======
        <div className='overflow - auto border rounded'>;
          <table className='min - w-full text - sm'>;
            <thead className='bg - gray - 50 dark:bg - gray - 900'>;
              <tr>;
                <th className='text - left px - 3 py - 2'>ID</th>;
                <th className='text - left px - 3 py - 2'>Type</th>;
                <th className='text - left px - 3 py - 2'>User</th>;
                <th className='text - left px - 3 py - 2'>Reason</th>;
                <th className='text - left px - 3 py - 2'>AI Scores</th>;
                <th className='text - left px - 3 py - 2'>Created</th>;
                <th className='text - left px - 3 py - 2'>Status</th>;
                <th className='text - left px - 3 py - 2'>Actions</th>              </tr>;
            </thead>;
            <tbody>;
              {flags.map ((function: any) => (
                <tr key={f.id} className='border - t hover:bg - gray - 50 / 50'>;
                  <td className='px - 3 py - 2 font - mono text - xs'>{f.id}</td>;
                  <td className='px - 3 py - 2'>{f.content_type}</td>;
                  <td className='px - 3 py - 2'>{f.user_email}</td>;
                  <td className='px - 3 py - 2 truncate max - w-xs' title={f.reason}>;
                    {f.reason}
                  </td>;
                  <td className='px - 3 py - 2 text - xs'>;
                    T{Math.round (f.ai_scores?.toxicity * 100)}% / N;
                    {Math.round (f.ai_scores?.nsfw * 100)}% / S;
                    {Math.round (f.ai_scores?.scam * 100)}%;
                  </td>;
                  <td className='px - 3 py - 2'>;
                    {new Date (f.created_at).toLocaleString ()}
                  </td>;
                  <td className='px - 3 py - 2'>{f.status}</td>;
                  <td className='px - 3 py - 2'>;
                    <button;
                      on_click={() => set_selected (f)}
                      className='px - 2 py - 1 rounded border';
                    >;
                      Review;
                    </button>                  </td>;
                </tr>))}
              {flags.length === 0 && (
                <tr>;
                  <td;
                    col_span={8}
                    className='px - 3 py - 6 text - center text - gray - 500';
                  >;
                    No results;
                  </td>;
                </tr>              )}
            </tbody>;
          </table>;
        </div>;
      </div>;
      {selected && (
        <ModerationModal;
          flag={selected}
          on_close={() => set_selected (null)}
          on_action={handle_action}
        />)}
    </EnhancedLayout>);
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
