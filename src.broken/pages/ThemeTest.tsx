import React from "react",
import ThemeToggle from "@/components/ThemeToggle",
import { ThemeProvider } from "@/context/ThemeContext",export default function ThemeTest() {
  return (
import React from "react";
import ThemeToggle from "@/components/ThemeToggle";

export default function ThemeTest() {_return (
    <ThemeProvider>
      <div className=&quot;p-4&quot;>
        <ThemeToggle />
      </div>
    </ThemeProvider>
  )
}