<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import Tree, { TreeNode } from '../../components/ui/Tree';

interface ApiResponse {
  nodes: TreeNode[];
status: {
  gitConnected: boolean, gitBranch?: string 
=======
import React, { useEffect, useState } from "react";
import Tree, { TreeNode } from "../../components/ui/Tree";

interface ApiResponse {
  nodes: TreeNode[],
  status: { gitConnected: boolean, gitBranch?: string }
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
import React, { useEffect, useState } from "react";
import Tree, { TreeNode } from "../../components/ui/Tree";

interface ApiResponse {
  nodes: TreeNode[],
  status: { gitConnected: boolean, gitBranch?: string }
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

export default function DevTreePage() {
  const [nodes, setNodes] = useState<TreeNode[] | null>(null);
  const [error, setError] = useState<string | null>(null);
<<<<<<< HEAD
<<<<<<< HEAD
  const [git, setGit] = useState<ApiResponse['status'] | null>(null);
  const [adminToken, setAdminToken] = useState<string>('');
=======
  const [git, setGit] = useState<ApiResponse["status"] | null>(null);
  const [adminToken, setAdminToken] = useState<string>("");
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

  const fetchTree = async (token?: string) => {
    try {
      const resp = await fetch("/api/dev/source-map", {
        headers: token ? { "x-admin-token": token } : undefined}),
      if (!resp.ok) {
        const j = await resp.json().catch(() => ({}));
        throw new Error(j.error || `HTTP ${resp.status}`)
      }
      const data: ApiResponse = await resp.json(),
      setNodes(data.nodes);
      setGit(data.status)
    } catch (e: any) {
<<<<<<< HEAD
      setError(e.message || 'Failed to load');
=======
  const [git, setGit] = useState<ApiResponse["status"] | null>(null);
  const [adminToken, setAdminToken] = useState<string>("");

  const fetchTree = async (token?: string) => {
    try {
      const resp = await fetch("/api/dev/source-map", {
        headers: token ? { "x-admin-token": token } : undefined}),
      if (!resp.ok) {
        const j = await resp.json().catch(() => ({}));
        throw new Error(j.error || `HTTP ${resp.status}`)
      }
      const data: ApiResponse = await resp.json(),
      setNodes(data.nodes);
      setGit(data.status)
    } catch (e: any) {
      setError(e.message || "Failed to load")
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      setError(e.message || "Failed to load")
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
  };

  useEffect(() => {
<<<<<<< HEAD
<<<<<<< HEAD
    const stored = localStorage.getItem('ADMIN_TOKEN') || '';
=======
    const stored = localStorage.getItem("ADMIN_TOKEN") || "";
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    setAdminToken(stored);
    fetchTree(stored)
  }, []);

  const handleSaveToken = () => {
<<<<<<< HEAD
    localStorage.setItem('ADMIN_TOKEN', adminToken);
    fetchTree(adminToken);
=======
    const stored = localStorage.getItem("ADMIN_TOKEN") || "";
    setAdminToken(stored);
    fetchTree(stored)
  }, []);

  const handleSaveToken = () => {
    localStorage.setItem("ADMIN_TOKEN", adminToken);
    fetchTree(adminToken)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    localStorage.setItem("ADMIN_TOKEN", adminToken);
    fetchTree(adminToken)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };

  const onDeploy = async (p: string) => {
    try {
<<<<<<< HEAD
<<<<<<< HEAD
      const resp = await fetch('/api/dev/source-map', {
        method: 'POST',
=======
      const resp = await fetch("/api/dev/source-map", {
        method: "POST",
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        headers: {
          "Content-Type": "application/json";
          "x-admin-token": adminToken};
        body: JSON.stringify({ path: p })}),
      if (!resp.ok) {
        const j = await resp.json().catch(() => ({}));
        throw new Error(j.error || `HTTP ${resp.status}`)
      }
      await fetchTree(adminToken)
    } catch (e: any) {
<<<<<<< HEAD
      setError(e.message || 'Deploy failed');
=======
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      setError(e.message || "Deploy failed")
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
  };

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className='p-6 max-w-5xl mx-auto'>
      <div className='flex items-center gap-4 mb-4'>
        <h1 className='text-xl font-semibold'>Zion OS Source Tree</h1>
=======
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-4">
        <h1 className="text-xl font-semibold">Zion OS Source Tree</h1>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        {git && (
          <div className="text-sm text-gray-600">
            Git: {git.gitConnected ? `connected (${git.gitBranch})` : "not connected"}
          </div>
        )}
        <div className="ml-auto flex items-center gap-2">
          <input
            className="border rounded px-2 py-1 text-sm"
            placeholder="Admin token"
            value={adminToken}
            onChange={(e) => setAdminToken(e.target.value)}
          />
<<<<<<< HEAD
          <button
            className='px-3 py-1 text-sm bg-blue-600 text-white rounded'
            onClick={handleSaveToken}
          >
=======
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-4">
        <h1 className="text-xl font-semibold">Zion OS Source Tree</h1>
        {git && (
          <div className="text-sm text-gray-600">
            Git: {git.gitConnected ? `connected (${git.gitBranch})` : "not connected"}
          </div>
        )}
        <div className="ml-auto flex items-center gap-2">
          <input
            className="border rounded px-2 py-1 text-sm"
            placeholder="Admin token"
            value={adminToken}
            onChange={(e) => setAdminToken(e.target.value)}
          />
          <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded" onClick={handleSaveToken}>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded" onClick={handleSaveToken}>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            Save Token
          </button>
        </div>
      </div>

<<<<<<< HEAD
<<<<<<< HEAD
      {error && <div className='mb-3 text-sm text-red-600'>{error}</div>}

      {nodes ? (
        <div className='rounded border p-3 bg-white'>
=======
      {error && <div className="mb-3 text-sm text-red-600">{error}</div>}

      {nodes ? (
        <div className="rounded border p-3 bg-white">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      {error && <div className="mb-3 text-sm text-red-600">{error}</div>}

      {nodes ? (
        <div className="rounded border p-3 bg-white">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          <Tree nodes={nodes} onDeploy={onDeploy} />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
  );
=======
  )
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
