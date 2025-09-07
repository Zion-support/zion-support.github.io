<<<<<<< HEAD:src_backup/components/wallet/TokenDisplay.tsx
<<<<<<< HEAD:src/components/wallet/TokenDisplay.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
const { wallet, loading } = useWallet();
  return (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { BadgeDollarSign } from 'lucide-react'
import { useWallet } from "@/hooks/useWallet",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import Skeleton from "@/components/ui/skeleton",
export function TokenDisplay() {
  const { wallet, loading } = useWallet(),

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/wallet/TokenDisplay.tsx
=======


import React from "react",
import { BadgeDollarSign } from 'lucide-react'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/wallet/TokenDisplay.tsx
import { useWallet } from "@/hooks/useWallet",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import Skeleton from "@/components/ui/skeleton",
export function TokenDisplay() {
  const { wallet, loading } = useWallet(),

import { useWallet } from "@/hooks/useWallet",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button";
import Skeleton from "@/components/ui/skeleton";
import {
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Skeleton from '@/components/ui/skeleton'
export function TokenDisplay() {
  const { wallet, loading } = useWallet();
<<<<<<< HEAD:src_backup/components/wallet/TokenDisplay.tsx
<<<<<<< HEAD:src/components/wallet/TokenDisplay.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/wallet/TokenDisplay.tsx
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-xl">ZION$ Balance</CardTitle>
          <CardDescription>Your current token balance</CardDescription>
        </div>
        <BadgeDollarSign className="h-6 w-6 text-primary" />
      </CardHeader>
      <CardContent>
        {loading ? (
          <Skeleton className="h-12 w-28" />
        ) : (
<<<<<<< HEAD
=======

<<<<<<< HEAD

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          <div className="flex flex-col gap-2">
            <div className="flex items-end">
              <span className="text-3xl font-bold">{wallet?.balance || 0}</span>
              <span className="ml-1 text-muted-foreground">ZION$</span>

            </div>
            <p className="text-sm text-muted-foreground">
              Use your tokens to boost visibility, access premium features, or convert to credits.
            </p>
<<<<<<< HEAD:src/components/wallet/TokenDisplay.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <div className="mt-2">
=======
            <div className="mt-2">

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
            <div className="mt-2">

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              <Button variant="outline" size="sm">
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/wallet/TokenDisplay.tsx
            <div className='mt-2'>
              <Button variant='outline' size='sm'>
origin/cursor/automate-test-improve-and-merge-code-2533
                View Wallet
              </Button>
            </div>
          </div>
<<<<<<< HEAD:src/components/wallet/TokenDisplay.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import React from "react",;
import { BadgeDollarSign } from 'lucide-react';
import { useWallet } from "@/hooks/useWallet",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import Skeleton from "@/components/ui/skeleton",;
export function TokenDisplay() {;
  const { wallet, loading } = useWallet();
  return (;
    <Card>;
<<<<<<< HEAD
      <CardHeader className='flex flex-row items-center justify-between pb-2'>;
        <div>;
          <CardTitle className='text-xl'>ZION$ Balance</CardTitle>;
          <CardDescription>Your current token balance</CardDescription>;
        </div>;
        <BadgeDollarSign className='h-6 w-6 text-primary' />;
      </CardHeader>;
      <CardContent>;
        {loading ? (;
          <Skeleton className='h-12 w-28' />;
        ) : (;
          <div className='flex flex-col gap-2'>;
            <div className='flex items-end'>;
              <span className='text-3xl font-bold'>{wallet?.balance || 0}</span>;
              <span className='ml-1 text-muted-foreground'>ZION$</span>;
            </div>;
<<<<<<< HEAD
            <p className="text-sm text-muted-foreground">;
              Use your tokens to boost visibility, access premium features, or convert to credits.;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
      <CardHeader className="flex flex-row items-center justify-between pb-2">;
        <div>;
          <CardTitle className="text-xl">ZION$ Balance</CardTitle>;
          <CardDescription>Your current token balance</CardDescription>;
        </div>;
        <BadgeDollarSign className="h-6 w-6 text-primary" />;
      </CardHeader>;
      <CardContent>;
        {loading ? (;
          <Skeleton className="h-12 w-28" />;
        ) : (;
          <div className="flex flex-col gap-2">;
            <div className="flex items-end">;
              <span className="text-3xl font-bold">{wallet?.balance || 0}</span>;
              <span className="ml-1 text-muted-foreground">ZION$</span>;
            </div>;
            <p className="text-sm text-muted-foreground">;
              Use your tokens to boost visibility, access premium features, or convert to credits.;

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/wallet/TokenDisplay.tsx
            </p>;
            <div className="mt-2">;
              <Button variant="outline" size="sm">;
                View Wallet;
              </Button>;
=======
            <p className='text-sm text-muted-foreground'>;
              Use your tokens to boost visibility, access premium features, or;
              convert to credits.;            </p>;
            <div className='mt-2'>;
              <Button variant='outline' size='sm'>                View Wallet            <div className="mt-2">;

import React from 'react';
import { BadgeDollarSign } from 'lucide-react';
import { use_wallet } from '@/hooks / use_wallet';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import Skeleton from '@/components / ui / skeleton';
export /**
 * TokenDisplay - Function description
 */
function TokenDisplay() {
  const { wallet, loading } = use_wallet ();
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/wallet/TokenDisplay.tsx
  return (
    <Card>;
      <CardHeader className='flex flex - row items - center justify - between pb - 2'>;
        <div>;
          <CardTitle className='text - xl'>ZION$ Balance</CardTitle>;
          <CardDescription > Your current token balance</CardDescription>;
        </div>;
        <BadgeDollarSign className='h - 6 w - 6 text - primary' />;
      </CardHeader>;
      <CardContent>;
        {loading ? (
          <Skeleton className='h - 12 w - 28' />) : ('
          <Skeleton className='h - 12 w - 28' />) : (
    <Card>

      <CardHeader className="flex flex-row items-center justify-between pb-2">"

        <div>
</div>"
          <CardTitle className="text-xl">ZION$ Balance"
          <CardDescription>Your current token balance
        <BadgeDollarSign className="h-6 w-6 text-primary" />"

      <CardContent>
"
          <Skeleton className="h-12 w-28" />"
          <div className="flex flex-col gap-2">"
            <div className="flex items-end">"
              <span className="text-3xl font-bold">{wallet?.balance || 0}</span>""
              <span className="ml-1 text-muted-foreground">ZION$</span>"
            <p className="text-sm text-muted-foreground">"
</p>

            <div className="mt-2">"
              <Button variant="outline" size="sm">"

            </div>
    <Card>;
      <CardHeader className="flex flex-row items-center justify-between pb-2">;"

        <div>;
          <CardTitle className="text-xl">ZION$ Balance;"
          <CardDescription>Your current token balance;
        </div>;"
        <BadgeDollarSign className="h-6 w-6 text-primary" />;"

      ;
      <CardContent>;
          <Skeleton className="h-12 w-28" />;"
          <div className="flex flex-col gap-2">;"
            <div className="flex items-end">;"
              <span className="text-3xl font-bold">{wallet?.balance || 0}</span>;""
              <span className="ml-1 text-muted-foreground">ZION$</span>;"
            <p className="text-sm text-muted-foreground">;"
            </p>;"
            <div className='mt-2'>;
              <Button variant='outline' size='sm'>                View Wallet            <div className="mt-2">;"

      <CardHeader className='flex flex - row items - center justify - between pb - 2'>;

          <CardTitle className='text - xl'>ZION$ Balance;
          <CardDescription > Your current token balance;
        </div>;
        <BadgeDollarSign className='h - 6 w - 6 text - primary' />;

)
          <Skeleton className='h - 12 w - 28' />) : (

pr-12325
          <div className='flex flex - col gap - 2'>;
            <div className='flex items - end'>;
              <span className='text - 3xl font - bold'>{wallet?.balance || 0}</span>;
              <span className='ml - 1 text - muted - foreground'>ZION$</span>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            </div>;
<<<<<<< HEAD
          </div>;
        )}
      </CardContent>;
    </Card>;
  );
=======
            <p className='text - sm text - muted - foreground'>;
              Use your tokens to boost visibility, access premium features, or;
              convert to credits.;
            </p>;
            <div className='mt - 2'>;
<<<<<<< HEAD:src_backup/components/wallet/TokenDisplay.tsx
              <Button variant='outline' size='sm'>                View Wallet            <div className="mt-2">;

=======
              <Button variant='outline' size='sm'>                View Wallet            <div className="mt - 2">;
            <div className="mt-2">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/wallet/TokenDisplay.tsx
              <Button variant="outline" size="sm">;
                View Wallet;
              </Button>;
            </div>;
<<<<<<< HEAD:src_backup/components/wallet/TokenDisplay.tsx

<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
}
;
}}}})))))))
          </div>;
        )}
      </CardContent>;
    </Card>;
  );
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/wallet/TokenDisplay.tsx
}
;
        )}
      </CardContent>
    </Card>
  );
}
origin/cursor/automate-test-improve-and-merge-code-2533
            <p className='text - sm text - muted - foreground'>;
            </p>;
            <div className='mt - 2'>;
              <Button variant='outline' size='sm'>                View Wallet            <div className="mt - 2">;"
              <Button variant="outline" size="sm">;"

            </div>;)"
pr-12325
