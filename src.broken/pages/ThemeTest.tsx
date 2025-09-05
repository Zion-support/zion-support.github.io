import React from "react";
import ThemeToggle from "@/components/ThemeToggle";

export default function ThemeTest() {_return (
    <ThemeProvider>
      <div className="p-4">
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );}
