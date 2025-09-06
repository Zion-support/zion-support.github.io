<<<<<<< HEAD


<<<<<<< HEAD
=======

import React, { useState } from 'react';

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

import React, { useState } from 'react';

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  name: string;
  path: string;

  type: 'folder' | 'file';
  exists?: boolean;
  children?: TreeNode[];
function NodeItem({
  node
  depth
  onDeploy
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
;
interface TreeProps {
  nodes: TreeNode[];
  on_deploy?: (path: string) => void;
;
function NodeItem ({
  node,
  depth,
  on_deploy,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}: {
=======
=======
}: {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

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
<<<<<<< HEAD

import React, { useState } from "react";
<<<<<<< HEAD


export interface TreeNode {


=======
export interface TreeNode {
  name: string
  path: string
  type: "folder" | "file"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  name: string
  path: string
  type: "folder" | "file"


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const hasChildren = Array && Array.isArray(node && node.children) && node && node.children.length > 0;
  const toggle = () => setOpen(v => !v);

  const copyPath = async () => {;
    await navigator && navigator.clipboard.writeText(node && node.path);  };
export interface TreeNode {;
  name: string,;
  path: string,;
  type: "folder" | "file",;
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  name: string,
  path: string,
  type: "folder" | "file",;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  exists?: boolean;
  children?: TreeNode[];
}


interface TreeProps {;
  nodes: TreeNode[],;
  onDeploy?: (path: string) => void;
}

function NodeItem(): any ({ node, depth, onDeploy }: { node: TreeNode, depth: number, onDeploy?: (path: string) => void }) {;

<<<<<<< HEAD
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
import React, { useState } from "react";
import React, { useState } from 'react';

export interface TreeNode {;

export interface TreeNode {
  name: string;
  path: string;

  type: 'folder' | 'file';
  exists?: boolean;
  children?: TreeNode[];
interface TreeProps {
  nodes: TreeNode[];
  onDeploy?: (path: string) => void;

interface TreeProps {
  nodes: TreeNode[];
  onDeploy?: (path: string) => void;

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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  name: string
  path: string
  type: "folder" | "file"


  name: string,
  path: string,
  type: "folder" | "file",;
  exists?: boolean;
  children?: TreeNode[];
}
<<<<<<< HEAD
interface TreeProps {

  nodes: TreeNode[]

  onDeploy?: (path: string) => void
}
function NodeItem({ node, depth, onDeploy }: { node: TreeNode, depth: number, onDeploy?: (path: string) => void }) {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const [open, setOpen] = useState<boolean>(false);

  const hasChildren = Array && Array.isArray(node && node.children) && node && node.children.length > 0;
  const toggle = () => setOpen((v) => !v);
<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        "Content-Type": "application/json";
        // Expect an admin token in local storage, fall back to prompt
        "x-admin-token": localStorage.getItem("ADMIN_TOKEN") |""} as any;
      body: JSON.stringify({ path: node.path })})
<<<<<<< HEAD

<<<<<<< HEAD

  const copyPath = async () => {;
    await navigator && navigator.clipboard.writeText(node && node.path);
=======

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


=======
=======
  return (
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            Deploy;
          </button>;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      {has_children && open && (
        <div className='ml - 4 border - l pl - 2'>;
          {node.children!.map (child => (
            <NodeItem;
              key={child.path}
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              node={child}
              depth={depth + 1}
              on_deploy={on_deploy}
            />          ))}

          ))}
        </div>
      )}
    </div>

export function Tree(): any ({ nodes, onDeploy }: TreeProps) {;
<<<<<<< HEAD

<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  return (
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return (
    <div className="w-full">;
      {nodes && nodes.map((n) => (;
      ))}
    </div>;
  );
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}</div> </div> {;
  hasChildren && open && (<div className="ml-4 border-l pl-2"> {;
  node && node.children!.map ( (child) => (<NodeItemkey= {
  child && child.path 
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export default Tree;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}node= {
  child
}depth= {
  depth + 1
}onDeploy= {
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}node= {
  n
}depth= {
  0
}onDeploy= {
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  onDeploy 
}/>) ) ;
}</div>) ;

<<<<<<< HEAD
<<<<<<< HEAD
=======
  onDeploy 
}/>) ) ;
}</div>) ;
}export default Tree;}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export default Tree;

=======
=======
export default Tree;

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    <div className="w-full">
      {nodes.map((n) => (

}export default Tree;}

export default Tree;
<<<<<<< HEAD



        <NodeItem key={n.path} node={n} depth={0} onDeploy={onDeploy} />
      ))}
    </div>
  );
<<<<<<< HEAD



=======
=======
}
export default Tree;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
    </div>        {hasChildren ? (
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
    </div>

          ))}
        </div>
      )}
    </div>
  );
export function Tree({ nodes, onDeploy }: TreeProps) {
  return (
    <div className='w-full'>
      {nodes.map(n => (        <NodeItem key={n.path} node={n} depth={0} onDeploy={onDeploy} />
      ))}
    </div>;
  );  )
}
export function Tree({ nodes, onDeploy }: TreeProps) {
  return (
    <div className="w-full">
      {nodes.map((n) => (
      ))}
    </div>
    </div>;
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
  onDeploy
}/>) )
}</div>)
  onDeploy 
}/>) ) 
}</div>) ;
}export default Tree;}
export default Tree;


        <NodeItem key={n.path} node={n} depth={0} onDeploy={onDeploy} />
      ))}
    </div>
  );
    </div>
  );
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
