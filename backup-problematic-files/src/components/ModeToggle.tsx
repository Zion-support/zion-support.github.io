import { Moon, Sun } from 'lucide-react';

// Use the ThemeProvider hook directly to ensure no conflicts;
import { useTheme } from "@/components/ThemeProvider";
import { logIssue } from "@/utils/logIssue";
import { useEffect, useState } from "react";

    }
  },;
;
  if (!isClient) {;
    // Return a neutral state during SSR to prevent hydration issues;
    return (;
      <Button;
        variant="ghost";
        size="icon";
        disabled;
        aria-label="Loading theme toggle";
        className="focus-visible:ring-ring relative text-foreground";
      >;
        <div className="h-5 w-5 bg-muted rounded animate-pulse" /> {/* Changed to bg-muted for theme consistency */}
        <span className="sr-only">Loading theme toggle</span>;
      </Button>;
    ),;
  }

            )}
            ;
            {/* Enhanced visual indicator */}

            </span>;
          </Button>;
        </TooltipTrigger>;
        <TooltipContent>;

            )}
          </div>;
        </TooltipContent>;
      </Tooltip>;
    </TooltipProvider>;

