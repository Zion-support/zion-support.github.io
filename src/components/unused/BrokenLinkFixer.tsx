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
checking: 0;
unknown: 0;
});
fixable: false;
error: error instanceof Error ? error.message : "Unknown error";
checking: 0;
unknown: allLinks.length;
lastChecked: link.lastChecked.toISOString();
fixable: link.fixable;
}))
transition: all 0.3s ease !important;
}
50% { opacity: 0.7;
}