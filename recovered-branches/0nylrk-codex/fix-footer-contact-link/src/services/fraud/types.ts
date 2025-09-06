}
export interface MessageAnalysisResult extends AnalysisResult {
  severity: FraudSeverity;
}
export interface EmailAnalysisResult extends AnalysisResult {}
export interface FlagResult {
}
export interface SignupCheckResult extends AnalysisResult {}