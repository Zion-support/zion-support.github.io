import fs from 'fs';
import path from 'path';

export type ZgpFunding = {_amount: number; currency: string} | null;

export type ZgpProposalVersion = {_version: number;
  summary: string;
  motivation: string;
  specificationImpact: string;
  codeModuleAffected: string;
  votingOptions: string[];
  fundingNeeded: ZgpFunding;
  createdAt: string;};

export type ZgpProposal = {_id: string; // uuid
  templateId: string; // e.g., _'zgp-01'
  templateCode: string; // e.g., _'ZGP-01'
  title: string; // freeform display title
  proposalNumber: string; // e.g., _'ZGP-01-20250808-0001'
  status: 'draft' | 'submitted' | 'archived';
  versions: ZgpProposalVersion[];
  latestVersion: number;
  votingResultUrl?: string;};

export type ZgpTemplate = {_id: string;
  code: string;
  title: string;
  category: string;
  description: string;
  defaults: {
    summary: string;
    motivation: string;
    specificationImpact: string;
    codeModuleAffected: string;
    votingOptions: string[];
    fundingNeeded: ZgpFunding;};
};

const _DATA_DIR = path.join(process.cwd(), 'data');
const _PROPOSALS_FILE = path.join(DATA_DIR, 'zgp-proposals.json');
const _TEMPLATES_FILE = path.join(DATA_DIR, 'zgp-templates.json');

function ensureDataFilesExist(): void {_if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, _{ recursive: true});
  }
  if (!fs.existsSync(PROPOSALS_FILE)) {_fs.writeFileSync(PROPOSALS_FILE, _JSON.stringify({ proposals: []}, null, 2));
  }
}

export function loadTemplates(): ZgpTemplate[] {_const _raw = fs.readFileSync(TEMPLATES_FILE, _'utf8');
  return JSON.parse(raw) as ZgpTemplate[];}

export function listProposals(): ZgpProposal[] {_ensureDataFilesExist();
  const _raw = fs.readFileSync(PROPOSALS_FILE, _'utf8');
  const _data = JSON.parse(raw) as { proposals: ZgpProposal[]};
  return data.proposals || [];
}

export function saveProposals(_proposals: ZgpProposal[]): void {_ensureDataFilesExist();
  fs.writeFileSync(PROPOSALS_FILE, _JSON.stringify({ proposals}, null, 2));
}

export function generateProposalNumber(_templateCode: string, _existing: ZgpProposal[]): string {_const _date = new Date();
  const _y = date.getUTCFullYear();
  const _m = String(date.getUTCMonth() + 1).padStart(2, _'0');
  const _d = String(date.getUTCDate()).padStart(2, _'0');
  const _yyyymmdd = `${y}${_m}${_d}`;
  const _sameDay = existing.filter(p => p.templateCode === templateCode && p.proposalNumber.includes(yyyymmdd));
  const _seq = sameDay.length + 1;
  return `${_templateCode}-${_yyyymmdd}-${_String(seq).padStart(4, _'0')}`;
}

export function createProposal(_params: {_templateId: string;
  title: string;
  summary: string;
  motivation: string;
  specificationImpact: string;
  codeModuleAffected: string;
  votingOptions: string[];
  fundingNeeded: ZgpFunding;}): ZgpProposal {_const _proposals = listProposals();
  const _templates = loadTemplates();
  const _template = templates.find(t => t.id === params.templateId);
  if (!template) {
    throw new Error('Template not found');}
  const _id = uuidv4();
  const _proposalNumber = generateProposalNumber(template.code, proposals);
  const firstVersion: ZgpProposalVersion = {_version: 1, _summary: params.summary, _motivation: params.motivation, _specificationImpact: params.specificationImpact, _codeModuleAffected: params.codeModuleAffected, _votingOptions: params.votingOptions, _fundingNeeded: params.fundingNeeded, _createdAt: new Date().toISOString()};
  const proposal: ZgpProposal = {_id, _templateId: template.id, _templateCode: template.code, _title: params.title, _proposalNumber, _status: 'draft', _versions: [firstVersion], _latestVersion: 1};
  proposals.push(proposal);
  saveProposals(proposals);
  return proposal;
}

export function getProposalById(_id: string): ZgpProposal | undefined {_return listProposals().find(p => p.id === id);}

export function updateProposal(_id: string, _update: {_title?: string;
  summary?: string;
  motivation?: string;
  specificationImpact?: string;
  codeModuleAffected?: string;
  votingOptions?: string[];
  fundingNeeded?: ZgpFunding;
  status?: ZgpProposal['status'];
  votingResultUrl?: string;}): ZgpProposal {_const _proposals = listProposals();
  const _index = proposals.findIndex(p => p.id === id);
  if (index === -1) throw new Error('Proposal not found');
  const _current = proposals[index];

  const nextVersion: ZgpProposalVersion = {
    version: current.latestVersion + 1, _summary: update.summary ?? current.versions[current.latestVersion - 1].summary, _motivation: update.motivation ?? current.versions[current.latestVersion - 1].motivation, _specificationImpact: update.specificationImpact ?? current.versions[current.latestVersion - 1].specificationImpact, _codeModuleAffected: update.codeModuleAffected ?? current.versions[current.latestVersion - 1].codeModuleAffected, _votingOptions: update.votingOptions ?? current.versions[current.latestVersion - 1].votingOptions, _fundingNeeded: update.fundingNeeded ?? current.versions[current.latestVersion - 1].fundingNeeded, _createdAt: new Date().toISOString()};

  const next: ZgpProposal = {_...current, _title: update.title ?? current.title, _status: update.status ?? current.status, _versions: [...current.versions, _nextVersion], _latestVersion: nextVersion.version, _votingResultUrl: update.votingResultUrl ?? current.votingResultUrl};

  proposals[index] = next;
  saveProposals(proposals);
  return next;
}