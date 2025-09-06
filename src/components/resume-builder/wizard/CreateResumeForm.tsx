<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import { CreateResumeFormProps } from './types'
export const CreateResumeForm = ({
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
import { useState } from "react",
import { Card, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button";
import { Loader2 } from 'lucide-react'

<<<<<<< HEAD
=======
import { CreateResumeFormProps } from './types'
export const CreateResumeForm = ({
  onCreateResume
  onCancel
  isLoading
}: CreateResumeFormProps) => {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
import { CreateResumeFormProps } from "./types",
export const CreateResumeForm = ({ 
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
import { CreateResumeFormProps } from "./types",
export const CreateResumeForm = ({ 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  onCreateResume,
  onCancel,
  isLoading,
}: CreateResumeFormProps) => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const [newResumeTitle, setNewResumeTitle] = useState('')
  const handleSubmit = async () => {
    if (!newResumeTitle.trim()) return;
    await onCreateResume(newResumeTitle)
  }
  return (
<<<<<<< HEAD

    <Card className='w-full max-w-2xl mx-auto'>;
      <CardContent className='py-8'>;
        <div className='text-center'>;
          <h2 className='text-2xl font-bold mb-2'>Create New Resume</h2>;
          <p className='text-muted-foreground mb-6'>;
            Give your resume a title to get started;
          </p>;

          <div className='flex gap-2 max-w-md mx-auto'>;

=======
    <Card className='w-full max-w-2xl mx-auto'>
      <CardContent className='py-8'>
        <div className='text-center'>
          <h2 className='text-2xl font-bold mb-2'>Create New Resume</h2>
          <p className='text-muted-foreground mb-6'>
            Give your resume a title to get started
          </p>
          <div className='flex gap-2 max-w-md mx-auto'>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <input
              type='text'
              placeholder="Resume Title (e.g. 'AI Engineer Resume')"
              className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm'
              value={newResumeTitle}
              onChange={e => setNewResumeTitle(e.target.value)}
            />
            <Button
              onClick={handleSubmit}
<<<<<<< HEAD


import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2 } from 'lucide-react'
import { CreateResumeFormProps } from "./types";
export const CreateResumeForm = ({ 
  onCreateResume,
  onCancel;
  isLoading 
}: CreateResumeFormProps) => {

  const [ newResumeTitle, setNewResumeTitle ] = useState(''),



=======
              disabled={!newResumeTitle.trim() |isLoading}            >
              {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
              Create
            </Button>
          </div>
          <Button variant='ghost' onClick={onCancel} className='mt-4'>            Cancel
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const handleSubmit = async () => {
    if (!newResumeTitle.trim()) return;
    await onCreateResume(newResumeTitle)
  }
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Create New Resume</h2>
          <p className="text-muted-foreground mb-6">Give your resume a title to get started</p>
          <div className="flex gap-2 max-w-md mx-auto">
<<<<<<< HEAD
<<<<<<< HEAD
            <input
              type="text"
              placeholder="Resume Title (e.g. 'AI Engineer Resume')"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              value={newResumeTitle}
              onChange={(e) => setNewResumeTitle(e.target.value)}
            />
            <Button
              onClick={handleSubmit}
              disabled={!newResumeTitle.trim() |isLoading}
            >
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Create
            </Button>
          </div>
<<<<<<< HEAD
import { CreateResumeFormProps } from "./types",
export const CreateResumeForm = ({ 
  onCreateResume,
  onCancel,
  isLoading 
}: CreateResumeFormProps) => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const [newResumeTitle, setNewResumeTitle] = useState(''),
=======
              disabled={!newResumeTitle && newResumeTitle.trim() || isLoading}>;
              {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
              Create;
            </Button>;
          </div>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            <input
              type="text"
              placeholder="Resume Title (e.g. 'AI Engineer Resume')"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              value={newResumeTitle}
              onChange={(e) => setNewResumeTitle(e.target.value)}
            />;
            <Button;
              onClick={handleSubmit}
              disabled={!newResumeTitle.trim() || isLoading}
            >
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Create
            </Button>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { CreateResumeFormProps } from "./types",
export const CreateResumeForm = ({ 
  onCreateResume,
  onCancel,
  isLoading 
}: CreateResumeFormProps) => {
  const [newResumeTitle, setNewResumeTitle] = useState(''),

  const handleSubmit = async () => {
    if (!newResumeTitle.trim()) return,
    await onCreateResume(newResumeTitle)
  },

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
  const handleSubmit = async () => {;
    if (!newResumeTitle.trim()) return,;
    await onCreateResume(newResumeTitle);
  };
  return (;
    <Card className="w-full max-w-2xl mx-auto">;
      <CardContent className="py-8">;
        <div className="text-center">;
          <h2 className="text-2xl font-bold mb-2">Create New Resume</h2>;
          <p className="text-muted-foreground mb-6">Give your resume a title to get started</p>;
          <div className="flex gap-2 max-w-md mx-auto">;
            <input;
              type="text";
              placeholder="Resume Title (e.g. 'AI Engineer Resume')";
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm";
              value={newResumeTitle}
              onChange={(e) => setNewResumeTitle(e.target.value)}
            />;
            <Button;
              onClick={handleSubmit}
              disabled={!newResumeTitle.trim() || isLoading}
            >
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Create
            </Button>
          </div>
          
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <Button
=======
          
>>>>>>>           <Button
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            variant="ghost"
            onClick={onCancel}
            className="mt-4"
          >
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>>           </Button>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
            Cancel
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
            Cancel
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======



>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          </Button>
>>>>>>>         </div>
      </CardContent>
    </Card>
  )
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
w-full max-w-2xl mx-auto"> <CardContent className=" py-8"> <div className=" text-center"> <h2 className=" text-2xl font-bold mb-2">Create New Resume</h2> <p className=" text-muted-foreground mb-6">Give your resume a title to get started</p> <div className=" flex gap-2 max-w-md mx-auto" > <input /> <Button onClick={
  handleSubmit
}disabled= {
  !newResumeTitle.trim () |isLoading
}> Create </Button> </div> <Button > Cancel </Button> </div> </CardContent> </Card>)
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
'"}
  )
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
},
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
},
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
'"},;
;
  );
};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

},

=======
},
>>>>>>> >>>>>>> 
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
},
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
},
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
w-full max-w-2xl mx-auto"> <CardContent className=" py-8"> <div className=" text-center"> <h2 className=" text-2xl font-bold mb-2">Create New Resume</h2> <p className=" text-muted-foreground mb-6">Give your resume a title to get started</p> <div className=" flex gap-2 max-w-md mx-auto" > <input /> <ButtononClick={
  handleSubmit 
}disabled= {
  !newResumeTitle && newResumeTitle.trim () || isLoading 
}> Create </Button> </div> <Button > Cancel </Button> </div> </CardContent> </Card>) ;
};

},


