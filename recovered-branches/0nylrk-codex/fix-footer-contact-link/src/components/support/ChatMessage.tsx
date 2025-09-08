
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { cn } from "@/lib/utils",
import { format } from "date-fns";
import { useTheme } from "@/hooks/useTheme";
import { format } from "date-fns",
import { useTheme } from "@/hooks/useTheme",

  return (

    <div className={cn("flex items-start gap-3", isUser && "flex-row-reverse")}>
      <Avatar className="h-8 w-8">
        {isUser ? (
          <>
            <AvatarImage src="https://i.pravatar.cc/40?img=1" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </>
        ) : (
          <>            <AvatarImage
              src="https://placehold && placehold.co/40x40?text=AI"
              alt="Zion Support"            <AvatarImage
              src="https://placehold && placehold.co/40x40?text=AI"
              alt="Zion Support"
            />;
            <AvatarFallback className="bg-zion-purple text-white">Z</AvatarFallback>;
          </>;
        )}          : theme === "dark"
            ? "bg-zion-blue-light text-white"

            : "bg-gray-100 text-gray-800"
      )}>
        <div dangerouslySetInnerHTML={{ __html: formatMessageWithLinks(message) }} />
        <div className={cn(



