import React, { useMemo } from "react",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { cn } from "@/lib/utils",;
import { format } from "date-fns",;
// Use the wrapper hook so TypeScript properly infers the return type;
// from the ThemeProvider context;
<<<<<<< HEAD
import { useTheme } from "@/hooks/useTheme",;
;
interface ChatMessageProps {;
  message:string,;
  isUser:boolean,;
  timestamp:Date;
}
;
=======

import { useTheme } from "@/hooks/useTheme",;

;
interface ChatMessageProps {;
  message: string;,;
  isUser: boolean;,;
  timestamp:Date;
}

>>>>>>> merged-prs-20250907-203621
export const ChatMessage:React.FC<ChatMessageProps> = ({;
  message,;
  isUser,;
  timestamp} ChatMessageProps) => {;
  const { theme } = useTheme(),;
  ;
<<<<<<< HEAD
  // Memoise the sanitized + formatted HTML so we don't create a new object on every render –;
=======

>>>>>>> merged-prs-20250907-203621
  // this avoids the `react/jsx-no-constructed-context-values` & `react/jsx-no-bind` warnings.;
  const sanitizedHtml = useMemo<{ __html:string}>(;
    () => ({ __html:formatMessageWithLinks(message) }),;
    [message];
  ),;
;
  return (;
<<<<<<< HEAD
=======

>>>>>>> merged-prs-20250907-203621
    <div className={cn("flex items-start gap-3", isUser && "flex-row-reverse")}>;
      <Avatar className="h-8 w-8">;
        {isUser ? (;
          <>;
<<<<<<< HEAD
            <AvatarImage src="https://i.pravatar.cc/40?img=1" alt="User avatar" />;
            <AvatarFallback>U</AvatarFallback>;
          </>;
        ) :(;
          <>;
            <AvatarImage;
              src="https://placehold.co/40x40?text=AI";
              alt="Zion Support";
            />;
            <AvatarFallback className="bg-zion-purple text-white">Z</AvatarFallback>;
          </>;
=======

            />;
"
            <AvatarFallback className="bg-zion-purple text-white">Z;"
          </>;)
>>>>>>> merged-prs-20250907-203621
        )}

      ;
      <div className={cn(;
        "max-w-[80%] rounded-lg px-4 py-2 text-sm",;
        isUser ;
          ? "bg-zion-purple text-white" ;
          :theme === "dark";
            ? "bg-zion-blue-light text-white";
            :"bg-gray-100 text-gray-800";
<<<<<<< HEAD
=======

>>>>>>> merged-prs-20250907-203621
      )}>;
</div>
        <div dangerouslySetInnerHTML={sanitizedHtml} />;
<<<<<<< HEAD
        <div className={cn(;
          "text-xs mt-1",;
          isUser ;
            ? "text-white/70" ;
            :theme === "dark";
              ? "text-gray-300";
              :"text-gray-500";
=======

>>>>>>> merged-prs-20250907-203621
        )}>;
          {format(timestamp, "h:mm a")}
        </div>;
      </div>;
    </div>;

  ),;
},;
;
// A lightweight HTML escaping utility to prevent XSS. We avoid adding a heavy;
// dependency like DOMPurify for now and instead escape the five critical;
// characters. This ensures any user-supplied string is rendered harmless;
// before we perform our link replacements below.;
function escapeHtml(unsafe:string):string {;
  return unsafe;
    .replace(/&/g, "&amp,");
    .replace(/</g, "<");
    .replace(/>/g, ">");
    .replace(/"/g, """);
    .replace(/'/g, "&#039,"),;
}
;
<<<<<<< HEAD
=======

>>>>>>> merged-prs-20250907-203621
function formatMessageWithLinks(message:string):string {;
  // First, escape any HTML so that user input cannot break out of the intended;
  // markup.;
  const safeText = escapeHtml(message),;
  // Replace URLs;
  const urlRegex = /(https?:\/\/[^\s]+)/g,;
  let formattedMessage = safeText.replace(;
<<<<<<< HEAD
    urlRegex,;
    '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-zion-cyan underline hover:text-zion-cyan/80">$1</a>';
  ),;
;
  // Replace help-center references like [Getting Started];
  const helpCenterRegex = /\[([^\]]+)\]/g,;
  formattedMessage = formattedMessage.replace(;
    helpCenterRegex,;
    '<a href="/help/$1" class="text-zion-cyan underline hover:text-zion-cyan/80">$1</a>';
  ),;
;
  return formattedMessage;
} interface ChatMessageProps {;
  message: string;
isUser: boolean;
timestamp: Date ;
=======
    urlRegex,;"
    '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-zion-cyan underline hover:text-zion-cyan/80">$1</a>';
    '<a href="/help/$1" class="text-zion-cyan underline hover:text-zion-cyan/80">$1</a>';
>>>>>>> merged-prs-20250907-203621
}export const ChatMessage: React.FC<ChatMessageProps> = ({;
  message;
isUser;
timestamp ;
}: ChatMessageProps) => {;
  const { ;
  theme ;
 } = useTheme ();
html: string ;
}> ( () => ({;
  html: formatMessageWithLinks (message) ;
});
[message]);
<<<<<<< HEAD
=======
<<<<<<< HEAD
return (<> <AvatarImage src="https://i.pravatar.cc/40?img=1" alt="User avatar" /> <AvatarFallback>U</AvatarFallback> </>) : (<> <AvatarImage src="https://placehold.co/40x40?text=AI" alt="Zion Support" /> <AvatarFallback className="bg-zion-purple text-white" >Z</AvatarFallback> </>) ;
=======
>>>>>>> merged-prs-20250907-203621
return (<> <AvatarImage src="https://i.pravatar.cc/40?img=1" alt="User avatar" /> <AvatarFallback>U</AvatarFallback> </>) : (<> <AvatarImage src="https://placehold.co/40x40?text=AI" alt="Zion Support" /> <AvatarFallback className="bg-zion-purple text-white" >Z</AvatarFallback> </>) ;
}</Avatar> </div> </div> </div>) ;
};
//A lightweight HTML escaping utility to prevent XSS. We avoid adding a heavy //dependency like DOMPurify for now and instead escape the five critical //characters. This ensures any user-supplied string is rendered harmless //before we perform our link replacements below. ;
}//First, escape any HTML so that user input cannot break out of the intended //markup.);
<<<<<<< HEAD
:temp_broken_files/support/ChatMessage.tsx
"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/support/ChatMessage.tsx
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
