

<<<<<<< HEAD
interface ApiResponse {
  nodes: TreeNode[],
  status: { gitConnected: boolean, gitBranch?: string }
}

export default function DevTreePage() {
  const [nodes, setNodes] = useState<TreeNode[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [git, setGit] = useState<ApiResponse['status'] | null>(null);
  const [adminToken, setAdminToken] = useState<string>('');





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
=======
import React, { useEffect, useState } from 'react';





import Tree, { TreeNode } from '../../components / ui / Tree';
interface ApiResponse {
  nodes: TreeNode[],
status: {
  git_connected: boolean, git_branch?: string;
export default /**
 * DevTreePage - Function description
 */
function DevTreePage() {
  const [nodes, set_nodes] = useState < TreeNode[] | null>(null);
  const [error, set_error] = useState < string | null>(null);
  const [git, set_git] = useState < ApiResponse['status'] | null>(null);
  const [admin_token, setAdminToken] = useState < string>('');
;
  const fetch_tree = async (token?: string) => {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
    try {
      const resp = await fetch('/api/dev/source-map', {
        headers: token ? { 'x-admin-token': token } : undefined
      });
      if (!resp.ok) {
        const j = await resp.json().catch(() => ({}));
        throw new Error(j.error |`HTTP ${resp.status}`);
      }
      const data: ApiResponse = await resp.json();
      setNodes(data.nodes);
      setGit(data.status);
    } catch (e: any) {
      setError(e.message |'Failed to load');    }
  }
  useEffect(() => {
    const stored = localStorage.getItem('ADMIN_TOKEN') |'';
    setAdminToken(stored);
    fetchTree(stored);
  }, []);
  const handleSaveToken = () => {
    localStorage.setItem('ADMIN_TOKEN', adminToken);
    fetchTree(adminToken);  }
  const onDeploy = async (p: string) => {
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

<<<<<<< HEAD

      const resp = await fetch("/api/dev/source-map", {
        headers: token ? { "x-admin-token": token } : undefined}),
      if (!resp.ok) {
        const j = await resp.json().catch(() => ({})),
        throw new Error(j.error || `HTTP ${resp.status}`)
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      const data: ApiResponse = await resp.json(),
      setNodes(data.nodes),
      setGit(data.status)
    } catch (e: any) {
      setError(e.message || "Failed to load")
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  },
  useEffect(() => {
    const stored = localStorage.getItem("ADMIN_TOKEN") || "",
    setAdminToken(stored),
    fetchTree(stored)
  }, []),
  const handleSaveToken = () => {
    localStorage.setItem("ADMIN_TOKEN", adminToken),
    fetchTree(adminToken)
  },
  const onDeploy = async (p: string) => {
    try {
      const resp = await fetch("/api/dev/source-map", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-token": adminToken},
        body: JSON.stringify({ path: p })}),
      if (!resp.ok) {
        const j = await resp.json().catch(() => ({})),
        throw new Error(j.error || `HTTP ${resp.status}`)
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      await fetchTree(adminToken)
    } catch (e: any) {
      setError(e.message || "Deploy failed")
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  },
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-4">
        <h1 className="text-xl font-semibold">Zion OS Source Tree</h1>
        {git && (
          <div className="text-sm text-gray-600">
            Git: {git.gitConnected ? `connected (${git.gitBranch})` : "not connected"  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>
        )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <div className="ml-auto flex items-center gap-2">
          <input
            className="border rounded px-2 py-1 text-sm"
            placeholder="Admin token"
            value={adminToken  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            onChange={(e) => setAdminToken(e.target.value)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          />
          <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded" onClick={handleSaveToken}>
            Save Token
          </button>
        </div>
      </div>
      {error && <div className='mb-3 text-sm text-red-600'>{error}</div>}

      {error && <div className="mb-3 text-sm text-red-600">{error}</div>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  const fetchTree = async (token?: string) => {;
    try {;
      const resp = await fetch('/api/dev/source-map', {;
        headers: token ? { 'x-admin-token': token } : undefined,;
      });
      if (!resp && resp.ok) {;
        const j = await resp && resp.json().catch(() => ({}));
        throw new Error(j && j.error || `HTTP ${resp && resp.status}`);
      }
      const data: ApiResponse = await resp && resp.json();
      setNodes(data && data.nodes);
      setGit(data && data.status);
    } catch (e: any) {;
      setError(e && e.message || 'Failed to load');    }
  };

  useEffect(() => {;
    const stored = localStorage && localStorage.getItem('ADMIN_TOKEN') || '';
    setAdminToken(stored);
    fetchTree(stored);
  }, []);

  const handleSaveToken = () => {;
    localStorage && localStorage.setItem('ADMIN_TOKEN', adminToken);
    fetchTree(adminToken);  };

  const onDeploy = async (p: string) => {;
    try {;
      const resp = await fetch('/api/dev/source-map', {;
        method: 'POST',;
        headers: {;
          'Content-Type': 'application/json',;
          'x-admin-token': adminToken,;
        },;
        body: JSON && JSON.stringify({ path: p }),;
      });
      if (!resp && resp.ok) {;
        const j = await resp && resp.json().catch(() => ({}));
        throw new Error(j && j.error || `HTTP ${resp && resp.status}`);
      }
      await fetchTree(adminToken);
    } catch (e: any) {;
      setError(e && e.message || 'Deploy failed');    }

<<<<<<< HEAD



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
      {nodes ? (
        <div className="rounded border p-3 bg-white">
          <Tree nodes={nodes} onDeploy={onDeploy} />
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
        </div>
      ) : (
        <div>Loading...</div>
<<<<<<< HEAD

      )}
    </div>
);


=======


            onClick={handleSaveToken}>            Save Token;
=======


}
}
}

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
import React, { useEffect, useState } from "react";
import Tree, { TreeNode } from "../../components/ui/Tree";
interface ApiResponse {;
  nodes: TreeNode[];
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
;
export default function DevTreePage(req, res) {
  try {
  const [nodes, setNodes] = useState<TreeNode[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [git, setGit] = useState<ApiResponse["status"] | null>(null);
  const [adminToken, setAdminToken] = useState<string>("");
  const fetchTree = async (token?: string) => {;
    try {
      const resp = await fetch("/api/dev/source-map", {;
        headers: token ? { "x-admin-token": token } : undefined});
      if (!resp.ok) {;
        const j = await resp.json().catch(() => ({}));
        throw new Error(j.error || `HTTP ${resp.status}`);
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      const data: ApiResponse = await resp.json();
      setNodes(data.nodes);
      setGit(data.status);
    } catch (error) {
      setError(e.message || "Failed to load");
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  };
  useEffect(() => {;
    const stored = localStorage.getItem("ADMIN_TOKEN") || "";
    setAdminToken(stored);
    fetchTree(stored);
  }, []),;
  const handleSaveToken = () => {;
    localStorage.setItem("ADMIN_TOKEN", adminToken);
    fetchTree(adminToken);
  },;
  const onDeploy = async (p: string) => {;
    try {
      const resp = await fetch("/api/dev/source-map", {;
        method: "POST",;
        headers: {;
          "Content-Type": "application/json",;
          "x-admin-token": adminToken},;
        body: JSON.stringify({ path: p })}),;
      if (!resp.ok) {;
        const j = await resp.json().catch(() => ({}));
        throw new Error(j.error || `HTTP ${resp.status}`);
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      await fetchTree(adminToken);
    } catch (error) {
      setError(e.message || "Deploy failed");
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  };
  return (;
    <div className="p-6 max-w-5xl mx-auto">;
      <div className="flex items-center gap-4 mb-4">;
        <h1 className="text-xl font-semibold">Zion OS Source Tree</h1>;
        {git && (;
          <div className="text-sm text-gray-600">;
            Git: {git.gitConnected ? `connected (${git.gitBranch})` : "not connected"  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <div className="ml-auto flex items-center gap-2">;
          <input;
            className="border rounded px-2 py-1 text-sm";
            placeholder="Admin token";
            value={adminToken  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            onChange={(e) => setAdminToken(e.target.value)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          />;
          <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded" onClick={handleSaveToken}>;
            Save Token;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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




>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
<<<<<<< HEAD
=======
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
