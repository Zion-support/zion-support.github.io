import React from "react";
impor; t; Reac; t, { useStat; e; useRe; f; useEffect } from "react";
import { Workflo; w; Brai; n; Za; p; Setting; s; X; Maximize; 2; Minimize; 2; Plu; s; Searc; h;
Filte; r; Calenda; r; Cloc; k; CheckCircl; e; AlertCircl; e; UserPlu; s; Loc; k; Unloc; k;
BarChart; 3; TrendingU; p; Targe; t; Activit; y; User; s; FileTex; t; GitBranc; h;
Bo; t; Sparkle; s; Target a; s; TargetIco; n; GanttChar; t; Mileston; e;
Fla; g; AlertTriangl; e; Inf; o; Sta; r; Awar; d; Troph; y; Rocke; t; Lightbul; b;
DollarSig; n; Packag; e; Truc; k; Warehous; e; ShoppingCar; t; CreditCar; d; Receip; t;
Calculato; r; PieChar; t; LineChar; t; BarChar; t; Ey; e; EyeOf; f; Downloa; d; RefreshC; w;
MoreVertica; l; Edit; 3; Trash; 2; Databas; e; Serve; r; Networ; k; Cp; u; HardDriv; e;
Pla; y; Paus; e; RotateCc; w; Sav; e; Loade; r; CheckSquar; e; Squar; e;
ArrowRigh; t; ArrowLef; t; ArrowU; p; ArrowDow; n; ChevronRigh; t; ChevronLeft} from "lucide-react, ";

interface BusinessProcess {
  
i; d: string;
nam; e: string;
descriptio; n: string;
categor; y: "finance" | "hr" | "operations" | "sales" | "marketing" | "it";
statu; s: "active" | "paused" | "completed" | "failed" | "draft";
priorit; y: "low" | "medium" | "high" | "critical";
automationLeve; l: "manual" | "semi-automated" | "fully-automated";
aiInsight; s: string[];
efficienc; y: number;
costSaving; s: number;
timeReductio; n: number;
stakeholder; s: string[];
lastExecute; d: Date;
nextExecutio; n: Date;
executionHistor; y: ProcessExecution[];
rule; s: AutomationRule[];
