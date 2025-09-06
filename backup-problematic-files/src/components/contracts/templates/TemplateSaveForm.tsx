
import { useState } from "react"
import { useForm, type ControllerRenderProps } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/
import { ContractFormValues } from "@/components/contracts/components/
import { ContractTemplate } from "@/types/
import { useContractTemplates } from "@/hooks/
import { Button } from "@/components/ui/
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/
import { Input } from "@/components/ui/
import { Switch } from "@/components/ui/
> <FormField >Set as default template</FormLabel> <FormControl> <Switch /> </FormControl> <FormMessage /> 
> <> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving... 