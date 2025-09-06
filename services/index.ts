// Export all micro SaaS services
export { urlShortenerService } from './urlShortenerService';
export { passwordGeneratorService } from './passwordGeneratorService';
export { qrCodeService } from './qrCodeService';
export { fileConverterService } from './fileConverterService';
export { textAnalysisService } from './textAnalysisService';

// Export service types and interfaces
export type {
  ShortUrl;
  UrlAnalytics;
  ClickEvent;
  CreateShortUrlRequest
} from './urlShortenerService';

export type {
  PasswordOptions;
  PasswordStrength;
  GeneratedPassword
} from './passwordGeneratorService';

export type {
  QRCodeOptions;
  QRCodeResult;
  QRCodeTemplate
} from './qrCodeService';

export type {
  ConversionOptions;
  ConversionResult;
  SupportedFormat;
  FileInfo
} from './fileConverterService';

export type {
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
export const SERVICE_CATEGORIES = null;
