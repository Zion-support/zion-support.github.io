<<<<<<< HEAD
// Types used across fraud detection modules
import { FraudSeverity } from '@/types/fraud';

export interface AnalysisResult {
  isSuspicious: boolean;
  reasons: string[];
}

export interface MessageAnalysisResult extends AnalysisResult {
  severity: FraudSeverity;
}

export interface EmailAnalysisResult extends AnalysisResult {}

export interface FlagResult {
  success: boolean;
  error?: string;
}

export interface SignupCheckResult extends AnalysisResult {}
=======
 // Types used across fraud detection modules export interface SignupCheckResult extends AnalysisResult {
  
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
