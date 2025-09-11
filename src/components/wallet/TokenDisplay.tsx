<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react'
import { BadgeDollarSign } from 'lucide-react'


  const { wallet, loading } = useWallet();
export function TokenDisplay() {
  const { wallet, loading } = useWallet();
  const { wallet, loading } = useWallet()
const { wallet, loading } = useWallet();
  return (

import React from "react",
import { BadgeDollarSign } from 'lucide-react'
import { useWallet } from "@/hooks/useWallet",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import Skeleton from "@/components/ui/skeleton",
export function TokenDisplay() {
  const { wallet, loading } = useWallet(),

=======
const { wallet, loading } = useWallet();
  return (


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
const { wallet, loading } = useWallet();
  return (
export function TokenDisplay() {
  const { wallet, loading } = useWallet()
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className='flex flex-col gap-2'>
            <div className='flex items-end'>
              <span className='text-3xl font-bold'>{wallet?.balance |0}</span>
              <span className='ml-1 text-muted-foreground'>ZION$</span>
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className="flex flex-col gap-2">
            <div className="flex items-end">
              <span className="text-3xl font-bold">{wallet?.balance || 0}</span>
              <span className="ml-1 text-muted-foreground">ZION$</span>
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            </div>
            <p className="text-sm text-muted-foreground">
              Use your tokens to boost visibility, access premium features, or convert to credits.
            </p>
<<<<<<< HEAD
<<<<<<< HEAD
            <div className='mt-2'>
              <Button variant='outline' size='sm'>                View Wallet            <div className="mt-2">
ursor/fix-website-loading-errors-and-merge-6662
            <div className='mt-2'>
              <Button variant='outline' size='sm'>                View Wallet            <div className="mt-2">
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            <div className='mt-2'>
              <Button variant='outline' size='sm'>                View Wallet            <div className="mt-2">
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className="mt-2">


              <Button variant="outline" size="sm">
                View Wallet
              </Button>
            </div>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
        )}
      </CardContent>
    </Card>);
}


=======




>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
            <div className="mt-2">;
=======
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
          <Skeleton className='h - 12 w - 28' />) : (
          <div className='flex flex - col gap - 2'>;
            <div className='flex items - end'>;
              <span className='text - 3xl font - bold'>{wallet?.balance || 0}</span>;
              <span className='ml - 1 text - muted - foreground'>ZION$</span>;
            </div>;
            <p className='text - sm text - muted - foreground'>;
              Use your tokens to boost visibility, access premium features, or;
              convert to credits.;
            </p>;
            <div className='mt - 2'>;
              <Button variant='outline' size='sm'>                View Wallet            <div className="mt - 2">;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <Button variant="outline" size="sm">;
                View Wallet;
              </Button>;
            </div>;
<<<<<<< HEAD
          </div>;
        )}
      </CardContent>;
    </Card>;
  );

      </CardContent>;
    </Card>;
  );
};
};
}
;
=======



}
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======




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
          <Skeleton className='h - 12 w - 28' />) : (
          <div className='flex flex - col gap - 2'>;
            <div className='flex items - end'>;
              <span className='text - 3xl font - bold'>{wallet?.balance || 0}</span>;
              <span className='ml - 1 text - muted - foreground'>ZION$</span>;
            </div>;
            <p className='text - sm text - muted - foreground'>;
              Use your tokens to boost visibility, access premium features, or;
              convert to credits.;
            </p>;
            <div className='mt - 2'>;
              <Button variant='outline' size='sm'>                View Wallet            <div className="mt - 2">;

              <Button variant="outline" size="sm">;
                View Wallet;
              </Button>;
            </div>;



}
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
