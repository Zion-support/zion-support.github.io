<<<<<<< HEAD
:utils/sync/merkle.ts
// Merkle tree utilities
export const merkle = {
  // Add merkle tree functionality here
  createTree: (leaves: string[]) => null
  getProof: (tree: any, leaf: string) => []
  verifyProof: (proof: any[], leaf: string, root: string) => false
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  createTree: (leaves: string[]) => null,
  getProof: (tree: any, leaf: string) => [],
  verifyProof: (proof: any[], leaf: string, root: string) => false;
};

<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import crypto from 'crypto';

export interface MerkleNode {
  hash: string;
  left?: MerkleNode;
  right?: MerkleNode;
  data?: any;
}

export class MerkleTree {
  private root: MerkleNode | null = null;
  private leaves: MerkleNode[] = [];

  constructor(data: any[]) {
    this.buildTree(data);
  }

  private buildTree(data: any[]): void {
    if (data.length === 0) return;

    // Create leaf nodes
    this.leaves = data.map(item => ({
      hash: this.hashData(JSON.stringify(item)),
      data: item
    }));

    // Build tree bottom-up
    let currentLevel = [...this.leaves];
    
    while (currentLevel.length > 1) {
      const nextLevel: MerkleNode[] = [];
      
      for (let i = 0; i < currentLevel.length; i += 2) {
        const left = currentLevel[i];
        const right = currentLevel[i + 1] || left; // Duplicate last node if odd number
        
        const combinedHash = left.hash + right.hash;
        const parent: MerkleNode = {
          hash: this.hashData(combinedHash),
          left,
          right
        };
        
        nextLevel.push(parent);
      }
      
      currentLevel = nextLevel;
    }
    
    this.root = currentLevel[0];
  }

  private hashData(data: string): string {
    return crypto.createHash('sha256').update(data).digest('hex');
  }

  getRootHash(): string | null {
    return this.root?.hash || null;
  }

  getProof(index: number): string[] {
    if (index >= this.leaves.length) return [];
    
    const proof: string[] = [];
    let current = this.leaves[index];
    let level = [...this.leaves];
    
    while (level.length > 1) {
      const nextLevel: MerkleNode[] = [];
      const currentIndex = level.indexOf(current);
      
      if (currentIndex % 2 === 0) {
        // Left node, add right sibling
        if (currentIndex + 1 < level.length) {
          proof.push(level[currentIndex + 1].hash);
        }
      } else {
        // Right node, add left sibling
        proof.push(level[currentIndex - 1].hash);
      }
      
      // Move to parent level
      for (let i = 0; i < level.length; i += 2) {
        const left = level[i];
        const right = level[i + 1] || left;
        
        const combinedHash = left.hash + right.hash;
        const parent: MerkleNode = {
          hash: this.hashData(combinedHash),
          left,
          right
        };
        
        nextLevel.push(parent);
      }
      
      level = nextLevel;
      current = level[Math.floor(currentIndex / 2)];
    }
    
    return proof;
  }

  verifyProof(leafData: any, proof: string[], rootHash: string): boolean {
    let currentHash = this.hashData(JSON.stringify(leafData));
    
    for (const siblingHash of proof) {
      currentHash = this.hashData(currentHash + siblingHash);
    }
    
    return currentHash === rootHash;
  }

  getLeaves(): MerkleNode[] {
    return [...this.leaves];
  }
}

