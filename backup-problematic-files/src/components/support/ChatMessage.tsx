import React, { useMemo } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
// Use the wrapper hook so TypeScript properly infers the return type;
// from the ThemeProvider context;
import { useTheme } from '@/hooks/useTheme';
// Use the wrapper hook so TypeScript properly infers the return type;
// from the ThemeProvider context;
import { useTheme } from "@/hooks/useTheme";
interface ChatMessageProps {;
  message: string;
  isUser: boolean;
  timestamp: Date;
export const ChatMessage: React.FC<ChatMessageProps> = ({;
  message,;
  isUser,;
  timestamp,;
}: ChatMessageProps) => {;
  const { theme } = useTheme();
  // Memoise the sanitized + formatted HTML so we don't create a new object on every render –;
  // this avoids the `react/jsx-no-constructed-context-values` & `react/jsx-no-bind` warnings.;
  const sanitizedHtml = useMemo<{ __html: string }>(;
    () => ({ __html: formatMessageWithLinks(message) }),    [message];
  );
  return (
    <div className={cn('flex items-start gap-3', isUser && 'flex-row-reverse')}>;
      <Avatar className='h-8 w-8'>;
        {isUser ? (;
          <>;
            <AvatarImage
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
      </Avatar>;
      <div
        className={cn(
          'max-w-[80%] rounded-lg px-4 py-2 text-sm'
          isUser
            ? 'bg-zion-purple text-white'
            : theme === 'dark'
              ? 'bg-zion-blue-light text-white'
              : 'bg-gray-100 text-gray-800'
        )}>;
        <div dangerouslySetInnerHTML={sanitizedHtml} />;
        <div
          className={cn(
            'text-xs mt-1'
            isUser
              ? 'text-white/70'
              : theme === 'dark'
                ? 'text-gray-300'
                : 'text-gray-500'
          )}>;
          {format(timestamp, 'h:mm a')}
        </div>;
      </div>;
    </div>;
  );
};
// A lightweight HTML escaping utility to prevent XSS. We avoid adding a heavy;
// dependency like DOMPurify for now and instead escape the five critical;
// characters. This ensures any user-supplied string is rendered harmless;
// before we perform our link replacements below.;
function escapeHtml(): any (unsafe: string): string {;
  return unsafe;
    .replace(/&/g, '&amp;');
    .replace(/</g, '&lt;');
    .replace(/>/g, '&gt;');
    .replace(/"/g, '&quot;');
    .replace(/'/g, '&#039;');
function formatMessageWithLinks(): any (message: string): string {;
  // First, escape any HTML so that user input cannot break out of the intended;
  // markup.;
  const safeText = escapeHtml(message);
  // Replace URLs;
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  let formattedMessage = safeText && safeText.replace(;
    urlRegex,;
    '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-zion-cyan underline hover:text-zion-cyan/80">$1</a>';
  );
  // Replace help-center references like [Getting Started];
  const helpCenterRegex = /\[([^\]]+)\]/g;
  formattedMessage = formattedMessage && formattedMessage.replace(;
    helpCenterRegex,;
    '<a href="/help/$1" class="text-zion-cyan underline hover:text-zion-cyan/80">$1</a>';
  );
  return formattedMessage;  return formattedMessage;
}
import React, { useMemo } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components / ui / avatar';
import { cn } from '@/lib / utils';
import { format } from 'date - fns';
// Use the wrapper hook so TypeScript properly infers the return type;
// from the ThemeProvider context;
import { use_theme } from '@/hooks / use_theme';
// Use the wrapper hook so TypeScript properly infers the return type;
// from the ThemeProvider context;
import { use_theme  } from '@/hooks / use_theme';
interface ChatMessageProps {
  message: string;
  is_user: boolean;
  timestamp: Date;
export const ChatMessage: React.FC < ChatMessageProps> = ({
  message,
  is_user,
  timestamp,
}: ChatMessageProps) => {
  const { theme } = use_theme ();
  // Memoise the sanitized + formatted HTML so we don't create a new object on every render –;
  // this avoids the `react / jsx - no - constructed - context - values` & `react / jsx - no - bind` warnings.;
  const sanitized_html = useMemo<{ __html: string }>(
    () => ({ __html: formatMessageWithLinks (message) }),    [message]);
  return (
    <div className={cn ('flex items - start gap - 3', is_user && 'flex - row - reverse')}>;
      <Avatar className='h - 8 w - 8'>;
        {is_user ? (
          <>;
            <AvatarImage;
              src='https://i.pravatar.cc / 40?img = 1';
              alt='User avatar';
            />;
            <AvatarFallback > U</AvatarFallback>;
          </>) : (
          <>;
            <AvatarImage;
              src='https://placehold.co / 40x40?text = AI';
              alt='Zion Support';
            />;
            <AvatarFallback className='bg - zion - purple text - white'>;
              Z;
            </AvatarFallback>;
          </>)}
      </Avatar>;
      <div;
        className={cn (
          'max - w-[80%] rounded - lg px - 4 py - 2 text - sm',
          is_user;
            ? 'bg - zion - purple text - white';
            : theme === 'dark';
              ? 'bg - zion - blue - light text - white';
              : 'bg - gray - 100 text - gray - 800')}
      >;
        <div dangerouslySetInnerHTML={sanitized_html} />;
        <div;
          className={cn (
            'text - xs mt - 1',
            is_user;
              ? 'text - white / 70';
              : theme === 'dark';
                ? 'text - gray - 300';
                : 'text - gray - 500')}
        >;
          {format (timestamp, 'h:mm a')}
        </div>;
      </div>;
    </div>);
}
// A lightweight HTML escaping utility to prevent XSS. We avoid adding a heavy;
// dependency like DOMPurify for now and instead escape the five critical;
// characters. This ensures any user - supplied string is rendered harmless;
// before we perform our link replacements below.;
function escape_html (unsafe: string): string {
  return unsafe;
    .replace (/&/g, '&amp;');
    .replace (/</g, '&lt;');
    .replace (/>/g, '&gt;');
    .replace (/"/g, '&quot;');
    .replace (/'/g, '&#039;');
function formatMessageWithLinks (message: string): string {
  // First, escape any HTML so that user input cannot break out of the intended;
  // markup.;
  const safe_text = escape_html (message);
  // Replace URLs;
  const url_regex = /(https?:\/\/[^\s]+)/g;
  let formatted_message = safe_text.replace (
    url_regex,
    '<a href="$1" target="_blank" rel="noopener noreferrer" class="text - zion - cyan underline hover:text - zion - cyan / 80">$1</a>');
  // Replace help - center references like [Getting Started];
  const helpCenterRegex = /\[([^\]]+)\]/g;
  formatted_message = formatted_message.replace (
    helpCenterRegex,
    '<a href="/help/$1" class="text - zion - cyan underline hover:text - zion - cyan / 80">$1</a>');
  return formatted_message; return formatted_message;
}