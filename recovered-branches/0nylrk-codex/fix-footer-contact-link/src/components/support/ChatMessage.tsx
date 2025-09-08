
<<<<<<< HEAD

interface ChatMessageProps {


  message: string
  isUser: boolean

  timestamp: Date

}






=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    <div className={cn("flex items-start gap-3", isUser && "flex-row-reverse")}>;
      <Avatar className="h-8 w-8">;
        {isUser ? (;
          <>;
<<<<<<< HEAD

            <AvatarImage src="https://i.pravatar.cc/40?img=1" alt="User" />;

=======


            <AvatarImage src="https://i && i.pravatar.cc/40?img=1" alt="User" />;
>>>>>>> origin/cursor/delete-old-data-records-6bba
            <AvatarFallback>U</AvatarFallback>;
          </>;
        ) :(;
          <>;
<<<<<<< HEAD

            <AvatarImage;
              src="https://placehold.co/40x40?text=AI";
              alt="Zion Support";

=======


              src="https://placehold && placehold.co/40x40?text=AI"
              alt="Zion Support"
>>>>>>> origin/cursor/delete-old-data-records-6bba
            />;
            <AvatarFallback className="bg-zion-purple text-white">Z</AvatarFallback>;
          </>;
        )}

<<<<<<< HEAD
        "max-w-[80%] rounded-lg px-4 py-2 text-sm";
        isUser
          ? "bg-zion-purple text-white"
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

        "max-w-[80%] rounded-lg px-4 py-2 text-sm",
        isUser 
          ? "bg-zion-purple text-white" 
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          : theme === "dark"
            ? "bg-zion-blue-light text-white"

            : "bg-gray-100 text-gray-800"
      )}>
        <div dangerouslySetInnerHTML={{ __html: formatMessageWithLinks(message) }} />
        <div className={cn(
<<<<<<< HEAD



=======
      </Avatar>;

>>>>>>> origin/cursor/delete-old-data-records-6bba
          "text-xs mt-1",
          isUser "
            ? "text-white/70" 


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            : theme === "dark"
              ? "text-gray-300"
              : "text-gray-500"
      ;
      <div className={cn(;
        "max-w-[80%] rounded-lg px-4 py-2 text-sm",;
        isUser ;
          ? "bg-zion-purple text-white" ;
          :theme === "dark";
            ? "bg-zion-blue-light text-white";
            :"bg-gray-100 text-gray-800";
      )}>;
        <div dangerouslySetInnerHTML={{ __html:formatMessageWithLinks(message) }} />;
        <div className={cn(;
          "text-xs mt-1",;
          isUser ;
            ? "text-white/70" ;
            :theme === "dark";
              ? "text-gray-300";
              :"text-gray-500";

          "text-xs mt-1";
          isUser"
            ? "text-white/70""
          "text-xs mt-1",

              : "text-gray-500"
        )}>"

          {format(timestamp, "h:mm a")}

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        </div>;
      </div>;
    </div>;
  );
}

  ),

<<<<<<< HEAD


=======
  );
  ),
  
>>>>>>> origin/cursor/delete-old-data-records-6bba
  // Replace help center references like [Getting Started]
  const helpCenterRegex = /\[([^\]]+)\]/g;
  formattedMessage = formattedMessage.replace(
    helpCenterRegex'"
    '<a href="/help/$1" class="text-zion-cyan underline hover: text-zion-cyan/80">$1</a>'
  )

<<<<<<< HEAD

  return formattedMessage



=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
import React from "react",;

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { cn } from "@/lib/utils",;
import { format } from "date-fns",;

import { useTheme } from "@/hooks/useTheme",;
interface ChatMessageProps {;
  message: string,;
  isUser: boolean,;
  timestamp: Date;
}
;
export function ChatMessage() { return null; }
  const { theme } = useTheme(),;
  return (;"
    <div className={cn("flex items-start gap-3", isUser && "flex-row-reverse")}>;"
      <Avatar className="h-8 w-8">;
        {isUser ? (;
          <>;"
            <AvatarImage src="https://i.pravatar.cc/40?img=1" alt="User" />;
            <AvatarFallback>U</AvatarFallback>;
          </>;
        ) : (;
          <>;
            <AvatarImage;"
              src="https://placehold.co/40x40?text=AI";"
              alt="Zion Support";
            />;"
            <AvatarFallback className="bg-zion-purple text-white">Z</AvatarFallback>;
          </>;
        )}
      </Avatar>;
      <div className={cn(;"
        "max-w-[80%] rounded-lg px-4 py-2 text-sm",;
        isUser;"
          ? "bg-zion-purple text-white";"
          : theme === "dark";"
            ? "bg-zion-blue-light text-white";"
            : "bg-gray-100 text-gray-800";
      )}>;
        <div dangerouslySetInnerHTML={{ __html: formatMessageWithLinks(message) }} />;
        <div className={cn(;"
          "text-xs mt-1",;
          isUser;"
            ? "text-white/70";"
            : theme === "dark";"
              ? "text-gray-300";"
              : "text-gray-500";
        )}>;"
          {format(timestamp, "h:mm a")}
        </div>;
      </div>;
    </div>;
  );

}
;
<<<<<<< HEAD


}