'"},;



  );
};



import { useState } from 'react';
import { Card, CardContent } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { Loader2 } from 'lucide-react';
import { CreateResumeFormProps } from './types';
export const CreateResumeForm = ({
  onCreateResume,
  on_cancel,
  is_loading,
}: CreateResumeFormProps) =>: any {
  const [newResumeTitle, setNewResumeTitle] = useState ('');
  const handle_submit = async () => {
    if () return) {
  $2
}
    await onCreateResume (newResumeTitle);
  }
  return (
    <Card className='w - full max - w-2xl mx - auto'>;
      <CardContent className='py - 8'>;
        <div className='text - center'>;
          <h2 className='text - 2xl font - bold mb - 2'>Create New Resume</h2>;
          <p className='text - muted - foreground mb - 6'>;
            Give your resume a title to get started;
          </p>;
          <div className='flex gap - 2 max - w-md mx - auto'>;
            <input;
              type='text';
              placeholder="Resume Title (e.g. 'AI Engineer Resume')";
              className='flex h - 10 w - full rounded - md border border - input bg - background px - 3 py - 2 text - sm';
              value={newResumeTitle}
              on_change={e => setNewResumeTitle (e.target.value)}
            />;
            <Button;
              on_click={handle_submit}
              disabled={!newResumeTitle.trim () || is_loading}            >;
              {is_loading && <Loader2 className='mr - 2 h - 4 w - 4 animate - spin' />}
              Create;
            </Button>;
          </div>;
          <Button variant='ghost' on_click={on_cancel} className='mt - 4'>            Cancel;
  const handle_submit = async () => {
    if () return) {
  $2
}
    await onCreateResume (newResumeTitle);
  }
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
            on_click = {on_cancel, }
            className="mt - 4";
          >;
          </Button>;
        </div>;
      </CardContent>;
    </Card>);
}
w - full max - w-2xl mx - auto"> <CardContent className=" py - 8"> <div className=" text - center"> <h2 className=" text - 2xl font - bold mb - 2">Create New Resume</h2> <p className=" text - muted - foreground mb - 6">Give your resume a title to get started</p> <div className=" flex gap - 2 max - w-md mx - auto" > <input /> <Button on_click={
  handle_submit;
}disabled= {
  !newResumeTitle.trim () || is_loading;
}> Create </Button> </div> <Button > Cancel </Button> </div> </CardContent> </Card>);
}
'"},
  );
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
