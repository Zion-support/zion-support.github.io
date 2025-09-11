
;
// Export service types and interfaces;

;

export type {
=======

export type {;

;
export type {
=======

;

export type {
=======

export type {;

;
export type {
=======

;

export type {
=======

export type {;

;
export type {
=======

;

export type {
=======

export type {;

;

export type {
=======


export type {;
  PasswordOptions;
  PasswordStrength;
  GeneratedPassword;
} from './passwordGeneratorService';

;

export type {
=======


export type {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  QRCodeOptions;
  QRCodeResult;
  QRCodeTemplate;
} from './qrCodeService';

;

export type {
=======


export type {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  ConversionOptions;
  ConversionResult;
  SupportedFormat;
  FileInfo;
} from './fileConverterService';

;

export type {

export type {;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  TextAnalysisResult;
  BasicTextStats;
  ReadabilityMetrics;
  SentimentAnalysis;
  KeywordAnalysis;
  LanguageDetection;
  EntityExtraction;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
;
// Service categories for easy discovery;
export const SERVICE_CATEGORIES = {
  UTILITIES: {
    name: 'Utility Tools';
    description: 'Essential tools for everyday tasks',
    services: ['urlShortenerpasswordGeneratorqrCodeGenerator'];
  }
  MEDIA: {
    name: 'Media & Files';
    description: 'File conversion and media processing tools',
    services: ['file_converter'];
  }
  ANALYSIS: {
    name: 'Analysis & Insights';
    description: 'Text analysis and content insights',
    services: ['text_analysis'];
  }
} as const;
;
// Service metadata for the application;
export const SERVICES_METADATA = {
  url_shortener: {
    name: 'URL Shortener',

    name: 'URL Shortener',;

    description: 'Create short, trackable URLs with analytics';
    icon: '🔗';
    category: 'UTILITIES';
    features: [;
      'Custom short codes_click tracking_analytics dashboard_expiration datesQR code generation';
    ];
    pricing: 'Free',
    api_endpoint: '/api / url - shortener';
  }
  password_generator: {
  TextSummary
=======
  TextSummary;} from './textAnalysisService';

;
// Service categories for easy discovery;
export const SERVICE_CATEGORIES = {
  UTILITIES: {
    name: 'Utility Tools';
    description: 'Essential tools for everyday tasks',
    services: ['urlShortenerpasswordGeneratorqrCodeGenerator'];
  }
  MEDIA: {
    name: 'Media & Files';
    description: 'File conversion and media processing tools',
    services: ['file_converter'];
  }
  ANALYSIS: {
    name: 'Analysis & Insights';
    description: 'Text analysis and content insights',
    services: ['text_analysis'];
  }
} as const;
;
// Service metadata for the application;
export const SERVICES_METADATA = {
  url_shortener: {
    name: 'URL Shortener',

=======

    name: 'URL Shortener',;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    description: 'Create short, trackable URLs with analytics';
    icon: '🔗';
    category: 'UTILITIES';
    features: [;
      'Custom short codes_click tracking_analytics dashboard_expiration datesQR code generation';
    ];

    pricing: 'Free',
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    name: 'Password Generator';
    description: 'Generate secure passwords with strength analysis';
    icon: '🔐';
    category: 'UTILITIES';
    pricing: 'Free',
    api_endpoint: '/api / password - generator';
=======
    features: [;
      'Multiple generation modes_strength analysis_custom character sets_password history_security recommendations';
    ];

    pricing: 'Free',
    api_endpoint: '/api / password - generator';
  }
  qrCodeGenerator: {
    name: 'QR Code Generator';
    description: 'Create QR codes for various purposes';
    icon: '📱';
    category: 'UTILITIES';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    pricing: 'Free',
    api_endpoint: '/api / qr - code - generator';
  }
  file_converter: {
    name: 'File Converter';
    description: 'Convert files between different formats';
    icon: '🔄';
    category: 'MEDIA';
    pricing: 'Free (Basic) / $9 && 9.99/month (Pro)',

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
