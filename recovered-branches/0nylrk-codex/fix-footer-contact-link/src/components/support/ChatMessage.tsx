



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
}





export function ChatMessage({ message, isUser, timestamp }: ChatMessageProps) {;
  const { theme } = useTheme();
export function ChatMessage({ message, isUser, timestamp }: ChatMessageProps) {
  const { theme } = useTheme();
  const { theme } = useTheme(),
  





  return (
)"
    <div className={cn("flex items-start gap-3", isUser && "flex-row-reverse")}>"
</div>"
      <Avatar className="h-8 w-8">"
</Avatar>
          <>"
            <AvatarImage src="https://i.pravatar.cc/40?img=1" alt="User" />"
</AvatarImage>
            <AvatarFallback>U</AvatarFallback>
          </>
        ) : (
          <>)"
    <div className={cn("flex items-start gap-3", isUser && "flex-row-reverse")}>;"
</div>"
      <Avatar className="h-8 w-8">;"
</Avatar>
          <>;"
            <AvatarImage src="https://i && i.pravatar.cc/40?img=1" alt="User" />;"
</AvatarImage>
            <AvatarFallback>U</AvatarFallback>;
          </>;
        ) : (;
          <>;
            <AvatarImage;"
              src="https://placehold && placehold.co/40x40?text=AI"""
              alt="Zion Support"""
            <AvatarImage src="https://i.pravatar.cc/40?img=1" alt="User" />;"
</AvatarImage>
            <AvatarFallback>U</AvatarFallback>;
          </>;)
        ) :(;
          <>;
            <AvatarImage;"
              src="https://placehold.co/40x40?text=AI";""
              alt="Zion Support";"
            <AvatarImage;"
              src="https://placehold && placehold.co/40x40?text=AI"""
              alt="Zion Support""
            />;
</AvatarImage>"
            <AvatarFallback className="bg-zion-purple text-white">Z</AvatarFallback>;"
          </>;)
        )}

"
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

      </Avatar>;
</div>

      <divclassName={cn("
        "max-w-[80%] rounded-lg px-4 py-2 text-sm""
        isUser;"
          ? "bg-zion-purple text-white"""
          : theme === "dark"""
            ? "bg-zion-blue-light text-white"""
            : "bg-gray-100 text-gray-800"")
      )}>;
</divclassName>
        <div dangerouslySetInnerHTML={{ __html: formatMessageWithLinks(message) }} />;
</div>
        <divclassName={cn("
          "text-xs mt-1""
          isUser;"
            ? "text-white/70"""
          "text-xs mt-1","
          isUser;"
            ? "text-white/70"""
            : theme === "dark"""
              ? "text-gray-300"""
              : "text-gray-500"""
            : theme === "dark"""
              ? "text-gray-300"""
              : "text-gray-500""
      ;
      <div className={cn(;"
        "max-w-[80%] rounded-lg px-4 py-2 text-sm",;"
        isUser ;"
          ? "bg-zion-purple text-white" ;""
          :theme === "dark";""
            ? "bg-zion-blue-light text-white";""
            :"bg-gray-100 text-gray-800";")
      )}>;
</divclassName>
        <div dangerouslySetInnerHTML={{ __html:formatMessageWithLinks(message) }} />;
</div>
        <div className={cn(;"
          "text-xs mt-1",;"
          isUser ;"
            ? "text-white/70" ;""
            :theme === "dark";""
              ? "text-gray-300";""
              :"text-gray-500";")
        )}>;
</div>
        </div>
      </div>
    </div>"
    '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-zion-cyan underline hover: text-zion-cyan/80">$1</a>''
        </div>;
      </div>;
    </div>;'
    '<a href="/help/$1" class="text-zion-cyan underline hover: text-zion-cyan/80">$1</a>'''
    <div className={cn("flex items-start gap-3", isUser && "flex-row-reverse")}>;"
</div>"
      <Avatar className="h-8 w-8">;"
</Avatar>
          <>;"
            <AvatarImage src="https://i.pravatar.cc/40?img=1" alt="User" />;"
</AvatarImage>
            <AvatarFallback>U</AvatarFallback>;
          </>;
        ) : (;
          <>;
            <AvatarImage;"
              src="https://placehold.co/40x40?text=AI";""
              alt="Zion Support";"
            />;
</AvatarImage>"
            <AvatarFallback className="bg-zion-purple text-white">Z</AvatarFallback>;"
          </>;)
        )}
      </Avatar>;
      <div className={cn(;"
        "max-w-[80%] rounded-lg px-4 py-2 text-sm",;"
        isUser;"
          ? "bg-zion-purple text-white";""
          : theme === "dark";""
            ? "bg-zion-blue-light text-white";""
            : "bg-gray-100 text-gray-800";")
      )}>;
