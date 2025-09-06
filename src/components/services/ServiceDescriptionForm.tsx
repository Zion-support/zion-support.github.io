<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

}
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}


  )
}
<<<<<<< HEAD
=======
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import React, { useState } from "react",
import { useToast } from "@/hooks/use-toast",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card",
import { Loader, Sparkles } from 'lucide-react'
import { supabase } from "@/integrations/supabase/client",
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form",
import { useForm } from "react-hook-form",
import z from "zod",
import { zodResolver } from "@hookform/resolvers/zod",
import {logErrorToProduction} from '@/utils/productionLogger',
const formSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  keyFeatures: z.string(),
  targetAudience: z.string()}),

type FormData = z.infer<typeof formSchema>,

interface ServiceDescriptionFormProps {
  onDescriptionGenerated: (description: string) => void
}
  );
}

;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
