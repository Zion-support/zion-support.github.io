import React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/
import { supabase } from "@/integrations/supabase/
import { useAuth } from "@/hooks/
import { useToast } from "@/hooks/
  FormMessage} from "@/components/ui/
import { Input } from "@/components/ui/
import { Button } from "@/components/ui/
import { Textarea } from "@/components/ui/
import { AspectRatio } from "@/components/ui/
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/
import { AIListingGenerator } from "@/components/listing/
        
className="w-full"> <TabsList className="grid grid-cols-2 mb-6" > <TabsTrigger value="manual" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple" > ai"className="data-[state=active]: any
> <FormField <FormItem> <FormLabel>Category</FormLabel> <FormControl> <select > <option value="">Select a category</option> <option value=" digital product">Digital Product</option> <option value=" service">Service</option> <option value=" ai tool">AI Tool</option> <option value=" course">Course</option> <option value=" template">Template
> <FormField <FormItem> <FormLabel>Product Image</FormLabel> <FormControl> 
> <div className=" flex justify-end"> <Button </Button> </div> </form> </Form> 