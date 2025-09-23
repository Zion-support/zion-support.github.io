export type ZionChain = 'resumeBuilder' | 'daoExplainer' | 'tokenomicsSimulator' | 'governanceSummarizer' | 'nationAssistant';

export interface RouterResult {
  intent: ZionChain;
  confidence: number;
  notes?: string;
}

export interface ReflexMetrics {
  signupsLastHour?: number;
  disputeFlagsLastHour?: number;
  zionVelocity?: number; // tokens/min
  baselineSignups?: number;
  baselineDisputeFlags?: number;
  baselineVelocity?: number;
}

export interface ReflexTrigger {
  action: 'launchRewardPopup' | 'escalateSupport' | 'notifyAdmin';
  reason: string;
  severity: 'low' | 'medium' | 'high';
}

export interface LogEntry {
  id: string;
  timestamp: string;
  module: 'router' | 'reflex' | 'optimizer' | 'admin';
  type: ZionChain | 'metrics' | 'optimize' | 'deploy' | 'suspend' | 'audit' | 'stuck';
  status: 'ok' | 'laggy' | 'error' | 'stuck';
  latencyMs?: number;
  payload?: Record<string, unknown>;
}

import { randomUUID } from 'uuid';

const dataDir = path.resolve(process.cwd(), 'data', 'zion-brain');
const logsPath = path.join(dataDir, 'logs.json');
const statePath = path.join(dataDir, 'state.json');

function ensureDataFiles(): void {
  try {
    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
    if (!fs.existsSync(logsPath)) fs.writeFileSync(logsPath, JSON.stringify({ entries: [] }, null, 2));
    if (!fs.existsSync(statePath)) fs.writeFileSync(statePath, JSON.stringify({ metrics: {} }, null, 2));
  } catch {
    // In serverless environments, filesystem may be read-only; ignore errors gracefully
  }
}

export function detectIntent(text: string): RouterResult {
  const lower = (text || '').toLowerCase();
  const rules: Array<{ chain: ZionChain; keywords: string[] }> = [
    { chain: 'resumeBuilder', keywords: ['resume', 'cv', 'curriculum', 'job'] },
    { chain: 'daoExplainer', keywords: ['dao', 'governance token', 'proposal', 'treasury'] },
    { chain: 'tokenomicsSimulator', keywords: ['tokenomics', 'supply', 'emission', 'vesting', 'circulating'] },
    { chain: 'governanceSummarizer', keywords: ['governance', 'vote', 'snapshot', 'summary', 'forum'] },
