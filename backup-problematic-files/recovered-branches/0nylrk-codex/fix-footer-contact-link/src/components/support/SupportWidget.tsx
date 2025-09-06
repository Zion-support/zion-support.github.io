
          onClick={() => setIsOpen(true)}
          size="icon";
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-zion-purple hover:bg-zion-purple-light text-white z-50";
          aria-label="Open support";
        >;
          <MessageSquare className="h-6 w-6" />;
        </Button>;
      )}
      ;
      {/* Support panel */}
      {isOpen && (;

                Zion Support;
              </h3>;
            </div>;
            <div className="flex items-center gap-2">;

                aria-label="Help center";
              >;
                <Info className="h-5 w-5" />;
              </Button>;

                onClick={() => setIsOpen(false)}
                aria-label="Close support";
              >;
                <X className="h-5 w-5" />;
              </Button>;
            </div>;
          </div>;

          <ChatBotPanel />;
        </div>;
      )}
    </>;

