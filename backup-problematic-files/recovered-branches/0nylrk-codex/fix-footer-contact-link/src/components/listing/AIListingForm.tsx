
import React, { useState } from "react"
import { useToast } from "@/hooks/
import { Button } from "@/components/ui/
import { Input } from "@/components/ui/
import { Textarea } from "@/components/ui/
> </div> <div className="space-y-2" > <label htmlFor="category" className="text-sm font-medium text-zion-slate-light" >Category</label> <Input /> </div> <div className="space-y-2" > <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light" >Key Features (Optional) </label> <Textarea /> 
  isLoading ? (<>Generating Optimized Content...