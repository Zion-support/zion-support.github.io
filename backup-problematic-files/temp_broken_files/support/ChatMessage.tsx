import React, { useMemo } from "react",;""
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;""
import { cn } from "@/lib/utils",;""
import { format } from "date-fns",;"
// Use the wrapper hook so TypeScript properly infers the return type;
// from the ThemeProvider context;"
import { useTheme } from "@/hooks/useTheme",;"
;
interface ChatMessageProps {;
  message:string,;
  isUser:boolean,;
  timestamp:Date;
}
export const ChatMessage:React.FC<ChatMessageProps> = ({;

  const sanitizedHtml = useMemo<{ __html:string}>(;)
    () => ({ __html:formatMessageWithLinks(message) }),;
    [message];
  ),;
  return (;)"
    <div className={cn("flex items-start gap-3", isUser && "flex-row-reverse")}>;"
</div>"
      <Avatar className="h-8 w-8">;"

          <>;"
            <AvatarImage src="https://i.pravatar.cc/40?img=1" alt="User avatar" />;"

            <AvatarFallback>U;
          </>;
        ) :(;
          <>;
            <AvatarImage;"
              src="https://placehold.co/40x40?text=AI";""
              alt="Zion Support";"
            />;
"
            <AvatarFallback className="bg-zion-purple text-white">Z;"
          </>;)
        )}
      <div className={cn(;"
        "max-w-[80%] rounded-lg px-4 py-2 text-sm",;"
        isUser ;"
          ? "bg-zion-purple text-white" ;""
          :theme === "dark";""
            ? "bg-zion-blue-light text-white";""
            :"bg-gray-100 text-gray-800";")
      )}>;
</div>
        <div dangerouslySetInnerHTML={sanitizedHtml} />;
          "text-xs mt-1",;"
            ? "text-white/70" ;""
              ? "text-gray-300";""
              :"text-gray-500";")
        </div>;
    </div>;"
    .replace(/</g, "<");""
    .replace(/>/g, ">");""
    .replace(/"/g, """);""
    .replace(/'/g, "&#039,"),;"
function formatMessageWithLinks(message:string):string {;
  // First, escape any HTML so that user input cannot break out of the intended;
  // markup.;
  const safeText = escapeHtml(message),;
  // Replace URLs;
  const urlRegex = /(https?:\/\/[^\s]+)/g,;
  let formattedMessage = safeText.replace(;
    urlRegex,;"
    '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-zion-cyan underline hover:text-zion-cyan/80">$1</a>';
    '<a href="/help/$1" class="text-zion-cyan underline hover:text-zion-cyan/80">$1</a>';
}export const ChatMessage: React.FC<ChatMessageProps> = ({;
)
return (<> <AvatarImage src="https://i.pravatar.cc/40?img=1" alt="User avatar" /> <AvatarFallback>U </>) : (<> <AvatarImage src="https://placehold.co/40x40?text=AI" alt="Zion Support" /> <AvatarFallback className="bg-zion-purple text-white" >Z </>) ;"

} </div> </div> </div>) ;"