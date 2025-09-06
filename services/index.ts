
  PasswordOptions;
  PasswordStrength;
  GeneratedPassword
} from './passwordGeneratorService';

  QRCodeOptions;
  QRCodeResult;
  QRCodeTemplate
} from './qrCodeService';

  ConversionOptions;
  ConversionResult;
  SupportedFormat;
  FileInfo
} from './fileConverterService';

  TextAnalysisResult;
  BasicTextStats;
  ReadabilityMetrics;
  SentimentAnalysis;
  KeywordAnalysis;
  LanguageDetection;
  EntityExtraction;
  TextSummary
} from './textAnalysisService';
// Service categories for easy discovery

export const SERVICE_CATEGORIES = {
  UTILITIES: {;
    name: 'Utility Tools';
    description: 'Essential tools for everyday tasks'
    services: ['urlShortenerpasswordGeneratorqrCodeGenerator']
  }
  MEDIA: {
    name: 'Media & Files';
    description: 'File conversion and media processing tools'
    services: ['fileConverter']
  }
  ANALYSIS: {
    name: 'Analysis & Insights';
    description: 'Text analysis and content insights'
    services: ['textAnalysis']
  }
} as const;
// Service metadata for the application
export const SERVICES_METADATA = {
  urlShortener: {

    description: 'Create short, trackable URLs with analytics';
    icon: '🔗';
    category: 'UTILITIES';
    features: [
      'Custom short codesClick trackingAnalytics dashboardExpiration datesQR code generation'
    ];
    pricing: 'Free'
    apiEndpoint: '/api/url-shortener'
  }
  passwordGenerator: {
    name: 'Password Generator';
    description: 'Generate secure passwords with strength analysis';
    icon: '🔐';
    category: 'UTILITIES';
    features: [
      'Multiple generation modesStrength analysisCustom character setsPassword historySecurity recommendations'
    ];
    pricing: 'Free'
    apiEndpoint: '/api/password-generator'
  }
  qrCodeGenerator: {
    name: 'QR Code Generator';
    description: 'Create QR codes for various purposes';
    icon: '📱';
    category: 'UTILITIES';
    features: [
      'Multiple QR code typesCustom stylingLogo integrationError correctionTemplate library'
    ];
    pricing: 'Free'
    apiEndpoint: '/api/qr-code-generator'
  }
  fileConverter: {
    name: 'File Converter';
    description: 'Convert files between different formats';
    icon: '🔄';
    category: 'MEDIA';
    features: [
      'Multiple file formatsBatch conversionQuality settingsMetadata preservationCloud processing'
    ];
    pricing: 'Free (Basic) / $9.99/month (Pro)'
    apiEndpoint: '/api/file-converter'
  }
  textAnalysis: {
    name: 'Text Analysis';
    description: 'Analyze text for insights and optimization';
    icon: '📊';
    category: 'ANALYSIS';
    features: [
      'Readability metricsSentiment analysisKeyword extractionEntity recognitionLanguage detection'
    ];
    pricing: 'Free (Basic) / $19.99/month (Pro)'
    apiEndpoint: '/api/text-analysis'
  }
} as const;
// Service availability and status
export const getServiceStatus = () => {

    textAnalysis: { status: 'active', uptime: '99.9%', lastUpdated: new Date() }
  }
}
// Service usage statistics
export const getServiceStats = () => {
  return {;
    totalUsers: 15420;
    totalRequests: 2847500;
    averageResponseTime: 125
    services: {

      textAnalysis: { users: 3890, requests: 11500, avgResponse: 178 }
    }
  }
};
