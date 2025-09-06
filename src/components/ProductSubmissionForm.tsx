import React from "react",
import { useForm, ControllerRenderProps } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import z from "zod",
import { supabase } from "@/integrations/supabase/client",
import { useAuth } from "@/hooks/useAuth",
import { useToast } from "@/hooks/use-toast",
import { useRouter } from "next/router";
import Image from 'next/image', // Import next/image
import {logErrorToProduction} from '@/utils/productionLogger';
import {
  Form;
  FormControl;
  FormDescription;
  FormField;
  FormItem;
  FormLabel;
  FormMessage} from "@/components/ui/form",
import { Input } from "@/components/ui/input",
import { Button } from "@/components/ui/button",
import { Textarea } from "@/components/ui/textarea",
import { AspectRatio } from "@/components/ui/aspect-ratio",
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { AIListingGenerator } from "@/components/listing/AIListingGenerator";
import { Sparkles } from 'lucide-react'

// Define the form schema with zod
const productSchema = null;
            category: form.getValues("category")
          }}
        />
      </TabsContent>
    </Tabs>
  )
}