
<<<<<<< HEAD
import React from "react",
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
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
<<<<<<< HEAD
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
export function LoadingContentSkeleton() {;

  return (
    <Card className="border border-zion-blue-light bg-zion-blue-dark overflow-hidden">;
      <CardHeader>;
        <Skeleton className="h-8 w-3/4 bg-zion-blue-light/20" />;
      </CardHeader>;
      <CardContent className="space-y-4">;
        <Skeleton className="h-32 w-full bg-zion-blue-light/20" />;
        <div className="flex flex-wrap gap-2">;
          {[...Array(5)].map((_, i) => (;
            <Skeleton key={i} className="h-6 w-16 bg-zion-blue-light/20" />;
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          ))}
        </div>;
        <Skeleton className="h-8 w-1/3 bg-zion-blue-light/20" />;
        <div className="space-y-2">;
          {[...Array(3)].map((_, i) => (;
            <Skeleton key={i} className="h-6 w-full bg-zion-blue-light/20" />;
          ))}



<<<<<<< HEAD
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
          ))}
        </div>
        <Skeleton className="h-8 w-1/3 bg-zion-blue-light/20" />
        <div className="space-y-2">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-6 w-full bg-zion-blue-light/20" />
          ))}
        </div>
      </CardContent>
<<<<<<< HEAD
<<<<<<< HEAD
    </Card>
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
    </Card>
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
        </div>;
      </CardContent>;
    </Card>;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
=======

        </div>;
      </CardContent>;
    </Card>;




>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
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