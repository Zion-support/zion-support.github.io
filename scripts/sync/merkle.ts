import crypto from 'crypto';'
export interface MerkleNode  {'hash': string;
  }
  left?: MerkleNode;
  right?: MerkleNode;
  data?: any;
}
}