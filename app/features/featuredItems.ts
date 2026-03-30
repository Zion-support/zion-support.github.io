import { AI_LAB_TOOLS } from '../ai-lab/ai-lab-tools';

export interface WhatsNewItem {
  id: string;
  title: string;
  description: string;
  href: string;
  tag: string;
}

const aiLabWhatsNew: WhatsNewItem[] = AI_LAB_TOOLS.filter((tool) => tool.status === 'live').map((tool) => ({
  id: tool.id,
  title: tool.title,
  description: tool.shortDescription,
  href: tool.href,
  tag:
    tool.badge ??
    (tool.status === 'live' ? 'AI Lab' : tool.status === 'experimental' ? 'Experimental' : 'Planned'),
}));

const appWhatsNew: WhatsNewItem[] = [
  {
    id: 'json-to-typescript-converter',
    title: 'JSON to TypeScript Converter',
    description: 'Convert JSON data to TypeScript interfaces instantly with AI-powered type inference.',
    href: '/tools/json-to-typescript-converter',
    tag: 'New tool',
  },
  {
    id: 'regex-generator',
    title: 'Regex Generator',
    description: 'Generate regular expressions from natural language and test them with live examples.',
    href: '/tools/regex-generator',
    tag: 'New tool',
  },
  {
    id: 'json-formatter-validator',
    title: 'JSON Formatter & Validator',
    description: 'Format, validate, minify, and compare JSON data with syntax highlighting and error detection.',
    href: '/tools/json-formatter-validator',
    tag: 'New tool',
  },
  {
    id: 'ai-log-analyzer',
    title: 'AI Log Analyzer',
    description: 'AI-powered log analysis with instant error detection, pattern recognition, and debugging recommendations.',
    href: '/tools/ai-log-analyzer',
    tag: 'New tool',
  },
  {
    id: 'document-analyzer',
    title: 'AI Document Analyzer',
    description: 'Upload documents for instant AI-powered analysis and insights',
    href: '/tools/document-analyzer',
    tag: 'New tool',
  },
  {
    id: 'api-response-tester',
    title: 'API Response Time Tester',
    description: 'Test API endpoint response times and analyze performance with visual metrics.',
    href: '/tools/api-response-tester',
    tag: 'New tool',
  },
  {
    id: 'code-complexity-analyzer',
    title: 'AI Code Complexity Analyzer',
    description: 'Analyze code complexity, maintainability scores, and get AI-powered refactoring suggestions.',
    href: '/tools/code-complexity-analyzer',
    tag: 'New tool',
  },
  {
    id: 'cron-expression-explainer',
    title: 'Cron Expression Explainer',
    description: 'Understand what your cron expressions mean in plain English with visual breakdowns and examples.',
    href: '/tools/cron-expression-explainer',
    tag: 'New tool',
  },
  {
    id: 'autonomous-seo-audit-agent',
    title: 'Autonomous SEO Audit Agent',
    description: 'AI-powered SEO audits with instant scoring for meta tags, content, and performance.',
    href: '/ai-lab/autonomous-seo-audit-agent',
    tag: 'AI Lab',
  },
  {
    id: 'productivity-score-calculator',
    title: 'AI Productivity Score Calculator',
    description: 'Measure team productivity potential with AI adoption and get efficiency scoring.',
    href: '/tools/productivity-score-calculator',
    tag: 'New tool',
  },
  {
    id: 'meeting-cost-calculator',
    title: 'Meeting Cost Calculator',
    description: 'Understand the true cost of meetings and see potential savings with AI improvements.',
    href: '/tools/meeting-cost-calculator',
    tag: 'New tool',
  },
  {
    id: 'roi-calculator',
    title: 'AI ROI Calculator',
    description: 'Calculate the return on investment for implementing AI tools in your organization.',
    href: '/tools/roi-calculator',
    tag: 'New tool',
  },
  {
    id: 'zion-ai-chatbot-playground',
    title: 'Zion AI Chatbot Playground',
    description: 'In-browser conversational prototype and UX testing playground.',
    href: '/zion-ai-chatbot-playground',
    tag: 'New app',
  },
  {
    id: 'zion-ai-code-sandbox',
    title: 'Zion AI Code Sandbox',
    description: 'Interactive code analysis and prompt-to-code experimentation space.',
    href: '/zion-ai-code-sandbox',
    tag: 'New app',
  },
  {
    id: 'ai-system-health-monitor',
    title: 'AI System Health Monitor',
    description: 'Real-time system monitoring with autonomous optimization insights.',
    href: '/ai-system-health-monitor',
    tag: 'New feature',
  },
  {
    id: 'smart-analytics-dashboard',
    title: 'Smart Analytics Dashboard',
    description: 'Predictive analytics and business intelligence command center.',
    href: '/smart-analytics',
    tag: 'Analytics',
  },
  {
    id: 'ai-live-ux-auto-fix',
    title: 'AI Live Site UX Auto-Fix Agent',
    description: 'Autonomous UX issue discovery and safe implementation pipeline.',
    href: '/automation',
    tag: 'Automation',
  },
  {
    id: 'color-palette-generator',
    title: 'Color Palette Generator',
    description: 'Generate harmonious color palettes from any base color with WCAG accessibility checks and CSS/JSON export.',
    href: '/tools/color-palette-generator',
    tag: 'New tool',
  },
  {
    id: 'markdown-to-html',
    title: 'Markdown to HTML Converter',
    description: 'Convert Markdown to styled HTML instantly with live preview, copy output, and download as a complete HTML document.',
    href: '/tools/markdown-to-html',
    tag: 'New tool',
  },
  {
    id: 'diff-checker',
    title: 'Text Diff Checker',
    description: 'Compare two blocks of text side-by-side with color-coded additions, removals, and LCS-based diffing.',
    href: '/tools/diff-checker',
    tag: 'New tool',
  },
  {
    id: 'url-encoder-decoder',
    title: 'URL Encoder / Decoder',
    description: 'Encode or decode URLs and URL components instantly. Supports full URL and component modes with live output.',
    href: '/tools/url-encoder-decoder',
    tag: 'New tool',
  },
  {
    id: 'uuid-generator',
    title: 'UUID Generator',
    description: 'Generate cryptographically unique identifiers — UUID v4 (random) or v7 (time-ordered), bulk export, and format options.',
    href: '/tools/uuid-generator',
    tag: 'New tool',
  },
  {
    id: 'timestamp-converter',
    title: 'Timestamp Converter',
    description: 'Convert between Unix timestamps, ISO 8601, and human-readable dates. Live clock, auto-detect, and time difference calculator.',
    href: '/tools/timestamp-converter',
    tag: 'New tool',
  },
  {
    id: 'http-status-lookup',
    title: 'HTTP Status Code Lookup',
    description: 'Interactive reference for HTTP status codes with detailed explanations, RFC references, and usage tips.',
    href: '/tools/http-status-lookup',
    tag: 'New tool',
  },
  {
    id: 'box-shadow-generator',
    title: 'CSS Box Shadow Generator',
    description: 'Create beautiful CSS box shadows with live preview, layer support, presets, and instant export.',
    href: '/tools/box-shadow-generator',
    tag: 'New tool',
  },
  {
    id: 'color-converter',
    title: 'Color Converter',
    description: 'Convert colors between HEX, RGB, HSL, and CMYK with live preview, color harmonies, and CSS export.',
    href: '/tools/color-converter',
    tag: 'New tool',
  },
  {
    id: 'json-diff-viewer',
    title: 'JSON Diff Viewer',
    description: 'Compare two JSON objects side-by-side with structural diffing, filter by change type, and copy results.',
    href: '/tools/json-diff-viewer',
    tag: 'New tool',
  },
  {
    id: 'dark-mode-toggle',
    title: 'Dark Mode Toggle',
    description: 'Switch between light and dark themes for comfortable browsing in any lighting condition.',
    href: '/',
    tag: 'UI Enhancement',
  },
];

const dedupeById = (items: WhatsNewItem[]) => {
  const seen = new Set<string>();
  return items.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
};

export const whatsNewItems: WhatsNewItem[] = dedupeById([...aiLabWhatsNew, ...appWhatsNew]);