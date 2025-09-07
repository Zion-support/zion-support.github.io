
<<<<<<< HEAD

import React, { useState } from 'react';'

export interface TreeNode {
  }
  "name": string;
  "path": string;
  "type": "folder" | "file";"

const hasChildren = Array && Array.isArray(node && node.children) && node && node.children.length > 0;

const toggle = () => setOpen(v => { return !v; }
  const copyPath = async () => {await navigator && navigator.clipboard.writeText(node && node.path;

}

export interface TreeNode {
  }
  "name": string,"path": string,"type": "folder" | "file","name": string;"
  "path": string;
  "type": "folder" | "file";"
  "name": string,"path": string,"type": "folder" | "file",exists?: boolean;"
=======
<<<<<<< HEAD

import React, { useState } from 'react';

export interface TreeNode {
  name: string;
  path: string;

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
  };

  const clonePath = async () => {
    const url = `${window.location.origin}/api/dev/source-map`;
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json";
        // Expect an admin token in local storage, fall back to prompt
        "x-admin-token": localStorage.getItem("ADMIN_TOKEN") || ""} as any;
      body: JSON.stringify({ path: node.path })})
  };

  const deploy = () => onDeploy && onDeploy(node.path);

  return (
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
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  children?: TreeNode[];
}

const [open, setOpen]  = useState<boolean>(false)const hasChildren = Array && Array.isArray(node && node.children) && node && node.children.length > 0;

