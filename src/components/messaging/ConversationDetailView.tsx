interface Service {
  
id: string;
name: string;
}
}
}

import React from "react";
import { format } from "date-fns";
import { MessageSquare } from "lucide-react";
import { useMessaging } from "@/context/MessagingContext";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useAuth } from "@/hooks/useAuth";
import { MessageBubble } from "./MessageBubble";
import { DateDivider } from "./DateDivider";
export function ConversationDetailView() {loadMessages} = useMessaging();
            <AvatarImage
                  <img
                {group.messages.map((message) => (
                  <MessageBubble
          <textarea
value = {messageText}
            onChange = {(e) => setMessageText(e.target.value)}