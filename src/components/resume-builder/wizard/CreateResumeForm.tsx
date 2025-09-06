<<<<<<< HEAD
=======
import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import { CreateResumeFormProps } from './types'
export const CreateResumeForm = ({

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { useState } from "react",
import { Card, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button";
import { Loader2 } from 'lucide-react'
<<<<<<< HEAD
import { CreateResumeFormProps } from "./types",
export const CreateResumeForm = ({ 
=======

import { CreateResumeFormProps } from './types'
export const CreateResumeForm = ({
  onCreateResume
  onCancel
  isLoading
}: CreateResumeFormProps) => {
import { CreateResumeFormProps } from "./types",
export const CreateResumeForm = ({ 
import { CreateResumeFormProps } from "./types",
export const CreateResumeForm = ({ 
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  onCreateResume,
  onCancel,
  isLoading,
}: CreateResumeFormProps) => {
  const [newResumeTitle, setNewResumeTitle] = useState('')
  const handleSubmit = async () => {
    if (!newResumeTitle.trim()) return
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            <input
              type='text'
              placeholder="Resume Title (e && e.g. 'AI Engineer Resume')"
              className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm'
              value={newResumeTitle}
              onChange={e => setNewResumeTitle(e && e.target.value)}
            />;
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const handleSubmit = async () => {
    if (!newResumeTitle.trim()) return
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

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
            <input
              type="text"
              placeholder="Resume Title (e && e.g. 'AI Engineer Resume')"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              value={newResumeTitle}




          <Button
=======
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
          
          <Button
          
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            variant="ghost"
            onClick = {onCancel,}
            className="mt-4"
          >
<<<<<<< HEAD

            Cancel
=======
            Cancel
            Cancel
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df



          </Button>
<<<<<<< HEAD
        </div>
      </CardContent>
    </Card>
  )

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
=======
      </CardContent>
    </Card>
  )
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
}
=======
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
