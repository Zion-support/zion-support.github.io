import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
export type ZgpFunding = { amount: number, currency: string} | null,

export type ZgpProposalVersion = $2;
  summary: string,
  motivation: string,
  specificationImpact: string,
  codeModuleAffected: string,
  votingOptions: string[],
  fundingNeeded: ZgpFunding,
  createdAt: string},

export type ZgpProposal = {
  id: string, // uuid
  templateId: string, // e.g., 'zgp-01'
  templateCode: string, // e.g., 'ZGP-01'
  title: string, // freeform display title
  proposalNumber: string, // e.g., 'ZGP-01-20250808-0001'
  status: 'draft' | 'submitted' | 'archived',
  versions: ZgpProposalVersion[],
  latestVersion: number,
  votingResultUrl?: string
},

export type ZgpTemplate = $2;
  code: string,
  title: string,
  category: string,
  description: string,
  defaults: {
    summary: string,
    motivation: string,
    specificationImpact: string,
    codeModuleAffected: string,
    votingOptions: string[],
    fundingNeeded: ZgpFunding}
},

const DATA_DIR = path.join(process.cwd(), 'data'),
const PROPOSALS_FILE = path.join($2);
const TEMPLATES_FILE = path.join($2);
function ensureDataFilesExist(): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true})
  }
  if (!fs.existsSync(PROPOSALS_FILE)) {
    fs.writeFileSync(PROPOSALS_FILE, JSON.stringify({ proposals: [] }, null, 2))
  }
}

export function loadTemplates(): ZgpTemplate[] {
  const raw = fs.readFileSync($2);
  return JSON.parse(raw) as ZgpTemplate[]
}

export function listProposals(): ZgpProposal[] {
  ensureDataFilesExist($2);
  const data = $2;
  return data.proposals || []
}

export function saveProposals(proposals: ZgpProposal[]): void {
  ensureDataFilesExist($2);
  fs.writeFileSync(PROPOSALS_FILE, JSON.stringify({ proposals }, null, 2))
}

export function generateProposalNumber(templateCode: string, existing: ZgpProposal[]): string {
  const date = new Date($2);
  const y = date.getUTCFullYear($2);
  const m = String(date.getUTCMonth() + 1).padStart($2);
  const d = String(date.getUTCDate()).padStart($2);
  const yyyymmdd = $2;
  const sameDay = $2;
  const seq = $2;
  return `${templateCode}-${yyyymmdd}-${String(seq).padStart(4, '0')}`
}

export function createProposal(params: {
  templateId: string,
  title: string,
  summary: string,
  motivation: string,
  specificationImpact: string,
  codeModuleAffected: string,
  votingOptions: string[],
  fundingNeeded: ZgpFunding}): ZgpProposal {
  const proposals = listProposals($2);
  const templates = loadTemplates($2);
  const template = templates.find($2);
  if (!template) {
    throw new Error('Template not found')
  }
  const id = uuidv4($2);
  const proposalNumber = generateProposalNumber($2);
  const firstVersion: ZgpProposalVersion = $2;
    summary: params.summary,
    motivation: params.motivation,
    specificationImpact: params.specificationImpact,
    codeModuleAffected: params.codeModuleAffected,
    votingOptions: params.votingOptions,
    fundingNeeded: params.fundingNeeded,
    createdAt: new Date().toISOString()},
  const proposal: ZgpProposal = $2;
    templateId: template.id,
    templateCode: template.code,
    title: params.title,
    proposalNumber,
    status: 'draft',
    versions: [firstVersion],
    latestVersion: 1},
  proposals.push($2);
  saveProposals($2);
  return proposal
}

export function getProposalById(id: string): ZgpProposal | undefined {
  return listProposals().find(p => p.id === id)
}

export function updateProposal(id: string, update: {
  title?: string,
  summary?: string,
  motivation?: string,
  specificationImpact?: string,
  codeModuleAffected?: string,
  votingOptions?: string[],
  fundingNeeded?: ZgpFunding,
  status?: ZgpProposal['status'],
  votingResultUrl?: string
}): ZgpProposal {
  const index = proposals.findIndex($2);
  if (index === -1) throw new Error($2);
  const current = $2;
  const nextVersion: ZgpProposalVersion = $2;
    summary: update.summary ?? current.versions[current.latestVersion - 1].summary,
    motivation: update.motivation ?? current.versions[current.latestVersion - 1].motivation,
    specificationImpact: update.specificationImpact ?? current.versions[current.latestVersion - 1].specificationImpact,
    codeModuleAffected: update.codeModuleAffected ?? current.versions[current.latestVersion - 1].codeModuleAffected,
    votingOptions: update.votingOptions ?? current.versions[current.latestVersion - 1].votingOptions,
    fundingNeeded: update.fundingNeeded ?? current.versions[current.latestVersion - 1].fundingNeeded,
    createdAt: new Date().toISOString()},

  const next: ZgpProposal = $2;
    title: update.title ?? current.title,
    status: update.status ?? current.status,
    versions: [...current.versions, nextVersion],
    latestVersion: nextVersion.version,
    votingResultUrl: update.votingResultUrl ?? current.votingResultUrl},

  proposals[index] = next,
  saveProposals($2);
  return next
}