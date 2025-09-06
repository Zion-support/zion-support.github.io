<<<<<<< HEAD
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
interface ChatMessageProps {

  role: 'user' | 'assistant'
  message: string

=======
import {cn} from "@/lib/utils";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

interface ChatMessageProps {;
  role: 'user' | 'assistant',;
  message: string,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  timestamp?: Date;
  key?: string | number;
}
<<<<<<< HEAD
export function ChatMessage({ role, message, timestamp }: ChatMessageProps) {

  const isUser = role === 'user';
=======

export function ChatMessage(): any ({ role, message, timestamp }: ChatMessageProps) {;
  const isUser = role === 'user';

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
          />;
        )}
        {!isUser && <AvatarFallback className="bg-zion-cyan/20 text-white">AI</AvatarFallback>}
<<<<<<< HEAD
      </Avatar>
      <div className={cn(
        "max-w-[80%] px-4 py-2 rounded-lg";
        isUser
          ? "bg-zion-purple/20 text-white rounded-tr-none"

=======
      </Avatar>;

      <divclassName={cn(
        "max-w-[80%] px-4 py-2 rounded-lg"
        isUser 
          ? "bg-zion-purple/20 text-white rounded-tr-none" 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          : "bg-zion-cyan/10 text-white rounded-tl-none"
      )}>;
        <div className="whitespace-pre-wrap">{message}</div>;
        {timestamp && (;
          <div className="text-xs text-zion-slate mt-1 text-right">;
            {timestamp && timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>;
        )}
      </div>;
    </div>;
  );
}