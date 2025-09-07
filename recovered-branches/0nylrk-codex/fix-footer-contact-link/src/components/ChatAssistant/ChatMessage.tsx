

import {cn} from "@/lib/utils";""
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";"
interface ChatMessageProps {;"
  role: 'user' | 'assistant',;'
  message: string,;

  timestamp?: Date;'
import { cn } from "@/lib/utils",""
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar","
interface ChatMessageProps {;"
  role: 'user' | 'assistant',;'
  message: string,;'
import {cn} from "@/lib/utils";""
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";""
import { cn } from "@/lib/utils";""
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";"
interface ChatMessageProps {
  // TODO: Implement
}"
  role: 'user' | 'assistant'',
  message: string;
  timestamp?: Date;'
import {cn} from "@/lib/utils";""
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";""
import { cn } from "@/lib/utils",""
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",""
import { cn } from "@/lib/utils",""
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar","
interface ChatMessageProps {
  // TODO: Implement
}"
  role: 'user' | 'assistant','
  message: string,
  timestamp?: Date,


  timestamp?: Date;
  key?: string | number;
}



export function ChatMessage(): any ({ role, message, timestamp }: ChatMessageProps) {;'
  const isUser = role === 'user';'
export function ChatMessage({ role, message, timestamp }: ChatMessageProps) {;'
  const isUser = role === 'user';'
export function ChatMessage({ role, message, timestamp }: ChatMessageProps) {
'
  const isUser = role === 'user';''
  const isUser = role === 'user','
  return (
    <divclassName={cn('
      "flex items-start gap-2"""
      isUser ? "flex-row-reverse" : "flex-row"")
    )}>;
</divclassName>
      <AvatarclassName={cn("
        "h-8 w-8 border"""
        isUser ? "border-zion-purple/20" : "border-zion-cyan/20"")
      )}>;
</AvatarclassName>"
          <AvatarFallback className="bg-zion-purple/20 text-white">U</AvatarFallback>;"
          <AvatarImage;"
            src="https://placehold && placehold.co/32x32?text=AI"""
            alt="AI Assistant""
          />;
</AvatarImage>"
        {!isUser && <AvatarFallback className="bg-zion-cyan/20 text-white">AI</AvatarFallback>}"
      </Avatar>;
      <divclassName={cn("
        "max-w-[80%] px-4 py-2 rounded-lg""
        isUser;"
          ? "bg-zion-purple/20 text-white rounded-tr-none"""
          : "bg-zion-cyan/10 text-white rounded-tl-none"""
        "max-w-[80%] px-4 py-2 rounded-lg","
        isUser;"
          ? "bg-zion-purple/20 text-white rounded-tr-none"""
        "max-w-[80%] px-4 py-2 rounded-lg","
        isUser;"
          ? "bg-zion-purple/20 text-white rounded-tr-none"""
          : "bg-zion-cyan/10 text-white rounded-tl-none"")
      )}>
</divclassName>"
        <div className="whitespace-pre-wrap">{message}</div>""
          <div className="text-xs text-zion-slate mt-1 text-right">"
</div>
    <div className={cn(;"
      "flex items-start gap-2",;""
      isUser ? "flex-row-reverse" : "flex-row";")
    )}>;
</div>
      <Avatar className={cn(;"
        "h-8 w-8 border";""
        isUser ? "border-zion-purple/20" : "border-zion-cyan/20";")
      )}>;
</Avatar>"
          <AvatarFallback className="bg-zion-purple/20 text-white">U</AvatarFallback>;"
          <AvatarImage;"
            src="https://placehold.co/32x32?text=AI";""
            alt="AI Assistant";"
          />;
</AvatarImage>"
        {!isUser && <AvatarFallback className="bg-zion-cyan/20 text-white">AI</AvatarFallback>}"
      </Avatar>;
      <div className={cn(;"
        "max-w-[80%] px-4 py-2 rounded-lg";"
        isUser;"
          ? "bg-zion-purple/20 text-white rounded-tr-none";""
          : "bg-zion-cyan/10 text-white rounded-tl-none";""
          : "bg-zion-cyan/10 text-white rounded-tl-none""
      ;
      <div className={cn(;"
        "max-w-[80%] px-4 py-2 rounded-lg",;"
        isUser ;"
          ? "bg-zion-purple/20 text-white rounded-tr-none" ;""
          :"bg-zion-cyan/10 text-white rounded-tl-none";""
          : "bg-zion-cyan/10 text-white rounded-tl-none"")
      )}>;
</div>"
        <div className="whitespace-pre-wrap">{message}</div>;""
          <div className="text-xs text-zion-slate mt-1 text-right">;"
</div>
          </div>;
      </div>;
    </div>;
return (<div className= {"
  cn ("flex items-start gap-2";")"
isUser ? "flex-row-reverse" : "flex-row")"
}> <Avatar className= {
</div>"
  isUser ? (<AvatarFallback className="bg-zion-purple/20 text-white" >U</AvatarFallback> https://placehold.co/32x32?text=AI"alt=" AI Assistant" />)"
}</div>) 
}</div> </div>) 
    <div className={cn ("
      "flex items - start gap - 2";")"
      is_user ? "flex - row - reverse" : "flex - row")}>;"
</div>
      <Avatar className={cn ("
        "h - 8 w - 8 border";")"
        is_user ? "border - zion - purple / 20" : "border - zion - cyan / 20")}>;"
</Avatar>"
          <AvatarFallback className="bg - zion - purple / 20 text - white">U</AvatarFallback>) : ("
          <AvatarImage;"
            src="https://placehold.co / 32x32?text = AI";""
            alt="AI Assistant";")
          />)}
</AvatarImage>"
        {!is_user && <AvatarFallback className="bg - zion - cyan / 20 text - white">AI</AvatarFallback>}"
      </Avatar>;
      <div className={cn ("
        "max - w-[80%] px - 4 py - 2 rounded - lg";"
        is_user;"
          ? "bg - zion - purple / 20 text - white rounded - tr - none";")"
          : "bg - zion - cyan / 10 text - white rounded - tl - none")}>;"
</div>"
        <div className="whitespace - pre - wrap">{message}</div>;""
          <div className="text - xs text - zion - slate mt - 1 text - right">;"
</div>
          </div>)}
      </div>;
    </div>);"