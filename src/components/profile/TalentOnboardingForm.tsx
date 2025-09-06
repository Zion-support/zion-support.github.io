

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import {
  Form
  FormControl
  FormField
  FormItem
  FormLabel
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
  Select
  SelectContent
  SelectItem
  SelectTrigger
  SelectValue
} from '@/components/ui/select'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Separator } from '@/components/ui/separator'
import { toast } from '@/components/ui/use-toast'
  User
  Briefcase
  Star
  Calendar
  Globe
  DollarSign
  FileText
  Link
  Upload
  ArrowRight
  ArrowLeft
  Trash2
  Plus
  CheckCircle2
} from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'
import { useTalentProfileEnhancer } from '@/hooks/useTalentProfileEnhancer'
import { supabase } from '@/integrations/supabase/client'
import {logErrorToProduction} from '@/utils/productionLogger'
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Separator } from "@/components/ui/separator"
import { toast } from "@/components/ui/use-toast"
import { User, Briefcase, Star, Calendar, Globe, DollarSign, FileText, Link, Upload, ArrowRight, ArrowLeft, Trash2, Plus, CheckCircle2 } from 'lucide-react'

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import { useAuth } from "@/hooks/useAuth",
import { useTalentProfileEnhancer } from "@/hooks/useTalentProfileEnhancer",
import { supabase } from "@/integrations/supabase/client",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  const form = useForm<TalentFormValues>({
    resolver: zodResolver(talentSchema)
    defaultValues: {
      basicInfo: {

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    // Preview the image
    const reader = new FileReader()
    reader.onloadend = () => {
      setProfilePictureUrl(reader.result as string)
=======
<<<<<<< HEAD
    }
    reader.readAsDataURL(file)
    // Store the file in the form data
    form.setValue('basicInfo.profilePicture', file);
  };
  // Handle CV upload;
  const handleCvUpload = async (file: File) => {;
    const fileName = `cv-${user?.id}-${Date.now()}`;    const { error: cvError } = await supabase.storage
      .from('resumes')
      .upload(fileName, file)
    if (cvError) {
      logErrorToProduction('Error uploading CV:', { data: cvError })
      throw new Error('Failed to upload CV')
    }
    // Get the public URL
    const {
      data: { publicUrl }
    } = supabase.storage.from('resumes').getPublicUrl(fileName)
    return publicUrl
  }

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
  resolver: zodResolver (talentSchema), defaultValues: {
  basicInfo: {
  cv: undefined
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
