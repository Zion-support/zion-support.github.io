<<<<<<< HEAD
=======
<<<<<<< HEAD
import {cn} from "@/lib/utils";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

=======
<<<<<<< HEAD
=======
import {cn} from "@/lib/utils";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
interface ChatMessageProps {;
  role: 'user' | 'assistant',;
  message: string,;
import {cn} from "@/lib/utils";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
interface ChatMessageProps {
<<<<<<< HEAD
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
interface ChatMessageProps {
=======
<<<<<<< HEAD
=======

  role: 'user' | 'assistant'
  message: string

  timestamp?: Date;
import {cn} from "@/lib/utils";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import { cn } from "@/lib/utils",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",

import { cn } from "@/lib/utils",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",

=======

interface ChatMessageProps {;
  role: 'user' | 'assistant',;
  message: string,;
import {cn} from "@/lib/utils";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

>>>>>>> merged-prs-20250907-203621
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
interface ChatMessageProps {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD
interface ChatMessageProps {
>>>>>>> origin/resolved-merge-conflicts
  role: 'user' | 'assistant',
  message: string,
  timestamp?: Date,
  key?: string | number
}

  role: 'user' | 'assistant'
  message: string

  timestamp?: Date;
interface ChatMessageProps {
  role: 'user' | 'assistant',
  message: string,
  timestamp?: Date,
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  key?: string | number
}
export function ChatMessage({ role, message, timestamp }: ChatMessageProps) {
  const isUser = $2;
  return (
    <div className = $2;
      isUser ? "flex-row-reverse" : "flex-row"
    )}>
      <Avatar className = $2;
        isUser ? "border-zion-purple/20" : "border-zion-cyan/20"
      )}>
        {isUser ? (
          <AvatarFallback className = $2;
        isUser 
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

>>>>>>> origin/resolved-merge-conflicts
  timestamp?: Date;
  key?: string | number;
}

  const isUser = role === 'user';
export function ChatMessage({ role, message, timestamp }: ChatMessageProps) {

  const isUser = role === 'user';
  const isUser = role === 'user',
<<<<<<< HEAD
  
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
import {cn} from "@/lib/utils";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

=======
import { cn } from "@/lib/utils",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface ChatMessageProps {
  role: 'user' | 'assistant',
  message: string,
  timestamp?: Date,


  timestamp?: Date;
  key?: string | number;
}
export function ChatMessage(): any ({ role, message, timestamp }: ChatMessageProps) {;
  const isUser = role === 'user';
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  return (
    <divclassName={cn("
      "flex items-start gap-2""
      isUser ? "flex-row-reverse" : "flex-row"
    )}>;
      <AvatarclassName={cn("
        "h-8 w-8 border""
        isUser ? "border-zion-purple/20" : "border-zion-cyan/20"
      )}>;
        {isUser ? (;"
          <AvatarFallback className="bg-zion-purple/20 text-white">U</AvatarFallback>;
        ) : (;
          <AvatarImage"
            src="https://placehold && placehold.co/32x32?text=AI""
            alt="AI Assistant"
<<<<<<< HEAD
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
          />;
        )}"
        {!isUser && <AvatarFallback className="bg-zion-cyan/20 text-white">AI</AvatarFallback>}

<<<<<<< HEAD
"
        "max-w-[80%] px-4 py-2 rounded-lg",
        isUser "
          ? "bg-zion-purple/20 text-white rounded-tr-none" 

"
        "max-w-[80%] px-4 py-2 rounded-lg",
        isUser "
          ? "bg-zion-purple/20 text-white rounded-tr-none" 
"
          : "bg-zion-cyan/10 text-white rounded-tl-none"

=======
      </Avatar>;

      <divclassName={cn(
        "max-w-[80%] px-4 py-2 rounded-lg"
        isUser 
          ? "bg-zion-purple/20 text-white rounded-tr-none" 

          : "bg-zion-cyan/10 text-white rounded-tl-none"
  key?: string | number
}
export function ChatMessage({ role, message, timestamp }: ChatMessageProps) {
  const isUser = $2;
  return (
    <div className = $2;
      isUser ? "flex-row-reverse" : "flex-row"
    )}>
      <Avatar className = $2;
        isUser ? "border-zion-purple/20" : "border-zion-cyan/20"
      )}>
        {isUser ? (
          <AvatarFallback className = $2;
        isUser 
          ? "bg-zion-purple/20 text-white rounded-tr-none" 
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
"
        "max-w-[80%] px-4 py-2 rounded-lg",
        isUser "
          ? "bg-zion-purple/20 text-white rounded-tr-none" 
"
          : "bg-zion-cyan/10 text-white rounded-tl-none"

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
          : "bg-zion-cyan/10 text-white rounded-tl-none"
      )}>
        <div className="whitespace-pre-wrap">{message}</div>
        {timestamp && (
          <div className="text-xs text-zion-slate mt-1 text-right">
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
};

>>>>>>> merged-prs-20250907-203621
            {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        )}
      </div>
    </div>
  )
<<<<<<< HEAD
}
=======
};
=======

<<<<<<< HEAD
=======
};

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { cn } from "@/lib/utils",;

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
interface ChatMessageProps {;'

