<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD


export function LoadingContentSkeleton() {;

  return (
=======
import React from "react",
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
=======
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

          ))}
        </div>
        <Skeleton className="h-8 w-1/3 bg-zion-blue-light/20" />
        <div className="space-y-2">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-6 w-full bg-zion-blue-light/20" />
          ))}

<<<<<<< HEAD
    </Card>;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

=======
export function LoadingContentSkeleton() {;
<<<<<<< HEAD
  return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

  return (
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    <Card className="border border-zion-blue-light bg-zion-blue-dark overflow-hidden">;
      <CardHeader>;
        <Skeleton className="h-8 w-3/4 bg-zion-blue-light/20" />;
      </CardHeader>;
      <CardContent className="space-y-4">;
        <Skeleton className="h-32 w-full bg-zion-blue-light/20" />;
        <div className="flex flex-wrap gap-2">;
          {[...Array(5)].map((_, i) => (;
            <Skeleton key={i} className="h-6 w-16 bg-zion-blue-light/20" />;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          ))}
        </div>;
        <Skeleton className="h-8 w-1/3 bg-zion-blue-light/20" />;
        <div className="space-y-2">;
          {[...Array(3)].map((_, i) => (;
            <Skeleton key={i} className="h-6 w-full bg-zion-blue-light/20" />;
          ))}
<<<<<<< HEAD



          ))}
        </div>
        <Skeleton className="h-8 w-1/3 bg-zion-blue-light/20" />
        <div className="space-y-2">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-6 w-full bg-zion-blue-light/20" />
          ))}
        </div>
      </CardContent>
    </Card>
        </div>;
      </CardContent>;
    </Card>;
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
        </div>;
      </CardContent>;
    </Card>;
<<<<<<< HEAD
<<<<<<< HEAD




=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  );
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
}
<<<<<<< HEAD
=======
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
    </Card>;
  );
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
