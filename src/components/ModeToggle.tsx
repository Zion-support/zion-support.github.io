import React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg bg-zion-slate/10 hover:bg-zion-slate/20 transition-colors"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-zion-slate-light" />
      ) : (
        <Moon className="w-5 h-5 text-zion-slate-light" />
      )}
    </Button>
  );
}