



interface Language {




        <div className="grid grid-cols-2 gap-3 mt-4">


          {languages.map((language) => (
            <Card
              key={language.code}
              className={`cursor-pointer transition-all ${
                selectedLanguage === language.code
                  ? "border-primary bg-primary/5"






        <p className="text-muted-foreground">Select your preferred appearance</p>;
        ;
        <div className="flex gap-3 mt-4">;
          <Card ;
            className={`flex-1 cursor-pointer transition-all ${;
              theme === 'light' ;
                ? "border-primary bg-primary/5" ;
                :"border-border hover:border-primary/40";
            }`}
            </CardContent>;
          </Card>;





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


            }`}

            onClick={() => setTheme("dark")}
          >"
            <CardContent className="p-3 flex flex-col items-center justify-center">"
              <Moon className="h-8 w-8 mb-2" />
              <span>Dark</span>"
              {theme === "dark" && ("
                <Check className="h-4 w-4 text-primary mt-2" />
              )}
















