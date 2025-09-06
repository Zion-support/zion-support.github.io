<<<<<<< HEAD
<<<<<<< HEAD


export interface TreeNode {

=======


=======

import React, { useState } from 'react';

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  name: string;
  path: string;
  type: 'folder' | 'file';
  exists?: boolean;
  children?: TreeNode[];
<<<<<<< HEAD
<<<<<<< HEAD

=======



interface TreeProps {
  nodes: TreeNode[];
  onDeploy?: (path: string) => void;



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
function NodeItem({
  node
  depth
  onDeploy
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
;
interface TreeProps {
  nodes: TreeNode[];
  on_deploy?: (path: string) => void;
;
function NodeItem ({
  node,
  depth,
  on_deploy,
}: {
interface TreeProps {;
  nodes: TreeNode[];
  onDeploy?: (path: string) => void;
function NodeItem(): any ({;
  node,;
  depth,;
  onDeploy,;
}: {;
  node: TreeNode;
  depth: number;
<<<<<<< HEAD

import React, { useState } from "react";


export interface TreeNode {

<<<<<<< HEAD
=======

=======
import React, { useState } from "react";
export interface TreeNode {
  name: string
  path: string
  type: "folder" | "file"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const hasChildren = Array && Array.isArray(node && node.children) && node && node.children.length > 0;
  const toggle = () => setOpen(v => !v);
  const copyPath = async () => {;
    await navigator && navigator.clipboard.writeText(node && node.path);  };
export interface TreeNode {;
  name: string,;
  path: string,;
  type: "folder" | "file",;
<<<<<<< HEAD

=======

  name: string,
  path: string,
  type: "folder" | "file",;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  exists?: boolean;
  children?: TreeNode[];
}


interface TreeProps {;
  nodes: TreeNode[],;
  onDeploy?: (path: string) => void;
}

function NodeItem(): any ({ node, depth, onDeploy }: { node: TreeNode, depth: number, onDeploy?: (path: string) => void }) {;

=======
  exists?: boolean;
  children?: TreeNode[];
}
interface TreeProps {;
  nodes: TreeNode[],;
  onDeploy?: (path: string) => void;
}
function NodeItem(): any ({ node, depth, onDeploy }: { node: TreeNode, depth: number, onDeploy?: (path: string) => void }) {;
  const [open, setOpen] = useState<boolean>(false);
  const hasChildren = Array && Array.isArray(node && node.children) && node && node.children.length > 0;
  const toggle = () => setOpen((v) => !v);
  };
  const clonePath = async () => {
    const url = `${window.location.origin}/api/dev/source-map`;
    await fetch(url, {
      method: "POST",
      headers: {
=======
<<<<<<< HEAD
import React, { useState } from "react";
=======
import React, { useState } from 'react';
<<<<<<< HEAD

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
export interface TreeNode {;
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export interface TreeNode {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  name: string;
  path: string;

  type: 'folder' | 'file';
  exists?: boolean;
  children?: TreeNode[];
<<<<<<< HEAD
interface TreeProps {
  nodes: TreeNode[];
  onDeploy?: (path: string) => void;
=======

interface TreeProps {
  nodes: TreeNode[];
  onDeploy?: (path: string) => void;

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
function NodeItem({
  node
  depth
  onDeploy
}: {
  node: TreeNode;
  depth: number;
  onDeploy?: (path: string) => void;
}) {
  const [open, setOpen] = useState<boolean>(false);
  const hasChildren = Array.isArray(node.children) && node.children.length > 0;
  const toggle = () => setOpen(v => !v);
  const copyPath = async () => {
    await navigator.clipboard.writeText(node.path);  }
export interface TreeNode {
<<<<<<< HEAD
  name: string
  path: string
  type: "folder" | "file"

=======
  name: string,
  path: string,
  type: "folder" | "file",;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  exists?: boolean;
  children?: TreeNode[]
}
interface TreeProps {

  nodes: TreeNode[]

  onDeploy?: (path: string) => void
}
function NodeItem({ node, depth, onDeploy }: { node: TreeNode, depth: number, onDeploy?: (path: string) => void }) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const [open, setOpen] = useState<boolean>(false);

  const hasChildren = Array.isArray(node.children) && node.children.length > 0;
  const toggle = () => setOpen((v) => !v);
<<<<<<< HEAD

  };

  const clonePath = async () => {
    const url = `${window.location.origin}/api/dev/source-map`;
    await fetch(url, {
      method: "POST",
      headers: {

=======
  const copyPath = async () => {
    await navigator.clipboard.writeText(node.path)
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        "Content-Type": "application/json";
        // Expect an admin token in local storage, fall back to prompt
        "x-admin-token": localStorage.getItem("ADMIN_TOKEN") |""} as any;
      body: JSON.stringify({ path: node.path })})
<<<<<<< HEAD


  const copyPath = async () => {;
    await navigator && navigator.clipboard.writeText(node && node.path);
=======

=======
<<<<<<< HEAD
  const copyPath = async () => {;
    await navigator && navigator.clipboard.writeText(node && node.path);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
  return (
<<<<<<< HEAD


=======
  on_deploy?: (path: string) => void;
}) {
  const [open, set_open] = useState < boolean>(false);
;
  const has_children = Array.is_array (node.children) && node.children.length > 0;
  const toggle = () =>: any set_open (v => !v);
;
  const copy_path = async () => {
    await navigator.clipboard.write_text (node.path);  }
export interface TreeNode {
  name: string,
  path: string,
  type: "folder" | "file",
exists?: boolean;
  children?: TreeNode[];
}
interface TreeProps {
  nodes: TreeNode[],
  on_deploy?: (path: string) => void;
}
function NodeItem ({ node, depth, on_deploy }: { node: TreeNode, depth: number, on_deploy?: (path: string) => void }) {
  const [open, set_open] = useState < boolean>(false);
;
  const has_children = Array.is_array (node.children) && node.children.length > 0;
  const toggle = () =>: any set_open ((v) => !v);
;
  const copy_path = async () => {
    await navigator.clipboard.write_text (node.path);
  }
;
  const clone_path = async () => {
    const url = `${window.location.origin}/api / dev / source - map`;
    await fetch (url, {
      method: 'POST',
      headers: {
        'Content - Type': 'application / json',
        // Expect an admin token in local storage, fall back to prompt;
        'x - admin - token': local_storage.get_item ('ADMIN_TOKEN') || '',
      } as any,
      body: JSON.stringify ({ path: node.path }),
    });  }      headers: {
        "Content - Type": "application / json";
        // Expect an admin token in local storage, fall back to prompt;
        "x - admin - token": local_storage.get_item ("ADMIN_TOKEN") || ""} as any;
      body: JSON.stringify ({ path: node.path })});
  }
;
  const deploy = () =>: any on_deploy && on_deploy (node.path);
;
  return (
    <div className='ml - 2'>;
      <div className='flex items - center gap - 2 py - 1'>;
        {has_children ? (
          <button className='text - sm' on_click={toggle} aria - label='Toggle'>;
            {open ? '▾' : '▸'}
          </button>) : (
          <span className='inline - block w - 4' />)}
        <span;
          className={`font - mono text - sm ${node.exists ? 'text - green - 600' : 'text - gray - 500'}`}
        >;
          {node.path}
        </span>;
        <div className='ml - auto flex gap - 2'>;
          <button;
            className='px - 2 py - 0.5 text - xs bg - gray - 100 rounded';
            on_click={copy_path}
            title='Copy path';
          >;
            Copy;
          </button>;
          <button;
            className='px - 2 py - 0.5 text - xs bg - gray - 100 rounded';
            on_click={clone_path}
            title='Create template';
          >;
            Template;
          </button>;
          <button;
            className='px - 2 py - 0.5 text - xs bg - emerald - 100 rounded';
            on_click={deploy}
            title='Auto - deploy';
          >;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            Deploy;
          </button>;
        </div>;
      </div>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {has_children && open && (
        <div className='ml - 4 border - l pl - 2'>;
          {node.children!.map (child => (
            <NodeItem;
              key={child.path}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              node={child}
              depth={depth + 1}
              on_deploy={on_deploy}
            />          ))}
<<<<<<< HEAD
<<<<<<< HEAD
        </div>
      )}

=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          ))}
        </div>
      )}
    </div>

<<<<<<< HEAD
=======

export function Tree(): any ({ nodes, onDeploy }: TreeProps) {;

=======
    <div className="ml-2">
      <div className="flex items-center gap-2 py-1">
        {hasChildren ? (
          <button className="text-sm" onClick={toggle} aria-label="Toggle">
        </div>)}
    </div>        {has_children ? (
          <button className="text - sm" on_click={toggle} aria - label="Toggle">;
            {open ? "▾" : "▸"}
          </button>) : (
          <span className="inline - block w - 4" />)}
        <span className={`font - mono text - sm ${node.exists ? "text - green - 600" : "text - gray - 500"}`}>;
          {node.path}
export function Tree(): any ({ nodes, onDeploy }: TreeProps) {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <div className="w-full">;
      {nodes && nodes.map((n) => (;
      ))}
    </div>;
=======

    </div>;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  );
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        </span>;
        <div className="ml - auto flex gap - 2">;
          <button className="px - 2 py - 0.5 text - xs bg - gray - 100 rounded" on_click={copy_path} title="Copy path">Copy</button>;
          <button className="px - 2 py - 0.5 text - xs bg - gray - 100 rounded" on_click={clone_path} title="Create template">Template</button>;
          <button className="px - 2 py - 0.5 text - xs bg - emerald - 100 rounded" on_click={deploy} title="Auto - deploy">Deploy</button>;
        </div>;
      </div>;
      {has_children && open && (
        <div className="ml - 4 border - l pl - 2">;
          {node.children!.map ((child) => (
            <NodeItem key={child.path} node={child} depth={depth + 1} on_deploy={on_deploy} />))}
        </div>)}
    </div>);
;
export /**
 * Tree - Function description
 */
function Tree() {
  return (
    <div className='w - full'>;
      {nodes.map (number => (        <NodeItem key={n.path} node={n} depth={0} on_deploy={on_deploy} />))}
    </div>));
}
export /**
 * Tree - Function description
 */
function Tree() {
  return (
    <div className="w - full">;
      {nodes.map ((n) => (
      ))}
    </div>);
;
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
export default Tree;

=======
export default Tree;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}</div> </div> {;
  hasChildren && open && (<div className="ml-4 border-l pl-2"> {;
  node && node.children!.map ( (child) => (<NodeItemkey= {
  child && child.path 
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}node= {
  child
}depth= {
  depth + 1
}onDeploy= {
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}node= {
  n
}depth= {
  0
}onDeploy= {
<<<<<<< HEAD

<<<<<<< HEAD
}export default Tree;}
export default Tree;

    </div>
  );

=======
  onDeploy 
}/>) ) ;
}</div>) ;

=======
  onDeploy 
}/>) ) ;
}</div>) ;
}export default Tree;}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export default Tree;
    <div className="w-full">
      {nodes.map((n) => (
=======

}export default Tree;}
export default Tree;



        <NodeItem key={n.path} node={n} depth={0} onDeploy={onDeploy} />
      ))}
    </div>
  );
<<<<<<< HEAD



=======
=======
}
export default Tree;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  child.path;
}node= {
  child;
}depth= {
  depth + 1;
}on_deploy= {
  on_deploy;
}/>) );
}</div>);
}</div>);
}export /**
 * Tree - Function description
 */
