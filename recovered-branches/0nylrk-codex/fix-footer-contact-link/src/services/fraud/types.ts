<<<<<<< HEAD
=======
// Types used across fraud detection modules
import { FraudSeverity } from "@/types/fraud";
export interface AnalysisResult {
  isSuspicious: boolean;
  reasons: string[];
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
}
export interface MessageAnalysisResult extends AnalysisResult {
  severity: FraudSeverity;
}


<<<<<<< HEAD
=======
<<<<<<< HEAD
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
  severity: FraudSeverity;
}


<<<<<<< HEAD

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export interface EmailAnalysisResult extends AnalysisResult {}
export interface FlagResult {
}
<<<<<<< HEAD


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

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
export interface EmailAnalysisResult extends AnalysisResult {}
export interface FlagResult {
  success: boolean;
  error?: string;
}
export interface SignupCheckResult extends AnalysisResult {}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
;
export interface SignupCheckResult extends AnalysisResult {}
;
;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


;
export interface SignupCheckResult extends AnalysisResult {}
;

;

export interface SignupCheckResult extends AnalysisResult {}
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
