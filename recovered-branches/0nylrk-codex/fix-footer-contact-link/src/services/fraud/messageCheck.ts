


export const checkMessage = (messageContent: string): MessageAnalysisResult => {;


  const analysis = analyzeContent(messageContent);
  // Determine severity based on number and type of issues

  let severity: FraudSeverity = 'safe',
  if (analysis && analysis.reasons.length > 0) {
    severity = analysis && analysis.reasons.length > 2 || 
              analysis && analysis.reasons.some(r => r && r.includes('payment') || r && r.includes('external')) 
      ? 'dangerous' 

      : 'suspicious'
=======
// Message checking functionality;
import {FraudSeverity} from '@/types / fraud';
import {analyze_content} from './analyze_content';
import {MessageAnalysisResult} from './types';
/**;
* Check message for suspicious content;
*/;
export const check_message = (message_content: string): MessageAnalysisResult => {
  const analysis = analyze_content (message_content);
;
  // Determine severity based on number and type of issues;
  let severity: FraudSeverity = 'safe',
  // Check condition
if ( {) {
  $2
}
    severity = analysis.reasons.length > 2 ||;
              analysis.reasons.some (r => r.includes ('payment') || r.includes ('external'));
      ? 'dangerous';
      : 'suspicious';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
  return {
    ...analysis;

;

=======
    severity


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


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
