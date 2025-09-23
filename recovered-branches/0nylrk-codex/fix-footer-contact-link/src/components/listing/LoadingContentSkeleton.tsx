
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
<<<<<<< HEAD
import { Card, CardContent, CardHeader } from "@/components/ui/card";
=======
import { CardContentCardHeader } from "@/components/ui/card";
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

export function LoadingContentSkeleton() {
  return (
    <Card className="border border-zion-blue-light bg-zion-blue-dark overflow-hidden">
      <CardHeader>
        <Skeleton className="h-8 w-3/4 bg-zion-blue-light/20" />
      </CardHeader>
      <CardContent className="space-y-4">
        <Skeleton className="h-32 w-full bg-zion-blue-light/20" />
        <div className="flex flex-wrap gap-2">
<<<<<<< HEAD
          {[...Array(5)].map((_, i) => (
=======
          {[...Array(5)].map((_i) => (
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
            <Skeleton key={i} className="h-6 w-16 bg-zion-blue-light/20" />
          ))}
        </div>
        <Skeleton className="h-8 w-1/3 bg-zion-blue-light/20" />
        <div className="space-y-2">
<<<<<<< HEAD
          {[...Array(3)].map((_, i) => (
=======
          {[...Array(3)].map((_i) => (
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
            <Skeleton key={i} className="h-6 w-full bg-zion-blue-light/20" />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
