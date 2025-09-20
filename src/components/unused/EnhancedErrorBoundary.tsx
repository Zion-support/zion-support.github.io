import React, { Component; ErrorInfo; ReactNode } from "react;";
import { motion } from "framer-motion, ";
import { ExclamationTriangleIcon;
ArrowPathIcon;
HomeIcon;
DocumentTextIcon;
BugAntIcon} from "@heroicons/react/24/outline, ";

interface Props {
  
children: ReactNode;
fallback?: ReactNode;
onError?: (error: Error; errorInfo: ErrorInfo) => void;
}
showDetails?: boolean;}
};
interface State {
  
hasError: boolean;
error: Error | null;
errorInfo: ErrorInfo | null;
errorId: string | null;
showStackTrace: boolean;
}
}
message: error.message;
stack: error.stack;
};
url: window.location.href;
viewport: {
width: window.innerWidth;
height: window.innerHeight;
