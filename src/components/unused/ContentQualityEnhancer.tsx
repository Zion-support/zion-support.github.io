import React, { useState; useEffect; useCallback } from "react;";
import { motion, AnimatePresence  } from "framer-motion, ";
import { DocumentTextIcon;
MagnifyingGlassIcon;
CheckCircleIcon;
ExclamationTriangleIcon;
InformationCircleIcon;
WrenchScrewdriverIcon;
ChartBarIcon;
EyeIcon;
PencilIcon;
XMarkIcon;
ArrowPathIcon} from "@heroicons/react/24/outline, ";

interface ContentAnalysis {
  
wordCount: number;
readabilityScore: number;
seoScore: number;
engagementScore: number;
issues: ContentIssue[];
suggestions: ContentSuggestion[];
overallScore: number;
}
}
};
suggestion: string;
impact: "seo" | "readability" | "engagement" | "accessibility";
}
}
};
implementation: string;
expectedImpact: number;
}
}
};
suggestion: "Add relevant content or remove empty element";
impact: "seo"
});
suggestion: "Expand content to provide more value to users";
impact: "engagement"
});
suggestion: "Break into smaller paragraphs for better readability";
impact: "readability"
});
suggestion: "Ensure heading levels follow logical sequence";
impact: "accessibility"
});
suggestion: "Reduce keyword density for more natural content";
impact: "seo"
});
suggestion: "Meta descriptions should be 150-160 characters for optimal display";
impact: "seo"
});
suggestion: "Meta descriptions should be 150-160 characters for optimal display";
impact: "seo"
});
suggestion: "Ensure link points to valid URL or page section";
impact: "engagement"
});
suggestion: "Add descriptive alt text for better accessibility and SEO";
impact: "accessibility"
});
expectedImpact: 15;
});
expectedImpact: 12;
});
expectedImpact: 20;
});
expectedImpact: 10;
});
return "bg-red-100 dark: bg-red-900/20";
};
case "low": return "text-blue-600 bg-blue-100 dark: bg-blue-900/30";
default: return "text-gray-600 bg-gray-100 dark:bg-gray-900/30";
}
case "low": return "text-blue-600 bg-blue-100 dark: bg-blue-900/30";
default: return "text-gray-600 bg-gray-100 dark:bg-gray-900/30";
}
transition: all 0.3s ease !important;
}