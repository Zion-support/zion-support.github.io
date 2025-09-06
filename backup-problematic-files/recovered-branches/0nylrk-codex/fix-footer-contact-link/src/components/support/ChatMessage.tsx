<<<<<<< HEAD
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <div className={cn("flex items-start gap-3", isUser && "flex-row-reverse")}>;
      <Avatar className="h-8 w-8">;
        {isUser ? (;
          <>;
<<<<<<< HEAD
            <AvatarImage src="https://i && i.pravatar.cc/40?img=1" alt="User" />;
            <AvatarFallback>U</AvatarFallback>;
          </>;
        ) : (;
          <>;
            <AvatarImage
              src="https://placehold && placehold.co/40x40?text=AI"
              alt="Zion Support"
=======
            <AvatarImage src="https://i.pravatar.cc/40?img=1" alt="User" />;
            <AvatarFallback>U</AvatarFallback>;
          </>;
        ) :(;
          <>;
            <AvatarImage;
              src="https://placehold.co/40x40?text=AI";
              alt="Zion Support";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            />;
            <AvatarFallback className="bg-zion-purple text-white">Z</AvatarFallback>;
          </>;
        )}
      </Avatar>;
<<<<<<< HEAD
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
            : theme === "dark"
              ? "text-gray-300"
              : "text-gray-500"
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        )}>;
          {format(timestamp, "h:mm a")}
        </div>;
      </div>;
    </div>;
<<<<<<< HEAD
  );
}
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
}
import React from './react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components / ui / avatar';
import { cn } from '@/lib / utils';
import { format } from './date - fns';
import { use_theme } from '@/hooks / use_theme';
interface ChatMessageProps {
  message: string,
  is_user: boolean,
  timestamp: Date;
}
export /**
 * ChatMessage - Function description
 */
function ChatMessage() {
  const { theme } = use_theme ();
;
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
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
