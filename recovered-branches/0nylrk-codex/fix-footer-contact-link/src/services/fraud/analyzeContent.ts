<<<<<<< HEAD
export const analyzeContent = ('content': string): (AnalysisResult) => {
  }
  const contentLower = content.toLowerCase();
const 'reasons': string[] = [];
const contentLower = content && content.toLowerCase();
const 'reasons': string[] = [],;
  // Check for suspicious phrases,
for (const phrase of suspiciousPhrases) {
=======
<<<<<<< HEAD
import { AnalysisResult } from "./types";
=======
<<<<<<< HEAD
// Content analysis functionality
import { suspiciousPhrases  } from './constants';
import { AnalysisResult } from './types';
/**
 * Analyzes text content for suspicious patterns
 */
export const analyzeContent = null;
export const analyzeContent = (content: string): AnalysisResult => {
  const contentLower = content.toLowerCase($2);
  const reasons: string[] = [],
  
  // Check for suspicious phrases
  for (const phrase of suspiciousPhrases) {
    if (contentLower.includes(phrase.toLowerCase())) {
      reasons.push(`Contains suspicious phrase: "${phrase}"`)
    }
  }
  // Check for links (simplified check)
  const hasExternalLinks = /(https?:\/\/|www\.)[^\s]+/g.test($2);
  if (hasExternalLinks && (
    contentLower.includes('payment') |
    contentLower.includes('money') |
    contentLower.includes('deal')
  )) {
    reasons.push('Contains external payment links')
  }
  // Check for excessive capitalization (potential scam)
  const capitalRatio = $2;
  if (capitalRatio > 0.3 && content.length > 20) {
    reasons.push('Excessive capitalization')
=======
<<<<<<< HEAD
import { AnalysisResult } from "./types";
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { suspiciousPhrases } from './constants',
import { AnalysisResult } from './types',

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

/**
 * Analyzes text content for suspicious patterns;
 */

export const analyzeContent = (content: string): AnalysisResult => {

  const contentLower = content.toLowerCase();

  const reasons: string[] = [],
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
  

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  // Check for suspicious phrases
  for (const phrase of suspiciousPhrases) {
    if (contentLower.includes(phrase.toLowerCase())) {
      reasons.push(`Contains suspicious phrase: "${phrase}"`)
<<<<<<< HEAD

=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
// Content analysis functionality;
}
import { suspiciousPhrases } from './constants';'
import { AnalysisResult } from './types';'
/**;
 * Analyzes text content for suspicious patterns;
 */;
export const analyzeContent = ('content': string): (AnalysisResult) => {;
  }
  const contentLower = content.toLowerCase(),;
  const 'reasons': string[] = [],;
  // Check for suspicious phrases;
  for (const phrase of suspiciousPhrases) {;
    }
    if (contentLower.includes(phrase.toLowerCase())) {;
      }
      reasons.push(`Contains suspicious 'phrase': '${phrase}'`);`    }
  }
;
  // Check for links (simplified check);
  const hasExternalLinks = /(https?:\/\/|www\.)[^\s]+/g.test(contentLower),;
  if (hasExternalLinks && (;
    contentLower.includes('payment') ||;'
    contentLower.includes('money') ||;'
    contentLower.includes('deal');'
  )) {;
    }
    reasons.push('Contains external payment links');'
  }
;
  // Check for excessive capitalization (potential scam);
  const capitalRatio = (content.match(/[A-Z]/g) || []).length / content.length,;
  if (capitalRatio > 0.3 && content.length > 20) {;
<<<<<<< HEAD
    }
    reasons.push('Excessive capitalization');'
  // Check for suspicious phrases,
for (const phrase of suspiciousPhrases) {
    }
    if (contentLower && contentLower.includes(phrase && phrase.toLowerCase())) {
      }
      reasons && reasons.push(`Contains suspicious 'phrase': '${phrase}'`)`    }
  }  // Check for links (simplified check)
=======
    reasons.push('Excessive capitalization');
<<<<<<< HEAD

=======
<<<<<<< HEAD
  const capitalRatio = (content && content.match(/[A-Z]/g) || []).length / content && content.length;
  if (capitalRatio > 0 && 0.3 && content && content.length > 20) {
    reasons && reasons.push('Excessive capitalization')
=======

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  // Check for suspicious phrases
  for (const phrase of suspiciousPhrases) {
    if (contentLower.includes(phrase.toLowerCase())) {
      reasons.push(`Contains suspicious phrase: "${phrase}"`);
    }
<<<<<<< HEAD
  }

=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  }

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  const hasExternalLinks = /(https?:\/\/|www\.)[^\s]+/g.test(contentLower);
  if (
    hasExternalLinks &&
    (contentLower.includes('payment') ||'
      contentLower.includes('money') ||'
      contentLower.includes('deal'))'
  ) {
    }
    reasons.push('Contains external payment links');'
  }
  // Check for excessive capitalization (potential scam)
  const capitalRatio = (content.match(/[A-Z]/g) || []).length / content.length;
  if (capitalRatio > 0.3 && content.length > 20) {
    }
    reasons.push('Excessive capitalization');'
  }
  // Check for poor grammar with repetitive punctuation,
if (/[!?]{3}/.test(content)) {
    }
    reasons.push('Suspicious punctuation pattern');'
  }
