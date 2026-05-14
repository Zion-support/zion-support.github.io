import { MetadataRoute } from 'next';

export const dynamic = 'force-static';
export const revalidate = false;

// All tool slugs for comprehensive indexing
const TOOL_SLUGS = [
  // Data Conversion
  'json-to-typescript-converter',
  'json-to-zod',
  'json-schema-generator',
  'json-schema-validator',
  'json-diff-viewer',
  'json-path-explorer',
  'json-to-csv-converter',
  'csv-json-converter',
  // Code Intelligence
  'css-minifier-beautifier',
  'css-gradient-generator',
  'css-box-model',
  'css-specificity-calculator',
  'css-unit-converter',
  'html-minifier-beautifier',
  'html-entity-encoder',
  'html-to-jsx',
  'markdown-to-html',
  'markdown-live-editor',
  'markdown-table-generator',
  'xml-formatter-validator',
  'diff-checker',
  // Security & Crypto
  'hash-identifier',
  'hmac-generator',
  'secure-hash-generator',
  'jwt-decoder',
  'jwt-encoder',
  'password-generator',
  'base64-encoder-decoder',
  'base32-encoder-decoder',
  'url-encoder-decoder',
  // API Tools
  'curl-to-javascript',
  'api-request-builder',
  'api-response-tester',
  'api-designer',
  'cors-tester',
  'mock-api-generator',
  // Regex & String
  'regex-generator',
  'regex-tester',
  'string-entropy-analyzer',
  // DevOps
  'gitignore-generator',
  'htaccess-generator',
  'uuid-generator',
  'timestamp-converter',
  'cron-generator',
  'cron-expression-explainer',
  'env-file-parser',
  // Productivity
  'number-base-converter',
  'lorem-ipsum-generator',
  'qr-code-generator',
  'readme-generator',
  'user-agent-parser',
  // Network
  'dns-lookup',
  'subnet-calculator',
  // Design & UI
  'color-converter',
  'color-blindness-simulator',
  'color-contrast-checker',
  'ai-color-contrast-checker',
  'favicon-generator',
  'meta-tag-generator',
  'box-shadow-generator',
  'image-color-extractor',
  // Accessibility
  'accessibility-auditor',
  // Testing
  'code-complexity-analyzer',
  // Database
  'sql-query-generator',
  'sql-formatter',
  // SEO
  'website-analyzer',
  'seo-optimizer',
  'url-slug-generator',
  // File Management
  'file-analyzer',
  'document-analyzer',
  'mime-type-lookup',
  'http-status-codes',
  'http-status-lookup',
  // Media & Entertainment
  'ascii-art-generator',
  // Calculators
  'productivity-score-calculator',
];

export default function robots(): MetadataRoute.Robots {
  // Build allow list from all tool slugs
  const allowPaths = [
    '/',
    '/about',
    '/contact',
    '/services',
    '/products',
    '/ai-tools',
    '/ai-lab',
    '/ai-services',
    '/blog',
    '/case-studies',
    '/pricing',
    '/community',
    '/automation',
    '/search',
    '/faq',
    ...TOOL_SLUGS.map((slug) => `/tools/${slug}`),
    ...TOOL_SLUGS.map((slug) => `/ai-lab/${slug}`),
  ];

  return {
    rules: {
      userAgent: '*',
      allow: allowPaths,
      disallow: ['/private/', '/test', '/test-jsx', '/test-simple', '/test-errorboundary'],
    },
    sitemap: 'https://ziontechgroup.com/sitemap.xml',
  };
}