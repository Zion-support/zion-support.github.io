import React from "react"
import { useForm, ControllerRenderProps } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/
import { supabase } from "@/integrations/supabase/
import { useAuth } from "@/hooks/
import { useToast } from "@/hooks/
import { useRouter } from "next/
  FormMessage} from "@/components/ui/
import { Input } from "@/components/ui/
import { Button } from "@/components/ui/
import { Textarea } from "@/components/ui/
import { AspectRatio } from "@/components/ui/
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/
import { AIListingGenerator } from "@/components/listing/
        
className="w-full"> <TabsList className="grid grid-cols-2 mb-6" > <TabsTrigger value="manual" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple" > ai"className="data-[state=active]: any