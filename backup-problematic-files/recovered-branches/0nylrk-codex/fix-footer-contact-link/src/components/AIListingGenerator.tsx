import React, { useState } from "react"
import { useToast } from "@/hooks/
import { Button } from "@/components/ui/
import { Input } from "@/components/ui/
import { Textarea } from "@/components/ui/
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/
import { Skeleton } from "@/components/ui/
import { Sparkles, ArrowRight } from "@/components/
import { supabase } from "@/integrations/supabase/
import { Badge } from "@/components/ui/
            
<CardHeader> <CardTitle className="flex items-center text-white" > <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" /> AI Listing Optimizer </CardTitle> </p> </CardHeader> <CardContent className="space-y-4" > <div className="space-y-2" > <label htmlFor="title" className="text-sm font-medium text-zion-slate-light" >Title</label> <Input /> </div> <div className="space-y-2" > <label htmlFor="category" className="text-sm font-medium text-zion-slate-light" >Category</label> <Input /> </div> <div className="space-y-2" > <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light" >Key Features (Optional) </label> <Textarea /> 
  isLoading ? (<>Generating Optimized Content...
</Button> </CardContent> </Card> <CardHeader> 
<CardHeader> <CardTitle className="text-white" >Generated Content</CardTitle> </CardHeader> <CardContent className="space-y-4" > <div> <h3 className="text-sm font-medium text-zion-slate-light mb-2" >Description
</ul> </div> 