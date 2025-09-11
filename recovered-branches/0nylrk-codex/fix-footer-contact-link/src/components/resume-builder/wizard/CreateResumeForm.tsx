




import {useState} from "react";
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Loader2} from "lucide-react";
import {CreateResumeFormProps} from "./types";

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
export const CreateResumeForm = ({ ;
  onCreateResume;
  onCancel;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======  isLoading 
}: CreateResumeFormProps) => {
  const [newResumeTitle, setNewResumeTitle] = useState(''),


  },



==============
  const handleSubmit = async () => {
    if (!newResumeTitle.trim()) return;
    await onCreateResume(newResumeTitle)
  }
  },
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Create New Resume</h2>
          <p className="text-muted-foreground mb-6">Give your resume a title to get started</p>
          <div className="flex gap-2 max-w-md mx-auto">
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
export const CreateResumeForm = ({ ;
  onCreateResume;
  onCancel;
  isLoading ;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======import { useState } from "react",;
import { Card, CardContent } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Loader2 } from "lucide-react",;
import { CreateResumeFormProps } from "./types",;
export const CreateResumeForm = ({;
  onCreateResume,;
  onCancel,;
  isLoading;

  const handleSubmit = async () => {;
    if (!newResumeTitle && newResumeTitle.trim()) return;
    await onCreateResume(newResumeTitle);
  };

  return (
          <div className="flex gap-2 max-w-md mx-auto">;
            <input;
              type="text";
              placeholder="Resume Title (e.g. 'AI Engineer Resume')";
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm";
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              value={newResumeTitle}
              onChange={(e) => setNewResumeTitle(e.target.value)}
            />
            <Button
              onClick={handleSubmit}
              disabled={!newResumeTitle.trim() |isLoading}
              disabled={!newResumeTitle.trim() || isLoading}
              value={newResumeTitle}


              disabled={!newResumeTitle.trim() || isLoading}


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
          <Button
            variant="ghost"
            onClick={onCancel}
            className="mt-4">;
=======

},


=======import { useState } from './react';
import { Card, CardContent } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { Loader2 } from './lucide-react';
import { CreateResumeFormProps } from './types';
export const CreateResumeForm = ({
  onCreateResume;
  on_cancel;
  is_loading;
}: CreateResumeFormProps) =>: any {
  const [newResumeTitle, setNewResumeTitle] = useState ('');
;
  const handle_submit = async () => {
    if () return) {
  $2
}
    await onCreateResume (newResumeTitle);
  }
;
  return (
    <Card className="w - full max - w-2xl mx - auto">;
      <CardContent className="py - 8">;
        <div className="text - center">;
          <h2 className="text - 2xl font - bold mb - 2">Create New Resume</h2>;
          <p className="text - muted - foreground mb - 6">Give your resume a title to get started</p>;
          <div className="flex gap - 2 max - w-md mx - auto">;
            <input;
              type="text";
              placeholder="Resume Title (e.g. 'AI Engineer Resume')";
              className="flex h - 10 w - full rounded - md border border - input bg - background px - 3 py - 2 text - sm";
              value={newResumeTitle}
              on_change={(e) => setNewResumeTitle (e.target.value)}
            />;
            <Button;
              on_click={handle_submit}
              disabled={!newResumeTitle.trim () || is_loading}
            >;
              {is_loading && <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" />}
              Create;
            </Button>;
          </div>;
          <Button;
            variant="ghost";
            on_click={on_cancel}
            className="mt - 4";
<<<<<<< HEAD
},
};
},
==============

    </Card>);
}
;
