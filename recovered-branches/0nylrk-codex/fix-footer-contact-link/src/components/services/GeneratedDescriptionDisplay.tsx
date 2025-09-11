<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {useToast} from "@/hooks/use-toast";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle, CardFooter} from "@/components/ui/card";
import {Textarea} from "@/components/ui/textarea";
import {Check, Pencil} from "lucide-react";

<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState } from "react",
import { useToast } from "@/hooks/use-toast",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card",
import { Textarea } from "@/components/ui/textarea",
import { Check, Pencil } from "lucide-react",




<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react";

import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Card
  CardContent
  CardHeader
  CardTitle
  CardFooter
} from "@/components/ui/card";
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
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface GeneratedDescriptionDisplayProps {
  description: string;
  onSave: (editedDescription: string) => void
}

<<<<<<< HEAD
<<<<<<< HEAD
export function GeneratedDescriptionDisplay({
  description
  onSave
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description);

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
}: GeneratedDescriptionDisplayProps) {
  const { toast } = useToast(),
  const [isEditing, setIsEditing] = useState(false),
  const [editedDescription, setEditedDescription] = useState(description),

  const handleSave = () => {
    onSave(editedDescription),
    setIsEditing(false),
    toast({
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======

interface GeneratedDescriptionDisplayProps {;
  description: string,;
  onSave: (editedDescription: string) => void;
}

export function GeneratedDescriptionDisplay(): any ({ ;
  description, ;
  onSave ;
}: GeneratedDescriptionDisplayProps) {;

  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description);
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export function GeneratedDescriptionDisplay({ 
  description, 
  onSave 

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const handleSave = () => {;
    onSave(editedDescription);
    setIsEditing(false);


<<<<<<< HEAD
    })
  },


<<<<<<< HEAD
title: "Description Saved"
      description: "Your edited description has been saved."
});
  }
=======
  const handleSave = () => {
    onSave(editedDescription),
    setIsEditing(false),
    toast({
      title: "Description Saved"
      description: "Your edited description has been saved."
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    });
  }
    })
  },
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  return (
    <Card className="border border-zion-blue-light bg-zion-blue-dark">
      <CardHeader>
        <CardTitle className="text-white flex items-center justify-between">
          Generated Description
          <Button
            variant="outline"
            size="sm"
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
<<<<<<< HEAD
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description);
  const handleSave = () => {;
    onSave(editedDescription);
    setIsEditing(false);
    toast({;
      title: "Description Saved",;
      description: "Your edited description has been saved.";
    });
  };
  return (

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React, { useState } from "react",;
import { useToast } from "@/hooks/use-toast",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card",;
import { Textarea } from "@/components/ui/textarea",;
import { Check, Pencil } from "lucide-react",;
<<<<<<< HEAD
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
=======
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

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    toast({;
      title: "Description Saved",;
      description: "Your edited description has been saved.";
    });
  };

  return (
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <Card className="border border-zion-blue-light bg-zion-blue-dark">;
      <CardHeader>;
        <CardTitle className="text-white flex items-center justify-between">;
          Generated Description;
<<<<<<< HEAD
<<<<<<< HEAD
          <Button ;
            variant="outline" ;
            size="sm" ;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <Button
            variant="outline" 
            size="sm" 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            onClick={() => setIsEditing(!isEditing)}
            className="border-zion-blue-light text-zion-slate-light hover:text-white";
          >;
            {isEditing ? (;
              <>;
                <Check className="h-4 w-4 mr-1" />;
                Done;
              </>;
<<<<<<< HEAD
<<<<<<< HEAD
            ) :(;
=======
            ) : (;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            ) : (;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <>;
                <Pencil className="h-4 w-4 mr-1" />;
                Edit;
              </>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            )}
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </Button>;
        </CardTitle>;
      </CardHeader>;
      <CardContent>;
<<<<<<< HEAD
<<<<<<< HEAD
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
            onClick={handleSave}
            className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white";
          >;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      </CardContent>;
      {isEditing && (;
        <CardFooter>;

          <Button
            onClick={handleSave}
            className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white">;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            Save Changes;
          </Button>;
        </CardFooter>;
      )}
<<<<<<< HEAD
<<<<<<< HEAD
    </Card>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    </Card>;
  );
}

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
