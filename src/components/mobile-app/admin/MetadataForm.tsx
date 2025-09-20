
import React from "react";;
import { UseFormReturn } from "react-hook-form";,
import { AppMetadataValues } from "./MetadataManager";,
import { Input } from "@/components/ui/input";,
import { Textarea } from "@/components/ui/textarea";,
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";,
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import React from "react",
import { UseFormReturn } from "react-hook-form",
import { AppMetadataValues } from "./MetadataManager",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Card, CardHeader, CardTitleCardContent } from "@/components/ui/card",;
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabelFormMessage } from "@/components/ui/form";
import { Badge } from "@/components/ui/badge";
import { X } from 'lucide-react';

interface MetadataFormProps {
  form: UseFormReturn<AppMetadataValues>}
}
export const MetadataForm: React.FC<MetadataFormProps> = ({ form }) => {
