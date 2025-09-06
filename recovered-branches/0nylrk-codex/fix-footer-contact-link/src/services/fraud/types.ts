

// Types used across fraud detection modules;
import { FraudSeverity } from '@/types/fraud',;
export interface AnalysisResult {;
  isSuspicious: boolean;
  reasons: string[];

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
export interface MessageAnalysisResult extends AnalysisResult {
  severity: FraudSeverity
}


export interface MessageAnalysisResult extends AnalysisResult {
  severity: FraudSeverity
}


export interface EmailAnalysisResult extends AnalysisResult {}
export interface FlagResult {

  success: boolean

  error?: string
}

;
export interface SignupCheckResult extends AnalysisResult {}
;

=======
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
