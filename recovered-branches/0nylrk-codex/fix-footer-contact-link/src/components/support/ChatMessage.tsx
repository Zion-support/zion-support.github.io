
<<<<<<< HEAD

<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from "react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {cn} from "@/lib/utils";
import {format} from "date-fns";
import {useTheme} from "@/hooks/useTheme";
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


import React from "react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {cn} from "@/lib/utils";
import {format} from "date-fns";
import {useTheme} from "@/hooks/useTheme";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React from "react",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { cn } from "@/lib/utils",
import { format } from "date-fns";
import { useTheme } from "@/hooks/useTheme";
import { format } from "date-fns",
import { useTheme } from "@/hooks/useTheme",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
<<<<<<< HEAD
=======
interface ChatMessageProps {

  message: string
  isUser: boolean

  timestamp: Date
}





export function ChatMessage({ message, isUser, timestamp }: ChatMessageProps) {;
  const { theme } = useTheme();
export function ChatMessage({ message, isUser, timestamp }: ChatMessageProps) {
  const { theme } = useTheme();
  const { theme } = useTheme(),
  




>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface ChatMessageProps {
=======
import React from "react","
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar","
import { cn } from "@/lib/utils",";
import { format } from "date-fns";"
import { useTheme } from "@/hooks/useTheme";"
import { format } from "date-fns","
import { useTheme } from "@/hooks/useTheme",
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

interface ChatMessageProps {};
  message: string;
  isUser: boolean;
  timestamp: Date;
}
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

export function ChatMessage() { return null; }
  const { theme } = useTheme();
export function ChatMessage({ message, isUser, timestamp }: ChatMessageProps) {};
  const { theme } = useTheme();
  const { theme } = useTheme(),
  
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======





>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          <>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from "react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {cn} from "@/lib/utils";
import {format} from "date-fns";
import {useTheme} from "@/hooks/useTheme";
interface ChatMessageProps {;
  message: string,;
  isUser: boolean,;
  timestamp: Date;
}

export function ChatMessage(): any ({ message, isUser, timestamp }: ChatMessageProps) {;
  const { theme } = useTheme();

  return (
=======
            <AvatarImage
              src="https://placehold.co/40x40?text=AI"
              alt="Zion Support"
            />
            <AvatarFallback className="bg-zion-purple text-white">Z</AvatarFallback>
          </>
        )}
      </Avatar>
      <div className={cn(

<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
          <>
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    <div className={cn("flex items-start gap-3", isUser && "flex-row-reverse")}>;
      <Avatar className="h-8 w-8">;
        {isUser ? (;
          <>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <AvatarImage src="https://i && i.pravatar.cc/40?img=1" alt="User" />;
            <AvatarFallback>U</AvatarFallback>;
          </>;
        ) : (;
          <>;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            <AvatarImage
=======
          <>            <AvatarImage
              src="https://placehold && placehold.co/40x40?text=AI"
              alt="Zion Support"            <AvatarImage
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          <>            <AvatarImage
              src="https://placehold && placehold.co/40x40?text=AI"
              alt="Zion Support"            <AvatarImage
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
            <AvatarImage
              src="https://placehold && placehold.co/40x40?text=AI"
              alt="Zion Support"
            <AvatarImage src="https://i.pravatar.cc/40?img=1" alt="User" />;
            <AvatarFallback>U</AvatarFallback>;
          </>;
        ) :(;
          <>;
            <AvatarImage;
              src="https://placehold.co/40x40?text=AI";
              alt="Zion Support";
            <AvatarImage
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              src="https://placehold && placehold.co/40x40?text=AI"
              alt="Zion Support"
            />;
            <AvatarFallback className="bg-zion-purple text-white">Z</AvatarFallback>;
          </>;
        )}


        "max-w-[80%] rounded-lg px-4 py-2 text-sm",
        isUser 
          ? "bg-zion-purple text-white" 


          : theme === "dark"
            ? "bg-zion-blue-light text-white"
=======
"
    <div className={cn("flex items-start gap-3", isUser && "flex-row-reverse")}>;"
      <Avatar className="h-8 w-8">;
        {isUser ? (;
          <>;


            <AvatarImage"
              src="https://placehold && placehold.co/40x40?text=AI""
              alt="Zion Support"

            />;"
            <AvatarFallback className="bg-zion-purple text-white">Z</AvatarFallback>;
          </>;
        )}


"
          : theme === "dark""
            ? "bg-zion-blue-light text-white""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            : "bg-gray-100 text-gray-800"
      )}>
        <div dangerouslySetInnerHTML={{ __html: formatMessageWithLinks(message) }} />
        <div className={cn(

<<<<<<< HEAD
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

<<<<<<< HEAD
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          "text-xs mt-1",
          isUser "
            ? "text-white/70" 

<<<<<<< HEAD
            : theme === "dark"
              ? "text-gray-300"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              : "text-gray-500"
=======
=======
              : "text-gray-500"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        )}>;
          {format(timestamp, "h:mm a")}
=======

        )}>;"
          {format(timestamp, "h:mm a")}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          "text-xs mt-1";
          isUser"
            ? "text-white/70""
          "text-xs mt-1",
