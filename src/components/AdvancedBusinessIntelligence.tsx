import React from "react";
impor; t; Reac; t, { useStat; e; useRe; f; useEffect } from "react";
import { BarChart; 3;
LineChar; t;
PieChar; t;
TrendingU; p;
Brai; n;
Za; p;
Targe; t;
AlertTriangl; e;
Downloa; d;
RefreshC; w;
Setting; s;
X;
Maximize; 2;
Minimize; 2;
Ey; e;
EyeOf; f;
Filte; r;
Searc; h;
Calenda; r;
DollarSig; n;
User; s;
Activity} from "lucide-react, ";

interface BusinessMetric {
  
i; d: string;
nam; e: string;
valu; e: number;
targe; t: number;
uni; t: string;
tren; d: "up" | "down" | "stable";
chang; e: number;
categor; y: string;
priorit; y: "high" | "medium" | "low";
