
import React from "react"
import { useWallet } from "@/hooks/
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/
import { ScrollArea } from "@/components/ui/
import { Badge } from "@/components/ui/
return (<Card> <CardHeader> <CardTitle>Transaction History</CardTitle> <CardDescription>Loading transactions...</CardDescription> </CardHeader> </Card> return (<Card> <CardHeader> <CardTitle>Transaction History</CardTitle> <CardDescription>Your recent ZION$ activity</CardDescription> </CardHeader> <CardContent> <Tabs defaultValue="earned" > <TabsList className="w-full" > <TabsTrigger value="earned" className="flex-1" >Earned</TabsTrigger> <TabsTrigger value="spent" className="flex-1" >Spent</TabsTrigger> 
</ScrollArea> 