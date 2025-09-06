<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { useMemo } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
// Use the wrapper hook so TypeScript properly infers the return type
// from the ThemeProvider context
import { useTheme } from '@/hooks/useTheme'
// Use the wrapper hook so TypeScript properly infers the return type
// from the ThemeProvider context
import { useTheme } from "@/hooks/useTheme"
interface ChatMessageProps {
  message: string
  isUser: boolean
  timestamp: Date
export const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  isUser,
  timestamp,
}: ChatMessageProps) => {
  const { theme } = useTheme()
  // Memoise the sanitized + formatted HTML so we don't create a new object on every render –
  // this avoids the `react/jsx-no-constructed-context-values` & `react/jsx-no-bind` warnings.
  const sanitizedHtml = useMemo<{ __html: string }>(
    () => ({ __html: formatMessageWithLinks(message) }),    [message]
  )
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { useMemo } from "react",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { cn } from "@/lib/utils";
import { format } from "date-fns";
// Use the wrapper hook so TypeScript properly infers the return type
// from the ThemeProvider context
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  return (
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useTheme } from "@/hooks/useTheme";
interface ChatMessageProps {
  message: string;
  isUser: boolean;
  timestamp: Date
export const ChatMessage: React.FC<ChatMessageProps> = ({
import { useTheme } from "@/hooks/useTheme",
interface ChatMessageProps {
  message: string,
  isUser: boolean,
  timestamp: Date
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  isUser,
  timestamp}: ChatMessageProps) => {
  const { theme } = useTheme(),
  
  // Memoise the sanitized + formatted HTML so we don't create a new object on every render –
  // this avoids the `react/jsx-no-constructed-context-values` & `react/jsx-no-bind` warnings.
  const sanitizedHtml = useMemo<{ __html: string}>(
    () => ({ __html: formatMessageWithLinks(message) }),
    [message]
  ),

  message
  isUser
  timestamp
}: ChatMessageProps) => {
  const { theme } = useTheme()
  // Memoise the sanitized + formatted HTML so we don't create a new object on every render –
  // this avoids the `react/jsx-no-constructed-context-values` & `react/jsx-no-bind` warnings.
  const sanitizedHtml = useMemo<{ __html: string }>(
    () => ({ __html: formatMessageWithLinks(message) }),    [message]
  )
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    <div className={cn("flex items-start gap-3", isUser && "flex-row-reverse")}>
      <Avatar className="h-8 w-8">
        {isUser ? (
          <>
            <AvatarImage src="https://i.pravatar.cc/40?img=1" alt="User avatar" />
            <AvatarFallback>U</AvatarFallback>
          </>
        ) : (
          <>
ursor/fix-website-loading-errors-and-merge-6662
  return (
    <div className={cn('flex items-start gap-3', isUser && 'flex-row-reverse')}>;
      <Avatar className='h-8 w-8'>;
        {isUser ? (;
          <>;
>>>>>>>             <AvatarImage
              src='https://i && i.pravatar.cc/40?img=1'
              alt='User avatar'
            />;
            <AvatarFallback>U</AvatarFallback>;
          </>;
        ) : (;
          <>;
            <AvatarImage
              src='https://placehold && placehold.co/40x40?text=AI'
              alt='Zion Support'
            />;
            <AvatarFallback className='bg-zion-purple text-white'>;
              Z;
            </AvatarFallback>;
          </>;
        )}
      </Avatar>
<<<<<<< HEAD

=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  return (
    <div className={cn("flex items-start gap-3", isUser && "flex-row-reverse")}>
      <Avatar className="h-8 w-8">
        {isUser ? (
          <>
            <AvatarImage src="https://i.pravatar.cc/40?img=1" alt="User avatar" />
            <AvatarFallback>U</AvatarFallback>
          </>
        ) : (
          <>
            <AvatarImage
              src="https://placehold.co/40x40?text=AI"
              alt="Zion Support"
            />
            <AvatarFallback className="bg-zion-purple text-white">Z</AvatarFallback>
          </>
        )}
      </Avatar>
      <div
        className={cn(
          'max-w-[80%] rounded-lg px-4 py-2 text-sm'
          'max-w-[80%] rounded-lg px-4 py-2 text-sm',
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          isUser
=======
          'max-w-[80%] rounded-lg px-4 py-2 text-sm'
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>           isUser
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            ? 'bg-zion-purple text-white'
            : theme === 'dark'
              ? 'bg-zion-blue-light text-white'
              : 'bg-gray-100 text-gray-800'
<<<<<<< HEAD

        )}
      >
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
        )}
      >
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <div dangerouslySetInnerHTML={sanitizedHtml} />
        <div
          className={cn(
            'text-xs mt-1'
            isUser
              ? 'text-white/70'
              : theme === 'dark'
                ? 'text-gray-300'
                : 'text-gray-500'
          )}
        >
          {format(timestamp, 'h:mm a')}
<<<<<<< HEAD
<<<<<<< HEAD
      
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <div className={cn(
        "max-w-[80%] rounded-lg px-4 py-2 text-sm",
        isUser 
          ? "bg-zion-purple text-white" 
          : theme === "dark"
            ? "bg-zion-blue-light text-white"
            : "bg-gray-100 text-gray-800"
      )}>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

        <div dangerouslySetInnerHTML={sanitizedHtml} />
=======
>>>>>>>         <div dangerouslySetInnerHTML={sanitizedHtml} />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <div dangerouslySetInnerHTML={sanitizedHtml} />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className={cn(
          "text-xs mt-1",
          isUser 
            ? "text-white/70" 
            : theme === "dark"
              ? "text-gray-300"
              : "text-gray-500"
        )}>
          {format(timestamp, "h:mm a")}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>         </div>
      </div>
    </div>
  )
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        </div>
      </div>
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
},

// A lightweight HTML escaping utility to prevent XSS. We avoid adding a heavy
// dependency like DOMPurify for now and instead escape the five critical
},

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
// A lightweight HTML escaping utility to prevent XSS. We avoid adding a heavy
// dependency like DOMPurify for now and instead escape the five critical

},

=======


},