  role: 'user' | 'assistant',;
  message: string,;
  timestamp?: Date,;
  key?: string | number;
}
;

          : "bg-zion-cyan/10 text-white rounded-tl-none"
;
      <div className={cn(;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
        "max-w-[80%] px-4 py-2 rounded-lg";
        isUser;
          ? "bg-zion-purple/20 text-white rounded-tr-none";
          : "bg-zion-cyan/10 text-white rounded-tl-none";
<<<<<<< HEAD
          : "bg-zion-cyan/10 text-white rounded-tl-none"
      ;
      <div className={cn(;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        "max-w-[80%] px-4 py-2 rounded-lg",;
        isUser ;
          ? "bg-zion-purple/20 text-white rounded-tr-none" ;
          :"bg-zion-cyan/10 text-white rounded-tl-none";
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      )}>;

        <div className="whitespace-pre-wrap">{message}</div>;
        {timestamp && (;
          <div className="text-xs text-zion-slate mt-1 text-right">;
<<<<<<< HEAD
            {timestamp && timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
{timestamp.toLocaleTimeString([], { hour:'2-digit', minute:'2-digit' })}
            {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
=======
<<<<<<< HEAD
            {timestamp.toLocaleTimeString([], { hour:'2-digit', minute:'2-digit' })}
            {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
=======
            {timestamp && timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
<<<<<<< HEAD
{timestamp.toLocaleTimeString([], { hour:'2-digit', minute:'2-digit' })}
            {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          </div>;
>>>>>>> origin/resolved-merge-conflicts
        "max-w-[80%] px-4 py-2 rounded-lg",
        isUser 
          ? "bg-zion-purple/20 text-white rounded-tr-none"       )}>;
        <div className="whitespace-pre-wrap">{message}</div>;
        {timestamp && (;
          <div className="text-xs text-zion-slate mt-1 text-right">;          </div>;
        )}
      </div>;
    </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

>>>>>>> origin/resolved-merge-conflicts
  );

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
<<<<<<< HEAD
}
=======
});

<<<<<<< HEAD
}
}
=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts
  );
import { cn } from '@/lib / utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components / ui / avatar';
interface ChatMessageProps {
  role: 'user' | 'assistant',
  message: string,
  timestamp?: Date;
  key?: string | number;
}
<<<<<<< HEAD
=======
}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

}

>>>>>>> origin/resolved-merge-conflicts
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
          <AvatarFallback className="bg - zion - purple / 20 text-white">U</AvatarFallback>) : (
          <AvatarImage;
            src="https://placehold.co / 32x32?text = AI";
            alt="AI Assistant";
          />)}
        {!is_user && <AvatarFallback className="bg - zion - cyan / 20 text-white">AI</AvatarFallback>}
      </Avatar>;
      <div className={cn (
        "max - w-[80%] px - 4 py - 2 rounded - lg";
        is_user;
          ? "bg - zion - purple / 20 text - white rounded - tr - none";
          : "bg - zion - cyan / 10 text - white rounded - tl - none")}>;
        <div className="whitespace - pre-wrap">{message}</div>;
        {timestamp && (
          <div className="text - xs text - zion - slate mt - 1 text-right">;
            {timestamp.toLocaleTimeString ([], { hour: '2 - digit', minute: '2 - digit' })}
          </div>)}
      </div>;
    </div>);
}
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
}}
}
=======
>>>>>>> origin/resolved-merge-conflicts
}

            {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        )}
      </div>
    </div>
  )
}
<<<<<<< HEAD
=======
  );
}
}
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
