<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


=======
message: Message,
  isUserMessage: boolean
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

  message: Message,
<<<<<<< HEAD
  isUserMessage: boolean
<<<<<<< HEAD
=======

import React from 'react';
import { format  } from 'date-fns';
import { PaperclipIcon  } from 'lucide-react';
import { cn  } from '@/lib/utils';
import { Message } from '@/types/messaging';
interface MessageBubbleProps {
  message: Message,
  isUserMessage: boolean
import React from 'react',;
import { format } from 'date-fns',;
import { PaperclipIcon } from 'lucide-react',;
import { cn } from '@/lib/utils',;
import { Message } from '@/types/messaging',;
interface MessageBubbleProps {;
  message: Message,;
  isUserMessage: boolean;
}

}
}
}
}

<<<<<<< HEAD
  message: Message
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

<<<<<<< HEAD
=======
=======
  message: Message,
  isUserMessage: boolean


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from 'react';
import { format  } from 'date-fns';
import { PaperclipIcon  } from 'lucide-react';
import { cn  } from '@/lib/utils';
import { Message } from '@/types/messaging';
interface MessageBubbleProps {
  message: Message,
  isUserMessage: boolean
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

  message: Message,
  isUserMessage: boolean

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from 'react',;
import { format } from 'date-fns',;
import { PaperclipIcon } from 'lucide-react',;
import { cn } from '@/lib/utils',;
=======
  isUserMessage: boolean;
import React from 'react',;'
import { format } from 'date-fns',;'
import { PaperclipIcon } from 'lucide-react',;'
import { cn } from '@/lib/utils',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Message } from '@/types/messaging',;
interface MessageBubbleProps {;
  message: Message,;
  isUserMessage: boolean;
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD



}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


}
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
}
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======

  message: Message,
  isUserMessage: boolean
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

  message: Message,
  isUserMessage: boolean
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  message: Message
=======


}

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

  message: Message;
  isUserMessage: boolean;
}
export function MessageBubble({ message, isUserMessage }: MessageBubbleProps) {}
  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======

