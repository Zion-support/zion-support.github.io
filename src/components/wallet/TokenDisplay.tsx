

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
            </div>
            <p className='text-sm text-muted-foreground'>
              Use your tokens to boost visibility, access premium features, or
              convert to credits.
            </p>
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
import { BadgeDollarSign } from 'lucide-react';
import { useWallet } from "@/hooks/useWallet",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import Skeleton from "@/components/ui/skeleton",;
export function TokenDisplay() {;
  const { wallet, loading } = useWallet();
  return (;
    <Card>;
              <Button variant="outline" size="sm">;
                View Wallet;
              </Button>;
            </div>;
