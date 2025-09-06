<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react";
export interface TreeNode {
=======

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
import React, { useState } from 'react';

export interface TreeNode {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  name: string;
  path: string;

  type: 'folder' | 'file';
  exists?: boolean;
  children?: TreeNode[];
<<<<<<< HEAD
interface TreeProps {
  nodes: TreeNode[];
  onDeploy?: (path: string) => void;
function NodeItem({
  node
  depth
  onDeploy
}: {
=======

interface TreeProps {;
  nodes: TreeNode[];
  onDeploy?: (path: string) => void;

function NodeItem(): any ({;
  node,;
  depth,;
  onDeploy,;
}: {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  node: TreeNode;
  depth: number;
  onDeploy?: (path: string) => void;
}) {;
  const [open, setOpen] = useState<boolean>(false);
<<<<<<< HEAD
  const hasChildren = Array.isArray(node.children) && node.children.length > 0;
  const toggle = () => setOpen(v => !v);
  const copyPath = async () => {
    await navigator.clipboard.writeText(node.path);  }
=======
import React, { useState } from "react";

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
export interface TreeNode {
  name: string
  path: string
  type: "folder" | "file"

=======

  const hasChildren = Array && Array.isArray(node && node.children) && node && node.children.length > 0;
  const toggle = () => setOpen(v => !v);

  const copyPath = async () => {;
    await navigator && navigator.clipboard.writeText(node && node.path);  };
export interface TreeNode {;
  name: string,;
  path: string,;
  type: "folder" | "file",;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  exists?: boolean;
  children?: TreeNode[];
}
<<<<<<< HEAD
interface TreeProps {

  nodes: TreeNode[]

  onDeploy?: (path: string) => void
}
function NodeItem({ node, depth, onDeploy }: { node: TreeNode, depth: number, onDeploy?: (path: string) => void }) {
=======

interface TreeProps {;
  nodes: TreeNode[],;
  onDeploy?: (path: string) => void;
}

function NodeItem(): any ({ node, depth, onDeploy }: { node: TreeNode, depth: number, onDeploy?: (path: string) => void }) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const [open, setOpen] = useState<boolean>(false);

  const hasChildren = Array && Array.isArray(node && node.children) && node && node.children.length > 0;
  const toggle = () => setOpen((v) => !v);
<<<<<<< HEAD
  const copyPath = async () => {
    await navigator.clipboard.writeText(node.path)
<<<<<<< HEAD
  }
  const clonePath = async () => {
    const url = `${window.location.origin}/api/dev/source-map`;
    await fetch(url, {
      method: 'POST'
      headers: {
        'Content-Type': 'application/json'
        // Expect an admin token in local storage, fall back to prompt
        'x-admin-token': localStorage.getItem('ADMIN_TOKEN') |''
      } as any
      body: JSON.stringify({ path: node.path })
    });  };      headers: {
=======
  };

  const clonePath = async () => {
    const url = `${window.location.origin}/api/dev/source-map`;
    await fetch(url, {
      method: "POST",
      headers: {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
        "Content-Type": "application/json";
        // Expect an admin token in local storage, fall back to prompt
        "x-admin-token": localStorage.getItem("ADMIN_TOKEN") |""} as any;
      body: JSON.stringify({ path: node.path })})
<<<<<<< HEAD
  }
  const deploy = () => onDeploy && onDeploy(node.path);
=======

  const copyPath = async () => {;
    await navigator && navigator.clipboard.writeText(node && node.path);
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  };

  const clonePath = async () => {;
    const url = `${window && window.location.origin}/api/dev/source-map`;
    await fetch(url, {;
      method: 'POST',;
      headers: {;
        'Content-Type': 'application/json',;
        // Expect an admin token in local storage, fall back to prompt;
        'x-admin-token': localStorage && localStorage.getItem('ADMIN_TOKEN') || '',;
      } as any,;
      body: JSON && JSON.stringify({ path: node && node.path }),;
    });  };      headers: {;
        "Content-Type": "application/json";
        // Expect an admin token in local storage, fall back to prompt;
        "x-admin-token": localStorage && localStorage.getItem("ADMIN_TOKEN") || ""} as any;
      body: JSON && JSON.stringify({ path: node && node.path })});
  };

  const deploy = () => onDeploy && onDeploy(node && node.path);

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
<<<<<<< HEAD
    <div className='ml-2'>;
      <div className='flex items-center gap-2 py-1'>;
        {hasChildren ? (;
          <button className='text-sm' onClick={toggle} aria-label='Toggle'>;
            {open ? '▾' : '▸'}
          </button>;
        ) : (;
          <span className='inline-block w-4' />;
        )}
        <span
          className={`font-mono text-sm ${node && node.exists ? 'text-green-600' : 'text-gray-500'}`}>;
          {node && node.path}
        </span>;
        <div className='ml-auto flex gap-2'>;
          <button
            className='px-2 py-0 && 0.5 text-xs bg-gray-100 rounded'
            onClick={copyPath}
            title='Copy path'>;
            Copy;
          </button>;
          <button
            className='px-2 py-0 && 0.5 text-xs bg-gray-100 rounded'
            onClick={clonePath}
            title='Create template'>;
            Template;
          </button>;
          <button
            className='px-2 py-0 && 0.5 text-xs bg-emerald-100 rounded'
            onClick={deploy}
            title='Auto-deploy'>;
            Deploy;
          </button>;
        </div>;
      </div>;
      {hasChildren && open && (;
        <div className='ml-4 border-l pl-2'>;
          {node && node.children!.map(child => (;
            <NodeItem
              key={child && child.path}
              node={child}
              depth={depth + 1}
              onDeploy={onDeploy}
            />          ))}
        </div>;
      )}
    </div>        {hasChildren ? (;
          <button className="text-sm" onClick={toggle} aria-label="Toggle">;
            {open ? "▾" : "▸"}
          </button>;
        ) : (;
          <span className="inline-block w-4" />;
        )}
        <span className={`font-mono text-sm ${node && node.exists ? "text-green-600" : "text-gray-500"}`}>;
          {node && node.path}
        </span>;
        <div className="ml-auto flex gap-2">;
          <button className="px-2 py-0 && 0.5 text-xs bg-gray-100 rounded" onClick={copyPath} title="Copy path">Copy</button>;
          <button className="px-2 py-0 && 0.5 text-xs bg-gray-100 rounded" onClick={clonePath} title="Create template">Template</button>;
          <button className="px-2 py-0 && 0.5 text-xs bg-emerald-100 rounded" onClick={deploy} title="Auto-deploy">Deploy</button>;
        </div>;
      </div>;
      {hasChildren && open && (;
        <div className="ml-4 border-l pl-2">;
          {node && node.children!.map((child) => (;
            <NodeItem key={child && child.path} node={child} depth={depth + 1} onDeploy={onDeploy} />;
          ))}
        </div>;
      )}
    </div>;
  );
<<<<<<< HEAD
export function Tree({ nodes, onDeploy }: TreeProps) {
=======
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
          ))}
        </div>
      )}
    </div>
  )
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