<<<<<<< HEAD


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    <div className={cn(
      "flex",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    <div className={cn(
      "flex",
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD
<<<<<<< HEAD
=======
      isUserMessage ? "justify-end" : "justify-start"
    )}>
      <div className={cn(
    <div className={cn(
      "flex",

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      isUserMessage ? "justify-end" : "justify-start"
    )}>
      <div className={cn(
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

    <div className={cn(;
      "flex";
    <div className={cn(
      "flex",
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    <div className={cn(
      "flex",
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31



<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    <div className={cn(
      "flex",

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    <div className={cn(
      "flex",

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      isUserMessage ? "justify-end" : "justify-start"
    )}>
      <div className={cn(";
        "max-w-[75%] rounded-lg px-4 py-2";
        isUserMessage"
          ? "bg-zion-purple text-white"

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
        "max-w-[75%] rounded-lg px-4 py-2",

        isUserMessage 
          ? "bg-zion-purple text-white" 
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


"
          : "bg-zion-blue-dark text-white"
      )}>"
        <div className="whitespace-pre-wrap">{message.content}</div>
        {message.attachment_url && (
          <a;
            href={message.attachment_url}"
            target="_blank""
            rel="noopener noreferrer""
            className="flex items-center mt-2 p-2 bg-black/20 rounded text-xs hover:bg-black/30"
          >"
            <PaperclipIcon className="h-3 w-3 mr-1" />
'
=======

"max-w-[75%] rounded-lg px-4 py-2",
        isUserMessage 
          ? "bg-zion-purple text-white"
          : "bg-zion-blue-dark text-white"
      )}>
        <div className="whitespace-pre-wrap">{message.content}</div>
        {message.attachment_url && (
          <a
            href={message.attachment_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mt-2 p-2 bg-black/20 rounded text-xs hover:bg-black/30"
          >
            <PaperclipIcon className="h-3 w-3 mr-1" />

<<<<<<< HEAD

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
{message.attachment_name |'Attachment'}
          </a>
        )}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            {message.attachment_name || 'Attachment'}
          </Link>
        )}

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
        "max-w-[75%] rounded-lg px-4 py-2",
        isUserMessage 
          ? "bg-zion-purple text-white" 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        "max-w-[75%] rounded-lg px-4 py-2",
        isUserMessage 
          ? "bg-zion-purple text-white" 
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        <div className="text-xs opacity-70 text-right mt-1">
=======
"
        <div className="text-xs opacity-70 text-right mt-1">'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          {format(new Date(message.created_at), 'h:mm a')}
        </div>
      </div>
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
import React from 'react';
import {format} from 'date - fns';
import {PaperclipIcon} from 'lucide-react';
import {cn} from '@/lib / utils';
<<<<<<< HEAD
=======

}'
import React from 'react';'
import {format} from 'date - fns';'
import {PaperclipIcon} from 'lucide-react';'
import {cn} from '@/lib / utils';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import {Message} from '@/types / messaging';
interface MessageBubbleProps {}
  message: Message,
  isUserMessage: boolean;
}
export /**;
 * MessageBubble - Function description;
 */
function MessageBubble() {}
  return (
    <div className={cn ("
      "flex";"
      isUserMessage ? "justify - end" : "justify - start")}>;
      <div className={cn ("
        "max - w-[75%] rounded - lg px - 4 py - 2";
        isUserMessage;"
          ? "bg - zion - purple text - white";"
          : "bg - zion - blue - dark text - white")}>;"
        <div className="whitespace - pre - wrap">{message.content}</div>;
        {message.attachment_url && (
          <a;
            href={message.attachment_url}"
            target="_blank";"
            rel="noopener noreferrer";"
            className="flex items - center mt - 2 p - 2 bg - black / 20 rounded text - xs hover:bg - black / 30";
          >;"
            <PaperclipIcon className="h - 3 w - 3 mr - 1" />;'
            {message.attachment_name || 'Attachment'}
          </a>)}"
        <div className="text - xs opacity - 70 text - right mt - 1">;'
=======
import {Message} from '@/types / messaging';
interface MessageBubbleProps {
  message: Message,
  isUserMessage: boolean;
}
export /**
 * MessageBubble - Function description
 */
function MessageBubble() {
  return (
    <div className={cn (
      "flex";
      isUserMessage ? "justify - end" : "justify - start")}>;
      <div className={cn (
        "max - w-[75%] rounded - lg px - 4 py - 2";
        isUserMessage;
          ? "bg - zion - purple text - white";
          : "bg - zion - blue - dark text - white")}>;
        <div className="whitespace - pre - wrap">{message.content}</div>;
        {message.attachment_url && (
          <a;
            href={message.attachment_url}
            target="_blank";
            rel="noopener noreferrer";
            className="flex items - center mt - 2 p - 2 bg - black / 20 rounded text - xs hover:bg - black / 30";
          >;
            <PaperclipIcon className="h - 3 w - 3 mr - 1" />;
            {message.attachment_name || 'Attachment'}
          </a>)}
        <div className="text - xs opacity - 70 text - right mt - 1">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          {format (new Date (message.created_at), 'h:mm a')}
        </div>;
      </div>;
    </div>);
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31



  message: Message,
  isUserMessage: boolean;
pr-12325
import React from 'react',;
import { format } from 'date-fns',;
import { PaperclipIcon } from 'lucide-react',;
import { cn } from '@/lib/utils',;
import { Message } from '@/types/messaging',;
;
interface MessageBubbleProps {;
  message:Message,;
  isUserMessage:boolean;
}
;
export function MessageBubble({ message, isUserMessage } MessageBubbleProps) {;
  return (;
    <div className={cn(;
      "flex",;
      isUserMessage ? "justify-end" :"justify-start";
    )}>;
      <div className={cn(;
        "max-w-[75%] rounded-lg px-4 py-2",;
        isUserMessage ;
          ? "bg-zion-purple text-white" ;
          :"bg-zion-blue-dark text-white";
      )}>;
        <div className="whitespace-pre-wrap">{message.content}</div>;
        ;
        {message.attachment_url && (;
          <a ;
            href={message.attachment_url}
            target="_blank";
            rel="noopener noreferrer";
            className="flex items-center mt-2 p-2 bg-black/20 rounded text-xs hover:bg-black/30";
          >;
            <PaperclipIcon className="h-3 w-3 mr-1" />;
            {message.attachment_name || 'Attachment'}
          </a>;
        )}
        ;
        <div className="text-xs opacity-70 text-right mt-1">;
          {format(new Date(message.created_at), 'h:mm a')}
        </div>;
      </div>;
    </div>;
  ),;}
 export function MessageBubble ({
  message, isUserMessage 
}: MessageBubbleProps) {
  return (<div className= {
  cn ({
  message.attachment url && (<a href= {
  message.attachment url 
}target="blank" rel="noopener noreferrer" className="flex items-center mt-2 p-2 bg-black/20 rounded text-xs hover:bg-black/30" > </div> </div> </div>) 
}
}
<<<<<<< HEAD
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
=======



'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======


  message: Message,
  isUserMessage: boolean;
import React from 'react',;''
import { format } from 'date-fns',;''
import { PaperclipIcon } from 'lucide-react',;''
import { cn } from '@/lib/utils',;''
import { Message } from '@/types/messaging',;'
interface MessageBubbleProps {;
  message: Message,;



}



  message: Message;,
export function MessageBubble({ message, isUserMessage }: MessageBubbleProps) {
  return (



    <div className={cn(
      "flex",""
      isUserMessage ? "justify-end" : "justify-start"")
    )}>
</div>
      <div className={cn("
        "max-w-[75%] rounded-lg px-4 py-2";"
        isUserMessage;"
          ? "bg-zion-purple text-white"""
        "max-w-[75%] rounded-lg px-4 py-2","
          : "bg-zion-blue-dark text-white"")
</div>"
        <div className="whitespace-pre-wrap">{message.content}</div>"
          <a;
            href={message.attachment_url}"
            target="_blank"""
            rel="noopener noreferrer"""
            className="flex items-center mt-2 p-2 bg-black/20 rounded text-xs hover:bg-black/30""
          >
</a>"
            <PaperclipIcon className="h-3 w-3 mr-1" />"

          "
        <div className="text-xs opacity-70 text-right mt-1">"
    <div className={cn ("
      "flex";")"
      isUserMessage ? "justify - end" : "justify - start")}>;"
        "max - w-[75%] rounded - lg px - 4 py - 2";"
          ? "bg - zion - purple text - white";")"
          : "bg - zion - blue - dark text - white")}>;"
        <div className="whitespace - pre - wrap">{message.content}</div>;"
            target="_blank";""
            rel="noopener noreferrer";""
            className="flex items - center mt - 2 p - 2 bg - black / 20 rounded text - xs hover:bg - black / 30";"
          >;
            <PaperclipIcon className="h - 3 w - 3 mr - 1" />;"

          </a>)}"
        <div className="text - xs opacity - 70 text - right mt - 1">;"
        </div>;
    </div>);
    <div className={cn(;"
      "flex",;""
      isUserMessage ? "justify-end" :"justify-start";")
    )}>;
        "max-w-[75%] rounded-lg px-4 py-2",;"
        isUserMessage ;"
          ? "bg-zion-purple text-white" ;""
          :"bg-zion-blue-dark text-white";")
        <div className="whitespace-pre-wrap">{message.content}</div>;"
          <a ;
            className="flex items-center mt-2 p-2 bg-black/20 rounded text-xs hover:bg-black/30";"
            <PaperclipIcon className="h-3 w-3 mr-1" />;"

          </a>;"
        <div className="text-xs opacity-70 text-right mt-1">;"
  return (<div className= {
  cn ({
  message.attachment url && (<a href= {
  message.attachment url;)"
}target="blank" rel="noopener noreferrer" className="flex items-center mt-2 p-2 bg-black/20 rounded text-xs hover:bg-black/30" > </div> </div> </div>)""
pr-12325

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
