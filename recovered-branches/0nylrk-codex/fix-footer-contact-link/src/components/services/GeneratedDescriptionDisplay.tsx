<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/GeneratedDescriptionDisplay.tsx


<<<<<<< HEAD
<<<<<<< HEAD
=======
import {useToast} from "@/hooks/use-toast";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle, CardFooter} from "@/components/ui/card";
import {Textarea} from "@/components/ui/textarea";
import {Check, Pencil} from "lucide-react";

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import React, { useState } from "react",
import { useToast } from "@/hooks/use-toast",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card",
import { Textarea } from "@/components/ui/textarea",
import { Check, Pencil } from "lucide-react",

<<<<<<< HEAD
=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
import React, { useState } from "react";

=======
import React, { useState } from "react";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Card
  CardContent
  CardHeader
  CardTitle
  CardFooter
} from "@/components/ui/card";
<<<<<<< HEAD

import { Textarea } from "@/components/ui/textarea";
import { Check, Pencil } from "lucide-react";

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
import {useToast} from "@/hooks/use-toast";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle, CardFooter} from "@/components/ui/card";
import {Textarea} from "@/components/ui/textarea";
import {Check, Pencil} from "lucide-react";
import React, { useState } from "react",
import { useToast } from "@/hooks/use-toast",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card",
import { Textarea } from "@/components/ui/textarea",
import { Check, Pencil } from "lucide-react",

