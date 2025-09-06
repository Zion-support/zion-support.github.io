<<<<<<< HEAD
const { wallet, loading } = useWallet();
  return (
<<<<<<< HEAD
=======
export function TokenDisplay() {
<<<<<<< HEAD
  const { wallet, loading } = useWallet();
=======
  const { wallet, loading } = useWallet()
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f

import React from "react",
import { BadgeDollarSign } from 'lucide-react'
import { useWallet } from "@/hooks/useWallet",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import Skeleton from "@/components/ui/skeleton",
export function TokenDisplay() {
  const { wallet, loading } = useWallet(),

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
          <div className='flex flex-col gap-2'>
            <div className='flex items-end'>
              <span className='text-3xl font-bold'>{wallet?.balance |0}</span>
              <span className='ml-1 text-muted-foreground'>ZION$</span>
          <div className="flex flex-col gap-2">
            <div className="flex items-end">
              <span className="text-3xl font-bold">{wallet?.balance || 0}</span>
              <span className="ml-1 text-muted-foreground">ZION$</span>
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
            </div>
            <p className="text-sm text-muted-foreground">
              Use your tokens to boost visibility, access premium features, or convert to credits.
            </p>
<<<<<<< HEAD
            <div className='mt-2'>
              <Button variant='outline' size='sm'>                View Wallet            <div className="mt-2">
            <div className="mt-2">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
              <Button variant="outline" size="sm">
                View Wallet
              </Button>
            </div>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee




=======
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
              <Button variant="outline" size="sm">;
                View Wallet;
              </Button>;
            </div>;
          </div>;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
        )}
      </CardContent>;
    </Card>;
  );
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
