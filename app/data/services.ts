export interface Service {
  id: string;
  name: string;
  description: string;
  features: string[];
  pricing: {
    basic: number;
    pro: number;
    enterprise: number;
  };
  category: 'ai' | 'it' | 'saas' | 'security' | 'analytics' | 'automation';
  icon: string;
  link: string;
  popular?: boolean;
  new?: boolean;
}

export const services: Service[] = [
  // AI Services
  {
    id: 'ai-chatbot-enterprise',
    name: 'AI Chatbot Enterprise',
    description: 'Advanced conversational AI for enterprise customer support with multi-language support and custom training.',
    features: [
      'Multi-language support (50+ languages)',
      'Custom model training',
      'Integration with CRM systems',
      'Real-time analytics dashboard',
      '24/7 customer support',
      'API access and webhooks'
    ],
    pricing: {
      basic: 299,
      pro: 799,
      enterprise: 1999
    },
    category: 'ai',
    icon: '🤖',
    link: '/ai-chatbot-enterprise',
    popular: true
  },
  {
    id: 'ai-content-generator',
    name: 'AI Content Generator Pro',
    description: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI.',
    features: [
      'SEO-optimized content generation',
      'Multiple content formats (blog, social, email)',
      'Brand voice customization',
      'Plagiarism detection',
      'Content scheduling',
      'Analytics and performance tracking'
    ],
    pricing: {
      basic: 99,
      pro: 299,
      enterprise: 799
    },
    category: 'ai',
    icon: '✍️',
    link: '/ai-content-generator',
    new: true
  },
  {
    id: 'ai-data-analytics',
    name: 'AI Data Analytics Suite',
    description: 'Transform raw data into actionable insights with AI-powered analytics and predictive modeling.',
    features: [
      'Real-time data processing',
      'Predictive analytics',
      'Custom dashboard creation',
      'Automated reporting',
      'Data visualization tools',
      'Machine learning models'
    ],
    pricing: {
      basic: 199,
      pro: 599,
      enterprise: 1499
    },
    category: 'ai',
    icon: '📊',
    link: '/ai-data-analytics'
  },
  {
    id: 'ai-code-assistant',
    name: 'AI Code Assistant Pro',
    description: 'Intelligent coding assistant that helps developers write better code faster with AI-powered suggestions.',
    features: [
      'Code completion and suggestions',
      'Bug detection and fixing',
      'Code review automation',
      'Documentation generation',
      'Multi-language support',
      'IDE integration'
    ],
    pricing: {
      basic: 49,
      pro: 149,
      enterprise: 399
    },
    category: 'ai',
    icon: '💻',
    link: '/ai-code-assistant',
    popular: true
  },

  // IT Services
  {
    id: 'cloud-infrastructure',
    name: 'Cloud Infrastructure Management',
    description: 'Complete cloud infrastructure setup, management, and optimization for scalable business growth.',
    features: [
      'Multi-cloud deployment (AWS, Azure, GCP)',
      'Auto-scaling configuration',
      'Security hardening',
      'Cost optimization',
      '24/7 monitoring',
      'Disaster recovery planning'
    ],
    pricing: {
      basic: 499,
      pro: 1299,
      enterprise: 2999
    },
    category: 'it',
    icon: '☁️',
    link: '/cloud-infrastructure'
  },
  {
    id: 'cybersecurity-suite',
    name: 'Cybersecurity Suite Pro',
    description: 'Comprehensive cybersecurity solution protecting your business from modern threats and attacks.',
    features: [
      'Threat detection and prevention',
      'Vulnerability scanning',
      'Security compliance monitoring',
      'Incident response planning',
      'Employee security training',
      'Regular security audits'
    ],
    pricing: {
      basic: 199,
      pro: 599,
      enterprise: 1499
    },
    category: 'security',
    icon: '🔒',
    link: '/cybersecurity-suite',
    popular: true
  },
  {
    id: 'devops-automation',
    name: 'DevOps Automation Platform',
    description: 'Streamline your development workflow with automated CI/CD pipelines and infrastructure management.',
    features: [
      'Automated CI/CD pipelines',
      'Container orchestration',
      'Infrastructure as Code',
      'Monitoring and alerting',
      'Deployment automation',
      'Performance optimization'
    ],
    pricing: {
      basic: 299,
      pro: 799,
      enterprise: 1999
    },
    category: 'it',
    icon: '⚙️',
    link: '/devops-automation'
  },

  // Micro SAAS Services
  {
    id: 'url-shortener-pro',
    name: 'URL Shortener Pro',
    description: 'Professional URL shortening service with analytics, custom domains, and advanced features.',
    features: [
      'Custom domain support',
      'Detailed analytics',
      'QR code generation',
      'Bulk URL shortening',
      'Password protection',
      'API access'
    ],
    pricing: {
      basic: 9,
      pro: 29,
      enterprise: 99
    },
    category: 'saas',
    icon: '🔗',
    link: '/url-shortener-pro',
    new: true
  },
  {
    id: 'email-validator',
    name: 'Email Validator API',
    description: 'Real-time email validation service to improve deliverability and reduce bounce rates.',
    features: [
      'Real-time validation',
      'Bulk email checking',
      'Syntax and domain validation',
      'Disposable email detection',
      'API integration',
      'Detailed reporting'
    ],
    pricing: {
      basic: 19,
      pro: 49,
      enterprise: 149
    },
    category: 'saas',
    icon: '📧',
    link: '/email-validator'
  },
  {
    id: 'qr-code-generator',
    name: 'QR Code Generator Pro',
    description: 'Create dynamic QR codes with tracking, analytics, and customization options.',
    features: [
      'Dynamic QR codes',
      'Custom branding',
      'Analytics tracking',
      'Bulk generation',
      'API access',
      'White-label options'
    ],
    pricing: {
      basic: 15,
      pro: 39,
      enterprise: 99
    },
    category: 'saas',
    icon: '📱',
    link: '/qr-code-generator'
  },
  {
    id: 'password-generator',
    name: 'Password Generator API',
    description: 'Secure password generation service with customizable parameters and enterprise features.',
    features: [
      'Customizable parameters',
      'Bulk generation',
      'API integration',
      'Security auditing',
      'Enterprise features',
      'Compliance reporting'
    ],
    pricing: {
      basic: 9,
      pro: 29,
      enterprise: 79
    },
    category: 'saas',
    icon: '🔐',
    link: '/password-generator'
  },
  {
    id: 'text-to-speech',
    name: 'Text-to-Speech API',
    description: 'High-quality text-to-speech conversion with multiple voices and languages.',
    features: [
      'Multiple voice options',
      '50+ languages supported',
      'SSML support',
      'Real-time conversion',
      'API integration',
      'Custom voice training'
    ],
    pricing: {
      basic: 29,
      pro: 79,
      enterprise: 199
    },
    category: 'saas',
    icon: '🎤',
    link: '/text-to-speech'
  },
  {
    id: 'image-optimizer',
    name: 'Image Optimizer Pro',
    description: 'Automated image optimization service to reduce file sizes while maintaining quality.',
    features: [
      'Automatic optimization',
      'Multiple format support',
      'Bulk processing',
      'API integration',
      'CDN delivery',
      'Analytics dashboard'
    ],
    pricing: {
      basic: 19,
      pro: 49,
      enterprise: 129
    },
    category: 'saas',
    icon: '🖼️',
    link: '/image-optimizer'
  },
  {
    id: 'screenshot-api',
    name: 'Screenshot API',
    description: 'Generate screenshots of websites and web applications programmatically.',
    features: [
      'Full page screenshots',
      'Mobile device simulation',
      'PDF generation',
      'API integration',
      'Bulk processing',
      'Custom dimensions'
    ],
    pricing: {
      basic: 25,
      pro: 69,
      enterprise: 179
    },
    category: 'saas',
    icon: '📸',
    link: '/screenshot-api'
  },
  {
    id: 'pdf-generator',
    name: 'PDF Generator API',
    description: 'Convert HTML, documents, and images to PDF with advanced formatting options.',
    features: [
      'HTML to PDF conversion',
      'Custom styling',
      'Password protection',
      'Watermarking',
      'API integration',
      'Batch processing'
    ],
    pricing: {
      basic: 29,
      pro: 79,
      enterprise: 199
    },
    category: 'saas',
    icon: '📄',
    link: '/pdf-generator'
  },
  {
    id: 'weather-api',
    name: 'Weather API Pro',
    description: 'Comprehensive weather data service with forecasts, alerts, and historical data.',
    features: [
      'Current weather data',
      '7-day forecasts',
      'Weather alerts',
      'Historical data',
      'API integration',
      'Multiple data sources'
    ],
    pricing: {
      basic: 15,
      pro: 39,
      enterprise: 99
    },
    category: 'saas',
    icon: '🌤️',
    link: '/weather-api'
  },
  {
    id: 'currency-converter',
    name: 'Currency Converter API',
    description: 'Real-time currency conversion service with historical rates and multiple currencies.',
    features: [
      'Real-time rates',
      'Historical data',
      '170+ currencies',
      'API integration',
      'Bulk conversion',
      'Rate alerts'
    ],
    pricing: {
      basic: 19,
      pro: 49,
      enterprise: 129
    },
    category: 'saas',
    icon: '💱',
    link: '/currency-converter'
  },
  {
    id: 'ip-geolocation',
    name: 'IP Geolocation API',
    description: 'Get detailed location information from IP addresses with high accuracy.',
    features: [
      'High accuracy data',
      'Country, city, region info',
      'ISP and organization data',
      'API integration',
      'Bulk lookups',
      'Real-time updates'
    ],
    pricing: {
      basic: 9,
      pro: 29,
      enterprise: 79
    },
    category: 'saas',
    icon: '🌍',
    link: '/ip-geolocation'
  },
  {
    id: 'user-agent-parser',
    name: 'User Agent Parser API',
    description: 'Parse user agent strings to extract browser, device, and operating system information.',
    features: [
      'Browser detection',
      'Device identification',
      'OS detection',
      'API integration',
      'Bulk parsing',
      'Detailed analytics'
    ],
    pricing: {
      basic: 5,
      pro: 19,
      enterprise: 49
    },
    category: 'saas',
    icon: '🔍',
    link: '/user-agent-parser'
  },
  {
    id: 'timezone-converter',
    name: 'Timezone Converter API',
    description: 'Convert times between different timezones with daylight saving time support.',
    features: [
      'All timezones supported',
      'DST handling',
      'API integration',
      'Bulk conversion',
      'Historical data',
      'Real-time updates'
    ],
    pricing: {
      basic: 9,
      pro: 29,
      enterprise: 79
    },
    category: 'saas',
    icon: '🕐',
    link: '/timezone-converter'
  },
  {
    id: 'color-palette-generator',
    name: 'Color Palette Generator',
    description: 'Generate beautiful color palettes from images or create them from scratch.',
    features: [
      'Image color extraction',
      'Palette generation',
      'Color harmony rules',
      'API integration',
      'Export options',
      'Design tools integration'
    ],
    pricing: {
      basic: 15,
      pro: 39,
      enterprise: 99
    },
    category: 'saas',
    icon: '🎨',
    link: '/color-palette-generator',
    new: true
  },
  {
    id: 'lorem-ipsum-generator',
    name: 'Lorem Ipsum Generator API',
    description: 'Generate placeholder text in multiple languages and formats for design and development.',
    features: [
      'Multiple languages',
      'Custom word count',
      'Different formats',
      'API integration',
      'Bulk generation',
      'Custom text options'
    ],
    pricing: {
      basic: 5,
      pro: 15,
      enterprise: 39
    },
    category: 'saas',
    icon: '📝',
    link: '/lorem-ipsum-generator'
  },
  {
    id: 'uuid-generator',
    name: 'UUID Generator API',
    description: 'Generate unique identifiers (UUIDs) for your applications with various versions.',
    features: [
      'Multiple UUID versions',
      'Bulk generation',
      'API integration',
      'Custom formats',
      'Validation tools',
      'Enterprise features'
    ],
    pricing: {
      basic: 5,
      pro: 15,
      enterprise: 39
    },
    category: 'saas',
    icon: '🆔',
    link: '/uuid-generator'
  },
  {
    id: 'hash-generator',
    name: 'Hash Generator API',
    description: 'Generate cryptographic hashes for passwords, files, and data integrity verification.',
    features: [
      'Multiple hash algorithms',
      'File hashing',
      'API integration',
      'Bulk processing',
      'Security features',
      'Validation tools'
    ],
    pricing: {
      basic: 9,
      pro: 29,
      enterprise: 79
    },
    category: 'saas',
    icon: '🔐',
    link: '/hash-generator'
  },
  {
    id: 'barcode-generator',
    name: 'Barcode Generator API',
    description: 'Generate various types of barcodes and QR codes for products and inventory management.',
    features: [
      'Multiple barcode types',
      'Custom sizing',
      'API integration',
      'Bulk generation',
      'Print optimization',
      'Validation tools'
    ],
    pricing: {
      basic: 19,
      pro: 49,
      enterprise: 129
    },
    category: 'saas',
    icon: '📊',
    link: '/barcode-generator'
  },
  {
    id: 'base64-encoder',
    name: 'Base64 Encoder/Decoder API',
    description: 'Encode and decode data using Base64 encoding with support for various data types.',
    features: [
      'Encode/Decode operations',
      'Multiple data types',
      'API integration',
      'Bulk processing',
      'URL-safe encoding',
      'Validation tools'
    ],
    pricing: {
      basic: 5,
      pro: 15,
      enterprise: 39
    },
    category: 'saas',
    icon: '🔤',
    link: '/base64-encoder'
  },
  {
    id: 'json-formatter',
    name: 'JSON Formatter API',
    description: 'Format, validate, and beautify JSON data with syntax highlighting and error detection.',
    features: [
      'JSON formatting',
      'Syntax validation',
      'Error detection',
      'API integration',
      'Bulk processing',
      'Custom formatting options'
    ],
    pricing: {
      basic: 9,
      pro: 29,
      enterprise: 79
    },
    category: 'saas',
    icon: '📋',
    link: '/json-formatter'
  },
  {
    id: 'regex-tester',
    name: 'Regex Tester API',
    description: 'Test and validate regular expressions with real-time matching and explanation.',
    features: [
      'Real-time testing',
      'Pattern explanation',
      'Multiple test cases',
      'API integration',
      'Performance analysis',
      'Common patterns library'
    ],
    pricing: {
      basic: 15,
      pro: 39,
      enterprise: 99
    },
    category: 'saas',
    icon: '🔍',
    link: '/regex-tester'
  },
  {
    id: 'markdown-converter',
    name: 'Markdown Converter API',
    description: 'Convert Markdown to HTML and other formats with custom styling and extensions.',
    features: [
      'Markdown to HTML',
      'Custom styling',
      'Extension support',
      'API integration',
      'Bulk conversion',
      'Preview generation'
    ],
    pricing: {
      basic: 19,
      pro: 49,
      enterprise: 129
    },
    category: 'saas',
    icon: '📝',
    link: '/markdown-converter'
  },
  {
    id: 'url-analyzer',
    name: 'URL Analyzer API',
    description: 'Analyze URLs for safety, performance, and SEO metrics with detailed reporting.',
    features: [
      'Safety analysis',
      'Performance metrics',
      'SEO analysis',
      'API integration',
      'Bulk analysis',
      'Detailed reporting'
    ],
    pricing: {
      basic: 25,
      pro: 69,
      enterprise: 179
    },
    category: 'saas',
    icon: '🔗',
    link: '/url-analyzer'
  },
  {
    id: 'domain-checker',
    name: 'Domain Availability Checker',
    description: 'Check domain availability across multiple TLDs with pricing and registration options.',
    features: [
      'Multiple TLD support',
      'Availability checking',
      'Pricing information',
      'API integration',
      'Bulk checking',
      'Registration suggestions'
    ],
    pricing: {
      basic: 15,
      pro: 39,
      enterprise: 99
    },
    category: 'saas',
    icon: '🌐',
    link: '/domain-checker'
  },
  {
    id: 'social-media-preview',
    name: 'Social Media Preview API',
    description: 'Generate social media preview cards with Open Graph and Twitter Card metadata.',
    features: [
      'Open Graph support',
      'Twitter Cards',
      'Image generation',
      'API integration',
      'Bulk processing',
      'Custom templates'
    ],
    pricing: {
      basic: 29,
      pro: 79,
      enterprise: 199
    },
    category: 'saas',
    icon: '📱',
    link: '/social-media-preview'
  },
  {
    id: 'favicon-generator',
    name: 'Favicon Generator API',
    description: 'Generate favicons and app icons in multiple sizes and formats from images.',
    features: [
      'Multiple sizes',
      'Various formats',
      'Image optimization',
      'API integration',
      'Bulk generation',
      'Custom templates'
    ],
    pricing: {
      basic: 19,
      pro: 49,
      enterprise: 129
    },
    category: 'saas',
    icon: '🎯',
    link: '/favicon-generator'
  },
  {
    id: 'sitemap-generator',
    name: 'Sitemap Generator API',
    description: 'Generate XML sitemaps for websites with automatic discovery and validation.',
    features: [
      'Automatic discovery',
      'Multiple formats',
      'Validation tools',
      'API integration',
      'Bulk generation',
      'SEO optimization'
    ],
    pricing: {
      basic: 25,
      pro: 69,
      enterprise: 179
    },
    category: 'saas',
    icon: '🗺️',
    link: '/sitemap-generator'
  },
  {
    id: 'robots-txt-generator',
    name: 'Robots.txt Generator API',
    description: 'Generate robots.txt files with proper directives for search engine crawling.',
    features: [
      'Custom directives',
      'Validation tools',
      'API integration',
      'Bulk generation',
      'SEO optimization',
      'Testing tools'
    ],
    pricing: {
      basic: 9,
      pro: 29,
      enterprise: 79
    },
    category: 'saas',
    icon: '🤖',
    link: '/robots-txt-generator'
  },
  {
    id: 'meta-tags-generator',
    name: 'Meta Tags Generator API',
    description: 'Generate comprehensive meta tags for SEO optimization and social media sharing.',
    features: [
      'SEO meta tags',
      'Social media tags',
      'Schema markup',
      'API integration',
      'Bulk generation',
      'Validation tools'
    ],
    pricing: {
      basic: 15,
      pro: 39,
      enterprise: 99
    },
    category: 'saas',
    icon: '🏷️',
    link: '/meta-tags-generator'
  },
  {
    id: 'htaccess-generator',
    name: '.htaccess Generator API',
    description: 'Generate .htaccess files with security, performance, and SEO optimizations.',
    features: [
      'Security rules',
      'Performance optimization',
      'SEO directives',
      'API integration',
      'Bulk generation',
      'Validation tools'
    ],
    pricing: {
      basic: 19,
      pro: 49,
      enterprise: 129
    },
    category: 'saas',
    icon: '⚙️',
    link: '/htaccess-generator'
  },
  {
    id: 'css-minifier',
    name: 'CSS Minifier API',
    description: 'Minify CSS files to reduce file size and improve website performance.',
    features: [
      'CSS minification',
      'Source map generation',
      'API integration',
      'Bulk processing',
      'Performance optimization',
      'Validation tools'
    ],
    pricing: {
      basic: 9,
      pro: 29,
      enterprise: 79
    },
    category: 'saas',
    icon: '🎨',
    link: '/css-minifier'
  },
  {
    id: 'js-minifier',
    name: 'JavaScript Minifier API',
    description: 'Minify JavaScript files with advanced optimization and source map support.',
    features: [
      'JS minification',
      'Source map generation',
      'API integration',
      'Bulk processing',
      'Performance optimization',
      'Error detection'
    ],
    pricing: {
      basic: 9,
      pro: 29,
      enterprise: 79
    },
    category: 'saas',
    icon: '⚡',
    link: '/js-minifier'
  },
  {
    id: 'html-minifier',
    name: 'HTML Minifier API',
    description: 'Minify HTML files while preserving functionality and improving load times.',
    features: [
      'HTML minification',
      'Comment removal',
      'API integration',
      'Bulk processing',
      'Performance optimization',
      'Validation tools'
    ],
    pricing: {
      basic: 9,
      pro: 29,
      enterprise: 79
    },
    category: 'saas',
    icon: '📄',
    link: '/html-minifier'
  },
  {
    id: 'xml-minifier',
    name: 'XML Minifier API',
    description: 'Minify XML files to reduce size while maintaining structure and validity.',
    features: [
      'XML minification',
      'Structure preservation',
      'API integration',
      'Bulk processing',
      'Validation tools',
      'Performance optimization'
    ],
    pricing: {
      basic: 9,
      pro: 29,
      enterprise: 79
    },
    category: 'saas',
    icon: '📋',
    link: '/xml-minifier'
  },
  {
    id: 'json-minifier',
    name: 'JSON Minifier API',
    description: 'Minify JSON files to reduce file size while maintaining data integrity.',
    features: [
      'JSON minification',
      'Validation tools',
      'API integration',
      'Bulk processing',
      'Performance optimization',
      'Error detection'
    ],
    pricing: {
      basic: 5,
      pro: 15,
      enterprise: 39
    },
    category: 'saas',
    icon: '📋',
    link: '/json-minifier'
  },
  {
    id: 'csv-to-json',
    name: 'CSV to JSON Converter API',
    description: 'Convert CSV files to JSON format with customizable options and validation.',
    features: [
      'CSV to JSON conversion',
      'Custom delimiters',
      'API integration',
      'Bulk processing',
      'Validation tools',
      'Error handling'
    ],
    pricing: {
      basic: 15,
      pro: 39,
      enterprise: 99
    },
    category: 'saas',
    icon: '📊',
    link: '/csv-to-json'
  },
  {
    id: 'json-to-csv',
    name: 'JSON to CSV Converter API',
    description: 'Convert JSON data to CSV format with customizable headers and formatting.',
    features: [
      'JSON to CSV conversion',
      'Custom headers',
      'API integration',
      'Bulk processing',
      'Validation tools',
      'Error handling'
    ],
    pricing: {
      basic: 15,
      pro: 39,
      enterprise: 99
    },
    category: 'saas',
    icon: '📊',
    link: '/json-to-csv'
  },
  {
    id: 'excel-to-json',
    name: 'Excel to JSON Converter API',
    description: 'Convert Excel files to JSON format with support for multiple sheets and formats.',
    features: [
      'Excel to JSON conversion',
      'Multiple sheet support',
      'API integration',
      'Bulk processing',
      'Validation tools',
      'Error handling'
    ],
    pricing: {
      basic: 25,
      pro: 69,
      enterprise: 179
    },
    category: 'saas',
    icon: '📊',
    link: '/excel-to-json'
  },
  {
    id: 'json-to-excel',
    name: 'JSON to Excel Converter API',
    description: 'Convert JSON data to Excel format with customizable styling and formatting.',
    features: [
      'JSON to Excel conversion',
      'Custom styling',
      'API integration',
      'Bulk processing',
      'Validation tools',
      'Error handling'
    ],
    pricing: {
      basic: 25,
      pro: 69,
      enterprise: 179
    },
    category: 'saas',
    icon: '📊',
    link: '/json-to-excel'
  },
  {
    id: 'pdf-to-text',
    name: 'PDF to Text Converter API',
    description: 'Extract text content from PDF files with high accuracy and formatting preservation.',
    features: [
      'PDF text extraction',
      'Format preservation',
      'API integration',
      'Bulk processing',
      'OCR support',
      'Error handling'
    ],
    pricing: {
      basic: 29,
      pro: 79,
      enterprise: 199
    },
    category: 'saas',
    icon: '📄',
    link: '/pdf-to-text'
  },
  {
    id: 'text-to-pdf',
    name: 'Text to PDF Converter API',
    description: 'Convert text content to PDF format with customizable styling and formatting.',
    features: [
      'Text to PDF conversion',
      'Custom styling',
      'API integration',
      'Bulk processing',
      'Formatting options',
      'Error handling'
    ],
    pricing: {
      basic: 19,
      pro: 49,
      enterprise: 129
    },
    category: 'saas',
    icon: '📄',
    link: '/text-to-pdf'
  },
  {
    id: 'image-to-pdf',
    name: 'Image to PDF Converter API',
    description: 'Convert images to PDF format with customizable page sizes and quality options.',
    features: [
      'Image to PDF conversion',
      'Custom page sizes',
      'API integration',
      'Bulk processing',
      'Quality options',
      'Error handling'
    ],
    pricing: {
      basic: 19,
      pro: 49,
      enterprise: 129
    },
    category: 'saas',
    icon: '🖼️',
    link: '/image-to-pdf'
  },
  {
    id: 'pdf-to-image',
    name: 'PDF to Image Converter API',
    description: 'Convert PDF pages to images in various formats with customizable quality.',
    features: [
      'PDF to image conversion',
      'Multiple formats',
      'API integration',
      'Bulk processing',
      'Quality options',
      'Error handling'
    ],
    pricing: {
      basic: 25,
      pro: 69,
      enterprise: 179
    },
    category: 'saas',
    icon: '🖼️',
    link: '/pdf-to-image'
  },
  {
    id: 'word-to-pdf',
    name: 'Word to PDF Converter API',
    description: 'Convert Microsoft Word documents to PDF format with formatting preservation.',
    features: [
      'Word to PDF conversion',
      'Format preservation',
      'API integration',
      'Bulk processing',
      'Styling options',
      'Error handling'
    ],
    pricing: {
      basic: 29,
      pro: 79,
      enterprise: 199
    },
    category: 'saas',
    icon: '📄',
    link: '/word-to-pdf'
  },
  {
    id: 'pdf-to-word',
    name: 'PDF to Word Converter API',
    description: 'Convert PDF files to Microsoft Word format with editable text and formatting.',
    features: [
      'PDF to Word conversion',
      'Editable text',
      'API integration',
      'Bulk processing',
      'Format preservation',
      'Error handling'
    ],
    pricing: {
      basic: 39,
      pro: 99,
      enterprise: 249
    },
    category: 'saas',
    icon: '📄',
    link: '/pdf-to-word'
  },
  {
    id: 'excel-to-pdf',
    name: 'Excel to PDF Converter API',
    description: 'Convert Excel spreadsheets to PDF format with customizable page layouts.',
    features: [
      'Excel to PDF conversion',
      'Custom layouts',
      'API integration',
      'Bulk processing',
      'Formatting options',
      'Error handling'
    ],
    pricing: {
      basic: 25,
      pro: 69,
      enterprise: 179
    },
    category: 'saas',
    icon: '📊',
    link: '/excel-to-pdf'
  },
  {
    id: 'powerpoint-to-pdf',
    name: 'PowerPoint to PDF Converter API',
    description: 'Convert PowerPoint presentations to PDF format with slide preservation.',
    features: [
      'PowerPoint to PDF conversion',
      'Slide preservation',
      'API integration',
      'Bulk processing',
      'Quality options',
      'Error handling'
    ],
    pricing: {
      basic: 29,
      pro: 79,
      enterprise: 199
    },
    category: 'saas',
    icon: '📊',
    link: '/powerpoint-to-pdf'
  },
  {
    id: 'html-to-pdf',
    name: 'HTML to PDF Converter API',
    description: 'Convert HTML content to PDF format with CSS styling and responsive design.',
    features: [
      'HTML to PDF conversion',
      'CSS styling support',
      'API integration',
      'Bulk processing',
      'Responsive design',
      'Error handling'
    ],
    pricing: {
      basic: 19,
      pro: 49,
      enterprise: 129
    },
    category: 'saas',
    icon: '🌐',
    link: '/html-to-pdf'
  },
  {
    id: 'markdown-to-pdf',
    name: 'Markdown to PDF Converter API',
    description: 'Convert Markdown content to PDF format with custom styling and themes.',
    features: [
      'Markdown to PDF conversion',
      'Custom themes',
      'API integration',
      'Bulk processing',
      'Styling options',
      'Error handling'
    ],
    pricing: {
      basic: 19,
      pro: 49,
      enterprise: 129
    },
    category: 'saas',
    icon: '📝',
    link: '/markdown-to-pdf'
  },
  {
    id: 'rtf-to-pdf',
    name: 'RTF to PDF Converter API',
    description: 'Convert Rich Text Format documents to PDF with formatting preservation.',
    features: [
      'RTF to PDF conversion',
      'Format preservation',
      'API integration',
      'Bulk processing',
      'Styling options',
      'Error handling'
    ],
    pricing: {
      basic: 19,
      pro: 49,
      enterprise: 129
    },
    category: 'saas',
    icon: '📄',
    link: '/rtf-to-pdf'
  },
  {
    id: 'odt-to-pdf',
    name: 'ODT to PDF Converter API',
    description: 'Convert OpenDocument Text files to PDF format with formatting preservation.',
    features: [
      'ODT to PDF conversion',
      'Format preservation',
      'API integration',
      'Bulk processing',
      'Styling options',
      'Error handling'
    ],
    pricing: {
      basic: 19,
      pro: 49,
      enterprise: 129
    },
    category: 'saas',
    icon: '📄',
    link: '/odt-to-pdf'
  },
  {
    id: 'ods-to-pdf',
    name: 'ODS to PDF Converter API',
    description: 'Convert OpenDocument Spreadsheet files to PDF format with formatting preservation.',
    features: [
      'ODS to PDF conversion',
      'Format preservation',
      'API integration',
      'Bulk processing',
      'Styling options',
      'Error handling'
    ],
    pricing: {
      basic: 19,
      pro: 49,
      enterprise: 129
    },
    category: 'saas',
    icon: '📊',
    link: '/ods-to-pdf'
  },
  {
    id: 'odp-to-pdf',
    name: 'ODP to PDF Converter API',
    description: 'Convert OpenDocument Presentation files to PDF format with slide preservation.',
    features: [
      'ODP to PDF conversion',
      'Slide preservation',
      'API integration',
      'Bulk processing',
      'Quality options',
      'Error handling'
    ],
    pricing: {
      basic: 19,
      pro: 49,
      enterprise: 129
    },
    category: 'saas',
    icon: '📊',
    link: '/odp-to-pdf'
  },
  {
    id: 'epub-to-pdf',
    name: 'EPUB to PDF Converter API',
    description: 'Convert EPUB e-book files to PDF format with page layout optimization.',
    features: [
      'EPUB to PDF conversion',
      'Page optimization',
      'API integration',
      'Bulk processing',
      'Quality options',
      'Error handling'
    ],
    pricing: {
      basic: 29,
      pro: 79,
      enterprise: 199
    },
    category: 'saas',
    icon: '📚',
    link: '/epub-to-pdf'
  },
  {
    id: 'mobi-to-pdf',
    name: 'MOBI to PDF Converter API',
    description: 'Convert MOBI e-book files to PDF format with formatting preservation.',
    features: [
      'MOBI to PDF conversion',
      'Format preservation',
      'API integration',
      'Bulk processing',
      'Quality options',
      'Error handling'
    ],
    pricing: {
      basic: 29,
      pro: 79,
      enterprise: 199
    },
    category: 'saas',
    icon: '📚',
    link: '/mobi-to-pdf'
  },
  {
    id: 'azw-to-pdf',
    name: 'AZW to PDF Converter API',
    description: 'Convert AZW e-book files to PDF format with formatting preservation.',
    features: [
      'AZW to PDF conversion',
      'Format preservation',
      'API integration',
      'Bulk processing',
      'Quality options',
      'Error handling'
    ],
    pricing: {
      basic: 29,
      pro: 79,
      enterprise: 199
    },
    category: 'saas',
    icon: '📚',
    link: '/azw-to-pdf'
  },
  {
    id: 'fb2-to-pdf',
    name: 'FB2 to PDF Converter API',
    description: 'Convert FictionBook files to PDF format with formatting preservation.',
    features: [
      'FB2 to PDF conversion',
      'Format preservation',
      'API integration',
      'Bulk processing',
      'Quality options',
      'Error handling'
    ],
    pricing: {
      basic: 19,
      pro: 49,
      enterprise: 129
    },
    category: 'saas',
    icon: '📚',
    link: '/fb2-to-pdf'
  },
  {
    id: 'djvu-to-pdf',
    name: 'DJVU to PDF Converter API',
    description: 'Convert DJVU files to PDF format with high-quality image preservation.',
    features: [
      'DJVU to PDF conversion',
      'Image preservation',
      'API integration',
      'Bulk processing',
      'Quality options',
      'Error handling'
    ],
    pricing: {
      basic: 29,
      pro: 79,
      enterprise: 199
    },
    category: 'saas',
    icon: '📄',
    link: '/djvu-to-pdf'
  },
  {
    id: 'tiff-to-pdf',
    name: 'TIFF to PDF Converter API',
    description: 'Convert TIFF image files to PDF format with customizable compression.',
    features: [
      'TIFF to PDF conversion',
      'Compression options',
      'API integration',
      'Bulk processing',
      'Quality control',
      'Error handling'
    ],
    pricing: {
      basic: 19,
      pro: 49,
      enterprise: 129
    },
    category: 'saas',
    icon: '🖼️',
    link: '/tiff-to-pdf'
  },
  {
    id: 'png-to-pdf',
    name: 'PNG to PDF Converter API',
    description: 'Convert PNG images to PDF format with customizable page sizes.',
    features: [
      'PNG to PDF conversion',
      'Custom page sizes',
      'API integration',
      'Bulk processing',
      'Quality options',
      'Error handling'
    ],
    pricing: {
      basic: 9,
      pro: 29,
      enterprise: 79
    },
    category: 'saas',
    icon: '🖼️',
    link: '/png-to-pdf'
  },
  {
    id: 'jpg-to-pdf',
    name: 'JPG to PDF Converter API',
    description: 'Convert JPG images to PDF format with customizable compression and quality.',
    features: [
      'JPG to PDF conversion',
      'Compression options',
      'API integration',
      'Bulk processing',
      'Quality control',
      'Error handling'
    ],
    pricing: {
      basic: 9,
      pro: 29,
      enterprise: 79
    },
    category: 'saas',
    icon: '🖼️',
    link: '/jpg-to-pdf'
  },
  {
    id: 'gif-to-pdf',
    name: 'GIF to PDF Converter API',
    description: 'Convert GIF images to PDF format with frame preservation options.',
    features: [
      'GIF to PDF conversion',
      'Frame options',
      'API integration',
      'Bulk processing',
      'Quality control',
      'Error handling'
    ],
    pricing: {
      basic: 15,
      pro: 39,
      enterprise: 99
    },
    category: 'saas',
    icon: '🖼️',
    link: '/gif-to-pdf'
  },
  {
    id: 'bmp-to-pdf',
    name: 'BMP to PDF Converter API',
    description: 'Convert BMP images to PDF format with customizable compression.',
    features: [
      'BMP to PDF conversion',
      'Compression options',
      'API integration',
      'Bulk processing',
      'Quality control',
      'Error handling'
    ],
    pricing: {
      basic: 9,
      pro: 29,
      enterprise: 79
    },
    category: 'saas',
    icon: '🖼️',
    link: '/bmp-to-pdf'
  },
  {
    id: 'webp-to-pdf',
    name: 'WebP to PDF Converter API',
    description: 'Convert WebP images to PDF format with modern compression support.',
    features: [
      'WebP to PDF conversion',
      'Modern compression',
      'API integration',
      'Bulk processing',
      'Quality control',
      'Error handling'
    ],
    pricing: {
      basic: 9,
      pro: 29,
      enterprise: 79
    },
    category: 'saas',
    icon: '🖼️',
    link: '/webp-to-pdf'
  },
  {
    id: 'svg-to-pdf',
    name: 'SVG to PDF Converter API',
    description: 'Convert SVG vector graphics to PDF format with scalable quality.',
    features: [
      'SVG to PDF conversion',
      'Scalable quality',
      'API integration',
      'Bulk processing',
      'Vector preservation',
      'Error handling'
    ],
    pricing: {
      basic: 15,
      pro: 39,
      enterprise: 99
    },
    category: 'saas',
    icon: '🖼️',
    link: '/svg-to-pdf'
  },
  {
    id: 'ico-to-pdf',
    name: 'ICO to PDF Converter API',
    description: 'Convert ICO icon files to PDF format with multiple size support.',
    features: [
      'ICO to PDF conversion',
      'Multiple sizes',
      'API integration',
      'Bulk processing',
      'Quality options',
      'Error handling'
    ],
    pricing: {
      basic: 9,
      pro: 29,
      enterprise: 79
    },
    category: 'saas',
    icon: '🎯',
    link: '/ico-to-pdf'
  },
  {
    id: 'psd-to-pdf',
    name: 'PSD to PDF Converter API',
    description: 'Convert Photoshop PSD files to PDF format with layer preservation.',
    features: [
      'PSD to PDF conversion',
      'Layer preservation',
      'API integration',
      'Bulk processing',
      'Quality options',
      'Error handling'
    ],
    pricing: {
      basic: 39,
      pro: 99,
      enterprise: 249
    },
    category: 'saas',
    icon: '🎨',
    link: '/psd-to-pdf'
  },
  {
    id: 'ai-to-pdf',
    name: 'AI to PDF Converter API',
    description: 'Convert Adobe Illustrator AI files to PDF format with vector preservation.',
    features: [
      'AI to PDF conversion',
      'Vector preservation',
      'API integration',
      'Bulk processing',
      'Quality options',
      'Error handling'
    ],
    pricing: {
      basic: 39,
      pro: 99,
      enterprise: 249
    },
    category: 'saas',
    icon: '🎨',
    link: '/ai-to-pdf'
  },
  {
    id: 'eps-to-pdf',
    name: 'EPS to PDF Converter API',
    description: 'Convert Encapsulated PostScript files to PDF format with vector preservation.',
    features: [
      'EPS to PDF conversion',
      'Vector preservation',
      'API integration',
      'Bulk processing',
      'Quality options',
      'Error handling'
    ],
    pricing: {
      basic: 19,
      pro: 49,
      enterprise: 129
    },
    category: 'saas',
    icon: '🎨',
    link: '/eps-to-pdf'
  },
  {
    id: 'ps-to-pdf',
    name: 'PS to PDF Converter API',
    description: 'Convert PostScript files to PDF format with high-quality rendering.',
    features: [
      'PS to PDF conversion',
      'High-quality rendering',
      'API integration',
      'Bulk processing',
      'Quality options',
      'Error handling'
    ],
    pricing: {
      basic: 19,
      pro: 49,
      enterprise: 129
    },
    category: 'saas',
    icon: '🎨',
    link: '/ps-to-pdf'
  },
  {
    id: 'xps-to-pdf',
    name: 'XPS to PDF Converter API',
    description: 'Convert XML Paper Specification files to PDF format with formatting preservation.',
    features: [
      'XPS to PDF conversion',
      'Format preservation',
      'API integration',
      'Bulk processing',
      'Quality options',
      'Error handling'
    ],
    pricing: {
      basic: 19,
      pro: 49,
      enterprise: 129
    },
    category: 'saas',
    icon: '📄',
    link: '/xps-to-pdf'
  },
  {
    id: 'oxps-to-pdf',
    name: 'OXPS to PDF Converter API',
    description: 'Convert Open XML Paper Specification files to PDF format with formatting preservation.',
    features: [
      'OXPS to PDF conversion',
      'Format preservation',
      'API integration',
      'Bulk processing',
      'Quality options',
      'Error handling'
    ],
    pricing: {
      basic: 19,
      pro: 49,
      enterprise: 129
    },
    category: 'saas',
    icon: '📄',
    link: '/oxps-to-pdf'
  },
  {
    id: 'prn-to-pdf',
    name: 'PRN to PDF Converter API',
    description: 'Convert PRN print files to PDF format with formatting preservation.',
    features: [
      'PRN to PDF conversion',
      'Format preservation',
      'API integration',
      'Bulk processing',
      'Quality options',
      'Error handling'
    ],
    pricing: {
      basic: 19,
      pro: 49,
      enterprise: 129
    },
    category: 'saas',
    icon: '📄',
    link: '/prn-to-pdf'
  },
  {
    id: 'pcl-to-pdf',
    name: 'PCL to PDF Converter API',
    description: 'Convert Printer Command Language files to PDF format with formatting preservation.',
    features: [
      'PCL to PDF conversion',
      'Format preservation',
      'API integration',
      'Bulk processing',
      'Quality options',
      'Error handling'
    ],
    pricing: {
      basic: 19,
      pro: 49,
      enterprise: 129
    },
    category: 'saas',
    icon: '📄',
    link: '/pcl-to-pdf'
  },
  {
    id: 'pclx-to-pdf',
    name: 'PCLX to PDF Converter API',
    description: 'Convert PCL-XL files to PDF format with formatting preservation.',
    features: [
      'PCLX to PDF conversion',
      'Format preservation',
      'API integration',
      'Bulk processing',
      'Quality options',
      'Error handling'
    ],
    pricing: {
      basic: 19,
      pro: 49,
      enterprise: 129
    },
    category: 'saas',
    icon: '📄',
    link: '/pclx-to-pdf'
  },
  {
    id: 'pcl5-to-pdf',
    name: 'PCL5 to PDF Converter API',
    description: 'Convert PCL5 files to PDF format with formatting preservation.',
    features: [
      'PCL5 to PDF conversion',
      'Format preservation',
      'API integration',
      'Bulk processing',
      'Quality options',
      'Error handling'
    ],
    pricing: {
      basic: 19,
      pro: 49,
      enterprise: 129
    },
    category: 'saas',
    icon: '📄',
    link: '/pcl5-to-pdf'
  },
  {
    id: 'pcl6-to-pdf',
    name: 'PCL6 to PDF Converter API',
    description: 'Convert PCL6 files to PDF format with formatting preservation.',
    features: [
      'PCL6 to PDF conversion',
      'Format preservation',
      'API integration',
      'Bulk processing',
      'Quality options',
      'Error handling'
    ],
    pricing: {
      basic: 19,
      pro: 49,
      enterprise: 129
    },
    category: 'saas',
    icon: '📄',
    link: '/pcl6-to-pdf'
  },
  {
    id: 'pcl3-to-pdf',
    name: 'PCL3 to PDF Converter API',
    description: 'Convert PCL3 files to PDF format with formatting preservation.',
    features: [
      'PCL3 to PDF conversion',
      'Format preservation',
      'API integration',
      'Bulk processing',
      'Quality options',
      'Error handling'
    ],
    pricing: {
      basic: 19,
      pro: 49,
      enterprise: 129
    },
    category: 'saas',
    icon: '📄',
    link: '/pcl3-to-pdf'
  },
  {
    id: 'pcl4-to-pdf',
    name: 'PCL4 to PDF Converter API',
    description: 'Convert PCL4 files to PDF format with formatting preservation.',
    features: [
      'PCL4 to PDF conversion',
      'Format preservation',
      'API integration',
      'Bulk processing',
      'Quality options',
      'Error handling'
    ],
    pricing: {
      basic: 19,
      pro: 49,
      enterprise: 129
    },
    category: 'saas',
    icon: '📄',
    link: '/pcl4-to-pdf'
  },
  {
    id: 'pcl5e-to-pdf',
    name: 'PCL5e to PDF Converter API',
    description: 'Convert PCL5e files to PDF format with formatting preservation.',
    features: [
      'PCL5e to PDF conversion',
      'Format preservation',
      'API integration',
      'Bulk processing',
      'Quality options',
      'Error handling'
    ],
    pricing: {
      basic: 19,
      pro: 49,
      enterprise: 129
    },
    category: 'saas',
    icon: '📄',
    link: '/pcl5e-to-pdf'
  },
  {
    id: 'pcl5c-to-pdf',
    name: 'PCL5c to PDF Converter API',
    description: 'Convert PCL5c files to PDF format with formatting preservation.',
    features: [
      'PCL5c to PDF conversion',
      'Format preservation',
      'API integration',
      'Bulk processing',
      'Quality options',
      'Error handling'
    ],
    pricing: {
      basic: 19,
      pro: 49,
      enterprise: 129
    },
    category: 'saas',
    icon: '📄',
    link: '/pcl5c-to-pdf'
  },
  {
    id: 'pcl5gui-to-pdf',
    name: 'PCL5GUI to PDF Converter API',
    description: 'Convert PCL5GUI files to PDF format with formatting preservation.',
    features: [
      'PCL5GUI to PDF conversion',
      'Format preservation',
      'API integration',
      'Bulk processing',
      'Quality options',
      'Error handling'
    ],
    pricing: {
      basic: 19,
      pro: 49,
      enterprise: 129
    },
    category: 'saas',
    icon: '📄',
    link: '/pcl5gui-to-pdf'
  },
  {
    id: 'pcl5e-to-pdf',
    name: 'PCL5e to PDF Converter API',
    description: 'Convert PCL5e files to PDF format with formatting preservation.',
    features: [
      'PCL5e to PDF conversion',
      'Format preservation',
      'API integration',
      'Bulk processing',
      'Quality options',
      'Error handling'
    ],
    pricing: {
      basic: 19,
      pro: 49,
      enterprise: 129
    },
    category: 'saas',
    icon: '📄',
    link: '/pcl5e-to-pdf'
  },
  {
    id: 'pcl5c-to-pdf',
    name: 'PCL5c to PDF Converter API',
    description: 'Convert PCL5c files to PDF format with formatting preservation.',
    features: [
      'PCL5c to PDF conversion',
      'Format preservation',
      'API integration',
      'Bulk processing',
      'Quality options',
      'Error handling'
    ],
    pricing: {
      basic: 19,
      pro: 49,
      enterprise: 129
    },
    category: 'saas',
    icon: '📄',
    link: '/pcl5c-to-pdf'
  },
  {
    id: 'pcl5gui-to-pdf',
    name: 'PCL5GUI to PDF Converter API',
    description: 'Convert PCL5GUI files to PDF format with formatting preservation.',
    features: [
      'PCL5GUI to PDF conversion',
      'Format preservation',
      'API integration',
      'Bulk processing',
      'Quality options',
      'Error handling'
    ],
    pricing: {
      basic: 19,
      pro: 49,
      enterprise: 129
    },
    category: 'saas',
    icon: '📄',
    link: '/pcl5gui-to-pdf'
  }
];

export const getServicesByCategory = (category: Service['category']) => {
  return services.filter(service => service.category === category);
};

export const getPopularServices = () => {
  return services.filter(service => service.popular);
};

export const getNewServices = () => {
  return services.filter(service => service.new);
};

export const getServiceById = (id: string) => {
  return services.find(service => service.id === id);
};