
=======
import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { ChatBotPanel } from "./ChatBotPanel",;
import { MessageSquare, Info, X } from "lucide-react",;
import { cn } from "@/lib/utils",;
import { useTheme } from "@/hooks/useTheme",;
;
export function SupportWidget() {;
  const [isOpen, setIsOpen] = useState(false),;
  const { theme } = useTheme(),;
  ;
  return (;
    <>;
      {/* Fixed button in the bottom right */}
      {!isOpen && (;
        <Button;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
<<<<<<< HEAD

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

