
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/CreateResumeForm.tsx
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import {useState} from "react";
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Loader2} from "lucide-react";
import {CreateResumeFormProps} from "./types";
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

export const CreateResumeForm = ({ ;
  onCreateResume;
  onCancel;

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export const CreateResumeForm = ({
  onCreateResume;
  onCancel;
  isLoading
}: CreateResumeFormProps) => {
  const [newResumeTitle, setNewResumeTitle] = useState('');
export const CreateResumeForm = ({ ;
  onCreateResume;
  onCancel;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useState } from "react",
import { Card, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Loader2 } from "lucide-react",
import { CreateResumeFormProps } from "./types",
export const CreateResumeForm = ({ 
  onCreateResume,
  onCancel,
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  isLoading 
}: CreateResumeFormProps) => {
  const [newResumeTitle, setNewResumeTitle] = useState(''),

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const handleSubmit = async () => {
    if (!newResumeTitle.trim()) return;
    await onCreateResume(newResumeTitle)
<<<<<<< HEAD

=======


  },



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const handleSubmit = async () => {
    if (!newResumeTitle.trim()) return,
    await onCreateResume(newResumeTitle)
  }
  },

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Create New Resume</h2>
          <p className="text-muted-foreground mb-6">Give your resume a title to get started</p>
          <div className="flex gap-2 max-w-md mx-auto">
<<<<<<< HEAD

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/CreateResumeForm.tsx
export const CreateResumeForm = ({ ;
  onCreateResume;
  onCancel;
  isLoading ;
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <input
              type="text"
              placeholder="Resume Title (e.g. 'AI Engineer Resume')"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
              value={newResumeTitle}
              onChange={(e) => setNewResumeTitle(e.target.value)}
            />
            <Button
              onClick={handleSubmit}
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
}: CreateResumeFormProps) => {;
  const [newResumeTitle, setNewResumeTitle] = useState(''),;
  const handleSubmit = async () => {;
    if (!newResumeTitle.trim()) return,;
    await onCreateResume(newResumeTitle);
  };
  return (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <Card className="w-full max-w-2xl mx-auto">;
      <CardContent className="py-8">;
        <div className="text-center">;
          <h2 className="text-2xl font-bold mb-2">Create New Resume</h2>;
          <p className="text-muted-foreground mb-6">Give your resume a title to get started</p>;
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="flex gap-2 max-w-md mx-auto">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/CreateResumeForm.tsx

=======
          <div className="flex gap-2 max-w-md mx-auto">;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <input;
              type="text";
              placeholder="Resume Title (e.g. 'AI Engineer Resume')";
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm";
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              value={newResumeTitle}


              disabled={!newResumeTitle.trim() || isLoading}

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              value={newResumeTitle}
              onChange={(e) => setNewResumeTitle(e.target.value)}
            />
            <Button
              onClick={handleSubmit}
              disabled={!newResumeTitle.trim() |isLoading}
              disabled={!newResumeTitle.trim() || isLoading}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

};

},
=======

========
            <input
              type="text"
              placeholder="Resume Title (e && e.g. 'AI Engineer Resume')"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              value={newResumeTitle}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/CreateResumeForm.tsx
              onChange={(e) => setNewResumeTitle(e && e.target.value)}
            />;
            <Button
              onClick={handleSubmit}
              disabled={!newResumeTitle && newResumeTitle.trim() || isLoading}>;
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Create;
            </Button>;
          </div>;
<<<<<<< HEAD
          <Button
            variant="ghost"
            onClick={onCancel}
            className="mt-4">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/CreateResumeForm.tsx
=======

},


=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/CreateResumeForm.tsx
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
=======
          ;
          <Button;
            variant="ghost";
            onClick={onCancel}
            className="mt-4";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          >;
            Cancel;
          </Button>;
        </div>;
      </CardContent>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/CreateResumeForm.tsx

    </Card>);
}
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

========
<<<<<<< HEAD
    </Card>);
}
;
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/CreateResumeForm.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}

},
};
},
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
