<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/ChatMessage.tsx

=======
import React from "react",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { cn } from "@/lib/utils",;
import { format } from "date-fns",;
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import React, { useMemo } from "react",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { cn } from "@/lib/utils",;
import { format } from "date-fns",;
// Use the wrapper hook so TypeScript properly infers the return type;
// from the ThemeProvider context;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/support/ChatMessage.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import { useTheme } from "@/hooks/useTheme",;
=======
import React, { useMemo } from "react";""
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";""
import { cn } from "@/lib/utils";""
import { format } from "date-fns";"
// Use the wrapper hook so TypeScript properly infers the return type;
// from the ThemeProvider context;"
import { useTheme } from "@/hooks/useTheme";"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
;
interface ChatMessageProps {;
  message: string;,;
  isUser: boolean;,;
  timestamp:Date;
}
<<<<<<< HEAD
;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/ChatMessage.tsx
export function ChatMessage({ message, isUser, timestamp } ChatMessageProps) {;
  const { theme } = useTheme(),;
  ;
  return (;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
export const ChatMessage:React.FC<ChatMessageProps> = ({;
  message,;
  isUser,;
  timestamp} ChatMessageProps) => {;
  const { theme } = useTheme(),;
  ;
<<<<<<< HEAD
  // Memoise the sanitized + formatted HTML so we don't create a new object on every render –;
=======
  // Memoise the sanitized + formatted HTML so we don't create a new object on every render ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  // this avoids the `react/jsx-no-constructed-context-values` & `react/jsx-no-bind` warnings.;
  const sanitizedHtml = useMemo<{ __html:string}>(;
    () => ({ __html:formatMessageWithLinks(message) }),;
    [message];
  ),;
;
  return (;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/support/ChatMessage.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    <div className={cn("flex items-start gap-3", isUser && "flex-row-reverse")}>;
      <Avatar className="h-8 w-8">;
        {isUser ? (;
          <>;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/ChatMessage.tsx

=======
            <AvatarImage src="https://i.pravatar.cc/40?img=1" alt="User avatar" />;
            <AvatarFallback>U</AvatarFallback>;
          </>;
        ) :(;
          <>;
            <AvatarImage;
              src="https://placehold.co/40x40?text=AI";
              alt="Zion Support";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export const ChatMessage:React.FC<ChatMessageProps> = ({;

  const sanitizedHtml = useMemo<{ __html: string;}>(;)
    () => ({ __html: formatMessageWithLinks(message) ;}),;
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            />;
"
            <AvatarFallback className="bg-zion-purple text-white">Z;"
          </>;)
        )}
<<<<<<< HEAD
      </Avatar>;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/ChatMessage.tsx

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      ;
      <div className={cn(;
        "max-w-[80%] rounded-lg px-4 py-2 text-sm",;
        isUser ;
          ? "bg-zion-purple text-white" ;
          :theme === "dark";
            ? "bg-zion-blue-light text-white";
            :"bg-gray-100 text-gray-800";
=======
      <div className={cn(;"
        "max-w-[80%] rounded-lg px-4 py-2 text-sm",;"
        isUser ;"
          ? "bg-zion-purple text-white" ;""
          :theme === "dark";""
            ? "bg-zion-blue-light text-white";""
            :"bg-gray-100 text-gray-800";")
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/support/ChatMessage.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        )}>;
          {format(timestamp, "h:mm a")}
        </div>;
      </div>;
    </div>;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/ChatMessage.tsx

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
return (<> <AvatarImage src="https://i.pravatar.cc/40?img=1" alt="User avatar" /> <AvatarFallback>U</AvatarFallback> </>) : (<> <AvatarImage src="https://placehold.co/40x40?text=AI" alt="Zion Support" /> <AvatarFallback className="bg-zion-purple text-white" >Z</AvatarFallback> </>) ;
<<<<<<< HEAD
}</Avatar> </div> </div> </div>) ;
};
//A lightweight HTML escaping utility to prevent XSS. We avoid adding a heavy //dependency like DOMPurify for now and instead escape the five critical //characters. This ensures any user-supplied string is rendered harmless //before we perform our link replacements below. ;
}//First, escape any HTML so that user input cannot break out of the intended //markup.);
:temp_broken_files/support/ChatMessage.tsx
"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/support/ChatMessage.tsx
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/support/ChatMessage.tsx
=======
}</Avatar> </div> </div> </div>) 
};
//A lightweight HTML escaping utility to prevent XSS. We avoid adding a heavy //dependency like DOMPurify for now and instead escape the five critical //characters. This ensures any user-supplied string is rendered harmless //before we perform our link replacements below. ;
}//First, escape any HTML so that user input cannot break out of the intended //markup.);
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
)
return (<> <AvatarImage src="https://i.pravatar.cc/40?img=1" alt="User avatar" /> <AvatarFallback>U </>) : (<> <AvatarImage src="https://placehold.co/40x40?text=AI" alt="Zion Support" /> <AvatarFallback className="bg-zion-purple text-white" >Z </>) ;"

} </div> </div> </div>) ;"
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