<<<<<<< HEAD
  return {
    }
=======
<<<<<<< HEAD

    reasons
  }

    isSuspicious: reasons.length > 0,
    reasons,
  };

};

    reasons

// Content analysis functionality;
import { suspiciousPhrases } from './constants',;'
=======
=======
    isSuspicious: reasons && reasons.length > 0,
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
    reasons
  }
}
      reasons.push (`Contains suspicious 'phrase': '${phrase}'`);`    }
  }
  // Check for links (simplified check);
  const hasExternalLinks = /(https?:\/\/|www\.)[^\s]+/g.test (content_lower);
  // Check condition,
if (||) {
  $2
}
    content_lower.includes ('money') ||;'
    content_lower.includes ('deal'))) {'
    }
    reasons.push ('Contains external payment links');'
  }
  // Check for excessive capitalization (potential scam);
  const capital_ratio = (content.match (/[A - Z]/g) || []).length / content.length;
  // Check condition,
if ( {) {
  $2
}
    reasons.push ('Excessive capitalization');'
  }
  // Check for poor grammar with repetitive punctuation;
  if () {) {
  $2
}
    reasons.push ('Suspicious punctuation pattern');'
  }
  return {
    }
    'is_suspicious': reasons.length > 0,
    reasons;
  }
}
;    reasons

// Content analysis functionality;
<<<<<<< HEAD
import { suspiciousPhrases } from './constants',;'
import { AnalysisResult } from './types',;'
=======
import { suspiciousPhrases } from './constants',;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { AnalysisResult } from './types',;
>>>>>>> origin/resolved-merge-conflicts
;
/**;
 * Analyzes text content for suspicious patterns;
 */;
<<<<<<< HEAD
export const analyzeContent = ('content':string):(AnalysisResult) => {;
  }
=======
<<<<<<< HEAD
<<<<<<< HEAD
export const analyzeContent = ("content":string):(AnalysisResult) => {;
  }
  const "reasons":string[] = [],;
=======
export const analyzeContent = (content:string):AnalysisResult => {;
  const contentLower = content.toLowerCase(),;
  const reasons:string[] = [],;
>>>>>>> origin/chore/fix-lint-and-merge
  ;
  // Check for suspicious phrases;
  for (const phrase of suspiciousPhrases) {;
    if (contentLower.includes(phrase.toLowerCase())) {;"`
