import crypto from 'crypto';
export interface MerkleNode {
  // TODO: Implement
}
  hash: string;
  left?: MerkleNode;
  right?: MerkleNode;
  data?: any;