>>>>>>> // A lightweight HTML escaping utility to prevent XSS. We avoid adding a heavy
// dependency like DOMPurify for now and instead escape the five critical
},

>>>>>>> // A lightweight HTML escaping utility to prevent XSS. We avoid adding a heavy
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
// A lightweight HTML escaping utility to prevent XSS. We avoid adding a heavy
>>>>>>> // dependency like DOMPurify for now and instead escape the five critical
// characters. This ensures any user-supplied string is rendered harmless
// before we perform our link replacements below.
function escapeHtml(unsafe: string): string {
  return unsafe
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
function formatMessageWithLinks(message: string): string {
  // First, escape any HTML so that user input cannot break out of the intended
  // markup.
  const safeText = escapeHtml(message)
  // Replace URLs
  const urlRegex = /(https?:\/\/[^\s]+)/g
  let formattedMessage = safeText.replace(
    urlRegex
    '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-zion-cyan underline hover:text-zion-cyan/80">$1</a>'
  )
  // Replace help-center references like [Getting Started]
  const helpCenterRegex = /\[([^\]]+)\]/g
  formattedMessage = formattedMessage.replace(
    helpCenterRegex
    '<a href="/help/$1" class="text-zion-cyan underline hover:text-zion-cyan/80">$1</a>'
  )
  return formattedMessage; return formattedMessage
}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======

<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    .replace(/&/g, "&amp,")
    .replace(/</g, "<")
    .replace(/>/g, ">")
    .replace(/"/g, """)
    .replace(/'/g, "&#039,")
}

function formatMessageWithLinks(message: string): string {
  // First, escape any HTML so that user input cannot break out of the intended
  // markup.
  const safeText = escapeHtml(message),

  // Replace URLs
  const urlRegex = /(https?:\/\/[^\s]+)/g,
  let formattedMessage = safeText.replace(
    urlRegex,
    '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-zion-cyan underline hover: text-zion-cyan/80">$1</a>'
  ),

  // Replace help-center references like [Getting Started]
  const helpCenterRegex = /\[([^\]]+)\]/g,
  formattedMessage = formattedMessage.replace(
    helpCenterRegex,
    '<a href="/help/$1" class="text-zion-cyan underline hover: text-zion-cyan/80">$1</a>'
  ),

  return formattedMessage
