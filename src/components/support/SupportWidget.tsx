

                Zion Support
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <Button

                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={() => router.push('/help')}
                aria-label="Help center"
              >
                <Info className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={() => setIsOpen(false)}
                aria-label="Close support"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <ChatBotPanel />
        </div>
      )}
    </>;
  );

