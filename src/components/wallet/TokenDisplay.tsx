<<<<<<< HEAD
import React from 'react'
import { BadgeDollarSign } from 'lucide-react'
<<<<<<< HEAD
import { useWallet } from "@/hooks/useWallet",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button";
import Skeleton from "@/components/ui/skeleton";
=======
import { useWallet } from '@/hooks/useWallet'
import {
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Skeleton from '@/components/ui/skeleton'
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
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
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export function TokenDisplay() {
  const { wallet, loading } = useWallet();
  return (
    <Card>
      <CardHeader className='flex flex-row items-center justify-between pb-2'>
        <div>
          <CardTitle className='text-xl'>ZION$ Balance</CardTitle>
          <CardDescription>Your current token balance</CardDescription>
        </div>
        <BadgeDollarSign className='h-6 w-6 text-primary' />
      </CardHeader>
      <CardContent>
        {loading ? (
          <Skeleton className='h-12 w-28' />
        ) : (
          <div className='flex flex-col gap-2'>
            <div className='flex items-end'>
              <span className='text-3xl font-bold'>{wallet?.balance |0}</span>
              <span className='ml-1 text-muted-foreground'>ZION$</span>
            </div>
            <p className='text-sm text-muted-foreground'>
              Use your tokens to boost visibility, access premium features, or
              convert to credits.
            </p>
            <div className='mt-2'>
<<<<<<< HEAD
              <Button variant='outline' size='sm'>                View Wallet            <div className="mt-2">
              <Button variant="outline" size="sm">
=======
              <Button variant='outline' size='sm'>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
                View Wallet
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
<<<<<<< HEAD
  )
}
=======
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
