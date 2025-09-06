
import React, { useState } from "react";
export interface TreeNode {
  name: string;
  path: string;
  type: "folder" | "file";

  exists?: boolean;
  children?: TreeNode[]
}

interface TreeProps {
  nodes: TreeNode[];
  onDeploy?: (path: string) => void
}

function NodeItem({ node, depth, onDeploy }: { node: TreeNode, depth: number, onDeploy?: (path: string) => void }) {
  const [open, setOpen] = useState<boolean>(false);


  const hasChildren = null;

