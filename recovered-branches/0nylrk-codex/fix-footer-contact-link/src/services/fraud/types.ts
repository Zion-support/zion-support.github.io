// Types used across fraud detection modules;
import { FraudSeverity } from "@/types/fraud";"
export interface AnalysisResult {
  // TODO: Implement
}
  isSuspicious: boolean;,
  reasons: string[];
}
export interface MessageAnalysisResult extends AnalysisResult {
  // TODO: Implement
}
  severity: FraudSeverity;
}



export interface MessageAnalysisResult extends AnalysisResult {
  // TODO: Implement
}
  severity: FraudSeverity;
}



export interface EmailAnalysisResult extends AnalysisResult {}
export interface FlagResult {
  // TODO: Implement
}
}


;
export interface SignupCheckResult extends AnalysisResult {}
;

;

export interface MessageAnalysisResult extends AnalysisResult {
  // TODO: Implement
}
  severity: FraudSeverity;
}

export interface EmailAnalysisResult extends AnalysisResult {}
export interface FlagResult {
  // TODO: Implement
}
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
"