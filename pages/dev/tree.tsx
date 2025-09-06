



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
        headers: token ? { 'x - admin - token': token } : undefined
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

      {nodes ? (
        <div className="rounded border p-3 bg-white">
          <Tree nodes={nodes} onDeploy={onDeploy} />
        </div>
      ) : (
        <div>Loading...</div>


            onClick={handleSaveToken}>            Save Token;

      {nodes ? (;
        <div className='rounded border p-3 bg-white'>          <Tree nodes={nodes} onDeploy={onDeploy} />;
        </div>;
      ) : (;
        <div>Loading...</div>;
      )}
    </div>;
  );





  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}






