

import { useTheme } from "@/hooks/useTheme";

  message: string;
  isUser: boolean;
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
import React, { useMemo } from "react",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { cn } from "@/lib/utils";
import { format } from "date-fns";
// Use the wrapper hook so TypeScript properly infers the return type
// from the ThemeProvider context

        )}
      >

}
},



},

// A lightweight HTML escaping utility to prevent XSS. We avoid adding a heavy
// dependency like DOMPurify for now and instead escape the five critical
},

// A lightweight HTML escaping utility to prevent XSS. We avoid adding a heavy
// characters. This ensures any user-supplied string is rendered harmless
// before we perform our link replacements below.
function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&')
    .replace(/</g, '<')
    .replace(/>/g, '>')
    .replace(/"/g, '"')
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
  return formattedMessage;