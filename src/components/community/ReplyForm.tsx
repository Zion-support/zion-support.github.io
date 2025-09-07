

import { useState } from "react",
import { useForm, ControllerRenderProps } from "react-hook-form",
import { Button } from "@/components/ui/button",
import { Textarea } from "@/components/ui/textarea",
import { useState } from 'react';
import { useForm, ControllerRenderProps } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
origin/cursor/automate-test-improve-and-merge-code-2533
import {
  Form,
  FormControl,
  FormField,
  FormItem,

  FormMessage,;
} from '@/components/ui/form';
import { Card, CardContent } from '@/components/ui/card';

import { useState } from "react",;
import { useForm, ControllerRenderProps } from "react-hook-form",;
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
origin/cursor/automate-test-improve-and-merge-code-2533
interface ReplyFormProps {
  onSubmit: (content: string) => Promise<void>;
  parentId?: string
interface ReplyFormValues {
  content: string




interface ReplyFormProps {
  onSubmit: (content:,  string) => Promise<void>;,
  parentId?: string
      content: '',;
    },;
  });
  const handleSubmit = async (values:,  ReplyFormValues) => {;,
  const handleSubmit = async (values: ReplyFormValues) => {;

interface ReplyFormProps {
  onSubmit: (content: string) => Promise<void>;
  parentId?: string
    setIsSubmitting(true);    try {
      await onSubmit(values.content)
      form.reset()
    } finally {
      setIsSubmitting(false)
  parentId?: string;
interface ReplyFormValues {;
  content: string;,
export const ReplyForm = ({ onSubmit, parentId }:,  ReplyFormProps) => {;,
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<ReplyFormValues>({;
    defaultValues: {;,
      content: '',;
    },;
  });
  const handleSubmit = async (values:,  ReplyFormValues) => {;,
    setIsSubmitting(true);    try {;
      await onSubmit(values && values.content);
      form && form.reset();
    } finally {;
      setIsSubmitting(false);

