<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD




<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React, { useState } from "react";
import {Button} from "@/components/ui/button";
import {useTheme} from "@/hooks/useTheme";
import {Moon, Sun, Check} from "lucide-react";
import {Card, CardContent} from "@/components/ui/card";
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { useTheme } from "@/hooks/useTheme",
import { Moon, Sun, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Moon, Sun, Check } from "lucide-react",
import { Card, CardContent } from "@/components/ui/card",

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface Language {

  code: string
  name: string

  flag: string
}
<<<<<<< HEAD
const languages: Language[] = [
<<<<<<< HEAD
  { code: "en", name: "English", flag: "🇺🇸" }
  { code: "es", name: "Español", flag: "🇪🇸" }
  { code: "fr", name: "Français", flag: "🇫🇷" }
  { code: "de", name: "Deutsch", flag: "🇩🇪" }
  { code: "zh", name: "中文", flag: "🇨🇳" }]
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useState } from "react";
import {Button} from "@/components/ui/button";
import {useTheme} from "@/hooks/useTheme";
import {Moon, Sun, Check} from "lucide-react";
import {Card, CardContent} from "@/components/ui/card";

interface Language {;
  code: string,;
  name: string,;
=======
interface Language {
  code: string;
  name: string;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  flag: string;
=======
interface Language {
=======


interface Language {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

  code: string
  name: string

