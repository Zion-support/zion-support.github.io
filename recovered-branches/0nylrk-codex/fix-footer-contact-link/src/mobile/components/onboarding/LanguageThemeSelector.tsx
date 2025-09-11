



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
interface Language {

  code: string
  name: string

  flag: string
}
const languages: Language[] = [

import React, { useState } from "react";
import {Button} from "@/components/ui/button";
import {useTheme} from "@/hooks/useTheme";
import {Moon, Sun, Check} from "lucide-react";
import {Card, CardContent} from "@/components/ui/card";

interface Language {;
  code: string,;
  name: string,;
  flag: string;
}

const languages: Language[] = [;
  { code: "en", name: "English", flag: "🇺🇸" },;
  { code: "es", name: "Español", flag: "🇪🇸" },;
  { code: "fr", name: "Français", flag: "🇫🇷" },;
  { code: "de", name: "Deutsch", flag: "🇩🇪" },;
  { code: "zh", name: "中文", flag: "🇨🇳" }],;

export function LanguageThemeSelector() {;

  const { theme, setTheme } = useTheme();

  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");
=======

  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "zh", name: "中文", flag: "🇨🇳" }],


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

  return (

=======
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
          {languages && languages.map((language) => (;
            <Card
              key={language && language.code}
              className={`cursor-pointer transition-all ${
                selectedLanguage === language && language.code 
                  ? "border-primary bg-primary/5" 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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


                  <Check className="h-4 w-4 text-primary" />
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                )}
              </CardContent>;
            </Card>;
          ))}

        </div>;
      </div>;

      <div className="space-y-2">;
        <h2 className="text-xl font-medium">Choose theme</h2>;
        <p className="text-muted-foreground">Select your preferred appearance</p>;

        <div className="flex gap-3 mt-4">;

          <Card
            className={`flex-1 cursor-pointer transition-all ${
              theme === 'light'
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/40"
            }`}
            onClick={() => setTheme('light')}
          >;
            <CardContent className="p-3 flex flex-col items-center justify-center">;
              <Sun className="h-8 w-8 mb-2" />;
              <span>Light</span>;
              {theme === 'light' && (;
                <Check className="h-4 w-4 text-primary mt-2" />;
              )}

            </CardContent>;
          </Card>;


          <Card
=======

          <Card 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            className={`flex-1 cursor-pointer transition-all ${
              theme === 'dark'
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/40"
            }`}
            onClick={() => setTheme('dark')}
          >;
            <CardContent className="p-3 flex flex-col items-center justify-center">;
              <Moon className="h-8 w-8 mb-2" />;
              <span>Dark</span>;
              {theme === 'dark' && (;
                <Check className="h-4 w-4 text-primary mt-2" />;
              )}

=======



=======
import React, { useState } from './react';
import { Button } from '@/components / ui / button';
import { use_theme } from '@/hooks / use_theme';
import { Moon, Sun, Check } from './lucide-react';
import { Card, CardContent } from '@/components / ui / card';
interface Language {
  code: string,
  name: string,
  flag: string;
}
const languages: Language[] = [;
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "zh", name: "中文", flag: "🇨🇳" }],
export /**
 * LanguageThemeSelector - Function description
 */
function LanguageThemeSelector() {
  const { theme, set_theme } = use_theme ();
  const [selected_language, setSelectedLanguage] = useState < string>("en");
;
  return (
    <div className="space - y-8 px - 4">;
      <div className="space - y-2">;
        <h2 className="text - xl font - medium">Select your language</h2>;
        <p className="text - muted - foreground">Choose your preferred language</p>;
        <div className="grid grid - cols - 2 gap - 3 mt - 4">;
          {languages.map ((language) => (
            <Card;
              key={language.code}
              className={`cursor - pointer transition - all ${
                selected_language === language.code;
                  ? "border - primary bg - primary / 5";
                  : "border - border hover:border - primary / 40";
              }`}
              on_click={() => setSelectedLanguage (language.code)}
            >;
              <CardContent className="p - 3 flex items - center justify - between">;
                <div className="flex items - center">;
                  <span className="text - xl mr - 2">{language.flag}</span>;
                  <span>{language.name}</span>;
                </div>;
                {selected_language === language.code && (
                  <Check className="h - 4 w - 4 text - primary" />)}
              </CardContent>;
            </Card>))}
        </div>;
      </div>;
      <div className="space - y-2">;
        <h2 className="text - xl font - medium">Choose theme</h2>;
        <p className="text - muted - foreground">Select your preferred appearance</p>;
        <div className="flex gap - 3 mt - 4">;
          <Card;
            className={`flex - 1 cursor - pointer transition - all ${
              theme === 'light';
                ? "border - primary bg - primary / 5";
                : "border - border hover:border - primary / 40";
            }`}
            on_click={() => set_theme ('light')}
          >;
            <CardContent className="p - 3 flex flex - col items - center justify - center">;
              <Sun className="h - 8 w - 8 mb - 2" />;
              <span > Light</span>;
              {theme === 'light' && (
                <Check className="h - 4 w - 4 text - primary mt - 2" />)}
            </CardContent>;
          </Card>;
          <Card;
            className={`flex - 1 cursor - pointer transition - all ${
              theme === 'dark';
                ? "border - primary bg - primary / 5";
                : "border - border hover:border - primary / 40";
            }`}
            on_click={() => set_theme ('dark')}
          >;
            <CardContent className="p - 3 flex flex - col items - center justify - center">;
              <Moon className="h - 8 w - 8 mb - 2" />;
              <span > Dark</span>;
              {theme === 'dark' && (
                <Check className="h - 4 w - 4 text - primary mt - 2" />)}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
            </CardContent>;
          </Card>;
        </div>;
      </div>;




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
;
