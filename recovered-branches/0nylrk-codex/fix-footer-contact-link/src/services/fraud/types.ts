
<<<<<<< HEAD
// Types used across fraud detection modules
import { FraudSeverity } from '@/types/fraud';
export interface AnalysisResult {

  isSuspicious: boolean

  reasons: string[]
=======
// Types used across fraud detection modules;
import { FraudSeverity } from '@/types/fraud',;
export interface AnalysisResult {;
  isSuspicious: boolean;
  reasons: string[];
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
export interface MessageAnalysisResult extends AnalysisResult {
  severity: FraudSeverity
}
<<<<<<< HEAD
=======

export interface MessageAnalysisResult extends AnalysisResult {
  severity: FraudSeverity
}

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export interface EmailAnalysisResult extends AnalysisResult {}
export interface FlagResult {

  success: boolean

  error?: string
}
<<<<<<< HEAD
export interface SignupCheckResult extends AnalysisResult {}
=======
;
export interface SignupCheckResult extends AnalysisResult {}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