  flag: string
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
}
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
const languages: Language[] = [  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
];

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export function LanguageThemeSelector() {
  const { theme, setTheme } = useTheme();
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");
  const { theme, setTheme } = useTheme(),
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en"),
  const { theme, setTheme } = useTheme();

  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");

  return (
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
=======
interface Language {
  code: string;
  name: string;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  flag: string;
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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

  const { theme, setTheme } = useTheme();
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");

  { code: "en", name: "English", flag: "🇺🇸" }
  { code: "es", name: "Español", flag: "🇪🇸" }
  { code: "fr", name: "Français", flag: "🇫🇷" }
  { code: "de", name: "Deutsch", flag: "🇩🇪" }
  { code: "zh", name: "中文", flag: "🇨🇳" }]
  { code: "en", name: "English", flag: "🇺🇸" },
const languages: Language[] = [  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
];

export function LanguageThemeSelector() {
  const { theme, setTheme } = useTheme();


<<<<<<< HEAD
<<<<<<< HEAD
        <div className="grid grid-cols-2 gap-3 mt-4">;
          {languages && languages.map((language) => (;
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

  return (
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  return (
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export function LanguageThemeSelector() {;
  const { theme, setTheme } = useTheme();
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export function LanguageThemeSelector() {
  const { theme, setTheme } = useTheme();

  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");
  const { theme, setTheme } = useTheme(),
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en"),
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
  const { theme, setTheme } = useTheme();

  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  return (
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    <div className="space-y-8 px-4">;
      <div className="space-y-2">;
        <h2 className="text-xl font-medium">Select your language</h2>;
        <p className="text-muted-foreground">Choose your preferred language</p>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

        <div className="grid grid-cols-2 gap-3 mt-4">;
          {languages && languages.map((language) => (;
            <Card
                  : "border-border hover:border-primary/40"
              }`}

<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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


<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  <Check className="h-4 w-4 text-primary" />
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
                  <Check className="h-4 w-4 text-primary" />
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
                  <Check className="h-4 w-4 text-primary" />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              onClick={() => setSelectedLanguage(language && language.code)}
            >;
              <CardContent className="p-3 flex items-center justify-between">;
                <div className="flex items-center">;
                  <span className="text-xl mr-2">{language && language.flag}</span>;
                  <span>{language && language.name}</span>;
                </div>;
                {selectedLanguage === language && language.code && (;
                  <Check className="h-4 w-4 text-primary" />;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                )}
              </CardContent>;
            </Card>;
<<<<<<< HEAD
          ))}
<<<<<<< HEAD
<<<<<<< HEAD

        </div>;
      </div>;

      <div className="space-y-2">;
        <h2 className="text-xl font-medium">Choose theme</h2>;
        <p className="text-muted-foreground">Select your preferred appearance</p>;

        <div className="flex gap-3 mt-4">;

=======
        </div>;
      </div>;
                  <Check className="h-4 w-4 text-primary" />
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      <div className="space-y-2">
        <h2 className="text-xl font-medium">Choose theme</h2>
        <p className="text-muted-foreground">
          Select your preferred appearance
        </p>

        <div className="flex gap-3 mt-4">
          <Card
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
                  <Check className="h-4 w-4 text-primary" />
              onClick={() => setSelectedLanguage(language && language.code)}
            >;
              <CardContent className="p-3 flex items-center justify-between">;
                <div className="flex items-center">;
                  <span className="text-xl mr-2">{language && language.flag}</span>;
                  <span>{language && language.name}</span>;
                </div>;
                {selectedLanguage === language && language.code && (;
                  <Check className="h-4 w-4 text-primary" />;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                )}
              </CardContent>;
            </Card>;
          ))}          <Card
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          ))}          <Card
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            className={`flex-1 cursor-pointer transition-all ${
              theme === "light"
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/40"
;
      <div className="space-y-2">;
        <h2 className="text-xl font-medium">Choose theme</h2>;
=======
import React, { useState } from "react";"
import {Button} from "@/components/ui/button";"
import {useTheme} from "@/hooks/useTheme";"
import {Moon, Sun, Check} from "lucide-react";"
import {Card, CardContent} from "@/components/ui/card";
interface Language {}
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [;"
  { code: "en", name: "English", flag: "🇺🇸" },;"
  { code: "es", name: "Español", flag: "🇪🇸" },;"
  { code: "fr", name: "Français", flag: "🇫🇷" },;"
  { code: "de", name: "Deutsch", flag: "🇩🇪" },;"
  { code: "zh", name: "中文", flag: "🇨🇳" }],;

export function LanguageThemeSelector() { return null; }
  const { theme, setTheme } = useTheme();
"
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");



  const { theme, setTheme } = useTheme();"
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");
"
  { code: "en", name: "English", flag: "🇺🇸" }"
  { code: "es", name: "Español", flag: "🇪🇸" }"
  { code: "fr", name: "Français", flag: "🇫🇷" }"
  { code: "de", name: "Deutsch", flag: "🇩🇪" }"
  { code: "zh", name: "中文", flag: "🇨🇳" }]


"
  { code: "en", name: "English", flag: "🇺🇸" },"
  { code: "es", name: "Español", flag: "🇪🇸" },"
  { code: "fr", name: "Français", flag: "🇫🇷" },"
  { code: "de", name: "Deutsch", flag: "🇩🇪" },"
  { code: "zh", name: "中文", flag: "🇨🇳" },
];


;"
      <div className="space-y-2">;"
        <h2 className="text-xl font-medium">Choose theme</h2>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <p className="text-muted-foreground">Select your preferred appearance</p>;
        ;"
        <div className="flex gap-3 mt-4">;
          <Card ;
            className={`flex-1 cursor-pointer transition-all ${;
              theme === 'light' ;"
                ? "border-primary bg-primary/5" ;"
                :"border-border hover:border-primary/40";
<<<<<<< HEAD
            }`}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            onClick={() => setTheme('light')}
          >;
            <CardContent className="p-3 flex flex-col items-center justify-center">;
              <Sun className="h-8 w-8 mb-2" />;
              <span>Light</span>;
              {theme === 'light' && (;
                <Check className="h-4 w-4 text-primary mt-2" />;
              )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            </CardContent>
          </Card>

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

            </CardContent>;
          </Card>;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
          <Card
=======

          <Card 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
            </CardContent>;
          </Card>;

          <Card 

            }`}
            onClick={() => setTheme('light')}
=======
=======
          <Card            }`}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          <Card            }`}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
          <Card            }`}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            onClick={() => setTheme("light")}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
          >
            <CardContent className="p-3 flex flex-col items-center justify-center">
=======
`
            }`}"
            onClick={() => setTheme("light")}
          >"
            <CardContent className="p-3 flex flex-col items-center justify-center">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              <Sun className="h-8 w-8 mb-2" />
              <span>Light</span>"
              {theme === "light" && ("
                <Check className="h-4 w-4 text-primary mt-2" />
              )}
            </CardContent>
          </Card>

<<<<<<< HEAD
          <Card
<<<<<<< HEAD
          <Card 
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
          <Card
          <Card
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
            className={`flex-1 cursor-pointer transition-all ${
              theme === "dark"
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/40"
          ;
          <Card ;
            className={`flex-1 cursor-pointer transition-all ${;
              theme === 'dark' ;
                ? "border-primary bg-primary/5" ;
                :"border-border hover:border-primary/40";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            }`}
=======

          ;
          <Card ;`
            className={`flex-1 cursor-pointer transition-all ${;'
              theme === 'dark' ;"
                ? "border-primary bg-primary/5" ;"
                :"border-border hover:border-primary/40";
`
            }`}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            onClick={() => setTheme("dark")}
          >"
            <CardContent className="p-3 flex flex-col items-center justify-center">"
              <Moon className="h-8 w-8 mb-2" />
              <span>Dark</span>"
              {theme === "dark" && ("
                <Check className="h-4 w-4 text-primary mt-2" />
              )}
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======



=======
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a




<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React, { useState } from './react';
import { Button } from '@/components / ui / button';
import { use_theme } from '@/hooks / use_theme';
import { Moon, Sun, Check } from './lucide-react';
import { Card, CardContent } from '@/components / ui / card';
interface Language {
  code: string,
  name: string,
  flag: string;
=======
=======
            }`}
            onClick={() => setTheme("dark")}
          >
            <CardContent className="p-3 flex flex-col items-center justify-center">
              <Moon className="h-8 w-8 mb-2" />
              <span>Dark</span>
              {theme === "dark" && (
                <Check className="h-4 w-4 text-primary mt-2" />
              )}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
            }`}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
            }`}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
}`}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            onClick={() => setTheme('dark')}
          >
            <CardContent className="p-3 flex flex-col items-center justify-center">
              <Moon className="h-8 w-8 mb-2" />
              <span>Dark</span>
              {theme === 'dark' && (
                <Check className="h-4 w-4 text-primary mt-2" />
              )}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
    </div>);
}

import React, { useState } from "react";""
import {Button} from "@/components/ui/button";""
import {useTheme} from "@/hooks/useTheme";""
import {Moon, Sun, Check} from "lucide-react";""
import {Card, CardContent} from "@/components/ui/card";"
interface Language {
  // TODO: Implement
}
  code: string;,
  name: string;
  flag: string;

const languages: Language[] = [;"
  { code: "en", name: "English", flag: "🇺🇸" },;""
  { code: "es", name: "Español", flag: "🇪🇸" },;""
  { code: "fr", name: "Français", flag: "🇫🇷" },;""
  { code: "de", name: "Deutsch", flag: "🇩🇪" },;"]"
  { code: "zh", name: "中文", flag: "🇨🇳" }],;"
export function LanguageThemeSelector() {;

  const { theme, setTheme } = useTheme();
"
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");"
</string>"
    <div className="space-y-8 px-4">"
</div>"
      <div className="space-y-2">"
        <h2 className="text-xl font-medium">Select your language</h2>""
        <p className="text-muted-foreground">Choose your preferred language</p>""
        <div className="grid grid-cols-2 gap-3 mt-4">"
</div>
            <Card;
              key={language.code}
              className={`cursor-pointer transition-all ${
                selectedLanguage === language.code;"
                  ? "border-primary bg-primary/5"""
                  : "border-border hover:border-primary/40""`;
              }`}
              onClick={() => setSelectedLanguage(language.code)}
              <CardContent className="p-3 flex items-center justify-between">"
                <div className="flex items-center">"
                  <span className="text-xl mr-2">{language.flag}</span>"
                  <span>{language.name}</span>
        <h2 className="text-xl font-medium">Choose theme</h2>""
        <p className="text-muted-foreground">"
</p>
        <div className="flex gap-3 mt-4">"
          <Card;`;
            className={`flex-1 cursor-pointer transition-all ${"
              theme === "light"""
                : "border-border hover:border-primary/40""
;"
      <div className="space-y-2">;"
        <h2 className="text-xl font-medium">Choose theme</h2>;""
        <p className="text-muted-foreground">Select your preferred appearance</p>;""
        <div className="flex gap-3 mt-4">;"
          <Card ;`;
            className={`flex-1 cursor-pointer transition-all ${;"
              theme === 'light' ;
                ? "border-primary bg-primary/5" ;""
                :"border-border hover:border-primary/40";"`;
            }`}"
            onClick={() => setTheme("light")}"
            <CardContent className="p-3 flex flex-col items-center justify-center">"
              <Sun className="h-8 w-8 mb-2" />"

              <span>Light</span>"
                <Check className="h-4 w-4 text-primary mt-2" />"


              theme === "dark"""
          ;
              theme === 'dark' ;
            onClick={() => setTheme("dark")}"
              <Moon className="h-8 w-8 mb-2" />"

              <span>Dark</span>"

  const [selected_language, setSelectedLanguage] = useState < string>("en");"
  return ("
    <div className="space - y-8 px - 4">;"
      <div className="space - y-2">;"
        <h2 className="text - xl font - medium">Select your language</h2>;""
        <p className="text - muted - foreground">Choose your preferred language</p>;""
        <div className="grid grid - cols - 2 gap - 3 mt - 4">;"
              key={language.code}`;
              className={`cursor - pointer transition - all ${
                selected_language === language.code;"
                  ? "border - primary bg - primary / 5";""
                  : "border - border hover:border - primary / 40";"`;
              }`})
              on_click={() => setSelectedLanguage (language.code)}
              <CardContent className="p - 3 flex items - center justify - between">;"
                <div className="flex items - center">;"
                  <span className="text - xl mr - 2">{language.flag}</span>;"
                  <span>{language.name}</span>;
                </div>;"
                  <Check className="h - 4 w - 4 text - primary" />)}"

            ))}
        </div>;
        <h2 className="text - xl font - medium">Choose theme</h2>;""
        <p className="text - muted - foreground">Select your preferred appearance</p>;""
        <div className="flex gap - 3 mt - 4">;"
            className={`flex - 1 cursor - pointer transition - all ${"
              theme === 'light';
            on_click={() => set_theme ('light')}

            <CardContent className="p - 3 flex flex - col items - center justify - center">;"
              <Sun className="h - 8 w - 8 mb - 2" />;"

              <span > Light</span>;"
                <Check className="h - 4 w - 4 text - primary mt - 2" />)}"

              theme === 'dark';
            on_click={() => set_theme ('dark')}

              <Moon className="h - 8 w - 8 mb - 2" />;"

              <span > Dark</span>;"


    </div>);
                <Check className="h - 4 w - 4 text - primary mt - 2" />)}"
</Check>"
            <CardContent className="p-3 flex flex-col items-center justify-center">"
</CardContent>"
              <Moon className="h-8 w-8 mb-2" />"
</Moon>
              <span>Dark</span>"
                <Check className="h-4 w-4 text-primary mt-2" />"
</Check>

            </CardContent>
          </Card>
        </div>
      </div>
    </div>

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            </CardContent>;
          </Card>;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
    </div>;
  );
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======




}


=======

}
</div>);
}
    </div>);
    </div>);
    </div>);
            </CardContent>;
          </Card>;
        </div>;
      </div>;
    </div>;"
}const languages: Language[] = [ return (<div className="space-y-8 px-4" > <div className="space-y-2" > <h2 className="text-xl font-medium" >Select your language</h2> <p className="text-muted-foreground" >Choose your preferred language</p> <div className="grid grid-cols-2 gap-3 mt-4" > {"
</div>)
  languages.map ( (language) => (<Card language.code;
}className= {`;
  `cursor-pointer transition-all $ {)
  selectedLanguage === language.code) 
} ) ) "
}</div> </div> <div className="space-y-2" > <h2 className="text-xl font-medium" >Choose theme</h2> <p className="text-muted-foreground" >Select your preferred appearance</p> <div className="flex gap-3 mt-4" > <Card className= {"
  theme === 'light' > <CardContent className="p-3 flex flex-col items-center justify-center" > <Sun className="h-8 w-8 mb-2" /> <span>Light</span>)"

}  <Card className= {`;
  `flex-1 cursor-pointer transition-all $ {"
  theme === 'dark' > <CardContent className="p-3 flex flex-col items-center justify-center" > <Moon className="h-8 w-8 mb-2" /> <span>Dark</span>)"

}  </div> </div> </div>) 
    </div>);]"`;
