import React{ useMemo } from "react",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import React from "react",
import React from "react",
// Use the wrapper hook so TypeScript properly infers the return type
// from the ThemeProvider context,
import React from "react",
interface ChatMessageProps {
  message: string;,
isUser: boolean,
  timestamp: Date,
export const ChatMessage: React.FC<ChatMessageProps> = ({
