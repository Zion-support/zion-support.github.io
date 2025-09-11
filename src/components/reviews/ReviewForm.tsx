rating?: number;
  review_text?: string;
  communication_rating?: number;
  quality_rating?: number;
  timeliness_rating?: number;
  would_work_again?: boolean;
import { useState } from "react",
import { Star } from 'lucide-react'
import { useForm } from "react-hook-form",
import { Button } from "@/components/ui/button",
import { Textarea } from "@/components/ui/textarea",
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage} from "@/components/ui/form",
import {
  RadioGroup,
  RadioGroupItem} from "@/components/ui/radio-group",
import { Switch } from "@/components/ui/switch",
import { Review } from "@/types/reviews",
interface ReviewFormValues {
  rating?: number,
  review_text?: string,
  communication_rating?: number,
  quality_rating?: number,
  timeliness_rating?: number,
  would_work_again?: boolean,
  is_anonymous?: boolean
import { useState } from "react",;
import { Star } from 'lucide-react';
import { useForm } from "react-hook-form",;
import { Button } from "@/components/ui/button",;
import { Textarea } from "@/components/ui/textarea",;
import {;
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormLabel,;
  FormMessage} from "@/components/ui/form",;
import {;
  RadioGroup,;
  RadioGroupItem} from "@/components/ui/radio-group",;
import { Switch } from "@/components/ui/switch",;
import { Review } from "@/types/reviews",;
interface ReviewFormValues {;
  rating?: number,;
  review_text?: string,;
  communication_rating?: number,;
  quality_rating?: number,;
  timeliness_rating?: number,;
  would_work_again?: boolean,;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
  is_anonymous?: boolean;
}


interface ReviewFormProps {;
  projectId: string,;
  revieweeId: string,;
  revieweeName: string,;
  onSubmit: (data: any) => Promise<boolean>, ;

  }

  )
}
interface ReviewFormProps {
  project_id: string,
  reviewee_id: string,
  reviewee_name: string,
  on_submit: (data: any) => Promise < boolean>,
  }
  );
}