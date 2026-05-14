// Unified search index built from all site catalogs.
// Used by the /search page and the 404 fuzzy search.

import { AI_LAB_TOOLS } from '../ai-lab/ai-lab-tools';
import { allServices, Service } from '../data/servicesData';

export interface SearchItem {
  title: string;
  description: string;
  href: string;
  category: string;
  tags: string[];
  popularity: number; // 0-100, higher = more popular
}

// ---- AI Lab tools ----
const aiLabItems: SearchItem[] = AI_LAB_TOOLS.map((t) => ({
  title: t.title,
  description: t.shortDescription,
  href: t.href,
  category: 'AI Lab',
  tags: [t.category, t.badge ?? t.status],
  popularity: t.status === 'live' ? 80 : t.status === 'experimental' ? 50 : 20,
}));

// ---- Services ----
const serviceItems: SearchItem[] = allServices.map((s: Service) => ({
  title: s.title,
  description: s.description,
  href: s.href,
  category: 'Services',
  tags: [s.category, ...s.features.slice(0, 3)],
  popularity: s.popular ? 90 : 60,
}));

// ---- All site pages (manual catalog for static export) ----
const pageItems: SearchItem[] = [
  { title: 'Home', description: 'AI products, autonomous workflows, and continuous app evolution', href: '/', category: 'Pages', tags: ['home', 'landing'], popularity: 100 },
  { title: 'About', description: 'Learn about Zion Tech Group, our mission, team, and approach to AI and IT solutions', href: '/about', category: 'Pages', tags: ['company', 'team'], popularity: 70 },
  { title: 'Services', description: 'Full suite of AI and IT solutions for modern businesses', href: '/services', category: 'Pages', tags: ['services', 'solutions'], popularity: 85 },
  { title: 'AI Services', description: 'Enterprise AI delivery including generative AI, agents, RAG, and multimodal intelligence', href: '/ai-services', category: 'Pages', tags: ['ai', 'enterprise'], popularity: 80 },
  { title: 'Web Development', description: 'Modern, responsive websites and web applications', href: '/web-development', category: 'Pages', tags: ['web', 'development'], popularity: 75 },
  { title: 'Cloud Infrastructure', description: 'Scalable and secure cloud solutions with migration and IaC', href: '/cloud-infrastructure', category: 'Pages', tags: ['cloud', 'infrastructure'], popularity: 75 },
  { title: 'Cybersecurity', description: 'Comprehensive security audits, monitoring, and compliance management', href: '/cybersecurity', category: 'Pages', tags: ['security', 'compliance'], popularity: 75 },
  { title: 'Data Engineering', description: 'Robust data pipelines, warehouses, and real-time streaming architectures', href: '/it-services/data-engineering', category: 'Pages', tags: ['data', 'pipelines', 'ETL'], popularity: 75 },
  { title: 'API Development', description: 'RESTful and GraphQL API design and integration', href: '/it-services/api-development', category: 'Pages', tags: ['api', 'integration'], popularity: 70 },
  { title: 'Mobile App Development', description: 'Cross-platform and native mobile apps with AI-powered features', href: '/it-services/mobile-development', category: 'Pages', tags: ['mobile', 'apps'], popularity: 70 },
  { title: 'AI Analytics & BI', description: 'Real-time data processing, predictive analytics, and custom dashboards', href: '/data-analytics', category: 'Pages', tags: ['analytics', 'BI', 'dashboards'], popularity: 88 },
  { title: 'AI Automation', description: 'Intelligent workflow, document processing, and email automation', href: '/ai-services/process-automation', category: 'Pages', tags: ['automation', 'workflow', 'AI'], popularity: 85 },
  { title: 'AI Tools Directory', description: 'Browse all AI-powered tools available on the platform', href: '/ai-tools', category: 'Pages', tags: ['tools', 'directory', 'AI'], popularity: 65 },
  { title: 'AI Lab', description: 'Interactive tools for readiness scoring, governance risk, and rollout planning', href: '/ai-lab', category: 'Pages', tags: ['lab', 'experiments', 'AI'], popularity: 70 },
  { title: 'Automation', description: 'Agent pipelines for audits, performance checks, and deployment-safe content evolution', href: '/automation', category: 'Pages', tags: ['automation', 'agents', 'pipelines'], popularity: 75 },
  { title: 'Smart Analytics', description: 'AI-powered analytics tracking and business intelligence', href: '/smart-analytics', category: 'Pages', tags: ['analytics', 'smart', 'AI'], popularity: 60 },
  { title: 'Solutions', description: 'Industry-specific AI solutions for enterprise challenges', href: '/solutions', category: 'Pages', tags: ['solutions', 'industries'], popularity: 75 },
  { title: 'Pricing', description: 'Transparent pricing for AI and IT services', href: '/pricing', category: 'Pages', tags: ['pricing', 'plans'], popularity: 60 },
  { title: 'Contact', description: 'Get in touch with our team for consultations and project inquiries', href: '/contact', category: 'Pages', tags: ['contact', 'support'], popularity: 65 },
  { title: 'Blog', description: 'Latest insights, news, and articles on AI and technology', href: '/blog', category: 'Pages', tags: ['blog', 'news', 'articles'], popularity: 55 },
  { title: 'FAQ', description: 'Frequently asked questions about our services and platform', href: '/faq', category: 'Pages', tags: ['faq', 'questions'], popularity: 50 },
  { title: 'Case Studies', description: 'Real-world success stories from our clients', href: '/case-studies', category: 'Pages', tags: ['cases', 'success'], popularity: 55 },
  { title: 'Careers', description: 'Join our team — open positions and company culture', href: '/careers', category: 'Pages', tags: ['careers', 'jobs'], popularity: 45 },
  { title: 'Partnerships', description: 'Partner with us for mutual growth and success', href: '/partners', category: 'Pages', tags: ['partners', 'collaboration'], popularity: 40 },
  { title: 'Press', description: 'Press releases and media coverage', href: '/press', category: 'Pages', tags: ['press', 'media'], popularity: 35 },
  { title: 'Consultation', description: 'Schedule a free consultation with our experts', href: '/consultation', category: 'Pages', tags: ['consultation', 'free'], popularity: 60 },
  { title: 'Site Map', description: 'Complete map of all pages on the site', href: '/site-map', category: 'Pages', tags: ['sitemap', 'navigation'], popularity: 30 },
  { title: 'Privacy Policy', description: 'How we handle and protect your personal data', href: '/privacy-policy', category: 'Pages', tags: ['privacy', 'policy'], popularity: 40 },
  { title: 'Terms of Service', description: 'Terms and conditions for using our services', href: '/terms-of-service', category: 'Pages', tags: ['terms', 'legal'], popularity: 35 },
  { title: 'Cookie Policy', description: 'Information about cookies and how we use them', href: '/cookies', category: 'Pages', tags: ['cookies', 'policy'], popularity: 30 },
  { title: 'GDPR Compliance', description: 'Our commitment to GDPR and data protection regulations', href: '/gdpr', category: 'Pages', tags: ['gdpr', 'compliance'], popularity: 40 },
  { title: 'DevOps', description: 'CI/CD, infrastructure automation, and deployment solutions', href: '/devops', category: 'Pages', tags: ['devops', 'CI/CD', 'deployment'], popularity: 60 },
  { title: 'Blockchain Solutions', description: 'Blockchain development, Web3, and smart contract services', href: '/blockchain', category: 'Pages', tags: ['blockchain', 'web3'], popularity: 45 },
  { title: 'IoT Solutions', description: 'Internet of Things development and edge computing', href: '/iot', category: 'Pages', tags: ['iot', 'edge-computing'], popularity: 45 },
  { title: 'AI Chat Companion', description: 'Conversational AI assistant for real-time support', href: '/ai-chat-companion', category: 'Pages', tags: ['chatbot', 'AI', 'conversational'], popularity: 70 },
  { title: 'AI Code Assistant', description: 'AI-powered code review, complexity analysis, and assistance', href: '/ai-code', category: 'Pages', tags: ['code', 'AI', 'review'], popularity: 65 },
  { title: 'AI Dashboard', description: 'Centralized AI-powered analytics and monitoring dashboard', href: '/ai-dashboard', category: 'Pages', tags: ['dashboard', 'analytics', 'AI'], popularity: 60 },
  { title: 'AI Readiness Assessment', description: 'Interactive multi-step tool to evaluate your organization\u0027s AI maturity across data, infrastructure, team, process, and strategy dimensions', href: '/tools/ai-readiness-assessment', category: 'Tools', tags: ['AI readiness', 'maturity', 'assessment', 'score', 'evaluation'], popularity: 85 },
  { title: 'Smart Solutions Finder', description: 'Interactive wizard that recommends specific Zion services based on your business challenge and needs', href: '/tools/ai-solutions-finder', category: 'Tools', tags: ['solutions', 'finder', 'recommend', 'matching', 'wizard'], popularity: 90 },
  { title: 'AI Compliance Risk Dashboard', description: 'Interactive compliance posture assessment across SOC 2, HIPAA, GDPR, and ISO 27001 with gap analysis and remediation roadmap', href: '/tools/ai-compliance-risk-dashboard', category: 'Tools', tags: ['compliance', 'SOC2', 'HIPAA', 'GDPR', 'ISO27001', 'risk', 'audit', 'security'], popularity: 92 },
  { title: 'AI Security Breach Cost Calculator', description: 'Estimate the financial impact of a data breach based on your company size, industry, data types, and security posture', href: '/tools/security-breach-cost-calculator', category: 'Tools', tags: ['security breach', 'cost', 'calculator', 'risk', 'cybersecurity', 'financial impact', 'ROI'], popularity: 93 },
  { title: 'AI Cloud Cost Optimizer', description: 'Analyze cloud infrastructure costs across AWS/GCP/Azure and find 20-40% savings opportunities with recommendations', href: '/tools/cloud-cost-optimizer', category: 'Tools', tags: ['cloud', 'cost', 'optimizer', 'AWS', 'GCP', 'Azure', 'savings', 'infrastructure'], popularity: 94 },
  { title: 'IT SLA & Performance Scorecard', description: 'Benchmark your IT ops against industry standards and see managed service projections with cost analysis', href: '/tools/it-sla-performance-scorecard', category: 'Tools', tags: ['sla', 'performance', 'benchmark', 'managed services', 'uptime', 'mttr', 'it operations'], popularity: 91 },
  { title: 'Website ROI & Conversion Analyzer', description: 'Calculate how much revenue AI-powered website features like chatbots and personalization can unlock', href: '/tools/website-roi-conversion-analyzer', category: 'Tools', tags: ['website', 'roi', 'conversion', 'revenue', 'chatbot', 'personalization', 'analytics'], popularity: 92 },
  { title: 'Technology Stack Advisor', description: 'Side-by-side platform comparisons with unbiased analysis — cloud, CMS, databases, e-commerce, monitoring', href: '/tools/tech-stack-advisor', category: 'Tools', tags: ['tech stack', 'comparison', 'platforms', 'AWS', 'Azure', 'CMS', 'database', 'advisory'], popularity: 89 },
  { title: 'AI Automation Opportunity Finder', description: 'Select workflows to automate and see hours saved, cost reduction, and matched Zion services', href: '/tools/ai-automation-opportunity-finder', category: 'Tools', tags: ['automation', 'AI', 'opportunity', 'ROI', 'hours saved', 'workflow', 'efficiency'], popularity: 95 },
  { title: 'Data Privacy Quick-Check', description: '10-question compliance assessment for GDPR, CCPA, and LGPD with gap analysis and fix-it checklist', href: '/tools/data-privacy-quick-check', category: 'Tools', tags: ['privacy', 'GDPR', 'CCPA', 'LGPD', 'compliance', 'data protection', 'audit'], popularity: 90 },
  { title: 'AI Supply Chain Intelligence', description: 'End-to-end supply chain visibility with predictive disruption alerts, vendor risk scoring, and AI-driven cost optimization', href: '/ai-services/ai-supply-chain-intelligence', category: 'AI Services', tags: ['supply chain', 'AI', 'optimization', 'vendor risk'], popularity: 80 },
  { title: 'AI Predictive Workforce Planning', description: 'Forecast hiring needs, optimize team composition, and predict attrition risk with AI-powered HR analytics', href: '/ai-services/ai-predictive-workforce-planning', category: 'AI Services', tags: ['HR', 'workforce', 'hiring', 'analytics'], popularity: 78 },
  { title: 'AI Voice Agent Platform', description: 'Deploy conversational AI voice agents for customer service, outbound calls, and lead qualification', href: '/ai-services/ai-voice-agent-platform', category: 'AI Services', tags: ['voice', 'agent', 'customer service', 'calls'], popularity: 82 },
  { title: 'AI Financial Forecasting & Planning', description: 'Revenue forecasting, cash flow prediction, and budget optimization using AI models', href: '/ai-services/ai-financial-forecasting', category: 'AI Services', tags: ['financial', 'forecasting', 'budget', 'AI'], popularity: 79 },
  { title: 'AI Content Moderation Platform', description: 'Automated content review for user-generated platforms — detect spam, harassment, violations', href: '/ai-services/ai-content-moderation', category: 'AI Services', tags: ['moderation', 'content', 'safety', 'compliance'], popularity: 76 },
  { title: 'AI Customer Sentiment Analytics', description: 'Real-time sentiment analysis across reviews, surveys, social media, and support interactions', href: '/ai-services/ai-customer-sentiment-analytics', category: 'AI Services', tags: ['sentiment', 'analytics', 'customer experience'], popularity: 77 },
  { title: 'AI Code Migration & Modernization', description: 'Automatically migrate legacy codebases to modern frameworks with AI-assisted refactoring', href: '/ai-services/ai-code-migration-modernization', category: 'AI Services', tags: ['migration', 'legacy', 'modernization', 'code'], popularity: 81 },
  { title: 'Managed SOC & Threat Intelligence', description: '24/7 Security Operations Center with AI-enhanced threat detection and proactive threat hunting', href: '/it-services/managed-soc-threat-intelligence', category: 'IT Services', tags: ['SOC', 'security', 'threat', 'operations'], popularity: 83 },
  { title: 'Container Orchestration & Kubernetes Management', description: 'Expert Kubernetes deployment, scaling, monitoring, and optimization for containerized applications', href: '/it-services/kubernetes-management', category: 'IT Services', tags: ['kubernetes', 'containers', 'orchestration', 'DevOps'], popularity: 80 },
  { title: 'IT Service Desk Automation', description: 'AI-powered IT service management with intelligent ticket routing and auto-resolution', href: '/it-services/it-service-desk-automation', category: 'IT Services', tags: ['service desk', 'automation', 'ITSM', 'SLA'], popularity: 77 },
  { title: 'Enterprise Backup & Disaster Recovery', description: 'Comprehensive data protection with automated backups, ransomware protection, and geo-redundant storage', href: '/it-services/enterprise-backup-dr', category: 'IT Services', tags: ['backup', 'disaster recovery', 'data protection'], popularity: 79 },
  { title: 'Network Architecture & SD-WAN', description: 'Design, deploy, and manage enterprise networks with SD-WAN and zero-trust architecture', href: '/it-services/network-architecture-sdwan', category: 'IT Services', tags: ['SD-WAN', 'network', 'zero-trust', 'architecture'], popularity: 78 },
];

