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

<<<<<<< HEAD:src-disabled/components/services/GeneratedDescriptionDisplay.tsx
interface GeneratedDescriptionDisplayProps {,
=======
<<<<<<< HEAD
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


import React, { useState } from "react",
import { useToast } from "@/hooks/use-toast",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card",
import { Textarea } from "@/components/ui/textarea",
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface GeneratedDescriptionDisplayProps {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/services/GeneratedDescriptionDisplay.tsx
  description: string;
  onSave: (editedDescription: string) => void;interface GeneratedDescriptionDisplayProps {,
  description: string,;
  onSave: (editedDescription: string,) => void;
}
<<<<<<< HEAD
import { Check, Pencil } from 'lucide-react'
interface GeneratedDescriptionDisplayProps {;
  description: string;
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
=======

export function GeneratedDescriptionDisplay(): any ({;
  description,;
  onSave,;
}: GeneratedDescriptionDisplayProps) {;

<<<<<<< HEAD:src-disabled/components/services/GeneratedDescriptionDisplay.tsx
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
<<<<<<< HEAD
:src/components/services/GeneratedDescriptionDisplay.tsx
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card",
import { Textarea } from "@/components/ui/textarea",
=======
import { Check, Pencil } from 'lucide-react'
>>>>>>> origin/chore/fix-lint-and-merge
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
    <Card className="border border-zion-blue-light bg-zion-blue-dark">
      <CardHeader>
        <CardTitle className="text-white flex items-center justify-between">
          Generated Description

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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/services/GeneratedDescriptionDisplay.tsx


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

<<<<<<< HEAD:src-disabled/components/services/GeneratedDescriptionDisplay.tsx
    onSave(editedDescription),
    setIsEditing(false),
    toast({
      title: "Description Saved",
      description: "Your edited description has been saved."
    })
  },
=======





>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/services/GeneratedDescriptionDisplay.tsx

  return (
    <Card className="border border-zion-blue-light bg-zion-blue-dark">
      <CardHeader>
        <CardTitle className="text-white flex items-center justify-between">
          Generated Description
<<<<<<< HEAD
=======
<<<<<<< HEAD
          <Button
            variant='outline'
            size='sm'
            onClick={() => setIsEditing(!isEditing)}
            className='border-zion-blue-light text-zion-slate-light hover:text-white'          >
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React, { useState } from "react",;
import { useToast } from "@/hooks/use-toast",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card",;
import { Textarea } from "@/components/ui/textarea",;
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
          </Button>;
        </CardTitle>;
      </CardHeader>;
      <CardContent>;
<<<<<<< HEAD
        {isEditing ? (;
          <Textarea;
            value={editedDescription}
=======

<<<<<<< HEAD:src-disabled/components/services/GeneratedDescriptionDisplay.tsx
        {isEditing ? (;
          <Textarea;
            value={editedDescription}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/services/GeneratedDescriptionDisplay.tsx
            onChange={(e) => setEditedDescription(e.target.value)}
            className="bg-zion-blue border border-zion-blue-light text-white min-h-[300px] resize-none"
          />
        ) : (
          <div className="bg-zion-blue p-4 rounded-md text-white min-h-[300px] whitespace-pre-wrap">
<<<<<<< HEAD
            {editedDescription}
          </div>
        )}
            {editedDescription}
          </div>
        )}
<<<<<<< HEAD
=======
      </CardContent>
      {isEditing && (
        <CardFooter>
          <Button
            onClick={handleSave}
            className='w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white'          >
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

            {editedDescription}
          </div>
        )}

<<<<<<< HEAD:src-disabled/components/services/GeneratedDescriptionDisplay.tsx
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/services/GeneratedDescriptionDisplay.tsx
      </CardContent>;
      {isEditing && (;
        <CardFooter>;
          <Button;
<<<<<<< HEAD:src-disabled/components/services/GeneratedDescriptionDisplay.tsx
=======
            onClick={handleSave}
<<<<<<< HEAD
            className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white"
          >
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/services/GeneratedDescriptionDisplay.tsx

            className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white"
          >

<<<<<<< HEAD:src-disabled/components/services/GeneratedDescriptionDisplay.tsx
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/services/GeneratedDescriptionDisplay.tsx
            Save Changes
          </Button>
        </CardFooter>
      )}
<<<<<<< HEAD
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

<<<<<<< HEAD:src-disabled/components/services/GeneratedDescriptionDisplay.tsx
};
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white" > Save Changes </Button> </CardFooter>) 
}</Card>) 
}'";
};
<<<<<<< HEAD
    </Card>;
  );
}
;
;
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/services/GeneratedDescriptionDisplay.tsx
    </Card>;
  );
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
<<<<<<< HEAD:src-disabled/components/services/GeneratedDescriptionDisplay.tsx
}
=======
}
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/services/GeneratedDescriptionDisplay.tsx
