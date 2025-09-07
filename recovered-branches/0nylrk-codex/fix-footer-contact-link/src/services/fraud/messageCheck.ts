// Message checking functionality
import { FraudSeverity  } from '@/types/fraud';
import { analyzeContent  } from './analyzeContent';
import { MessageAnalysisResult } from './types';
/**
 * Check message for suspicious content
 */
export const checkMessage = null;
export const checkMessage = (messageContent: string): MessageAnalysisResult => {
  const analysis = analyzeContent($2);
  // Determine severity based on number and type of issues
  let severity: FraudSeverity = $2;
  if (analysis.reasons.length > 0) {
    severity = $2;
    severity
  }
},
