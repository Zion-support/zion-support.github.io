
import { useState } from "react";,
import { Star } from "lucide-react";
import { useForm } from "react-hook-form";,
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Form;
, , FormControl;
, , FormField;
, , FormItem;
, , FormLabel;
, , FormMessage } from "@/components/ui/form";
import { RadioGroup;
, , RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Review } from "@/types/reviews";
interface ReviewFormValues {rating?: number;
<<<<<<< HEAD
import { useState } from "react",
import { Star } from 'lucide-react'
import { useForm } from "react-hook-form",;
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Form;, FormControl;, FormField;, FormItem;, FormLabel;
FormMessage } from "@/components/ui/form",
import { RadioGroup;
RadioGroupItem } from "@/components/ui/radio-group",
import { Switch } from "@/components/ui/switch";
import { Review } from "@/types/reviews";
interface ReviewFormValues {
  rating?: number;
  review_text?: string;
  communication_rating?: number;
  quality_rating?: number;
  timeliness_rating?: number;
}
  would_work_again?: boolean;}
  would_work_again?: boolean;
  is_anonymous?: boolean}
=======
review_text?: string;
communication_rating?: number;
quality_rating?: number;
timeliness_rating?: number;
}
would_work_again?: boolean;}
is_anonymous?: boolean}
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
interface ReviewFormProps {
)}
}