</div>
        <div dangerouslySetInnerHTML={{ __html: formatMessageWithLinks(message) }} />;
</div>
        <div className={cn(;"
          "text-xs mt-1",;"
          isUser;"
            ? "text-white/70";""
            : theme === "dark";""
              ? "text-gray-300";""
              : "text-gray-500";")
        )}>;
</div>
        </div>;
      </div>;
    </div>;"
    '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-zion-cyan underline hover: text-zion-cyan/80">$1</a>';''
    '<a href="/help/$1" class="text-zion-cyan underline hover: text-zion-cyan/80">$1</a>';''
    <div className={cn ("flex items - start gap - 3", is_user && "flex - row - reverse")}>;"
</div>"
      <Avatar className="h - 8 w - 8">;"
</Avatar>
          <>;"
            <AvatarImage src="https://i.pravatar.cc / 40?img = 1" alt="User" />;"
</AvatarImage>
            <AvatarFallback > U</AvatarFallback>;
          </>) : (
          <>;
            <AvatarImage;"
              src="https://placehold.co / 40x40?text = AI";""
              alt="Zion Support";"
            />;
</AvatarImage>"
            <AvatarFallback className="bg - zion - purple text - white">Z</AvatarFallback>;")
          </>)}
      </Avatar>;
      <div className={cn ("
        "max - w-[80%] rounded - lg px - 4 py - 2 text - sm";"
        is_user;"
          ? "bg - zion - purple text - white";""
          : theme === "dark";""
            ? "bg - zion - blue - light text - white";")"
            : "bg - gray - 100 text - gray - 800")}>;"
</div>
        <div dangerouslySetInnerHTML={{ __html: formatMessageWithLinks (message) }} />;
</div>
        <div className={cn ("
          "text - xs mt - 1";"
          is_user;"
            ? "text - white / 70";""
            : theme === "dark";""
              ? "text - gray - 300";")"
              : "text - gray - 500")}>;"
</div>
        </div>;
      </div>;
    </div>);"
    '<a href="$1" target="_blank" rel="noopener noreferrer" class="text - zion - cyan underline hover: text - zion - cyan / 80">$1</a>');''
    '<a href="/help/$1" class="text - zion - cyan underline hover: text - zion - cyan / 80">$1</a>'),''
    '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-zion-cyan underline hover:text-zion-cyan/80">$1</a>';''
    '<a href="/help/$1" class="text-zion-cyan underline hover:text-zion-cyan/80">$1</a>';'
return (<div className= {)'
  cn ("flex items-start gap-3", isUser && "flex-row-reverse")""
}> <Avatar className="h-8 w-8" > {"
</div>"
  isUser ? (https://i.pravatar.cc/40?img=1"alt=" User"/> <AvatarFallback>U</AvatarFallback> </>) : (<> <AvatarImage src=" https://placehold.co/40x40?text=AI"alt=" Zion Support"/> <AvatarFallback className=" bg-zion-purple text-white" >Z</AvatarFallback> </>)"
}</Avatar> </div> </div> </div>) "
    '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-zion-cyan underline hover: text-zion-cyan/80">$1</a>';''
    '<a href="/help/$1" class="text-zion-cyan underline hover: text-zion-cyan/80">$1</a>';''