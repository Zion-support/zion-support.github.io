
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


// Types used across fraud detection modules;
import {FraudSeverity} from '@/types / fraud';
export interface AnalysisResult {
  is_suspicious: boolean,
  reasons: string[];



}
export interface MessageAnalysisResult extends AnalysisResult {
  severity: FraudSeverity;
}


<<<<<<< HEAD

// Types used across fraud detection modules
import { FraudSeverity } from '@/types/fraud';
export interface AnalysisResult {

  isSuspicious: boolean

  reasons: string[]
// Types used across fraud detection modules;
import { FraudSeverity } from '@/types/fraud',;
export interface AnalysisResult {;
  isSuspicious: boolean;
  reasons: string[];
}
export interface MessageAnalysisResult extends AnalysisResult {
  severity: FraudSeverity
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

export interface MessageAnalysisResult extends AnalysisResult {
  severity: FraudSeverity
}


<<<<<<< HEAD
;
export interface SignupCheckResult extends AnalysisResult {}
;

;

export interface MessageAnalysisResult extends AnalysisResult {
  severity: FraudSeverity
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

export interface EmailAnalysisResult extends AnalysisResult {}
export interface FlagResult {

<<<<<<< HEAD
  success: boolean

  error?: string
}
export interface SignupCheckResult extends AnalysisResult {}
;
export interface SignupCheckResult extends AnalysisResult {}
;
;
=======
  success: boolean,
  error?: string;

}


;
export interface SignupCheckResult extends AnalysisResult {}
;

=======
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
