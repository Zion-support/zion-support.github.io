<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/TokenDisplay.tsx

:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/TokenDisplay.tsx

<<<<<<< HEAD
========
<<<<<<< HEAD
export function TokenDisplay() {;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/TokenDisplay.tsx
  const { wallet, loading } = useWallet();

=======
:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/TokenDisplay.tsx

<<<<<<< HEAD
import React from "react";
import {BadgeDollarSign} from "lucide-react";
import {useWallet} from "@/hooks/useWallet";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Skeleton} from "@/components/ui/skeleton";
<<<<<<< HEAD

export function TokenDisplay() {
=======
export function TokenDisplay() {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const { wallet, loading } = useWallet();
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from "react",
import { BadgeDollarSign } from "lucide-react",
import { useWallet } from "@/hooks/useWallet",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Skeleton } from "@/components/ui/skeleton",
export function TokenDisplay() {
  const { wallet, loading } = useWallet(),
<<<<<<< HEAD

  return (
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/TokenDisplay.tsx
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======


export function TokenDisplay() {;



  const { wallet, loading } = useWallet();
  return (

=======

========
=======

>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/TokenDisplay.tsx
=======
<<<<<<< HEAD
        )}
      </CardContent>
    </Card>
  )
}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from "react",;
import { BadgeDollarSign } from "lucide-react",;
import { useWallet } from "@/hooks/useWallet",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Skeleton } from "@/components/ui/skeleton",;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/TokenDisplay.tsx
export function TokenDisplay() {;
  const { wallet, loading } = useWallet();
  return (;

========
;
export function TokenDisplay() {;
  const { wallet, loading } = useWallet(),;
;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/TokenDisplay.tsx
=======
export function TokenDisplay() {;
  const { wallet, loading } = useWallet();
  return (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
        ) : (;
=======
        ) :(;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
        ) : (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <Button variant="outline" size="sm">;
                View Wallet;
              </Button>;
            </div>;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/TokenDisplay.tsx

          </div>)}
      </CardContent>;
    </Card>);

}
=======
}
;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
<<<<<<< HEAD
          </div>)}
      </CardContent>;
    </Card>);
}
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </div>;
        )}
      </CardContent>;
    </Card>;
<<<<<<< HEAD
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/TokenDisplay.tsx
=======
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
