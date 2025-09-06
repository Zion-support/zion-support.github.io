import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import React from "react",
import { Skeleton } from "@/components/ui/skeleton",
import { Card, CardContent, CardHeader } from "@/components/ui/card",

          ))}
        </div>
        <Skeleton className="h-8 w-1/3 bg-zion-blue-light/20" />
        <div className="space-y-2">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-6 w-full bg-zion-blue-light/20" />
          ))}
        </div>;
      </CardContent>;
    </Card>;
  );
}
;