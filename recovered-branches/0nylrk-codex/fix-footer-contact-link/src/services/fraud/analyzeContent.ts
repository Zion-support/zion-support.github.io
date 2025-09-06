<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

import { suspiciousPhrases } from './constants',
import { AnalysisResult } from './types',


/**
 * Analyzes text content for suspicious patterns
 */
=======
export const analyzeContent = (content: string): AnalysisResult => {
  const contentLower = content.toLowerCase();
  const reasons: string[] = []
  const contentLower = content.toLowerCase(),
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


  const contentLower = content && content.toLowerCase();
  const reasons: string[] = [],
  
<<<<<<< HEAD

<<<<<<< HEAD
  // Check for suspicious phrases
  for (const phrase of suspiciousPhrases) {
    if (contentLower && contentLower.includes(phrase && phrase.toLowerCase())) {
      reasons && reasons.push(`Contains suspicious phrase: "${phrase}"`)
    }
  }
  // Check for links (simplified check)
  const hasExternalLinks = /(https?:\/\/|www\.)[^\s]+/g && g.test(contentLower);
  if (hasExternalLinks && (

    contentLower && contentLower.includes('payment') || 
    contentLower && contentLower.includes('money') || 
    contentLower && contentLower.includes('deal')

=======
    contentLower && contentLower.includes('payment') || 
    contentLower && contentLower.includes('money') || 
    contentLower && contentLower.includes('deal')
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
=======
export const analyzeContent = (content: string): AnalysisResult => {;
  const contentLower = content.toLowerCase();
export const analyzeContent = (content: string): AnalysisResult => {
  const contentLower = content.toLowerCase();
  const reasons: string[] = []
  const contentLower = content.toLowerCase(),
  const reasons: string[] = [],
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  // Check for suspicious phrases
  for (const phrase of suspiciousPhrases) {
    if (contentLower.includes(phrase.toLowerCase())) {
      reasons.push(`Contains suspicious phrase: "${phrase}"`)
<<<<<<< HEAD

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  // Check for suspicious phrases
  for (const phrase of suspiciousPhrases) {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  const capitalRatio = (content && content.match(/[A-Z]/g) || []).length / content && content.length;
  if (capitalRatio > 0 && 0.3 && content && content.length > 20) {
    reasons && reasons.push('Excessive capitalization')
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  // Check for suspicious phrases
  for (const phrase of suspiciousPhrases) {
    if (contentLower && contentLower.includes(phrase && phrase.toLowerCase())) {
      reasons && reasons.push(`Contains suspicious phrase: "${phrase}"`)
    }
  }
  // Check for links (simplified check)
  const hasExternalLinks = /(https?:\/\/|www\.)[^\s]+/g && g.test(contentLower);
  if (hasExternalLinks && (
  )) {
    reasons && reasons.push('Contains external payment links')
  }
  // Check for excessive capitalization (potential scam)
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  }
  // Check for poor grammar with repetitive punctuation
  if (/[!?]{3}/.test(content)) {
    reasons && reasons.push('Suspicious punctuation pattern')
  }
  return {
<<<<<<< HEAD

    isSuspicious: reasons && reasons.length > 0,
<<<<<<< HEAD

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    reasons
  }
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
<<<<<<< HEAD

=======

};

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
