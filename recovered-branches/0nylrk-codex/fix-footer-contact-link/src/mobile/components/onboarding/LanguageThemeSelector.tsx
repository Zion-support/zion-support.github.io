
import React, {_useState} from "react";

interface Language {_code: string;
  name: string;
  flag: string;}

const languages: Language[] = [
  {_code: "en", _name: "English", _flag: "🇺🇸"},
  {_code: "es", _name: "Español", _flag: "🇪🇸"},
  {_code: "fr", _name: "Français", _flag: "🇫🇷"},
  {_code: "de", _name: "Deutsch", _flag: "🇩🇪"},
  {_code: "zh", _name: "中文", _flag: "🇨🇳"}];

export function LanguageThemeSelector() {_const { theme, _setTheme} = useTheme();
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");

  return (_<div className="space-y-8 px-4">
      <div className="space-y-2">
        <h2 className="text-xl font-medium">Select your language</h2>
        <p className="text-muted-foreground">Choose your preferred language</p>
        
        <div className="grid grid-cols-2 gap-3 mt-4">
          {_languages.map((language) => (_<Card 
              key={language.code}
              className={_`cursor-pointer transition-all ${
                selectedLanguage === language.code 
                  ? "border-primary bg-primary/5" 
                  : "border-border hover:border-primary/40"}`}
              onClick={_() => setSelectedLanguage(language.code)}
            >
              <CardContent className="p-3 flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-xl mr-2">{_language.flag}</span>
                  <span>{_language.name}</span>
                </div>
                {_selectedLanguage === language.code && (
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
            className={_`flex-1 cursor-pointer transition-all ${
              theme === 'light' 
                ? "border-primary bg-primary/5" 
                : "border-border hover:border-primary/40"}`}
            onClick={_() => setTheme('light')}
          >
            <CardContent className="p-3 flex flex-col items-center justify-center">
              <Sun className="h-8 w-8 mb-2" />
              <span>Light</span>
              {_theme === 'light' && (
                <Check className="h-4 w-4 text-primary mt-2" />
              )}
            </CardContent>
          </Card>
          
          <Card 
            className={_`flex-1 cursor-pointer transition-all ${
              theme === 'dark' 
                ? "border-primary bg-primary/5" 
                : "border-border hover:border-primary/40"}`}
            onClick={_() => setTheme('dark')}
          >
            <CardContent className="p-3 flex flex-col items-center justify-center">
              <Moon className="h-8 w-8 mb-2" />
              <span>Dark</span>
              {_theme === 'dark' && (
                <Check className="h-4 w-4 text-primary mt-2" />
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
