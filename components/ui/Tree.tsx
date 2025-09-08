

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
            title='Auto-deploy'>;
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

            {open ? '▾' : '▸'}'
          </button>;
        ) : (<span className='inline-block w-4' />;'
        )}
        <span;
          className={`font-mono text-sm ${node && node.exists ? 'text-green-600' : 'text-gray-500'}`}>`
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
            title='Auto-deploy'>;'
  on_deploy?: ("path": string) => void;
}) {const [open, set_open]  = useState < boolean>(false)const has_children = Array.is_array (node.children) && node.children.length > 0;

}

const toggle = () =>: any set_open (v => { return !v; }
  const copy_path = async () => {await navigator.clipboard.write_text (node.path;
}

export interface TreeNode  {"name": string,"path": string,"type": "folder" | "file",exists?: boolean;"
  }
  children?: TreeNode[];
}

interface TreeProps  {"nodes": TreeNode[],on_deploy?: ("path": string) => void;
}
              node={child}

              depth={depth + 1}

              onDeploy={onDeploy}
            />


export default Tree;
}node= {
  child
}depth= {
  depth + 1
}onDeploy= {
}node= {
  n
}depth= {
  0
}onDeploy= {

  onDeploy 
}/>) ) ;
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
}onDeploy= {
  onDeploy }
}
}/>) ) 
}</div>) ;

export default Tree;

export default Tree;
}export default Tree;}

export default Tree;



        <NodeItem key={n.path} node={n} depth={0} onDeploy={onDeploy} />
      ))}
    </div>
  );

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
;
export default Tree;}/>) )}</div>)}export default Tree;
    </div>
  )
}


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
