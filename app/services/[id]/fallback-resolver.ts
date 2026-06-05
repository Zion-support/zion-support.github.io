// Broken-link fallback resolver for legacy/automated links
// Looks up by category + text fragments when exact route is missing.
function resolveFallback(segments) {
  const raw = segments.filter(Boolean).join('/');
  if (!raw) return null;
  const lower = raw.toLowerCase();

  // Compliance family
  if (/compliance|audit/.test(lower)) return '/compliance-automation';
  // Pricing / proposal
  if (/pricing|proposal|quote|plan/.test(lower)) return '/configurator';
  // Partners
  if (/partner|ecosystem|marketplace/.test(lower)) return '/partners';
  // Tools hubs / routers
  if (/tool|router|finder|compare/.test(lower)) return '/tools';
  // Blog / insights
  if (/blog|insight|article|news|resource/.test(lower)) return '/blog';
  // Search
  if (/search|explore|discover/.test(lower)) return '/search';
  // Industries -> solutions
  if (/(industry|solutions|vertical|healthcare|finance|manufactur|retail|logistics)/.test(lower)) return '/industry-solutions';
  // Contact
  if (/contact|support|help|agent/.test(lower)) return '/contact';
  return null;
}

export const __fallback = resolveFallback;
