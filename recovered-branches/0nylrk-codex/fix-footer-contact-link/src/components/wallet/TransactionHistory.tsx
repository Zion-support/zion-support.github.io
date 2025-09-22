<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React from "react";
<<<<<<< HEAD
import {useWallet} from "@/hooks/useWallet";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Badge} from "@/components/ui/badge";
import {formatDistanceToNow} from "date-fns";
export function TransactionHistory() {;
  const { transactions, loading } = useWallet();
import React from "react",
import { useWallet } from "@/hooks/useWallet",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { ScrollArea } from "@/components/ui/scroll-area",import { Badge } from "@/components/ui/badge";
=======
import React from "react";"
import { useWallet } from "@/hooks/useWallet";
import {}
=======
import { useWallet } from "@/hooks/useWallet";
import {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  Card,
  CardContent,
  CardDescription,
  CardHeader,
<<<<<<< HEAD
  CardTitle,";
} from "@/components/ui/card";"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";"
import { ScrollArea } from "@/components/ui/scroll-area";"
import { Badge } from "@/components/ui/badge";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { formatDistanceToNow } from "date-fns";
export function TransactionHistory() {};
  const { transactions, loading } = useWallet();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


  if (loading) {
    return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

  if (loading) {
    return (
=======
      <Card>;
        <CardHeader>;
          <CardTitle>Transaction History</CardTitle>;
          <CardDescription>Loading transactions...</CardDescription>;
        </CardHeader>;
      </Card>;
    );
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

import React from "react",;
import { useWallet } from "@/hooks/useWallet",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { ScrollArea } from "@/components/ui/scroll-area",;
import { Badge } from "@/components/ui/badge",;
import { formatDistanceToNow } from "date-fns",;
<<<<<<< HEAD
<<<<<<< HEAD
;
export function TransactionHistory() {;
  const { transactions, loading } = useWallet(),;
;
  if (loading) {;
    return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export function TransactionHistory() {;
  const { transactions, loading } = useWallet(),;
  if (loading) {;
    return (;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      <Card>;
        <CardHeader>;
          <CardTitle>Transaction History</CardTitle>;
          <CardDescription>Loading transactions...</CardDescription>;
        </CardHeader>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return (
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
      </Card>;    return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      </Card>;    return (
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
      </Card>;    return (
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      <Card>
        <CardHeader>
      <Card>
</Card>
        <CardHeader>
</CardHeader>
          <CardTitle>Transaction History</CardTitle>
          <CardDescription>Loading transactions...</CardDescription>
        </CardHeader>
      </Card>
<<<<<<< HEAD
    );
  }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const earnTransactions = transactions.filter(
=======
  const earnTransactions = transactions.filter("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    (tx) => tx.transaction_type === "earn",
  );
  const burnTransactions = transactions.filter("
    (tx) => tx.transaction_type === "burn",
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Transaction History</CardTitle>
        <CardDescription>Your recent ZION$ activity</CardDescription>
      </CardHeader>
      <CardContent>"
        <Tabs defaultValue="earned">"
          <TabsList className="w-full">"
            <TabsTrigger value="earned" className="flex-1">
              Earned;
            </TabsTrigger>"
            <TabsTrigger value="spent" className="flex-1">
              Spent;
            </TabsTrigger>
          </TabsList>"
          <TabsContent value="earned">"
            <ScrollArea className="h-64">
              {earnTransactions.length === 0 ? ("
                <p className="text-center py-8 text-muted-foreground">
                  No tokens earned yet;
                </p>
              ) : ("
                <div className="space-y-2 mt-2">
                  {earnTransactions.map((tx) => (
                    <div;
                      key={tx.id}"
                      className="flex items-center justify-between py-2 border-b"
                    >
                      <div>"
                        <p className="font-medium">"
                          {tx.reason || "Token reward"}
                        </p>"
                        <p className="text-xs text-muted-foreground">
                          {formatDistanceToNow(new Date(tx.created_at), {}
                            addSuffix: true,
                          })}
                        </p>
                      </div>
                      <Badge"
                        variant="outline""
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
          </TabsContent>"
          <TabsContent value="spent">"
            <ScrollArea className="h-64">
              {burnTransactions.length === 0 ? ("
                <p className="text-center py-8 text-muted-foreground">
                  No tokens spent yet;
                </p>
              ) : ("
                <div className="space-y-2 mt-2">
                  {burnTransactions.map((tx) => (
                    <div;
                      key={tx.id}"
                      className="flex items-center justify-between py-2 border-b"
                    >
                      <div>"
                        <p className="font-medium">"
                          {tx.reason || "Feature purchase"}
                        </p>"
                        <p className="text-xs text-muted-foreground">
                          {formatDistanceToNow(new Date(tx.created_at), {}
                            addSuffix: true,
                          })}
                        </p>
                      </div>
                      <Badge"
                        variant="outline""
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
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    );
  }
;
  const earnTransactions = transactions.filter(tx => tx.transaction_type === 'earn');
  const burnTransactions = transactions.filter(tx => tx.transaction_type === 'burn');
  return (;

  const earnTransactions = transactions.filter(
    (tx) => tx.transaction_type === "earn",
  );
  const burnTransactions = transactions.filter(
    (tx) => tx.transaction_type === "burn",
  );
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

    <Card>
</Card>
      <CardHeader>
</CardHeader>
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
  );
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
<<<<<<< HEAD
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
  const earn_transactions = transactions.filter (tx => tx.transaction_type === 'earn');'
  const burn_transactions = transactions.filter (tx => tx.transaction_type === 'burn');
;
  return (
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    <Card>;
      <CardHeader>;
        <CardTitle>Transaction History</CardTitle>;
        <CardDescription>Your recent ZION$ activity</CardDescription>;
      </CardHeader>;
<<<<<<< HEAD
      <CardContent>;
        <Tabs defaultValue="earned">;
          <TabsList className="w-full">;
            <TabsTrigger value="earned" className="flex-1">Earned</TabsTrigger>;
            <TabsTrigger value="spent" className="flex-1">Spent</TabsTrigger>;
          </TabsList>;
          <TabsContent value="earned">;
            <ScrollArea className="h-64">;
              ) : (;
                <div className="space-y-2 mt-2">;
                  {burnTransactions && burnTransactions.map(tx => (;
                    <div key={tx && tx.id} className="flex items-center justify-between py-2 border-b">;                      <div>;
                        <p className="font-medium">{tx.reason || "Feature purchase"}</p>;
                        <p className="text - xs text - muted-foreground">;
=======
            <ScrollArea className="h - 64">;
              {earn_transactions.length === 0 ? (
                <p className="text - center py - 8 text - muted - foreground">No tokens earned yet</p>) : (
                <div className="space - y-2 mt - 2">;
                  {earn_transactions.map (tx => (
                    <div key={tx.id} className="flex items - center justify - between py - 2 border - b">;
                      <div>;
                        <p className="font - medium">{tx.reason || "Token reward"}</p>;
                        <p className="text - xs text - muted - foreground">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
      <CardContent>;"
        <Tabs default_value="earned">;"
          <TabsList className="w - full">;"
            <TabsTrigger value="earned" className="flex - 1">Earned</TabsTrigger>;"
            <TabsTrigger value="spent" className="flex - 1">Spent</TabsTrigger>;
          </TabsList>;"
          <TabsContent value="earned">;"
            <ScrollArea className="h - 64">;
              {earn_transactions.length === 0 ? ("
                <p className="text - center py - 8 text - muted - foreground">No tokens earned yet</p>) : ("
                <div className="space - y-2 mt - 2">;
                  {earn_transactions.map (tx => ("
                    <div key={tx.id} className="flex items - center justify - between py - 2 border - b">;
                      <div>;"
                        <p className="font - medium">{tx.reason || "Token reward"}</p>;"
                        <p className="text - xs text - muted - foreground">;
                          {formatDistanceToNow (new Date (tx.created_at), { add_suffix: true })}
                        </p>;
                      </div>;"
                      <Badge variant="outline" className="bg - green - 100 text - green - 800">;
                        +{tx.amount} ZION$;
                      </Badge>;
                    </div>))}
                </div>)}
<<<<<<< HEAD
            </ScrollArea>;
          </TabsContent>;"
          <TabsContent value="spent">;"
            <ScrollArea className="h - 64">;
              {burn_transactions.length === 0 ? ("
                <p className="text - center py - 8 text - muted - foreground">No tokens spent yet</p>) : ("
                <div className="space - y-2 mt - 2">;
                  {burn_transactions.map (tx => ("
                    <div key={tx.id} className="flex items - center justify - between py - 2 border - b">;
                      <div>;"
                        <p className="font - medium">{tx.reason || "Feature purchase"}</p>;"
                        <p className="text - xs text - muted - foreground">;
                          {formatDistanceToNow (new Date (tx.created_at), { add_suffix: true })}
                        </p>;
                      </div>;"
                      <Badge variant="outline" className="bg - red - 100 text - red - 800">;
                        -{tx.amount} ZION$;
                      </Badge>;
                    </div>))}
                </div>)}

<<<<<<< HEAD


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
"
        <Tabs defaultValue="earned">"
          <TabsList className="w-full">"
            <TabsTrigger value="earned" className="flex-1">"

            <TabsTrigger value="spent" className="flex-1">"

          <TabsContent value="earned">"
            <ScrollArea className="h-64">"
                <p className="text-center py-8 text-muted-foreground">"
</p>
                </p>"
                <div className="space-y-2 mt-2">"
</div>
                    <div;
                      key={tx.id}"
                      className="flex items-center justify-between py-2 border-b""
                    >
                      <div>
</div>"
                        <p className="font-medium">"
                        <p className="text-xs text-muted-foreground">"
                      <Badge;"
                        variant="outline"""
                        className="bg-green-100 text-green-800""

                </div>;
          <TabsContent value="spent">"
                        className="bg-red-100 text-red-800""

      <Card>;

        <CardHeader>;

          <CardTitle > Transaction History;
          <CardDescription > Loading transactions...;
        ;)
      );


        <CardDescription > Your recent ZION$ activity;
      ;
      <CardContent>;
        <Tabs default_value="earned">;"
          <TabsList className="w - full">;"
            <TabsTrigger value="earned" className="flex - 1">Earned;""
            <TabsTrigger value="spent" className="flex - 1">Spent;"
          ;"
          <TabsContent value="earned">;"
            <ScrollArea className="h - 64">;"
                <p className="text - center py - 8 text - muted - foreground">No tokens earned yet</p>) : (""
                <div className="space - y-2 mt - 2">;"
                    <div key={tx.id} className="flex items - center justify - between py - 2 border - b">;"
                      <div>;
                        <p className="font - medium">{tx.reason || "Token reward"}</p>;""
                        <p className="text - xs text - muted - foreground">;"
                        </p>;
                      </div>;"
                      <Badge variant="outline" className="bg - green - 100 text - green - 800">;"

                    </div>))}
                </div>)}
          <TabsContent value="spent">;"
                <p className="text - center py - 8 text - muted - foreground">No tokens spent yet</p>) : (""
                        <p className="font - medium">{tx.reason || "Feature purchase"}</p>;""
                      <Badge variant="outline" className="bg - red - 100 text - red - 800">;"

    );"
pr-12325
</Badge>
                      </Badge>;)
                    </div>))}
                </div>)}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            </ScrollArea>;
          </TabsContent>;
        </Tabs>;
      </CardContent>;

<<<<<<< HEAD

<<<<<<< HEAD
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
=======
                    </div>))}
                </div>)}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                    </div>))}
                </div>)}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    </Card>);
}

<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
    </Card>);"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
