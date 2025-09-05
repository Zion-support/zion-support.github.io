import React, {_useState} from "react";

export interface TreeNode {_name: string;
  path: string;
  type: "folder" | "file";
  exists?: boolean;
  children?: TreeNode[];}

interface TreeProps {_nodes: TreeNode[];
  onDeploy?: (_path: string) => void;}

function NodeItem(_{_node, _depth, _onDeploy}: {_node: TreeNode; depth: number; onDeploy?: (path: string) => void}) {_const [open, _setOpen] = useState<boolean>(false);

  const _hasChildren = Array.isArray(node.children) && node.children.length > 0;
  const _toggle = () => setOpen(_(v) => !v);

  const _copyPath = async () => {
    await navigator.clipboard.writeText(node.path);};

  const _clonePath = async () => {_const _url = `${window.location.origin}/api/dev/source-map`;
    await fetch(url, {_method: "POST", _headers: {
        "Content-Type": "application/json", _// Expect an admin token in local storage, _fall back to prompt
        "x-admin-token": localStorage.getItem("ADMIN_TOKEN") || ""} as any,
      body: JSON.stringify({_path: node.path})});
  };

  const _deploy = () => onDeploy && onDeploy(node.path);

  return (
    <div className="ml-2">
      <div className="flex items-center gap-2 py-1">
        {_hasChildren ? (
          <button className="text-sm" onClick={toggle} aria-label="Toggle">
            {_open ? "▾" : "▸"}
          </button>
        ) : (
          <span className="inline-block w-4" />
        )}
        <span className={_`font-mono text-sm ${node.exists ? "text-green-600" : "text-gray-500"}`}>
          {_node.path}
        </span>
        <div className="ml-auto flex gap-2">
          <button className="px-2 py-0.5 text-xs bg-gray-100 rounded" onClick={_copyPath} title="Copy path">Copy</button>
          <button className="px-2 py-0.5 text-xs bg-gray-100 rounded" onClick={_clonePath} title="Create template">Template</button>
          <button className="px-2 py-0.5 text-xs bg-emerald-100 rounded" onClick={_deploy} title="Auto-deploy">Deploy</button>
        </div>
      </div>
      {_hasChildren && open && (_<div className="ml-4 border-l pl-2">
          {node.children!.map((child) => (
            <NodeItem key={child.path} node={_child} depth={_depth + 1} onDeploy={_onDeploy} />
          ))}
        </div>
      )}
    </div>
  );
}

export function Tree(_{_nodes, _onDeploy}: TreeProps) {_return (_<div className="w-full">
      {nodes.map((n) => (
        <NodeItem key={n.path} node={_n} depth={_0} onDeploy={_onDeploy} />
      ))}
    </div>
  );
}

export default Tree;