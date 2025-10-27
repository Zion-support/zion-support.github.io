export interface AccessibilityConfig {
  enableSkipLinks: boolean;
  enableFocusManagement: boolean;
  enableScreenReaderSupport: boolean;
  enableKeyboardNavigation: boolean;
  enableHighContrast: boolean;
  enableReducedMotion: boolean;
  enableVoiceOver: boolean;
  enableJAWS: boolean;
  enableNVDA: boolean;
  enableChromeVox: boolean;
}

export interface AccessibilityFeatures {
  skipLinks: boolean;
  focusManagement: boolean;
  screenReaderSupport: boolean;
  keyboardNavigation: boolean;
  highContrast: boolean;
  reducedMotion: boolean;
  voiceOver: boolean;
  jaws: boolean;
  nvda: boolean;
  chromeVox: boolean;
}

export interface AccessibilityTestResult {
  passed: boolean;
  score: number;
  issues: string[];
  recommendations: string[];
}

export interface AccessibilityAudit {
  overallScore: number;
  passedTests: number;
  totalTests: number;
  results: AccessibilityTestResult[];
  timestamp: Date;
}

export interface AccessibilityContextType {
  config: AccessibilityConfig;
  features: AccessibilityFeatures;
  updateConfig: (config: Partial<AccessibilityConfig>) => void;
  runAudit: () => Promise<AccessibilityAudit>;
  isAccessible: boolean;
  score: number;
}