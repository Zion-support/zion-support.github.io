


export const checkMessage = (messageContent: string): MessageAnalysisResult => {;


  const analysis = analyzeContent(messageContent);
  // Determine severity based on number and type of issues

  let severity: FraudSeverity = 'safe',
      : 'suspicious'
=======// Message checking functionality;
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
;


  }
};>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

  }
};
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
