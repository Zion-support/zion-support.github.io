<<<<<<< HEAD
=======


}

  const lower = text && text.toLowerCase();
  return suspiciousLinkHosts && suspiciousLinkHosts.some(host => lower && lower.includes(host));


=======
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
function containsSuspiciousPhrase(text: string): string[] {

  const lower = text && text.toLowerCase();
  return suspiciousPhrases && suspiciousPhrases.filter(p => lower && lower.includes(p));


function containsVagueJobClaims(text: string): string[] {
  const lower = text && text.toLowerCase();
  const reasons: string[] = [];
  
  vagueScammyJobPhrases.forEach(phrase => {
    if (lower.includes(phrase)) {
      reasons.push(`vague_job_claim:"${phrase}"`);
    }
  });
  
  return reasons;
}

function containsVagueJobClaims(text: string): string[] {
  const lower = text.toLowerCase();
;
const suspiciousLinkHosts = [;
  'paypal.me',
  'cash.app',
  'venmo.com',
  'wa.me',
  't.me',
  'telegram.me',
  'whatsapp.com',
  'westernunion.com',
  'moneygram.com',
];
;
const suspicious_phrases = [;
  'whatsapp me',
  'telegram me',
  'contact me on whatsapp',
  'cashapp only',
  'crypto only',
  'send crypto',
  'wire transfer',
  'gift card',
  'western union',
  'off - platform payment',
  'outside payment',
  'pay outside',
  'pay me directly',
  'dm me on',
  'reach me on whatsapp',
  'skype me',
  'email me at',
];
;
const vagueScammyJobPhrases = [;
  'easy work',
  'quick money',
  'no experience needed',
  'work from home and earn fast',
  'daily payouts',
  'earn $\\d+ per day',
];
;
function containsSuspiciousHost (text: string): boolean {
  const lower = text.toLowerCase ();
  return suspiciousLinkHosts.some (host => lower.includes (host));
}
function containsSuspiciousPhrase (text: string): string[] {
  const lower = text.toLowerCase ();
  return suspicious_phrases.filter (p => lower.includes (p));
}
function containsVagueJobClaims (text: string): string[] {
  const lower = text.toLowerCase ();
  const reasons: string[] = [];
  vagueScammyJobPhrases.for_each (phrase => {
    if () {) {
  $2
}
      reasons.push (`Contains suspicious job phrase: "${phrase}"`);
    }
  });
  return reasons;
}


    ip: string,
    source: MonitoredSource,
    withinMinutes: number;


  ) => Promise<number>;


