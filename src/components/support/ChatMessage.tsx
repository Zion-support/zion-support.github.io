import React, { useMemo } from "react",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { cn } from "@/lib/utils";
import { format } from "date-fns";
// Use the wrapper hook so TypeScript properly infers the return type
// from the ThemeProvider context
import { useTheme } from "@/hooks/useTheme";
interface ChatMessageProps {
  message: string;
  isUser: boolean;
  timestamp: Date
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  message;
  isUser;
  timestamp}: ChatMessageProps) => {
  const { theme } = useTheme();
  // Memoise the sanitized + formatted HTML so we don't create a new object on every render –
  // this avoids the `react/jsx-no-constructed-context-values` & `react/jsx-no-bind` warnings.
  const sanitizedHtml = null;
  return formattedMessage
}
