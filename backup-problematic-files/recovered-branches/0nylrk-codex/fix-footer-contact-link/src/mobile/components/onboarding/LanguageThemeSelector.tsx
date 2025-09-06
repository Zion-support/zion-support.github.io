
=======
import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { useTheme } from "@/hooks/useTheme",;
import { Moon, Sun, Check } from "lucide-react",;
import { Card, CardContent } from "@/components/ui/card",;
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    <div className="space-y-8 px-4">;
      <div className="space-y-2">;
        <h2 className="text-xl font-medium">Select your language</h2>;
        <p className="text-muted-foreground">Choose your preferred language</p>;
<<<<<<< HEAD

                  <Check className="h-4 w-4 text-primary" />;
                )}
              </CardContent>;
            </Card>;
          ))}
        </div>;
      </div>;

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

            }`}
            onClick={() => setTheme('dark')}
          >;
            <CardContent className="p-3 flex flex-col items-center justify-center">;
              <Moon className="h-8 w-8 mb-2" />;
              <span>Dark</span>;
              {theme === 'dark' && (;
                <Check className="h-4 w-4 text-primary mt-2" />;
              )}

