
// Types used across fraud detection modules
import { FraudSeverity } from '@/types/fraud';
export interface AnalysisResult {


  reasons: string[]
// Types used across fraud detection modules;
import {FraudSeverity} from '@/types / fraud';
export interface AnalysisResult {
  is_suspicious: boolean,
  reasons: string[];



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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

export interface MessageAnalysisResult extends AnalysisResult {
  severity: FraudSeverity
}

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======


export interface EmailAnalysisResult extends AnalysisResult {}
export interface FlagResult {

  success: boolean,
  error?: string;

}


;
export interface SignupCheckResult extends AnalysisResult {}
;

=======
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
