<<<<<<< HEAD
import React, { useState } from 'react';
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React, { useState } from "react";
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export interface TreeNode {
  name: string;
  path: string;
  type: 'folder' | 'file';
  exists?: boolean;
  children?: TreeNode[];

interface TreeProps {
  nodes: TreeNode[];
  onDeploy?: (path: string) => void;

function NodeItem({
  node,
  depth,
  onDeploy,
}: {
  node: TreeNode;
  depth: number;
  onDeploy?: (path: string) => void;
}) {
  const [open, setOpen] = useState<boolean>(false);

  const hasChildren = Array.isArray(node.children) && node.children.length > 0;
  const toggle = () => setOpen(v => !v);

  const copyPath = async () => {
<<<<<<< HEAD
    await navigator.clipboard.writeText(node.path);  };
=======
<<<<<<< HEAD
    await navigator.clipboard.writeText(node.path);
=======
import React, { useState } from "react";

export interface TreeNode {
  name: string,
  path: string,
  type: "folder" | "file",
  exists?: boolean;
  children?: TreeNode[]
}

interface TreeProps {
  nodes: TreeNode[],
  onDeploy?: (path: string) => void
}

function NodeItem({ node, depth, onDeploy }: { node: TreeNode, depth: number, onDeploy?: (path: string) => void }) {
  const [open, setOpen] = useState<boolean>(false);

  const hasChildren = Array.isArray(node.children) && node.children.length > 0;
  const toggle = () => setOpen((v) => !v);

  const copyPath = async () => {
    await navigator.clipboard.writeText(node.path)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    await navigator.clipboard.writeText(node.path)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  const clonePath = async () => {
    const url = `${window.location.origin}/api/dev/source-map`;
    await fetch(url, {
<<<<<<< HEAD
      method: 'POST',
=======
<<<<<<< HEAD
<<<<<<< HEAD
      method: 'POST',
=======
      method: "POST",
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      headers: {
        'Content-Type': 'application/json',
        // Expect an admin token in local storage, fall back to prompt
<<<<<<< HEAD
        'x-admin-token': localStorage.getItem('ADMIN_TOKEN') || '',
      } as any,
      body: JSON.stringify({ path: node.path }),
    });  };
=======
<<<<<<< HEAD
        'x-admin-token': localStorage.getItem('ADMIN_TOKEN') || '',
      } as any,
      body: JSON.stringify({ path: node.path }),
    });
=======
      method: "POST",
      headers: {
        "Content-Type": "application/json";
        // Expect an admin token in local storage, fall back to prompt
        "x-admin-token": localStorage.getItem("ADMIN_TOKEN") || ""} as any;
      body: JSON.stringify({ path: node.path })})
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        "x-admin-token": localStorage.getItem("ADMIN_TOKEN") || ""} as any;
      body: JSON.stringify({ path: node.path })})
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  const deploy = () => onDeploy && onDeploy(node.path);

  return (
<<<<<<< HEAD
    <div className='ml-2'>
      <div className='flex items-center gap-2 py-1'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
    <div className='ml-2'>
      <div className='flex items-center gap-2 py-1'>
=======
    <div className="ml-2">
      <div className="flex items-center gap-2 py-1">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        {hasChildren ? (
          <button className='text-sm' onClick={toggle} aria-label='Toggle'>
            {open ? '▾' : '▸'}
          </button>
        ) : (
          <span className='inline-block w-4' />
        )}
        <span
          className={`font-mono text-sm ${node.exists ? 'text-green-600' : 'text-gray-500'}`}
        >
          {node.path}
        </span>
        <div className='ml-auto flex gap-2'>
          <button
            className='px-2 py-0.5 text-xs bg-gray-100 rounded'
            onClick={copyPath}
            title='Copy path'
          >
            Copy
          </button>
          <button
            className='px-2 py-0.5 text-xs bg-gray-100 rounded'
            onClick={clonePath}
            title='Create template'
          >
            Template
          </button>
          <button
            className='px-2 py-0.5 text-xs bg-emerald-100 rounded'
            onClick={deploy}
            title='Auto-deploy'
          >
            Deploy
          </button>
        </div>
      </div>
      {hasChildren && open && (
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        <div className='ml-4 border-l pl-2'>
          {node.children!.map(child => (
            <NodeItem
              key={child.path}
              node={child}
              depth={depth + 1}
              onDeploy={onDeploy}
<<<<<<< HEAD
            />          ))}
        </div>
      )}
    </div>
=======
            />
=======
    <div className="ml-2">
      <div className="flex items-center gap-2 py-1">
        {hasChildren ? (
          <button className="text-sm" onClick={toggle} aria-label="Toggle">
            {open ? "▾" : "▸"}
          </button>
        ) : (
          <span className="inline-block w-4" />
        )}
        <span className={`font-mono text-sm ${node.exists ? "text-green-600" : "text-gray-500"}`}>
          {node.path}
        </span>
        <div className="ml-auto flex gap-2">
          <button className="px-2 py-0.5 text-xs bg-gray-100 rounded" onClick={copyPath} title="Copy path">Copy</button>
          <button className="px-2 py-0.5 text-xs bg-gray-100 rounded" onClick={clonePath} title="Create template">Template</button>
          <button className="px-2 py-0.5 text-xs bg-emerald-100 rounded" onClick={deploy} title="Auto-deploy">Deploy</button>
        </div>
      </div>
      {hasChildren && open && (
        <div className="ml-4 border-l pl-2">
          {node.children!.map((child) => (
            <NodeItem key={child.path} node={child} depth={depth + 1} onDeploy={onDeploy} />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <div className="ml-4 border-l pl-2">
          {node.children!.map((child) => (
            <NodeItem key={child.path} node={child} depth={depth + 1} onDeploy={onDeploy} />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          ))}
        </div>
      )}
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  );

export function Tree({ nodes, onDeploy }: TreeProps) {
  return (
    <div className='w-full'>
<<<<<<< HEAD
      {nodes.map(n => (        <NodeItem key={n.path} node={n} depth={0} onDeploy={onDeploy} />
      ))}
    </div>
  );
=======
      {nodes.map(n => (
=======
  )
}

export function Tree({ nodes, onDeploy }: TreeProps) {
  return (
    <div className="w-full">
      {nodes.map((n) => (
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
}

export function Tree({ nodes, onDeploy }: TreeProps) {
  return (
    <div className="w-full">
      {nodes.map((n) => (
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        <NodeItem key={n.path} node={n} depth={0} onDeploy={onDeploy} />
      ))}
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export default Tree;
}</div> </div> {
  hasChildren && open && (<div className="ml-4 border-l pl-2"> {
  node.children!.map ( (child) => (<NodeItem key= {
  child.path 
}node= {
  child 
}depth= {
  depth + 1 
}onDeploy= {
  onDeploy 
}/>) ) 
}</div>) 
}</div>) 
}export function Tree ({
  nodes, onDeploy 
}: TreeProps) {
  return (<div className="w-full"> {
  nodes.map ( (n) => (<NodeItem key= {
  n.path 
}node= {
  n 
}depth= {
  0 
}onDeploy= {
  onDeploy 
}/>) ) 
}</div>) 
<<<<<<< HEAD
}export default Tree;
=======
}export default Tree;
=======
}

export default Tree;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}

export default Tree;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
