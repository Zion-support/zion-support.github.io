import React, { useState } from "react"
import { useForm, ControllerRenderProps } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/
import { Button } from "@/components/ui/
  FormMessage} from "@/components/ui/
import { Textarea } from "@/components/ui/
  SelectValue} from "@/components/ui/
import { Input } from "@/components/ui/
import { disputeReasonLabels } from "@/types/
import { useDisputes } from "@/hooks/
                        
return (<div className="space-y-6" > <div className="flex items-center space-x-2" > 
> <FormField <FormItem> <FormLabel>Describe the issue in detail</FormLabel> <FormControl> <Textarea /> </FormControl> <FormMessage /> 
> <FormItem> <FormLabel>Attachments (optional) 