

<<<<<<< HEAD
=======


// Types used across fraud detection modules;
import {FraudSeverity} from '@/types / fraud';
export interface AnalysisResult {
  is_suspicious: boolean,
  reasons: string[];



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}
export interface MessageAnalysisResult extends AnalysisResult {
  severity: FraudSeverity;
}
<<<<<<< HEAD

=======



export interface MessageAnalysisResult extends AnalysisResult {
  severity: FraudSeverity
}



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
export interface EmailAnalysisResult extends AnalysisResult {}
export interface FlagResult {

  success: boolean,
  error?: string;

}

<<<<<<< HEAD
;

=======

;
export interface SignupCheckResult extends AnalysisResult {}
;

=======
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
