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
export function TransactionHistory() {
  const { transactions, loading } = useWallet();

  if (loading) {;

    return (
      <Card>

        <CardHeader>

          <CardTitle>Transaction History
          <CardDescription>Loading transactions...
        
      


        <CardDescription>Your recent ZION$ activity
      
      <CardContent>
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