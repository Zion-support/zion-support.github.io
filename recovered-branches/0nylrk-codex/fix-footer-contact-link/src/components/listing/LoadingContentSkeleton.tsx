
<<<<<<< HEAD
import React from "react",;
import { Skeleton } from "@/components/ui/skeleton",;
import { Card, CardContent, CardHeader } from "@/components/ui/card",;
;
export function LoadingContentSkeleton() {;
  return (;
    <Card className="border border-zion-blue-light bg-zion-blue-dark overflow-hidden">;
      <CardHeader>;
        <Skeleton className="h-8 w-3/4 bg-zion-blue-light/20" />;
      </CardHeader>;
      <CardContent className="space-y-4">;
        <Skeleton className="h-32 w-full bg-zion-blue-light/20" />;
        <div className="flex flex-wrap gap-2">;
          {[...Array(5)].map((_, i) => (;
            <Skeleton key={i} className="h-6 w-16 bg-zion-blue-light/20" />;
          ))}
        </div>;
        <Skeleton className="h-8 w-1/3 bg-zion-blue-light/20" />;
        <div className="space-y-2">;
          {[...Array(3)].map((_, i) => (;
            <Skeleton key={i} className="h-6 w-full bg-zion-blue-light/20" />;
          ))}
        </div>;
      </CardContent>;
    </Card>;
  ),;
=======
import React from "react",
import { Skeleton } from "@/components/ui/skeleton",
import { Card, CardContent, CardHeader } from "@/components/ui/card",
export function LoadingContentSkeleton() {
  return (
    <Card className=&quot;border border-zion-blue-light bg-zion-blue-dark overflow-hidden&quot;>
import React from "react";

export function LoadingContentSkeleton() {_return (
    <Card className="border border-zion-blue-light bg-zion-blue-dark overflow-hidden">
      <CardHeader>
        <Skeleton className=&quot;h-8 w-3/4 bg-zion-blue-light/20&quot; />
      </CardHeader>
      <CardContent className=&quot;space-y-4&quot;>
        <Skeleton className=&quot;h-32 w-full bg-zion-blue-light/20&quot; />
        <div className=&quot;flex flex-wrap gap-2&quot;>
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className=&quot;h-6 w-16 bg-zion-blue-light/20&quot; />
          ))}
        </div>
        <Skeleton className=&quot;h-8 w-1/3 bg-zion-blue-light/20&quot; />
        <div className=&quot;space-y-2&quot;>
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className=&quot;h-6 w-full bg-zion-blue-light/20&quot; />          ))}
        </div>
      </CardContent>
    </Card>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
