export const analyzeContent = (content: string): AnalysisResult => {
  const contentLower = content.toLowerCase();
  const reasons: string[] = []
  const contentLower = content.toLowerCase(),

  const contentLower = content && content.toLowerCase();
  const reasons: string[] = [],
  
  // Check for suspicious phrases
  for (const phrase of suspiciousPhrases) {
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

// Content analysis functionality;
import { suspiciousPhrases } from "./constants";""
import { AnalysisResult } from "./types";"
/**
 * Analyzes text content for suspicious patterns;
 */
export const analyzeContent = (content: string): AnalysisResult => {
  const contentLower = content.toLowerCase();
  const reasons: string[] = [];

  // Check for suspicious phrases;
  for (const phrase of suspiciousPhrases) {
    if (contentLower.includes(phrase.toLowerCase())) {"
      reasons.push(`Contains suspicious phrase: "${phrase}"`);"

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
  )) {;}
    reasons.push('Contains external payment links');}
  }
;
  // Check for excessive capitalization (potential scam);
  const capitalRatio = (content.match(/[A-Z]/g) || []).length / content.length,;
  if (capitalRatio > 0.3 && content.length > 20) {;
    reasons.push('Excessive capitalization');
  // Check for suspicious phrases
  for (const phrase of suspiciousPhrases) {
    if (contentLower && contentLower.includes(phrase && phrase.toLowerCase())) {
      reasons && reasons.push(`Contains suspicious phrase: "${phrase}"`)
  // Check for suspicious phrases;
for (const phrase of suspiciousPhrases) {}
    if (contentLower && contentLower.includes(phrase && phrase.toLowerCase())) {}
      reasons && reasons.push(`Contains suspicious phrase: \"${phrase}\"`)
    }
  }  // Check for links (simplified check)
  const hasExternalLinks = /(https?:\/\/|www\.)[^\s]+/g.test(contentLower);
  if (
    hasExternalLinks &&
    (contentLower.includes("payment") ||
      contentLower.includes("money") ||
      contentLower.includes("deal"))
  ) {
    reasons.push("Contains external payment links");
  }

    hasExternalLinks &&)"
    (contentLower.includes("payment") ||""
      contentLower.includes("money") ||""
      contentLower.includes("deal"))"
  ) {"
    reasons.push("Contains external payment links");"

  }
  // Check for excessive capitalization (potential scam)
  const capitalRatio = (content.match(/[A-Z]/g) || []).length / content.length;
  if (capitalRatio > 0.3 && content.length > 20) {
    reasons.push("Excessive capitalization");
  }

  // Check for poor grammar with repetitive punctuation
  if (/[!?]{3}/.test(content)) {
    reasons.push("Suspicious punctuation pattern");
  }
  return {
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
;    reasons

// Content analysis functionality;
// Content analysis functionality;
import { suspiciousPhrases } from "./constants";""
import { AnalysisResult } from "./types";"
/**
 * Analyzes text content for suspicious patterns;
 */
export const analyzeContent = (content: string): AnalysisResult => {
  const contentLower = content.toLowerCase();
  const reasons: string[] = [];

  // Check for suspicious phrases;
  for (const phrase of suspiciousPhrases) {
    if (contentLower.includes(phrase.toLowerCase())) {"
      reasons.push(`Contains suspicious phrase: "${phrase}"`);"
    }

  // Check for links (simplified check)
  const hasExternalLinks = /(https?:\/\/|www\.)[^\s]+/g.test(contentLower);
  if (
    hasExternalLinks &&)"
    (contentLower.includes("payment") ||""
      contentLower.includes("money") ||""
      contentLower.includes("deal"))"
  ) {"
    reasons.push("Contains external payment links");"

  // Check for excessive capitalization (potential scam)
  const capitalRatio = (content.match(/[A-Z]/g) || []).length / content.length;

  if (capitalRatio > 0.3 && content.length > 20) {"
    reasons.push("Excessive capitalization");"

  // Check for poor grammar with repetitive punctuation;
  if (/[!?]{3}/.test(content)) {"
    reasons.push("Suspicious punctuation pattern");"

  }
  return {

  // TODO: Implement
    isSuspicious: reasons.length > 0,
    reasons,
  };

    reasons;
// Content analysis functionality;"
pr-12325
import { suspiciousPhrases } from './constants',;
import { AnalysisResult } from './types',;
import { suspiciousPhrases } from './constants',;''
import { AnalysisResult } from './types',;'

;
/**;
 * Analyzes text content for suspicious patterns;
pr-12325
 */;
export const analyzeContent = (content:string):AnalysisResult => {;
  const contentLower = content.toLowerCase(),;
  const reasons:string[] = [],;
  ;
  // Check for suspicious phrases;

  for (const phrase of suspiciousPhrases) {;
    if (contentLower.includes(phrase.toLowerCase())) {;
      reasons.push(`Contains suspicious phrase:"${phrase}"`),;
    if (contentLower.includes(phrase.toLowerCase())) {;'
      reasons.push(`Contains suspicious phrase:"${phrase}"`),;"

    }
  }
  ;
  // Check for links (simplified check);
  const hasExternalLinks = /(https?:\/\/|www\.)[^\s]+/g.test(contentLower),;
  if (hasExternalLinks && (;
  // Check for suspicious phrases;
  for (const phrase of suspiciousPhrases) {;
    if (contentLower.includes(phrase.toLowerCase())) {;`;
      reasons.push(`Contains suspicious phrase:"${phrase}"`),;"
  // Check for links (simplified check);
  const hasExternalLinks = /(https?:\/\/|www\.)[^\s]+/g.test(contentLower),;
  if (hasExternalLinks && (;)"
pr-12325
    contentLower.includes('payment') || ;
    contentLower.includes('money') || ;
    contentLower.includes('deal');
  )) {;
    reasons.push('Contains external payment links'),;

  if (hasExternalLinks && (;)"
    contentLower.includes('payment') || ;''
    contentLower.includes('money') || ;''
    contentLower.includes('deal');'
  )) {;'
    reasons.push('Contains external payment links'),;'

  }
  ;
pr-12325
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
  // Check for poor grammar with repetitive punctuation;
  if (/[!?]{3}/.test(content)) {;
    reasons.push('Suspicious punctuation pattern'),;
  return {;
    isSuspicious:reasons.length > 0,;
pr-12325

  if (capitalRatio > 0.3 && content.length > 20) {;'
    reasons.push('Excessive capitalization'),;'
  }
  ;
  // Check for poor grammar with repetitive punctuation;
  if (/[!?]{3}/.test(content)) {;'
    reasons.push('Suspicious punctuation pattern'),;'

  }
  ;
  return {;
    isSuspicious:reasons.length > 0,;}
    reasons;}
  },;
},; // Content analysis functionality // Check for suspicious phrases for (const phrase of suspiciousPhrases) {}
  if (contentLower.includes (phrase.toLowerCase () ) ) {}
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


}// Check for links (simplified check) if (hasExternalLinks && (contentLower.includes ('payment') || contentLower.includes ('money') || contentLower.includes ('deal')
  // Check for poor grammar with repetitive punctuation;
  if (/[!?]{3}/.test(content)) {
    reasons.push('Suspicious punctuation pattern')
  // TODO: Implement
    isSuspicious: reasons.length > 0;

`;
pr-12325
'
}// Check for links (simplified check) if (hasExternalLinks && (contentLower.includes ('payment') || contentLower.includes ('money') || contentLower.includes ('deal')'
  }
  // Check for poor grammar with repetitive punctuation;
  if (/[!?]{3}/.test(content)) {'
    reasons.push('Suspicious punctuation pattern')'
  }
  return {
  // TODO: Implement
}
    isSuspicious: reasons.length > 0;
    reasons;

  }
}
};
