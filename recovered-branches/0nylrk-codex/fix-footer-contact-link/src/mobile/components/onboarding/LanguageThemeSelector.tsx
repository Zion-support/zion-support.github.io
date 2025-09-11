



<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react";
import {Button} from "@/components/ui/button";
import {useTheme} from "@/hooks/useTheme";
import {Moon, Sun, Check} from "lucide-react";
import {Card, CardContent} from "@/components/ui/card";
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { useTheme } from "@/hooks/useTheme",
import { Moon, Sun, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Moon, Sun, Check } from "lucide-react",
import { Card, CardContent } from "@/components/ui/card",

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface Language {

  code: string
  name: string

  flag: string
}
const languages: Language[] = [

<<<<<<< HEAD
<<<<<<< HEAD
  const { theme, setTheme } = useTheme();
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");

  { code: "en", name: "English", flag: "🇺🇸" }
  { code: "es", name: "Español", flag: "🇪🇸" }
  { code: "fr", name: "Français", flag: "🇫🇷" }
  { code: "de", name: "Deutsch", flag: "🇩🇪" }
  { code: "zh", name: "中文", flag: "🇨🇳" }]
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "zh", name: "中文", flag: "🇨🇳" }],

<<<<<<< HEAD
<<<<<<< HEAD
export function LanguageThemeSelector() {;
  const { theme, setTheme } = useTheme();
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");
export function LanguageThemeSelector() {
  const { theme, setTheme } = useTheme();

  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");
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
              className={`cursor-pointer transition-all ${
                selectedLanguage === language.code
                  ? "border-primary bg-primary/5"
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

  return (

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
                  <Check className="h-4 w-4 text-primary" />
  return (
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <div className="space-y-8 px-4">;
      <div className="space-y-2">;
        <h2 className="text-xl font-medium">Select your language</h2>;
        <p className="text-muted-foreground">Choose your preferred language</p>;
<<<<<<< HEAD
<<<<<<< HEAD
        <div className="grid grid-cols-2 gap-3 mt-4">;
          {languages.map((language) => (;
            <Card;
              key={language.code}
              className={`cursor-pointer transition-all ${;
                selectedLanguage === language.code;
                  ? "border-primary bg-primary/5";
                  : "border-border hover:border-primary/40";
              }`}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
              onClick={() => setSelectedLanguage(language && language.code)}
            >;
              <CardContent className="p-3 flex items-center justify-between">;
                <div className="flex items-center">;
                  <span className="text-xl mr-2">{language && language.flag}</span>;
                  <span>{language && language.name}</span>;
                </div>;
                {selectedLanguage === language && language.code && (;
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
                  <Check className="h-4 w-4 text-primary" />;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


                  <Check className="h-4 w-4 text-primary" />
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                )}
              </CardContent>;
            </Card>;
          ))}
<<<<<<< HEAD
<<<<<<< HEAD
        </div>;
      </div>;
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        </div>;
      </div>;

      <div className="space-y-2">;
        <h2 className="text-xl font-medium">Choose theme</h2>;
        <p className="text-muted-foreground">Select your preferred appearance</p>;

        <div className="flex gap-3 mt-4">;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <Card
            className={`flex-1 cursor-pointer transition-all ${
              theme === 'light'
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/40"
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


<<<<<<< HEAD
            </CardContent>;
          </Card>;

          <Card 

<<<<<<< HEAD
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
          <Card
          <Card 
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          <Card
=======

          <Card 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            className={`flex-1 cursor-pointer transition-all ${
              theme === 'dark'
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/40"
<<<<<<< HEAD
          ;
          <Card ;
            className={`flex-1 cursor-pointer transition-all ${;
              theme === 'dark' ;
                ? "border-primary bg-primary/5" ;
                :"border-border hover:border-primary/40";
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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



=======
=======



=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
            }`}
            onClick={() => setTheme('dark')}
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </CardContent>;
          </Card>;
        </div>;
      </div>;




<<<<<<< HEAD
<<<<<<< HEAD
}
    </div>);
}
    </div>);
}
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