<<<<<<< HEAD
:backup-problematic-files/utils/sync/merkle.ts
import crypto from "crypto",;
import { ProposalVoteEntry } from "./types",;
export function sha256Hex(input: string): string {;
  return crypto.createHash("sha256").update(input).digest("hex");
}
;
export function leafHashForVote(vote: ProposalVoteEntry): string {;
  const canonical = JSON.stringify({;
    voterId: vote.voterId,;
    weight: vote.weight,;
    choice: vote.choice}),;
  return sha256Hex(canonical);
}
;
export function computeMerkleRootFromVotes(votes: ProposalVoteEntry[]): string {;
  if (!votes || votes.length === 0) return sha256Hex("EMPTY"),;
  const leaves = votes;
    .slice();
    .sort((a, b) => a.voterId.localeCompare(b.voterId));
    .map(leafHashForVote),;
  return computeMerkleRootFromLeaves(leaves);
}
;
export function computeMerkleRootFromLeaves(leaves: string[]): string {;
  if (leaves.length === 0) return sha256Hex("EMPTY"),;
  let layer = leaves.slice(),;
  while (layer.length > 1) {;
    const next: string[] = [],;
    for (let i = 0, i < layer.length, i += 2) {;
      const left = layer[i],;
      const right = i + 1 < layer.length ? layer[i + 1] : left,;
      next.push(sha256Hex(left + right));
    }
    layer = next;
  }
  return layer[0];
}
;
export function verifyVotesAgainstMerkleRoot(;
  votes: ProposalVoteEntry[];
  merkleRoot: string;
): boolean {;
  const root = computeMerkleRootFromVotes(votes);
  return root === merkleRoot;
import crypto from 'crypto';

export interface MerkleNode {
  hash: string;
  left?: MerkleNode;
  right?: MerkleNode;
  data?: any;
}

export class MerkleTree {
  private root: MerkleNode | null = null;
  private leaves: MerkleNode[] = [];

  constructor(data: any[]) {
    this.buildTree(data);
  }

  private buildTree(data: any[]): void {
    if (data.length === 0) return;

    // Create leaf nodes
    this.leaves = data.map(item => ({
      hash: this.hashData(JSON.stringify(item)),
      data: item
    }));

    // Build tree bottom-up
    let currentLevel = [...this.leaves];
    
    while (currentLevel.length > 1) {
      const nextLevel: MerkleNode[] = [];
      
      for (let i = 0; i < currentLevel.length; i += 2) {
        const left = currentLevel[i];
        const right = currentLevel[i + 1] || left; // Duplicate last node if odd number
        
        const combinedHash = left.hash + right.hash;
        const parent: MerkleNode = {
          hash: this.hashData(combinedHash),
          left,
          right
        };
        
        nextLevel.push(parent);
      }
      
      currentLevel = nextLevel;
    }
    
    this.root = currentLevel[0];
  }

  private hashData(data: string): string {
    return crypto.createHash('sha256').update(data).digest('hex');
  }

  getRootHash(): string | null {
    return this.root?.hash || null;
  }

  getProof(index: number): string[] {
    if (index >= this.leaves.length) return [];
    
    const proof: string[] = [];
    let current = this.leaves[index];
    let level = [...this.leaves];
    
    while (level.length > 1) {
      const nextLevel: MerkleNode[] = [];
      const currentIndex = level.indexOf(current);
      
      if (currentIndex % 2 === 0) {
        // Left node, add right sibling
        if (currentIndex + 1 < level.length) {
          proof.push(level[currentIndex + 1].hash);
        }
      } else {
        // Right node, add left sibling
        proof.push(level[currentIndex - 1].hash);
      }
      
      // Move to parent level
      for (let i = 0; i < level.length; i += 2) {
        const left = level[i];
        const right = level[i + 1] || left;
        
        const combinedHash = left.hash + right.hash;
        const parent: MerkleNode = {
          hash: this.hashData(combinedHash),
          left,
          right
        };
        
        nextLevel.push(parent);
      }
      
      level = nextLevel;
      current = level[Math.floor(currentIndex / 2)];
    }
    
    return proof;
  }

  verifyProof(leafData: any, proof: string[], rootHash: string): boolean {
    let currentHash = this.hashData(JSON.stringify(leafData));
    
    for (const siblingHash of proof) {
      currentHash = this.hashData(currentHash + siblingHash);
    }
    
    return currentHash === rootHash;
  }

  getLeaves(): MerkleNode[] {
    return [...this.leaves];
  }
}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export function createMerkleTree(data: any[]): MerkleTree {
  return new MerkleTree(data);
}

export function verifyMerkleProof(leafData: any, proof: string[], rootHash: string): boolean {
  const tree = new MerkleTree([leafData]);
  return tree.verifyProof(leafData, proof, rootHash);
<<<<<<< HEAD
main:utils/sync/merkle.ts
:backup-problematic-files/utils/sync/merkle.ts
}
}
:backup-problematic-files/utils/sync/merkle.ts
=======


}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
