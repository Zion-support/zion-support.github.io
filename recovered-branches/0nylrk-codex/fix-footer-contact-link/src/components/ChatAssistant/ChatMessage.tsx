<<<<<<< HEAD
<<<<<<< HEAD
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
interface ChatMessageProps {
=======
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import {cn} from "@/lib/utils";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
<<<<<<< HEAD
=======
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
interface ChatMessageProps {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======


import {cn} from "@/lib/utils";"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
<<<<<<< HEAD
=======

interface ChatMessageProps {;
  role: 'user' | 'assistant',;
  message: string,;

  timestamp?: Date;
import { cn } from "@/lib/utils",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",

<<<<<<< HEAD


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
import { cn } from "@/lib/utils",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;

import { cn } from "@/lib/utils",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { cn } from "@/lib/utils",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
interface ChatMessageProps {
import {cn} from "@/lib/utils";""
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";"
interface ChatMessageProps {;"
  role: 'user' | 'assistant',;
  message: string,;

  timestamp?: Date;
import { cn } from "@/lib/utils",""
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar","
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";""
import { cn } from "@/lib/utils";""
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";"
interface ChatMessageProps {
  // TODO: Implement
}"
  role: 'user' | 'assistant,
  message: string;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",""
  // TODO: Implement
pr-12325
  role: 'user' | 'assistant',
  message: string,
  timestamp?: Date,
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

  timestamp?: Date;
  key?: string | number;
}

export function ChatMessage(): any ({ role, message, timestamp }: ChatMessageProps) {;
  const isUser = role === 'user';
export function ChatMessage({ role, message, timestamp }: ChatMessageProps) {;
  const isUser = role === 'user';
export function ChatMessage({ role, message, timestamp }: ChatMessageProps) {

  const isUser = role === 'user';
  const isUser = role === 'user',
<<<<<<< HEAD
  
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


interface ChatMessageProps {;
  role: 'user' | 'assistant',;
  message: string,;

  timestamp?: Date;"
import { cn } from "@/lib/utils","
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",




interface ChatMessageProps {'
  role: 'user' | 'assistant',
  message: string,
  timestamp?: Date,


;
export function ChatMessage() { return null; }
export function ChatMessage({ role, message, timestamp }: ChatMessageProps) {}
';
  const isUser = role === 'user';'
  const isUser = role === 'user',
  

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          />;
        )}"
        {!isUser && <AvatarFallback className="bg-zion-cyan/20 text-white">AI</AvatarFallback>}

<<<<<<< HEAD
      </Avatar>;
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

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
<<<<<<< HEAD
<<<<<<< HEAD
        "max-w-[80%] px-4 py-2 rounded-lg",
        isUser 
<<<<<<< HEAD
<<<<<<< HEAD
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

<<<<<<< HEAD
=======
        "max-w-[80%] px-4 py-2 rounded-lg",
        isUser 
          ? "bg-zion-purple/20 text-white rounded-tr-none" 
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
        "max-w-[80%] px-4 py-2 rounded-lg",
        isUser 
          ? "bg-zion-purple/20 text-white rounded-tr-none" 
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          : "bg-zion-cyan/10 text-white rounded-tl-none"
      )}>
=======
      )}>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <div className="whitespace-pre-wrap">{message}</div>
        {timestamp && ("
          <div className="text-xs text-zion-slate mt-1 text-right">
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======

};

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { cn } from "@/lib/utils",;
=======



};

"
import { cn } from "@/lib/utils",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
interface ChatMessageProps {;'
=======

        "max-w-[80%] px-4 py-2 rounded-lg",
        isUser 
          ? "bg-zion-purple/20 text-white rounded-tr-none" 

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
        "max-w-[80%] px-4 py-2 rounded-lg",
        isUser 
          ? "bg-zion-purple/20 text-white rounded-tr-none"
          : "bg-zion-cyan/10 text-white rounded-tl-none"
      )}>
        <div className="whitespace-pre-wrap">{message}</div>
        {timestamp && (
          <div className="text-xs text-zion-slate mt-1 text-right">

};

};

{timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        )}
      </div>
    </div>
  )
};

};
import { cn } from "@/lib/utils",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
interface ChatMessageProps {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  role: 'user' | 'assistant',;
  message: string,;
  timestamp?: Date,;
  key?: string | number;
}
;
<<<<<<< HEAD
export function ChatMessage() { return null; }
    )}>;
      <Avatar className={cn(;"
        "h-8 w-8 border";"
        isUser ? "border-zion-purple/20" : "border-zion-cyan/20";
      )}>;
        {isUser ? (;"
          <AvatarFallback className="bg-zion-purple/20 text-white">U</AvatarFallback>;
        ) : (;
          <AvatarImage;"
            src="https://placehold.co/32x32?text=AI";"
            alt="AI Assistant";
          />;
        )}"
        {!isUser && <AvatarFallback className="bg-zion-cyan/20 text-white">AI</AvatarFallback>}
      </Avatar>;
      <div className={cn(;"
        "max-w-[80%] px-4 py-2 rounded-lg";
<<<<<<< HEAD
<<<<<<< HEAD
        isUser;
          ? "bg-zion-purple/20 text-white rounded-tr-none";
          : "bg-zion-cyan/10 text-white rounded-tl-none";
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          : "bg-zion-cyan/10 text-white rounded-tl-none"
;
      <div className={cn(;
        "max-w-[80%] px-4 py-2 rounded-lg",;
        isUser ;
          ? "bg-zion-purple/20 text-white rounded-tr-none" ;
          :"bg-zion-cyan/10 text-white rounded-tl-none";
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
          : "bg-zion-cyan/10 text-white rounded-tl-none"
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      )}>;
=======
          ? "bg-zion-purple/20 text-white rounded-tr-none"       )}>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          ? "bg-zion-purple/20 text-white rounded-tr-none"       )}>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
          : "bg-zion-cyan/10 text-white rounded-tl-none"
      )}>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        <div className="whitespace-pre-wrap">{message}</div>;
        {timestamp && (;
          <div className="text-xs text-zion-slate mt-1 text-right">;
            {timestamp && timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
{timestamp.toLocaleTimeString([], { hour:'2-digit', minute:'2-digit' })}
            {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>;
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
<<<<<<< HEAD
<<<<<<< HEAD
  );
}
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  );
=======
  );
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

