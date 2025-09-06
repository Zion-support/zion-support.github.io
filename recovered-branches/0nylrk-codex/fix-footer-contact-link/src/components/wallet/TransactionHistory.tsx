<<<<<<< HEAD


import React from "react",
import { useWallet } from "@/hooks/useWallet",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { ScrollArea } from "@/components/ui/scroll-area",
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from "react";
import { useWallet } from "@/hooks/useWallet";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";
export function TransactionHistory() {
  const { transactions, loading } = useWallet();
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD
  if (loading) {;

=======


  if (loading) {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    return (
<<<<<<< HEAD
=======

  if (loading) {
    return (

import React from "react",;
import { useWallet } from "@/hooks/useWallet",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { ScrollArea } from "@/components/ui/scroll-area",;
import { Badge } from "@/components/ui/badge",;
import { formatDistanceToNow } from "date-fns",;
;
export function TransactionHistory() {;
  const { transactions, loading } = useWallet(),;
;
  if (loading) {;
    return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <Card>;
        <CardHeader>;
          <CardTitle>Transaction History</CardTitle>;
          <CardDescription>Loading transactions...</CardDescription>;
        </CardHeader>;
      </Card>;
<<<<<<< HEAD
    );
  }

  const earnTransactions = transactions && transactions.filter(tx => tx && tx.transaction_type === 'earn');
  const burnTransactions = transactions && transactions.filter(tx => tx && tx.transaction_type === 'burn');

  return (

=======

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from "react",
import { useWallet } from "@/hooks/useWallet",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { ScrollArea } from "@/components/ui/scroll-area",
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";
export function TransactionHistory() {
  const { transactions, loading } = useWallet();
import { Badge } from "@/components/ui/badge",
import { formatDistanceToNow } from "date-fns",
export function TransactionHistory() {
  const { transactions, loading } = useWallet(),
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

  if (loading) {;


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  if (loading) {
    return (
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
          <CardDescription>Loading transactions...</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  const earnTransactions = transactions.filter(
    (tx) => tx.transaction_type === "earn",
  );
  const burnTransactions = transactions.filter(
    (tx) => tx.transaction_type === "burn",
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Transaction History</CardTitle>
        <CardDescription>Your recent ZION$ activity</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="earned">
          <TabsList className="w-full">
            <TabsTrigger value="earned" className="flex-1">
              Earned
            </TabsTrigger>
            <TabsTrigger value="spent" className="flex-1">
              Spent
            </TabsTrigger>
          </TabsList>
          <TabsContent value="earned">
            <ScrollArea className="h-64">
              {earnTransactions.length === 0 ? (
                <p className="text-center py-8 text-muted-foreground">
                  No tokens earned yet
                </p>
              ) : (
                <div className="space-y-2 mt-2">
                  {earnTransactions.map((tx) => (
                    <div
                      key={tx.id}
                      className="flex items-center justify-between py-2 border-b"
                    >
                      <div>
                        <p className="font-medium">
                          {tx.reason || "Token reward"}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {formatDistanceToNow(new Date(tx.created_at), {
                            addSuffix: true,
                          })}
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className="bg-green-100 text-green-800"
                      >
                        +{tx.amount} ZION$
                      </Badge>
                    </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import React from "react",;
import { useWallet } from "@/hooks/useWallet",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { ScrollArea } from "@/components/ui/scroll-area",;
import { Badge } from "@/components/ui/badge",;
import { formatDistanceToNow } from "date-fns",;
export function TransactionHistory() {;
  const { transactions, loading } = useWallet(),;
  if (loading) {;
    return (;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      <Card>;
        <CardHeader>;
          <CardTitle>Transaction History</CardTitle>;
          <CardDescription>Loading transactions...</CardDescription>;
        </CardHeader>;
      </Card>;
    );
  }
<<<<<<< HEAD
;
  const earnTransactions = transactions.filter(tx => tx.transaction_type === 'earn');
  const burnTransactions = transactions.filter(tx => tx.transaction_type === 'burn');
  return (;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    <Card>;
      <CardHeader>;
        <CardTitle>Transaction History</CardTitle>;
        <CardDescription>Your recent ZION$ activity</CardDescription>;
      </CardHeader>;
      <CardContent>;
        <Tabs defaultValue="earned">;
          <TabsList className="w-full">;
            <TabsTrigger value="earned" className="flex-1">Earned</TabsTrigger>;
            <TabsTrigger value="spent" className="flex-1">Spent</TabsTrigger>;
          </TabsList>;
          <TabsContent value="earned">;
            <ScrollArea className="h-64">;
<<<<<<< HEAD
              {earnTransactions && earnTransactions.length === 0 ? (;
                <p className="text-center py-8 text-muted-foreground">No tokens earned yet</p>;
              ) : (;
                <div className="space-y-2 mt-2">;
                  {earnTransactions && earnTransactions.map(tx => (;
                    <div key={tx && tx.id} className="flex items-center justify-between py-2 border-b">;
                      <div>;
                        <p className="font-medium">{tx && tx.reason || "Token reward"}</p>;
                        <p className="text-xs text-muted-foreground">;
                          {formatDistanceToNow(new Date(tx && tx.created_at), { addSuffix: true })}
                        </p>;
                      </div>;
                      <Badge variant="outline" className="bg-green-100 text-green-800">;
                        +{tx && tx.amount} ZION$;
                      </Badge>;
                    </div>;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
                  ))}
                </div>;
              )}
            </ScrollArea>
          </TabsContent>
          <TabsContent value="spent">
            <ScrollArea className="h-64">
              {burnTransactions.length === 0 ? (
                <p className="text-center py-8 text-muted-foreground">
                  No tokens spent yet
                </p>
              ) : (
                <div className="space-y-2 mt-2">
                  {burnTransactions.map((tx) => (
                    <div
                      key={tx.id}
                      className="flex items-center justify-between py-2 border-b"
                    >
                      <div>
                        <p className="font-medium">
                          {tx.reason || "Feature purchase"}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {formatDistanceToNow(new Date(tx.created_at), {
                            addSuffix: true,
                          })}
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className="bg-red-100 text-red-800"
                      >
                        -{tx.amount} ZION$
                      </Badge>
                    </div>
                  ))}
                </div>;
              )}
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
<<<<<<< HEAD
  )

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

import React from "react",;
import { useWallet } from "@/hooks/useWallet",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { ScrollArea } from "@/components/ui/scroll-area",;
import { Badge } from "@/components/ui/badge",;
import { formatDistanceToNow } from "date-fns",;
export function TransactionHistory() {;
  const { transactions, loading } = useWallet(),;
  if (loading) {;
    return (;
      <Card>;
        <CardHeader>;
          <CardTitle>Transaction History</CardTitle>;
          <CardDescription>Loading transactions...</CardDescription>;
        </CardHeader>;
      </Card>;
    );
  }
;
  const earnTransactions = transactions.filter(tx => tx.transaction_type === 'earn');
  const burnTransactions = transactions.filter(tx => tx.transaction_type === 'burn');
  return (;

    <Card>;
      <CardHeader>;
        <CardTitle>Transaction History</CardTitle>;
        <CardDescription>Your recent ZION$ activity</CardDescription>;
      </CardHeader>;
      <CardContent>;
        <Tabs defaultValue="earned">;
          <TabsList className="w-full">;
            <TabsTrigger value="earned" className="flex-1">Earned</TabsTrigger>;
            <TabsTrigger value="spent" className="flex-1">Spent</TabsTrigger>;
          </TabsList>;
          <TabsContent value="earned">;
            <ScrollArea className="h-64">;
<<<<<<< HEAD
                  ))}
              {earnTransactions.length === 0 ? (;
                <p className="text-center py-8 text-muted-foreground">No tokens earned yet</p>;
              ) :(;
                <div className="space-y-2 mt-2">;
                  {earnTransactions.map(tx => (;
                    <div key={tx.id} className="flex items-center justify-between py-2 border-b">;
                      <div>;
                        <p className="font-medium">{tx.reason || "Token reward"}</p>;
                        <p className="text-xs text-muted-foreground">;
                          {formatDistanceToNow(new Date(tx.created_at), { addSuffix:true })}
                        </p>;
                      </div>;
                      <Badge variant="outline" className="bg-green-100 text-green-800">;
                        +{tx.amount} ZION$;
                      </Badge>;
                    </div>;                  ))}
                </div>;
              )}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            </ScrollArea>;
          </TabsContent>;
          <TabsContent value="spent">;
            <ScrollArea className="h-64">;
<<<<<<< HEAD
              {burnTransactions && burnTransactions.length === 0 ? (;
                <p className="text-center py-8 text-muted-foreground">No tokens spent yet</p>;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              ) : (;
                <div className="space-y-2 mt-2">;
                  {burnTransactions && burnTransactions.map(tx => (;
                    <div key={tx && tx.id} className="flex items-center justify-between py-2 border-b">;
                      <div>;
                        <p className="font-medium">{tx && tx.reason || "Feature purchase"}</p>;
                        <p className="text-xs text-muted-foreground">;
                          {formatDistanceToNow(new Date(tx && tx.created_at), { addSuffix: true })}
                        </p>;
                      </div>;
                      <Badge variant="outline" className="bg-red-100 text-red-800">;
                        -{tx && tx.amount} ZION$;
                      </Badge>;
                    </div>;
                  ))}
                </div>;
              )}
<<<<<<< HEAD

=======
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  ))}
                </div>
              )}
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import React from './react';
import { use_wallet } from '@/hooks / use_wallet';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
import { ScrollArea } from '@/components / ui / scroll - area';
import { Badge } from '@/components / ui / badge';
import { formatDistanceToNow } from './date - fns';
export /**
 * TransactionHistory - Function description
 */
function TransactionHistory() {
  const { transactions, loading } = use_wallet ();
;
  // Check condition
if ( {) {
  $2
=======
  );
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
}
    return (
      <Card>;
        <CardHeader>;
          <CardTitle > Transaction History</CardTitle>;
          <CardDescription > Loading transactions...</CardDescription>;
        </CardHeader>;
      </Card>);
  }
  const earn_transactions = transactions.filter (tx => tx.transaction_type === 'earn');
  const burn_transactions = transactions.filter (tx => tx.transaction_type === 'burn');
;
  return (
    <Card>;
      <CardHeader>;
        <CardTitle > Transaction History</CardTitle>;
        <CardDescription > Your recent ZION$ activity</CardDescription>;
      </CardHeader>;
      <CardContent>;
        <Tabs default_value="earned">;
          <TabsList className="w - full">;
            <TabsTrigger value="earned" className="flex - 1">Earned</TabsTrigger>;
            <TabsTrigger value="spent" className="flex - 1">Spent</TabsTrigger>;
          </TabsList>;
          <TabsContent value="earned">;
            <ScrollArea className="h - 64">;
              {earn_transactions.length === 0 ? (
                <p className="text - center py - 8 text - muted - foreground">No tokens earned yet</p>) : (
                <div className="space - y-2 mt - 2">;
                  {earn_transactions.map (tx => (
                    <div key={tx.id} className="flex items - center justify - between py - 2 border - b">;
                      <div>;
                        <p className="font - medium">{tx.reason || "Token reward"}</p>;
                        <p className="text - xs text - muted - foreground">;
                          {formatDistanceToNow (new Date (tx.created_at), { add_suffix: true })}
                        </p>;
                      </div>;
                      <Badge variant="outline" className="bg - green - 100 text - green - 800">;
                        +{tx.amount} ZION$;
                      </Badge>;
                    </div>))}
                </div>)}
            </ScrollArea>;
          </TabsContent>;
          <TabsContent value="spent">;
            <ScrollArea className="h - 64">;
              {burn_transactions.length === 0 ? (
                <p className="text - center py - 8 text - muted - foreground">No tokens spent yet</p>) : (
                <div className="space - y-2 mt - 2">;
                  {burn_transactions.map (tx => (
                    <div key={tx.id} className="flex items - center justify - between py - 2 border - b">;
                      <div>;
                        <p className="font - medium">{tx.reason || "Feature purchase"}</p>;
                        <p className="text - xs text - muted - foreground">;
                          {formatDistanceToNow (new Date (tx.created_at), { add_suffix: true })}
                        </p>;
                      </div>;
                      <Badge variant="outline" className="bg - red - 100 text - red - 800">;
                        -{tx.amount} ZION$;
                      </Badge>;
                    </div>))}
                </div>)}
<<<<<<< HEAD

=======
              {burnTransactions.length === 0 ? (;
                <p className="text-center py-8 text-muted-foreground">No tokens spent yet</p>;
              ) :(;
                <div className="space-y-2 mt-2">;
                  {burnTransactions.map(tx => (;
                    <div key={tx.id} className="flex items-center justify-between py-2 border-b">;
                      <div>;
                        <p className="font-medium">{tx.reason || "Feature purchase"}</p>;
                        <p className="text-xs text-muted-foreground">;
                          {formatDistanceToNow(new Date(tx.created_at), { addSuffix:true })}
                        </p>;
                      </div>;
                      <Badge variant="outline" className="bg-red-100 text-red-800">;
                        -{tx.amount} ZION$;
                      </Badge>;
                    </div>;                  ))}
                </div>;
              )}
<<<<<<< HEAD
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                  ))}
                </div>
              )}
            </ScrollArea>
          </TabsContent>
          <TabsContent value="spent">
            <ScrollArea className="h-64">
              {burnTransactions.length === 0 ? (
                <p className="text-center py-8 text-muted-foreground">No tokens spent yet</p>
              ) : (
                <div className="space-y-2 mt-2">
                  {burnTransactions.map(tx => (
                    <div key={tx.id} className="flex items-center justify-between py-2 border-b">
                      <div>
                        <p className="font-medium">{tx.reason |"Feature purchase"}</p>
                        <p className="text-xs text-muted-foreground">
                          {formatDistanceToNow(new Date(tx.created_at), { addSuffix: true })}
                        </p>
                      </div>
                      <Badge variant="outline" className="bg-red-100 text-red-800">
                        -{tx.amount} ZION$
                      </Badge>
                    </div>
                  ))}
                </div>
              )}

=======
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            </ScrollArea>;
          </TabsContent>;
        </Tabs>;
      </CardContent>;
<<<<<<< HEAD
<<<<<<< HEAD

    </Card>);
}

=======
    </Card>;
  ),;}
 export function TransactionHistory () {
  const {
  transactions, loading 
}= useWallet ();
return (<Card> <CardHeader> <CardTitle>Transaction History</CardTitle> <CardDescription>Loading transactions...</CardDescription> </CardHeader> </Card> return (<Card> <CardHeader> <CardTitle>Transaction History</CardTitle> <CardDescription>Your recent ZION$ activity</CardDescription> </CardHeader> <CardContent> <Tabs defaultValue="earned" > <TabsList className="w-full" > <TabsTrigger value="earned" className="flex-1" >Earned</TabsTrigger> <TabsTrigger value="spent" className="flex-1" >Spent</TabsTrigger> </TabsList>) : (<div className="space-y-2 mt-2" > {
  earnTransactions.map (tx => (<div key= {
  tx.id 
}className="flex items-center justify-between py-2 border-b" > <div> </Badge> </div>) ) 
}</div>) 
}</ScrollArea> </TabsContent>) : (<div className="space-y-2 mt-2" > {
  burnTransactions.map (tx => (<div key= {
  tx.id 
}className="flex items-center justify-between py-2 border-b" > <div> </Badge> </div>) ) 
}</div>) 
}</ScrollArea> </TabsContent> </Tabs> </CardContent> </Card>) 
}
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
