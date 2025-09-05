 const fetchTransactions = async () => {
  const {
  data, error 
}= await supabase .from ('token transactions') .select ('*') 
}
};
return (<ProtectedRoute adminOnly> <div> <Header /> <div className="min-h-screen bg-zion-blue px-4 py-8" > <div className="container mx-auto" > <h1 className="text-3xl font-bold text-white mb-6" >Token Manager</h1> <Card className="mb-6" > <CardHeader> <CardTitle>Issue or Revoke Tokens</CardTitle> </CardHeader> </div> </CardContent> </Card> <Tabs defaultValue="history" > <TabsList> <TabsTrigger value="history" >Transaction History</TabsTrigger> </TabsList> </li>) ) 
}</ul> </TabsContent> </Tabs> </div> </div> <Footer /> </div> </ProtectedRoute>) 
}