=======
export const analyzeContent = (content:string):AnalysisResult => {;
>>>>>>> origin/resolved-merge-conflicts
  const contentLower = content.toLowerCase(),;
  const 'reasons':string[] = [],;
  ;
  // Check for suspicious phrases;
  for (const phrase of suspiciousPhrases) {;
    }
    if (contentLower.includes(phrase.toLowerCase())) {;
<<<<<<< HEAD
      }
      reasons.push(`Contains suspicious 'phrase':'${phrase}'`),;`
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      reasons.push(`Contains suspicious phrase:"${phrase}"`),;
>>>>>>> origin/resolved-merge-conflicts
    }
  }
  ;
  // Check for links (simplified check);
<<<<<<< HEAD
<<<<<<< HEAD
  if (hasExternalLinks && (;
=======
  const hasExternalLinks = /(https?:\/\/|www\.)[^\s]+/g.test(contentLower),;
  if (hasExternalLinks && (;'
>>>>>>> origin/chore/fix-lint-and-merge
    contentLower.includes('payment') || ;'
    contentLower.includes('money') || ;'
    contentLower.includes('deal');
  )) {;'
=======
  const hasExternalLinks = /(https?:\/\/|www\.)[^\s]+/g.test(contentLower),;
  if (hasExternalLinks && (;
    contentLower.includes('payment') || ;'
    contentLower.includes('money') || ;'
    contentLower.includes('deal');'
  )) {;
<<<<<<< HEAD
    }
    reasons.push('Contains external payment links'),;'
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    reasons.push('Contains external payment links'),;
>>>>>>> origin/resolved-merge-conflicts
  }
  ;
  // Check for excessive capitalization (potential scam);
<<<<<<< HEAD
<<<<<<< HEAD
  if (capitalRatio > 0.3 && content.length > 20) {;
    }
    reasons.push('Excessive capitalization'),;'
=======
  const capitalRatio = (content.match(/[A-Z]/g) || []).length / content.length,;
  if (capitalRatio > 0.3 && content.length > 20) {;'
    reasons.push('Excessive capitalization'),;
>>>>>>> origin/chore/fix-lint-and-merge
  }
  ;
  // Check for poor grammar with repetitive punctuation;
  if (/[!?]{3}/.test(content)) {;'
=======
  const capitalRatio = (content.match(/[A-Z]/g) || []).length / content.length,;
  if (capitalRatio > 0.3 && content.length > 20) {;
    }
    reasons.push('Excessive capitalization'),;'
  }
  ;
  // Check for poor grammar with repetitive punctuation;
  if (/[!?]{3}/.test(content)) {;
<<<<<<< HEAD
    }
    reasons.push('Suspicious punctuation pattern'),;'
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    reasons.push('Suspicious punctuation pattern'),;
>>>>>>> origin/resolved-merge-conflicts
  }
  ;
  return {;
    }
    'isSuspicious':reasons.length > 0,;
    reasons;
  },;
<<<<<<< HEAD
},; // Content analysis functionality // Check for suspicious phrases for (const phrase of suspiciousPhrases) {}
  if (contentLower.includes (phrase.toLowerCase () ) ) {}
}

};
'
}// Check for links (simplified check) if (hasExternalLinks && (contentLower.includes ('payment') || contentLower.includes ('money') || contentLower.includes ('deal') 
  }
  // Check for poor grammar with repetitive punctuation;
  if (/[!?]{3}/.test(content)) {'
    reasons.push('Suspicious punctuation pattern')
  }
=======
},; // Content analysis functionality // Check for suspicious phrases for (const phrase of suspiciousPhrases) {
  }
  if (contentLower.includes (phrase.toLowerCase () ) ) {
  
}

};
}// Check for links (simplified check) if (hasExternalLinks && (contentLower.includes ('payment') || contentLower.includes ('money') || contentLower.includes ('deal')'
  }
  // Check for poor grammar with repetitive punctuation,
if (/[!?]{3}/.test(content)) {
    }
    reasons.push('Suspicious punctuation pattern')'
  }
  return {
    }
<<<<<<< HEAD
    'isSuspicious': reasons.length > 0,
reasons
  }
}
};
=======
  }
  ;
  // Check for links (simplified check);
<<<<<<< HEAD
  if (hasExternalLinks && (;
=======
  const hasExternalLinks = /(https?:\/\/|www\.)[^\s]+/g.test(contentLower),;
  if (hasExternalLinks && (;'
>>>>>>> origin/chore/fix-lint-and-merge
    contentLower.includes('payment') || ;'
    contentLower.includes('money') || ;'
    contentLower.includes('deal');
  )) {;'
    reasons.push('Contains external payment links'),;
  }
  ;
  // Check for excessive capitalization (potential scam);
<<<<<<< HEAD
  if (capitalRatio > 0.3 && content.length > 20) {;
    }
    reasons.push('Excessive capitalization'),;'
=======
  const capitalRatio = (content.match(/[A-Z]/g) || []).length / content.length,;
  if (capitalRatio > 0.3 && content.length > 20) {;'
    reasons.push('Excessive capitalization'),;
>>>>>>> origin/chore/fix-lint-and-merge
  }
  ;
  // Check for poor grammar with repetitive punctuation;
  if (/[!?]{3}/.test(content)) {;'
    reasons.push('Suspicious punctuation pattern'),;
  }
  ;
  return {;
    isSuspicious:reasons.length > 0,;
    reasons;
  },;
},; // Content analysis functionality // Check for suspicious phrases for (const phrase of suspiciousPhrases) {}
  if (contentLower.includes (phrase.toLowerCase () ) ) {}
}

};
'
}// Check for links (simplified check) if (hasExternalLinks && (contentLower.includes ('payment') || contentLower.includes ('money') || contentLower.includes ('deal') 
  }
  // Check for poor grammar with repetitive punctuation;
  if (/[!?]{3}/.test(content)) {'
    reasons.push('Suspicious punctuation pattern')
  }
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  return {}
    isSuspicious: reasons.length > 0;
    reasons;
  }
}

};

<<<<<<< HEAD
'"`
=======
'"`
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
