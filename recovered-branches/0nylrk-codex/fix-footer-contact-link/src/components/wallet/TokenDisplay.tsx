
:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/TokenDisplay.tsx



export function TokenDisplay() {;



  const { wallet, loading } = useWallet();
import React from "react",
import { BadgeDollarSign } from "lucide-react",
import { useWallet } from "@/hooks/useWallet",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Skeleton } from "@/components/ui/skeleton",
export function TokenDisplay() {
  const { wallet, loading } = useWallet(),

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
          <div className="flex flex-col gap-2">
            <div className="flex items-end">
              <span className="text-3xl font-bold">{wallet?.balance |0}</span>
              <span className="ml-1 text-muted-foreground">ZION$</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Use your tokens to boost visibility, access premium features, or convert to credits.
            </p>
            <div className="mt-2">
              <Button variant="outline" size="sm">
                View Wallet
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
import React from "react",;
import { BadgeDollarSign } from "lucide-react",;
import { useWallet } from "@/hooks/useWallet",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Skeleton } from "@/components/ui/skeleton",;
export function TokenDisplay() {;
  const { wallet, loading } = useWallet();
  return (;

    <Card>;
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
            </p>;
            <div className="mt-2">;
=======
:recovered - branches / 0nylrk - codex / fix - footer - contact - link / src / components / wallet / TokenDisplay.tsx;
import React from './react';
import { BadgeDollarSign } from './lucide-react';
import { use_wallet } from '@/hooks / use_wallet';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { Skeleton } from '@/components / ui / skeleton';
export /**
 * TokenDisplay - Function description
 */
function TokenDisplay() {
  const { wallet, loading } = use_wallet ();
;
  return (
    <Card>;
      <CardHeader className="flex flex - row items - center justify - between pb - 2">;
        <div>;
          <CardTitle className="text - xl">ZION$ Balance</CardTitle>;
          <CardDescription > Your current token balance</CardDescription>;
        </div>;
        <BadgeDollarSign className="h - 6 w - 6 text - primary" />;
      </CardHeader>;
      <CardContent>;
        {loading ? (
          <Skeleton className="h - 12 w - 28" />) : (
          <div className="flex flex - col gap - 2">;
            <div className="flex items - end">;
              <span className="text - 3xl font - bold">{wallet?.balance || 0}</span>;
              <span className="ml - 1 text - muted - foreground">ZION$</span>;
            </div>;
            <p className="text - sm text - muted - foreground">;
              Use your tokens to boost visibility, access premium features, or convert to credits.;
            </p>;
            <div className="mt - 2">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
              <Button variant="outline" size="sm">;
                View Wallet;
              </Button>;
            </div>;

          </div>)}
      </CardContent>;
    </Card>);

}
=======
}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
