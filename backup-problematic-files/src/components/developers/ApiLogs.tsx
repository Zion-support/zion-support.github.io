
import { useState, useEffect } from "react"
import { format } from "date-fns"
import { useApiKeys } from "@/hooks/
import { Button } from "@/components/ui/
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/
import { Badge } from "@/components/ui/
import { ApiLogsChart } from "./
                  
bg-zinc-900 border-zinc-800 text-white"> <CardHeader></CardTitle> <CardDescription className=" text-zinc-400"> View logs of requests made using your API keys. </CardDescription> </CardHeader> <CardContent> <div className=" flex justify-between items-center mb-6"> <div className=" flex items-center space-x-2"> <span className=" text-sm text-zinc-400">Show</span> <Select > <SelectTrigger className=" w-20 bg-zinc-800 border-zinc-700"> <SelectValue placeholder=" 25"/> </SelectTrigger> <SelectContent className=" bg-zinc-900 border-zinc-800"> <SelectItem value=" 10">10</SelectItem> <SelectItem value=" 25">25</SelectItem> <SelectItem value=" 50">50</SelectItem> <SelectItem value=" 100">100</SelectItem> </SelectContent> 
> 
<div className=" overflow-x-auto"> <table className=" w-full border-collapse"> <thead> <tr className=" border-b border-zinc-800"> <th className=" px-4 py-2 text-left font-medium text-zinc-300">Timestamp</th> <th className=" px-4 py-2 text-left font-medium text-zinc-300">Method</th> <th className=" px-4 py-2 text-left font-medium text-zinc-300">Endpoint</th> <th className=" px-4 py-2 text-left font-medium text-zinc-300">Status</th> <th className=" px-4 py-2 text-left font-medium text-zinc-300">Response Time
className=" text-center py-12"> <div className=" flex flex-col items-center"> <div className=" animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-zion-cyan mb-4"></div> <span className=" text-zinc-500">Loading logs...</span> </div> </td> </tr>) : logs.length = = 0 ? (<tr> Logs will appear here when you make API requests. </span> </div> </td> 