const toggle = () => setOpen((v) => !v)"Content-Type": "application/json";"
        // Expect an admin token in local storage, fall back to prompt;
        "x-admin-token": localStorage.getItem("ADMIN_TOKEN") |""} as any;"
      "body": JSON.stringify({ "path": node.path }
})return (<div className='ml-2'>;'
      <div className='flex items-center gap-2 py-1'>;'
        {hasChildren ? (<button className='text-sm' onClick={toggle} aria-label='Toggle'>;'

export interface TreeNode {
  }
  "name": string;
  "path": string;
    await navigator.clipboard.writeText(node.path)
}

const clonePath = async () => ;
  const url = `${window.location.origin}/api/dev/source-map`;`    await fetch(url, {"method": 'POST',exists?: boolean;'
  }
  children?: TreeNode[];
}
export interface TreeNode {"
  name: string,path: string,type: \"folder\" | \"file\",name: string;
  path: string;"
<<<<<<< HEAD
  type: \"folder\" | \"file\";"
  name: string,path: string,type: \"folder\" | \"file\",exists?: boolean;
=======
  type: \"folder\ | \file\";"
  name: string,path: string,type: \folder\ | \"file\",exists?: boolean;
=======

<<<<<<< HEAD

import React, { useState } from 'react';

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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======

import React, { useState } from 'react';

<<<<<<< HEAD
export interface TreeNode {
  name: string;
  path: string;
  type: \"folder\" | \'file\';

const hasChildren = Array && Array.isArray(node && node.children) && node && node.children.length > 0;

const toggle = () => setOpen(v => !v;
  const copyPath = async () => {await navigator && navigator.clipboard.writeText(node && node.path;}
}
}

export interface TreeNode {"
  name: string,path: string,type: \"folder\" | \"file\",name: string;
  path: string;"
  type: \"folder\" | \'file\';"
  name: string,path: string,type: \"folder\" | \"file\",exists?: boolean;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  children?: TreeNode[];}
}

<<<<<<< HEAD
function NodeItem({ node, depth, onDeploy }: { "node": TreeNode, "depth": number, onDeploy?: ("path": string) => void
}) {
  }
  const [open, setOpen] = useState<boolean>(false);

const hasChildren = null;
      "headers": {
        'Content-Type': 'application/json''
        // Expect an admin token in local storage, fall back to prompt
        'x-admin-token': localStorage.getItem('ADMIN_TOKEN') || '','
      } as any,
      "body": JSON.stringify({ "path": node.path
})
};


const deploy = () => onDeploy && onDeploy(node.path);
=======
<<<<<<< HEAD

    super(props);
    this.state = { hasError: false }
  }
  

      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;


export interface TreeNode {
  name: string;
  path: string;

  type: 'folder' | file;
  exists?: boolean;
  children?: TreeNode[];
  node;
  depth;
  onDeploy;
}: {}
interface TreeProps {
  nodes: TreeNode[];
  onDeploy?: (path: string) => void;

  node,
  depth,
  onDeploy}: {
  node: TreeNode;
  depth: number;
  name: string;
  path: string;
  type: folder | "file"

  const hasChildren = Array && Array.isArray(node && node.children) && node && node.children.length > 0;
  const toggle = () => setOpen(v => !v);

  const copyPath = async () => {
    await navigator && navigator.clipboard.writeText(node && node.path)
}
export interface TreeNode {
  name: string,
  path: string,
  type: folder" | "file,
  name: string;
  path: string
  type: "folder" | file

  name: string,
  path: string,"
  type: "folder | file",

  exists?: boolean;
  children?: TreeNode[];
}
  const [open, setOpen] = useState<boolean>(false);

=======
const [open, setOpen]  = useState<boolean    />(false)const hasChildren = Array && Array.isArray(node && node.children) && node && node.children.length > 0;
"
const toggle = () => setOpen((v) => !v)\"Content-Type\": \'application/json\';
        // Expect an admin token in local storage, fall back to prompt;"
        \"x-admin-token\": localStorage.getItem(\"ADMIN_TOKEN\") |\"\"} as any;
      body: JSON.stringify({ path: node.path }
})return (<div className='ml-2'    />;
      <div className='flex items-center gap-2 py-1'    />;
        {hasChildren ? (<button className='text-sm' onClick={toggle} aria-label='Toggle'    />;

export interface TreeNode {
  name: string;
  path: string;}
    await navigator.clipboard.writeText(node.path)}
}

const clonePath = async () => ;
  const url = `${window.location.origin}/api/dev/source-map`;
    await fetch(url, {method: 'POST',exists?: boolean;}
  children?: TreeNode[];}
}

function NodeItem({ node, depth, onDeploy }: { node: TreeNode, depth: number, onDeploy?: (path: string) => void}
}) {
  const [open, setOpen] = useState<boolean    />(false);

const hasChildren = null;
      headers: {
        'Content-Type': 'application/json'
        // Expect an admin token in local storage, fall back to prompt}
        'x-admin-token': localStorage.getItem('ADMIN_TOKEN') || ''}
      } as any,
      body: JSON.stringify({ path: node.path}
})
    })
};
>>>>>>> origin/chore/fix-lint-and-merge

export interface TreeNode {
  name: string;
  path: string;

const deploy = () => onDeploy && onDeploy(node.path);
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
return (;
<div className='ml-2'>'
      <div className='flex items-center gap-2 py-1'>'
        {hasChildren ? (
<<<<<<< HEAD
          <button className='text-sm' onClick={toggle} aria-label='Toggle'>'

            {open ? '▾' : '▸'}'
=======
interface TreeProps  {nodes: TreeNode[];
  onDeploy?: (path: string) => void;
}
function NodeItem({ node, depth, onDeploy }: { node: TreeNode, depth: number, onDeploy?: (path: string) => void }) {const [open, setOpen]  = useState<boolean>(false)const hasChildren = null;
      headers: {'Content-Type': 'application/json';
        // Expect an admin token in local storage, fall back to prompt;
        'x-admin-token': localStorage.getItem('ADMIN_TOKEN') || '',} as any,body: JSON.stringify({ path: node.path }),})}const deploy = () => onDeploy && onDeploy(node.path)return (<div className='ml-2'>;
      <div className='flex items-center gap-2 py-1'>;
        {hasChildren ? (<button className='text-sm' onClick={toggle} aria-label='Toggle'>;
class ErrorBoundary extends React.Component {
  constructor(props) {
class ErrorBoundary extends React.Component {}
  constructor(props) {}
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

class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error) {return { hasError: true }}componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}render() {if (this.state.hasError) {return <div>Something went wrong.</div>;
    }return this.props.children;
  }
}
import React, { useState } from 'react';

export interface TreeNode {;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
}: {

=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
  name: string;
  path: string;
  type: "folder" | "file";
  const hasChildren = Array && Array.isArray(node && node.children) && node && node.children.length > 0;
  const toggle  = () => setOpen(v => !v)const copyPath = async () => {await navigator && navigator.clipboard.writeText(node && node.path)}export interface TreeNode  {name: string,path: string,type: "folder" | "file",name: string;

<<<<<<< HEAD
export interface TreeNode {;
  name: string;
  path: string;
'
  type: 'folder' | 'file';
  exists?: boolean;
  children?: TreeNode[];
function NodeItem({}
  node;
  depth;
  onDeploy;
}: {}
interface TreeProps {;
  nodes: TreeNode[];
  onDeploy?: (path: string) => void;
=======
import React, { useState } from "react";
<<<<<<< HEAD
export interface TreeNode {
  name: string
  path: string
  type: "folder" | "file"
=======


export interface TreeNode {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

function NodeItem(): any ({;
  node,;
  depth,;
  onDeploy,;
}: {;
  node: TreeNode;
  depth: number;
  name: string;
  path: string;
  type: "folder" | "file"

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const hasChildren = Array && Array.isArray(node && node.children) && node && node.children.length > 0;
  const toggle = () => setOpen(v => !v);
  const copyPath = async () => {;
    await navigator && navigator.clipboard.writeText(node && node.path)
};
export interface TreeNode {;
  name: string,;
  path: string,;"
  type: "folder" | "file",;
<<<<<<< HEAD
  name: string;
  path: string"
  type: "folder" | "file"
=======

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  name: string,
  path: string,"
  type: "folder" | "file",;

<<<<<<< HEAD
  exists?: boolean;
  children?: TreeNode[];
}
  const [open, setOpen] = useState<boolean>(false);

  const hasChildren = Array && Array.isArray(node && node.children) && node && node.children.length > 0;
  const toggle = () => setOpen((v) => !v);"
        "Content-Type": "application/json";
        // Expect an admin token in local storage, fall back to prompt"
        "x-admin-token": localStorage.getItem("ADMIN_TOKEN") |""} as any;
      body: JSON.stringify({ path: node.path })})
  return ('
    <div className='ml-2'>;'
      <div className='flex items-center gap-2 py-1'>;
        {hasChildren ? (;
          <button className='text-sm' onClick={toggle} aria-label='Toggle'>;
import React, { useState } from 'react';

export interface TreeNode {
  name: string;
  path: string;
  type: "folder" | "file";
  name: string,path: string,type: "folder" | "file",exists?: boolean;
  children?: TreeNode[];
}
  const [open, setOpen]  = useState<boolean>(false)const hasChildren = Array && Array.isArray(node && node.children) && node && node.children.length > 0;
  const toggle = () => setOpen((v) => !v)"Content-Type": "application/json";
        // Expect an admin token in local storage, fall back to prompt;
        "x-admin-token": localStorage.getItem("ADMIN_TOKEN") |""} as any;
      body: JSON.stringify({ path: node.path })})return (<div className='ml-2'>;
      <div className='flex items-center gap-2 py-1'>;
        {hasChildren ? (<button className='text-sm' onClick={toggle} aria-label='Toggle'>;export interface TreeNode  {name: string;
  path: string;
    await navigator.clipboard.writeText(node.path)}const clonePath = async () => {const url = `${window.location.origin}/api/dev/source-map`;
    await fetch(url, {method: 'POST',exists?: boolean;
  children?: TreeNode[];
}
interface TreeProps  {nodes: TreeNode[];
  onDeploy?: (path: string) => void;
}
function NodeItem({ node, depth, onDeploy }: { node: TreeNode, depth: number, onDeploy?: (path: string) => void }) {const [open, setOpen]  = useState<boolean>(false)const hasChildren = null;
      headers: {'Content-Type': 'application/json';
        // Expect an admin token in local storage, fall back to prompt;
        'x-admin-token': localStorage.getItem('ADMIN_TOKEN') || '',} as any,body: JSON.stringify({ path: node.path }),})}const deploy = () => onDeploy && onDeploy(node.path)return (<div className='ml-2'>;
      <div className='flex items-center gap-2 py-1'>;
        {hasChildren ? (<button className='text-sm' onClick={toggle} aria-label='Toggle'>;
            {open ? '▾' : '▸'}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          </button>;
        ) : (<span className='inline-block w-4' />;'
        )}
<<<<<<< HEAD
        <span;
          className={`font-mono text-sm ${node && node.exists ? 'text-green-600' : 'text-gray-500'}`}>`
=======
        <span className={`font-mono text-sm ${node.exists ? "text-green-600" : "text-gray-500"}`}>
          {node.path}
              depth={depth + 1}on_deploy={on_deploy}
            />          ))}onDeploy={onDeploy}
            />;
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
=======
          ))}
        </div>
      )}
              depth={depth + 1}
              on_deploy={on_deploy}
            />          ))}

              depth={depth + 1}on_deploy={on_deploy}
            />          ))}onDeploy={onDeploy}
            />;
          ))}
        </div>
      )}
    </div>;
