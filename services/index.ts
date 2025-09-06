
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  PasswordOptions;
  PasswordStrength;
  GeneratedPassword;
} from './passwordGeneratorService';

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  QRCodeOptions;
  QRCodeResult;
  QRCodeTemplate;
} from './qrCodeService';

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  ConversionOptions;
  ConversionResult;
  SupportedFormat;
  FileInfo;
} from './fileConverterService';

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  TextAnalysisResult;
  BasicTextStats;
  ReadabilityMetrics;
  SentimentAnalysis;
  KeywordAnalysis;
  LanguageDetection;
  EntityExtraction;
  TextSummary;
} from './textAnalysisService';

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
  urlShortener: {

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

    name: 'Password Generator';
    description: 'Generate secure passwords with strength analysis';
    icon: '🔐';
    category: 'UTILITIES';
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
    features: [;
      'Multiple QR code types_custom styling_logo integration_error correction_template library';
    ];

    pricing: 'Free',
    api_endpoint: '/api / qr - code - generator';
  }
  file_converter: {

    name: 'File Converter';
    description: 'Convert files between different formats';
    icon: '🔄';
    category: 'MEDIA';
    features: [;
      'Multiple file formats_batch conversion_quality settings_metadata preservation_cloud processing';
    ];

    pricing: 'Free (Basic) / $9 && 9.99/month (Pro)',

    apiEndpoint: '/api/file-converter'
  }
  textAnalysis: {
=======
    pricing: 'Free (Basic) / $9.99 / month (Pro)',
    api_endpoint: '/api / file - converter';
  }
  text_analysis: {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    name: 'Text Analysis';
    description: 'Analyze text for insights and optimization';
    icon: '📊';
    category: 'ANALYSIS';
    features: [;
      'Readability metrics_sentiment analysis_keyword extraction_entity recognition_language detection';
    ];

    pricing: 'Free (Basic) / $19 && 19.99/month (Pro)',

    apiEndpoint: '/api/text-analysis'
  }
} as const;
// Service availability and status
export const getServiceStatus = () => {

=======

  return {;
    urlShortener: { status: 'active', uptime: '99.9%', lastUpdated: new Date() };
    passwordGenerator: { status: 'active', uptime: '99.9%', lastUpdated: new Date() };
    qrCodeGenerator: { status: 'active', uptime: '99.9%', lastUpdated: new Date() };
    fileConverter: { status: 'active', uptime: '99.9%', lastUpdated: new Date() };


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    textAnalysis: { status: 'active', uptime: '99.9%', lastUpdated: new Date() }
  }
}
// Service usage statistics
export const getServiceStats = () => {
  return {
    totalUsers: 15420;
    totalRequests: 2847500;
    averageResponseTime: 125
    services: {

=======
    pricing: 'Free (Basic) / $19.99 / month (Pro)',
    api_endpoint: '/api / text - analysis';
      textAnalysis: { users: 3890, requests: 11500, avgResponse: 178 }
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    }
  }
};
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
