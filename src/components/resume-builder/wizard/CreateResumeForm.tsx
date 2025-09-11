<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import { CreateResumeFormProps } from './types'
export const CreateResumeForm = ({

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { useState } from "react",
import { Card, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button";
import { Loader2 } from 'lucide-react'
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
import { CreateResumeFormProps } from "./types",
export const CreateResumeForm = ({ 
  onCreateResume,
  onCancel,
  isLoading,
}: CreateResumeFormProps) => {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import { CreateResumeFormProps } from './types'
export const CreateResumeForm = ({
  onCreateResume
  onCancel
  isLoading
}: CreateResumeFormProps) => {
<<<<<<< HEAD
import { CreateResumeFormProps } from "./types",
export const CreateResumeForm = ({ 
import { CreateResumeFormProps } from "./types",
export const CreateResumeForm = ({ 
=======
import { CreateResumeFormProps } from "./types",
export const CreateResumeForm = ({ 
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  onCreateResume,
  onCancel,
  isLoading,
}: CreateResumeFormProps) => {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [newResumeTitle, setNewResumeTitle] = useState('')
  const handleSubmit = async () => {
    if (!newResumeTitle.trim()) return;
    await onCreateResume(newResumeTitle)
  }
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <Card className='w-full max-w-2xl mx-auto'>
      <CardContent className='py-8'>
        <div className='text-center'>
          <h2 className='text-2xl font-bold mb-2'>Create New Resume</h2>
          <p className='text-muted-foreground mb-6'>
            Give your resume a title to get started
          </p>
          <div className='flex gap-2 max-w-md mx-auto'>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    <Card className='w-full max-w-2xl mx-auto'>;
      <CardContent className='py-8'>;
        <div className='text-center'>;
          <h2 className='text-2xl font-bold mb-2'>Create New Resume</h2>;
          <p className='text-muted-foreground mb-6'>;
            Give your resume a title to get started;
          </p>;

          <div className='flex gap-2 max-w-md mx-auto'>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
              disabled={!newResumeTitle.trim() |isLoading}            >
              {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
              Create
            </Button>
          </div>
          <Button variant='ghost' onClick={onCancel} className='mt-4'>            Cancel
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


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



<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
              disabled={!newResumeTitle && newResumeTitle.trim() || isLoading}>;
              {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
              Create;
            </Button>;
          </div>;
<<<<<<< HEAD
=======
  const [newResumeTitle, setNewResumeTitle] = useState(''),
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
            <input
              type="text"
              placeholder="Resume Title (e.g. 'AI Engineer Resume')"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              value={newResumeTitle}
<<<<<<< HEAD
<<<<<<< HEAD
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
          
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <Button
          
=======
          <Button
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            variant="ghost"
            onClick={onCancel}
            className="mt-4"
          >
            Cancel
<<<<<<< HEAD
<<<<<<< HEAD
            Cancel
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



          </Button>
<<<<<<< HEAD
      </CardContent>
    </Card>
  )
<<<<<<< HEAD
}
w-full max-w-2xl mx-auto"> <CardContent className=" py-8"> <div className=" text-center"> <h2 className=" text-2xl font-bold mb-2">Create New Resume</h2> <p className=" text-muted-foreground mb-6">Give your resume a title to get started</p> <div className=" flex gap-2 max-w-md mx-auto" > <input /> <Button onClick={
  handleSubmit
}disabled= {
  !newResumeTitle.trim () |isLoading
}> Create </Button> </div> <Button > Cancel </Button> </div> </CardContent> </Card>)
}
'"}
  )
}

},
},
'"},;
;
  );
};
},
},
},
=======
=======
        </div>
      </CardContent>
    </Card>
  )
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              onChange={(e) => setNewResumeTitle(e && e.target.value)}
            />;
            <Button
              onClick={handleSubmit}
              disabled={!newResumeTitle && newResumeTitle.trim() || isLoading}>;
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Create;
            </Button>;
          </div>;

          <Button
            variant="ghost"
            onClick = {onCancel,}
            className="mt-4">;
          </Button>;
        </div>;
      </CardContent>;
    </Card>;
  );
};
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
w-full max-w-2xl mx-auto"> <CardContent className=" py-8"> <div className=" text-center"> <h2 className=" text-2xl font-bold mb-2">Create New Resume</h2> <p className=" text-muted-foreground mb-6">Give your resume a title to get started</p> <div className=" flex gap-2 max-w-md mx-auto" > <input /> <ButtononClick={
  handleSubmit 
}disabled= {
  !newResumeTitle && newResumeTitle.trim () || isLoading 
}> Create </Button> </div> <Button > Cancel </Button> </div> </CardContent> </Card>) ;
};

},


<<<<<<< HEAD
=======
},
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
