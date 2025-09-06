

import {cn} from "@/lib/utils";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
<<<<<<< HEAD

interface ChatMessageProps {;
  role: 'user' | 'assistant',;
  message: string,;

  timestamp?: Date;
  key?: string | number;
}


export function ChatMessage(): any ({ role, message, timestamp }: ChatMessageProps) {;
  const isUser = role === 'user';


=======
import {cn} from "@/lib/utils";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

=======
import { cn } from "@/lib/utils",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
interface ChatMessageProps {;
  role: 'user' | 'assistant',;
  message: string,;
import {cn} from "@/lib/utils";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
interface ChatMessageProps {

  role: 'user' | 'assistant'
  message: string

  timestamp?: Date;
import {cn} from "@/lib/utils";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import { cn } from "@/lib/utils",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",

import { cn } from "@/lib/utils",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
interface ChatMessageProps {
  role: 'user' | 'assistant',
  message: string,
  timestamp?: Date,


  timestamp?: Date;
  key?: string | number;
}
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
export function ChatMessage(): any ({ role, message, timestamp }: ChatMessageProps) {;
  const isUser = role === 'user';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          />;
        )}
        {!isUser && <AvatarFallback className="bg-zion-cyan/20 text-white">AI</AvatarFallback>}

      </Avatar>;
<<<<<<< HEAD

      <divclassName={cn(
        "max-w-[80%] px-4 py-2 rounded-lg"
        isUser 
          ? "bg-zion-purple/20 text-white rounded-tr-none" 

          : "bg-zion-cyan/10 text-white rounded-tl-none"
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

        "max-w-[80%] px-4 py-2 rounded-lg",
        isUser 
          ? "bg-zion-purple/20 text-white rounded-tr-none" 

<<<<<<< HEAD
=======
  key?: string | number
}

export function ChatMessage({ role, message, timestamp }: ChatMessageProps) {;
  const isUser = role === 'user';
export function ChatMessage({ role, message, timestamp }: ChatMessageProps) {

  const isUser = role === 'user';
  const isUser = role === 'user',
  
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
        "max-w-[80%] px-4 py-2 rounded-lg";
        isUser
          ? "bg-zion-purple/20 text-white rounded-tr-none"

        "max-w-[80%] px-4 py-2 rounded-lg",
        isUser 
          ? "bg-zion-purple/20 text-white rounded-tr-none" 
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          : "bg-zion-cyan/10 text-white rounded-tl-none"
      )}>
        <div className="whitespace-pre-wrap">{message}</div>
        {timestamp && (
          <div className="text-xs text-zion-slate mt-1 text-right">
<<<<<<< HEAD

};

=======
=======
};

            {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        )}
      </div>
    </div>
  )
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
=======
          : "bg-zion-cyan/10 text-white rounded-tl-none"
      ;
      <div className={cn(;
        "max-w-[80%] px-4 py-2 rounded-lg",;
        isUser ;
          ? "bg-zion-purple/20 text-white rounded-tr-none" ;
          :"bg-zion-cyan/10 text-white rounded-tl-none";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      )}>;
        <div className="whitespace-pre-wrap">{message}</div>;
        {timestamp && (;
          <div className="text-xs text-zion-slate mt-1 text-right">;
<<<<<<< HEAD
            {timestamp && timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
=======
            {timestamp.toLocaleTimeString([], { hour:'2-digit', minute:'2-digit' })}
            {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          </div>;
        )}
      </div>;
    </div>;
<<<<<<< HEAD
  );

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

<<<<<<< HEAD
=======
}

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
}
  );
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}
}
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
