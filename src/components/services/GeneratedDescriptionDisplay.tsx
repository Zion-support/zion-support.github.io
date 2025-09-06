import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import {;
  Card,;
  CardContent,;
  CardHeader,;
  CardTitle,;
  CardFooter,;
} from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Check, Pencil } from 'lucide-react';

<<<<<<< HEAD

import React, { useState } from "react",
import { useToast } from "@/hooks/use-toast",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card",
import { Textarea } from "@/components/ui/textarea",

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Check, Pencil } from 'lucide-react'
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-756f
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
interface GeneratedDescriptionDisplayProps {;
  description: string;
  onSave: (editedDescription: string) => void;interface GeneratedDescriptionDisplayProps {;
  description: string,;
  onSave: (editedDescription: string,) => void;
}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

export function GeneratedDescriptionDisplay(): any ({;
  description,;
  onSave,;
}: GeneratedDescriptionDisplayProps) {;
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description);

  const handleSave = () => {;
    onSave(editedDescription);
    setIsEditing(false);
    toast({;
      title: 'Description Saved',;
      description: 'Your edited description has been saved.',;
    });
  };

  return (








<<<<<<< HEAD

  const handleSave = () => {
    onSave(editedDescription),
    setIsEditing(false),
    toast({
      title: "Description Saved",
      description: "Your edited description has been saved."
    })
  },


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-756f
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  return (
    <Card className="border border-zion-blue-light bg-zion-blue-dark">
      <CardHeader>
        <CardTitle className="text-white flex items-center justify-between">
          Generated Description
          <Button
            variant='outline'
            size='sm'
            onClick={() => setIsEditing(!isEditing)}
            className='border-zion-blue-light text-zion-slate-light hover:text-white'          >
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setIsEditing(!isEditing)}
            className="border-zion-blue-light text-zion-slate-light hover:text-white"
          >

<<<<<<< HEAD

<<<<<<< HEAD



=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
            {isEditing ? (
              <>
                <Check className="h-4 w-4 mr-1" />
                Done
              </>
            ) : (
              <>
                <Pencil className="h-4 w-4 mr-1" />
                Edit
              </>
            )}
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isEditing ? (
          <Textarea
            value={editedDescription}
            onChange={e => setEditedDescription(e.target.value)}
            className='bg-zion-blue border border-zion-blue-light text-white min-h-[300px] resize-none'          />
        ) : (
          <div className='bg-zion-blue p-4 rounded-md text-white min-h-[300px] whitespace-pre-wrap'>
import React, { useState } from "react",;
import { useToast } from "@/hooks/use-toast",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card",;
import { Textarea } from "@/components/ui/textarea",;
import { Check, Pencil } from 'lucide-react';
interface GeneratedDescriptionDisplayProps {;
  description: string,;
  onSave: (editedDescription: string) => void;
}
;
export function GeneratedDescriptionDisplay({;
  description,;
  onSave;
}: GeneratedDescriptionDisplayProps) {;
  const { toast } = useToast(),;
  const [isEditing, setIsEditing] = useState(false),;
  const [editedDescription, setEditedDescription] = useState(description),;
  const handleSave = () => {;
    onSave(editedDescription),;
    setIsEditing(false),;
    toast({;
      title: "Description Saved";
      description: "Your edited description has been saved.";
    });
  };
  return (;
    <Card className="border border-zion-blue-light bg-zion-blue-dark">;
      <CardHeader>;
        <CardTitle className="text-white flex items-center justify-between">;
          Generated Description;
          <Button;
            variant="outline";
            size="sm";
            onClick={() => setIsEditing(!isEditing)}
            className="border-zion-blue-light text-zion-slate-light hover:text-white";
          >;
            {isEditing ? (;
              <>;
                <Check className="h-4 w-4 mr-1" />;
                Done;
              </>;
            ) : (;
              <>;
                <Pencil className="h-4 w-4 mr-1" />;
                Edit;
              </>;
            )}
    <Card className='border border - zion - blue - light bg - zion - blue - dark'>;
      <CardHeader>;
        <CardTitle className='text - white flex items - center justify - between'>;
          Generated Description;
          <Button;
            variant='outline';
            size='sm';
            on_click={() => setIsEditing (!is_editing)}
            className='border - zion - blue - light text - zion - slate - light hover:text - white'          >;
            {is_editing ? (
              <>;
                <Check className='h - 4 w - 4 mr - 1' />;
                Done;
              </>) : (
              <>;
                <Pencil className='h - 4 w - 4 mr - 1' />;
                Edit;
              </>)}
          </Button>;
        </CardTitle>;
      </CardHeader>;
      <CardContent>;

            onChange={(e) => setEditedDescription(e.target.value)}
            className="bg-zion-blue border border-zion-blue-light text-white min-h-[300px] resize-none"
          />
        ) : (
          <div className="bg-zion-blue p-4 rounded-md text-white min-h-[300px] whitespace-pre-wrap">
<<<<<<< HEAD


<<<<<<< HEAD




=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
            {editedDescription}
          </div>
        )}
      </CardContent>
      {isEditing && (
        <CardFooter>
          <Button
            onClick={handleSave}
            className='w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white'          >
      </CardContent>;
      {isEditing && (;
        <CardFooter>;
          <Button;
            onClick={handleSave}

            className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white"
          >


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
            Save Changes
          </Button>
        </CardFooter>
      )}
<<<<<<< HEAD


    </Card>
  )
  isEditing ? (<> <Check className="h-4 w-4 mr-1" /> Done </>) : (<> <Pencil className="h-4 w-4 mr-1" /> Edit </>)
}</Button> </CardTitle> </CardHeader> <CardContent> {
  isEditing ? (<Textarea value= {
  editedDescription
}</div>)
}</CardContent> {
  isEditing && (<CardFooter> <Button onClick={
  handleSave "
}className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white" > Save Changes </Button> </CardFooter>)
}</Card>)
}'"
}


=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
}className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white" > Save Changes </Button> </CardFooter>) 
}</Card>) 
}'";
};
<<<<<<< HEAD


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

    </Card>;
  );
}
<<<<<<< HEAD
=======




        {is_editing ? (
          <Textarea;
            value={edited_description}
            on_change={e => setEditedDescription (e.target.value)}
            className='bg - zion - blue border border - zion - blue - light text - white min - h-[300px] resize - none'          />) : (
          <div className='bg - zion - blue p - 4 rounded - md text - white min - h-[300px] whitespace - pre - wrap'>;
            {edited_description}
          </div>)}
      </CardContent>;
      {is_editing && (
        <CardFooter>;
          <Button;
            on_click={handle_save}
            className='w - full bg - gradient - to - r from - zion - cyan to - zion - cyan - dark hover:from - zion - cyan - light hover:to - zion - cyan text - white'          >;
            Save Changes;
          </Button>;
        </CardFooter>)}
    </Card>);
  is_editing ? (<> <Check className="h - 4 w - 4 mr - 1" /> Done </>) : (<> <Pencil className="h - 4 w - 4 mr - 1" /> Edit </>);
}</Button> </CardTitle> </CardHeader> <CardContent> {
  is_editing ? (<Textarea value= {
  edited_description;
}</div>);
}</CardContent> {
  is_editing && (<CardFooter> <Button on_click={
  handle_save ";
}className="w - full bg - gradient - to - r from - zion - cyan to - zion - cyan - dark hover:from - zion - cyan - light hover:to - zion - cyan text - white" > Save Changes </Button> </CardFooter>);
}</Card>);
}'";
}
;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
