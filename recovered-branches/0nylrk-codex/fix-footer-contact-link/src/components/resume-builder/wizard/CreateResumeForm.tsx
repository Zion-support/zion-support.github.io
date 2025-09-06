


>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import {useState} from "react";
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Loader2} from "lucide-react";
import {CreateResumeFormProps} from "./types";
export const CreateResumeForm = ({
  onCreateResume;
  onCancel;
  isLoading
}: CreateResumeFormProps) => {
  const [newResumeTitle, setNewResumeTitle] = useState('');
export const CreateResumeForm = ({ ;
  onCreateResume;
  onCancel;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  const handleSubmit = async () => {
    if (!newResumeTitle.trim()) return;
    await onCreateResume(newResumeTitle)
=======

export const CreateResumeForm = ({ ;
  onCreateResume;
  onCancel;

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import { useState } from "react",
import { Card, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Loader2 } from "lucide-react",
import { CreateResumeFormProps } from "./types",
export const CreateResumeForm = ({ 
  onCreateResume,
  onCancel,
  isLoading 
}: CreateResumeFormProps) => {
  const [newResumeTitle, setNewResumeTitle] = useState(''),

  const handleSubmit = async () => {
    if (!newResumeTitle.trim()) return;
    await onCreateResume(newResumeTitle)
  }
  },
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Create New Resume</h2>
          <p className="text-muted-foreground mb-6">Give your resume a title to get started</p>
          <div className="flex gap-2 max-w-md mx-auto">

export const CreateResumeForm = ({ ;
  onCreateResume;
  onCancel;
  isLoading ;

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
              value={newResumeTitle}
              onChange={(e) => setNewResumeTitle(e.target.value)}
            />
            <Button
              onClick={handleSubmit}
              disabled={!newResumeTitle.trim() |isLoading}
              disabled={!newResumeTitle.trim() || isLoading}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
            >
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Create
            </Button>
          </div>
          <Button
            variant="ghost"
            onClick={onCancel}
            className="mt-4"
          >
            Cancel
          </Button>
        </div>
      </CardContent>
    </Card>
  )
=======
}

},
};
},
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
