
<<<<<<< HEAD

=======
import { AnalysisResult } from "./types";
>>>>>>> origin/cursor/delete-old-data-records-6bba

/**
 * Analyzes text content for suspicious patterns;
 */

export const analyzeContent = (content: string): AnalysisResult => {

  const contentLower = content.toLowerCase();

  const reasons: string[] = [],
<<<<<<< HEAD

  

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


=======


>>>>>>> origin/cursor/delete-old-data-records-6bba
  // Check for suspicious phrases
  for (const phrase of suspiciousPhrases) {
    if (contentLower.includes(phrase.toLowerCase())) {
      reasons.push(`Contains suspicious phrase: "${phrase}"`)

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

  const reasons: string[] = [],;

=======
  const 'reasons': string[] = [],;
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
    reasons.push('Excessive capitalization');





  }


    isSuspicious: reasons && reasons.length > 0,




=======
    }
    reasons.push('Excessive capitalization');'
  // Check for suspicious phrases,
for (const phrase of suspiciousPhrases) {
    }
    if (contentLower && contentLower.includes(phrase && phrase.toLowerCase())) {
      }
      reasons && reasons.push(`Contains suspicious 'phrase': '${phrase}'`)`    }
  }  // Check for links (simplified check)
  // Check for suspicious phrases
  for (const phrase of suspiciousPhrases) {
    if (contentLower.includes(phrase.toLowerCase())) {
      reasons.push(`Contains suspicious phrase: "${phrase}"`);
    }

    isSuspicious: reasons && reasons.length > 0,
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

export const analyzeContent = (content:string):AnalysisResult => {;
  const contentLower = content.toLowerCase(),;
  const 'reasons':string[] = [],;
  ;
  // Check for suspicious phrases;
  for (const phrase of suspiciousPhrases) {;
    }
    if (contentLower.includes(phrase.toLowerCase())) {;
      }
      reasons.push(`Contains suspicious 'phrase':'${phrase}'`),;`
      reasons.push(`Contains suspicious phrase:"${phrase}"`),;
    }
  }
  ;
  // Check for links (simplified check);

  const hasExternalLinks = /(https?:\/\/|www\.)[^\s]+/g.test(contentLower),;
  if (hasExternalLinks && (;
    contentLower.includes('payment') || ;'
    contentLower.includes('money') || ;'
    contentLower.includes('deal');'
  )) {;
    }
    reasons.push('Contains external payment links'),;'
    reasons.push('Contains external payment links'),;
  }
  ;
  // Check for excessive capitalization (potential scam);

  const capitalRatio = (content.match(/[A-Z]/g) || []).length / content.length,;
  if (capitalRatio > 0.3 && content.length > 20) {;
    }
    reasons.push('Excessive capitalization'),;'
  }
  ;
  // Check for poor grammar with repetitive punctuation;
  if (/[!?]{3}/.test(content)) {;
    }
    reasons.push('Suspicious punctuation pattern'),;'
    reasons.push('Suspicious punctuation pattern'),;
  }
  ;
  return {;
    }
    'isSuspicious':reasons.length > 0,;
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
    contentLower.includes('payment') || ;'
    contentLower.includes('money') || ;'
    contentLower.includes('deal');
  )) {;'
    reasons.push('Contains external payment links'),;
  }
  ;
  // Check for excessive capitalization (potential scam);
  if (capitalRatio > 0.3 && content.length > 20) {;
    }
    reasons.push('Excessive capitalization'),;'
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
