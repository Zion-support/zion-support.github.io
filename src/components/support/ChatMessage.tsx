import React, {_useMemo} from "react";
// Use the wrapper hook so TypeScript properly infers the return type
// from the ThemeProvider context

interface ChatMessageProps {_message: string;
  isUser: boolean;
  timestamp: Date;}

export const ChatMessage: React.FC<ChatMessageProps> = (_{_message, _isUser, _timestamp}: ChatMessageProps) => {_const { theme} = useTheme();
  
  // Memoise the sanitized + formatted HTML so we don't create a new object on every render –
  // this avoids the `react/jsx-no-constructed-context-values` & `react/jsx-no-bind` warnings.
  const _sanitizedHtml = useMemo<{__html: string}>(_() => ({__html: formatMessageWithLinks(message)}),
    [message]
  );

  return (
    <div className={_cn("flex items-start gap-3", _isUser && "flex-row-reverse")}>
      <Avatar className="h-8 w-8">
        {_isUser ? (
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
      </Avatar>
      
      <div className={_cn(
        "max-w-[80%] rounded-lg px-4 py-2 text-sm", _isUser 
          ? "bg-zion-purple text-white" 
          : theme === "dark"
            ? "bg-zion-blue-light text-white"
            : "bg-gray-100 text-gray-800"
      )}>
        <div dangerouslySetInnerHTML={_sanitizedHtml} />
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
};

// A lightweight HTML escaping utility to prevent XSS. We avoid adding a heavy
// dependency like DOMPurify for now and instead escape the five critical
// characters. This ensures any user-supplied string is rendered harmless
// before we perform our link replacements below.
function escapeHtml(_unsafe: string): string {_return unsafe
    .replace(/&/g, _"&amp;")
    .replace(/</g, _"&lt;")
    .replace(/>/g, _"&gt;")
    .replace(/"/g, _"&quot;")
    .replace(/'/g, _"&#039;");}

function formatMessageWithLinks(_message: string): string {_// First, _escape any HTML so that user input cannot break out of the intended
  // markup.
  const _safeText = escapeHtml(message);

  // Replace URLs
  const _urlRegex = /(https?:\/\/[^\s]+)/g;
  let _formattedMessage = safeText.replace(
    urlRegex, _'<a href="$1" target="_blank" rel="noopener noreferrer" class="text-zion-cyan underline hover:text-zion-cyan/80">$1</a>'
  );

  // Replace help-center references like [Getting Started]
  const _helpCenterRegex = /\[([^\]]+)\]/g;
  formattedMessage = formattedMessage.replace(
    helpCenterRegex, _'<a href="/help/$1" class="text-zion-cyan underline hover:text-zion-cyan/80">$1</a>'
  );

  return formattedMessage;}
