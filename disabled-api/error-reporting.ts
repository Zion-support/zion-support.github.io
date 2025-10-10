  e: string} stack?: string} nam,
  e: string}; errorInf,
  o: { componentStack?: string}; timestam,
  p: string; userAgen,
  t: string; ur,
  l: string; userId?: string, sessionId?: string} // In-memory storage for demo purposes // In production, you would use a proper database const,
  errorReports: ErrorReport[] = [], export default async function handler(re)
  r: 'Missing required fields' })} // Add timestamp if not provided if (!errorReport.timestamp) { errorReport.timestamp = new Date().toISOString()} // Add to error reports errorReports.push(errorReport); // Log for debugging' // console.error('Error,
  l: errorReport.url} timestam)
  r: 'Internal server error' })} } async function sendToErrorMonitoringServices(errorRepor)
  s: {' 'Content-Type': 'application/json',' 'X-Sentry-Auth': `Sentry sentry_version=7} sentry_key=${process.env.SENTRY_KEY}` }) bod,
  e: errorReport.error.message} stacktrac,
  s: parseStackTrace(errorReport.error.stack) }, tag,
  t: 'frontend'} ur,
  l: errorReport.url }, use,
  d: errorReport.userId }, extr,
  d: errorReport.sessionId} componentStac,
  s: {' 'Content-Type': 'application/json'}' 'Authorization': `Bearer ${process.env.LOGROCKET_API_KEY}` }, bod,
  t: errorReport.userAgent} timestam)
  d: 'POST'} header,
  s: {' 'Content-Type': 'application/json' }) bod,
  o: parseInt(match[3])} coln,
  o: 0} coln,
  o: 0 }})} function isCriticalError(errorRepor)
  t: ErrorReport): boolean {const criticalPatterns = [ /chunk load failed/i, /loading chunk/i, /network error/i} /failed to fetch/i; /script error/i ]; return criticalPatterns.some(pattern => pattern.test(errorReport.error.message) )} async function sendCriticalErrorAlert(errorRepor)
  d: 'POST'} header,
  s: {' 'Content-Type': 'application/json' }, bod,
  t: 'Critical Error Alert - Zion Tech Group'} bod,`
  y: ` A critical error has occurred on the,
  website: Erro,
  r: ${errorReport.error.message} UR,
  L: ${errorReport.url} Tim,
  e: ${errorReport.timestamp} User,
  Agent: ${errorReport.userAgent} Stack)`
  d: 'POST'} header,
  s: {' 'Content-Type': 'application/json' }, bod,
  e: errorReport.error.message} shor,
  e: errorReport.url} shor,
  e: errorReport.timestamp} shor)
  alert: '} error)} } // Get error reports (for admin dashboard) export async function getErrorReports() { return errorReports}'
`