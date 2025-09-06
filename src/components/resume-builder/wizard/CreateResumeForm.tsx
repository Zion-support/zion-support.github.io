
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2 } from 'lucide-react'
import { CreateResumeFormProps } from "./types";
export const CreateResumeForm = $2;
  onCancel,
  isLoading 
}: CreateResumeFormProps) => {
  const [newResumeTitle, setNewResumeTitle] = useState($2);
  const handleSubmit = $2;
    await onCreateResume(newResumeTitle)
  },

  return (
    <Card className = $2;