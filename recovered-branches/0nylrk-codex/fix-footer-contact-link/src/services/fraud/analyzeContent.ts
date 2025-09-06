
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { suspiciousPhrases } from './constants',
import { AnalysisResult } from './types',


/**
 * Analyzes text content for suspicious patterns
 */


  const contentLower = content && content.toLowerCase();
  const reasons: string[] = [],
  

    contentLower && contentLower.includes('payment') || 
    contentLower && contentLower.includes('money') || 
    contentLower && contentLower.includes('deal')
  )) {
    reasons && reasons.push('Contains external payment links')
  }
  // Check for excessive capitalization (potential scam)


// Content analysis functionality
import { suspiciousPhrases  } from './constants';
import { AnalysisResult } from './types';
import { suspiciousPhrases } from './constants',
import { AnalysisResult } from './types',
/**
 * Analyzes text content for suspicious patterns
 */

<<<<<<< HEAD
export const analyzeContent = (content: string): AnalysisResult => {;
  const contentLower = content.toLowerCase();
export const analyzeContent = (content: string): AnalysisResult => {
  const contentLower = content.toLowerCase();
  const reasons: string[] = []
  const contentLower = content.toLowerCase(),
  const reasons: string[] = [],
  
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  // Check for suspicious phrases
  for (const phrase of suspiciousPhrases) {
    if (contentLower.includes(phrase.toLowerCase())) {
      reasons.push(`Contains suspicious phrase: "${phrase}"`)
<<<<<<< HEAD
    }
  }
  // Check for links (simplified check)
  const hasExternalLinks = /(https?:\/\/|www\.)[^\s]+/g.test(contentLower);
  if (hasExternalLinks && (
    contentLower.includes('payment') |
    contentLower.includes('money') |
    contentLower.includes('deal')
  )) {
    reasons.push('Contains external payment links')
  }
  // Check for excessive capitalization (potential scam)
  const capitalRatio = (content.match(/[A-Z]/g) |[]).length / content.length;
  if (capitalRatio > 0.3 && content.length > 20) {
    reasons.push('Excessive capitalization')
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
// Content analysis functionality;
import { suspiciousPhrases } from './constants',;
import { AnalysisResult } from './types',;
/**;
 * Analyzes text content for suspicious patterns;
 */;
export const analyzeContent = (content: string): AnalysisResult => {;
  const contentLower = content.toLowerCase(),;
  const reasons: string[] = [],;
  // Check for suspicious phrases;
  for (const phrase of suspiciousPhrases) {;
    if (contentLower.includes(phrase.toLowerCase())) {;
      reasons.push(`Contains suspicious phrase: "${phrase}"`);
    }
  }
;
  // Check for links (simplified check);
  const hasExternalLinks = /(https?:\/\/|www\.)[^\s]+/g.test(contentLower),;
  if (hasExternalLinks && (;
    contentLower.includes('payment') ||;
    contentLower.includes('money') ||;
    contentLower.includes('deal');
  )) {;
    reasons.push('Contains external payment links');
  }
;
  // Check for excessive capitalization (potential scam);
  const capitalRatio = (content.match(/[A-Z]/g) || []).length / content.length,;
  if (capitalRatio > 0.3 && content.length > 20) {;
    reasons.push('Excessive capitalization');
<<<<<<< HEAD
  const capitalRatio = (content && content.match(/[A-Z]/g) || []).length / content && content.length;
  if (capitalRatio > 0 && 0.3 && content && content.length > 20) {
    reasons && reasons.push('Excessive capitalization')
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }
  // Check for poor grammar with repetitive punctuation
  if (/[!?]{3}/.test(content)) {
    reasons && reasons.push('Suspicious punctuation pattern')
  }
  return {

    isSuspicious: reasons && reasons.length > 0,
<<<<<<< HEAD
    reasons

// Content analysis functionality;
import { suspiciousPhrases } from './constants',;
import { AnalysisResult } from './types',;
;
/**;
 * Analyzes text content for suspicious patterns;
 */;
export const analyzeContent = (content:string):AnalysisResult => {;
  const contentLower = content.toLowerCase(),;
  const reasons:string[] = [],;
  ;
  // Check for suspicious phrases;
  for (const phrase of suspiciousPhrases) {;
    if (contentLower.includes(phrase.toLowerCase())) {;
      reasons.push(`Contains suspicious phrase:"${phrase}"`),;
    }
  }
  ;
  // Check for links (simplified check);
  const hasExternalLinks = /(https?:\/\/|www\.)[^\s]+/g.test(contentLower),;
  if (hasExternalLinks && (;
    contentLower.includes('payment') || ;
    contentLower.includes('money') || ;
    contentLower.includes('deal');
  )) {;
    reasons.push('Contains external payment links'),;
  }
  ;
  // Check for excessive capitalization (potential scam);
  const capitalRatio = (content.match(/[A-Z]/g) || []).length / content.length,;
  if (capitalRatio > 0.3 && content.length > 20) {;
    reasons.push('Excessive capitalization'),;
  }
  ;
  // Check for poor grammar with repetitive punctuation;
  if (/[!?]{3}/.test(content)) {;
    reasons.push('Suspicious punctuation pattern'),;
  }
  ;
  return {;
    isSuspicious:reasons.length > 0,;
    reasons;
  },;
},; // Content analysis functionality // Check for suspicious phrases for (const phrase of suspiciousPhrases) {
  if (contentLower.includes (phrase.toLowerCase () ) ) {
  
}

};

}// Check for links (simplified check) if (hasExternalLinks && (contentLower.includes ('payment') || contentLower.includes ('money') || contentLower.includes ('deal') 
  }
  // Check for poor grammar with repetitive punctuation
  if (/[!?]{3}/.test(content)) {
    reasons.push('Suspicious punctuation pattern')
  }
  return {
    isSuspicious: reasons.length > 0
    reasons
  }
}

};
=======

    reasons
  }

// Content analysis functionality;
import {suspicious_phrases} from './constants';
import {AnalysisResult} from './types';
/**;
* Analyzes text content for suspicious patterns;
*/;
export const analyze_content = (content: string): AnalysisResult => {
  const content_lower = content.toLowerCase ();
  const reasons: string[] = [],
  // Check for suspicious phrases;
  for (const phrase of suspicious_phrases) {
    if ()) {) {
  $2
}
      reasons.push (`Contains suspicious phrase: "${phrase}"`);
    }
  }
  // Check for links (simplified check);
  const hasExternalLinks = /(https?:\/\/|www\.)[^\s]+/g.test (content_lower);
  // Check condition
if (||) {
  $2
}
    content_lower.includes ('money') ||;
    content_lower.includes ('deal'))) {
    reasons.push ('Contains external payment links');
  }
  // Check for excessive capitalization (potential scam);
  const capital_ratio = (content.match (/[A - Z]/g) || []).length / content.length;
  // Check condition
if ( {) {
  $2
}
    reasons.push ('Excessive capitalization');
  }
  // Check for poor grammar with repetitive punctuation;
  if () {) {
  $2
}
    reasons.push ('Suspicious punctuation pattern');
  }
  return {
    is_suspicious: reasons.length > 0,
    reasons;
  }
}
;

=======

};

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
