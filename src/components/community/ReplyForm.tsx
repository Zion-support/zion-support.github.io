import { useState } from 'react';
import { useForm, ControllerRenderProps } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,;
} from '@/components/ui/form';
import { Card, CardContent } from '@/components/ui/card';

import { useState } from "react",
import { useForm, ControllerRenderProps } from "react-hook-form",
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form;
  FormControl;
  FormField;
  FormItem;
  FormMessage
} from "@/components/ui/form",
import { Card, CardContent } from "@/components/ui/card";
interface ReplyFormProps {
  onSubmit: (content: string) => Promise<void>;
  parentId?: string
interface ReplyFormValues {
  content: string
  );
};
export default ReplyForm;
