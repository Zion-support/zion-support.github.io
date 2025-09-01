import React from 'react';
import Link from 'next/link';
import { MessageSquare  } from 'lucide-react';
export default function Page() {
>{cta}</Link>
              </Button>
            ) : (
              <Button disabled>{cta}</Button>
            )}
          </TooltipTrigger>
          {!hasSession && <TooltipContent>Login required</TooltipContent>}
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
export default EmptyState;
'"