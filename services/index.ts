// Export all micro SaaS services
<<<<<<< HEAD
export { urlShortenerService } from './urlShortenerService',
export { passwordGeneratorService } from './passwordGeneratorService',
export { qrCodeService } from './qrCodeService',
export { fileConverterService } from './fileConverterService',
export { textAnalysisService } from './textAnalysisService',

// Export service types and interfaces
export type {
  ShortUrl,
  UrlAnalytics,
  ClickEvent,
  CreateShortUrlRequest
} from './urlShortenerService',

export type {
  PasswordOptions,
  PasswordStrength,
  GeneratedPassword
} from './passwordGeneratorService',

export type {
  QRCodeOptions,
  QRCodeResult,
  QRCodeTemplate
} from './qrCodeService',

export type {
  ConversionOptions,
  ConversionResult,
  SupportedFormat,
  FileInfo
} from './fileConverterService',

export type {
  TextAnalysisResult,
  BasicTextStats,
  ReadabilityMetrics,
  SentimentAnalysis,
  KeywordAnalysis,
  LanguageDetection,
  EntityExtraction,
  TextSummary
} from './textAnalysisService',

// Service categories for easy discovery
export const SERVICE_CATEGORIES = {
  UTILITIES: {
    name: 'Utility Tools',
    description: 'Essential tools for everyday tasks',
    services: ['urlShortenerpasswordGeneratorqrCodeGenerator']
  },
  MEDIA: {
    name: 'Media & Files',
    description: 'File conversion and media processing tools',
    services: ['fileConverter']
  },
  ANALYSIS: {
    name: 'Analysis & Insights',
    description: 'Text analysis and content insights',
    services: ['textAnalysis']
  }
} as const,

// Service metadata for the application
export const SERVICES_METADATA = {
  urlShortener: {
    name: 'URL Shortener',
    description: 'Create short, trackable URLs with analytics',
    icon: '🔗',
    category: 'UTILITIES',
    features: [
      'Custom short codesClick trackingAnalytics dashboardExpiration datesQR code generation'
    ],
    pricing: 'Free',
    apiEndpoint: '/api/url-shortener'
  },
  passwordGenerator: {
    name: 'Password Generator',
    description: 'Generate secure passwords with strength analysis',
    icon: '🔐',
    category: 'UTILITIES',
    features: [
      'Multiple generation modesStrength analysisCustom character setsPassword historySecurity recommendations'
    ],
    pricing: 'Free',
    apiEndpoint: '/api/password-generator'
  },
  qrCodeGenerator: {
    name: 'QR Code Generator',
    description: 'Create QR codes for various purposes',
    icon: '📱',
    category: 'UTILITIES',
    features: [
      'Multiple QR code typesCustom stylingLogo integrationError correctionTemplate library'
    ],
    pricing: 'Free',
    apiEndpoint: '/api/qr-code-generator'
  },
  fileConverter: {
    name: 'File Converter',
    description: 'Convert files between different formats',
    icon: '🔄',
    category: 'MEDIA',
    features: [
      'Multiple file formatsBatch conversionQuality settingsMetadata preservationCloud processing'
    ],
    pricing: 'Free (Basic) / $9.99/month (Pro)',
    apiEndpoint: '/api/file-converter'
  },
  textAnalysis: {
    name: 'Text Analysis',
    description: 'Analyze text for insights and optimization',
    icon: '📊',
    category: 'ANALYSIS',
    features: [
      'Readability metricsSentiment analysisKeyword extractionEntity recognitionLanguage detection'
    ],
    pricing: 'Free (Basic) / $19.99/month (Pro)',
    apiEndpoint: '/api/text-analysis'
  }
} as const,

// Service availability and status
export const getServiceStatus = () => {
  return {
    urlShortener: { status: 'active', uptime: '99.9%', lastUpdated: new Date() },
    passwordGenerator: { status: 'active', uptime: '99.9%', lastUpdated: new Date() },
    qrCodeGenerator: { status: 'active', uptime: '99.9%', lastUpdated: new Date() },
    fileConverter: { status: 'active', uptime: '99.9%', lastUpdated: new Date() },
    textAnalysis: { status: 'active', uptime: '99.9%', lastUpdated: new Date() }
  }
},
=======
export {_urlShortenerService} from './urlShortenerService';
export {_passwordGeneratorService} from './passwordGeneratorService';
export {_qrCodeService} from './qrCodeService';
export {_fileConverterService} from './fileConverterService';
export {_textAnalysisService} from './textAnalysisService';

