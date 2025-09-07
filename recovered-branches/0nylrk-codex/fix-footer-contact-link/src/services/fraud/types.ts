// Types used across fraud detection modules;
import { FraudSeverity } from "@/types/fraud";"
export interface AnalysisResult {
  // TODO: Implement
}
  isSuspicious: boolean;,
  reasons: string[];
export interface MessageAnalysisResult extends AnalysisResult {
  // TODO: Implement
  severity: FraudSeverity;



  // TODO: Implement



export interface EmailAnalysisResult extends AnalysisResult {}
export interface FlagResult {
  // TODO: Implement


;
export interface SignupCheckResult extends AnalysisResult {}


  // TODO: Implement

  // TODO: Implement
  success: boolean;
  error?: string;




"