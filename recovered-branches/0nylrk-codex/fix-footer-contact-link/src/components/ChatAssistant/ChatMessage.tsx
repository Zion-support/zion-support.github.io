<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ChatAssistant/ChatMessage.tsx


import { cn } from "@/lib/utils",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",

=======


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ChatAssistant/ChatMessage.tsx
import {cn} from "@/lib/utils";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
interface ChatMessageProps {;
  role: 'user' | 'assistant',;
  message: string,;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ChatAssistant/ChatMessage.tsx

  timestamp?: Date;
  key?: string | number;
}


export function ChatMessage(): any ({ role, message, timestamp }: ChatMessageProps) {;
  const isUser = role === 'user';


=======
import {cn} from "@/lib/utils";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

=======
<<<<<<< HEAD
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
interface ChatMessageProps {

  role: 'user' | 'assistant'
  message: string

  timestamp?: Date;
=======
import {cn} from "@/lib/utils";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
import { cn } from "@/lib/utils",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",

<<<<<<< HEAD


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface ChatMessageProps {
  role: 'user' | 'assistant',
  message: string,
  timestamp?: Date,
<<<<<<< HEAD

  key?: string | number
}

<<<<<<< HEAD
export function ChatMessage({ role, message, timestamp }: ChatMessageProps) {

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
  timestamp?: Date;
  key?: string | number;
}
export function ChatMessage(): any ({ role, message, timestamp }: ChatMessageProps) {;
  const isUser = role === 'user';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ChatAssistant/ChatMessage.tsx
  return (
    <divclassName={cn(
      "flex items-start gap-2"
      isUser ? "flex-row-reverse" : "flex-row"
    )}>;
      <AvatarclassName={cn(
        "h-8 w-8 border"
        isUser ? "border-zion-purple/20" : "border-zion-cyan/20"
      )}>;
        {isUser ? (;
          <AvatarFallback className="bg-zion-purple/20 text-white">U</AvatarFallback>;
        ) : (;
          <AvatarImage
            src="https://placehold && placehold.co/32x32?text=AI"
            alt="AI Assistant"
=======
import { cn } from "@/lib/utils",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
;
interface ChatMessageProps {;
  role:'user' | 'assistant',;
  message:string,;
  timestamp?:Date,;
  key?:string | number;
}
;
export function ChatMessage({ role, message, timestamp } ChatMessageProps) {;
  const isUser = role === 'user',;
  ;
  return (;
    <div className={cn(;
      "flex items-start gap-2",;
      isUser ? "flex-row-reverse" :"flex-row";
    )}>;
      <Avatar className={cn(;
        "h-8 w-8 border",;
        isUser ? "border-zion-purple/20" :"border-zion-cyan/20";
      )}>;
        {isUser ? (;
          <AvatarFallback className="bg-zion-purple/20 text-white">U</AvatarFallback>;
        ) :(;
          <AvatarImage;
            src="https://placehold.co/32x32?text=AI";
            alt="AI Assistant";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          />;
        )}
        {!isUser && <AvatarFallback className="bg-zion-cyan/20 text-white">AI</AvatarFallback>}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ChatAssistant/ChatMessage.tsx
<<<<<<< HEAD
      </Avatar>
      <div className={cn(

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ChatAssistant/ChatMessage.tsx
      </Avatar>;
<<<<<<< HEAD
      <divclassName={cn(
        "max-w-[80%] px-4 py-2 rounded-lg"
        isUser 
          ? "bg-zion-purple/20 text-white rounded-tr-none" 
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ChatAssistant/ChatMessage.tsx

          : "bg-zion-cyan/10 text-white rounded-tl-none"
=======

        "max-w-[80%] px-4 py-2 rounded-lg",
        isUser 
          ? "bg-zion-purple/20 text-white rounded-tr-none" 

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  key?: string | number
}
<<<<<<< HEAD
=======

<<<<<<< HEAD
export function ChatMessage({ role, message, timestamp }: ChatMessageProps) {;
  const isUser = role === 'user';
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function ChatMessage({ role, message, timestamp }: ChatMessageProps) {
<<<<<<< HEAD

  const isUser = role === 'user';
=======
  const isUser = role === 'user',
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (
    <div className={cn(
      "flex items-start gap-2",
      isUser ? "flex-row-reverse" : "flex-row"
    )}>
      <Avatar className={cn(
        "h-8 w-8 border",
        isUser ? "border-zion-purple/20" : "border-zion-cyan/20"
      )}>
        {isUser ? (
          <AvatarFallback className="bg-zion-purple/20 text-white">U</AvatarFallback>
        ) : (
          <AvatarImage
            src="https://placehold.co/32x32?text=AI"
            alt="AI Assistant"
          />
        )}
        {!isUser && <AvatarFallback className="bg-zion-cyan/20 text-white">AI</AvatarFallback>}
      </Avatar>
      <div className={cn(
<<<<<<< HEAD
        "max-w-[80%] px-4 py-2 rounded-lg";
        isUser
          ? "bg-zion-purple/20 text-white rounded-tr-none"

=======
        "max-w-[80%] px-4 py-2 rounded-lg",
        isUser 
          ? "bg-zion-purple/20 text-white rounded-tr-none" 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          : "bg-zion-cyan/10 text-white rounded-tl-none"
      )}>
        <div className="whitespace-pre-wrap">{message}</div>
        {timestamp && (
          <div className="text-xs text-zion-slate mt-1 text-right">
<<<<<<< HEAD

<<<<<<< HEAD
=======
};

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
            {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        )}
      </div>
    </div>
  )
<<<<<<< HEAD
=======
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { cn } from "@/lib/utils",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
interface ChatMessageProps {;
  role: 'user' | 'assistant',;
  message: string,;
  timestamp?: Date,;
  key?: string | number;
}
;
export function ChatMessage({ role, message, timestamp }: ChatMessageProps) {;
  const isUser = role === 'user',;
  return (;
    <div className={cn(;
      "flex items-start gap-2",;
      isUser ? "flex-row-reverse" : "flex-row";
    )}>;
      <Avatar className={cn(;
        "h-8 w-8 border";
        isUser ? "border-zion-purple/20" : "border-zion-cyan/20";
      )}>;
        {isUser ? (;
          <AvatarFallback className="bg-zion-purple/20 text-white">U</AvatarFallback>;
        ) : (;
          <AvatarImage;
            src="https://placehold.co/32x32?text=AI";
            alt="AI Assistant";
          />;
        )}
        {!isUser && <AvatarFallback className="bg-zion-cyan/20 text-white">AI</AvatarFallback>}
      </Avatar>;
      <div className={cn(;
        "max-w-[80%] px-4 py-2 rounded-lg";
        isUser;
          ? "bg-zion-purple/20 text-white rounded-tr-none";
          : "bg-zion-cyan/10 text-white rounded-tl-none";
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
========
          : "bg-zion-cyan/10 text-white rounded-tl-none"
=======
      ;
      <div className={cn(;
        "max-w-[80%] px-4 py-2 rounded-lg",;
        isUser ;
          ? "bg-zion-purple/20 text-white rounded-tr-none" ;
          :"bg-zion-cyan/10 text-white rounded-tl-none";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ChatAssistant/ChatMessage.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      )}>;
        <div className="whitespace-pre-wrap">{message}</div>;
        {timestamp && (;
          <div className="text-xs text-zion-slate mt-1 text-right">;
<<<<<<< HEAD
<<<<<<< HEAD
            {timestamp && timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
=======
            {timestamp.toLocaleTimeString([], { hour:'2-digit', minute:'2-digit' })}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
            {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </div>;
        )}
      </div>;
    </div>;
<<<<<<< HEAD
<<<<<<< HEAD
  );
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ChatAssistant/ChatMessage.tsx

<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ChatAssistant/ChatMessage.tsx
import { cn } from '@/lib / utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components / ui / avatar';
interface ChatMessageProps {
  role: 'user' | 'assistant',
  message: string,
  timestamp?: Date;
  key?: string | number;
}
export /**
 * ChatMessage - Function description
 */
function ChatMessage() {
  const is_user = role === 'user';
;
  return (
    <div className={cn (
      "flex items - start gap - 2";
      is_user ? "flex - row - reverse" : "flex - row")}>;
      <Avatar className={cn (
        "h - 8 w - 8 border";
        is_user ? "border - zion - purple / 20" : "border - zion - cyan / 20")}>;
        {is_user ? (
          <AvatarFallback className="bg - zion - purple / 20 text - white">U</AvatarFallback>) : (
          <AvatarImage;
            src="https://placehold.co / 32x32?text = AI";
            alt="AI Assistant";
          />)}
        {!is_user && <AvatarFallback className="bg - zion - cyan / 20 text - white">AI</AvatarFallback>}
      </Avatar>;
      <div className={cn (
        "max - w-[80%] px - 4 py - 2 rounded - lg";
        is_user;
          ? "bg - zion - purple / 20 text - white rounded - tr - none";
          : "bg - zion - cyan / 10 text - white rounded - tl - none")}>;
        <div className="whitespace - pre - wrap">{message}</div>;
        {timestamp && (
          <div className="text - xs text - zion - slate mt - 1 text - right">;
            {timestamp.toLocaleTimeString ([], { hour: '2 - digit', minute: '2 - digit' })}
          </div>)}
      </div>;
    </div>);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ChatAssistant/ChatMessage.tsx

}
=======

}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
  ),; interface ChatMessageProps {
  role: 'user' | 'assistant';
message: string;
timestamp?: Date;
key?: string | number 
}export function ChatMessage ({
  role, message, timestamp 
}: ChatMessageProps) {
  const isUser = role === 'user';
return (<div className= {
  cn ("flex items-start gap-2";
isUser ? "flex-row-reverse" : "flex-row") 
}> <Avatar className= {
  cn ("h-8 w-8 border";
isUser ? "border-zion-purple/20" : "border-zion-cyan/20") 
}> {
  isUser ? (<AvatarFallback className="bg-zion-purple/20 text-white" >U</AvatarFallback> https://placehold.co/32x32?text=AI"alt=" AI Assistant" />) 
}</div>) 
}</div> </div>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ChatAssistant/ChatMessage.tsx
=======
  );
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
