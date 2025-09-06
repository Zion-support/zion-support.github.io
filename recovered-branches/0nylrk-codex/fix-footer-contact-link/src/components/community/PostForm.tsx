
import { useState } from "react";
import { useForm } from "react-hook-form";
import { 
  Card;
  CardContent;
  CardFooter;
  CardHeader;
  CardTitle
} from "@/components/ui/card",
import {
  Form;
  FormControl;
  FormField;
  FormItem;
  FormLabel;
  FormMessage
} from "@/components/ui/form",
import { Input } from "@/components/ui/input",
import { Button } from "@/components/ui/button",
import { Textarea } from "@/components/ui/textarea";
import { ForumCategory } from "@/types/community";
interface PostFormValues {
  title: string;
  content: string;
  categoryId: ForumCategory;
  tags: string
}

interface PostFormProps {
  initialValues?: Partial<PostFormValues>,
  onSubmit: (values: PostFormValues) => void;
  isEditing?: boolean
}

export const PostForm = null;