// ---- Combine all ----
export const ALL_SEARCH_ITEMS: SearchItem[] = [
  ...pageItems,
  ...serviceItems,
  ...aiLabItems,
];

// ---- Fuzzy search engine ----
function levenshtein(a: string, b: string): number {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  const matrix: number[][] = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  return matrix[b.length][a.length];
}

interface ScoredItem extends SearchItem {
  score: number;
}

export function searchItems(query: string, items: SearchItem[] = ALL_SEARCH_ITEMS, maxResults: number = 20): SearchItem[] {
  if (!query.trim()) return items.sort((a, b) => b.popularity - a.popularity).slice(0, maxResults);

  const q = query.toLowerCase().trim();
  const scored: ScoredItem[] = items
    .map((item) => {
      const titleLower = item.title.toLowerCase();
      const descLower = item.description.toLowerCase();
      const catLower = item.category.toLowerCase();
      const tagsLower = item.tags.map((t) => t.toLowerCase());

      let score = item.popularity * 0.1; // base popularity

      // Exact title match
      if (titleLower === q) return { ...item, score: score + 100 };
      // Title starts with query
      if (titleLower.startsWith(q)) return { ...item, score: score + 90 };
      // Title contains query
      if (titleLower.includes(q)) return { ...item, score: score + 80 };
      // Description contains query
      if (descLower.includes(q)) return { ...item, score: score + 60 };
      // Category match
      if (catLower.includes(q)) return { ...item, score: score + 40 };
      // Tag match
      const matchingTags = tagsLower.filter((tag) => tag.includes(q));
      if (matchingTags.length > 0) return { ...item, score: score + 50 + matchingTags.length * 10 };
      // Levenshtein fuzzy match (only for short queries)
      if (q.length <= 15) {
        const dist = levenshtein(q, titleLower);
        const similarity = 1 - dist / Math.max(titleLower.length, 1);
        if (similarity > 0.55) return { ...item, score: score + similarity * 45 };
      }

      return null;
    })
    .filter((r: ScoredItem | null): r is ScoredItem => r !== null)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxResults);

  return scored;
}

export function groupByCategory(results: SearchItem[]): Map<string, SearchItem[]> {
  const groups = new Map<string, SearchItem[]>();
  for (const item of results) {
    const cat = item.category;
    if (!groups.has(cat)) groups.set(cat, []);
    groups.get(cat)!.push(item);
  }
  return groups;
}