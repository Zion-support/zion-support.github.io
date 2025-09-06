
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
}
export interface MessageAnalysisResult extends AnalysisResult {
  severity: FraudSeverity
}
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
export interface MessageAnalysisResult extends AnalysisResult {
  severity: FraudSeverity
}

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
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
