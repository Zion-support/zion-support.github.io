
import { format } from "date-fns"
import { UseFormReturn, ControllerRenderProps } from "react-hook-form"
 from "@/components/ui/
import { Input } from "@/components/ui/
import { Textarea } from "@/components/ui/
import { Button } from "@/components/ui/
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/
import { Calendar } from "@/components/ui/
import { ContractFormValues } from "./
<FormItem> <FormLabel>Project Name
<CalendarIcon className="ml-auto h-4 w-4 opacity-50" /> </Button> </FormControl> </PopoverTrigger> <PopoverContent className="w-auto p-0" align="start" > <Calendar initialFocus /> </PopoverContent> </Popover> <FormMessage /> 
<CalendarIcon className="ml-auto h-4 w-4 opacity-50" /> </Button> </FormControl> 