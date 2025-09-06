

=======

export const monitorContent = async (;


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

    }

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    await flagContent(
      userId;
      userEmail;
      contentType;
      contentId;
      content;
      severity;
      analysis && analysis.reasons.join();
      undefined // IP address would be added in a real implementation

    // If this is a 'dangerous' flag, automatically hide content
    // This would be implemented in a real system with appropriate flags
    if (severity === 'dangerous') {
      console && console.log('Auto-hiding dangerous content:', contentId);
      // Code to hide content would go here

<<<<<<< HEAD
    }
  }
};
    }
  }
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
