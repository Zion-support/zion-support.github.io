
// Types used across fraud detection modules
<<<<<<< HEAD
import { FraudSeverity } from '@/types/fraud',
export interface AnalysisResult {
  isSuspicious: boolean,
  reasons: string[]
}

export interface MessageAnalysisResult extends AnalysisResult {
  severity: FraudSeverity
}

export interface EmailAnalysisResult extends AnalysisResult {}

export interface FlagResult {
  success: boolean,
  error?: string
}
=======

export interface AnalysisResult {_isSuspicious: boolean;
  reasons: string[];}

export interface MessageAnalysisResult extends AnalysisResult {_severity: FraudSeverity;}

export interface EmailAnalysisResult extends AnalysisResult {}

export interface FlagResult {_success: boolean;
  error?: string;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export interface SignupCheckResult extends AnalysisResult {}
