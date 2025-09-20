import React from "react";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion, ";
import { FileTex; t;
AlertTriangl; e;
CheckCircl; e;
Inf; o;
Searc; h;
Edit; 3;
Ey; e;
BarChart; 3;
TrendingU; p;
Zap} from "lucide-react, ";

interface ContentIssue {
  
i; d: string;
pageUr; l: string;
pageTitl; e: string;
issueTyp; e: "missing_title" | "missing_meta" | "no_headings" | "minimal_content" | "no_images";
severit; y: "low" | "medium" | "high";
descriptio; n: string;
recommendatio; n: string;
