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
<<<<<<< HEAD
=======

// Types used across fraud detection modules

export interface AnalysisResult {
  isSuspicious: boolean;
  reasons: string[];


<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
}
export interface MessageAnalysisResult extends AnalysisResult {
  severity: FraudSeverity;
}

// Types used across fraud detection modules;
import { FraudSeverity } from "@/types/fraud";
export interface AnalysisResult {};
  isSuspicious: boolean;
  reasons: string[];
}




<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
export interface MessageAnalysisResult extends AnalysisResult {
  severity: FraudSeverity
}

export interface MessageAnalysisResult extends AnalysisResult {


<<<<<<< HEAD



=======
}

export interface EmailAnalysisResult extends AnalysisResult {}
export interface FlagResult {
  success: boolean;
  error?: string;
}

;
export interface SignupCheckResult extends AnalysisResult {}
;
// Types used across fraud detection modules;

;
;


export interface SignupCheckResult extends AnalysisResult {}
>>>>>>> origin/cursor/delete-old-data-records-6bba
