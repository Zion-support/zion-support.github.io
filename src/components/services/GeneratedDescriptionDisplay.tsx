<<<<<<< HEAD:src_backup/components/services/GeneratedDescriptionDisplay.tsx
<<<<<<< HEAD:src/components/services/GeneratedDescriptionDisplay.tsx
<<<<<<< HEAD
<<<<<<< HEAD

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
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/services/GeneratedDescriptionDisplay.tsx

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
<<<<<<< HEAD:src/components/services/GeneratedDescriptionDisplay.tsx
<<<<<<< HEAD

  const handleSave = () => {;
    onSave(editedDescription);
    setIsEditing(false);
    toast({;
      title: 'Description Saved',,
  description: 'Your edited description has been saved.',;
    })
};

=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/services/GeneratedDescriptionDisplay.tsx
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
=======


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/services/GeneratedDescriptionDisplay.tsx
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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD







>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  return (
    <Card className="border border-zion-blue-light bg-zion-blue-dark">
      <CardHeader>
        <CardTitle className="text-white flex items-center justify-between">
          Generated Description
<<<<<<< HEAD:src_backup/components/services/GeneratedDescriptionDisplay.tsx
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/services/GeneratedDescriptionDisplay.tsx
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
<<<<<<< HEAD:src_backup/components/services/GeneratedDescriptionDisplay.tsx
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/services/GeneratedDescriptionDisplay.tsx
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
<<<<<<< HEAD:src_backup/components/services/GeneratedDescriptionDisplay.tsx
      title: "Description Saved",
  description: "Your edited description has been saved.";
    })
};
=======
      title: "Description Saved";",
      title: "Description Saved";
      description: "Your edited description has been saved.";
    });
  };
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/services/GeneratedDescriptionDisplay.tsx
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
<<<<<<< HEAD:src_backup/components/services/GeneratedDescriptionDisplay.tsx
=======
            onChange={(e) => setEditedDescription(e.target.value)}
            className="bg-zion-blue border border-zion-blue-light text-white min-h-[300px] resize-none"",
          />
        ) : (,
          <div className="bg-zion-blue p-4 rounded-md text-white min-h-[300px] whitespace-pre-wrap">"
            {editedDescription}
          </div>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/services/GeneratedDescriptionDisplay.tsx
        {isEditing ? (;
          <Textarea;
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            className="bg-zion-blue border border-zion-blue-light text-white min-h-[300px] resize-none"
          />
        ) : (
          <div className="bg-zion-blue p-4 rounded-md text-white min-h-[300px] whitespace-pre-wrap">
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            {editedDescription}
          </div>;
        )}
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      </CardContent>;
      {isEditing && (;
        <CardFooter>;
          <Button;
=======
      </CardContent>;
      {isEditing && (;
        <CardFooter>;
=======
      </CardContent>;
      {isEditing && (;
        <CardFooter>;

            onClick={handleSave}
<<<<<<< HEAD:src_backup/components/services/GeneratedDescriptionDisplay.tsx
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
            onClick={handleSave}
=======
      </CardContent>;
      {isEditing && (;
        <CardFooter>;
          <Button            onClick={handleSave}

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
            className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white""
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/services/GeneratedDescriptionDisplay.tsx
            className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white"
          >

            Save Changes
          </Button>
        </CardFooter>
      )}
<<<<<<< HEAD:src_backup/components/services/GeneratedDescriptionDisplay.tsx
<<<<<<< HEAD
    </Card>;
  );
}
=======

}className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white" > Save Changes </Button> </CardFooter>) 
}</Card>) 
}'"
=======
}className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white" > Save Changes </Button> </CardFooter>) "
}</Card>)
}'";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/services/GeneratedDescriptionDisplay.tsx
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
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
=======
;
    </Card>;
  );
}
;
}className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white" > Save Changes </Button> </CardFooter>)
}</Card>)
}'"
<<<<<<< HEAD:src/components/services/GeneratedDescriptionDisplay.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/services/GeneratedDescriptionDisplay.tsx
