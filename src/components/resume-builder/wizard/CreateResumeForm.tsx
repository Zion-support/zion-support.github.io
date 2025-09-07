import { useState } from "react",;
import { Card, CardContent } from "@/components/ui/card",;
import { Button } from "@/components/ui/button";
import { Loader2 } from 'lucide-react'
import { CreateResumeFormProps } from "./types",;
export const CreateResumeForm = ({ 
  onCreateResume,
  onCancel,
  isLoading,
import { CreateResumeFormProps } from "./types";
export const CreateResumeForm = null;
export const CreateResumeForm = ({
  onCreateResume
  onCancel
  isLoading
origin/cursor/automate-test-improve-and-merge-code-2533
}: CreateResumeFormProps) => {
  const [newResumeTitle, setNewResumeTitle] = useState('')
  const handleSubmit = async () => {
    if (!newResumeTitle.trim()) return
import { useState } from "react",""
import { Card, CardContent } from "@/components/ui/card",""
import { Button } from "@/components/ui/button";""
import { Loader2 } from 'lucide-react
import { CreateResumeFormProps } from "./types","
export const CreateResumeForm = ({ 
  onCreateResume,
  onCancel,
  isLoading,)
}: CreateResumeFormProps) => {"
  const [newResumeTitle, setNewResumeTitle] = useState()
  const handleSubmit = async () => {
    if (!newResumeTitle.trim()) return;
pr-12325
    await onCreateResume(newResumeTitle)
  }
  return (

    <Card className='w-full max-w-2xl mx-auto'>;
      <CardContent className='py-8'>;
        <div className='text-center'>;
          <h2 className='text-2xl font-bold mb-2'>Create New Resume</h2>;
          <p className='text-muted-foreground mb-6'>;
            Give your resume a title to get started;
          </p>;

          <div className='flex gap-2 max-w-md mx-auto'>;

            <input
              type='text'
              placeholder="Resume Title (e.g. 'AI Engineer Resume')"
              className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm'
              value={newResumeTitle}
              onChange={e => setNewResumeTitle(e.target.value)}
            />
            <Button
              onClick={handleSubmit}


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

      <CardContent className='py-8'>;

        <div className='text-center'>;
</div>
          <h2 className='text-2xl font-bold mb-2'>Create New Resume</h2>;
          <p className='text-muted-foreground mb-6'>;
</p>
          </p>;
          <div className='flex gap-2 max-w-md mx-auto'>;
            <input;
              type='text)
              placeholder="Resume Title (e.g. 'AI Engineer Resume')"""
              className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm
              value={newResumeTitle}
              onChange={e => setNewResumeTitle(e.target.value)}
</input>
            <Button;
              onClick={handleSubmit}


import { useState } from "react";""
import { Card, CardContent } from "@/components/ui/card";""
import { CreateResumeFormProps } from "./types";"
  onCancel;
  isLoading;)
}: CreateResumeFormProps) => {
"
    <Card className="w-full max-w-2xl mx-auto">"
      <CardContent className="py-8">"
        <div className="text-center">"
</div>"
          <h2 className="text-2xl font-bold mb-2">Create New Resume</h2>""
          <p className="text-muted-foreground mb-6">Give your resume a title to get started</p>""
          <div className="flex gap-2 max-w-md mx-auto">"
              {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
</Loader2>
            ;
          </div>;
          <Button variant='ghost' onClick={onCancel} className='mt-4'>            Cancel;

    <Card className="w-full max-w-2xl mx-auto">;"
      <CardContent className="py-8">;"
        <div className="text-center">;"
          <h2 className="text-2xl font-bold mb-2">Create New Resume</h2>;""
          <p className="text-muted-foreground mb-6">Give your resume a title to get started</p>;""
          <div className="flex gap-2 max-w-md mx-auto">;"
            <input;"
              type="text"""
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm""
pr-12325




          <Button
            variant="ghost"
            onClick = {onCancel,}
            className="mt-4"
          >

            Cancel



              disabled={!newResumeTitle.trim() |isLoading}            >
              {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
              Create
            </Button>
          </div>

          <Button variant='ghost' onClick={onCancel} className='mt-4'>
            Cancel
origin/cursor/automate-test-improve-and-merge-code-2533
          </Button>
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
);
};
w-full max-w-2xl mx-auto"> <CardContent className=" py-8"> <div className=" text-center"> <h2 className=" text-2xl font-bold mb-2">Create New Resume</h2> <p className=" text-muted-foreground mb-6">Give your resume a title to get started</p> <div className=" flex gap-2 max-w-md mx-auto" > <input /> <Button onClick={;
  handleSubmit ;
}disabled= {;
  !newResumeTitle.trim () || isLoading ;
}> Create </Button> </div> <Button > Cancel </Button> </div> </CardContent> </Card>) ;
};
'"
origin/cursor/automate-test-improve-and-merge-code-2533
          <Button;"
            variant="ghost""
            onClick={onCancel}"
            className="mt-4""
          >
          
      
    
              disabled={!newResumeTitle && newResumeTitle.trim() || isLoading}>;
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}"
            onClick = {onCancel,}"
            className="mt-4">;"

    ;"
w-full max-w-2xl mx-auto"> <CardContent className=" py-8"> <div className=" text-center"> <h2 className=" text-2xl font-bold mb-2">Create New Resume</h2> <p className=" text-muted-foreground mb-6">Give your resume a title to get started</p> <div className=" flex gap-2 max-w-md mx-auto" > <input /> <ButtononClick={"

}> Create  </div> <Button > Cancel  </div>  ) ;"
    <Card className='w - full max - w-2xl mx - auto'>;

      <CardContent className='py - 8'>;

        <div className='text - center'>;
          <h2 className='text - 2xl font - bold mb - 2'>Create New Resume</h2>;
          <p className='text - muted - foreground mb - 6'>;
          <div className='flex gap - 2 max - w-md mx - auto'>;
              type='text';
              placeholder="Resume Title (e.g. 'AI Engineer Resume')";""
              className='flex h - 10 w - full rounded - md border border - input bg - background px - 3 py - 2 text - sm';
              on_change={e => setNewResumeTitle (e.target.value)}
              on_click={handle_submit}
              disabled={!newResumeTitle.trim () || is_loading}            >;

              {is_loading && <Loader2 className='mr - 2 h - 4 w - 4 animate - spin' />}
          <Button variant='ghost' on_click={on_cancel} className='mt - 4'>            Cancel;

    <Card className="w - full max - w-2xl mx - auto">;"
      <CardContent className="py - 8">;"
        <div className="text - center">;"
          <h2 className="text - 2xl font - bold mb - 2">Create New Resume</h2>;""
          <p className="text - muted - foreground mb - 6">Give your resume a title to get started</p>;""
          <div className="flex gap - 2 max - w-md mx - auto">;"
              type="text";""
              className="flex h - 10 w - full rounded - md border border - input bg - background px - 3 py - 2 text - sm";"
              on_change={(e) => setNewResumeTitle (e.target.value)}
              disabled={!newResumeTitle.trim () || is_loading}
            >;
              {is_loading && <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" />}"
            variant="ghost";"
            on_click = {on_cancel, }"
            className="mt - 4";"

    );"
w - full max - w-2xl mx - auto"> <CardContent className=" py - 8"> <div className=" text - center"> <h2 className=" text - 2xl font - bold mb - 2">Create New Resume</h2> <p className=" text - muted - foreground mb - 6">Give your resume a title to get started</p> <div className=" flex gap - 2 max - w-md mx - auto" > <input /> <Button on_click={"

}> Create  </div> <Button > Cancel  </div>  );"
pr-12325
