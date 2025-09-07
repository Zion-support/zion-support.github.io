<<<<<<< HEAD

class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error) {return { hasError: true }}componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}render() {if (this.state.hasError) {return <div>Something went wrong.</div>;
    }return this.props.children;
  }
}
import React, { useState } from 'react';
export interface TreeNode  {name: string;
  path: string;type: 'folder' | 'file';
  exists?: boolean;
  children?: TreeNode[];
function NodeItem({node;
  depth;
  onDeploy;
}: {interface TreeProps  {nodes: TreeNode[];
  onDeploy?: (path: string) => void;function NodeItem(): any ({node,depth,onDeploy,}: {node: TreeNode;
  depth: number;
  name: string;
  path: string;
  type: "folder" | "file";
  const hasChildren = Array && Array.isArray(node && node.children) && node && node.children.length > 0;
  const toggle  = () => setOpen(v => !v)const copyPath = async () => {await navigator && navigator.clipboard.writeText(node && node.path)}export interface TreeNode  {name: string,path: string,type: "folder" | "file",name: string;
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
import React, { useState } from "react";
export interface TreeNode {
  name: string,
  path: string,
  type: "folder" | "file",
  exists?: boolean,
  children?: TreeNode[]
}

interface TreeProps {
  nodes: TreeNode[],
  onDeploy?: (path: string) => void
}

function NodeItem({ node, depth, onDeploy }: { node: TreeNode, depth: number, onDeploy?: (path: string) => void }) {
  const [open, setOpen] = useState<boolean>(false),

  const hasChildren = $2;
  const toggle = $2;
  const copyPath = $2;
  const clonePath = $2;
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Expect an admin token in local storage, fall back to prompt
        "x-admin-token": localStorage.getItem("ADMIN_TOKEN") || ""} as any,
      body: JSON.stringify({ path: node.path })})
  },

  const deploy = () => onDeploy && onDeploy($2);
  return (
    <div className="ml-2">
      <div className="flex items-center gap-2 py-1">
        {hasChildren ? (
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
  name: string;
  path: string;

  type: 'folder' | 'file';
  exists?: boolean;
  children?: TreeNode[];
function NodeItem({
  node
  depth
  onDeploy
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
  name: string;
  path: string;
  type: "folder" | "file";
  const hasChildren = Array && Array.isArray(node && node.children) && node && node.children.length > 0;
  const toggle  = () => setOpen(v => !v)const copyPath = async () => {await navigator && navigator.clipboard.writeText(node && node.path)}export interface TreeNode  {name: string,path: string,type: "folder" | "file",name: string;
=======
<<<<<<< HEAD
<<<<<<< HEAD


import React, { useState } from 'react';

=======
import React, { useState } from "react";
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
export interface TreeNode {
  name: string;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
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
<<<<<<< HEAD
}
function NodeItem({ node, depth, onDeploy }: { node: TreeNode, depth: number, onDeploy?: (path: string) => void }) {const [open, setOpen]  = useState<boolean>(false)const hasChildren = null;
      headers: {'Content-Type': 'application/json';
        // Expect an admin token in local storage, fall back to prompt;
        'x-admin-token': localStorage.getItem('ADMIN_TOKEN') || '',} as any,body: JSON.stringify({ path: node.path }),})}const deploy = () => onDeploy && onDeploy(node.path)return (<div className='ml-2'>;
      <div className='flex items-center gap-2 py-1'>;
        {hasChildren ? (<button className='text-sm' onClick={toggle} aria-label='Toggle'>;
=======
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

  exists?: boolean;
  children?: TreeNode[]
  const [open, setOpen] = useState<boolean>(false)
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
            {open ? '▾' : '▸'}
          </button>;
        ) : (<span className='inline-block w-4' />;
          <button className="text-sm" onClick={toggle} aria-label="Toggle">
            {open ? "▾" : "▸"}
          </button>
        ) : (
          <span className="inline-block w-4" />
        )}
        <span className={`font-mono text-sm ${node.exists ? "text-green-600" : "text-gray-500"}`}>
          {node.path}
              depth={depth + 1}on_deploy={on_deploy}
            />          ))}onDeploy={onDeploy}
            />;
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
<<<<<<< HEAD
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
=======
    </div>
  )
export default Tree
}node = {}
  child}
}depth= {}
  depth + 1}
}onDeploy= {}
}node= {}
  n}
}depth= {}
<<<<<<< HEAD
  0}
=======
export interface TreeNode {
  name: string
path: string
type: "folder" | "file"
exists?: boolean
}

}</div> </div> {
  hasChildren && open && (<div className="ml-4 border-l pl-2"> {
  node.children!.map ( (child) => (<NodeItem key= {
  child.path 
}node= {
  child 
}depth= {
  depth + 1 
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
}onDeploy= {
  onDeploy }
}
}/>) ) 
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
}</div>) ;
}

export default Tree;
<<<<<<< HEAD

    <div className="w-full">
      {nodes.map((n) => (

}export default Tree;}

=======

"
=======
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
}export default Tree
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
export default Tree;
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
  return (<div className="w-full"> {
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
<<<<<<< HEAD
;
export default Tree;}/>) )}</div>)}export default Tree;
    </div>
  )
}

export function Tree({ nodes, onDeploy }: TreeProps) {
  return (
    <div className = $2;
=======
}export default Tree;}
export default Tree;
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
