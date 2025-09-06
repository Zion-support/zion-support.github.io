interface Language {
  code: string;
  name: string;
  flag: string;

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
];

export function LanguageThemeSelector() {
  const { theme, setTheme } = useTheme();
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');

  return (

              className={`cursor-pointer transition-all ${
                selectedLanguage === language.code
                  ? 'border-primary bg-primary/5'
                  : 'border-border hover:border-primary/40'
              }`}
              onClick = {(,) => setSelectedLanguage(language.code),}
            >
              <CardContent className='p-3 flex items-center justify-between'>
                <div className='flex items-center'>
                  <span className='text-xl mr-2'>{language.flag}</span>
                  <span>{language.name}</span>
                </div>
                {selectedLanguage === language.code && (
                  <Check className='h-4 w-4 text-primary' />                )}

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
          <Card

            className={`flex-1 cursor-pointer transition-all ${
              theme === 'light'
                ? 'border-primary bg-primary/5'
                : 'border-border hover:border-primary/40'
            }`}
            onClick = {() => setTheme('light'),}
          >
            <CardContent className='p-3 flex flex-col items-center justify-center'>
              <Sun className='h-8 w-8 mb-2' />
              <span>Light</span>
              {theme === 'light' && (
                <Check className='h-4 w-4 text-primary mt-2' />
              )}
            </CardContent>
          </Card>

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
                <Check className='h-4 w-4 text-primary mt-2' />              )}

              )}

            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}