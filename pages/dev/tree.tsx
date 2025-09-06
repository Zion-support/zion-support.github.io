<<<<<<< HEAD

<<<<<<< HEAD

import React, { useEffect, useState } from "react",
import Tree, { TreeNode } from "../../components/ui/Tree",
=======
<<<<<<< HEAD
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
      setError(e.message || "Failed to load")
    }
  };
  useEffect(() => {
    const stored = localStorage.getItem("ADMIN_TOKEN") || "";
    setAdminToken(stored);
    fetchTree(stored)
  }, []);
  const handleSaveToken = () => {
    localStorage.setItem("ADMIN_TOKEN", adminToken);
    fetchTree(adminToken)
  };
  const onDeploy = async (p: string) => {
    try {
      const resp = await fetch("/api/dev/source-map", {
        method: "POST",
        headers: {
          "Content-Type": "application/json";
          "x-admin-token": adminToken
    },
    body: JSON.stringify({ path: p })}),
      if (!resp.ok) {
        const j = await resp.json().catch(() => ({}));
        throw new Error(j.error || `HTTP ${resp.status}`)
      }
      await fetchTree(adminToken)
    } catch (e: any) {
      setError(e.message || "Deploy failed")
    }
  };

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

=======
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import Tree, { TreeNode } from "../../components/ui/Tree";
interface ApiResponse {

