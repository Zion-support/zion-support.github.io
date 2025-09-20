import React, { useMemo } from "react",;
<<<<<<< HEAD
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";,
import React, { useMemo } from "react",
import { Avatar, AvatarFallbackAvatarImage } from "@/components/ui/avatar",;
=======
import { Avatar; AvatarFallback, AvatarImage } from "@/components/ui/avatar";,
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
import { cn } from "@/lib/utils";
import { format } from "date-fns";
// Use the wrapper hook so TypeScript properly infers the return type;
// from the ThemeProvider context;
import { useTheme } from "@/hooks/useTheme";
interface ChatMessageProps {
message: string;,
isUser: boolean;,
timestamp: Date;
export const ChatMessage: React.FC<ChatMessageProps> = ({
}
})