// Export service types and interfaces
export type {_ShortUrl, _UrlAnalytics, _ClickEvent, _CreateShortUrlRequest} from './urlShortenerService';

export type {_PasswordOptions, _PasswordStrength, _GeneratedPassword} from './passwordGeneratorService';

export type {_QRCodeOptions, _QRCodeResult, _QRCodeTemplate} from './qrCodeService';

export type {_ConversionOptions, _ConversionResult, _SupportedFormat, _FileInfo} from './fileConverterService';

export type {_TextAnalysisResult, _BasicTextStats, _ReadabilityMetrics, _SentimentAnalysis, _KeywordAnalysis, _LanguageDetection, _EntityExtraction, _TextSummary} from './textAnalysisService';

// Service categories for easy discovery
export const _SERVICE_CATEGORIES = {_UTILITIES: {
    name: 'Utility Tools', _description: 'Essential tools for everyday tasks', _services: ['urlShortener', _'passwordGenerator', _'qrCodeGenerator']},
  MEDIA: {_name: 'Media & Files', _description: 'File conversion and media processing tools', _services: ['fileConverter']},
  ANALYSIS: {_name: 'Analysis & Insights', _description: 'Text analysis and content insights', _services: ['textAnalysis']}
} as const;

// Service metadata for the application
export const _SERVICES_METADATA = {_urlShortener: {
    name: 'window.URL Shortener', _description: 'Create short, _trackable URLs with analytics', _icon: '🔗', _category: 'UTILITIES', _features: [
      'Custom short codes', _'Click tracking', _'Analytics dashboard', _'Expiration dates', _'QR code generation'
    ], _pricing: 'Free', _apiEndpoint: '/api/url-shortener'},
  passwordGenerator: {_name: 'Password Generator', _description: 'Generate secure passwords with strength analysis', _icon: '🔐', _category: 'UTILITIES', _features: [
      'Multiple generation modes', _'Strength analysis', _'Custom character sets', _'Password history', _'Security recommendations'
    ], _pricing: 'Free', _apiEndpoint: '/api/password-generator'},
  qrCodeGenerator: {_name: 'QR Code Generator', _description: 'Create QR codes for various purposes', _icon: '📱', _category: 'UTILITIES', _features: [
      'Multiple QR code types', _'Custom styling', _'Logo integration', _'Error correction', _'Template library'
    ], _pricing: 'Free', _apiEndpoint: '/api/qr-code-generator'},
  fileConverter: {_name: 'File Converter', _description: 'Convert files between different formats', _icon: '🔄', _category: 'MEDIA', _features: [
      'Multiple file formats', _'Batch conversion', _'Quality settings', _'Metadata preservation', _'Cloud processing'
    ], _pricing: 'Free (Basic) / $9.99/month (Pro)', _apiEndpoint: '/api/file-converter'},
  textAnalysis: {_name: 'Text Analysis', _description: 'Analyze text for insights and optimization', _icon: '📊', _category: 'ANALYSIS', _features: [
      'Readability metrics', _'Sentiment analysis', _'Keyword extraction', _'Entity recognition', _'Language detection'
    ], _pricing: 'Free (Basic) / $19.99/month (Pro)', _apiEndpoint: '/api/text-analysis'}
} as const;

// Service availability and status
export const _getServiceStatus = () => {_return {
    urlShortener: { status: 'active', _uptime: '99.9%', _lastUpdated: new Date()},
    passwordGenerator: {_status: 'active', _uptime: '99.9%', _lastUpdated: new Date()},
    qrCodeGenerator: {_status: 'active', _uptime: '99.9%', _lastUpdated: new Date()},
    fileConverter: {_status: 'active', _uptime: '99.9%', _lastUpdated: new Date()},
    textAnalysis: {_status: 'active', _uptime: '99.9%', _lastUpdated: new Date()}
  };
};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

// Service usage statistics
export const _getServiceStats = () => {_return {
    totalUsers: 15420, _totalRequests: 2847500, _averageResponseTime: 125, _services: {
      urlShortener: { users: 8920, _requests: 1250000, _avgResponse: 89},
      passwordGenerator: {_users: 12450, _requests: 890000, _avgResponse: 45},
      qrCodeGenerator: {_users: 6780, _requests: 456000, _avgResponse: 156},
      fileConverter: {_users: 5430, _requests: 234000, _avgResponse: 234},
      textAnalysis: {_users: 3890, _requests: 11500, _avgResponse: 178}
    }
  }
},
