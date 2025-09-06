
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


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
=======

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

export interface MessageAnalysisResult extends AnalysisResult {
  severity: FraudSeverity
}


<<<<<<< HEAD

export interface EmailAnalysisResult extends AnalysisResult {}
export interface FlagResult {

  success: boolean,
  error?: string;

}


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
;
export interface SignupCheckResult extends AnalysisResult {}
;

<<<<<<< HEAD
=======
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
;

export interface MessageAnalysisResult extends AnalysisResult {
  severity: FraudSeverity
}

export interface EmailAnalysisResult extends AnalysisResult {}
export interface FlagResult {

  success: boolean

  error?: string
}
export interface SignupCheckResult extends AnalysisResult {}
;
export interface SignupCheckResult extends AnalysisResult {}
;
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