import { Textarea } from "@/components/ui/textarea";
import { Check, Pencil } from "lucide-react";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface GeneratedDescriptionDisplayProps {
  description: string;
  onSave: (editedDescription: string) => void
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
export function GeneratedDescriptionDisplay({
  description
  onSave
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description);

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
export function GeneratedDescriptionDisplay({
  description
  onSave

export function GeneratedDescriptionDisplay({ 
  description, 
  onSave 
}: GeneratedDescriptionDisplayProps) {;
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}: GeneratedDescriptionDisplayProps) {
  const { toast } = useToast(),
  const [isEditing, setIsEditing] = useState(false),
  const [editedDescription, setEditedDescription] = useState(description),

  const handleSave = () => {
    onSave(editedDescription),
    setIsEditing(false),
    toast({
<<<<<<< HEAD
      title: "Description Saved"
      description: "Your edited description has been saved."
<<<<<<< HEAD
=======

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/GeneratedDescriptionDisplay.tsx
interface GeneratedDescriptionDisplayProps {;
  description: string,;
  onSave: (editedDescription: string) => void;
}
export function GeneratedDescriptionDisplay(): any ({ ;
  description, ;
  onSave ;
}: GeneratedDescriptionDisplayProps) {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/GeneratedDescriptionDisplay.tsx

  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description);
=======

export function GeneratedDescriptionDisplay({ 
  description, 
  onSave 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

  const handleSave = () => {;
    onSave(editedDescription);
    setIsEditing(false);


    })
  },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
title: "Description Saved"
      description: "Your edited description has been saved."
});
  }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
    });
  }
    })
  },
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

  return (
    <Card className="border border-zion-blue-light bg-zion-blue-dark">
      <CardHeader>
        <CardTitle className="text-white flex items-center justify-between">
          Generated Description
          <Button
            variant="outline"
            size="sm"
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
                <Pencil className="h-4 w-4 mr-1" />
                Edit
              </>
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { useState } from "react",;
import { useToast } from "@/hooks/use-toast",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card",;
import { Textarea } from "@/components/ui/textarea",;
import { Check, Pencil } from "lucide-react",;
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

========
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description);
  const handleSave = () => {;
    onSave(editedDescription);
    setIsEditing(false);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/GeneratedDescriptionDisplay.tsx
    toast({;
      title: "Description Saved",;
      description: "Your edited description has been saved.";
    });
  };
  return (
=======

import React, { useState } from "react",;
import { useToast } from "@/hooks/use-toast",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card",;
import { Textarea } from "@/components/ui/textarea",;
import { Check, Pencil } from "lucide-react",;
;
interface GeneratedDescriptionDisplayProps {;
  description:string,;
  onSave:(editedDescription:string) => void;
}
;
export function GeneratedDescriptionDisplay({ ;
  description, ;
  onSave ;
} GeneratedDescriptionDisplayProps) {;
  const { toast } = useToast(),;
  const [isEditing, setIsEditing] = useState(false),;
  const [editedDescription, setEditedDescription] = useState(description),;
;
  const handleSave = () => {;
    onSave(editedDescription),;
    setIsEditing(false),;
    toast({;
      title:"Description Saved",;
      description:"Your edited description has been saved.";
    }),;
  },;
;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <Card className="border border-zion-blue-light bg-zion-blue-dark">;
      <CardHeader>;
        <CardTitle className="text-white flex items-center justify-between">;
          Generated Description;
<<<<<<< HEAD
          <Button
            variant="outline" 
            size="sm" 
=======
          <Button ;
            variant="outline" ;
            size="sm" ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            onClick={() => setIsEditing(!isEditing)}
            className="border-zion-blue-light text-zion-slate-light hover:text-white";
          >;
            {isEditing ? (;
              <>;
                <Check className="h-4 w-4 mr-1" />;
                Done;
              </>;
<<<<<<< HEAD
            ) : (;
=======
            ) :(;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <>;
                <Pencil className="h-4 w-4 mr-1" />;
                Edit;
              </>;
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            )}
<<<<<<< HEAD
import React, { useState } from './react';
import { use_toast  } from '@/hooks / use - toast';
import { Button  } from '@/components / ui / button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components / ui / card';
import { Textarea  } from '@/components / ui / textarea';
import { Check, Pencil  } from './lucide-react';
interface GeneratedDescriptionDisplayProps {
  description: string;
  on_save: (edited_description: string) => void;
}
export /**
 * GeneratedDescriptionDisplay - Function description
 */
function GeneratedDescriptionDisplay() {
  const { toast } = use_toast ();
  const [is_editing, setIsEditing] = useState (false);
  const [edited_description, setEditedDescription] = useState (description);
;
  const handle_save = () =>: any {
    on_save (edited_description);
    setIsEditing (false);
    toast ({
      title: "Description Saved",
      description: "Your edited description has been saved.",
    });
  }
;
  return (
    <Card className="border border - zion - blue - light bg - zion - blue - dark">;
      <CardHeader>;
        <CardTitle className="text - white flex items - center justify - between">;
          Generated Description;
          <Button;
            variant="outline";
            size="sm";
            on_click={() => setIsEditing (!is_editing)}
            className="border - zion - blue - light text - zion - slate - light hover:text - white";
          >;
            {is_editing ? (
              <>;
                <Check className="h - 4 w - 4 mr - 1" />;
                Done;
              </>) : (
              <>;
                <Pencil className="h - 4 w - 4 mr - 1" />;
                Edit;
              </>)}
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          </Button>;
        </CardTitle>;
      </CardHeader>;
      <CardContent>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/GeneratedDescriptionDisplay.tsx

      </CardContent>;
      {isEditing && (;
        <CardFooter>;

          <Button
========
<<<<<<< HEAD
      </CardContent>;
      {isEditing && (;
        <CardFooter>;
          <Button
            onClick={handleSave}
            className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white">;
=======
        {isEditing ? (;
          <Textarea;
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            className="bg-zion-blue border border-zion-blue-light text-white min-h-[300px] resize-none";
          />;
        ) :(;
          <div className="bg-zion-blue p-4 rounded-md text-white min-h-[300px] whitespace-pre-wrap">;
            {editedDescription}
          </div>;
        )}
      </CardContent>;
      {isEditing && (;
        <CardFooter>;
          <Button ;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/GeneratedDescriptionDisplay.tsx
            onClick={handleSave}
            className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white";
          >;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            Save Changes;
          </Button>;
        </CardFooter>;
      )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/GeneratedDescriptionDisplay.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/GeneratedDescriptionDisplay.tsx
    </Card>;
<<<<<<< HEAD
  );
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/GeneratedDescriptionDisplay.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/GeneratedDescriptionDisplay.tsx
        {is_editing ? (
          <Textarea;
            value={edited_description}
            on_change={(e) => setEditedDescription (e.target.value)}
            className="bg - zion - blue border border - zion - blue - light text - white min - h-[300px] resize - none";
          />) : (
          <div className="bg - zion - blue p - 4 rounded - md text - white min - h-[300px] whitespace - pre - wrap">;
            {edited_description}
          </div>)}
      </CardContent>;
      {is_editing && (
        <CardFooter>;
          <Button;
            on_click={handle_save}
            className="w - full bg - gradient - to - r from - zion - cyan to - zion - cyan - dark hover:from - zion - cyan - light hover:to - zion - cyan text - white";
          >;
            Save Changes;
          </Button>;
        </CardFooter>)}
    </Card>);
}
=======
  ),;}
 interface GeneratedDescriptionDisplayProps {
  description: string;
onSave: (editedDescription: string) => void 
}export function GeneratedDescriptionDisplay ({
  description;
onSave 
}: GeneratedDescriptionDisplayProps) {
  const {
  toast 
}= useToast ();
const [isEditing, setIsEditing] = useState (false);
const [editedDescription, setEditedDescription] = useState (description);
const handleSave = () => {
  onSave (editedDescription);
setIsEditing (false);
toast ({
  
};
  isEditing ? (<> <Check className="h-4 w-4 mr-1" /> Done </>) : (<> <Pencil className="h-4 w-4 mr-1" /> Edit </>) 
}</Button> </CardTitle> </CardHeader> <CardContent> {
  isEditing ? (<Textarea value= {
  editedDescription 
}</div>) 
}</CardContent> {
  isEditing && (<CardFooter> <Button onClick= {
  handleSave 
}className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white" > Save Changes </Button> </CardFooter>) 
}</Card>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            )}
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isEditing ? (
          <Textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            className="bg-zion-blue border border-zion-blue-light text-white min-h-[300px] resize-none"
          />
        ) : (
          <div className="bg-zion-blue p-4 rounded-md text-white min-h-[300px] whitespace-pre-wrap">
            {editedDescription}
          </div>
        )}
      </CardContent>
      {isEditing && (
        <CardFooter>
          <Button
            onClick={handleSave}
            className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white"
          >
            Save Changes
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
