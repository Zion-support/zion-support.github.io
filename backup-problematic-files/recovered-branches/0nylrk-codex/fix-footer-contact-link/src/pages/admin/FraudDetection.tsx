import React, { useState, useEffect } from "react"
import { AppLayout } from "@/layout/
import { SEO } from "@/components/
import { Card, CardContent } from "@/components/ui/
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/
import { Button } from "@/components/ui/
import { toast } from "@/hooks/
import { supabase } from "@/integrations/supabase/
import { FraudFlag, FraudStats } from "@/types/
 from "@/components/admin/
Fraud Detection | Admin Dashboard"description=" Monitor and manage fraud detection alerts on the Zion AI Marketplace"/> <div className=" container mx-auto px-4 py-8"> <div className=" flex flex-col md:flex-row items-start md:items-center justify-between mb-8"> <div> <h1 className=" text-3xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent"> Fraud Detection </h1> <p className=" text-zion-slate-light mt-2"> Monitor suspicious activities and protect the marketplace from fraud and abuse </p> 
> <Tabs defaultValue=" all"className=" mb-8"> <TabsList> <TabsTrigger value=" all">All Flags</TabsTrigger> <TabsTrigger value=" pending">Pending Review</TabsTrigger> <TabsTrigger value=" dangerous">Dangerous
> </CardContent> </Card> </TabsContent> <TabsContent value=" pending"> <FraudTabContent tabValue=" pending"/> </TabsContent> <TabsContent value=" dangerous"> <FraudTabContent tabValue=" dangerous"/> 