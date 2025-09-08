



  if (analysis && analysis.isSuspicious) {
    let severity: FraudSeverity = analysis && analysis.reasons.length > 2 ? 'dangerous' : 'suspicious',








import { FraudFlag, FraudSeverity } from '@/types/fraud',;
import { analyzeContent } from './analyzeContent',;
import { flagContent } from './flagContent',;
;








