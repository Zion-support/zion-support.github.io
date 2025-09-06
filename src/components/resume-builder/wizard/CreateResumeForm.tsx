

  onCreateResume,
  onCancel,
  isLoading,
}: CreateResumeFormProps) => {

  const [newResumeTitle, setNewResumeTitle] = useState(''),

          <Button variant='ghost' onClick={onCancel} className='mt-4'>            Cancel;

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Create New Resume</h2>
          <p className="text-muted-foreground mb-6">Give your resume a title to get started</p>

          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Resume Title (e.g. 'AI Engineer Resume')"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
import { useState } from "react",;
import { Card, CardContent } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Loader2 } from 'lucide-react';
import { CreateResumeFormProps } from "./types",;
export const CreateResumeForm = ({;
  onCreateResume,;
  onCancel,;
  isLoading;
}: CreateResumeFormProps) => {;
  const [newResumeTitle, setNewResumeTitle] = useState(''),;

          <Button
            variant="ghost"
            onClick={onCancel}
            className="mt-4"
          >

=======
            Cancel



>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          </Button>
        </div>
      </CardContent>
    </Card>
  )
<<<<<<< HEAD
