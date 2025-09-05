
<<<<<<< HEAD
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { useTheme } from "@/hooks/useTheme",
import { Moon, Sun, Check } from "lucide-react",
import { Card, CardContent } from "@/components/ui/card",
=======
import React, { useState } from &quot;react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { useTheme } from &quot;@/hooks/useTheme&quot;;
import { Moon, Sun, Check } from &quot;lucide-react&quot;;
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
              key={language.code}
              className={`cursor-pointer transition-all ${
                selectedLanguage === language.code 
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
            className={`flex-1 cursor-pointer transition-all ${
              theme === 'light' 
                ? &quot;border-primary bg-primary/5&quot; 
                : &quot;border-border hover:border-primary/40&quot;
            }`}
            onClick={() => setTheme('light')}
          >
            <CardContent className=&quot;p-3 flex flex-col items-center justify-center&quot;>
              <Sun className=&quot;h-8 w-8 mb-2&quot; />
              <span>Light</span>
              {theme === 'light' && (
                <Check className=&quot;h-4 w-4 text-primary mt-2&quot; />
              )}
            </CardContent>
          </Card>
          
          <Card 
            className={`flex-1 cursor-pointer transition-all ${
              theme === 'dark' 
                ? &quot;border-primary bg-primary/5&quot; 
                : &quot;border-border hover:border-primary/40&quot;
            }`}
            onClick={() => setTheme('dark')}
          >
            <CardContent className=&quot;p-3 flex flex-col items-center justify-center&quot;>
              <Moon className=&quot;h-8 w-8 mb-2&quot; />
              <span>Dark</span>
              {theme === 'dark' && (
                <Check className=&quot;h-4 w-4 text-primary mt-2&quot; />
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