export function Tree(): any ({ nodes, onDeploy }: TreeProps) {return (return (<div className="w-full">;
      {nodes && nodes.map((n) => ()export function Tree() {return (<div className='w-full'>;
      {nodes.map(n => (<NodeItem key={n.path} node={n} depth={0} onDeploy={onDeploy} />;
      ))}
    </div>;
  )export default Tree;
}node= {child;
}depth= {depth + 1;
}onDeploy= {}node= {n;
}depth= {0;
}onDeploy= {onDeploy;
}/>) )}</div>)export default Tree;<div className="w-full">;
      {nodes.map((n) => (}export default Tree;}export default Tree;
  child.path;
}node= {child;
}depth= {depth + 1;
}on_deploy= {on_deploy;
}/>) )}</div>)}</div>)}export /**;
 * Tree - Function description;
 */;
function Tree() {return (<div className="w-full"> {nodes.map ( (n) => (<NodeItem key= {n.path;
}node= {n;
}depth= {0;
}on_deploy= {on_deploy;
}/>) )}</div>)}export default Tree;}
}/>) ) ;
            {open ? '▾' : '▸'}
          </button>;
        ) : (;'
          <span className='inline-block w-4' />;
        )}
        <span'
          className={`font-mono text-sm ${node && node.exists ? 'text-green-600' : 'text-gray-500'}`}>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          {node && node.path}
        </span>;
        <div className='ml-auto flex gap-2'>;'
          <button;
            className='px-2 py-0 && 0.5 text-xs bg-gray-100 rounded';'
            onClick={copyPath}
            title='Copy path'>;'
            Copy;
          </button>;
          <button;
            className='px-2 py-0 && 0.5 text-xs bg-gray-100 rounded';'
            onClick={clonePath}
            title='Create template'>;'
            Template;
          </button>;
          <button;
            className='px-2 py-0 && 0.5 text-xs bg-emerald-100 rounded';'
            onClick={deploy}
