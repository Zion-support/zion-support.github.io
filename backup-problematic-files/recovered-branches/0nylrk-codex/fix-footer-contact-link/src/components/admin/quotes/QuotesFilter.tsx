import React from "react"
import { Calendar, RefreshCw } from "@/components/
import { Card, CardContent } from "@/components/ui/
import { Input } from "@/components/ui/
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/
import { Button } from "@/components/ui/
import { Calendar as CalendarComponent } from "@/components/ui/
import type { DateRange } from "@/types/
import type { QuoteStatus } from "@/types/
> </div> <div></SelectTrigger> <SelectContent className=" bg-zion-blue-dark border-zion-blue-light text-white"> <SelectItem value=" all">All Statuses</SelectItem> <SelectItem value=" new">New</SelectItem> <SelectItem value=" in review">In Review</SelectItem> <SelectItem value=" responded">Responded</SelectItem> <SelectItem value=" accepted">Accepted</SelectItem> <SelectItem value=" closed">Closed</SelectItem> </SelectContent> </Select> </div> <div></SelectTrigger> <SelectContent className=" bg-zion-blue-dark border-zion-blue-light text-white"> <SelectItem value=" active">Active Only</SelectItem> <SelectItem value=" archived">Archived Only</SelectItem> <SelectItem value=" all">All Quotes</SelectItem> </SelectContent> </Select> </div> <div> <p className=" text-zion-slate-light text-sm mb-2">Date Range</p> <Popover> <PopoverTrigger asChild> <Button variant=" outline"className=" w-full justify-start text-left font-normal bg-zion-blue border-zion-blue-light text-white"> 
</Button> </PopoverTrigger> <PopoverContent className=" w-auto p-0 bg-zion-blue-dark border-zion-blue-light"align=" start"> <CalendarComponent initialFocus /> </PopoverContent> </Popover> </div> 