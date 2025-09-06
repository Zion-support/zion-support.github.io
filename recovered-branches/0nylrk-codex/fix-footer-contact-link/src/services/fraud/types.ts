

// Types used across fraud detection modules
import { FraudSeverity } from '@/types/fraud';
export interface AnalysisResult {


  reasons: string[]
// Types used across fraud detection modules;
import {FraudSeverity} from '@/types / fraud';
export interface AnalysisResult {
  is_suspicious: boolean,
  reasons: string[];





>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


}
export interface MessageAnalysisResult extends AnalysisResult {
  severity: FraudSeverity;
}


export interface MessageAnalysisResult extends AnalysisResult {
  severity: FraudSeverity
}

export interface MessageAnalysisResult extends AnalysisResult {
  severity: FraudSeverity
}







export interface EmailAnalysisResult extends AnalysisResult {}
export interface FlagResult {

  success: boolean,
  error?: string;

}






;
export interface SignupCheckResult extends AnalysisResult {}
;



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


