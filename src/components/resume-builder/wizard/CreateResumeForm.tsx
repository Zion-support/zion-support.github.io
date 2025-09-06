

  onCreateResume,
  onCancel,
  isLoading,
}: CreateResumeFormProps) => {
=======
import { CreateResumeFormProps } from "./types",
export const CreateResumeForm = ({ 
  onCreateResume,
  onCancel,
  isLoading,
}: CreateResumeFormProps) => {
  onCreateResume,
  onCancel,
  isLoading,
}: CreateResumeFormProps) => {
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  const [newResumeTitle, setNewResumeTitle] = useState('')
  const handleSubmit = async () => {
    if (!newResumeTitle.trim()) return;
    await onCreateResume(newResumeTitle)
  }
  return (
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

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

          </Button>
        </div>
      </CardContent>
    </Card>
  )
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

          <Button variant='ghost' onClick={onCancel} className='mt-4'>            Cancel;

  const handleSubmit = async () => {;
    if (!newResumeTitle && newResumeTitle.trim()) return;
    await onCreateResume(newResumeTitle);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">;
      <CardContent className="py-8">;
        <div className="text-center">;
          <h2 className="text-2xl font-bold mb-2">Create New Resume</h2>;
          <p className="text-muted-foreground mb-6">Give your resume a title to get started</p>;

          <div className="flex gap-2 max-w-md mx-auto">;
              onChange={(e) => setNewResumeTitle(e.target.value)}
            />
          <Button
            variant="ghost"
            onClick={onCancel}
            className="mt-4"
          >
            Cancel
            <Button
              onClick={handleSubmit}
              disabled={!newResumeTitle.trim() |isLoading}
            >
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Create
            </Button>
          </div>
import { CreateResumeFormProps } from "./types",
export const CreateResumeForm = ({ 
}disabled= {
  !newResumeTitle && newResumeTitle.trim () || isLoading 
}> Create </Button> </div> <Button > Cancel </Button> </div> </CardContent> </Card>) ;
};

},


=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
'"},;



  );
};



import { useState } from 'react';
import { Card, CardContent } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { Loader2 } from 'lucide-react';
import { CreateResumeFormProps } from './types';
export const CreateResumeForm = ({
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  onCreateResume,
  onCancel,
  isLoading 
}: CreateResumeFormProps) => {
  const [newResumeTitle, setNewResumeTitle] = useState(''),
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
