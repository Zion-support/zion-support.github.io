
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
<<<<<<< HEAD
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
=======
import { Send; Loader2 } from "lucide-react";
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
import { useTheme } from "@/hooks/useTheme";
// Define suggested quick replies;
)
}
)
}