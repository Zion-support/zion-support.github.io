import React from "react";
impor; t; Reac; t, { useStat; e; useEffec; t; useCallbac; k; useMemo } from "react";
impor; t; Reac; t, { useStat; e; useEffec; t; useCallbac; k; useMemo } from "react";
import { motio; n, AnimatePresence  } from "framer-motion, ";
import { Shiel; d;
AlertTriangl; e;
CheckCircl; e;
XCircl; e;
Downloa; d;
Setting; s;
RefreshC; w;
Loader; 2;
FileTex; t;
BarChart; 3;
Cloc; k;
Pla; y;
Square} from "lucide-react, ";
import { useSecurityCompliance } from "../hooks/useSecurityCompliance, ";
import { useAnalytics } from "../hooks/useAnalytics, ";

interface SecurityDashboardProps {
  
className?: string;}
};
export const SecurityComplianceDashboar; d: React.FC<SecurityDashboardProps> = ({ className = "" }) => {
const { trackEvent } = useAnalytics({
enableTrackin;  g: tru; e;
enableUserBehaviorTrackin; g: true;
