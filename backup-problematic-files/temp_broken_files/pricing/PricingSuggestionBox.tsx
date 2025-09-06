
import React from "react"
import { Button } from "@/components/ui/
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/
import { Card, CardContent } from "@/components/ui/
import { Badge } from "@/components/ui/
import { PricingSuggestion } from "@/services/
    
  return (<Card className="border border-dashed border-muted" > <CardContent className="flex items-center justify-center p-6" > <div className="text-center" > <Loader2 className="h-10 w-10 animate-spin text-muted-foreground mx-auto mb-4" /> <p className="text-sm text-muted-foreground" > Generating optimal pricing suggestion... </p> </div> </CardContent> </Card> return (<Card className="border-2 border-dashed border-muted-foreground/20" > <CardContent className="p-5 space-y-4" > <div className="flex items-center justify-between" > <h4 className="font-semibold" >AI Suggested Price
 {;"  suggestion.confidence ";"}confidence </Badge> </div> 
 $ {;"  suggestion.maxRate.toFixed (0) ";"}</span> <span className="text-sm text-muted-foreground ml-1" >{";"  rateType = = "hourly" ? "/hour" : "total" ";"}</span> </div> <div className="flex items-start space-x-2 text-sm text-muted-foreground" > <Info className="h-4 w-4 flex-shrink-0 mt-1" /> <p >{;"  suggestion.explanation ";"}</p> flex items-center justify-between"> <TooltipProvider> <Tooltip> <TooltipTrigger asChild> <Button > <ThumbsUp className=" h-4 w-4 mr-2"/> Apply Suggestion </Button> </TooltipTrigger> <TooltipContent> <p>Apply this suggestion to your pricing field</p> </TooltipContent> </Tooltip> </TooltipProvider> </div> <p className=" text-xs text-center text-muted-foreground pt-2" > Based on market data & trends. You can adjust as needed. </p> </CardContent> 