function Tree() {
  return (<div className="w - full"> {
  nodes.map ( (n) => (<NodeItem key= {
  n.path;
}node= {
  n;
}depth= {
  0;
}on_deploy= {
  on_deploy;
}/>) );
}</div>);
}export default Tree;}
export default Tree;
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

}

interface TreeProps {
  nodes: TreeNode[],
  onDeploy?: (path: string) => void
}

function NodeItem({ node, depth, onDeploy }: { node: TreeNode, depth: number, onDeploy?: (path: string) => void }) {
  const [open, setOpen] = useState<boolean>(false),

  const hasChildren = Array.isArray(node.children) && node.children.length > 0
  const toggle = () => setOpen((v) => !v)

  const copyPath = async () => {
    await navigator.clipboard.writeText(node.path)
  },

  const clonePath = async () => {
    const url = `${window.location.origin}/api/dev/source-map`
    await fetch(url, {
      method: &quot;POST&quot;,
      headers: {
        &quot;Content-Type&quot;: &quot;application/json&quot;,
        // Expect an admin token in local storage, fall back to prompt

  const deploy = () => onDeploy && onDeploy(node.path)

  return (
    <div className="ml-2">
      <div className="flex items-center gap-2 py-1">
        {hasChildren ? (
          <button className="text-sm&quot; onClick={toggle} aria-label=&quot;Toggle&quot;>
            {open ? &quot;▾&quot; : &quot;▸"}
=======
  }
  const deploy = () => onDeploy && onDeploy(node.path);
  return (
    <div className='ml-2'>
      <div className='flex items-center gap-2 py-1'>
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
        <div className='ml-4 border-l pl-2'>
          {node.children!.map(child => (
            <NodeItem
              key={child.path}
              node={child}
              depth={depth + 1}
              onDeploy={onDeploy}
            />          ))}
        </div>
      )}
<<<<<<< HEAD
    </div>        {hasChildren ? (
          <button className="text-sm" onClick={toggle} aria-label="Toggle">
            {open ? "▾" : "▸"}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          </button>
        ) : (
          <span className="inline-block w-4" />
        )}
<<<<<<< HEAD
        <span className={`font-mono text-sm ${node.exists ? "text-green-600&quot; : &quot;text-gray-500"}`}>
          {node.path}
        </span>
        <div className="ml-auto flex gap-2">
          <button className="px-2 py-0.5 text-xs bg-gray-100 rounded&quot; onClick={copyPath} title=&quot;Copy path">Copy</button>
          <button className="px-2 py-0.5 text-xs bg-gray-100 rounded&quot; onClick={clonePath} title=&quot;Create template">Template</button>
          <button className="px-2 py-0.5 text-xs bg-emerald-100 rounded&quot; onClick={deploy} title=&quot;Auto-deploy">Deploy</button>
        </div>
      </div>
      {_hasChildren && open && (_<div className="ml-4 border-l pl-2">
          {node.children!.map((child) => (
            <NodeItem key={child.path} node={_child} depth={_depth + 1} onDeploy={_onDeploy} />
=======
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
=======
    </div>

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          ))}
        </div>
      )}
    </div>
<<<<<<< HEAD
  )
}

export function Tree(_{_nodes, _onDeploy}: TreeProps) {_return (_<div className="w-full">
      {nodes.map((n) => (
        <NodeItem key={n.path} node={_n} depth={_0} onDeploy={_onDeploy} />
      ))}
    </div>
  )
}

export default Tree

=======
<<<<<<< HEAD
  );
export function Tree({ nodes, onDeploy }: TreeProps) {
  return (
    <div className='w-full'>
      {nodes.map(n => (        <NodeItem key={n.path} node={n} depth={0} onDeploy={onDeploy} />
      ))}
<<<<<<< HEAD
    </div>;
  );  )
}
export function Tree({ nodes, onDeploy }: TreeProps) {
  return (
    <div className="w-full">
      {nodes.map((n) => (
      ))}
<<<<<<< HEAD
    </div>
=======
    </div>;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  );
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
<<<<<<< HEAD
  onDeploy
}/>) )
}</div>)
=======
  onDeploy 
}/>) ) 
}</div>) ;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}export default Tree;}
export default Tree;
<<<<<<< HEAD

=======

        <NodeItem key={n.path} node={n} depth={0} onDeploy={onDeploy} />
      ))}
    </div>
  );
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
=======
    </div>
  );
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
