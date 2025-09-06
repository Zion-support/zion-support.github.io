
<<<<<<< HEAD
// Message checking functionality
import { FraudSeverity  } from '@/types/fraud';
import { analyzeContent  } from './analyzeContent';
import { MessageAnalysisResult } from './types';
/**
 * Check message for suspicious content
 */
<<<<<<< HEAD

export const checkMessage = (messageContent: string): MessageAnalysisResult => {
=======
export const checkMessage = (messageContent: string): MessageAnalysisResult => {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const analysis = analyzeContent(messageContent);
  // Determine severity based on number and type of issues
  let severity: FraudSeverity = 'safe'
  if (analysis.reasons.length > 0) {
    severity = analysis.reasons.length > 2 |
              analysis.reasons.some(r => r.includes('payment') |r.includes('external'))
      ? 'dangerous'
      : 'suspicious'
  }
  return {
    ...analysis;
    severity
<<<<<<< HEAD
  }
}

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
// Message checking functionality;
import { FraudSeverity } from '@/types/fraud',;
import { analyzeContent } from './analyzeContent',;
import { MessageAnalysisResult } from './types',;
/**;
 * Check message for suspicious content;
 */;
export const checkMessage = (messageContent: string): MessageAnalysisResult => {;
  const analysis = analyzeContent(messageContent),;
  // Determine severity based on number and type of issues;
  let severity: FraudSeverity = 'safe',;
  if (analysis.reasons.length > 0) {;
    severity = analysis.reasons.length > 2 ||;
              analysis.reasons.some(r => r.includes('payment') || r.includes('external'));
      ? 'dangerous';
      : 'suspicious';
  }
;
  return {;
    ...analysis;
    severity;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