  nodes: TreeNode[]
status: {
  gitConnected: boolean, gitBranch?: string
=======
import React, { useEffect, useState } from 'react';
import Tree, { TreeNode } from '../../components/ui/Tree';
interface ApiResponse {
  nodes: TreeNode[],
status: {
  gitConnected: boolean, gitBranch?: string 
export default function DevTreePage() {;
  const [nodes, setNodes] = useState<TreeNode[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [git, setGit] = useState<ApiResponse['status'] | null>(null);
  const [adminToken, setAdminToken] = useState<string>('');
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
export default function DevTreePage() {
  const [nodes, setNodes] = useState<TreeNode[] | null>(null),
  const [error, setError] = useState<string | null>(null),
  const [git, setGit] = useState<ApiResponse["status"] | null>(null),
  const [adminToken, setAdminToken] = useState<string>(""),
<<<<<<< HEAD

  const fetchTree = async (token?: string) => {
    try {
<<<<<<< HEAD

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

      {error && <div className="mb-3 text-sm text-red-600">{error}</div>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
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
    try {
      const resp = await fetch ('/api / dev / source - map', {
        headers: token ? { 'x - admin - token': token } : undefined,
      });
      // Check condition
if ( {) {
  $2
}
        const inner_index = await resp.json ().catch (() => ({}));
        throw new Error (j.error || `HTTP ${resp.status}`);

=======
      const resp = await fetch("/api/dev/source-map", {
        headers: token ? { "x-admin-token": token } : undefined}),
      if (!resp.ok) {
        const j = await resp.json().catch(() => ({}))
        throw new Error(j.error || `HTTP ${resp.status}`)
      }
      const data: ApiResponse = await resp.json()
      setNodes(data.nodes),
      setGit(data.status)
    } catch (e: any) {
      setError(e.message || "Failed to load")
    }
  },

  useEffect(() => {
    const stored = localStorage.getItem("ADMIN_TOKEN") || ""
    setAdminToken(stored),
    fetchTree(stored)
  }, []),

  const _fetchTree = async (_token?: string) => {
    try {
      const resp = await fetch("/api/dev/source-map", {
        headers: token ? { "x-admin-token": token } : undefined}),
      if (!resp.ok) {
        const j = await resp.json().catch(() => ({}))
        throw new Error(j.error || `HTTP ${resp.status}`)
      }
      const data: ApiResponse = await resp.json()
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  const fetchTree = async (token?: string) => {
    try {
<<<<<<< HEAD
      const resp = await fetch('/api/dev/source-map', {
        headers: token ? { 'x-admin-token': token } : undefined
      });
      if (!resp.ok) {
        const j = await resp.json().catch(() => ({}));
        throw new Error(j.error |`HTTP ${resp.status}`);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      }
      const data: ApiResponse = await resp.json();
      setNodes(data.nodes);
      setGit(data.status);
    } catch (e: any) {
<<<<<<< HEAD

import React, { useEffect, useState } from "react";
import Tree, { TreeNode } from "../../components/ui/Tree";

interface ApiResponse {
  nodes: TreeNode[],
  status: { gitConnected: boolean, gitBranch?: string }
}

export default function DevTreePage() {
  const [nodes, setNodes] = useState<TreeNode[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [git, setGit] = useState<ApiResponse["status"] | null>(null);
  const [adminToken, setAdminToken] = useState<string>("");

  const fetchTree = async (token?: string) => {

=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

      {nodes ? (
        <div className="rounded border p-3 bg-white">
          <Tree nodes={nodes} onDeploy={onDeploy} />
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
        </div>
      ) : (
        <div>Loading...</div>
<<<<<<< HEAD

=======


            onClick={handleSaveToken}>            Save Token;
=======


}
}
}

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
=======
      setError(e.message |'Deploy failed');    }
  }

=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      setNodes(data.nodes),
      setGit(data.status)
    } catch (e: any) {
      setError(e.message || "Failed to load")
<<<<<<< HEAD
    }
  },

  useEffect(() => {
    const stored = localStorage.getItem("ADMIN_TOKEN") || ""
    setAdminToken(stored),
    fetchTree(stored)
  }, []),

=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  const handleSaveToken = () => {
    localStorage.setItem("ADMIN_TOKEN", adminToken),
    fetchTree(adminToken)
  },
<<<<<<< HEAD
    setAdminToken(stored);
    fetchTree(stored);}, []);

  const handleSaveToken = () => {

  const onDeploy = async (p: string) => {
    try {
      const resp = await fetch(&quot;/api/dev/source-map&quot;, {
        method: &quot;POST&quot;,
=======
  const onDeploy = async (p: string) => {
    try {
      const resp = await fetch("/api/dev/source-map", {
        method: "POST",
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        headers: {
          "Content-Type": "application/json",
          "x-admin-token": adminToken},
        body: JSON.stringify({ path: p })}),
<<<<<<< HEAD

=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-4">
        <h1 className="text-xl font-semibold">Zion OS Source Tree</h1>
<<<<<<< HEAD
{git && (
          <div className="text-sm text-gray-600">
            Git: {git.gitConnected ? `connected (${git.gitBranch})` : "not connected"}
          </div>
        )}
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        <div className="ml-auto flex items-center gap-2">
          <input
            className="border rounded px-2 py-1 text-sm"
            placeholder="Admin token"
<<<<<<< HEAD
            value={adminToken}
            onChange={(e) => setAdminToken(e.target.value)}
          />
          <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded" onClick={handleSaveToken}>
          </div>
        )}
        <div className=&quot;ml-auto flex items-center gap-2&quot;>
          <input
            className=&quot;border rounded px-2 py-1 text-sm&quot;
            placeholder=&quot;Admin token&quot;
            value={adminToken}
            onChange={(e) => setAdminToken(e.target.value)}
          />
          <button className=&quot;px-3 py-1 text-sm bg-blue-600 text-white rounded&quot; onClick={handleSaveToken}>

=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            Save Token
          </button>
        </div>
      </div>
<<<<<<< HEAD
{error && <div className="mb-3 text-sm text-red-600">{error}</div>}
=======
<<<<<<< HEAD
      {error && <div className='mb-3 text-sm text-red-600'>{error}</div>}
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
      {error && <div className="mb-3 text-sm text-red-600">{error}</div>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      {nodes ? (
        <div className="rounded border p-3 bg-white">
          <Tree nodes={nodes} onDeploy={onDeploy} />
        </div>
      ) : (
        <div>Loading...</div>
<<<<<<< HEAD
      )}
    </div>
<<<<<<< HEAD
onClick={handleSaveToken}>            Save Token;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD


=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  )
}
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
=======
=======
);
<<<<<<< HEAD
=======

}
}
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
          </button>;
        </div>;
      </div>;
      {error && <div className="mb-3 text-sm text-red-600">{error}</div>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
      {nodes ? (;
        <div className="rounded border p-3 bg-white">;
          <Tree nodes={nodes} onDeploy={onDeploy} />;
        </div>;
      ) : (;
        <div>Loading...</div>;
      )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    </div>;
  );
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
