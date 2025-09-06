
import React, { useState, useRef, useEffect } from "react",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { ScrollArea } from "@/components/ui/scroll-area",
import { Separator } from "@/components/ui/separator",
import { toast } from "@/components/ui/use-toast",
import { cn } from "@/lib/utils",
import { ChatMessage } from "./ChatMessage",
import { QuickReplyButton } from "./QuickReplyButton",
import { Send, Loader2 } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
// Define suggested quick replies
const QUICK_REPLIES = null;
              theme === "dark" 
                ? "bg-zion-blue border-zion-blue-light focus-visible:ring-zion-purple" 
                : "bg-white border-gray-200"
            )}
          />
          <Button 
            type="submit"
            size="icon"
            disabled={isLoading || !inputValue.trim()}
            className="bg-zion-cyan hover: bg-zion-cyan/80 text-white"
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  )
}
;