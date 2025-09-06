
<<<<<<< HEAD

import { useState } from "react",
import { Star } from 'lucide-react'
import { useForm } from "react-hook-form",

=======
import { useState } from "react"
import { Star } from 'lucide-react'import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  Form
  FormControl
  FormField
  FormItem
  FormLabel
  FormMessage} from "@/components/ui/form";
  RadioGroup;
  RadioGroupItem} from "@/components/ui/radio-group"; import { Switch } from "@/components/ui/switch"
import { Review } from "@/types/reviews"
interface ReviewFormValues {
  rating?: number
  review_text?: string
  communication_rating?: number
  quality_rating?: number
  timeliness_rating?: number
  would_work_again?: boolean
  is_anonymous?: boolean
}

interface ReviewFormProps {
  projectId: string,
  revieweeId: string,
  revieweeName: string,
  onSubmit: (data: any) => Promise<boolean>, 
  }
  );
};
import { useState } from "react",
import { Star } from 'lucide-react'
import { useForm } from "react-hook-form",
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form;
  FormControl;
  FormField;
  FormItem;
  FormLabel;
  FormMessage} from "@/components/ui/form",
import {
  RadioGroup;
  RadioGroupItem} from "@/components/ui/radio-group",
import { Switch } from "@/components/ui/switch";
import { Review } from "@/types/reviews";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
interface ReviewFormValues {
  rating?: number,
  review_text?: string,
  communication_rating?: number,
  quality_rating?: number,
  timeliness_rating?: number,
  would_work_again?: boolean,
  is_anonymous?: boolean
<<<<<<< HEAD

=======
}
interface ReviewFormProps {

  projectId: string
  revieweeId: string
  revieweeName: string
  onSubmit: (data: any) => Promise<boolean>
  }

  )
}
>>>>>>> 

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
