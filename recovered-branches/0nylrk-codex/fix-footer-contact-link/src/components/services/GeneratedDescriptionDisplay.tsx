<<<<<<< HEAD

<<<<<<< HEAD
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
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import {useToast} from "@/hooks/use-toast";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle, CardFooter} from "@/components/ui/card";
import {Textarea} from "@/components/ui/textarea";
import {Check, Pencil} from "lucide-react";
<<<<<<< HEAD
=======

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import React, { useState } from "react",
import { useToast } from "@/hooks/use-toast",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card",
import { Textarea } from "@/components/ui/textarea",
import { Check, Pencil } from "lucide-react",

<<<<<<< HEAD
import { Textarea } from "@/components/ui/textarea";
import { Check, Pencil } from "lucide-react";
=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
interface GeneratedDescriptionDisplayProps {
  description: string;
  onSave: (editedDescription: string) => void
}

<<<<<<< HEAD
export function GeneratedDescriptionDisplay({
  description
  onSave

export function GeneratedDescriptionDisplay({ 
  description, 
  onSave 
=======

interface GeneratedDescriptionDisplayProps {;
  description: string,;
  onSave: (editedDescription: string) => void;
}

export function GeneratedDescriptionDisplay(): any ({ ;
  description, ;
  onSave ;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}: GeneratedDescriptionDisplayProps) {;

  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description);
<<<<<<< HEAD
}: GeneratedDescriptionDisplayProps) {
  const { toast } = useToast(),
  const [isEditing, setIsEditing] = useState(false),
  const [editedDescription, setEditedDescription] = useState(description),
=======
=======

export function GeneratedDescriptionDisplay({ 
  description, 
  onSave 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

  const handleSave = () => {;
    onSave(editedDescription);
    setIsEditing(false);

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

  const handleSave = () => {
    onSave(editedDescription),
    setIsEditing(false),
    toast({
      title: "Description Saved"
      description: "Your edited description has been saved."
    });
  }
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

=======
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

    toast({;
      title: "Description Saved",;
      description: "Your edited description has been saved.";
    });
  };

  return (
    <Card className="border border-zion-blue-light bg-zion-blue-dark">;
      <CardHeader>;
        <CardTitle className="text-white flex items-center justify-between">;
          Generated Description;
          <Button
            variant="outline" 
            size="sm" 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description);

>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
          </Button>;
        </CardTitle>;
      </CardHeader>;
      <CardContent>;
          <Button
            onClick={handleSave}
            className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white">;
            Save Changes;
          </Button>;
        </CardFooter>;
      )}
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
