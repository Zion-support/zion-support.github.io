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
case "low": return "text-blue-600 bg-blue-100 dark: bg-blue-900/30";
default: return "text-gray-600 bg-gray-100 dark:bg-gray-900/30";
}
case "low": return "text-blue-600 bg-blue-100 dark: bg-blue-900/30";
default: return "text-gray-600 bg-gray-100 dark:bg-gray-900/30";
}
transition: all 0.3s ease !important;
}