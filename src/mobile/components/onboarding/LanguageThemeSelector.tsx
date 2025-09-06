                )}
              </CardContent>;
            </Card>;
          ))}
          <Card
              theme === 'light'
                ? 'border-primary bg-primary/5'
                : 'border-border hover:border-primary/40'
            }`}
            onClick = {() => setTheme('light'),}
          >;
            <CardContent className='p-3 flex flex-col items-center justify-center'>;
              <Sun className='h-8 w-8 mb-2' />;
              <span>Light</span>;
              {theme === 'light' && (;
                <Check className='h-4 w-4 text-primary mt-2' />;
              )}

            </CardContent>;
          </Card>;

          <Card
            className={`flex-1 cursor-pointer transition-all ${
              theme === 'dark'
                ? 'border-primary bg-primary/5'
                : 'border-border hover:border-primary/40'
            }`}
            onClick = {() => setTheme('dark'),}
