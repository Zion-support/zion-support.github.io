<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/TransactionHistory.tsx

<<<<<<< HEAD

import React from "react",
import { useWallet } from "@/hooks/useWallet",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { ScrollArea } from "@/components/ui/scroll-area",

=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/TransactionHistory.tsx
=======

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react";
import {useWallet} from "@/hooks/useWallet";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Badge} from "@/components/ui/badge";
import {formatDistanceToNow} from "date-fns";
export function TransactionHistory() {;
  const { transactions, loading } = useWallet();
<<<<<<< HEAD
<<<<<<< HEAD
  if (loading) {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/TransactionHistory.tsx

=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  if (loading) {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/TransactionHistory.tsx
    return (
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/TransactionHistory.tsx
<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
          <CardDescription>Loading transactions...</CardDescription>
        </CardHeader>
      </Card>
    )
  }

  const earnTransactions = transactions.filter(tx => tx.transaction_type === 'earn'),
  const burnTransactions = transactions.filter(tx => tx.transaction_type === 'burn'),

  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
              {earnTransactions.length === 0 ? (
                <p className="text-center py-8 text-muted-foreground">No tokens earned yet</p>
              ) : (
                <div className="space-y-2 mt-2">
                  {earnTransactions.map(tx => (
                    <div key={tx.id} className="flex items-center justify-between py-2 border-b">
                      <div>
                        <p className="font-medium">{tx.reason |"Token reward"}</p>
                        <p className="text-xs text-muted-foreground">
                          {formatDistanceToNow(new Date(tx.created_at), { addSuffix: true })}
                        </p>
                      </div>
                      <Badge variant="outline" className="bg-green-100 text-green-800">
                        +{tx.amount} ZION$
                      </Badge>
                    </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
              {earnTransactions.length === 0 ? (;
                <p className="text-center py-8 text-muted-foreground">No tokens earned yet</p>;
              ) : (;
                <div className="space-y-2 mt-2">;
                  {earnTransactions.map(tx => (;
                    <div key={tx.id} className="flex items-center justify-between py-2 border-b">;
                      <div>;
                        <p className="font-medium">{tx.reason || "Token reward"}</p>;
                        <p className="text-xs text-muted-foreground">;
                          {formatDistanceToNow(new Date(tx.created_at), { addSuffix: true })}
                        </p>;
                      </div>;
                      <Badge variant="outline" className="bg-green-100 text-green-800">;
                        +{tx.amount} ZION$;
                      </Badge>;
                    </div>;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
<<<<<<< HEAD
}
=======

=======

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

========
=======
    ),;
  }
;
  const earnTransactions = transactions.filter(tx => tx.transaction_type === 'earn'),;
  const burnTransactions = transactions.filter(tx => tx.transaction_type === 'burn'),;
;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/TransactionHistory.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/TransactionHistory.tsx



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/TransactionHistory.tsx
                  ))}
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                </div>;
              )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/TransactionHistory.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/TransactionHistory.tsx
            </ScrollArea>;
          </TabsContent>;
          <TabsContent value="spent">;
            <ScrollArea className="h-64">;
<<<<<<< HEAD
              {burnTransactions && burnTransactions.length === 0 ? (;
                <p className="text-center py-8 text-muted-foreground">No tokens spent yet</p>;
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/TransactionHistory.tsx

                  ))}
                </div>;
              )}

=======
========
                  ))}
                </div>;
              )}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/TransactionHistory.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/TransactionHistory.tsx

========
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/TransactionHistory.tsx
            </ScrollArea>;
          </TabsContent>;
        </Tabs>;
      </CardContent>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/TransactionHistory.tsx

    </Card>);
}

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/TransactionHistory.tsx
=======
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
