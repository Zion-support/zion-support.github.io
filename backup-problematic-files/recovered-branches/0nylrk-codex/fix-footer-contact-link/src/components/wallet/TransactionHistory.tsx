
      <Card>;
        <CardHeader>;
          <CardTitle>Transaction History</CardTitle>;
          <CardDescription>Loading transactions...</CardDescription>;
        </CardHeader>;
      </Card>;

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

                </div>;
              )}
            </ScrollArea>;
          </TabsContent>;
          <TabsContent value="spent">;
            <ScrollArea className="h-64">;

            </ScrollArea>;
          </TabsContent>;
        </Tabs>;
      </CardContent>;

