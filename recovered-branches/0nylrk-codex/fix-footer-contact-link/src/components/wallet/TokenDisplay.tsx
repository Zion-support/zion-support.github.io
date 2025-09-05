
import React from "react",
import { BadgeDollarSign } from "lucide-react",
import { useWallet } from "@/hooks/useWallet",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Skeleton } from "@/components/ui/skeleton",export function TokenDisplay() {
  const { wallet, loading } = useWallet(),
import React from "react";

export function TokenDisplay() {_const { wallet, _loading} = useWallet();

  return (
    <Card>
      <CardHeader className=&quot;flex flex-row items-center justify-between pb-2&quot;>
        <div>
          <CardTitle className=&quot;text-xl&quot;>ZION$ Balance</CardTitle>
          <CardDescription>Your current token balance</CardDescription>
        </div>
        <BadgeDollarSign className=&quot;h-6 w-6 text-primary&quot; />
      </CardHeader>
      <CardContent>
        {loading ? (
          <Skeleton className=&quot;h-12 w-28&quot; />        ) : (
          <div className=&quot;flex flex-col gap-2&quot;>
            <div className=&quot;flex items-end&quot;>
              <span className=&quot;text-3xl font-bold&quot;>{wallet?.balance || 0}</span>
              <span className=&quot;ml-1 text-muted-foreground&quot;>ZION$</span>
            </div>
            <p className=&quot;text-sm text-muted-foreground&quot;>
              Use your tokens to boost visibility, access premium features, or convert to credits.
            </p>
            <div className=&quot;mt-2&quot;>
              <Button variant=&quot;outline&quot; size=&quot;sm&quot;>
                View Wallet
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
