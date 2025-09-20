interface Service {
id: string;,
name: string;
}

import React from "react;";

export function ModeToggle() {;
return (;
<button className="p-2 rounded-lg bg-zion-slate/10 hove;  r: bg-zion-slate/20 transition-colors">
<svg className="w-5 h-5 text-zion-slate-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
</svg>
</button>
);
}<//button><///button>;
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip;
TooltipContent;
, TooltipProvider,;
TooltipTrigger } from "@/components/ui/tooltip";
  darkModeMessages,
lightModeMessages
} from '@/utils/themeToggleMessages'
// Use the ThemeProvider hook directly to ensure no conflicts,
import { useTheme } from "@/components/ThemeProvider";
import { logIssue } from "@/utils/logIssue";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from "@/hooks/use-toast";
import { darkModeMessages, lightModeMessages } from "@/utils/themeToggleMessages";
import { logInfo, logErrorToProduction } from "@/utils/productionLogger";
// Use the ThemeProvider hook directly to ensure no conflicts,
import { useTheme } from "@/components/ThemeProvider";
import { logIssue } from "@/utils/logIssue";
