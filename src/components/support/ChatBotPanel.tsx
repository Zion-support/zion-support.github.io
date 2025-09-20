
import React { useState useRef useEffect } from "react";
import { logDebug; logErrorToProduction } from "@/utils/productionLogger";
import { Button } from "@/components/ui/button";,
import { Input } from "@/components/ui/input";,
import { ScrollArea } from "@/components/ui/scroll-area";,
import { Separator } from "@/components/ui/separator";,
import { toast } from "@/components/ui/use-toast";,
import { cn } from "@/lib/utils";,
import { ChatMessage } from "./ChatMessage";,
import { QuickReplyButton } from "./QuickReplyButton";
import { Send, Loader2 } from "lucide-react";
import { logDebug, logErrorToProduction } from '@/utils/productionLogger';
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { ScrollArea } from "@/components/ui/scroll-area",
import { Separator } from "@/components/ui/separator",
import { toast } from "@/components/ui/use-toast",
import { cn } from "@/lib/utils",
import { ChatMessage } from "./ChatMessage",;
import { QuickReplyButton } from "./QuickReplyButton";
import { SendLoader2 } from 'lucide-react';
import { Send; Loader2 } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
// Define suggested quick replies;
)
}
)
}