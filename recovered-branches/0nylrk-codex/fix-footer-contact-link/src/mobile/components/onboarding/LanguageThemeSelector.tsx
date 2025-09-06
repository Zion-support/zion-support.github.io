







>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


interface Language {

  code: string
  name: string

  flag: string
}
const languages: Language[] = [





  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "zh", name: "中文", flag: "🇨🇳" }],





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> origin/feature/merge-conflicts-and-improvements




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





>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba



                  <Check className="h-4 w-4 text-primary" />
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                )}
              </CardContent>;
            </Card>;
          ))}

        </div>;
      </div>;

      <div className="space-y-2">;
        <h2 className="text-xl font-medium">Choose theme</h2>;
        <p className="text-muted-foreground">Select your preferred appearance</p>;

        <div className="flex gap-3 mt-4">;

          <Card
            className={`flex-1 cursor-pointer transition-all ${
              theme === 'light'
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/40"
            }`}
            onClick={() => setTheme('light')}
          >;
            <CardContent className="p-3 flex flex-col items-center justify-center">;
              <Sun className="h-8 w-8 mb-2" />;
              <span>Light</span>;
              {theme === 'light' && (;
                <Check className="h-4 w-4 text-primary mt-2" />;
              )}




>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee



          <Card



            className={`flex-1 cursor-pointer transition-all ${
              theme === 'dark'
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/40"
            }`}
            onClick={() => setTheme('dark')}
          >;
            <CardContent className="p-3 flex flex-col items-center justify-center">;
              <Moon className="h-8 w-8 mb-2" />;
              <span>Dark</span>;
              {theme === 'dark' && (;
                <Check className="h-4 w-4 text-primary mt-2" />;
              )}






>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


            </CardContent>;
          </Card>;
        </div>;
      </div>;








>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

}
;

