




import {useState} from "react";
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Loader2} from "lucide-react";
import {CreateResumeFormProps} from "./types";

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export const CreateResumeForm = ({ ;
  onCreateResume;
  onCancel;

<<<<<<< HEAD
=======
=======
export const CreateResumeForm = ({
  onCreateResume;
  onCancel;
  isLoading
}: CreateResumeFormProps) => {
  const [newResumeTitle, setNewResumeTitle] = useState('');
export const CreateResumeForm = ({ ;
  onCreateResume;
  onCancel;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { useState } from "react",
import { Card, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Loader2 } from "lucide-react",
import { CreateResumeFormProps } from "./types",
export const CreateResumeForm = ({ 
  onCreateResume,
  onCancel,
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  isLoading 
}: CreateResumeFormProps) => {
  const [newResumeTitle, setNewResumeTitle] = useState(''),

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const handleSubmit = async () => {
    if (!newResumeTitle.trim()) return;
    await onCreateResume(newResumeTitle)


  },



<<<<<<< HEAD
=======
  const handleSubmit = async () => {
    if (!newResumeTitle.trim()) return,
    await onCreateResume(newResumeTitle)
  }
  },

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Create New Resume</h2>
          <p className="text-muted-foreground mb-6">Give your resume a title to get started</p>
          <div className="flex gap-2 max-w-md mx-auto">
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export const CreateResumeForm = ({ ;
  onCreateResume;
  onCancel;
  isLoading ;
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            <input
              type="text"
              placeholder="Resume Title (e.g. 'AI Engineer Resume')"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { useState } from "react",;
import { Card, CardContent } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Loader2 } from "lucide-react",;
import { CreateResumeFormProps } from "./types",;
export const CreateResumeForm = ({;
  onCreateResume,;
  onCancel,;
  isLoading;
<<<<<<< HEAD

}: CreateResumeFormProps) => {;
  const [newResumeTitle, setNewResumeTitle] = useState('');

  const handleSubmit = async () => {;
    if (!newResumeTitle && newResumeTitle.trim()) return;
    await onCreateResume(newResumeTitle);
  };

  return (
=======

import { useState } from "react",;
import { Card, CardContent } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Loader2 } from "lucide-react",;
import { CreateResumeFormProps } from "./types",;
;
export const CreateResumeForm = ({ ;
  onCreateResume,;
  onCancel,;
  isLoading ;
} CreateResumeFormProps) => {;
  const [newResumeTitle, setNewResumeTitle] = useState(''),;
;
  const handleSubmit = async () => {;
    if (!newResumeTitle.trim()) return,;
    await onCreateResume(newResumeTitle),;
  },;
;
  return (;
}: CreateResumeFormProps) => {;
  const [newResumeTitle, setNewResumeTitle] = useState(''),;
  const handleSubmit = async () => {;
    if (!newResumeTitle.trim()) return,;
    await onCreateResume(newResumeTitle);
  };
  return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    <Card className="w-full max-w-2xl mx-auto">;
      <CardContent className="py-8">;
        <div className="text-center">;
          <h2 className="text-2xl font-bold mb-2">Create New Resume</h2>;
          <p className="text-muted-foreground mb-6">Give your resume a title to get started</p>;
<<<<<<< HEAD

          <div className="flex gap-2 max-w-md mx-auto">;

=======
          <div className="flex gap-2 max-w-md mx-auto">;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            <input;
              type="text";
              placeholder="Resume Title (e.g. 'AI Engineer Resume')";
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm";
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              value={newResumeTitle}


              disabled={!newResumeTitle.trim() || isLoading}


=======
              value={newResumeTitle}
              onChange={(e) => setNewResumeTitle(e.target.value)}
            />
            <Button
              onClick={handleSubmit}
              disabled={!newResumeTitle.trim() |isLoading}
              disabled={!newResumeTitle.trim() || isLoading}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

<<<<<<< HEAD
=======
            <input
              type="text"
              placeholder="Resume Title (e && e.g. 'AI Engineer Resume')"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              value={newResumeTitle}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              onChange={(e) => setNewResumeTitle(e && e.target.value)}
            />;
            <Button
              onClick={handleSubmit}
              disabled={!newResumeTitle && newResumeTitle.trim() || isLoading}>;
<<<<<<< HEAD
=======
          ;
          <div className="flex gap-2 max-w-md mx-auto">;
            <input;
              type="text";
              placeholder="Resume Title (e.g. 'AI Engineer Resume')";
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm";
              value={newResumeTitle}
              onChange={(e) => setNewResumeTitle(e.target.value)}
            />;
            <Button ;
              onClick={handleSubmit}
              disabled={!newResumeTitle.trim() || isLoading}
            >;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Create;
            </Button>;
          </div>;
<<<<<<< HEAD

          <Button
            variant="ghost"
            onClick={onCancel}
            className="mt-4">;
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

},


<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { useState } from './react';
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
=======
          ;
          <Button;
            variant="ghost";
            onClick={onCancel}
            className="mt-4";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          >;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
            Cancel;
          </Button>;
        </div>;
      </CardContent>;
<<<<<<< HEAD

    </Card>);
=======
    </Card>;
  ),;
},; export const CreateResumeForm = ({
  onCreateResume;
onCancel;
isLoading 
}: CreateResumeFormProps) => {
  const [newResumeTitle, setNewResumeTitle] = useState ('');
const handleSubmit = async () => {
  if (!newResumeTitle.trim () ) return;
await onCreateResume (newResumeTitle) 
};
w-full max-w-2xl mx-auto"> <CardContent className=" py-8"> <div className=" text-center"> <h2 className=" text-2xl font-bold mb-2">Create New Resume</h2> <p className=" text-muted-foreground mb-6">Give your resume a title to get started</p> <div className=" flex gap-2 max-w-md mx-auto" > <input /> <Button onClick= {
  handleSubmit 
}disabled= {
  !newResumeTitle.trim () || isLoading 
}> Create </Button> </div> <Button > Cancel </Button> </div> </CardContent> </Card>) 
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}

<<<<<<< HEAD
=======
},
};
},
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
