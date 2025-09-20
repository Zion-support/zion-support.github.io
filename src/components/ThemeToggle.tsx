"use client";

<<<<<<< HEAD
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <Button  size="icon" disabled aria-label="Loading theme toggle" className="focus-visible:ring-ring relative text-foreground">
        <div className="h-5 w-5 bg-muted rounded animate-pulse" />
        <span className="sr-only">Loading theme toggle</span>
      </Button>
    )
  }

  const isDarkMode = theme === 'dark' || (theme === 'system' && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  const resolvedTheme = theme === 'system' ? (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : theme;

  const handleToggle = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            
            size='icon'
            onClick={handleToggle}
            aria-pressed={isDarkMode}
            aria-label={`Toggle theme. Current theme: ${resolvedTheme}. Click to switch to ${isDarkMode ? 'light' : 'dark'} mode.`}
            title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            className='focus-visible:ring-ring relative group text-foreground'
            data-testid='theme-toggle'
            data-theme={resolvedTheme}
          >
            {isDarkMode ? (
              <Sun className='h-5 w-5 text-yellow-400 transition-all duration-300 group-hover:text-yellow-300 group-hover:rotate-12' />
            ) : (
              <Moon className='h-5 w-5 text-slate-600 dark:text-slate-400 transition-all duration-300 group-hover:text-slate-500 group-hover:-rotate-12' />
            )}
            <div
              className={`absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-300 ${
                isDarkMode
                  ? 'bg-yellow-400 shadow-sm shadow-yellow-400/50'
                  : 'bg-slate-600 dark:bg-slate-400'
              } opacity-70 group-hover:opacity-100`}
            />
            <span className='sr-only'>
              Toggle theme. Current: {resolvedTheme}. Click to switch to{' '}
              {isDarkMode ? 'light' : 'dark'}.
            </span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <div className='text-center'>
            <p className='text-sm font-medium'>Theme: {resolvedTheme}</p>
            <p className='text-xs opacity-80'>
              Click to switch to {isDarkMode ? 'light' : 'dark'} mode
            </p>
            {theme === 'system' && (
              <p className='text-xs opacity-60 mt-1'>
                Following system preference
              </p>
            )}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
=======
import React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
>>>>>>> d77626155c92c5bbcaae01bf3c76fc08ebcf7238
}