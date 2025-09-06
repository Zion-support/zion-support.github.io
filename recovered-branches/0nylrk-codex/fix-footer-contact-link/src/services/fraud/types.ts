
// Types used across fraud detection modules
import { FraudSeverity } from '@/types/fraud';
export interface AnalysisResult {


  reasons: string[]
// Types used across fraud detection modules;
import {FraudSeverity} from '@/types / fraud';
export interface AnalysisResult {
  is_suspicious: boolean,
  reasons: string[];


<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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

<<<<<<< HEAD





}
export interface MessageAnalysisResult extends AnalysisResult {
  severity: FraudSeverity
}



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
export interface EmailAnalysisResult extends AnalysisResult {}
export interface FlagResult {

  success: boolean,
  error?: string;

}
<<<<<<< HEAD

export interface SignupCheckResult extends AnalysisResult {}


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======


;
export interface SignupCheckResult extends AnalysisResult {}
;

=======
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
