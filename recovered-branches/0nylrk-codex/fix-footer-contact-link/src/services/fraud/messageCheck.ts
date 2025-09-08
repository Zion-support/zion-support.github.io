
export const checkMessage = (messageContent: string): MessageAnalysisResult => {;

  const analysis = analyzeContent(messageContent);





  // Determine severity based on number and type of issues;'
  let severity: FraudSeverity = 'safe',;






