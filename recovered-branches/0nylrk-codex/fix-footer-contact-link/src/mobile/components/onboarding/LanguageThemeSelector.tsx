<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/onboarding/LanguageThemeSelector.tsx

<<<<<<< HEAD

import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { useTheme } from "@/hooks/useTheme",

=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface Language {

  code: string
  name: string

  flag: string
}
const languages: Language[] = [
<<<<<<< HEAD
<<<<<<< HEAD

export function LanguageThemeSelector() {
=======

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/onboarding/LanguageThemeSelector.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/onboarding/LanguageThemeSelector.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/onboarding/LanguageThemeSelector.tsx
  const { theme, setTheme } = useTheme();
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/onboarding/LanguageThemeSelector.tsx
=======

=======
  { code: "en", name: "English", flag: "🇺🇸" }
  { code: "es", name: "Español", flag: "🇪🇸" }
  { code: "fr", name: "Français", flag: "🇫🇷" }
  { code: "de", name: "Deutsch", flag: "🇩🇪" }
  { code: "zh", name: "中文", flag: "🇨🇳" }]
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "zh", name: "中文", flag: "🇨🇳" }],

<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  return (

=======
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

<<<<<<< HEAD
=======
                  <Check className="h-4 w-4 text-primary" />
========
  return (
=======

>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/onboarding/LanguageThemeSelector.tsx
=======
<<<<<<< HEAD
=======
                  <Check className="h-4 w-4 text-primary" />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { useTheme } from "@/hooks/useTheme",;
import { Moon, Sun, Check } from "lucide-react",;
import { Card, CardContent } from "@/components/ui/card",;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/onboarding/LanguageThemeSelector.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

========
;
interface Language {;
  code:string,;
  name:string,;
  flag:string;
}
;
const languages:Language[] = [;
  { code:"en", name:"English", flag:"🇺🇸" },;
  { code:"es", name:"Español", flag:"🇪🇸" },;
  { code:"fr", name:"Français", flag:"🇫🇷" },;
  { code:"de", name:"Deutsch", flag:"🇩🇪" },;
  { code:"zh", name:"中文", flag:"🇨🇳" }],;
;
export function LanguageThemeSelector() {;
  const { theme, setTheme } = useTheme(),;
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en"),;
;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/onboarding/LanguageThemeSelector.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div className="space-y-8 px-4">;
      <div className="space-y-2">;
        <h2 className="text-xl font-medium">Select your language</h2>;
        <p className="text-muted-foreground">Choose your preferred language</p>;
<<<<<<< HEAD
<<<<<<< HEAD
        <div className="grid grid-cols-2 gap-3 mt-4">;
          {languages && languages.map((language) => (;
            <Card
              key={language && language.code}
              className={`cursor-pointer transition-all ${
                selectedLanguage === language && language.code 
                  ? "border-primary bg-primary/5" 
                  : "border-border hover:border-primary/40"
              }`}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/onboarding/LanguageThemeSelector.tsx

=======
        <div className="grid grid-cols-2 gap-3 mt-4">;
          {languages.map((language) => (;
            <Card;
              key={language.code}
              className={`cursor-pointer transition-all ${;
                selectedLanguage === language.code;
                  ? "border-primary bg-primary/5";
                  : "border-border hover:border-primary/40";
              }`}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              onClick={() => setSelectedLanguage(language.code)}
            >
              <CardContent className="p-3 flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-xl mr-2">{language.flag}</span>
                  <span>{language.name}</span>
                </div>
                {selectedLanguage === language.code && (
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  <Check className="h-4 w-4 text-primary" />
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
========
              onClick={() => setSelectedLanguage(language && language.code)}
            >;
              <CardContent className="p-3 flex items-center justify-between">;
                <div className="flex items-center">;
                  <span className="text-xl mr-2">{language && language.flag}</span>;
                  <span>{language && language.name}</span>;
                </div>;
                {selectedLanguage === language && language.code && (;
=======
        ;
        <div className="grid grid-cols-2 gap-3 mt-4">;
          {languages.map((language) => (;
            <Card ;
              key={language.code}
              className={`cursor-pointer transition-all ${;
                selectedLanguage === language.code ;
                  ? "border-primary bg-primary/5" ;
                  :"border-border hover:border-primary/40";
              }`}
              onClick={() => setSelectedLanguage(language.code)}
            >;
              <CardContent className="p-3 flex items-center justify-between">;
                <div className="flex items-center">;
                  <span className="text-xl mr-2">{language.flag}</span>;
                  <span>{language.name}</span>;
                </div>;
                {selectedLanguage === language.code && (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  <Check className="h-4 w-4 text-primary" />;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/onboarding/LanguageThemeSelector.tsx
                )}
              </CardContent>;
            </Card>;
          ))}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/onboarding/LanguageThemeSelector.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/onboarding/LanguageThemeSelector.tsx
        </div>;
      </div>;
<<<<<<< HEAD
      <div className="space-y-2">;
        <h2 className="text-xl font-medium">Choose theme</h2>;
        <p className="text-muted-foreground">Select your preferred appearance</p>;
        <div className="flex gap-3 mt-4">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/onboarding/LanguageThemeSelector.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/onboarding/LanguageThemeSelector.tsx
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <Card
            className={`flex-1 cursor-pointer transition-all ${
              theme === 'light'
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/40"
<<<<<<< HEAD
=======
;
      <div className="space-y-2">;
        <h2 className="text-xl font-medium">Choose theme</h2>;
        <p className="text-muted-foreground">Select your preferred appearance</p>;
        ;
        <div className="flex gap-3 mt-4">;
          <Card ;
            className={`flex-1 cursor-pointer transition-all ${;
              theme === 'light' ;
                ? "border-primary bg-primary/5" ;
                :"border-border hover:border-primary/40";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            }`}
            onClick={() => setTheme('light')}
          >;
            <CardContent className="p-3 flex flex-col items-center justify-center">;
              <Sun className="h-8 w-8 mb-2" />;
              <span>Light</span>;
              {theme === 'light' && (;
                <Check className="h-4 w-4 text-primary mt-2" />;
              )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/onboarding/LanguageThemeSelector.tsx
<<<<<<< HEAD
            </CardContent>
          </Card>

=======

            </CardContent>;
          </Card>;


========
            </CardContent>;
          </Card>;
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/onboarding/LanguageThemeSelector.tsx
          <Card
=======

          <Card 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            className={`flex-1 cursor-pointer transition-all ${
              theme === 'dark'
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/40"
<<<<<<< HEAD
=======
          ;
          <Card ;
            className={`flex-1 cursor-pointer transition-all ${;
              theme === 'dark' ;
                ? "border-primary bg-primary/5" ;
                :"border-border hover:border-primary/40";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            }`}
            onClick={() => setTheme('dark')}
          >;
            <CardContent className="p-3 flex flex-col items-center justify-center">;
              <Moon className="h-8 w-8 mb-2" />;
              <span>Dark</span>;
              {theme === 'dark' && (;
                <Check className="h-4 w-4 text-primary mt-2" />;
              )}

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/onboarding/LanguageThemeSelector.tsx
=======
=======



=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/onboarding/LanguageThemeSelector.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/onboarding/LanguageThemeSelector.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/onboarding/LanguageThemeSelector.tsx
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </CardContent>;
          </Card>;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/onboarding/LanguageThemeSelector.tsx
<<<<<<< HEAD
    </div>;
  );

}
;

=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
    </div>);
}
=======
            </CardContent>;
          </Card>;
        </div>;
      </div>;
    </div>;
  ),;}
 interface Language {
  code: string;
name: string;
flag: string 
}const languages: Language[] = [ return (<div className="space-y-8 px-4" > <div className="space-y-2" > <h2 className="text-xl font-medium" >Select your language</h2> <p className="text-muted-foreground" >Choose your preferred language</p> <div className="grid grid-cols-2 gap-3 mt-4" > {
  languages.map ( (language) => (<Card language.code 
}className= {
  `cursor-pointer transition-all $ {
  selectedLanguage === language.code) 
}</CardContent> </Card>) ) 
}</div> </div> <div className="space-y-2" > <h2 className="text-xl font-medium" >Choose theme</h2> <p className="text-muted-foreground" >Select your preferred appearance</p> <div className="flex gap-3 mt-4" > <Card className= {
  `flex-1 cursor-pointer transition-all $ {
  theme === 'light' > <CardContent className="p-3 flex flex-col items-center justify-center" > <Sun className="h-8 w-8 mb-2" /> <span>Light</span>) 
}</CardContent> </Card> <Card className= {
  `flex-1 cursor-pointer transition-all $ {
  theme === 'dark' > <CardContent className="p-3 flex flex-col items-center justify-center" > <Moon className="h-8 w-8 mb-2" /> <span>Dark</span>) 
}</CardContent> </Card> </div> </div> </div>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/onboarding/LanguageThemeSelector.tsx
=======
    </div>;
  );
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
