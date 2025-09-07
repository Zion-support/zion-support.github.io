import React from "react";
import {useWallet} from "@/hooks/useWallet";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Badge} from "@/components/ui/badge";
import {formatDistanceToNow} from "date-fns";
export function TransactionHistory() {;
  const { transactions, loading } = useWallet();
import React from "react",;
import { useWallet } from "@/hooks/useWallet",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { ScrollArea } from "@/components/ui/scroll-area",import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";

import React from "react";""
import { useWallet } from "@/hooks/useWallet";"
import {
  // TODO: Implement
}
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,"
} from "@/components/ui/card";""
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";""
import { ScrollArea } from "@/components/ui/scroll-area";""
import { Badge } from "@/components/ui/badge";""
import { formatDistanceToNow } from "date-fns";"
pr-12325
export function TransactionHistory() {
  const { transactions, loading } = useWallet();

  if (loading) {;

if (loading) {

  const { transactions, loading } = useWallet();
  if (loading) {;

  if (loading) {
    return (

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
      </Card>;    return (
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
    );
  }

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
              ) : (;
                <div className="space-y-2 mt-2">;
                  {burnTransactions && burnTransactions.map(tx => (;
                    <div key={tx && tx.id} className="flex items-center justify-between py-2 border-b">;                      <div>;
                        <p className="font-medium">{tx.reason || "Feature purchase"}</p>;
                        <p className="text - xs text - muted-foreground">;
                          {formatDistanceToNow (new Date (tx.created_at), { add_suffix: true })}
                        </p>;
                      </div>;
                      <Badge variant="outline" className="bg - red - 100 text - red-800">;
                        -{tx.amount} ZION$;
                      </Badge>;
                    </div>))}
                </div>)}
    return (
      <Card>

        <CardHeader>

          <CardTitle>Transaction History
          <CardDescription>Loading transactions...
        
      


        <CardDescription>Your recent ZION$ activity
      
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
            </ScrollArea>;
          </TabsContent>;
        </Tabs>;
      </CardContent>;

    </Card>);
}

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

