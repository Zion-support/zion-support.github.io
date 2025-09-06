=======
import React, { useEffect, useState } from "react";
import Tree, { TreeNode } from "../../components/ui/Tree";

  nodes: TreeNode[]
status: {
  gitConnected: boolean, gitBranch?: string
import React, { useEffect, useState } from 'react';
import Tree, { TreeNode } from '../../components/ui/Tree';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330


export default function DevTreePage() {
  const [nodes, setNodes] = useState<TreeNode[] | null>(null),
  const [error, setError] = useState<string | null>(null),
  const [git, setGit] = useState<ApiResponse["status"] | null>(null),
  const [adminToken, setAdminToken] = useState<string>(""),

import React, { useEffect, useState } from "react",
import Tree, { TreeNode } from "../../components/ui/Tree",
interface ApiResponse {
  nodes: TreeNode[],
  status: { gitConnected: boolean, gitBranch?: string   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
export default function DevTreePage() {
  const [nodes, setNodes] = useState<TreeNode[] | null>(null),
  const [error, setError] = useState<string | null>(null),
  const [git, setGit] = useState<ApiResponse["status"] | null>(null),
  const [adminToken, setAdminToken] = useState<string>(""),
  const fetchTree = async (token?: string) => {
    try {

      setNodes(data.nodes),
      setGit(data.status)
    } catch (e: any) {
      setError(e.message || "Failed to load")

  const handleSaveToken = () => {
    localStorage.setItem("ADMIN_TOKEN", adminToken),
    fetchTree(adminToken)
  },
      {nodes ? (
        <div className="rounded border p-3 bg-white">
          <Tree nodes={nodes} onDeploy={onDeploy} />
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
        </div>
      ) : (
        <div>Loading...</div>
=======
      )}
    </div>
);


}
}
}
=======

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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
