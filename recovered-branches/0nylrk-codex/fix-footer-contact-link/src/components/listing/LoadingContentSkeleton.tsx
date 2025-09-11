
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
export function LoadingContentSkeleton() {
  return (
    <Card className="border border-zion-blue-light bg-zion-blue-dark overflow-hidden">
      <CardHeader>
        <Skeleton className="h-8 w-3/4 bg-zion-blue-light/20" />
      </CardHeader>
      <CardContent className="space-y-4">
        <Skeleton className="h-32 w-full bg-zion-blue-light/20" />
        <div className="flex flex-wrap gap-2">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="h-6 w-16 bg-zion-blue-light/20" />
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import React from "react",;
import { Skeleton } from "@/components/ui/skeleton",;
import { Card, CardContent, CardHeader } from "@/components/ui/card",;
;
export function LoadingContentSkeleton() {;
  return (;
=======


export function LoadingContentSkeleton() {;

  return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <Card className="border border-zion-blue-light bg-zion-blue-dark overflow-hidden">;
      <CardHeader>;
        <Skeleton className="h-8 w-3/4 bg-zion-blue-light/20" />;
      </CardHeader>;
      <CardContent className="space-y-4">;
        <Skeleton className="h-32 w-full bg-zion-blue-light/20" />;
        <div className="flex flex-wrap gap-2">;
          {[...Array(5)].map((_, i) => (;
            <Skeleton key={i} className="h-6 w-16 bg-zion-blue-light/20" />;
<<<<<<< HEAD

=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          ))}
        </div>;
        <Skeleton className="h-8 w-1/3 bg-zion-blue-light/20" />;
        <div className="space-y-2">;
          {[...Array(3)].map((_, i) => (;
            <Skeleton key={i} className="h-6 w-full bg-zion-blue-light/20" />;
          ))}



<<<<<<< HEAD
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
  ),;}
 export function LoadingContentSkeleton () {
  return (<Card className="border border-zion-blue-light bg-zion-blue-dark overflow-hidden" > h-8 w-3/4 bg-zion-blue-light/20" /> </CardHeader>) ) 
}</div> </CardContent> </Card>) 
}
        </div>
      </CardContent>
    </Card>
        </div>;
      </CardContent>;
<<<<<<< HEAD
    </Card>;
  );
}
=======
    </Card>);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======

        </div>;
      </CardContent>;
    </Card>;




  );
=======
import React from './react';
import { Skeleton  } from '@/components / ui / skeleton';
import { Card, CardContent, CardHeader  } from '@/components / ui / card';
export /**
 * LoadingContentSkeleton - Function description
 */
function LoadingContentSkeleton() {
  return (
    <Card className="border border - zion - blue - light bg - zion - blue - dark overflow - hidden">;
      <CardHeader>;
        <Skeleton className="h - 8 w - 3/4 bg - zion - blue - light / 20" />;
      </CardHeader>;
      <CardContent className="space - y-4">;
        <Skeleton className="h - 32 w - full bg - zion - blue - light / 20" />;
        <div className="flex flex - wrap gap - 2">;
          {[...Array (5)].map ((_, i) => (
            <Skeleton key={i} className="h - 6 w - 16 bg - zion - blue - light / 20" />))}
        </div>;
        <Skeleton className="h - 8 w - 1/3 bg - zion - blue - light / 20" />;
        <div className="space - y-2">;
          {[...Array (3)].map ((_, i) => (
            <Skeleton key={i} className="h - 6 w - full bg - zion - blue - light / 20" />))}
        </div>;
      </CardContent>;
    </Card>);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