pr-12325
</Card>
}</CardContent> </Card> </div> </div> </div>) 
    </div>;
  );
}
;
;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    </div>);
}
<<<<<<< HEAD
    </div>);
}
            </CardContent>;
          </Card>;
        </div>;
      </div>;
    </div>;
  ),;}
 interface Language {}
  code: string;
name: string;
flag: string "
}const languages: Language[] = [ return (<div className="space-y-8 px-4" > <div className="space-y-2" > <h2 className="text-xl font-medium" >Select your language</h2> <p className="text-muted-foreground" >Choose your preferred language</p> <div className="grid grid-cols-2 gap-3 mt-4" > {}
  languages.map ( (language) => (<Card language.code;
}className= {}`
  `cursor-pointer transition-all $ {}
  selectedLanguage === language.code) 
}</CardContent> </Card>) ) "
}</div> </div> <div className="space-y-2" > <h2 className="text-xl font-medium" >Choose theme</h2> <p className="text-muted-foreground" >Select your preferred appearance</p> <div className="flex gap-3 mt-4" > <Card className= {}`
  `flex-1 cursor-pointer transition-all $ {'"
  theme === 'light' > <CardContent className="p-3 flex flex-col items-center justify-center" > <Sun className="h-8 w-8 mb-2" /> <span>Light</span>) 
}</CardContent> </Card> <Card className= {}`
  `flex-1 cursor-pointer transition-all $ {'"
  theme === 'dark' > <CardContent className="p-3 flex flex-col items-center justify-center" > <Moon className="h-8 w-8 mb-2" /> <span>Dark</span>) 
}</CardContent> </Card> </div> </div> </div>) 
}
    </div>;
  );
}
;


;
    </div>);
}
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    </div>);
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    </div>);
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    </div>);]"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
