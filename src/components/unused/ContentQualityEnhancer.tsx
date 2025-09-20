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
suggestion: string;
impact: "seo" | "readability" | "engagement" | "accessibility";
}
}
