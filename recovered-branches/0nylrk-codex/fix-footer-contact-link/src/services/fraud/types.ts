
<<<<<<< HEAD
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
export interface MessageAnalysisResult extends AnalysisResult {
  severity: FraudSeverity
}
<<<<<<< HEAD
=======
=======



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


>>>>>>> main

export interface MessageAnalysisResult extends AnalysisResult {
  severity: FraudSeverity
}

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
=======
export interface MessageAnalysisResult extends AnalysisResult {
  severity: FraudSeverity
}

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export interface EmailAnalysisResult extends AnalysisResult {}
export interface FlagResult {

  success: boolean

  error?: string
}
<<<<<<< HEAD
export interface SignupCheckResult extends AnalysisResult {}
<<<<<<< HEAD
=======
;
export interface SignupCheckResult extends AnalysisResult {}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> main
