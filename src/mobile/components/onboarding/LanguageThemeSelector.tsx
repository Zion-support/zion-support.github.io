
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { useTheme } from "@/hooks/useTheme",
import { Moon, Sun, Check } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card",
=======
import React, { useState } from &quot;react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { useTheme } from &quot;@/hooks/useTheme&quot;;
import { Moon, Sun, Check } from 'lucide-react'
import { Card, CardContent } from &quot;@/components/ui/card&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

interface Language {
  code: string,
  name: string,
  flag: string
}

const languages: Language[] = [
<<<<<<< HEAD
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "zh", name: "中文", flag: "🇨🇳" }],

export function LanguageThemeSelector() {
  const { theme, setTheme } = useTheme(),
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en"),
=======
  { code: &quot;en&quot;, name: &quot;English&quot;, flag: &quot;🇺🇸&quot; },
  { code: &quot;es&quot;, name: &quot;Español&quot;, flag: &quot;🇪🇸&quot; },
  { code: &quot;fr&quot;, name: &quot;Français&quot;, flag: &quot;🇫🇷&quot; },
  { code: &quot;de&quot;, name: &quot;Deutsch&quot;, flag: &quot;🇩🇪&quot; },
  { code: &quot;zh&quot;, name: &quot;中文&quot;, flag: &quot;🇨🇳&quot; }];

export function LanguageThemeSelector() {
  const { theme, setTheme } = useTheme();
  const [selectedLanguage, setSelectedLanguage] = useState<string>(&quot;en&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  return (
    <div className=&quot;space-y-8 px-4&quot;>
      <div className=&quot;space-y-2&quot;>
        <h2 className=&quot;text-xl font-medium&quot;>Select your language</h2>
        <p className=&quot;text-muted-foreground&quot;>Choose your preferred language</p>
        
        <div className=&quot;grid grid-cols-2 gap-3 mt-4&quot;>
          {languages.map((language) => (
            <Card 
=======
import React, {_useState} from "react";

interface Language {_code: string;
  name: string;
  flag: string;}

const languages: Language[] = [
  {_code: "en", _name: "English", _flag: "🇺🇸"},
  {_code: "es", _name: "Español", _flag: "🇪🇸"},
  {_code: "fr", _name: "Français", _flag: "🇫🇷"},
  {_code: "de", _name: "Deutsch", _flag: "🇩🇪"},
  {_code: "zh", _name: "中文", _flag: "🇨🇳"}];

export function LanguageThemeSelector() {_const { theme, _setTheme} = useTheme();
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");

  return (_<div className="space-y-8 px-4">
      <div className="space-y-2">
        <h2 className="text-xl font-medium">Select your language</h2>
        <p className="text-muted-foreground">Choose your preferred language</p>
        
        <div className="grid grid-cols-2 gap-3 mt-4">
          {_languages.map((language) => (_<Card 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              key={language.code}
              className={_`cursor-pointer transition-all ${
                selectedLanguage === language.code 
<<<<<<< HEAD
                  ? &quot;border-primary bg-primary/5&quot; 
                  : &quot;border-border hover:border-primary/40&quot;
              }`}
              onClick={() => setSelectedLanguage(language.code)}
            >
              <CardContent className=&quot;p-3 flex items-center justify-between&quot;>
                <div className=&quot;flex items-center&quot;>
                  <span className=&quot;text-xl mr-2&quot;>{language.flag}</span>
                  <span>{language.name}</span>
                </div>
                {selectedLanguage === language.code && (
                  <Check className=&quot;h-4 w-4 text-primary&quot; />
=======
                  ? "border-primary bg-primary/5" 
                  : "border-border hover:border-primary/40"}`}
              onClick={_() => setSelectedLanguage(language.code)}
            >
              <CardContent className="p-3 flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-xl mr-2">{_language.flag}</span>
                  <span>{_language.name}</span>
                </div>
                {_selectedLanguage === language.code && (
                  <Check className="h-4 w-4 text-primary" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className=&quot;space-y-2&quot;>
        <h2 className=&quot;text-xl font-medium&quot;>Choose theme</h2>
        <p className=&quot;text-muted-foreground&quot;>Select your preferred appearance</p>
        
        <div className=&quot;flex gap-3 mt-4&quot;>
          <Card 
            className={_`flex-1 cursor-pointer transition-all ${
              theme === 'light' 
<<<<<<< HEAD
                ? &quot;border-primary bg-primary/5&quot; 
                : &quot;border-border hover:border-primary/40&quot;
            }`}
            onClick={() => setTheme('light')}
=======
                ? "border-primary bg-primary/5" 
                : "border-border hover:border-primary/40"}`}
            onClick={_() => setTheme('light')}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <CardContent className=&quot;p-3 flex flex-col items-center justify-center&quot;>
              <Sun className=&quot;h-8 w-8 mb-2&quot; />
              <span>Light</span>
<<<<<<< HEAD
              {theme === 'light' && (
                <Check className=&quot;h-4 w-4 text-primary mt-2&quot; />
=======
              {_theme === 'light' && (
                <Check className="h-4 w-4 text-primary mt-2" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              )}
            </CardContent>
          </Card>
          
          <Card 
            className={_`flex-1 cursor-pointer transition-all ${
              theme === 'dark' 
<<<<<<< HEAD
                ? &quot;border-primary bg-primary/5&quot; 
                : &quot;border-border hover:border-primary/40&quot;
            }`}
            onClick={() => setTheme('dark')}
=======
                ? "border-primary bg-primary/5" 
                : "border-border hover:border-primary/40"}`}
            onClick={_() => setTheme('dark')}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <CardContent className=&quot;p-3 flex flex-col items-center justify-center&quot;>
              <Moon className=&quot;h-8 w-8 mb-2&quot; />
              <span>Dark</span>
<<<<<<< HEAD
              {theme === 'dark' && (
                <Check className=&quot;h-4 w-4 text-primary mt-2&quot; />
=======
              {_theme === 'dark' && (
                <Check className="h-4 w-4 text-primary mt-2" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
