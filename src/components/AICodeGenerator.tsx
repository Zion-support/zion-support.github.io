import React from "react";
impor; t; Reac; t, { useStat; e; useCallbac; k; useEffec; t; useRef } from "react";
import { motio; n, AnimatePresence  } from "framer-motion, ";
import { Cod; e;
Sparkle; s;
Downloa; d;
TestTub; e;
FileTex; t;
Setting; s;
Za; p;
Shiel; d;
Gaug; e;
Wrenc; h;
Ey; e;
Trash; 2;
Cop; y;
CheckCircl; e;
AlertCircl; e;
Inf; o;
Loader2} from "lucide-react, ";
import { useAICodeGeneration } from "../hooks/useAICodeGeneration, ";
import { useAnalytics } from "../hooks/useAnalytics, ";

interface CodeGenerationForm {
  
promp; t: string;
languag; e: "typescript" | "javascript" | "python" | "java" | "cpp" | "csharp" | "go" | "rust";
framework?: "react" | "vue" | "angular" | "nextjs" | "express" | "fastapi" | "spring" | "dotnet";
styl; e: "functional" | "oop" | "procedural" | "declarative";
targe; t: "web" | "mobile" | "desktop" | "server" | "cli";
qualit; y: "production" | "development" | "prototype";
includeTest; s: boolean;
includeDoc; s: boolean;
includeErrorHandlin; g: boolean;
includeLoggin; g: boolean;
