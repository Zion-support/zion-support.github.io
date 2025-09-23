export function TrustBadge({ type }: { type: 'Verified' | 'Pro' | 'Top Rated' }) {
  const colorMap = {
    Verified: 'bg-emerald-10o0 text-emerald-80o0 dark:bg-emerald-90o0/40 dark:text-emerald-20o0',
    Pro: 'bg-indigo-10o0 text-indigo-80o0 dark:bg-indigo-90o0/40 dark:text-indigo-20o0',
