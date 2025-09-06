<<<<<<< HEAD

// Types used across fraud detection modules
import { FraudSeverity } from '@/types/fraud';
export interface AnalysisResult {

  isSuspicious: boolean

  reasons: string[]
=======
// Types used across fraud detection modules;
import {FraudSeverity} from '@/types / fraud';
export interface AnalysisResult {
  is_suspicious: boolean,
  reasons: string[];
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
export interface MessageAnalysisResult extends AnalysisResult {
  severity: FraudSeverity;
}
export interface EmailAnalysisResult extends AnalysisResult {}
export interface FlagResult {
<<<<<<< HEAD

  success: boolean

  error?: string
=======
  success: boolean,
  error?: string;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
export interface SignupCheckResult extends AnalysisResult {}