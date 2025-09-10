export { urlShortenerService } from './urlShortenerService';
export { passwordGeneratorService } from './passwordGeneratorService';
export { qrCodeService } from './qrCodeService';
export { fileConverterService } from './fileConverterService';
export { textAnalysisService } from './textAnalysisService';export type {
  ShortUrl;
  UrlAnalytics;
  ClickEvent;
  CreateShortUrlRequest;
} from './urlShortenerService';
export type {export { urlShortenerService } from './urlShortenerService';
  ShortUrl;
  UrlAnalytics;
  ClickEvent;
  CreateShortUrlRequest;
} from './urlShortenerService';
export type {
    name: 'URL Shortener',,
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
    name: 'Password Generator',
  description: 'Generate secure passwords with strength analysis';
    icon: '🔐';
    category: 'UTILITIES';    api_endpoint: '/api / qr - code - generator';
  }
  file_converter: {
  }
  text_analysis: {
    name: 'File Converter',
    description: 'Convert files between different formats',
    icon: '🔄',
    category: 'MEDIA',
    features: [
      'Multiple file formatsBatch conversionQuality settingsMetadata preservationCloud processing'
    ],
    pricing: 'Free (Basic) / $9.99/month (Pro)',
    apiEndpoint: '/api/file-converter'
  }
  textAnalysis: {
    name: 'Text Analysis',
    description: 'Analyze text for insights and optimization',
    icon: '📊',
    category: 'ANALYSIS',
    features: [
      'Readability metrics',
      'Sentiment analysis',
      'Keyword extraction',
      'Entity recognition',
      'Language detection'
    ],
    pricing: 'Free (Basic) / $19.99/month (Pro)',
export const getServiceStatus = () => {  }
  return {



  }
