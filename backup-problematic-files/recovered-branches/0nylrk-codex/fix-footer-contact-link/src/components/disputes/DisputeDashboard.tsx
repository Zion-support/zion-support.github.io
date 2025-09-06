
import React, { useEffect } from "react"
import { useDisputes } from "@/hooks/
import { DisputesList } from "./
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/
import { Button } from "@/components/ui/
container mx-auto p-4 space-y-6"> <div className=" flex flex-wrap items-center justify-between gap-4"> <div> <h1 className=" text-3xl font-bold">Dispute Resolution Center</h1> <p className=" text-muted-foreground">Manage and resolve disputes between clients and talents</p> </div> Refresh </Button> </div> <div className=" grid gap-4 md:grid-cols-3"> <Card> <CardHeader className=" pb-2"> <CardTitle className=" text-lg font-medium flex justify-between items-center"> <span>Open Disputes</span> </CardTitle> <CardDescription>Awaiting review</CardDescription> </CardHeader> <CardContent></div> </div> </CardContent> </Card> <Card> <CardHeader className=" pb-2"> <CardTitle className=" text-lg font-medium flex justify-between items-center"> <span>Under Review</span> </CardTitle> <CardDescription>Being actively processed</CardDescription> </CardHeader> <CardContent></div> </div> </CardContent> 