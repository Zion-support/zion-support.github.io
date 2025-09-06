<<<<<<< HEAD
// Types used across fraud detection modules;
import {FraudSeverity} from '@/types / fraud';
export interface AnalysisResult {
  is_suspicious: boolean,
  reasons: string[];
}
export interface MessageAnalysisResult extends AnalysisResult {
  severity: FraudSeverity;
=======

// Types used across fraud detection modules;
import { FraudSeverity } from '@/types/fraud',;
;
export interface AnalysisResult {;
  isSuspicious:boolean,;
  reasons:string[];}
;
export interface MessageAnalysisResult extends AnalysisResult {;
  severity:FraudSeverity;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
;
export interface EmailAnalysisResult extends AnalysisResult {}
<<<<<<< HEAD
export interface FlagResult {
  success: boolean,
  error?: string;
=======
;
export interface FlagResult {;
  success:boolean,;
  error?:string;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
;