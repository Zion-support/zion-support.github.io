
// Message checking functionality

/**
 * Check message for suspicious content
 */
export const _checkMessage = (messageContent: string): MessageAnalysisResult => {_const _analysis = analyzeContent(messageContent);
  
  // Determine severity based on number and type of issues
  let severity: FraudSeverity = 'safe';
  if (analysis.reasons.length > 0) {
    severity = analysis.reasons.length > 2 || 
              analysis.reasons.some(r => r.includes('payment') || r.includes('external')) 
      ? 'dangerous' 
      : 'suspicious';}
  
  return {_...analysis, _severity};
};
