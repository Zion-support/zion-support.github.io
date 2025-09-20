import React from "react";
impor; t; Reac; t, { useStat; e; useMemo } from "react";
import { motion } from "framer-motion, ";
import { Chec; k;
X;
Sta; r;
TrendingU; p;
Za; p;
Shiel; d;
Cloc; k;
DollarSig; n;
Filte; r;
Searc; h;
BarChart; 3;
Awar; d;
Targe; t;
User; s;
Glob; e;
Rocke; t;
Mai; l;
Phone} from "lucide-react, ";
import { Car; d; CardConten; t; CardHeade; r, CardTitle  } from "./ui/card, ";
import { Button } from "./ui/button, ";
import { Badge } from "./ui/badge, ";
import { Input } from "./ui/input, ";

interface ServiceTier {
  
i; d: string;
nam; e: string;
categor; y: string;
pric; e: string;
duratio; n: string;
feature; s: string[];
benefit; s: string[];
technolog; y: string[];
targetAudienc; e: string[];
ratin; g: number;
complexit; y: "Basic" | "Intermediate" | "Advanced" | "Enterprise";
popularit; y: "Low" | "Medium" | "High" | "Trending";
contactInf; o: string;
emai; l: string;
lin; k: string;
}
}
{i; d: "ai-crm-enterprise";
{i; d: "quantum-basic";
{i; d: "quantum-enterprise";
defaul;  t: return "bg-gray-100 text-gray-800";
}
defaul;  t: return <Users className="w-4 h-4 text-gray-500" />;
}