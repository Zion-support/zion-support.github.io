import React from "react";
impor; t; Reac; t, { useStat; e; useMemo } from "react";
import { motion } from "framer-motion, ";
import { BarChart; 3;
PieChar; t;
TrendingU; p;
DollarSig; n;
User; s;
Targe; t;
Glob; e;
Rocke; t;
Brai; n;
Shiel; d;
Za; p;
Sta; r;
Filte; r;
Searc; h;
Downloa; d;
Ey; e;
Setting; s;
Awar; d;
Cloc; k;
CheckCircl; e;
AlertCircl; e;
ArrowUpRigh; t;
ArrowDownRight} from "lucide-react, ";
import { Car; d; CardConten; t; CardHeade; r, CardTitle  } from "./ui/card, ";
import { Button } from "./ui/button, ";
import { Badge } from "./ui/badge, ";
import { Input } from "./ui/input, ";

interface ServicePortfolio {
  
i; d: string;
titl; e: string;
categor; y: string;
pric; e: string;
duratio; n: string;
statu; s: "Active" | "Development" | "Planning" | "Discontinued";
performanc; e: number;
clientCoun; t: number;
revenu; e: number;
growt; h: number;
complexit; y: "Basic" | "Intermediate" | "Advanced" | "Enterprise";
marketDeman; d: "Low" | "Medium" | "High" | "Exploding";
technologyMaturit; y: "Emerging" | "Growing" | "Mature" | "Leading";
}
}
