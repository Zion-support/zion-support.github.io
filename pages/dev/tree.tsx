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

      }
      const data: ApiResponse = await resp.json();
      setNodes(data.nodes);
      setGit(data.status);
    } catch (e: any) {

import React, { useEffect, useState } from "react";
import Tree, { TreeNode } from "../../components/ui/Tree";
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159


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

        headers: {
          "Content-Type": "application/json",
          "x-admin-token": adminToken},
        body: JSON.stringify({ path: p })}),

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-4">
        <h1 className="text-xl font-semibold">Zion OS Source Tree</h1>

        <div className="ml-auto flex items-center gap-2">
          <input
            className="border rounded px-2 py-1 text-sm"
            placeholder="Admin token"

            Save Token
          </button>
        </div>
      </div>

      {nodes ? (
        <div className="rounded border p-3 bg-white">
          <Tree nodes={nodes} onDeploy={onDeploy} />
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
        </div>
      ) : (
        <div>Loading...</div>
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
