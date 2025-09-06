<<<<<<< HEAD
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
interface GeneratedDescriptionDisplayProps {;
  description: string;,
  onSave: (editedDescription:,  string) => void;interface GeneratedDescriptionDisplayProps {;,
  description: string,;
  onSave: (editedDescription: string,) => void;
}
export function GeneratedDescriptionDisplay(): any ({;
  description,;
  onSave,;
}:,  GeneratedDescriptionDisplayProps) {;
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);,
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
  return (
    <Card className="border border-zion-blue-light bg-zion-blue-dark">"
      <CardHeader>
        <CardTitle className="text-white flex items-center justify-between">"
          Generated Description
          <Button
            variant="outline" "
            size="sm" "
            onClick={() => setIsEditing(!isEditing)}
            className="border-zion-blue-light text-zion-slate-light hover:text-white""
          >
            {isEditing ? (
              <>
                <Check className="h-4 w-4 mr-1" />"
=======

import React, { useState } from "react",
import { useToast } from "@/hooks/use-toast",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card",
import { Textarea } from "@/components/ui/textarea",
import { Check, Pencil } from 'lucide-react'

interface GeneratedDescriptionDisplayProps {
  description: string,
  onSave: (editedDescription: string) => void
}

export function GeneratedDescriptionDisplay({ 
  description, 
  onSave 
}: GeneratedDescriptionDisplayProps) {
  const { toast } = useToast(),
  const [isEditing, setIsEditing] = useState(false),
  const [editedDescription, setEditedDescription] = useState(description),

  const handleSave = () => {
    onSave(editedDescription),
    setIsEditing(false),
    toast({
      title: "Description Saved",
      description: "Your edited description has been saved."
    })
  },

  return (
    <Card className="border border-zion-blue-light bg-zion-blue-dark">
      <CardHeader>
        <CardTitle className="text-white flex items-center justify-between">
          Generated Description
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setIsEditing(!isEditing)}
            className="border-zion-blue-light text-zion-slate-light hover:text-white"
          >
            {isEditing ? (
              <>
                <Check className="h-4 w-4 mr-1" />
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
                Done
              </>
            ) : (
              <>
<<<<<<< HEAD
                <Pencil className="h-4 w-4 mr-1" />"
=======
                <Pencil className="h-4 w-4 mr-1" />
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
                Edit
              </>
import React, { useState } from "react",;
import { useToast } from "@/hooks/use-toast",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card",;
import { Textarea } from "@/components/ui/textarea",;
import { Check, Pencil } from 'lucide-react';
interface GeneratedDescriptionDisplayProps {;
  description: string,;
<<<<<<< HEAD
  onSave: (editedDescription:,  string) => void;
=======
  onSave: (editedDescription: string) => void;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
}
;
export function GeneratedDescriptionDisplay({;
  description,;
  onSave;
<<<<<<< HEAD
}:,  GeneratedDescriptionDisplayProps) {;
  const { toast } = useToast(),;,
  const [isEditing, setIsEditing] = useState(false),;,
=======
}: GeneratedDescriptionDisplayProps) {;
  const { toast } = useToast(),;
  const [isEditing, setIsEditing] = useState(false),;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
  const [editedDescription, setEditedDescription] = useState(description),;
  const handleSave = () => {;
    onSave(editedDescription),;
    setIsEditing(false),;
    toast({;
<<<<<<< HEAD
      title: "Description Saved";",
=======
      title: "Description Saved";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
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
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
          </Button>;
        </CardTitle>;
      </CardHeader>;
      <CardContent>;
<<<<<<< HEAD
            onChange={(e) => setEditedDescription(e.target.value)}
            className="bg-zion-blue border border-zion-blue-light text-white min-h-[300px] resize-none"",
          />
        ) : (,
          <div className="bg-zion-blue p-4 rounded-md text-white min-h-[300px] whitespace-pre-wrap">"
            {editedDescription}
          </div>
=======
        {isEditing ? (;
          <Textarea;
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            className="bg-zion-blue border border-zion-blue-light text-white min-h-[300px] resize-none"
          />
        ) : (
          <div className="bg-zion-blue p-4 rounded-md text-white min-h-[300px] whitespace-pre-wrap">
            {editedDescription}
          </div>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
        )}
      </CardContent>;
      {isEditing && (;
        <CardFooter>;
          <Button;
            onClick={handleSave}
<<<<<<< HEAD
            className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white""
=======
            className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white"
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
          >
            Save Changes
          </Button>
        </CardFooter>
      )}
<<<<<<< HEAD
}className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white" > Save Changes </Button> </CardFooter>) "
}</Card>)
}'";
};
    </Card>;
  );
}
        {is_editing ? (
          <Textarea;
            value={edited_description}
            on_change={e => setEditedDescription (e.target.value)}
            className='bg - zion - blue border border - zion - blue - light text - white min - h-[300px] resize - none'          />) : (',
          <div className='bg - zion - blue p - 4 rounded - md text - white min - h-[300px] whitespace - pre - wrap'>;
            {edited_description}
          </div>)}
      </CardContent>;
      {is_editing && (
        <CardFooter>;
          <Button;
            on_click={handle_save}
            className='w - full bg - gradient - to - r from - zion - cyan to - zion - cyan - dark hover:from - zion - cyan - light hover:to - zion - cyan text - white'          >;',
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
=======
    </Card>;
  );
}
;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
