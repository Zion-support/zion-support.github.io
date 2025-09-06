
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
import React, { useEffect, useState } from 'react';
  const [nodes, setNodes] = useState<TreeNode[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [git, setGit] = useState<ApiResponse['status'] | null>(null);
  const [adminToken, setAdminToken] = useState<string>('');

      }
      const data: ApiResponse = await resp.json ();
      set_nodes (data.nodes);
      set_git (data.status);
    } catch (e: any) {
    try {
      const resp = await fetch('/api/dev/source-map', {
        method: 'POST'
        headers: {
          'Content-Type': 'application/json'
          'x-admin-token': adminToken
        }
        body: JSON.stringify({ path: p })
      });
      if (!resp.ok) {
        const j = await resp.json().catch(() => ({}));
        throw new Error(j.error |`HTTP ${resp.status}`);
      }
      await fetchTree(adminToken);
    } catch (e: any) {
  };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

  return (
    <div className='p-6 max-w-5xl mx-auto'>;
      <div className='flex items-center gap-4 mb-4'>;
        <h1 className='text-xl font-semibold'>Zion OS Source Tree</h1>;
        {git && (;
          <div className='text-sm text-gray-600'>;
            Git:{' '}
            {git && git.gitConnected;
              ? `connected (${git && git.gitBranch})`;
              : 'not connected'}
          </div>;
        )}
        <div className='ml-auto flex items-center gap-2'>;
          <input
            className='border rounded px-2 py-1 text-sm'
            placeholder='Admin token'
            value={adminToken}
            onChange={e => setAdminToken(e && e.target.value)}
          />;
          <button
            className='px-3 py-1 text-sm bg-blue-600 text-white rounded'
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
            onClick={handleSaveToken}>            Save Token;
          </button>;
        </div>;
      </div>;

      {error && <div className='mb-3 text-sm text-red-600'>{error}</div>}

      {nodes ? (;
        <div className='rounded border p-3 bg-white'>          <Tree nodes={nodes} onDeploy={onDeploy} />;
        </div>;
      ) : (;
        <div>Loading...</div>;
      )}
    </div>;
  );
=======
  )
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
      set_error (e.message || 'Failed to load');    }
  }
;
  useEffect (() => {
    const stored = local_storage.get_item ('ADMIN_TOKEN') || '';
    setAdminToken (stored);
    fetch_tree (stored);
  }, []);
;
  const handleSaveToken = () =>: any {
    local_storage.set_item ('ADMIN_TOKEN', admin_token);
    fetch_tree (admin_token);  }
;
  const on_deploy = async (p: string) => {
    try {
      const resp = await fetch ('/api / dev / source - map', {
        method: 'POST',
        headers: {
          'Content - Type': 'application / json',
          'x - admin - token': admin_token,
        },
        body: JSON.stringify ({ path: p }),
      });
      // Check condition
if ( {) {
  $2
}
        const inner_index = await resp.json ().catch (() => ({}));
        throw new Error (j.error || `HTTP ${resp.status}`);
      }
      await fetch_tree (admin_token);
    } catch (e: any) {
      set_error (e.message || 'Deploy failed');    }
  }
;
  return (
    <div className='p - 6 max - w-5xl mx - auto'>;
      <div className='flex items - center gap - 4 mb - 4'>;
        <h1 className='text - xl font - semibold'>Zion OS Source Tree</h1>;
        {git && (
          <div className='text - sm text - gray - 600'>;
            Git:{' '}
            {git.git_connected;
              ? `connected (${git.git_branch})`;
              : 'not connected'}
          </div>)}
        <div className='ml - auto flex items - center gap - 2'>;
          <input;
            className='border rounded px - 2 py - 1 text - sm';
            placeholder='Admin token';
            value={admin_token}
            on_change={e => setAdminToken (e.target.value)}
          />;
          <button;
            className='px - 3 py - 1 text - sm bg - blue - 600 text - white rounded';
            on_click={handleSaveToken}
          >            Save Token;
          </button>;
        </div>;
      </div>;
      {error && <div className='mb - 3 text - sm text - red - 600'>{error}</div>}
      {nodes ? (
        <div className='rounded border p - 3 bg - white'>          <Tree nodes={nodes} on_deploy={on_deploy} />;
        </div>) : (
        <div > Loading...</div>)}
    </div>);
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
