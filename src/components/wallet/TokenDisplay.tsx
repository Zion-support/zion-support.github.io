<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { BadgeDollarSign } from 'lucide-react';
import { useWallet } from '@/hooks/useWallet';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,;
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Skeleton from '@/components/ui/skeleton';
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

import React from "react";
import { BadgeDollarSign } from 'lucide-react'
import { useWallet } from "@/hooks/useWallet";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Skeleton from "@/components/ui/skeleton";
export function TokenDisplay() {
  const { wallet, loading } = useWallet();

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
              <span className="text-3xl font-bold">{wallet?.balance || 0}</span>
              <span className="ml-1 text-muted-foreground">ZION$</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Use your tokens to boost visibility, access premium features, or convert to credits.
            </p>
<<<<<<< HEAD
            <div className='mt-2'>
              <Button variant='outline' size='sm'>
=======

import React from "react";
import { BadgeDollarSign } from 'lucide-react'
import { useWallet } from "@/hooks/useWallet";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Skeleton from "@/components/ui/skeleton";

export function TokenDisplay() { const { wallet, loading  } = useWallet(),


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
              <span className="text-3xl font-bold">{wallet?.balance || 0}</span>
              <span className="ml-1 text-muted-foreground">ZION$</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Use your tokens to boost visibility, access premium features, or convert to credits.
            </p>
            <div className="mt-2">
              <Button variant="outline" size="sm">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <div className="mt-2">
              <Button variant="outline" size="sm">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                View Wallet
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
