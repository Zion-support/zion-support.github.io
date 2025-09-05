
import React from &quot;react&quot;;
import { useWallet } from &quot;@/hooks/useWallet&quot;;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Tabs, TabsContent, TabsList, TabsTrigger } from &quot;@/components/ui/tabs&quot;;
import { ScrollArea } from &quot;@/components/ui/scroll-area&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { formatDistanceToNow } from &quot;date-fns&quot;;

export function TransactionHistory() {
  const { transactions, loading } = useWallet();

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
          <CardDescription>Loading transactions...</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  const earnTransactions = transactions.filter(tx => tx.transaction_type === 'earn');
  const burnTransactions = transactions.filter(tx => tx.transaction_type === 'burn');

  return (
    <Card>
      <CardHeader>
        <CardTitle>Transaction History</CardTitle>
        <CardDescription>Your recent ZION$ activity</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue=&quot;earned&quot;>
          <TabsList className=&quot;w-full&quot;>
            <TabsTrigger value=&quot;earned&quot; className=&quot;flex-1&quot;>Earned</TabsTrigger>
            <TabsTrigger value=&quot;spent&quot; className=&quot;flex-1&quot;>Spent</TabsTrigger>
          </TabsList>
          <TabsContent value=&quot;earned&quot;>
            <ScrollArea className=&quot;h-64&quot;>
              {earnTransactions.length === 0 ? (
                <p className=&quot;text-center py-8 text-muted-foreground&quot;>No tokens earned yet</p>
              ) : (
                <div className=&quot;space-y-2 mt-2&quot;>
                  {earnTransactions.map(tx => (
                    <div key={tx.id} className=&quot;flex items-center justify-between py-2 border-b&quot;>
                      <div>
                        <p className=&quot;font-medium&quot;>{tx.reason || &quot;Token reward&quot;}</p>
                        <p className=&quot;text-xs text-muted-foreground&quot;>
                          {formatDistanceToNow(new Date(tx.created_at), { addSuffix: true })}
                        </p>
                      </div>
                      <Badge variant=&quot;outline&quot; className=&quot;bg-green-100 text-green-800&quot;>
                        +{tx.amount} ZION$
                      </Badge>
                    </div>
                  ))}
                </div>
              )}
            </ScrollArea>
          </TabsContent>
          <TabsContent value=&quot;spent&quot;>
            <ScrollArea className=&quot;h-64&quot;>
              {burnTransactions.length === 0 ? (
                <p className=&quot;text-center py-8 text-muted-foreground&quot;>No tokens spent yet</p>
              ) : (
                <div className=&quot;space-y-2 mt-2&quot;>
                  {burnTransactions.map(tx => (
                    <div key={tx.id} className=&quot;flex items-center justify-between py-2 border-b&quot;>
                      <div>
                        <p className=&quot;font-medium&quot;>{tx.reason || &quot;Feature purchase&quot;}</p>
                        <p className=&quot;text-xs text-muted-foreground&quot;>
                          {formatDistanceToNow(new Date(tx.created_at), { addSuffix: true })}
                        </p>
                      </div>
                      <Badge variant=&quot;outline&quot; className=&quot;bg-red-100 text-red-800&quot;>
                        -{tx.amount} ZION$
                      </Badge>
                    </div>
                  ))}
                </div>
              )}
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
