import React from 'react'
import { BadgeDollarSign } from 'lucide-react'

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

export function TokenDisplay() {
<<<<<<< HEAD
import React from 'react';
import { BadgeDollarSign } from 'lucide-react';
import { useWallet } from '@/hooks/useWallet';
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardHeader,;
  CardTitle,;
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Skeleton from '@/components/ui/skeleton';
export function TokenDisplay() {;
  const { wallet, loading } = useWallet();
=======
<<<<<<< HEAD
  const { wallet, loading } = useWallet();
=======
  const { wallet, loading } = useWallet()
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
<<<<<<< HEAD
            <div className='mt-2'>
              <Button variant='outline' size='sm'>                View Wallet            <div className="mt-2">
=======


            <div className="mt-2">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
              <Button variant="outline" size="sm">
                View Wallet
              </Button>
            </div>
          </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
        )}
      </CardContent>
    </Card>
  )
}
<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    <Card>;
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
            <p className='text-sm text-muted-foreground'>;
              Use your tokens to boost visibility, access premium features, or;
              convert to credits.;
            </p>;
            <div className='mt-2'>;
              <Button variant='outline' size='sm'>                View Wallet            <div className="mt-2">;
              <Button variant="outline" size="sm">;
                View Wallet;
              </Button>;
            </div>;
          </div>;
        )}
      </CardContent>;
    </Card>;
  );
}
  );
}
          </div>)}
      </CardContent>;
    </Card>);
}
<<<<<<< HEAD
=======
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
