import React from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { useTheme } from "@/components/ThemeProvider"

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"