import React, { useMemo } from "react",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { cn } from "@/lib/utils",;
import { format } from "date-fns",;
// Use the wrapper hook so TypeScript properly infers the return type;
// from the ThemeProvider context;
import { useTheme } from "@/hooks/useTheme",;
interface ChatMessageProps {;
  message: string,;
  isUser: boolean,;
  timestamp: Date;
}
;
export const ChatMessage: React.FC<ChatMessageProps> = ({;
  message,;
  isUser,;
  timestamp}: ChatMessageProps) => {;
  const { theme } = useTheme(),;
  // Memoise the sanitized + formatted HTML so we don't create a new object on every render –;
  // this avoids the `react/jsx-no-constructed-context-values` & `react/jsx-no-bind` warnings.;
  const sanitizedHtml = useMemo<{ __html: string}>(;
    () => ({ __html: formatMessageWithLinks(message) }),;
    [message];
  ),;
  return (;
    <div className={cn("flex items-start gap-3", isUser && "flex-row-reverse")}>;
      <Avatar className="h-8 w-8">;
        {isUser ? (;
          <>;
            <AvatarImage src="https://i.pravatar.cc/40?img=1" alt="User avatar" />;
            <AvatarFallback>U</AvatarFallback>;
          </>;
        ) : (;
          <>;
            <AvatarImage;
              src="https://placehold.co/40x40?text=AI";
              alt="Zion Support";
            />;
            <AvatarFallback className="bg-zion-purple text-white">Z</AvatarFallback>;
          </>;
        )}
      </Avatar>;
      <div className={cn(;
        "max-w-[80%] rounded-lg px-4 py-2 text-sm",;
        isUser;
          ? "bg-zion-purple text-white";
          : theme === "dark";
            ? "bg-zion-blue-light text-white";
            : "bg-gray-100 text-gray-800";
      )}>;
        <div dangerouslySetInnerHTML={sanitizedHtml} />;
        <div className={cn(;
          "text-xs mt-1",;
          isUser;
            ? "text-white/70";
            : theme === "dark";
              ? "text-gray-300";
              : "text-gray-500";
        )}>;
          {format(timestamp, "h:mm a")}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        </div>;
      </div>;
    </div>;
  );
},;
// A lightweight HTML escaping utility to prevent XSS. We avoid adding a heavy;
// dependency like DOMPurify for now and instead escape the five critical;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
// characters. This ensures any user-supplied string is rendered harmless;
=======
>>>>>>> // characters. This ensures any user-supplied string is rendered harmless;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
// before we perform our link replacements below.;
function escapeHtml(unsafe: string): string {;
  return unsafe;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
function formatMessageWithLinks(message: string): string {
  // First, escape any HTML so that user input cannot break out of the intended
  // markup.
  const safeText = escapeHtml(message)
  // Replace URLs
  const urlRegex = /(https?:\/\/[^\s]+)/g
  let formattedMessage = safeText.replace(
    urlRegex,
    '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-zion-cyan underline hover:text-zion-cyan/80">$1</a>'
  )
  // Replace help-center references like [Getting Started]
  const helpCenterRegex = /\[([^\]]+)\]/g
  formattedMessage = formattedMessage.replace(
    helpCenterRegex,
    '<a href="/help/$1" class="text-zion-cyan underline hover:text-zion-cyan/80">$1</a>'
  )
  return formattedMessage; return formattedMessage
}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
}
}
>>>>>>> 
;

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
}
function formatMessageWithLinks(message: string): string {;
  // First, escape any HTML so that user input cannot break out of the intended;
  // markup.;
  const safeText = escapeHtml(message),;
  // Replace URLs;
  const urlRegex = /(https?:\/\/[^\s]+)/g,;
  let formattedMessage = safeText.replace(;
    urlRegex,;
    '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-zion-cyan underline hover: text-zion-cyan/80">$1</a>';
  ),;
  // Replace help-center references like [Getting Started];
  const helpCenterRegex = /\[([^\]]+)\]/g,;
  formattedMessage = formattedMessage.replace(;
    helpCenterRegex;
    '<a href="/help/$1" class="text-zion-cyan underline hover: text-zion-cyan/80">$1</a>';
  );
  return formattedMessage;
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
