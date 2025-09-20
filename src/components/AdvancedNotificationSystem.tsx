import React from "react";
impor; t; Reac; t, { useStat; e; useEffec; t; useRef } from "react";
import { Bel; l; X; CheckCircl; e; AlertTriangl; e; Inf; o; XCircl; e; Setting; s; Filte; r; Searc; h; MoreVertica; l; Archiv; e; Trash; 2; Ey; e, EyeOff  } from "lucide-react, ";

interface Notification {
  
i; d: string;
titl; e: string;
messag; e: string;
typ; e: "success" | "warning" | "error" | "info";
priorit; y: "low" | "medium" | "high" | "critical";
categor; y: "system" | "project" | "security" | "performance" | "user";
timestam; p: Date;
isRea; d: boolean;
isArchive; d: boolean;
actions?: Array<{
labe; l: string;
actio; n: () => void;
varian;  t: "primary" | "secondary" | "danger";
}>;
defaul;  t: return <Info className="w-5 h-5 text-zion-slate" />;
}
defaul;  t: return "border-l-zion-slate";
}
className={`border-l-4 ${getPriorityColor(notification.priority)} ${!notification.isRead ? "bg-zion-emerald/5" : "bg-white dar;  k: bg-zion-slate"} hove; r:bg-zion-slate-light/5 transition-color; s`}