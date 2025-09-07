// Types used across fraud detection modules
import { FraudSeverity } from "@/types/fraud";
export interface AnalysisResult {
  isSuspicious: boolean;
  reasons: string[];
}
export interface MessageAnalysisResult extends AnalysisResult {
  severity: FraudSeverity;
}

<<<<<<< HEAD


=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
export interface MessageAnalysisResult extends AnalysisResult {
  severity: FraudSeverity;
}

<<<<<<< HEAD


export interface EmailAnalysisResult extends AnalysisResult {}
export interface FlagResult {
}


;
export interface SignupCheckResult extends AnalysisResult {}
;

;

export interface MessageAnalysisResult extends AnalysisResult {
  severity: FraudSeverity
}

export interface EmailAnalysisResult extends AnalysisResult {}
export interface FlagResult {
  success: boolean;
  error?: string;
}
export interface SignupCheckResult extends AnalysisResult {}
;
export interface SignupCheckResult extends AnalysisResult {}
;
;


;
export interface SignupCheckResult extends AnalysisResult {}
;

;

export interface SignupCheckResult extends AnalysisResult {}
=======
;
export interface SignupCheckResult extends AnalysisResult {}
;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