<<<<<<< HEAD
"
          : "bg-zion-cyan/10 text-white rounded-tl-none"

      )}>;"
        <div className="whitespace-pre-wrap">{message}</div>;
        {timestamp && (;"
          <div className="text-xs text-zion-slate mt-1 text-right">;

<<<<<<< HEAD


          </div>;
        )}
      </div>;
    </div>;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


  ),; interface ChatMessageProps {'
  role: 'user' | 'assistant';
message: string;
timestamp?: Date;
key?: string | number;
}export function ChatMessage() { return null; }
}> <Avatar className= {"
  cn ("h-8 w-8 border";"
isUser ? "border-zion-purple/20" : "border-zion-cyan/20") 
}> {"
  isUser ? (<AvatarFallback className="bg-zion-purple/20 text-white" >U</AvatarFallback> https://placehold.co/32x32?text=AI"alt=" AI Assistant" />) 
}</div>) 
}</div> </div>) 
}
  );
<<<<<<< HEAD
import { cn } from '@/lib / utils';
=======
'
import { cn } from '@/lib / utils';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Avatar, AvatarFallback, AvatarImage } from '@/components / ui / avatar';
interface ChatMessageProps {'
  role: 'user' | 'assistant',
  message: string,
  timestamp?: Date;
  key?: string | number;
}
export /**;
 * ChatMessage - Function description;
 */
function ChatMessage() { return null; }
      is_user ? "flex - row - reverse" : "flex - row")}>;
      <Avatar className={cn ("
        "h - 8 w - 8 border";"
        is_user ? "border - zion - purple / 20" : "border - zion - cyan / 20")}>;
<<<<<<< HEAD
        {is_user ? (
          <AvatarFallback className="bg - zion - purple / 20 text-white">U</AvatarFallback>) : (
          <AvatarImage;
            src="https://placehold.co / 32x32?text = AI";
            alt="AI Assistant";
          />)}
        {!is_user && <AvatarFallback className="bg - zion - cyan / 20 text-white">AI</AvatarFallback>}
=======
        {is_user ? ("
          <AvatarFallback className="bg - zion - purple / 20 text - white">U</AvatarFallback>) : (
          <AvatarImage;"
            src="https://placehold.co / 32x32?text = AI";"
            alt="AI Assistant";
          />)}"
        {!is_user && <AvatarFallback className="bg - zion - cyan / 20 text - white">AI</AvatarFallback>}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      </Avatar>;
      <div className={cn ("
        "max - w-[80%] px - 4 py - 2 rounded - lg";
<<<<<<< HEAD
        is_user;
          ? "bg - zion - purple / 20 text - white rounded - tr - none";
          : "bg - zion - cyan / 10 text - white rounded - tl - none")}>;
        <div className="whitespace - pre-wrap">{message}</div>;
        {timestamp && (
          <div className="text - xs text - zion - slate mt - 1 text-right">;
=======
        is_user;"
          ? "bg - zion - purple / 20 text - white rounded - tr - none";"
          : "bg - zion - cyan / 10 text - white rounded - tl - none")}>;"
        <div className="whitespace - pre - wrap">{message}</div>;
        {timestamp && ("
          <div className="text - xs text - zion - slate mt - 1 text - right">;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            {timestamp.toLocaleTimeString ([], { hour: '2 - digit', minute: '2 - digit' })}
          </div>)}
      </div>;
    </div>);
<<<<<<< HEAD
}}
}

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
import { cn } from '@/lib / utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components / ui / avatar';
interface ChatMessageProps {
  role: 'user' | 'assistant',
  message: string,

  timestamp?: Date;
  key?: string | number;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}
}
<<<<<<< HEAD
=======

}
<<<<<<< HEAD
}

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

}
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
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

}}
}

<<<<<<< HEAD
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
