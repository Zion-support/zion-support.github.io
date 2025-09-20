import React, { useState; useEffect; useCallback } from "react;";
import { motion, AnimatePresence  } from "framer-motion, ";
import { LinkIcon;
ExclamationTriangleIcon;
CheckCircleIcon;
XMarkIcon;
ArrowPathIcon;
WrenchScrewdriverIcon;
InformationCircleIcon;
MagnifyingGlassIcon;
GlobeAltIcon;
DocumentTextIcon} from "@heroicons/react/24/outline, ";

interface LinkStatus {
  
url: string;
status: "healthy" | "broken" | "checking" | "unknown";
statusCode?: number;
error?: string;
lastChecked: Date;
parentPage?: string;
element?: HTMLElement;
suggestedFix?: string;,
fixable: boolean;
}
}
};
checking: 0;
unknown: 0;
});
fixable: false;
error: error instanceof Error ? error.message : "Unknown error";
checking: 0;
unknown: allLinks.length;
});
case "checking": return "text-yellow-600 bg-yellow-100 dark: bg-yellow-900/30";
default: return "text-gray-600 bg-gray-100 dark:bg-gray-900/30";
}
default: return <InformationCircleIcon className="w-4 h-4 text-gray-600" />;
}
lastChecked: link.lastChecked.toISOString();
fixable: link.fixable;
}))
transition: all 0.3s ease !important;
}

.link-target-placeholder {
  
animation: pulse 2s infinite;
}

@keyframes pulse {
  
0%, 100% { opacity: 1;
}
50% { opacity: 0.7;
}