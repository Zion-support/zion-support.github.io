

// Types used across fraud detection modules;
import {FraudSeverity} from '@/types / fraud';

// Types used across fraud detection modules

export interface AnalysisResult {
  isSuspicious: boolean;
  reasons: string[];





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





export interface MessageAnalysisResult extends AnalysisResult {
  severity: FraudSeverity
}

export interface MessageAnalysisResult extends AnalysisResult {





