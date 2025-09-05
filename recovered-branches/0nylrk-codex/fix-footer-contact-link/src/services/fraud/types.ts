
// Types used across fraud detection modules

export interface AnalysisResult {_isSuspicious: boolean;
  reasons: string[];}

export interface MessageAnalysisResult extends AnalysisResult {_severity: FraudSeverity;}

export interface EmailAnalysisResult extends AnalysisResult {}

export interface FlagResult {_success: boolean;
  error?: string;}

export interface SignupCheckResult extends AnalysisResult {}
