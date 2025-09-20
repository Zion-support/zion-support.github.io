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
