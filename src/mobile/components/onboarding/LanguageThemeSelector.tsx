<<<<<<< HEAD
<<<<<<< HEAD

import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { useTheme } from "@/hooks/useTheme";
            <Card
              key = {language.code,}
=======
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { useTheme } from "@/hooks/useTheme";
            <Card
              key = {language.code,}
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { useTheme } from "@/hooks/useTheme";
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/hooks/useTheme'
import { Moon, Sun, Check } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card";
interface Language {
  code: string;
  name: string;
  flag: string
const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' }
  { code: 'es', name: 'Español', flag: '🇪🇸' }
  { code: 'fr', name: 'Français', flag: '🇫🇷' }
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
  { code: 'zh', name: '中文', flag: '🇨🇳' }
]
export function LanguageThemeSelector() {
  const { theme, setTheme } = useTheme();
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en"),

  return (
    <div className='space-y-8 px-4'>
      <div className='space-y-2'>
        <h2 className='text-xl font-medium'>Select your language</h2>
        <p className='text-muted-foreground'>Choose your preferred language</p>
        <div className='grid grid-cols-2 gap-3 mt-4'>
          {languages.map(language => (
            <Card
              key={language.code}    <div className="space-y-8 px-4">
      <div className="space-y-2">
        <h2 className="text-xl font-medium">Select your language</h2>
        <p className="text-muted-foreground">Choose your preferred language</p>
        <div className="grid grid-cols-2 gap-3 mt-4">
          {languages.map((language,) => (
            <Card
              key = {language.code,}
            <Card 
              key = {language.code,}

import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { useTheme } from "@/hooks/useTheme",
import { Moon, Sun, Check } from 'lucide-react'
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
=======
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
            <Card
                  <Check className="h-4 w-4 text-primary" />
import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { useTheme } from "@/hooks/useTheme",;
import { Moon, Sun, Check } from 'lucide-react';
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
ursor/fix-website-loading-errors-and-merge-6662
              key={language.code}
                selectedLanguage === language.code
                  ? "border-primary bg-primary/5"
              onClick = {(,) => setSelectedLanguage(language && language.code),}
            >;
              <CardContent className='p-3 flex items-center justify-between'>;
                <div className='flex items-center'>;
                  <span className='text-xl mr-2'>{language && language.flag}</span>;
                  <span>{language && language.name}</span>;
                </div>;
                {selectedLanguage === language && language.code && (;
                  <Check className='h-4 w-4 text-primary' />                )}          {languages && languages.map((language) => (;
            <Card
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              key={language && language.code}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              className={`cursor-pointer transition-all ${
                selectedLanguage === language && language.code 
                  ? "border-primary bg-primary/5" 
                  : "border-border hover:border-primary/40"
              }`}
<<<<<<< HEAD


=======
              onClick={() => setSelectedLanguage(language.code)}
            >
              <CardContent className="p-3 flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-xl mr-2">{language.flag}</span>
                  <span>{language.name}</span>
                </div>
                {selectedLanguage === language.code && (
<<<<<<< HEAD
                  <Check className='h-4 w-4 text-primary' />                )}          {languages.map((language) => (
            <Card
            <Card 
                  <Check className="h-4 w-4 text-primary" />
import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { useTheme } from "@/hooks/useTheme",;
import { Moon, Sun, Check } from 'lucide-react';
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
                  <Check className="h-4 w-4 text-primary" />
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className='space-y-2'>
        <h2 className='text-xl font-medium'>Choose theme</h2>
        <p className='text-muted-foreground'>
          Select your preferred appearance
        </p>
        <div className='flex gap-3 mt-4'>
              onClick={() => setSelectedLanguage(language.code)}

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            >;
              <CardContent className="p-3 flex items-center justify-between">;
                <div className="flex items-center">;
                  <span className="text-xl mr-2">{language && language.flag}</span>;
                  <span>{language && language.name}</span>;
                </div>;
                {selectedLanguage === language && language.code && (;
                  <Check className="h-4 w-4 text-primary" />;
                )}
              </CardContent>;
            </Card>;
          ))}
<<<<<<< HEAD

        </div>;
      </div>;

      <div className='space-y-2'>;
        <h2 className='text-xl font-medium'>Choose theme</h2>;
        <p className='text-muted-foreground'>;
          Select your preferred appearance;
        </p>;

        <div className='flex gap-3 mt-4'>;

              theme === 'light'
                ? 'border-primary bg-primary/5'
                : 'border-border hover:border-primary/40'
ursor/fix-website-loading-errors-and-merge-6662
            }`}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          <Card
              theme === 'light'
                ? 'border-primary bg-primary/5'
                : 'border-border hover:border-primary/40'
            }`}
            onClick = {() => setTheme('light'),}
          >;
            <CardContent className='p-3 flex flex-col items-center justify-center'>;
              <Sun className='h-8 w-8 mb-2' />;
              <span>Light</span>;
              {theme === 'light' && (;
                <Check className='h-4 w-4 text-primary mt-2' />;
              )}
          <Card
            className={`flex-1 cursor-pointer transition-all ${
              theme === 'dark'
                ? 'border-primary bg-primary/5'
                : 'border-border hover:border-primary/40'
            }`}
            onClick = {() => setTheme('dark'),}
          >;
            <CardContent className='p-3 flex flex-col items-center justify-center'>;
              <Moon className='h-8 w-8 mb-2' />;
              <span>Dark</span>;
              {theme === 'dark' && (;
                <Check className='h-4 w-4 text-primary mt-2' />              )}              )}
            </CardContent>;
          </Card>;
                <Check className="h-4 w-4 text-primary mt-2" />;

<<<<<<< HEAD
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

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


                  <Check className="h-4 w-4 text-primary" />
import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { useTheme } from "@/hooks/useTheme",;
import { Moon, Sun, Check } from 'lucide-react';
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
              className={`cursor-pointer transition-all ${
                selectedLanguage === language.code
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/40"
              }`}
              onClick={() => setSelectedLanguage(language.code)}
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
              )}
            </CardContent>
          </Card>
          <Card
            className={`flex-1 cursor-pointer transition-all ${
              theme === 'dark'
                ? 'border-primary bg-primary/5'
                : 'border-border hover:border-primary/40'
            }`}
            onClick = {() => setTheme('dark'),}
          >
            <CardContent className='p-3 flex flex-col items-center justify-center'>
              <Moon className='h-8 w-8 mb-2' />
              <span>Dark</span>
              {theme === 'dark' && (
                <Check className='h-4 w-4 text-primary mt-2' />              )}              )}
            </CardContent>
          </Card>
                <Check className="h-4 w-4 text-primary mt-2" />
              )}
            </CardContent>
          </Card>
          <Card
            className={`flex-1 cursor-pointer transition-all ${
              theme === 'dark'
                ? "border-primary bg-primary/5"
          <Card 
            className={`flex-1 cursor-pointer transition-all ${
          
          <Card 
            className={`flex-1 cursor-pointer transition-all ${
              theme === 'dark' 
                ? "border-primary bg-primary/5" 
          
          <Card 
            className={`flex-1 cursor-pointer transition-all ${



=======
          <Card 
            className={`flex-1 cursor-pointer transition-all ${



          
          <Card 
            className={`flex-1 cursor-pointer transition-all ${
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              theme === 'dark' 
                ? "border-primary bg-primary/5" 
                : "border-border hover:border-primary/40"
            onClick={() => setTheme('dark')}
<<<<<<< HEAD
          >
            <CardContent className="p-3 flex flex-col items-center justify-center">
              <Moon className="h-8 w-8 mb-2" />
              <span>Dark</span>
              {theme === 'dark' && (
                <Check className="h-4 w-4 text-primary mt-2" />
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
=======
          >;
            <CardContent className="p-3 flex flex-col items-center justify-center">;
              <Moon className="h-8 w-8 mb-2" />;
              <span>Dark</span>;
              {theme === 'dark' && (;
                <Check className="h-4 w-4 text-primary mt-2" />;
              )}

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

      </div>;
    </div>;
  );
};
<<<<<<< HEAD
            </CardContent>;
          </Card>;
        </div>;
      </div>;
    </div>;
  );
}
;
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React, { useState } from 'react';
import { Button } from '@/components / ui / button';
import { use_theme } from '@/hooks / use_theme';
import { Moon, Sun, Check } from 'lucide-react';
import { Card, CardContent } from '@/components / ui / card';
interface Language {
  code: string;
  name: string;
  flag: string;
const languages: Language[] = [;
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
];
export /**
 * LanguageThemeSelector - Function description
 */
function LanguageThemeSelector() {
  const { theme, set_theme } = use_theme ();
  const [selected_language, setSelectedLanguage] = useState < string>('en');
  return (
    <div className='space - y-8 px - 4'>;
      <div className='space - y-2'>;
        <h2 className='text - xl font - medium'>Select your language</h2>;
        <p className='text - muted - foreground'>Choose your preferred language</p>;
        <div className='grid grid - cols - 2 gap - 3 mt - 4'>;
          {languages.map (language => (
            <Card;
              key={language.code}    <div className="space - y-8 px - 4">;
      <div className="space - y-2">;
        <h2 className="text - xl font - medium">Select your language</h2>;
        <p className="text - muted - foreground">Choose your preferred language</p>;
        <div className="grid grid - cols - 2 gap - 3 mt - 4">;
          {languages.map ((language, ) => (
            <Card;
              key = {language.code, }
              className={`cursor - pointer transition - all ${
                selected_language === language.code;
                  ? 'border - primary bg - primary / 5';
                  : 'border - border hover:border - primary / 40';
              }`}
              on_click = {(, ) => setSelectedLanguage (language.code), }
            >;
              <CardContent className='p - 3 flex items - center justify - between'>;
                <div className='flex items - center'>;
                  <span className='text - xl mr - 2'>{language.flag}</span>;
                  <span>{language.name}</span>;
                </div>;
                {selected_language === language.code && (
                  <Check className='h - 4 w - 4 text - primary' />                )}          {languages.map ((language) => (
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
<<<<<<< HEAD
      <div className='space - y-2'>;
        <h2 className='text - xl font - medium'>Choose theme</h2>;
        <p className='text - muted - foreground'>;
          Select your preferred appearance;
        </p>;
        <div className='flex gap - 3 mt - 4'>;
          <Card;
              theme === 'light';
                ? 'border - primary bg - primary / 5';
                : 'border - border hover:border - primary / 40';
            }`}
            on_click = {() => set_theme ('light'), }
          >;
            <CardContent className='p - 3 flex flex - col items - center justify - center'>;
              <Sun className='h - 8 w - 8 mb - 2' />;
              <span > Light</span>;
              {theme === 'light' && (
                <Check className='h - 4 w - 4 text - primary mt - 2' />)}
            </CardContent>;
          </Card>;
          <Card;
            className={`flex - 1 cursor - pointer transition - all ${
              theme === 'dark';
                ? 'border - primary bg - primary / 5';
                : 'border - border hover:border - primary / 40';
            }`}
            on_click = {() => set_theme ('dark'), }
          >;
            <CardContent className='p - 3 flex flex - col items - center justify - center'>;
              <Moon className='h - 8 w - 8 mb - 2' />;
              <span > Dark</span>;
              {theme === 'dark' && (
                <Check className='h - 4 w - 4 text - primary mt - 2' />              )}              )}
            </CardContent>;
          </Card>;
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
            </CardContent>;
          </Card>;
        </div>;
      </div>;

  );
}

    </div>);
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
