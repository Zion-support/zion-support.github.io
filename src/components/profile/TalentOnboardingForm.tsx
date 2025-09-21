import React{ useState } from "react",
import { useForm, useFieldArray } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import React from "react",
import import { useRouter } from 'next/router',
import import { logErrorToProduction } from '@/utils/productionLogger',
import { Form,
FormControl, FormField,
FormItem
, FormLabel,
FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
  Select,
SelectContent
  SelectItem,
SelectTrigger
  SelectValue} from '@/components/ui/select'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Separator } from '@/components/ui/separator'
import { toast } from '@/components/ui/use-toast'
  User,
Briefcase
  Star,
Calendar
  Globe,
DollarSign
  FileText,
Link
  Upload,
ArrowRight
  ArrowLeft,
Trash2
  Plus,
CheckCircle2} from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'
import { useTalentProfileEnhancer } from '@/hooks/useTalentProfileEnhancer'
import { supabase } from '@/integrations/supabase/client'
import { logErrorToProduction } from '@/utils/productionLogger'
  Form FormControl FormField FormItem FormLabel FormMessage} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
  Select SelectContent SelectItem SelectTrigger SelectValue} from "@/components/ui/select"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Separator } from "@/components/ui/separator"
import { toast } from "@/components/ui/use-toast"
import { User, Briefcase, Star, Calendar, Globe, DollarSign, FileText, Link, Upload, ArrowRight, ArrowLeft, Trash2, Plus, CheckCircle2 } from 'lucide-react'
import { useAuth } from "@/hooks/useAuth",
import React from "react",
import React from "react",
// Define the form schema with validation
  // Rest of the file remains unchanged...
  // [Previous implementation continues...]
  return null
  //Step 1: Basic Info basicInfo: z.object ({
  ) .optional () .default ([])
cv: z.any () .optional ()
})
})
type TalentFormValues = z.infer<typeof talentSchema>
const form = useForm<TalentFormValues> ({
  resolver: zodResolver (talentSchema), defaultValues: {,
basicInfo: {
  cv: undefined}
//Handle profile picture upload const handleProfilePictureUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0]
if (!file) return
//Preview the image const reader = new FileReader ()
reader.onloadend = () => {
  setProfilePictureUrl (reader.result as string)
}
reader.readAsDataURL (file)
}//Get the public window.URL const {
  data: {
  publicUrl}= supabase.storage.from ('resumes') .getPublicUrl (fileName)
return publicUrl;
}
//Rest of the file remains unchanged... // [Previous implementation continues...] return null}'}