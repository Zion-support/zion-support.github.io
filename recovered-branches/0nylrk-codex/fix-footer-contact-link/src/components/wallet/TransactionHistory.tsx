
import React from "react";

export function TransactionHistory() {_const { transactions, _loading} = useWallet();

  if (loading) {_return (
      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
          <CardDescription>Loading transactions...</CardDescription>
        </CardHeader>
      </Card>
    );}

  const _earnTransactions = transactions.filter(tx => tx.transaction_type === 'earn');
  const _burnTransactions = transactions.filter(tx => tx.transaction_type === 'burn');

  return (
    <Card>
      <CardHeader>
        <CardTitle>Transaction History</CardTitle>
        <CardDescription>Your recent ZION$ activity</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="earned">
          <TabsList className="w-full">
            <TabsTrigger value="earned" className="flex-1">Earned</TabsTrigger>
            <TabsTrigger value="spent" className="flex-1">Spent</TabsTrigger>
          </TabsList>
          <TabsContent value="earned">
            <ScrollArea className="h-64">
              {_earnTransactions.length === 0 ? (
                <p className="text-center py-8 text-muted-foreground">No tokens earned yet</p>
              ) : (
                <div className="space-y-2 mt-2">
                  {earnTransactions.map(tx => (
                    <div key={tx.id} className="flex items-center justify-between py-2 border-b">
                      <div>
                        <p className="font-medium">{_tx.reason || "Token reward"}</p>
                        <p className="text-xs text-muted-foreground">
                          {_formatDistanceToNow(new Date(tx.created_at), _{ addSuffix: true})}
                        </p>
                      </div>
                      <Badge variant="outline" className="bg-green-100 text-green-800">
                        +{_tx.amount} ZION$
                      </Badge>
                    </div>
                  ))}
                </div>
              )}
            </ScrollArea>
          </TabsContent>
          <TabsContent value="spent">
            <ScrollArea className="h-64">
              {_burnTransactions.length === 0 ? (
                <p className="text-center py-8 text-muted-foreground">No tokens spent yet</p>
              ) : (
                <div className="space-y-2 mt-2">
                  {burnTransactions.map(tx => (
                    <div key={tx.id} className="flex items-center justify-between py-2 border-b">
                      <div>
                        <p className="font-medium">{_tx.reason || "Feature purchase"}</p>
                        <p className="text-xs text-muted-foreground">
                          {_formatDistanceToNow(new Date(tx.created_at), _{ addSuffix: true})}
                        </p>
                      </div>
                      <Badge variant="outline" className="bg-red-100 text-red-800">
                        -{_tx.amount} ZION$
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
