<<<<<<< HEAD
import { Moon, Sun } from 'lucide-react'
<<<<<<< HEAD
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { toast } from "@/hooks/use-toast"
import { darkModeMessages, lightModeMessages } from "@/utils/themeToggleMessages"
import { logInfo, logErrorToProduction } from '@/utils/productionLogger',
=======
import { Button } from &quot;@/components/ui/button&quot;
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from &quot;@/components/ui/tooltip&quot;
import { toast } from &quot;@/hooks/use-toast&quot;
import { darkModeMessages, lightModeMessages } from &quot;@/utils/themeToggleMessages&quot;
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
// Use the ThemeProvider hook directly to ensure no conflicts
import { useTheme } from &quot;@/components/ThemeProvider&quot;
import { logIssue } from &quot;@/utils/logIssue&quot;
import { useEffect, useState } from &quot;react&quot;

export function ModeToggle() {

  const { theme, toggleTheme } = useTheme(),
  const [isClient, setIsClient] = useState(false),

  // Ensure we're on the client side to avoid hydration mismatches
  useEffect(() => {
    setIsClient(true)
  }, []),

  // Determine the actual resolved theme for display purposes
  const resolvedTheme = (() => {
    if (!isClient) return 'light', // Default for SSR
    
<<<<<<< HEAD
    if (theme === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
=======
    if (theme === &quot;system&quot;) {
      return window.matchMedia(&quot;(prefers-color-scheme: dark)&quot;).matches ? &quot;dark&quot; : &quot;light&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
    return theme
  })(),

<<<<<<< HEAD
  const isDarkMode = resolvedTheme === "dark",
=======
  const isDarkMode = resolvedTheme === &quot;dark&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  const handleToggle = () => {
    try {
      // Determine the new theme we are switching TO
<<<<<<< HEAD
      const newTheme = isDarkMode ? "light" : "dark",
=======
      const newTheme = isDarkMode ? &quot;light&quot; : &quot;dark&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

      logInfo(`Theme toggle: ${resolvedTheme} → ${newTheme}`),

      // Apply the new theme via ThemeProvider
      toggleTheme(),

      // Show user feedback with a developer-centric message
      const messages = newTheme === 'dark' ? darkModeMessages : lightModeMessages
      const title = messages[Math.floor(Math.random() * messages.length)]
      toast({
        title,
        description: `Theme changed to ${newTheme} mode successfully`}),

      // Accessibility announcement for screen readers
      const announcement = `Theme switched to ${newTheme} mode`,
      
      // Create a live region announcement
      const liveRegion = document.createElement('div'),
      liveRegion.setAttribute('aria-livepolite'),
      liveRegion.setAttribute('aria-atomictrue'),
      liveRegion.className = 'sr-only',
      liveRegion.textContent = announcement,
      document.body.appendChild(liveRegion),
      
      // Clean up the announcement after it's been read
      setTimeout(() => {
        document.body.removeChild(liveRegion)
      }, 1000)
      
    } catch (error) {
      logErrorToProduction('Theme toggle error:', { data: error }),
      logIssue('Theme switch failed', { error, currentTheme: theme, resolvedTheme }),
      toast({
<<<<<<< HEAD
        title: "Theme switch failed",
        description: "Unable to change theme. Please try again.",
        variant: "destructive"})
=======
        title: &quot;Theme switch failed&quot;,
        description: &quot;Unable to change theme. Please try again.&quot;,
        variant: &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },

  if (!isClient) {
    // Return a neutral state during SSR to prevent hydration issues
    return (
      <Button
        variant=&quot;ghost&quot;
        size=&quot;icon&quot;
        disabled
        aria-label=&quot;Loading theme toggle&quot;
        className=&quot;focus-visible:ring-ring relative text-foreground&quot;
      >
        <div className=&quot;h-5 w-5 bg-muted rounded animate-pulse&quot; /> {/* Changed to bg-muted for theme consistency */}
        <span className=&quot;sr-only&quot;>Loading theme toggle</span>
      </Button>
    )
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant=&quot;ghost&quot;
            size=&quot;icon&quot;
=======
import { Moon, Sun } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from "@/hooks/use-toast";
import { darkModeMessages, lightModeMessages } from "@/utils/themeToggleMessages";
import { logInfo, logErrorToProduction } from '@/utils/productionLogger',;
// Use the ThemeProvider hook directly to ensure no conflicts;
import { useTheme } from "@/components/ThemeProvider";
import { logIssue } from "@/utils/logIssue";
import { useEffect, useState } from "react";
export function ModeToggle() {;
  const { theme, toggleTheme } = useTheme(),;
  const [isClient, setIsClient] = useState(false),;
  // Ensure we're on the client side to avoid hydration mismatches;
  useEffect(() => {;
    setIsClient(true);
  }, []),;
  // Determine the actual resolved theme for display purposes;
  const resolvedTheme = (() => {;
    if (!isClient) return 'light', // Default for SSR;
    if (theme === "system") {;
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return theme;
  })(),;
  const isDarkMode = resolvedTheme === "dark",;
  const handleToggle = () => {;
    try {;
      // Determine the new theme we are switching TO;
      const newTheme = isDarkMode ? "light" : "dark",;
      logInfo(`Theme toggle: ${resolvedTheme} → ${newTheme}`),;
      // Apply the new theme via ThemeProvider;
      toggleTheme(),;
      // Show user feedback with a developer-centric message;
      const messages = newTheme === 'dark' ? darkModeMessages : lightModeMessages;
      const title = messages[Math.floor(Math.random() * messages.length)];
      toast({;
        title,;
        description: `Theme changed to ${newTheme} mode successfully`}),;
      // Accessibility announcement for screen readers;
      const announcement = `Theme switched to ${newTheme} mode`,;
      // Create a live region announcement;
      const liveRegion = document.createElement('div'),;
      liveRegion.setAttribute('aria-livepolite'),;
      liveRegion.setAttribute('aria-atomictrue'),;
      liveRegion.className = 'sr-only',;
      liveRegion.textContent = announcement,;
      document.body.appendChild(liveRegion),;
      // Clean up the announcement after it's been read;
      setTimeout(() => {;
        document.body.removeChild(liveRegion);
      }, 1000);
    } catch (error) {;
      logErrorToProduction('Theme toggle error:', { data: error }),;
      logIssue('Theme switch failed', { error, currentTheme: theme, resolvedTheme }),;
      toast({;
        title: "Theme switch failed",;
        description: "Unable to change theme. Please try again.";
        variant: "destructive"});
    }
  };
  if (!isClient) {;
    // Return a neutral state during SSR to prevent hydration issues;
    return (;
      <Button;
        variant="ghost";
        size="icon";
        disabled;
        aria-label="Loading theme toggle";
        className="focus-visible:ring-ring relative text-foreground";
      >;
        <div className="h-5 w-5 bg-muted rounded animate-pulse" /> {/* Changed to bg-muted for theme consistency */}
        <span className="sr-only">Loading theme toggle</span>;
      </Button>;
    );
  }
;
  return (;
    <TooltipProvider>;
      <Tooltip>;
        <TooltipTrigger asChild>;
          <Button;
            variant="ghost";
            size="icon";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
            onClick={handleToggle}
            aria-pressed={isDarkMode}
            aria-label={`Toggle theme. Current theme: ${resolvedTheme}. Click to switch to ${isDarkMode ? 'light' : 'dark'} mode.`}
            title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
<<<<<<< HEAD
            className=&quot;focus-visible:ring-ring relative group text-foreground&quot; // Added text-foreground
            data-testid=&quot;theme-toggle&quot;
            data-theme={resolvedTheme}
          >
            {isDarkMode ? (
              <Sun className=&quot;h-5 w-5 text-yellow-400 transition-all duration-300 group-hover:text-yellow-300 group-hover:rotate-12&quot; />
            ) : (
              <Moon className=&quot;h-5 w-5 text-slate-600 dark:text-slate-400 transition-all duration-300 group-hover:text-slate-500 group-hover:-rotate-12&quot; />
=======
            className="focus-visible:ring-ring relative group text-foreground" // Added text-foreground;
            data-testid="theme-toggle";
            data-theme={resolvedTheme}
          >;
            {isDarkMode ? (;
              <Sun className="h-5 w-5 text-yellow-400 transition-all duration-300 group-hover:text-yellow-300 group-hover:rotate-12" />;
            ) : (;
              <Moon className="h-5 w-5 text-slate-600 dark:text-slate-400 transition-all duration-300 group-hover:text-slate-500 group-hover:-rotate-12" />;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
            )}
;
            {/* Enhanced visual indicator */}
<<<<<<< HEAD
            <div className={`absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-300 ${
              isDarkMode 
                ? 'bg-yellow-400 shadow-sm shadow-yellow-400/50' 
                : 'bg-slate-600 dark:bg-slate-400'
            } opacity-70 group-hover:opacity-100`} />
            
            <span className=&quot;sr-only&quot;>
              Toggle theme. Current: {resolvedTheme}. Click to switch to {isDarkMode ? 'light' : 'dark'}.
            </span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <div className=&quot;text-center&quot;>
            <p className=&quot;text-sm font-medium&quot;>Theme: {resolvedTheme}</p>
            <p className=&quot;text-xs opacity-80&quot;>Click to switch to {isDarkMode ? 'light' : 'dark'} mode</p>
            {theme === 'system' && (
              <p className=&quot;text-xs opacity-60 mt-1&quot;>Following system preference</p>
=======
            <div className={`absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-300 ${;
              isDarkMode;
                ? 'bg-yellow-400 shadow-sm shadow-yellow-400/50';
                : 'bg-slate-600 dark:bg-slate-400';
            } opacity-70 group-hover:opacity-100`} />;
            <span className="sr-only">;
              Toggle theme. Current: {resolvedTheme}. Click to switch to {isDarkMode ? 'light' : 'dark'}.;
            </span>;
          </Button>;
        </TooltipTrigger>;
        <TooltipContent>;
          <div className="text-center">;
            <p className="text-sm font-medium">Theme: {resolvedTheme}</p>;
            <p className="text-xs opacity-80">Click to switch to {isDarkMode ? 'light' : 'dark'} mode</p>;
            {theme === 'system' && (;
              <p className="text-xs opacity-60 mt-1">Following system preference</p>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
            )}
          </div>;
        </TooltipContent>;
      </Tooltip>;
    </TooltipProvider>;
  );
}
;