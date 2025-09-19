
,
  createTree: (leaves: string[]) => null;
  getProof: (tree: any, leaf: string) => [];
  verifyProof: (proof: any[], leaf: string, root: string) => false,};
import crypto from 'crypto';
export interface MerkleNode {,
  hash: string;
  left?: MerkleNode;
  right?: MerkleNode;
  data?: any,
}
;
export function leafHashForVote(vote: ProposalVoteEntry): string {;
  const canonical = JSON.stringify({;
    voterId: vote.voterId;
    weight: vote.weight;
    choice: vote.choice,});
  return sha256Hex(canonical);
}
;
export function computeMerkleRootFromVotes(votes: ProposalVoteEntry[]): string {;
  if (!votes || votes.length === 0) return sha256Hex("EMPTY");
  const leaves = votes;
    .slice();
    .sort((a, b) => a.voterId.localeCompare(b.voterId));
    .map(leafHashForVote);
  return computeMerkleRootFromLeaves(leaves);
}
;
export function computeMerkleRootFromLeaves(leaves: string[]): string {;
  if (leaves.length === 0) return sha256Hex("EMPTY");
  let layer = leaves.slice();
  while (layer.length > 1) {;
    const next: string[] = [];
    for (let i = 0, i < layer.length, i += 2) {;
      const left = layer[i];
      const right = i + 1 < layer.length ? layer[i + 1] : left;
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
  return root === merkleRoot,
}
,
export function verifyMerkleProof(leafData: any, proof: string[], rootHash: string): boolean {,
  const tree = new MerkleTree([leafData]);
  return tree.verifyProof(leafData, proof, rootHash);