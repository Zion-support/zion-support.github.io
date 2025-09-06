
<<<<<<< HEAD
<<<<<<< HEAD
import { Moon, Sun, Check } from 'lucide-react'

=======
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { useTheme } from "@/hooks/useTheme";
            <Card
              key = {language.code,}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { useTheme } from "@/hooks/useTheme";
=======
<<<<<<< HEAD
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/hooks/useTheme'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Moon, Sun, Check } from 'lucide-react'
<<<<<<< HEAD
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
<<<<<<< HEAD
            <Card
              key = {language.code,}
=======
=======
            <Card 
              key = {language.code,}
=======

import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { useTheme } from "@/hooks/useTheme",
import { Moon, Sun, Check } from 'lucide-react'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

              className={`cursor-pointer transition-all ${
=======
>>>>>>>               className={`cursor-pointer transition-all ${
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
            <Card
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD

=======
>>>>>>>               key={language.code}
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              key={language.code}
>>>>>>>               className={`cursor-pointer transition-all ${
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
>>>>>>>               key={language && language.code}
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              className={`cursor-pointer transition-all ${
                selectedLanguage === language.code 
                  ? "border-primary bg-primary/5" 
                  : "border-border hover:border-primary/40"
              }`}
              onClick={() => setSelectedLanguage(language.code)}
<<<<<<< HEAD

=======
            >
              <CardContent className="p-3 flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-xl mr-2">{language.flag}</span>
                  <span>{language.name}</span>
                </div>
                {selectedLanguage === language.code && (
<<<<<<< HEAD
=======
<<<<<<< HEAD
                  <Check className='h-4 w-4 text-primary' />                )}          {languages.map((language) => (
<<<<<<< HEAD
            <Card
=======
            <Card 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              key={language.code}
              className={`cursor-pointer transition-all ${
                selectedLanguage === language.code
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/40"
              }`}
              onClick={() => setSelectedLanguage(language.code)}
<<<<<<< HEAD
            >
              <CardContent className="p-3 flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-xl mr-2">{language.flag}</span>
                  <span>{language.name}</span>
                </div>
                {selectedLanguage === language.code && (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
                )}
              </CardContent>;
            </Card>;
          ))}

        </div>;
      </div>;

      <div className='space-y-2'>;
        <h2 className='text-xl font-medium'>Choose theme</h2>;
        <p className='text-muted-foreground'>;
          Select your preferred appearance;
        </p>;

        <div className='flex gap-3 mt-4'>;

>>>>>>>           <Card
              theme === 'light'
                ? 'border-primary bg-primary/5'
                : 'border-border hover:border-primary/40'
>>>>>>>             }`}
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            }`}
>>>>>>>             onClick={() => setTheme('light')}
=======
          <Card
              theme === 'light'
                ? 'border-primary bg-primary/5'
                : 'border-border hover:border-primary/40'
=======
            >;
              <CardContent className="p-3 flex items-center justify-between">;
                <div className="flex items-center">;
                  <span className="text-xl mr-2">{language.flag}</span>;
                  <span>{language.name}</span>;
                </div>;
                {selectedLanguage === language.code && (;
                  <Check className="h-4 w-4 text-primary" />;
                )}
              </CardContent>;
            </Card>;
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            }`}
            onClick={() => setTheme('light')}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          >
            <CardContent className="p-3 flex flex-col items-center justify-center">
              <Sun className="h-8 w-8 mb-2" />
              <span>Light</span>
              {theme === 'light' && (
                <Check className="h-4 w-4 text-primary mt-2" />
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>>               )}
            </CardContent>
          </Card>
<<<<<<< HEAD

          <Card 
            className={`flex-1 cursor-pointer transition-all ${

              theme === 'dark' 
                ? "border-primary bg-primary/5" 

=======
=======
              )}
            </CardContent>
          </Card>
<<<<<<< HEAD
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
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <Card
            className={`flex-1 cursor-pointer transition-all ${
              theme === 'dark'
                ? "border-primary bg-primary/5"
<<<<<<< HEAD
          
          <Card 
            className={`flex-1 cursor-pointer transition-all ${
>>>>>>>               theme === 'dark' 
                ? "border-primary bg-primary/5" 
>>>>>>>                 : "border-border hover:border-primary/40"
ursor/fix-website-loading-errors-and-merge-6662
              theme === 'dark' 
                ? "border-primary bg-primary/5" 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
          <Card 
            className={`flex-1 cursor-pointer transition-all ${
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
          
          <Card 
            className={`flex-1 cursor-pointer transition-all ${
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              theme === 'dark' 
                ? "border-primary bg-primary/5" 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                : "border-border hover:border-primary/40"
>>>>>>>             }`}
            onClick={() => setTheme('dark')}
<<<<<<< HEAD


              )}
<<<<<<< HEAD

=======
=======
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
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      </div>
    </div>
  )
}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
      </div>;
    </div>;
  );
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </CardContent>;
          </Card>;
        </div>;
      </div>;
<<<<<<< HEAD

=======
    </div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
