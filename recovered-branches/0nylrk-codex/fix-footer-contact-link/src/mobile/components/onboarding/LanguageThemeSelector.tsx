<<<<<<< HEAD


import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { useTheme } from "@/hooks/useTheme",
import { Moon, Sun, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
=======
import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { useTheme } from "@/hooks/useTheme",;
import { Moon, Sun, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Moon, Sun, Check } from "lucide-react",;
import { Card, CardContent } from "@/components/ui/card",;
>>>>>>> origin/main

interface Language {

  code: string
  name: string

  flag: string
}
const languages: Language[] = [  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
];

export function LanguageThemeSelector() {
  const { theme, setTheme } = useTheme();

<<<<<<< HEAD
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en"),

=======
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");
  const { theme, setTheme } = useTheme(),
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en"),
  const { theme, setTheme } = useTheme();

  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");
>>>>>>> origin/main

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
                )}
              </CardContent>;
            </Card>;
          ))}          <Card
            className={`flex-1 cursor-pointer transition-all ${
              theme === "light"
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/40"
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

          <Card            }`}
            onClick={() => setTheme("light")}
          >
            <CardContent className="p-3 flex flex-col items-center justify-center">
              <Sun className="h-8 w-8 mb-2" />
              <span>Light</span>
              {theme === "light" && (
                <Check className="h-4 w-4 text-primary mt-2" />
              )}
            </CardContent>
          </Card>

          <Card
            className={`flex-1 cursor-pointer transition-all ${
              theme === "dark"
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/40"
          <Card ;
            className={`flex-1 cursor-pointer transition-all ${;
              theme === 'dark' ;
                ? "border-primary bg-primary/5" ;
                :"border-border hover:border-primary/40";
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

            </CardContent>;
          </Card>;
        </div>;
      </div>;
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
    </div>);]"