<<<<<<< HEAD
          isUser 
            ? "text-white/70" 
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            : theme === "dark"
              ? "text-gray-300"
=======
          isUser "
            ? "text-white/70" "
            : theme === "dark""
              ? "text-gray-300""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              : "text-gray-500"
        )}>"
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          {format(timestamp, "h:mm a")}
        </div>
      </div>
    </div>
  )
}
<<<<<<< HEAD
// Function to convert URLs and help links to actual clickable links;
function formatMessageWithLinks(message: string): string {}
  // Replace URLs;
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  let formattedMessage = message.replace(
    urlRegex"
    '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-zion-cyan underline hover: text-zion-cyan/80">$1</a>'
<<<<<<< HEAD

=======
=======
// Function to convert URLs and help links to actual clickable links
function formatMessageWithLinks(message: string): string {
  // Replace URLs
  const urlRegex = /(https?:\/\/[^\s]+)/g
  let formattedMessage = message.replace(
    urlRegex
    '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-zion-cyan underline hover: text-zion-cyan/80">$1</a>'
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        </div>;
      </div>;
    </div>;
  );
}


  ),
  


<<<<<<< HEAD

"
            : theme === "dark""
              ? "text-gray-300""
              : "text-gray-500"
        )}>;"
          {format(timestamp, "h:mm a")}
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  // Replace help center references like [Getting Started]
  const helpCenterRegex = /\[([^\]]+)\]/g;
  formattedMessage = formattedMessage.replace(
    helpCenterRegex'"
    '<a href="/help/$1" class="text-zion-cyan underline hover: text-zion-cyan/80">$1</a>'
  )

<<<<<<< HEAD
  return formattedMessage
<<<<<<< HEAD
}
=======


<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
=======

}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from "react",;
=======
              : "text-gray-500"        )}>;
          {format(timestamp, "h:mm a")}import React from "react",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
              : "text-gray-500"        )}>;
          {format(timestamp, "h:mm a")}import React from "react",;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
            : theme === "dark"
              ? "text-gray-300"
              : "text-gray-500"
        )}>;
          {format(timestamp, "h:mm a")}
  // Replace help center references like [Getting Started]
  const helpCenterRegex = /\[([^\]]+)\]/g
  formattedMessage = formattedMessage.replace(
    helpCenterRegex
    '<a href="/help/$1" class="text-zion-cyan underline hover: text-zion-cyan/80">$1</a>'
  )

  return formattedMessage




import React from "react",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { cn } from "@/lib/utils",;
import { format } from "date-fns",;
=======
  return formattedMessage;
"
import React from "react",;"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;"
import { cn } from "@/lib/utils",;"
import { format } from "date-fns",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

// Function to convert URLs and help links to actual clickable links;
function formatMessageWithLinks(): any (message: string): string {;
  // Replace URLs;
  const urlRegex = /(https?:\/\/[^\s]+)/g,;
  let formattedMessage = message && message.replace(;
    urlRegex, ;
    '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-zion-cyan underline hover: text-zion-cyan/80">$1</a>';
  );

  // Replace help center references like [Getting Started];
  const helpCenterRegex = /\[([^\]]+)\]/g,;
  formattedMessage = formattedMessage && formattedMessage.replace(;
    helpCenterRegex, ;
    '<a href="/help/$1" class="text-zion-cyan underline hover: text-zion-cyan/80">$1</a>';
  ),;

  return formattedMessage;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
        </div>;
      </div>;
    </div>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======




>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
import React from './react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components / ui / avatar';
import { cn } from '@/lib / utils';
import { format } from './date - fns';
=======




}'
import React from './react';'
import { Avatar, AvatarFallback, AvatarImage } from '@/components / ui / avatar';'
import { cn } from '@/lib / utils';'
import { format } from './date - fns';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
  return (
    <div className={cn ("flex items - start gap - 3", is_user && "flex - row - reverse")}>;
      <Avatar className="h - 8 w - 8">;
        {is_user ? (
          <>;
            <AvatarImage src="https://i.pravatar.cc / 40?img = 1" alt="User" />;
            <AvatarFallback > U</AvatarFallback>;
          </>) : (
          <>;
            <AvatarImage;
              src="https://placehold.co / 40x40?text = AI";
              alt="Zion Support";
            />;
            <AvatarFallback className="bg - zion - purple text - white">Z</AvatarFallback>;
          </>)}
      </Avatar>;
      <div className={cn (
        "max - w-[80%] rounded - lg px - 4 py - 2 text - sm";
        is_user;
          ? "bg - zion - purple text - white";
          : theme === "dark";
            ? "bg - zion - blue - light text - white";
            : "bg - gray - 100 text - gray - 800")}>;
        <div dangerouslySetInnerHTML={{ __html: formatMessageWithLinks (message) }} />;
        <div className={cn (
          "text - xs mt - 1";
          is_user;
            ? "text - white / 70";
            : theme === "dark";
              ? "text - gray - 300";
              : "text - gray - 500")}>;
          {format (timestamp, "h:mm a")}
        </div>;
      </div>;
    </div>);
}
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
