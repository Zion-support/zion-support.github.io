import React from &quot;react&quot;;
import ThemeToggle from &quot;@/components/ThemeToggle&quot;;
import { ThemeProvider } from &quot;@/context/ThemeContext&quot;;

export default function ThemeTest() {
  return (
    <ThemeProvider>
      <div className=&quot;p-4&quot;>
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}
