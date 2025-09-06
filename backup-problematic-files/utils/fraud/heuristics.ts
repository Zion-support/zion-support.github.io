

}
function containsSuspiciousPhrase(text: string): string[] {
  const lower = text.toLowerCase();
  return suspiciousPhrases.filter(p => lower.includes(p));
}
function containsVagueJobClaims(text: string): string[] {
  const lower = text.toLowerCase();
  const reasons: string[] = [];
  vagueScammyJobPhrases.forEach(phrase => {
    if (lower.includes(phrase)) {
      reasons.push(`Contains suspicious job phrase: "${phrase}"`);
    }
  });
  return reasons;
}
export interface HeuristicDeps {
  countEventsByIp: (

  ) => Promise<number>;
export async function evaluateHeuristics(
  event: FraudEvent
  deps: HeuristicDeps
): Promise<HeuristicEvaluation> {;
  const reasons: string[] = [];
  let severity: HeuristicEvaluation['severity'] = 'low';
  if (event.source === 'signup' && event.ipAddress) {
    const recent = await deps.countEventsByIp(event.ipAddress, 'signup', 10);
    if (recent >= 3) {
      reasons.push(
        `rapid_fire_signups_from_ip:${event.ipAddress}:${recent}in10m`
      );
      severity = recent >= 10 ? 'high' : 'medium';
    }
  }
  if (
    (event.source === 'message' |
      event.source === 'job_post' |
      event.source === 'quote' |
      event.source === 'review') &&
    event.content
  ) {
    if (containsSuspiciousHost(event.content)) {
      reasons.push('outside_payment_link_detected');
      severity = 'high';
    }
    const phrases = containsSuspiciousPhrase(event.content);
    if (phrases.length > 0) {
      reasons.push(...phrases.map(p => `suspicious_phrase:"${p}"`));
      if (severity === 'low') severity = 'medium';
    }
  }
  if (event.source === 'job_post' && event.content) {
    const vague = containsVagueJobClaims(event.content);
    if (vague.length > 0) {
      reasons.push(...vague);
      if (severity === 'low') severity = 'medium';
    }
  }
