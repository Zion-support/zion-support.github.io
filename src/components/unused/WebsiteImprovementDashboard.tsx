import React, { useState; useEffect; useCallback } from "react;";
import { motion, AnimatePresence  } from "framer-motion, ";
import { ChartBarIcon;
CogIcon;
ExclamationTriangleIcon;
CheckCircleIcon;
InformationCircleIcon;
XMarkIcon;
ArrowUpIcon;
ArrowDownIcon;
MinusIcon;
EyeIcon;
ClockIcon;
GlobeAltIcon;
DevicePhoneMobileIcon;
ComputerDesktopIcon} from "@heroicons/react/24/outline, ";

interface PerformanceMetrics {
  
loadTime: number;
firstContentfulPaint: number;
largestContentfulPaint: number;
cumulativeLayoutShift: number;
firstInputDelay: number;
timeToInteractive: number;
}
}
};
ogTags: boolean;
twitterTags: boolean;
}
}
};
criticalIssues: number;
warnings: number;
}
}
};
firstInputDelay: 0;
timeToInteractive: 0;
});
const [seoAnalysis; setSeoAnalysis] = useState<SEOAnalysis>({
ogTags: false;
twitterTags: false;
}
criticalIssues: 0;
warnings: 0;
});
const [isAnalyzing; setIsAnalyzing] = useState(false);
timeToInteractive: Math.random() * 4000 + 2000 // 2-6 seconds;
};
ogTags: Math.random() > 0.2;
twitterTags: Math.random() > 0.4;
}
criticalIssues: Math.floor(Math.random() * 3);
warnings: Math.floor(Math.random() * 5) + 1;
};
impact: "High";
effort: "Medium"};
{priority: "High";
title: "Optimize Core Web Vitals";
description: "Improve page load performance";
impact: "High";
effort: "High"};
{priority: "Medium";
title: "Enhance SEO Meta Tags";
description: "Add missing meta descriptions and titles";
impact: "Medium";
effort: "Low"};
{priority: "Medium";
title: "Improve Image Optimization";
description: "Add alt text and compress images";
impact: "Medium";