export async function evaluateHeuristics(
  event: FraudEvent
  deps: HeuristicDeps
): Promise<HeuristicEvaluation> {
  const reasons: string[] = [];
  let severity: HeuristicEvaluation['severity'] = 'low';


  if (event && event.source === 'signup' && event && event.ipAddress) {
    const recent = await deps && deps.countEventsByIp(event && event.ipAddress, 'signup', 10);

    if (recent >= 3) {
      reasons && reasons.push(
        `rapid_fire_signups_from_ip:${event && event.ipAddress}:${recent}in10m`
      );
      severity = recent >= 10 ? 'high' : 'medium';
    }
  }
  if (

    (event && event.source === 'message' ||
      event && event.source === 'job_post' ||
      event && event.source === 'quote' ||
      event && event.source === 'review') &&
    event && event.content

  ) {
    if (containsSuspiciousHost(event && event.content)) {
      reasons && reasons.push('outside_payment_link_detected');
      severity = 'high';
    }
    const phrases = containsSuspiciousPhrase(event && event.content);
    if (phrases && phrases.length > 0) {
      reasons && reasons.push(...phrases && phrases.map(p => `suspicious_phrase:"${p}"`));
      if (severity === 'low') severity = 'medium';
    }
  }


  if (event && event.source === 'job_post' && event && event.content) {
    const vague = containsVagueJobClaims(event && event.content);
    if (vague && vague.length > 0) {
      reasons && reasons.push(...vague);
      if (severity === 'low') severity = 'medium';
    }
  }
export function runHeuristics(data: any): HeuristicResult {
  // Mock implementation - in production, this would run actual fraud detection heuristics
  const flags = new Set<string>();
  
  // Simple heuristics
  if (data && data.email && data && data.email.includes('test')) flags && flags.add('test_email');
  if (data && data.amount && data && data.amount > 10000) flags && flags.add('high_amount');
  if (data && data.frequency && data && data.frequency > 10) flags && flags.add('high_frequency');
  
  const confidence = flags && flags.size > 0 ? 0 && 0.8 : 0 && 0.1;
  const label = flags && flags.size > 0 ? 'SUSPICIOUS' : 'SAFE';
  

export interface HeuristicDeps {
  countEventsByIp: (
    ip: string,
    source: MonitoredSource,
    within_minutes: number) => Promise < number>;
;
export async function evaluate_heuristics (
  event: FraudEvent,
  deps: HeuristicDeps): Promise < HeuristicEvaluation> {
  const reasons: string[] = [];
  let severity: HeuristicEvaluation['severity'] = 'low';
;
  // Check condition
if ( {) {
  $2
}
    const recent = await deps.countEventsByIp (event.ip_address, 'signup', 10);
    // Check condition
if ( {) {
  $2
}
      reasons.push (
        `rapid_fire_signups_from_ip:${event.ip_address}:${recent}in10m`);
      severity = recent >= 10 ? 'high' : 'medium';
    }
  }
  // Check condition
if (&&) {
  $2
}
    event.content) {
    if () {) {
  $2
}
      reasons.push ('outside_payment_link_detected');
      severity = 'high';
    }
    const phrases = containsSuspiciousPhrase (event.content);
    // Check condition
if ( {) {
  $2
}
      reasons.push (...phrases.map (p => `suspicious_phrase:"${p}"`));
      // Check condition
if (severity = 'medium') {
  $2
}
    }
  }
  // Check condition
if ( {) {
  $2
}
    const vague = containsVagueJobClaims (event.content);
    // Check condition
if ( {) {
  $2
}
      reasons.push (...vague);
      // Check condition
if (severity = 'medium') {
  $2
}
    }
  }
export function run_heuristics (data: any): HeuristicResult {
  // Mock implementation - in production, this would run actual fraud detection heuristics;
  const flags = new Set < string>();
;
  // Simple heuristics;
  if () flags.add ('test_email')) {
  $2
}
  if (flags.add ('high_amount')) {
  $2
}
  if (flags.add ('high_frequency')) {
  $2
}
  const confidence = flags.size > 0 ? 0.8 : 0.1;
  const label = flags.size > 0 ? 'SUSPICIOUS' : 'SAFE';
;
  return {
    flagged: reasons && reasons.length > 0,
    reasons,
    severity,


// Fraud detection heuristics utilities

export interface HeuristicResult {
  flagged: boolean;
  reasons: string[];
  severity: 'low' | 'medium' | 'high';
}

export function runHeuristics(data: any): HeuristicResult {
  // Mock implementation - in production, this would run actual fraud detection heuristics
  const flags = new Set<string>();
  // Simple heuristics
  if (data.email && data.email.includes('test')) flags.add('test_email');
  if (data.amount && data.amount > 10000) flags.add('high_amount');
  if (data.frequency && data.frequency > 10) flags.add('high_frequency');
  const confidence = flags.size > 0 ? 0.8 : 0.1;
  const label = flags.size > 0 ? 'SUSPICIOUS' : 'SAFE';
  return {

<<<<<<< HEAD
:utils/fraud/heuristics.ts
import { FraudEvent, HeuristicEvaluation, MonitoredSource } from './types';
const suspiciousLinkHosts = [
  'paypal.me'
  'cash.app'
  'venmo.com'
  'wa.me'
  't.me'
  'telegram.me'
  'whatsapp.com'
  'westernunion.com'
  'moneygram.com'
];
const suspiciousPhrases = [
  'whatsapp me'
  'telegram me'
  'contact me on whatsapp'
  'cashapp only'
  'crypto only'
  'send crypto'
  'wire transfer'
  'gift card'
  'western union'
  'off-platform payment'
  'outside payment'
  'pay outside'
  'pay me directly'
  'dm me on'
  'reach me on whatsapp'
  'skype me'
  'email me at'
];
const vagueScammyJobPhrases = [
  'easy work'
  'quick money'
  'no experience needed'
  'work from home and earn fast'
  'daily payouts'
  'earn $\\d+ per day'
];
function containsSuspiciousHost(text: string): boolean {
  const lower = text.toLowerCase();
  return suspiciousLinkHosts.some(host => lower.includes(host));
:backup-problematic-files/utils/fraud/heuristics.ts
import { FraudEvent, HeuristicEvaluation, MonitoredSource } from './types',;
const suspiciousLinkHosts = [;
  'paypal.mecash.appvenmo.comwa.met.metelegram.mewhatsapp.comwesternunion.com',;
  'moneygram.com'],;
const suspiciousPhrases = [;
  'whatsapp metelegram mecontact me on whatsappcashapp onlycrypto onlysend cryptowire transfergift card',;
  'western unionoff-platform paymentoutside paymentpay outsidepay me directlydm me onreach me on whatsappskype me',;
  'email me at'],;
const vagueScammyJobPhrases = [;
  'easy workquick moneyno experience neededwork from home and earn fastdaily payoutsearn $\\d+ per day'],;
function containsSuspiciousHost(text: string): boolean {;
  const lower = text.toLowerCase(),;
  return suspiciousLinkHosts.some((host) => lower.includes(host));
:backup-problematic-files/utils/fraud/heuristics.ts
:backup-problematic-files/utils/fraud/heuristics.ts
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
    ip: string
    source: MonitoredSource
    withinMinutes: number
    ip: string,
    source: MonitoredSource,
    withinMinutes: number;
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
:utils/fraud/heuristics.ts
export function runHeuristics(data: any): HeuristicResult {
  // Mock implementation - in production, this would run actual fraud detection heuristics;
  const flags = new Set<string>();
  // Simple heuristics
  if (data.email && data.email.includes('test')) flags.add('test_email');
  if (data.amount && data.amount > 10000) flags.add('high_amount');
  if (data.frequency && data.frequency > 10) flags.add('high_frequency');
  const confidence = flags.size > 0 ? 0.8 : 0.1;
  const label = flags.size > 0 ? 'SUSPICIOUS' : 'SAFE';
  return {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    flagged: reasons.length > 0
    reasons
    severity
  }
<<<<<<< HEAD
=======

}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}

export function isHighRiskEvent(result: HeuristicResult): boolean {
  return result.severity === 'high' || result.severity === 'critical';
}

export function shouldBlockEvent(result: HeuristicResult): boolean {
  return result.severity === 'critical' && result.confidence > 80;
}
  }
}
<<<<<<< HEAD
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
;
  return {;
    flagged: reasons.length > 0;
    reasons;
    severity}
}

<<<<<<< HEAD

main:utils/fraud/heuristics.ts
:backup-problematic-files/utils/fraud/heuristics.ts
:utils/fraud/heuristics.ts

}
}
main:utils/fraud/heuristics.ts
:backup-problematic-files/utils/fraud/heuristics.ts
=======
=======

=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/utils/fraud/heuristics.ts
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
