
import React from &quot;react&quot;;
import { Skeleton } from &quot;@/components/ui/skeleton&quot;;
import { Card, CardContent, CardHeader } from &quot;@/components/ui/card&quot;;

export function LoadingContentSkeleton() {
  return (
    <Card className=&quot;border border-zion-blue-light bg-zion-blue-dark overflow-hidden&quot;>
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
            <Skeleton key={i} className=&quot;h-6 w-full bg-zion-blue-light/20&quot; />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