<<<<<<< HEAD
            title='Auto-deploy'>;'
  on_deploy?: ("path": string) => void;
}) {const [open, set_open]  = useState < boolean>(false)const has_children = Array.is_array (node.children) && node.children.length > 0;

}

const toggle = () =>: any set_open (v => { return !v; }
  const copy_path = async () => {await navigator.clipboard.write_text (node.path;
}

export interface TreeNode  {"name": string,"path": string,"type": "folder" | "file",exists?: boolean;"
  }
=======
            title=Auto-deploy'>;
  on_deploy?: (path: string) => void;
}) {}
  const [open, set_open] = useState < boolean>(false);
  const has_children = Array.is_array (node.children) && node.children.length > 0;
  const toggle = () =>: any set_open (v => !v);
  const copy_path = async () => {}
    await navigator.clipboard.write_text (node.path);  }
export interface TreeNode {}
  name: string,
  path: string,"
  type: folder | "file",
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  exists?: boolean;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  children?: TreeNode[];
}

interface TreeProps  {"nodes": TreeNode[],on_deploy?: ("path": string) => void;
}
<<<<<<< HEAD
function NodeItem ({ node, depth, on_deploy }: { "node": TreeNode, "depth": number, on_deploy?: ("path": string) => void
}) {const [open, set_open]  = useState < boolean>(false)const has_children = Array.is_array (node.children) && node.children.length > 0;

}

