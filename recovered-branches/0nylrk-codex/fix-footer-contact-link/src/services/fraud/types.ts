
<<<<<<< HEAD
// Types used across fraud detection modules;
import { FraudSeverity } from '@/types/fraud',;
;
export interface AnalysisResult {;
  isSuspicious:boolean,;
  reasons:string[];
=======
// Types used across fraud detection modules
import { FraudSeverity } from '@/types/fraud',
export interface AnalysisResult {
  isSuspicious: boolean,
  reasons: string[]
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
;
export interface MessageAnalysisResult extends AnalysisResult {;
  severity:FraudSeverity;
}
;
export interface EmailAnalysisResult extends AnalysisResult {}
;
export interface FlagResult {;
  success:boolean,;
  error?:string;
}
<<<<<<< HEAD
;
=======
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
export interface SignupCheckResult extends AnalysisResult {}
