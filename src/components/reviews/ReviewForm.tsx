<<<<<<< HEAD
rating?: number;
  review_text?: string;
  communication_rating?: number;
  quality_rating?: number;
  timeliness_rating?: number;
  would_work_again?: boolean;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { useState } from "react",
import { Star } from 'lucide-react'
import { useForm } from "react-hook-form",
<<<<<<< HEAD
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
=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
interface ReviewFormValues {
  rating?: number,
  review_text?: string,
  communication_rating?: number,
  quality_rating?: number,
  timeliness_rating?: number,
  would_work_again?: boolean,
  is_anonymous?: boolean
<<<<<<< HEAD
}
interface ReviewFormProps {

  projectId: string
  revieweeId: string
  revieweeName: string
  onSubmit: (data: any) => Promise<boolean>
  }

  )
}
=======
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  is_anonymous?: boolean;
}
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f

import { useState } from "react",
import { Star } from 'lucide-react'
import { useForm } from "react-hook-form",
interface ReviewFormValues {
  rating?: number,
  review_text?: string,
  communication_rating?: number,
  quality_rating?: number,
  timeliness_rating?: number,
  would_work_again?: boolean,
  is_anonymous?: boolean
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
