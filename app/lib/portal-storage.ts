// Client Portal Storage — persistent localStorage wrappers
// All data is client-side only; no server required

const STORAGE_KEYS = {
  PROPOSALS: 'zion_portal_proposals',
  COMPARISONS: 'zion_portal_comparisons',
  QUIZ_RESULTS: 'zion_portal_quiz_results',
  CONTACT_LOG: 'zion_portal_contact_log',
  SETTINGS: 'zion_portal_settings',
} as const;

export type Proposal = {
  id: string;
  createdAt: string;
  companyName: string;
  contactName: string;
  email: string;
  selectedServices: Array<{
    title: string;
    tier: 'basic' | 'pro' | 'enterprise';
    frequency: 'monthly' | 'annual';
    price: number;
  }>;
  subtotal: number;
  discount: number;
  total: number;
};

export type ComparisonSet = {
  id: string;
  createdAt: string;
  name: string;
  serviceIds: string[];
};

export type QuizResult = {
  id: string;
  createdAt: string;
  answers: Record<string, string | string[]>;
  recommendations: string[];
  email?: string;
};

export type ContactLogEntry = {
  timestamp: string;
  method: 'email' | 'phone';
  note: string;
};

// ── Generic storage ─────────────────────────────────────────────────────────
function getItem<T>(key: string): T | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function setItem<T>(key: string, value: T): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.warn('LocalStorage set failed:', err);
  }
}

// ── Proposals ───────────────────────────────────────────────────────────────
export function getProposals(): Proposal[] {
  return getItem<Proposal[]>(STORAGE_KEYS.PROPOSALS) || [];
}

export function saveProposal(proposal: Proposal): void {
  const existing = getProposals();
  existing.unshift(proposal);
  setItem(STORAGE_KEYS.PROPOSALS, existing);
}

export function deleteProposal(id: string): void {
  const existing = getProposals().filter(p => p.id !== id);
  setItem(STORAGE_KEYS.PROPOSALS, existing);
}

export function clearProposals(): void {
  setItem(STORAGE_KEYS.PROPOSALS, []);
}

// ── Comparisons ─────────────────────────────────────────────────────────────
export function getComparisons(): ComparisonSet[] {
  return getItem<ComparisonSet[]>(STORAGE_KEYS.COMPARISONS) || [];
}

export function saveComparison(comp: ComparisonSet): void {
  const existing = getComparisons();
  existing.unshift(comp);
  setItem(STORAGE_KEYS.COMPARISONS, existing);
}

export function deleteComparison(id: string): void {
  const existing = getComparisons().filter(c => c.id !== id);
  setItem(STORAGE_KEYS.COMPARISONS, existing);
}

// ── Quiz Results ─────────────────────────────────────────────────────────────
export function getQuizResults(): QuizResult[] {
  return getItem<QuizResult[]>(STORAGE_KEYS.QUIZ_RESULTS) || [];
}

export function saveQuizResult(result: QuizResult): void {
  const existing = getQuizResults();
  existing.unshift(result);
  setItem(STORAGE_KEYS.QUIZ_RESULTS, existing);
}

export function deleteQuizResult(id: string): void {
  const existing = getQuizResults().filter(r => r.id !== id);
  setItem(STORAGE_KEYS.QUIZ_RESULTS, existing);
}

// ── Contact Log ──────────────────────────────────────────────────────────────
export function getContactLog(): ContactLogEntry[] {
  return getItem<ContactLogEntry[]>(STORAGE_KEYS.CONTACT_LOG) || [];
}

export function logContact(method: 'email' | 'phone', note: string = ''): void {
  const log = getContactLog();
  log.unshift({ timestamp: new Date().toISOString(), method, note });
  setItem(STORAGE_KEYS.CONTACT_LOG, log);
}

// ── Settings ─────────────────────────────────────────────────────────────────
export function getSettings(): { theme?: string; notifications?: boolean } {
  return getItem(STORAGE_KEYS.SETTINGS) || {};
}

export function saveSettings(settings: Record<string, unknown>): void {
  setItem(STORAGE_KEYS.SETTINGS, { ...getSettings(), ...settings });
}

// ── Utilities ─────────────────────────────────────────────────────────────────
export function exportAllData(): string {
  const all = {
    proposals: getProposals(),
    comparisons: getComparisons(),
    quizResults: getQuizResults(),
    contactLog: getContactLog(),
    exportedAt: new Date().toISOString(),
  };
  return JSON.stringify(all, null, 2);
}

export function clearAllData(): void {
  Object.values(STORAGE_KEYS).forEach(key => localStorage.removeItem(key));
}
