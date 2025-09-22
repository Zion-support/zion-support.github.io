:src_backup/components/services/GeneratedDescriptionDisplay.tsx

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
origin/cursor/automate-test-improve-and-merge-code-2533

interface GeneratedDescriptionDisplayProps {,
  description: string;
  onSave: (editedDescription: string) => void;interface GeneratedDescriptionDisplayProps {,
  description: string,;
  onSave: (editedDescription: string,) => void;
}

export function GeneratedDescriptionDisplay(): any ({;
  description,;
  onSave,;
}: GeneratedDescriptionDisplayProps) {;
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description);
:src/components/services/GeneratedDescriptionDisplay.tsx
const handleSave = () => {;
    onSave(editedDescription);
    setIsEditing(false);
    toast({;
      title: 'Description Saved',,
  description: 'Your edited description has been saved.',;
    })
};
  const handleSave = null;
import React, { useState } from 'react'
import { useToast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'
import {
  Card
  CardContent
  CardHeader
  CardTitle
  CardFooter
} from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Check, Pencil } from 'lucide-react'
interface GeneratedDescriptionDisplayProps {
  description: string
  onSave: (editedDescription: string) => void;interface GeneratedDescriptionDisplayProps {
  description: string
  onSave: (editedDescription: string,) => void
}
export function GeneratedDescriptionDisplay({
  description
  onSave
}: GeneratedDescriptionDisplayProps) {
  const { toast } = useToast()
  const [isEditing, setIsEditing] = useState(false)
  const [editedDescription, setEditedDescription] = useState(description)
  const handleSave = () => {
    onSave(editedDescription)
    setIsEditing(false)
    toast({
      title: 'Description Saved'
      description: 'Your edited description has been saved.'
    })
  }
origin/cursor/automate-test-improve-and-merge-code-2533
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
:src_backup/components/services/GeneratedDescriptionDisplay.tsx

          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setIsEditing(!isEditing)}
            className="border-zion-blue-light text-zion-slate-light hover:text-white"
          >
            {isEditing ? (
              <>
                <Check className="h-4 w-4 mr-1" />
                Done
              </>
            ) : (
              <>
                <Pencil className="h-4 w-4 mr-1" />"
                <Pencil className="h-4 w-4 mr-1" />
                Edit
              </>
:src_backup/components/services/GeneratedDescriptionDisplay.tsx

import React, { useState } from "react",;
import { useToast } from "@/hooks/use-toast",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card",;
import { Textarea } from "@/components/ui/textarea",;
import { Check, Pencil } from 'lucide-react';
interface GeneratedDescriptionDisplayProps {,
  description: string,;
  onSave: (editedDescription:,  string) => void;
  onSave: (editedDescription: string) => void;
}
;
export function GeneratedDescriptionDisplay({;
  description,;
  onSave;
}:,  GeneratedDescriptionDisplayProps) {;
  const { toast } = useToast(),;,
  const [isEditing, setIsEditing] = useState(false),;,
}: GeneratedDescriptionDisplayProps) {;
  const { toast } = useToast(),;
  const [isEditing, setIsEditing] = useState(false),;
  const [editedDescription, setEditedDescription] = useState(description),;
  const handleSave = () => {;
    onSave(editedDescription),;
    setIsEditing(false),;
    toast({;
:src_backup/components/services/GeneratedDescriptionDisplay.tsx
      title: "Description Saved",
  description: "Your edited description has been saved.";
    })
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
                <Check className='h-4 w-4 mr-1' />;
                Done;
              </>;
            ) : (;
              <>;
                <Pencil className='h-4 w-4 mr-1' />;
                Edit;
              </>;
            )}
          </Button>;
        </CardTitle>;
      </CardHeader>;
      <CardContent>;
:src_backup/components/services/GeneratedDescriptionDisplay.tsx
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
        )}

      </CardContent>;
      {isEditing && (;
        <CardFooter>;
          <Button;
      </CardContent>;
      {isEditing && (;
        <CardFooter>;
      </CardContent>;
      {isEditing && (;
        <CardFooter>;

            onClick={handleSave}
:src_backup/components/services/GeneratedDescriptionDisplay.tsx

            onClick={handleSave}
            className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white""
            className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white"
          >

            Save Changes
          </Button>
        </CardFooter>
      )}
:src_backup/components/services/GeneratedDescriptionDisplay.tsx
</Card>;
  );
}
};
    </Card>;
  );

  isEditing ? (<> <Check className="h-4 w-4 mr-1" /> Done </>) : (<> <Pencil className="h-4 w-4 mr-1" /> Edit </>) ;
}</Button> </CardTitle> </CardHeader> <CardContent> {;
  isEditing ? (<Textareavalue= {
  editedDescription 
}</div>) ;
}</CardContent> {;
  isEditing && (<CardFooter> <ButtononClick={
  handleSave "
}className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white"> Save Changes </Button> </CardFooter>) ;
}</Card>) ;
}'";
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
  is_editing ? (<> <Check className="h - 4 w - 4 mr-1" /> Done </>) : (<> <Pencil className="h - 4 w - 4 mr-1" /> Edit </>);
}</Button> </CardTitle> </CardHeader> <CardContent> {
  is_editing ? (<Textarea value= {
  edited_description;
}</div>);
}</CardContent> {
  is_editing && (<CardFooter> <Button on_click={
  handle_save ";
}className="w - full bg - gradient - to - r from - zion - cyan to - zion - cyan - dark hover:from - zion - cyan - light hover:to - zion - cyan text-white" > Save Changes </Button> </CardFooter>);
}</Card>);
}'";
}
;
