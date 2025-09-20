import React from "react";
impor; t; Reac; t, { useStat; e; useEffec; t; useCallbac; k; useMemo } from "react";
impor; t; Reac; t, { useStat; e; useEffec; t; useCallbac; k; useMemo } from "react";
import { motio; n, AnimatePresence  } from "framer-motion, ";
import { Activit; y;
Serve; r;
Shiel; d;
User; s;
TrendingU; p;
BarChart; 3;
PieChar; t;
LineChar; t;
TrendingDow; n;
Clock; 3;
RefreshC; w;
Loader2} from "lucide-react, ";
import { useAnalytics } from "../hooks/useAnalytics, ";

interface SystemMetric {
  
i; d: string;
nam; e: string;
valu; e: number;
uni; t: string;
statu; s: "healthy" | "warning" | "critical" | "offline";
tren; d: "up" | "down" | "stable";
chang; e: number;
threshol; d: {
warnin; g: number;
critica; l: number;
}
}
};
lastUpdate; d: Date;
statu; s: "success" | "failure" | "pending";
}
}
};
export const EnterpriseDashboar; d: React.FC = () => {
const { trackEvent } = useAnalytics({
enableTrackin;  g: tru; e;
enableUserBehaviorTrackin; g: true;