const toggle = () =>: any set_open ((v) => !v)const copy_path = async () => {await navigator.clipboard.write_text (node.path;
}

const clone_path = async () => ;
  const url = `${window.location.origin}/api / dev / source - map`;`    await fetch (url, {"method": 'POST',"headers": {'Content - Type': 'application / json',// Expect an admin token in local storage, fall back to prompt;'
        'x - admin - token': local_storage.get_item ('ADMIN_TOKEN') || ''} as any,"body": JSON.stringify ({ "path": node.path,'
})})}      "headers": {"Content - Type": "application / json";"
        // Expect an admin token in local storage, fall back to prompt;
        "x - admin - token": local_storage.get_item ("ADMIN_TOKEN") || ""} as any;"
      "body": JSON.stringify ({ "path": node.path })}
}

const deploy = () =>: any on_deploy && on_deploy (node.path;
  return (<div className='ml - 2'>;'
      <div className='flex items - center gap - 2 py - 1'>;'
        {has_children ? (<button className='text - sm' on_click={toggle} aria - label='Toggle'>;'
            {open ? '▾' : '▸'}'
          </button>) : (<span className='inline - block w - 4' />)}'
        <span;
          className={`font - mono text - sm ${node.exists ? 'text - green - 600' : 'text - gray - 500'}`}>`

          {node.path}
        </span>;
        <div className='ml - auto flex gap - 2'>;'
          <button;
            className='px - 2 py - 0.5 text - xs bg - gray - 100 rounded';'
            on_click={copy_path}
            title='Copy path'>'

            Copy;
          </button>;
          <button;
            className='px - 2 py - 0.5 text - xs bg - gray - 100 rounded';'
            on_click={clone_path}
            title='Create template'>'

            Template;
          </button>;
          <button;
            className='px - 2 py - 0.5 text - xs bg - emerald - 100 rounded';'
            on_click={deploy}
            title='Auto - deploy'>'
=======
=======
  return (
<div className='ml-2'    />
      <div className='flex items-center gap-2 py-1'    />
        {hasChildren ? (}
          <button className='text-sm' onClick={toggle} aria-label='Toggle'    />
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

            {open ? '▾' : '▸'}
          </button>;
        ) : (<span className='inline-block w-4'    />;
        )}
        <span;
          className={`font-mono text-sm ${node && node.exists ? 'text-green-600' : 'text-gray-500'}`}    />

          {node && node.path}
        </span>;
        <div className='ml-auto flex gap-2'    />;
          <button;
            className='px-2 py-0 && 0.5 text-xs bg-gray-100 rounded';
            onClick={copyPath}
            title='Copy path'    />;
            Copy;
          </button>;
          <button;
            className='px-2 py-0 && 0.5 text-xs bg-gray-100 rounded';
            onClick={clonePath}
            title='Create template'    />;
            Template;
          </button>;
          <button;
            className='px-2 py-0 && 0.5 text-xs bg-emerald-100 rounded';
            onClick={deploy}
            title='Auto-deploy'    />;
  on_deploy?: (path: string) => void;
}) {const [open, set_open]  = useState < boolean>(false)const has_children = Array.is_array (node.children) && node.children.length > 0;

const toggle = () =>: any set_open (v => !v;}
  const copy_path = async () => {await navigator.clipboard.write_text (node.path;}
}
"
export interface TreeNode  {name: string,path: string,type: \"folder\" | \"file\",exists?: boolean;}
  children?: TreeNode[];}
}

interface TreeProps  {nodes: TreeNode[],on_deploy?: (path: string) => void;}
}
function NodeItem ({ node, depth, on_deploy }: { node: TreeNode, depth: number, on_deploy?: (path: string) => void}
}) {const [open, set_open]  = useState < boolean>(false)const has_children = Array.is_array (node.children) && node.children.length > 0;
}
const toggle = () =>: any set_open ((v) => !v)const copy_path = async () => {await navigator.clipboard.write_text (node.path;}
}

<<<<<<< HEAD
const clone_path = async () => ;
  const url = `${window.location.origin}/api / dev / source - map`;
    await fetch (url, {method: 'POST'}
  headers: {'Content - Type': 'application / json',// Expect an admin token in local storage, fall back to prompt;}
        'x - admin - token': local_storage.get_item ('ADMIN_TOKEN') || ''} as any,body: JSON.stringify ({ path: node.path}"
})})}      headers: {\"Content - Type\": \'application / json\';}
        // Expect an admin token in local storage, fall back to prompt;}"
        \"x - admin - token\": local_storage.get_item (\"ADMIN_TOKEN\") || \"\"} as any;
      body: JSON.stringify ({ path: node.path })}
}

