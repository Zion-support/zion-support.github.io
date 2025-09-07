<<<<<<< HEAD
=======
<<<<<<< HEAD
=======



<<<<<<< HEAD
import React from "react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {cn} from "@/lib/utils";
import {format} from "date-fns";
import {useTheme} from "@/hooks/useTheme";
>>>>>>> merged-prs-20250907-203621
import React from "react",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { cn } from "@/lib/utils",
import { format } from "date-fns";
import { useTheme } from "@/hooks/useTheme";
<<<<<<< HEAD
interface ChatMessageProps {
  message: string,
  isUser: boolean,
  timestamp: Date}
=======
import { format } from "date-fns",
import { useTheme } from "@/hooks/useTheme",
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface ChatMessageProps {
>>>>>>> merged-prs-20250907-203621

  message: string
  isUser: boolean

  timestamp: Date
<<<<<<< HEAD
}
export function ChatMessage({ message, isUser, timestamp }: ChatMessageProps) {
  const { theme } = useTheme();
  return (
export function ChatMessage({ message, isUser, timestamp }: ChatMessageProps) {
  const { theme } = useTheme($2);
  return (

    <div className={cn("flex items-start gap-3", isUser && "flex-row-reverse")}>
      <Avatar className = $2;
        isUser 
          ? "bg-zion-purple text-white" 
          : theme = $2;
          isUser 
            ? "text-white/70" 
            : theme === "dark"
              ? "text-gray-300"
              : "text-gray-500"
        )}>
          {format(timestamp, "h:mm a")}
        </div>
      </div>
    </div>
  )
}
// Function to convert URLs and help links to actual clickable links
function formatMessageWithLinks(message: string): string {
  // Replace URLs
  const urlRegex = $2;
  let formattedMessage = message.replace($2);
  // Replace help center references like [Getting Started]
  const helpCenterRegex = $2;
  formattedMessage = formattedMessage.replace($2);
  return formattedMessage
}
}
;
=======
}





<<<<<<< HEAD
export function ChatMessage({ message, isUser, timestamp }: ChatMessageProps) {;
  const { theme } = useTheme();
export function ChatMessage({ message, isUser, timestamp }: ChatMessageProps) {
  const { theme } = useTheme();
  const { theme } = useTheme(),
  
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (

    <div className={cn("flex items-start gap-3", isUser && "flex-row-reverse")}>
      <Avatar className="h-8 w-8">
        {isUser ? (
          <>
            <AvatarImage src="https://i.pravatar.cc/40?img=1" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </>
        ) : (
          <>
<<<<<<< HEAD
            <AvatarImage
              src="https://placehold.co/40x40?text=AI"
              alt="Zion Support"
            />
            <AvatarFallback className="bg-zion-purple text-white">Z</AvatarFallback>
          </>
        )}
      </Avatar>
      <div className={cn(

import React from "react",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { cn } from "@/lib/utils",;
import { format } from "date-fns",;
import { useTheme } from "@/hooks/useTheme",;
;
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from "react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {cn} from "@/lib/utils";
import {format} from "date-fns";
import {useTheme} from "@/hooks/useTheme";
<<<<<<< HEAD

import React from "react",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { cn } from "@/lib/utils",
import { format } from "date-fns";
import { useTheme } from "@/hooks/useTheme";
import { format } from "date-fns",
import { useTheme } from "@/hooks/useTheme",

interface ChatMessageProps {

interface ChatMessageProps {};
  message: string;
  isUser: boolean;
  timestamp: Date;
}

export function ChatMessage() { return null; }
  const { theme } = useTheme();
export function ChatMessage({ message, isUser, timestamp }: ChatMessageProps) {};
  const { theme } = useTheme();
  const { theme } = useTheme(),

  return (
"
    <div className={cn("flex items-start gap-3", isUser && "flex-row-reverse")}>"
      <Avatar className="h-8 w-8">
        {isUser ? (
          <>"
            <AvatarImage src="https://i.pravatar.cc/40?img=1" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </>
        ) : (

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    <div className={cn("flex items-start gap-3", isUser && "flex-row-reverse")}>;
      <Avatar className="h-8 w-8">;
        {isUser ? (;
          <>;
<<<<<<< HEAD

            <AvatarImage src="https://i && i.pravatar.cc/40?img=1" alt="User" />;
=======
            <AvatarImage src="https://i.pravatar.cc/40?img=1" alt="User" />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            <AvatarFallback>U</AvatarFallback>;
          </>;
        ) :(;
          <>;
<<<<<<< HEAD

              src="https://placehold && placehold.co/40x40?text=AI"
              alt="Zion Support"
=======
            <AvatarImage;
              src="https://placehold.co/40x40?text=AI";
              alt="Zion Support";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            />;
            <AvatarFallback className="bg-zion-purple text-white">Z</AvatarFallback>;
          </>;
        )}
<<<<<<< HEAD

=======
        "max-w-[80%] rounded-lg px-4 py-2 text-sm";
        isUser
          ? "bg-zion-purple text-white"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        "max-w-[80%] rounded-lg px-4 py-2 text-sm",
        isUser 
          ? "bg-zion-purple text-white" 
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          : theme === "dark"
            ? "bg-zion-blue-light text-white"

            : "bg-gray-100 text-gray-800"
      )}>
        <div dangerouslySetInnerHTML={{ __html: formatMessageWithLinks(message) }} />
        <div className={cn(
<<<<<<< HEAD
      </Avatar>;

=======

<<<<<<< HEAD
=======
      </Avatar>;

      <divclassName={cn(
        "max-w-[80%] rounded-lg px-4 py-2 text-sm"
        isUser 
          ? "bg-zion-purple text-white" 
          : theme === "dark"
            ? "bg-zion-blue-light text-white"
            : "bg-gray-100 text-gray-800"
      )}>;
        <div dangerouslySetInnerHTML={{ __html: formatMessageWithLinks(message) }} />;
        <divclassName={cn(
          "text-xs mt-1"
          isUser 
            ? "text-white/70" 

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          "text-xs mt-1",
          isUser "
            ? "text-white/70" 

<<<<<<< HEAD
=======
<<<<<<< HEAD
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
        )}>;
          {format(timestamp, "h:mm a")}
          "text-xs mt-1";
          isUser
            ? "text-white/70"
          "text-xs mt-1",
          isUser 
            ? "text-white/70" 
            : theme === "dark"
              ? "text-gray-300"
              : "text-gray-500"
        )}>
          {format(timestamp, "h:mm a")}
        </div>
      </div>
    </div>
  )
}
// Function to convert URLs and help links to actual clickable links
function formatMessageWithLinks(message: string): string {
  // Replace URLs
  const urlRegex = /(https?:\/\/[^\s]+)/g
  let formattedMessage = message.replace(
    urlRegex
    '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-zion-cyan underline hover: text-zion-cyan/80">$1</a>'
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
        </div>
      </div>
    </div>
  )
}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        </div>;
      </div>;
    </div>;
  );
}

  ),

<<<<<<< HEAD
  );
  ),
  
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  // Replace help center references like [Getting Started]
  const helpCenterRegex = /\[([^\]]+)\]/g;
  formattedMessage = formattedMessage.replace(
    helpCenterRegex'"
    '<a href="/help/$1" class="text-zion-cyan underline hover: text-zion-cyan/80">$1</a>'
  )

