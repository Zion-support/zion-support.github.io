import { useTheme } from "@/hooks/useTheme";
interface ChatMessageProps {
  message: string;
  isUser: boolean;

  timestamp: Date;

export const ChatMessage: React.FC<ChatMessageProps> = ({;
  message,;
  isUser,;
  timestamp,;
}: ChatMessageProps) => {;
  const { theme } = useTheme();

  // Memoise the sanitized + formatted HTML so we don't create a new object on every render –;
  // this avoids the `react/jsx-no-constructed-context-values` & `react/jsx-no-bind` warnings.;
  const sanitizedHtml = useMemo<{ __html: string }>(;
    () => ({ __html: formatMessageWithLinks(message) }),    [message];
  );




  return (
    <div className={cn("flex items-start gap-3", isUser && "flex-row-reverse")}>
      <Avatar className="h-8 w-8">
        {isUser ? (
          <>
            <AvatarImage src="https://i.pravatar.cc/40?img=1" alt="User avatar" />
            <AvatarFallback>U</AvatarFallback>
          </>
        ) : (
          <>
            <AvatarImage
              src="https://placehold.co/40x40?text=AI"
              alt="Zion Support"
            />
            <AvatarFallback className="bg-zion-purple text-white">Z</AvatarFallback>
          </>
        )}

      </Avatar>;


      <div
        className={cn(