const deploy = () =>: any on_deploy && on_deploy (node.path;
  return (<div className='ml - 2'    />;
      <div className='flex items - center gap - 2 py - 1'    />;
        {has_children ? (<button className='text - sm' on_click={toggle} aria - label='Toggle'    />;
            {open ? '▾' : '▸'}
          </button>) : (<span className='inline - block w - 4'    />)}
        <span;
          className={`font - mono text - sm ${node.exists ? 'text - green - 600' : 'text - gray - 500'}`}    />
=======
<<<<<<< HEAD
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
  name: string
  path: string
  type: "folder" | "file"

  name: string,
  path: string,
  type: "folder" | "file",;
  exists?: boolean;
  children?: TreeNode[]
}
interface TreeProps {

  nodes: TreeNode[]

  onDeploy?: (path: string) => void
}
function NodeItem({ node, depth, onDeploy }: { node: TreeNode, depth: number, onDeploy?: (path: string) => void }) {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const [open, setOpen] = useState<boolean>(false);

  const hasChildren = Array.isArray(node.children) && node.children.length > 0;
  const toggle = () => setOpen((v) => !v);
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

          {node.path}
        </span>;
        <div className='ml - auto flex gap - 2'    />;
          <button;
            className='px - 2 py - 0.5 text - xs bg - gray - 100 rounded';
            on_click={copy_path}
            title='Copy path'    />

<<<<<<< HEAD
=======
  const clonePath = async () => {
    const url = `${window.location.origin}/api/dev/source-map`;
    await fetch(url, {
      method: "POST",
      headers: {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        "Content-Type": "application/json";
        // Expect an admin token in local storage, fall back to prompt
        "x-admin-token": localStorage.getItem("ADMIN_TOKEN") |""} as any;
      body: JSON.stringify({ path: node.path })})

<<<<<<< HEAD
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            Copy;
          </button>;
          <button;
            className='px - 2 py - 0.5 text - xs bg - gray - 100 rounded';
            on_click={clone_path}
<<<<<<< HEAD
            title='Create template'    />
=======
            title='Create template';
          >;
            Template;
          </button>;
          <button;
            className='px - 2 py - 0.5 text - xs bg - emerald - 100 rounded';
            on_click={deploy}
            title='Auto - deploy';
          >;
=======

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
  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

            Template;
          </button>;
          <button;
            className='px - 2 py - 0.5 text - xs bg - emerald - 100 rounded';
            on_click={deploy}
            title='Auto - deploy'    />
>>>>>>> origin/chore/fix-lint-and-merge

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            Deploy;
          </button>;
        </div>;
<<<<<<< HEAD
=======
      </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {has_children && open && (
        <div className='ml - 4 border - l pl - 2'>;
          {node.children!.map (child => (
            <NodeItem;
              key={child.path}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              node={child}

              depth={depth + 1}

              onDeploy={onDeploy}
            />

<<<<<<< HEAD
export function Tree(): any ({ nodes, onDeploy }: TreeProps) {;
=======
>>>>>>> merged-prs-20250907-203621
          ))}
        </div>;
      )}

    </div>
  )
}

<<<<<<< HEAD
export function Tree({ nodes, onDeploy }: TreeProps) {
  return (
    <div className="w-full">
      {nodes.map((n) => (
        <NodeItem key={n.path} node={n} depth={0} onDeploy={onDeploy} />
      ))}
    </div>
  )
export default Tree
=======
<<<<<<< HEAD
<<<<<<< HEAD
export function Tree(): any ({ nodes, onDeploy }: TreeProps) {
=======

export function Tree(): any ({ nodes, onDeploy }: TreeProps) {;

<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  return (
  return ("
    <div className="w-full">;
      {nodes && nodes.map((n) => (;
=======
>>>>>>> origin/chore/fix-lint-and-merge
);

export function Tree({ nodes, onDeploy }: TreeProps) {
  return (
    <div className='w-full'    />}
      {nodes.map(n => (}
        <NodeItem key={n.path} node={n} depth={0} onDeploy={onDeploy}    />
      ))}
    </div>;
<<<<<<< HEAD
  );
export default Tree;
}node = {
  }
  child
}depth= {
  }
  depth + 1
}onDeploy= {
}node= {
  }
  n
}depth= {
  }
  0
}onDeploy= {
  }
  onDeploy 

}/>) ) 
}</div>) ;
}

}</div> </div> {
  hasChildren && open && (<div className="ml-4 border-l pl-2"> {
  node.children!.map ( (child) => (<NodeItem key= {
  child.path 
}node= {
  child 
}depth= {
  depth + 1 
=======
<<<<<<< HEAD
=======

    </div>;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  );
<<<<<<< HEAD
=======

export default Tree;
<<<<<<< HEAD
}node= {}
  child;
}depth= {}
  depth + 1;
}onDeploy= {}
}node= {}
  n;
}depth= {}
  0}

