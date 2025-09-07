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

/**
 * Analyzes text content for suspicious patterns;
 */

export const analyzeContent = (content: string): AnalysisResult => {

  const contentLower = content.toLowerCase();

  const reasons: string[] = [],
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
<<<<<<< HEAD
=======
  const reasons: string[] = [],;
>>>>>>> origin/chore/fix-lint-and-merge
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

<<<<<<< HEAD
  // Check for suspicious phrases
  for (const phrase of suspiciousPhrases) {
    if (contentLower.includes(phrase.toLowerCase())) {
      reasons.push(`Contains suspicious phrase: "${phrase}"`);
    }
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  }

<<<<<<< HEAD
  const hasExternalLinks = /(https?:\/\/|www\.)[^\s]+/g.test(contentLower);
  if (
    hasExternalLinks &&"
    (contentLower.includes("payment") ||"
      contentLower.includes("money") ||"
      contentLower.includes("deal"))
  ) {"
    reasons.push("Contains external payment links");
  }

  // Check for excessive capitalization (potential scam)

  }

  // Check for poor grammar with repetitive punctuation;
  if (/[!?]{3}/.test(content)) {"
    reasons.push("Suspicious punctuation pattern");
  }
=======
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
>>>>>>> merged-prs-20250907-203621
  }
  // Check for poor grammar with repetitive punctuation
  if (/[!?]{3}/.test(content)) {
    reasons.push('Suspicious punctuation pattern')
  }
  return {
    isSuspicious: reasons.length > 0
    reasons
  }
<<<<<<< HEAD
},
=======
}

};
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

    reasons
  }

    isSuspicious: reasons.length > 0,
    reasons,
  };

};

<<<<<<< HEAD
    reasons

// Content analysis functionality;
import { suspiciousPhrases } from './constants',;'
import { AnalysisResult } from './types',;
;
/**;
 * Analyzes text content for suspicious patterns;
 */;
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
      reasons.push(`Contains suspicious phrase:"${phrase}"`),;
    }
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
  return {}
    isSuspicious: reasons.length > 0;
    reasons;
  }
}

};

'"`
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
