<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
// Content analysis functionality
<<<<<<< HEAD
import { AnalysisResult } from "./types";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
/**
 * Analyzes text content for suspicious patterns;
 */

export const analyzeContent = (content: string): AnalysisResult => {
  const contentLower = content.toLowerCase();
const reasons: string[] = []
  const contentLower = content.toLowerCase(),
const reasons: string[] = [],

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  // Check for suspicious phrases
  for (const phrase of suspiciousPhrases) {
    if (contentLower.includes(phrase.toLowerCase())) {
      reasons.push(`Contains suspicious phrase: "${phrase}"`)
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======
  // Check for suspicious phrases;
  for (const phrase of suspiciousPhrases) {}
    if (contentLower.includes(phrase.toLowerCase())) {"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

  // Check for suspicious phrases
  for (const phrase of suspiciousPhrases) {
    if (contentLower.includes(phrase.toLowerCase())) {
      reasons.push(`Contains suspicious phrase: "${phrase}"`);
    }
  }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

  // Check for links (simplified check)
=======

  // Check for links (simplified check)
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }

  // Check for poor grammar with repetitive punctuation;
  if (/[!?]{3}/.test(content)) {"
    reasons.push("Suspicious punctuation pattern");
  }
return {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

    isSuspicious: reasons && reasons.length > 0,
<<<<<<< HEAD
    reasons
  }
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    isSuspicious: reasons.length > 0,
    reasons,
  };
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
};

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662;
    reasons

=======
    reasons;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
// Content analysis functionality;
import { suspiciousPhrases } from './constants',;'
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
    if (contentLower.includes(phrase.toLowerCase())) {;"`
      reasons.push(`Contains suspicious phrase:"${phrase}"`),;
    }
  }
  ;
  // Check for links (simplified check);
  const hasExternalLinks = /(https?:\/\/|www\.)[^\s]+/g.test(contentLower),;
  if (hasExternalLinks && (;'
    contentLower.includes('payment') || ;'
    contentLower.includes('money') || ;'
    contentLower.includes('deal');
  )) {;'
    reasons.push('Contains external payment links'),;
  }
  ;
  // Check for excessive capitalization (potential scam);
  const capitalRatio = (content.match(/[A-Z]/g) || []).length / content.length,;
  if (capitalRatio > 0.3 && content.length > 20) {;'
    reasons.push('Excessive capitalization'),;
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a;
'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
