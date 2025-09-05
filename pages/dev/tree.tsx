<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect, useState } from "react",
import Tree, { TreeNode } from "../../components/ui/Tree",
=======
import React, { useEffect, useState } from &quot;react&quot;;
import Tree, { TreeNode } from &quot;../../components/ui/Tree&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

interface ApiResponse {
  nodes: TreeNode[],
  status: { gitConnected: boolean, gitBranch?: string }
}

export default function DevTreePage() {
<<<<<<< HEAD
  const [nodes, setNodes] = useState<TreeNode[] | null>(null),
  const [error, setError] = useState<string | null>(null),
  const [git, setGit] = useState<ApiResponse["status"] | null>(null),
  const [adminToken, setAdminToken] = useState<string>(""),
=======
import React, {_useEffect, _useState} from "react";
import Tree, {_TreeNode} from "../../components/ui/Tree";

interface ApiResponse {_nodes: TreeNode[];
  status: { gitConnected: boolean; gitBranch?: string};
}

export default function DevTreePage() {_const [nodes, _setNodes] = useState<TreeNode[] | null>(null);
  const [error, _setError] = useState<string | null>(null);
  const [git, _setGit] = useState<ApiResponse["status"] | null>(null);
  const [adminToken, _setAdminToken] = useState<string>("");
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _fetchTree = async (_token?: string) => {
    try {
<<<<<<< HEAD
      const resp = await fetch("/api/dev/source-map", {
        headers: token ? { "x-admin-token": token } : undefined}),
=======
  const [nodes, setNodes] = useState<TreeNode[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [git, setGit] = useState<ApiResponse[&quot;status&quot;] | null>(null);
  const [adminToken, setAdminToken] = useState<string>("&quot;);

  const fetchTree = async (token?: string) => {
    try {
      const resp = await fetch(&quot;/api/dev/source-map&quot;, {
        headers: token ? { &quot;x-admin-token&quot;: token } : undefined});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      if (!resp.ok) {
        const j = await resp.json().catch(() => ({})),
        throw new Error(j.error || `HTTP ${resp.status}`)
      }
      const data: ApiResponse = await resp.json(),
      setNodes(data.nodes),
      setGit(data.status)
    } catch (e: any) {
<<<<<<< HEAD
      setError(e.message || "Failed to load")
=======
      setError(e.message || &quot;Failed to load&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },

  useEffect(() => {
<<<<<<< HEAD
    const stored = localStorage.getItem("ADMIN_TOKEN") || "",
    setAdminToken(stored),
    fetchTree(stored)
  }, []),

  const handleSaveToken = () => {
    localStorage.setItem("ADMIN_TOKEN", adminToken),
    fetchTree(adminToken)
  },
=======
    const stored = localStorage.getItem(&quot;ADMIN_TOKEN&quot;) || "&quot;;
=======
      const _resp = await fetch("/api/dev/source-map", _{
        headers: token ? { "x-admin-token": token} : undefined});
      if (!resp.ok) {_const _j = await resp.json().catch__(() => ({}));
        throw new Error(j.error || `HTTP ${_resp.status}`);
      }
      const data: ApiResponse = await resp.json();
      setNodes(data.nodes);
      setGit(data.status);
    } catch (e: unknown) {_setError(e.message || "Failed to load");}
  };

  useEffect__(() => {_const _stored = localStorage.getItem("ADMIN_TOKEN") || "";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    setAdminToken(stored);
    fetchTree(stored);}, []);

<<<<<<< HEAD
  const handleSaveToken = () => {
    localStorage.setItem(&quot;ADMIN_TOKEN&quot;, adminToken);
    fetchTree(adminToken);
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  const onDeploy = async (p: string) => {
    try {
      const resp = await fetch(&quot;/api/dev/source-map&quot;, {
        method: &quot;POST&quot;,
        headers: {
<<<<<<< HEAD
          "Content-Type": "application/json",
          "x-admin-token": adminToken},
        body: JSON.stringify({ path: p })}),
=======
          &quot;Content-Type&quot;: &quot;application/json&quot;,
          &quot;x-admin-token&quot;: adminToken},
        body: JSON.stringify({ path: p })});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      if (!resp.ok) {
        const j = await resp.json().catch(() => ({})),
        throw new Error(j.error || `HTTP ${resp.status}`)
      }
      await fetchTree(adminToken)
    } catch (e: any) {
<<<<<<< HEAD
      setError(e.message || "Deploy failed")
=======
      setError(e.message || &quot;Deploy failed&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },

  return (
    <div className=&quot;p-6 max-w-5xl mx-auto&quot;>
      <div className=&quot;flex items-center gap-4 mb-4&quot;>
        <h1 className=&quot;text-xl font-semibold&quot;>Zion OS Source Tree</h1>
        {git && (
          <div className=&quot;text-sm text-gray-600&quot;>
            Git: {git.gitConnected ? `connected (${git.gitBranch})` : &quot;not connected&quot;}
=======
  const _handleSaveToken = () => {_localStorage.setItem("ADMIN_TOKEN", _adminToken);
    fetchTree(adminToken);};

  const _onDeploy = async (_p: string) => {_try {
      const _resp = await fetch("/api/dev/source-map", _{
        method: "POST", _headers: {
          "Content-Type": "application/json", _"x-admin-token": adminToken},
        body: JSON.stringify({_path: p})});
      if (!resp.ok) {_const _j = await resp.json().catch__(() => ({}));
        throw new Error(j.error || `HTTP ${_resp.status}`);
      }
      await fetchTree(adminToken);
    } catch (e: unknown) {_setError(e.message || "Deploy failed");}
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-4">
        <h1 className="text-xl font-semibold">Zion OS Source Tree</h1>
        {_git && (
          <div className="text-sm text-gray-600">
            Git: {git.gitConnected ? `connected (${git.gitBranch})` : "not connected"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </div>
        )}
        <div className=&quot;ml-auto flex items-center gap-2&quot;>
          <input
<<<<<<< HEAD
            className=&quot;border rounded px-2 py-1 text-sm&quot;
            placeholder=&quot;Admin token&quot;
            value={adminToken}
            onChange={(e) => setAdminToken(e.target.value)}
          />
          <button className=&quot;px-3 py-1 text-sm bg-blue-600 text-white rounded&quot; onClick={handleSaveToken}>
=======
            className="border rounded px-2 py-1 text-sm"
            placeholder="Admin token"
            value={_adminToken}
            onChange={_(_e) => setAdminToken(e.target.value)}
          />
          <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded" onClick={_handleSaveToken}>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            Save Token
          </button>
        </div>
      </div>

<<<<<<< HEAD
      {error && <div className=&quot;mb-3 text-sm text-red-600&quot;>{error}</div>}

      {nodes ? (
        <div className=&quot;rounded border p-3 bg-white&quot;>
          <Tree nodes={nodes} onDeploy={onDeploy} />
=======
      {_error && <div className="mb-3 text-sm text-red-600">{error}</div>}

      {_nodes ? (
        <div className="rounded border p-3 bg-white">
          <Tree nodes={nodes} onDeploy={_onDeploy} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}