<<<<<<< HEAD
=======
  return formattedMessage


<<<<<<< HEAD

}
=======
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
        </div>;
      </div>;
    </div>;



}
=======

}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
;
=======
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
<<<<<<< HEAD
  ),;
}
;
// Function to convert URLs and help links to actual clickable links;
function formatMessageWithLinks(message:string):string {;
  // Replace URLs;
  const urlRegex = /(https?:\/\/[^\s]+)/g,;
  let formattedMessage = message.replace(;
    urlRegex, ;
    '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-zion-cyan underline hover:text-zion-cyan/80">$1</a>';
  ),;
  ;
  // Replace help center references like [Getting Started];
  const helpCenterRegex = /\[([^\]]+)\]/g,;
  formattedMessage = formattedMessage.replace(;
    helpCenterRegex, ;
    '<a href="/help/$1" class="text-zion-cyan underline hover:text-zion-cyan/80">$1</a>';
  ),;
  ;
  return formattedMessage;
} interface ChatMessageProps {
  message: string;
isUser: boolean;
timestamp: Date 
}export function ChatMessage ({
  message, isUser, timestamp 
}: ChatMessageProps) {
  const {
  theme 
}= useTheme ();
return (<div className= {
  cn ("flex items-start gap-3", isUser && "flex-row-reverse") 
}> <Avatar className="h-8 w-8" > {
  isUser ? (https://i.pravatar.cc/40?img=1"alt=" User"/> <AvatarFallback>U</AvatarFallback> </>) : (<> <AvatarImage src=" https://placehold.co/40x40?text=AI"alt=" Zion Support"/> <AvatarFallback className=" bg-zion-purple text-white" >Z</AvatarFallback> </>) 
}</Avatar> </div> </div> </div>) 
}//Function to convert URLs and help links to actual clickable links);
// Function to convert URLs and help links to actual clickable links;
function formatMessageWithLinks(message: string): string {;
  // Replace URLs;
  const urlRegex = /(https?:\/\/[^\s]+)/g,;
  let formattedMessage = message.replace(;
    urlRegex,;
    '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-zion-cyan underline hover: text-zion-cyan/80">$1</a>';
  ),;
  // Replace help center references like [Getting Started];
  const helpCenterRegex = /\[([^\]]+)\]/g,;
  formattedMessage = formattedMessage.replace(;
    helpCenterRegex;
    '<a href="/help/$1" class="text-zion-cyan underline hover: text-zion-cyan/80">$1</a>';
  );
  return formattedMessage;
}
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
