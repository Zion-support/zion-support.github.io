import { Moon, Sun } from 'lucide-react'
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { toast } from "@/hooks/use-toast"
import { darkModeMessages, lightModeMessages } from "@/utils/themeToggleMessages"
=======
import { logInfo, logErrorToProduction } from '@/utils/productionLogger'
=======
import { logInfo, logErrorToProduction } from '@/utils/productionLogger',
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
// Use the ThemeProvider hook directly to ensure no conflicts
import { useTheme } from "@/components/ThemeProvider"
import { logIssue } from "@/utils/logIssue"
import { useEffect, useState } from "react"
    if (!isClient) return 'light'; // Default for SSR
    if (theme === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
    }
    return theme
  })()
  const isDarkMode = resolvedTheme === 'dark'
  const handleToggle = () => {
    try {
      // Determine the new theme we are switching TO
      const newTheme = isDarkMode ? 'light' : 'dark'
      logInfo(`Theme toggle: ${resolvedTheme} → ${newTheme}`);  const isDarkMode = resolvedTheme === "dark"
  const handleToggle = () => {
    try {
      // Determine the new theme we are switching TO
      const newTheme = isDarkMode ? 'light' : 'dark'
      logInfo(`Theme toggle: ${resolvedTheme} → ${newTheme}`)
      // Apply the new theme via ThemeProvider
      toggleTheme()
      // Show user feedback with a developer-centric message
      const messages = null;
        newTheme === 'dark' ? darkModeMessages : lightModeMessages
      const title = messages[Math.floor(Math.random() * messages.length)]
      toast({
        title
        description: `Theme changed to ${newTheme} mode successfully`
      })
      // Accessibility announcement for screen readers
      const announcement = `Theme switched to ${newTheme} mode`
      // Create a live region announcement
      const liveRegion = document.createElement('div')
      liveRegion.setAttribute('aria-live', 'polite')
      liveRegion.setAttribute('aria-atomic', 'true')
      liveRegion.className = 'sr-only'
      liveRegion.textContent = announcement
      document.body.appendChild(liveRegion)
      // Clean up the announcement after it's been read
      setTimeout(() => {
        document.body.removeChild(liveRegion)
      }, 1000) } catch (error) {
      logErrorToProduction('Theme toggle error:', { data: error })
      logIssue('Theme switch failed', {
        error
        currentTheme: theme
        resolvedTheme
      })
      toast({
        title: 'Theme switch failed'
        description: 'Unable to change theme. Please try again.'
        variant: 'destructive'
      })
    }
  }

  if (!isClient) {
    // Return a neutral state during SSR to prevent hydration issues
=======

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
    
    if (theme === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    }
    return theme
  })(),

  const isDarkMode = resolvedTheme === "dark",

  const handleToggle = () => {
    try {
      // Determine the new theme we are switching TO
      const newTheme = isDarkMode ? "light" : "dark",

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
        title: "Theme switch failed",
        description: "Unable to change theme. Please try again.",
        variant: "destructive"})
    }
  },

  if (!isClient) {
    // Return a neutral state during SSR to prevent hydration issues
    return (
      <Button
        variant="ghost"
        size="icon"
        disabled
        aria-label="Loading theme toggle"
        className="focus-visible:ring-ring relative text-foreground"
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      >
        <div className="h-5 w-5 bg-muted rounded animate-pulse" /> {/* Changed to bg-muted for theme consistency */}
        <span className="sr-only">Loading theme toggle</span>
      </Button>
    )
  }
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            onClick={handleToggle}
            aria-pressed={isDarkMode}
            aria-label={`Toggle theme. Current theme: ${resolvedTheme}. Click to switch to ${isDarkMode ? 'light' : 'dark'} mode.`}
            title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-yellow-400 transition-all duration-300 group-hover:text-yellow-300 group-hover:rotate-12" />
            ) : (
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            </span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <div className="text-center">
            <p className="text-sm font-medium">Theme: {resolvedTheme}</p>
            <p className="text-xs opacity-80">Click to switch to {isDarkMode ? 'light' : 'dark'} mode</p>
            {theme === 'system' && (
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
