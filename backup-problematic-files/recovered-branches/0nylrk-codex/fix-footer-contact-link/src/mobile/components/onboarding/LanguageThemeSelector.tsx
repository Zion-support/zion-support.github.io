
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { useTheme } from "@/hooks/useTheme",;
import { Moon, Sun, Check } from "lucide-react",;
import { Card, CardContent } from "@/components/ui/card",;
=======
import React, { useState } from "react";""
import { Button } from "@/components/ui/button";""
import { useTheme } from "@/hooks/useTheme";""
import { Moon, Sun, Check } from "lucide-react";""
import { Card, CardContent } from "@/components/ui/card";"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
;
interface Language {;
  code: string;,;
  name: string;,;
  flag:string;
}
<<<<<<< HEAD
;
const languages:Language[] = [;
<<<<<<< HEAD
  { code:"en", name:"English", flag:"🇺🇸" },;
  { code:"es", name:"Español", flag:"🇪🇸" },;
  { code:"fr", name:"Français", flag:"🇫🇷" },;
  { code:"de", name:"Deutsch", flag:"🇩🇪" },;
  { code:"zh", name:"中文", flag:"🇨🇳" }],;
=======
  { code:"en", name:"English", flag:"" },;
  { code:"es", name:"Espaol", flag:"" },;
  { code:"fr", name:"Franais", flag:"" },;
  { code:"de", name:"Deutsch", flag:"" },;
  { code:"zh", name:"", flag:"" }],;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
;
export function LanguageThemeSelector() {;
  const { theme, setTheme } = useTheme(),;
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en"),;
;
  return (;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    <div className="space-y-8 px-4">;
      <div className="space-y-2">;
        <h2 className="text-xl font-medium">Select your language</h2>;
        <p className="text-muted-foreground">Choose your preferred language</p>;
<<<<<<< HEAD
<<<<<<< HEAD

=======
        ;
        <div className="grid grid-cols-2 gap-3 mt-4">;
          {languages.map((language) => (;
=======
const languages:Language[] = [;"
  { code: "en";, name: "English";, flag: "" ;},;""
  { code: "es";, name: "Espaol";, flag: "" ;},;""
  { code: "fr";, name: "Franais";, flag: "" ;},;""
  { code: "de";, name: "Deutsch";, flag: "" ;},;"]"
  { code: "zh";, name: "";, flag: "" ;}],;"
export function LanguageThemeSelector() {;
  const { theme, setTheme } = useTheme(),;"
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en"),;"
</string>"
    <div className="space-y-8 px-4">;"
</div>"
      <div className="space-y-2">;"
        <h2 className="text-xl font-medium">Select your language</h2>;""
        <p className="text-muted-foreground">Choose your preferred language</p>;""
        <div className="grid grid-cols-2 gap-3 mt-4">;"
</div>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            <Card ;
              key={language.code}
              className={`cursor-pointer transition-all ${;
                selectedLanguage === language.code ;"
                  ? "border-primary bg-primary/5" ;""
                  :"border-border hover:border-primary/40";"`;
              }`}
              onClick={() => setSelectedLanguage(language.code)}
"
              <CardContent className="p-3 flex items-center justify-between">;"
                <div className="flex items-center">;"
                  <span className="text-xl mr-2">{language.flag}</span>;"
                  <span>{language.name}</span>;
<<<<<<< HEAD
                </div>;
                {selectedLanguage === language.code && (;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                  <Check className="h-4 w-4 text-primary" />;
                )}
              </CardContent>;
            </Card>;
          ))}
        </div>;
      </div>;
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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

=======
          ;
          <Card ;
            className={`flex-1 cursor-pointer transition-all ${;
              theme === 'dark' ;
                ? "border-primary bg-primary/5" ;
                :"border-border hover:border-primary/40";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                </div>;"
                  <Check className="h-4 w-4 text-primary" />;"

        </div>;
        <h2 className="text-xl font-medium">Choose theme</h2>;""
        <p className="text-muted-foreground">Select your preferred appearance</p>;""
        <div className="flex gap-3 mt-4">;"
          <Card ;`;
            className={`flex-1 cursor-pointer transition-all ${;"
              theme === 'light' ;
            }`}"
            onClick={() => setTheme('light')}

            <CardContent className="p-3 flex flex-col items-center justify-center">;"
              <Sun className="h-8 w-8 mb-2" />;"

              <span>Light</span>;"
                <Check className="h-4 w-4 text-primary mt-2" />;"

              theme === 'dark' ;
            onClick={() => setTheme('dark')}

              <Moon className="h-8 w-8 mb-2" />;"

              <span>Dark</span>;"

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

}  </div> </div> </div>) ]"`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
