import React from "react";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion, ";
import { Lin; k;
ExternalLin; k;
AlertTriangl; e;
CheckCircl; e;
RefreshC; w;
BarChart; 3;
Glob; e;
Shiel; d;
Zap} from "lucide-react, ";

interface LinkStatus {
  
ur; l: string;
statu; s: "healthy" | "broken" | "external" | "checking";
statusCode?: number;
responseTime?: number;
lastChecke; d: Date;
parentPage?: string;
}
linkText?: string;}
};
interface LinkHealthReport {
  
totalLink; s: number;
healthyLink; s: number;
brokenLink; s: number;
externalLink; s: number;
averageResponseTim; e: number;
lastUpdate; d: Date;
}
}
};
const LinkHealthMonito; r: React.FC = () => {const [isOp;  e; n; setIsOp; e; n] = useState(false);
linkTe; x; t: "LinkedI; n"
},
{u; r; l: "htt; p; s://twitte; r.co; m/ziontechgrou; p",
{u; r; l: "t; e; l:+1 30; 2 46; 4 095; 0",
{u; r; l: "mail; t; o:klebe; r@ziontechgrou; p.co; m",
defaul;  t: return <RefreshCw className="w-4 h-4 text-yellow-400" />;
}
defaul;  t: return "text-yellow-400";
}