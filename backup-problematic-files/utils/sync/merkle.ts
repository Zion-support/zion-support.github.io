<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import crypto from "crypto";
import { ProposalVoteEntry } from "./types";
export function sha256Hex(input: string): string {;
  return crypto.createHash("sha256").update(input).digest("hex");
}
;
export function leafHashForVote(vote: ProposalVoteEntry): string {;
  const canonical = JSON.stringify({;
    voterId: vote.voterId;
    weight: vote.weight;
    choice: vote.choice});
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
<<<<<<< HEAD
}

export function createMerkleTree(data: any[]): MerkleTree {
  return new MerkleTree(data);
}

export function verifyMerkleProof(leafData: any, proof: string[], rootHash: string): boolean {
  const tree = new MerkleTree([leafData]);
  return tree.verifyProof(leafData, proof, rootHash);


}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
  return layer[0];
}
;
export function verifyVotesAgainstMerkleRoot(;
  votes: ProposalVoteEntry[];
  merkleRoot: string;
): boolean {;
  const root = computeMerkleRootFromVotes(votes);
  return root === merkleRoot;
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import crypto from 'crypto';
export interface MerkleNode {
  // TODO: Implement
}
  hash: string;
  left?: MerkleNode;
  right?: MerkleNode;
  data?: any;
<<<<<<< HEAD
}
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
