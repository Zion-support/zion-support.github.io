
// Types used across fraud detection modules
import { FraudSeverity } from '@/types/fraud';
export interface AnalysisResult {
}
export interface MessageAnalysisResult extends AnalysisResult {
  severity: FraudSeverity;
}
export interface EmailAnalysisResult extends AnalysisResult {}
export interface FlagResult {

}
;
