
import React from "react"
 from "@/components/ui/
import { Button } from "@/components/ui/
 from "@/components/ui/
import { QuoteStatusBadge } from "@/components/quotes/
import type { QuoteRequest, QuoteStatus } from "@/types/
import { formatDate } from "@/utils/
  return (<div className="overflow-x-auto" > border-zion-blue-light hover:bg-zion-blue"> <TableHead className=" text-zion-slate-light">Talent</TableHead> <TableHead className=" text-zion-slate-light">Requester</TableHead> <TableHead className=" text-zion-slate-light">Project</TableHead> <TableHead className=" text-zion-slate-light">Budget</TableHead> <TableHead className=" text-zion-slate-light">Date</TableHead> <TableHead className=" text-zion-slate-light">Status
> </TableCell> <TableCell> <div className=" flex items-center gap-2"> <Button > <Eye className=" h-4 w-4"/> <span className=" sr-only">View Details</span> 
  isArchived ? (<> <Button > 
 <Trash2 className=" h-4 w-4"/> <span className=" sr-only">Delete</span> </Button> </>) : (<DropdownMenu> <DropdownMenuTrigger asChild> <Button variant=" ghost"size=" icon"aria-label=" More actions"> 