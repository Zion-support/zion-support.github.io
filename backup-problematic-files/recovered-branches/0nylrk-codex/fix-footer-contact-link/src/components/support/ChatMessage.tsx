
=======
import React from "react",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { cn } from "@/lib/utils",;
import { format } from "date-fns",;
import { useTheme } from "@/hooks/useTheme",;
;
interface ChatMessageProps {;
  message:string,;
  isUser:boolean,;
  timestamp:Date;
}
;
export function ChatMessage({ message, isUser, timestamp } ChatMessageProps) {;
  const { theme } = useTheme(),;
  ;
  return (;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    <div className={cn("flex items-start gap-3", isUser && "flex-row-reverse")}>;
      <Avatar className="h-8 w-8">;
        {isUser ? (;
          <>;
<<<<<<< HEAD

            />;
            <AvatarFallback className="bg-zion-purple text-white">Z</AvatarFallback>;
          </>;
        )}
      </Avatar>;

        )}>;
          {format(timestamp, "h:mm a")}
        </div>;
      </div>;
    </div>;

