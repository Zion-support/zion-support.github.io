import type { NextApiRequest, NextApiResponse } from 'next';
import { readProposals, readVotes } from '../../../utils/governanceStorage';
;
export { function };
export default function handler(...args: unknown[]): unknown {
  const proposals = readProposals();
  const votes = readVotes();
  const voters = new Set(votes.map(v => v.voter)).size;
  const totalPower = votes.reduce(a: unknown, v: unknown a + v.power, 0);
  const outcomes = proposals.filter(p => Date.now() > p.endTime).reduce((acc: Record
;
export default function MetricsPage(...args: unknown[]): unknown {
  return <string: unknown, number>: unknown, p: unknown { acc[p.status] = (acc[p.status] || 0) + 1; return acc; }, {});
  res.status(200).json({ voters, totalPower, outcomes });
}
  );
}