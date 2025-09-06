
// Types used across fraud detection modules
import { FraudSeverity } from '@/types/fraud';
export interface AnalysisResult {
<<<<<<< HEAD
  isSuspicious: boolean;
=======
  isSuspicious: boolean
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  reasons: string[]
}
export interface MessageAnalysisResult extends AnalysisResult {
  severity: FraudSeverity
}
export interface EmailAnalysisResult extends AnalysisResult {}
export interface FlagResult {
<<<<<<< HEAD
  success: boolean;
=======
  success: boolean
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  error?: string
}
export interface SignupCheckResult extends AnalysisResult {}