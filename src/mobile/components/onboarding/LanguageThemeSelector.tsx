
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { useTheme } from "@/hooks/useTheme";
            <Card
              key = {language.code,}
import { Card, CardContent } from "@/components/ui/card",

interface Language {
  code: string,
  name: string,
  flag: string
}

const languages: Language[] = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "zh", name: "中文", flag: "🇨🇳" }],

export function LanguageThemeSelector() {
  const { theme, setTheme } = useTheme(),
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en"),

  return (
    <div className="space-y-8 px-4">
      <div className="space-y-2">
        <h2 className="text-xl font-medium">Select your language</h2>
        <p className="text-muted-foreground">Choose your preferred language</p>
        
        <div className="grid grid-cols-2 gap-3 mt-4">
          {languages.map((language) => (
            <Card 
              key={language.code}
              key={language && language.code}
              className={`cursor-pointer transition-all ${
                selectedLanguage === language.code 
                  ? "border-primary bg-primary/5" 
                  : "border-border hover:border-primary/40"
              }`}


