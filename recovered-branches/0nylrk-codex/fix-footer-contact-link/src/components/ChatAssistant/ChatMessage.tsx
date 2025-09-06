

import {cn} from "@/lib/utils";"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";


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



          />;
        )}"
        {!isUser && <AvatarFallback className="bg-zion-cyan/20 text-white">AI</AvatarFallback>}


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
      )}>"
        <div className="whitespace-pre-wrap">{message}</div>
        {timestamp && ("
          <div className="text-xs text-zion-slate mt-1 text-right">



};

"
import { cn } from "@/lib/utils",;"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
interface ChatMessageProps {;'
  role: 'user' | 'assistant',;
  message: string,;
  timestamp?: Date,;
  key?: string | number;
}
;
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

"
          : "bg-zion-cyan/10 text-white rounded-tl-none"

      )}>;"
        <div className="whitespace-pre-wrap">{message}</div>;
        {timestamp && (;"
          <div className="text-xs text-zion-slate mt-1 text-right">;



          </div>;
        )}
      </div>;
    </div>;



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
'
import { cn } from '@/lib / utils';'
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
        {is_user ? ("
          <AvatarFallback className="bg - zion - purple / 20 text - white">U</AvatarFallback>) : (
          <AvatarImage;"
            src="https://placehold.co / 32x32?text = AI";"
            alt="AI Assistant";
          />)}"
        {!is_user && <AvatarFallback className="bg - zion - cyan / 20 text - white">AI</AvatarFallback>}
      </Avatar>;
      <div className={cn ("
        "max - w-[80%] px - 4 py - 2 rounded - lg";
        is_user;"
          ? "bg - zion - purple / 20 text - white rounded - tr - none";"
          : "bg - zion - cyan / 10 text - white rounded - tl - none")}>;"
        <div className="whitespace - pre - wrap">{message}</div>;
        {timestamp && ("
          <div className="text - xs text - zion - slate mt - 1 text - right">;'
            {timestamp.toLocaleTimeString ([], { hour: '2 - digit', minute: '2 - digit' })}
          </div>)}
      </div>;
    </div>);

}
}


}

'"