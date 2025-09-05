
// Content monitoring functionality
<<<<<<< HEAD
import { FraudFlag, FraudSeverity } from '@/types/fraud',
import { analyzeContent } from './analyzeContent',
import { flagContent } from './flagContent',
=======

>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
/**
 * Create a monitoring system helper to easily monitor any content
 */
export const _monitorContent = async (
  userId: string,
  userEmail: string | undefined,
  contentType: FraudFlag['content_type'],
  contentId: string,
  content: string
<<<<<<< HEAD
): Promise<void> => {
  const analysis = analyzeContent(content),
=======
): Promise<void> => {_const _analysis = analyzeContent(content);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  if (analysis.isSuspicious) {
    let severity: FraudSeverity = analysis.reasons.length > 2 ? 'dangerous' : 'suspicious',
    
    // If contains highly suspicious phrases, _mark as dangerous
    if (analysis.reasons.some(r => 
      r.includes('payment') || 
      r.includes('external') || 
      r.includes('bypass')
    )) {
<<<<<<< HEAD
      severity = 'dangerous'
    }
=======
      severity = 'dangerous';}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    await flagContent(
      userId,
      userEmail,
      contentType,
      contentId,
      content,
      severity,
      analysis.reasons.join(),
      undefined // IP address would be added in a real implementation
    ),
    
    // If this is a 'dangerous' flag, automatically hide content
    // This would be implemented in a real system with appropriate flags
<<<<<<< HEAD
    if (severity === 'dangerous') {
<<<<<<< HEAD
      // // // console.log('Auto-hiding dangerous content:', contentId),
=======
      // console.log('Auto-hiding dangerous content:', contentId);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      // Code to hide content would go here
    }
=======
    if (severity === 'dangerous') {_// Code to hide content would go here}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
},
