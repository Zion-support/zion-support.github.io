
import React, { useState } from "react";
import {Button} from "@/components/ui/button";
import {useTheme} from "@/hooks/useTheme";
import {Moon, Sun, Check} from "lucide-react";
import {Card, CardContent} from "@/components/ui/card";
interface Language {
  code: string;
  name: string;
  flag: string;
}


  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "zh", name: "中文", flag: "🇨🇳" }
];




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


            </CardContent>;
          </Card>;
        </div>;
      </div>;






}




