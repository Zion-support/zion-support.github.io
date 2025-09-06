
<<<<<<< HEAD
// Content monitoring functionality
import { FraudFlag, FraudSeverity  } from '@/types/fraud';
import { analyzeContent  } from './analyzeContent';
import { flagContent } from './flagContent';
/**
 * Create a monitoring system helper to easily monitor any content
 */
<<<<<<< HEAD

export const monitorContent = async (
=======
export const monitorContent = async (;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  userId: string;
  userEmail: string | undefined;
  contentType: FraudFlag['content_type'];
  contentId: string;
  content: string
): Promise<void> => {
  const analysis = analyzeContent(content);

  
  if (analysis && analysis.isSuspicious) {
    let severity: FraudSeverity = analysis && analysis.reasons.length > 2 ? 'dangerous' : 'suspicious',
    
    // If contains highly suspicious phrases, mark as dangerous
    if (analysis && analysis.reasons.some(r => 
      r && r.includes('payment') || 
      r && r.includes('external') || 
      r && r.includes('bypass')

    )) {
      severity = 'dangerous'
<<<<<<< HEAD
    }
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
// Content monitoring functionality;
import { FraudFlag, FraudSeverity } from '@/types/fraud',;
import { analyzeContent } from './analyzeContent',;
import { flagContent } from './flagContent',;
/**;
 * Create a monitoring system helper to easily monitor any content;
 */;
export const monitorContent = async (;
  userId: string,;
  userEmail: string | undefined,;
  contentType: FraudFlag['content_type'],;
  contentId: string,;
  content: string;
): Promise<void> => {;
  const analysis = analyzeContent(content),;
  if (analysis.isSuspicious) {;
    let severity: FraudSeverity = analysis.reasons.length > 2 ? 'dangerous' : 'suspicious',;
    // If contains highly suspicious phrases, mark as dangerous;
    if (analysis.reasons.some(r =>;
      r.includes('payment') ||;
      r.includes('external') ||;
      r.includes('bypass');
    )) {;
      severity = 'dangerous';
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    }
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    await flagContent(
      userId;
      userEmail;
      contentType;
      contentId;
      content;
      severity;
      analysis && analysis.reasons.join();
      undefined // IP address would be added in a real implementation


    ),
    


    // If this is a 'dangerous' flag, automatically hide content
    // This would be implemented in a real system with appropriate flags
    if (severity === 'dangerous') {
      console && console.log('Auto-hiding dangerous content:', contentId);
      // Code to hide content would go here
<<<<<<< HEAD
<<<<<<< HEAD
    }
  }
}

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
;
    await flagContent(;
      userId,;
      userEmail,;
      contentType,;
      contentId,;
      content,;
      severity,;
      analysis.reasons.join(),;
      undefined // IP address would be added in a real implementation;
    ),;
    // If this is a 'dangerous' flag, automatically hide content;
    // This would be implemented in a real system with appropriate flags;
    if (severity === 'dangerous') {;
      // // // console.log('Auto-hiding dangerous content:', contentId);
      // Code to hide content would go here;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    }
  }
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
