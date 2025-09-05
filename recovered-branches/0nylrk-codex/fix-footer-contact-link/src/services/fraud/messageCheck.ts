
// Message checking functionality
<<<<<<< HEAD
import { FraudSeverity } from '@/types/fraud',
import { analyzeContent } from './analyzeContent',
import { MessageAnalysisResult } from './types',
/**
 * Check message for suspicious content
 */
export const checkMessage = (messageContent: string): MessageAnalysisResult => {
  const analysis = analyzeContent(messageContent),
=======

/**
 * Check message for suspicious content
 */
export const _checkMessage = (messageContent: string): MessageAnalysisResult => {_const _analysis = analyzeContent(messageContent);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  // Determine severity based on number and type of issues
  let severity: FraudSeverity = 'safe',
  if (analysis.reasons.length > 0) {
    severity = analysis.reasons.length > 2 || 
              analysis.reasons.some(r => r.includes('payment') || r.includes('external')) 
      ? 'dangerous' 
<<<<<<< HEAD
      : 'suspicious'
  }
  
  return {
    ...analysis,
    severity
  }
},
=======
      : 'suspicious';}
  
  return {_...analysis, _severity};
};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
