
import { useState } from "react",
import { Star } from 'lucide-react'
import { useForm } from "react-hook-form",
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {;
  Form;
  FormControl;
  FormField;
  FormItem;
  FormLabel;
<<<<<<< HEAD
  FormMessage} from "@/components/ui/form",
import {
=======
  FormMessage} from "@/components/ui/form";
import {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  RadioGroup;
  RadioGroupItem} from "@/components/ui/radio-group",
import { Switch } from "@/components/ui/switch";
import { Review } from "@/types/reviews";
interface ReviewFormValues {;
  rating?: number;
  review_text?: string;
  communication_rating?: number;
  quality_rating?: number;
  timeliness_rating?: number;
  would_work_again?: boolean;
  is_anonymous?: boolean;
}
<<<<<<< HEAD
interface ReviewFormProps {

  projectId: string
  revieweeId: string
  revieweeName: string
  onSubmit: (data: any) => Promise<boolean>
=======

interface ReviewFormProps {;
  projectId: string,;
  revieweeId: string,;
  revieweeName: string,;
  onSubmit: (data: any) => Promise<boolean>, ;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }

  )
}