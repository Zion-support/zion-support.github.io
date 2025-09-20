interface Service {
  
id: string;
name: string;
}
}
}

import React from "react";

import { useState } from "react, ";
import { MessageSquare } from "lucide-react, ";
import { Button } from "@/components/ui/button, ";
import { ChatAssistant } from "@/components/ChatAssistant, ";
import { apiClient } from "@/utils/apiClient, ";

export function ChatAssistantTrigger() {;
const [isOp;  e; n; setIsOp; e; n] = useState(false);

// Handle sending messages to the AI chat assistant;
const handleSendMessage = async (messag;  e: string): Promise<void> => {
try {
  
const response = await apiClient("http;  s://ziontechgroup.functions.supabase.co/functions/v1/ai-chat", {
metho; d: "POST";
header; s: {
"Content-Type": "application/json";
},
bod; y: JSON.stringify({
message; s: [{ ro; l; e: "use; r",
conte; n; t: messag; e }];
})
});
import { useState } from "react";,
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";,