<<<<<<< HEAD
export function TokenDisplay() {;
  const { wallet, loading } = useWallet();
  return (
=======

import React from "react",;
import { BadgeDollarSign } from "lucide-react",;
import { useWallet } from "@/hooks/useWallet",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Skeleton } from "@/components/ui/skeleton",;
;
export function TokenDisplay() {;
  const { wallet, loading } = useWallet(),;
;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD
        ) : (;
=======
        ) :(;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          <div className="flex flex-col gap-2">;
            <div className="flex items-end">;
              <span className="text-3xl font-bold">{wallet?.balance || 0}</span>;
              <span className="ml-1 text-muted-foreground">ZION$</span>;
            </div>;
            <p className="text-sm text-muted-foreground">;
              Use your tokens to boost visibility, access premium features, or convert to credits.;
            </p>;
            <div className="mt-2">;
<<<<<<< HEAD
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
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <Button variant="outline" size="sm">;
                View Wallet;
              </Button>;
            </div>;
<<<<<<< HEAD
          </div>)}
      </CardContent>;
    </Card>);
}
=======
          </div>;
        )}
      </CardContent>;
    </Card>;
  ),;}
 export function TokenDisplay () {
  const {
  wallet, loading 
}= useWallet ();
flex flex-row items-center justify-between pb-2"> <div> <CardTitle className=" text-xl">ZION$ Balance</CardTitle> <CardDescription>Your current token balance</CardDescription> </div> <BadgeDollarSign className=" h-6 w-6 text-primary"/> </CardHeader> <CardContent>) : (<div className=" flex flex-col gap-2"> <div className=" flex items-end"> <span className=" text-3xl font-bold"> {
  wallet?.balance || 0 
}</span> <span className=" ml-1 text-muted-foreground">ZION$</span> </div> <p className=" text-sm text-muted-foreground"> Use your tokens to boost visibility, access premium features, or convert to credits. </p> <div className=" mt-2"> <Button variant=" outline"size=" sm" > View Wallet </Button> </div> </div>) 
}</CardContent> </Card>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