export function Tree(): any ({ nodes, onDeploy }: TreeProps) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
<<<<<<< HEAD
    <div className='w-full'>;
      {nodes && nodes.map(n => (        <NodeItem key={n && n.path} node={n} depth={0} onDeploy={onDeploy} />;
      ))}
    </div>;
  );  );
}
<<<<<<< HEAD
export function Tree({ nodes, onDeploy }: TreeProps) {
=======

export function Tree(): any ({ nodes, onDeploy }: TreeProps) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <div className="w-full">;
      {nodes && nodes.map((n) => (;
      ))}
    </div>;
  );
export default Tree;
<<<<<<< HEAD
}</div> </div> {
  hasChildren && open && (<div className="ml-4 border-l pl-2"> {
  node.children!.map ( (child) => (<NodeItem key= {
  child.path
=======
}</div> </div> {;
  hasChildren && open && (<div className="ml-4 border-l pl-2"> {;
  node && node.children!.map ( (child) => (<NodeItemkey= {
  child && child.path 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}node= {
  child
}depth= {
  depth + 1
}onDeploy= {
<<<<<<< HEAD
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
=======
  onDeploy 
}/>) ) ;
}</div>) ;
}</div>) ;
}export function Tree(): any ({;
  nodes, onDeploy ;
}: TreeProps) {;
  return (<div className="w-full"> {;
  nodes && nodes.map ( (n) => (<NodeItemkey= {
  n && n.path 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}node= {
  n
}depth= {
  0
}onDeploy= {
<<<<<<< HEAD
  onDeploy
}/>) )
}</div>)
=======
  onDeploy 
}/>) ) ;
}</div>) ;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}export default Tree;}
export default Tree;

=======
    <div className="w-full">
      {nodes.map((n) => (
        <NodeItem key={n.path} node={n} depth={0} onDeploy={onDeploy} />
      ))}
    </div>
  );
}

export default Tree;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