=======
        </div>;
      </div>;
    </div>;



}
>>>>>>> origin/cursor/delete-old-data-records-6bba
import React from './react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components / ui / avatar';
import { cn } from '@/lib / utils';
import { format } from './date - fns';

import { use_theme } from '@/hooks / use_theme';
interface ChatMessageProps {}
  message: string,
  is_user: boolean,
  timestamp: Date;
}
export /**;
 * ChatMessage - Function description;
 */
function ChatMessage() {}
  const { theme } = use_theme ();
;

  ),;

import React from "react";""
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";""
import {cn} from "@/lib/utils";""
import {format} from "date-fns";""
import {useTheme} from "@/hooks/useTheme";""
import React from "react",""
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",""
import { cn } from "@/lib/utils",""
import { format } from "date-fns";""
import { useTheme } from "@/hooks/useTheme";""
import { format } from "date-fns",""
import { useTheme } from "@/hooks/useTheme","
interface ChatMessageProps {
  // TODO: Implement
}
  message: string;,
  isUser: boolean;
  timestamp: Date;

export function ChatMessage({ message, isUser, timestamp }: ChatMessageProps) {;
  const { theme } = useTheme();
export function ChatMessage({ message, isUser, timestamp }: ChatMessageProps) {
  const { theme } = useTheme(),

  return (
)"
    <div className={cn("flex items-start gap-3", isUser && "flex-row-reverse")}>"
</div>"
      <Avatar className="h-8 w-8">"

          <>"
            <AvatarImage src="https://i.pravatar.cc/40?img=1" alt="User" />"

            <AvatarFallback>U
          </>
        ) : (
          <>)"
    <div className={cn("flex items-start gap-3", isUser && "flex-row-reverse")}>;"
      <Avatar className="h-8 w-8">;"

          <>;"
            <AvatarImage src="https://i && i.pravatar.cc/40?img=1" alt="User" />;"

            <AvatarFallback>U;
          </>;
        ) : (;
          <>;
            <AvatarImage;"
              src="https://placehold && placehold.co/40x40?text=AI"""
              alt="Zion Support"""
            <AvatarImage src="https://i.pravatar.cc/40?img=1" alt="User" />;"

          </>;)
        ) :(;
              src="https://placehold.co/40x40?text=AI";""
              alt="Zion Support";"
              alt="Zion Support""
            />;
"
            <AvatarFallback className="bg-zion-purple text-white">Z;"
        )}

        "max-w-[80%] rounded-lg px-4 py-2 text-sm","
        isUser;"
          ? "bg-zion-purple text-white"""
          : theme === "dark"""
            ? "bg-zion-blue-light text-white"""
            : "bg-gray-100 text-gray-800""

      )}>
        <div dangerouslySetInnerHTML={{ __html: formatMessageWithLinks(message) }} />
</div>
        <div className={cn(

      ;

      </Avatar>;
</div>

      <divclassName={cn("
        "max-w-[80%] rounded-lg px-4 py-2 text-sm""
            : "bg-gray-100 text-gray-800"")
      )}>;
</divclassName>
        <div dangerouslySetInnerHTML={{ __html: formatMessageWithLinks(message) }} />;
          "text-xs mt-1""
            ? "text-white/70"""
          "text-xs mt-1","
              ? "text-gray-300"""
              : "text-gray-500"""
              : "text-gray-500""
      <div className={cn(;"
        "max-w-[80%] rounded-lg px-4 py-2 text-sm",;"
        isUser ;"
          ? "bg-zion-purple text-white" ;""
          :theme === "dark";""
            ? "bg-zion-blue-light text-white";""
            :"bg-gray-100 text-gray-800";")
        <div dangerouslySetInnerHTML={{ __html:formatMessageWithLinks(message) }} />;
          "text-xs mt-1",;"
            ? "text-white/70" ;""
              ? "text-gray-300";""
              :"text-gray-500";")
    '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-zion-cyan underline hover: text-zion-cyan/80">$1</a>
        </div>;
    '<a href="/help/$1" class="text-zion-cyan underline hover: text-zion-cyan/80">$1</a>

          ? "bg-zion-purple text-white";""
          : theme === "dark";""
            : "bg-gray-100 text-gray-800";")
            ? "text-white/70";""
              : "text-gray-500";")
    </div>;"
    '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-zion-cyan underline hover: text-zion-cyan/80">$1</a>';
    '<a href="/help/$1" class="text-zion-cyan underline hover: text-zion-cyan/80">$1</a>';
  );
  return formattedMessage;
}

<<<<<<< HEAD
// Function to convert URLs and help links to actual clickable links;
function formatMessageWithLinks (message: string): string {
  // Replace URLs;
  const url_regex = /(https?:\/\/[^\s]+)/g,
  let formatted_message = message.replace (
    url_regex,
    '<a href="$1" target="_blank" rel="noopener noreferrer" class="text - zion - cyan underline hover: text - zion - cyan / 80">$1</a>');
;
  // Replace help center references like [Getting Started];
  const helpCenterRegex = /\[([^\]]+)\]/g,
  formatted_message = formatted_message.replace (
    helpCenterRegex,
    '<a href="/help/$1" class="text - zion - cyan underline hover: text - zion - cyan / 80">$1</a>'),
  return formatted_message;
}



=======
;
>>>>>>> origin/cursor/delete-old-data-records-6bba
