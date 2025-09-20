
import { useState,  } from "react",
import { useForm,, ControllerRenderProps,  } from "react-hook-form",
import { Button,  } from "@/components/ui/button";
import { Textarea,  } from "@/components/ui/textarea";
import {
interface ReplyFormProps {
  onSubmit: (content: string) => Promise<void>;
  parentId?: string,
interface ReplyFormValues {
  content: string