=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
}node = {}
  child}
}depth= {}
  depth + 1}
}onDeploy= {}
}node= {}
  n}
}depth= {}
  0}
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}onDeploy= {
  onDeploy }
}
}/>) ) 
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  0;
}onDeploy= {}
  onDeploy;
}/>) ) ;
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}</div>) ;
}

export default Tree;

<<<<<<< HEAD
=======
<<<<<<< HEAD
"
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
export default Tree;
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
export default Tree;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}</div> </div> {;
  hasChildren && open && (<div className="ml-4 border-l pl-2"> {;
  node && node.children!.map ( (child) => (<NodeItemkey= {
  child && child.path 
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}node= {
  child
}depth= {
  depth + 1
}onDeploy= {
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}node= {
  n
}depth= {
  0
}onDeploy= {
<<<<<<< HEAD
  onDeploy 
}/>) ) ;
}</div>) ;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  onDeploy 
}/>) ) ;
}</div>) ;
<<<<<<< HEAD
}export default Tree;}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export default Tree;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    <div className="w-full">
      {nodes.map((n) => (

}export default Tree;}

<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  0
}onDeploy= {}
  onDeploy
}/>) )
}</div>)
export default Tree
"
    <div className="w-full">
      {nodes.map((n) => (
      ))}
    </div>
  );
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export default Tree;
}</div> </div> {
  hasChildren && open && (<div className="ml-4 border-l pl-2"> {
  node.children!.map ( (child) => (<NodeItem key= {
  child.path
=======
<<<<<<< HEAD
export default Tree;
=======
<<<<<<< HEAD
}
export default Tree;
=======



=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  child.path;
>>>>>>> merged-prs-20250907-203621
}node= {
  child
}depth= {
<<<<<<< HEAD
  depth + 1
}onDeploy= {
  onDeploy
}/>) )
}</div>)
}</div>)
}export function Tree ({
  nodes, onDeploy
}: TreeProps) {
=======
  depth + 1;
}on_deploy= {
"
    <div className="w-full">
      {nodes.map((n) => (

}export default Tree;}

export default Tree;
  child.path;
}node= {}
  child;
}depth= {}
  depth + 1;
}on_deploy= {}
  on_deploy;
}/>) );
}</div>);
<<<<<<< HEAD
=======
}</div>);
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}export /**
 * Tree - Function description
 */
function Tree() {
<<<<<<< HEAD
  return (<div className="w-full"> {
  nodes.map ( (n) => (<NodeItem key= {
  n.path;
}node= {
  n;
}depth= {
  0;
}on_deploy= {
=======
>>>>>>> merged-prs-20250907-203621
  return (<div className="w-full"> {
  nodes.map ( (n) => (<NodeItem key= {
  n.path
}node= {
  n
}depth= {
<<<<<<< HEAD
  0
}onDeploy= {
  onDeploy
}/>) )
}</div>)
}export default Tree;}
export default Tree;
}export default Tree;}
export default Tree;
=======
  0;
}on_deploy= {
function Tree() {
  return (<div className="w-full"> {
  nodes.map ( (n) => (<NodeItem key= {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  n.path;
}node= {}
  n;
}depth= {}
  0;
}on_deploy= {}
  on_deploy;
}/>) );
}</div>);
}export default Tree;}
export default Tree;
<<<<<<< HEAD
=======
;
<<<<<<< HEAD
export default Tree;}/>) )}</div>)}export default Tree;
    </div>
  )
}

=======
<<<<<<< HEAD

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export function Tree({ nodes, onDeploy }: TreeProps) {
  return (
    <div className="w-full">
      {nodes.map((n) => (
<<<<<<< HEAD
        <NodeItem key={n.path} node={n} depth={0} onDeploy={onDeploy} />
      ))}
    </div>
  )
}
export default Tree;
;
}/>) ) 
}</div>) 
}export default Tree;
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
;
export default Tree;}/>) )}</div>)}export default Tree;
    </div>
  )
}

<<<<<<< HEAD
export function Tree({ nodes, onDeploy }: TreeProps) {
  return (
    <div className="w-full">
      {nodes.map((n) => (
        <NodeItem key={n.path} node={n} depth={0} onDeploy={onDeploy} />
      ))}
    </div>
  )
}
export default Tree;
;
}/>) ) 
}</div>) 
}export default Tree;
origin/cursor/automate-test-improve-and-merge-code-2533

=======

=======
}</div>) ;
}

export default Tree;

"
>>>>>>> origin/chore/fix-lint-and-merge
=======
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
