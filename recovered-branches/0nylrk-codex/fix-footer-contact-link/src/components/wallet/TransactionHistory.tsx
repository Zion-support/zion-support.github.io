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
</Card>
        <CardHeader>
</CardHeader>
          <CardTitle>Transaction History</CardTitle>
          <CardDescription>Loading transactions...</CardDescription>
        </CardHeader>
      </Card>
    <Card>
</Card>
      <CardHeader>
</CardHeader>
        <CardTitle>Transaction History</CardTitle>
        <CardDescription>Your recent ZION$ activity</CardDescription>
      </CardHeader>
      <CardContent>
</CardContent>"
        <Tabs defaultValue="earned">"
</Tabs>"
          <TabsList className="w-full">"
</TabsList>"
            <TabsTrigger value="earned" className="flex-1">"
</TabsTrigger>
            </TabsTrigger>"
            <TabsTrigger value="spent" className="flex-1">"
</TabsTrigger>
            </TabsTrigger>
          </TabsList>"
          <TabsContent value="earned">"
</TabsContent>"
            <ScrollArea className="h-64">"
</ScrollArea>"
                <p className="text-center py-8 text-muted-foreground">"
</p>
                </p>"
                <div className="space-y-2 mt-2">"
</div>
                    <div;
                      key={tx.id}"
                      className="flex items-center justify-between py-2 border-b""
                    >
</div>
                      <div>
</div>"
                        <p className="font-medium">"
</p>
                        </p>"
                        <p className="text-xs text-muted-foreground">"
</p>
                        </p>
                      </div>
                      <Badge;"
                        variant="outline"""
                        className="bg-green-100 text-green-800""
                      >
</Badge>
                      </Badge>
                    </div>
                </div>;
            </ScrollArea>
          </TabsContent>"
          <TabsContent value="spent">"
</TabsContent>"
            <ScrollArea className="h-64">"
</ScrollArea>"
                <p className="text-center py-8 text-muted-foreground">"
</p>
                </p>"
                <div className="space-y-2 mt-2">"
</div>
                    <div;
                      key={tx.id}"
                      className="flex items-center justify-between py-2 border-b""
                    >
</div>
                      <div>
</div>"
                        <p className="font-medium">"
</p>
                        </p>"
                        <p className="text-xs text-muted-foreground">"
</p>
                        </p>
                      </div>
                      <Badge;"
                        variant="outline"""
                        className="bg-red-100 text-red-800""
                      >
</Badge>
                      </Badge>
                    </div>
                </div>;
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
      <Card>;
</Card>
        <CardHeader>;
</CardHeader>
          <CardTitle > Transaction History</CardTitle>;
          <CardDescription > Loading transactions...</CardDescription>;
        </CardHeader>;)
      </Card>);
    <Card>;
</Card>
      <CardHeader>;
</CardHeader>
        <CardTitle > Transaction History</CardTitle>;
        <CardDescription > Your recent ZION$ activity</CardDescription>;
      </CardHeader>;
      <CardContent>;
</CardContent>"
        <Tabs default_value="earned">;"
</Tabs>"
          <TabsList className="w - full">;"
</TabsList>"
            <TabsTrigger value="earned" className="flex - 1">Earned</TabsTrigger>;""
            <TabsTrigger value="spent" className="flex - 1">Spent</TabsTrigger>;"
          </TabsList>;"
          <TabsContent value="earned">;"
</TabsContent>"
            <ScrollArea className="h - 64">;"
</ScrollArea>"
                <p className="text - center py - 8 text - muted - foreground">No tokens earned yet</p>) : (""
                <div className="space - y-2 mt - 2">;"
</div>"
                    <div key={tx.id} className="flex items - center justify - between py - 2 border - b">;"
</div>
                      <div>;
</div>"
                        <p className="font - medium">{tx.reason || "Token reward"}</p>;""
                        <p className="text - xs text - muted - foreground">;"
</p>
                        </p>;
                      </div>;"
                      <Badge variant="outline" className="bg - green - 100 text - green - 800">;"
</Badge>
                      </Badge>;)
                    </div>))}
                </div>)}
            </ScrollArea>;
          </TabsContent>;"
          <TabsContent value="spent">;"
</TabsContent>"
            <ScrollArea className="h - 64">;"
</ScrollArea>"
                <p className="text - center py - 8 text - muted - foreground">No tokens spent yet</p>) : (""
                <div className="space - y-2 mt - 2">;"
</div>"
                    <div key={tx.id} className="flex items - center justify - between py - 2 border - b">;"
</div>
                      <div>;
</div>"
                        <p className="font - medium">{tx.reason || "Feature purchase"}</p>;""
                        <p className="text - xs text - muted - foreground">;"
</p>
                        </p>;
                      </div>;"
                      <Badge variant="outline" className="bg - red - 100 text - red - 800">;"
</Badge>
                      </Badge>;)
                    </div>))}
                </div>)}
            </ScrollArea>;
          </TabsContent>;
        </Tabs>;
      </CardContent>;
    </Card>);"