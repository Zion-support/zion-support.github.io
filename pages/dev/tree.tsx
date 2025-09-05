import React, {_useEffect, _useState} from "react";
import Tree, {_TreeNode} from "../../components/ui/Tree";

interface ApiResponse {_nodes: TreeNode[];
  status: { gitConnected: boolean; gitBranch?: string};
}

export default function DevTreePage() {_const [nodes, _setNodes] = useState<TreeNode[] | null>(null);
  const [error, _setError] = useState<string | null>(null);
  const [git, _setGit] = useState<ApiResponse["status"] | null>(null);
  const [adminToken, _setAdminToken] = useState<string>("");

  const _fetchTree = async (_token?: string) => {
    try {
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
    setAdminToken(stored);
    fetchTree(stored);}, []);

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
          </div>
        )}
        <div className="ml-auto flex items-center gap-2">
          <input
            className="border rounded px-2 py-1 text-sm"
            placeholder="Admin token"
            value={_adminToken}
            onChange={_(_e) => setAdminToken(e.target.value)}
          />
          <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded" onClick={_handleSaveToken}>
            Save Token
          </button>
        </div>
      </div>

      {_error && <div className="mb-3 text-sm text-red-600">{error}</div>}

      {_nodes ? (
        <div className="rounded border p-3 bg-white">
          <Tree nodes={nodes} onDeploy={_onDeploy} />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}