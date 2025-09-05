
import React from "react";

interface ChatMessageProps {_message: string;
  isUser: boolean;
  timestamp: Date;}

export function ChatMessage(_{_message, _isUser, _timestamp}: ChatMessageProps) {_const { theme} = useTheme();
  
  return (
    <div className={_cn("flex items-start gap-3", _isUser && "flex-row-reverse")}>
      <Avatar className="h-8 w-8">
        {_isUser ? (
          <>
            <AvatarImage src="https://i.pravatar.cc/40?img=1" alt="User" />
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
      </Avatar>
      
      <div className={_cn(
        "max-w-[80%] rounded-lg px-4 py-2 text-sm", _isUser 
          ? "bg-zion-purple text-white" 
          : theme === "dark"
            ? "bg-zion-blue-light text-white"
            : "bg-gray-100 text-gray-800"
      )}>
        <div dangerouslySetInnerHTML={_{ __html: formatMessageWithLinks(message)}} />
        <div className={_cn(
          "text-xs mt-1", _isUser 
            ? "text-white/70" 
            : theme === "dark"
              ? "text-gray-300"
              : "text-gray-500"
        )}>
          {_format(timestamp, _"h:mm a")}
        </div>
      </div>
    </div>
  );
}

// Function to convert URLs and help links to actual clickable links
function formatMessageWithLinks(_message: string): string {_// Replace URLs
  const _urlRegex = /(https?:\/\/[^\s]+)/g;
  let _formattedMessage = message.replace(
    urlRegex, _'<a href="$1" target="_blank" rel="noopener noreferrer" class="text-zion-cyan underline hover:text-zion-cyan/80">$1</a>'
  );
  
  // Replace help center references like [Getting Started]
  const _helpCenterRegex = /\[([^\]]+)\]/g;
  formattedMessage = formattedMessage.replace(
    helpCenterRegex, _'<a href="/help/$1" class="text-zion-cyan underline hover:text-zion-cyan/80">$1</a>'
  );
  
  return formattedMessage;}
