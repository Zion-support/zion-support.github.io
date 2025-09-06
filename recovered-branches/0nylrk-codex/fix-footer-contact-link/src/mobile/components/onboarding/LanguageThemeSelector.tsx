
<<<<<<< HEAD
=======
<<<<<<< HEAD
import React, { useState } from "react";
import {Button} from "@/components/ui/button";
import {useTheme} from "@/hooks/useTheme";
import {Moon, Sun, Check} from "lucide-react";
import {Card, CardContent} from "@/components/ui/card";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { useTheme } from "@/hooks/useTheme",
<<<<<<< HEAD
import { Moon, Sun, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
=======
import { Moon, Sun, Check } from "lucide-react",
import { Card, CardContent } from "@/components/ui/card",

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface Language {

  code: string
  name: string

  flag: string
}
const languages: Language[] = [
<<<<<<< HEAD
  { code: "en", name: "English", flag: "🇺🇸" }
  { code: "es", name: "Español", flag: "🇪🇸" }
  { code: "fr", name: "Français", flag: "🇫🇷" }
  { code: "de", name: "Deutsch", flag: "🇩🇪" }
  { code: "zh", name: "中文", flag: "🇨🇳" }]
=======
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "zh", name: "中文", flag: "🇨🇳" }],

<<<<<<< HEAD
export function LanguageThemeSelector() {;
  const { theme, setTheme } = useTheme();
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function LanguageThemeSelector() {
<<<<<<< HEAD
  const { theme, setTheme } = useTheme();

  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");
=======
  const { theme, setTheme } = useTheme(),
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en"),
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

  return (
    <div className="space-y-8 px-4">
      <div className="space-y-2">
        <h2 className="text-xl font-medium">Select your language</h2>
        <p className="text-muted-foreground">Choose your preferred language</p>
        <div className="grid grid-cols-2 gap-3 mt-4">
          {languages.map((language) => (
            <Card
              key={language.code}
              className={`cursor-pointer transition-all ${
                selectedLanguage === language.code
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/40"
              }`}
              onClick={() => setSelectedLanguage(language.code)}
            >
              <CardContent className="p-3 flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-xl mr-2">{language.flag}</span>
                  <span>{language.name}</span>
                </div>
                {selectedLanguage === language.code && (
<<<<<<< HEAD
=======
                  <Check className="h-4 w-4 text-primary" />
import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { useTheme } from "@/hooks/useTheme",;
import { Moon, Sun, Check } from "lucide-react",;
import { Card, CardContent } from "@/components/ui/card",;
interface Language {;
  code: string,;
  name: string,;
  flag: string;
}
;
const languages: Language[] = [;
  { code: "en", name: "English", flag: "🇺🇸" },;
  { code: "es", name: "Español", flag: "🇪🇸" },;
  { code: "fr", name: "Français", flag: "🇫🇷" },;
  { code: "de", name: "Deutsch", flag: "🇩🇪" },;
  { code: "zh", name: "中文", flag: "🇨🇳" }],;
export function LanguageThemeSelector() {;
  const { theme, setTheme } = useTheme();
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");
  return (;
    <div className="space-y-8 px-4">;
      <div className="space-y-2">;
        <h2 className="text-xl font-medium">Select your language</h2>;
        <p className="text-muted-foreground">Choose your preferred language</p>;
        <div className="grid grid-cols-2 gap-3 mt-4">;
          {languages.map((language) => (;
            <Card;
              key={language.code}
              className={`cursor-pointer transition-all ${;
                selectedLanguage === language.code;
                  ? "border-primary bg-primary/5";
                  : "border-border hover:border-primary/40";
              }`}
              onClick={() => setSelectedLanguage(language.code)}
            >
              <CardContent className="p-3 flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-xl mr-2">{language.flag}</span>
                  <span>{language.name}</span>
                </div>
                {selectedLanguage === language.code && (
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  <Check className="h-4 w-4 text-primary" />
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <h2 className="text-xl font-medium">Choose theme</h2>
        <p className="text-muted-foreground">Select your preferred appearance</p>
        <div className="flex gap-3 mt-4">
          <Card
            className={`flex-1 cursor-pointer transition-all ${
              theme === 'light'
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/40"
            }`}
            onClick={() => setTheme('light')}
          >
            <CardContent className="p-3 flex flex-col items-center justify-center">
              <Sun className="h-8 w-8 mb-2" />
              <span>Light</span>
              {theme === 'light' && (
                <Check className="h-4 w-4 text-primary mt-2" />
              )}
            </CardContent>
          </Card>
<<<<<<< HEAD
          <Card
=======
          <Card 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            className={`flex-1 cursor-pointer transition-all ${
              theme === 'dark'
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/40"
            }`}
            onClick={() => setTheme('dark')}
          >
            <CardContent className="p-3 flex flex-col items-center justify-center">
              <Moon className="h-8 w-8 mb-2" />
              <span>Dark</span>
              {theme === 'dark' && (
                <Check className="h-4 w-4 text-primary mt-2" />
              )}
<<<<<<< HEAD
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
<<<<<<< HEAD
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
            </CardContent>;
          </Card>;
        </div>;
      </div>;
    </div>;
  );
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
