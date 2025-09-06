<<<<<<< HEAD
=======
import React, { useState } from "react";
import {useToast} from "@/hooks/use-toast";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle, CardFooter} from "@/components/ui/card";
import {Textarea} from "@/components/ui/textarea";
import {Check, Pencil} from "lucide-react";

<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import React, { useState } from "react",
import { useToast } from "@/hooks/use-toast",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card",
import { Textarea } from "@/components/ui/textarea",
import { Check, Pencil } from "lucide-react",

<<<<<<< HEAD



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Check, Pencil } from "lucide-react";
<<<<<<< HEAD
>>>>>>> main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
interface GeneratedDescriptionDisplayProps {
  description: string;
  onSave: (editedDescription: string) => void;
}

export function GeneratedDescriptionDisplay({
  description,
  onSave,
}: GeneratedDescriptionDisplayProps) {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description);

<<<<<<< HEAD
  const handleSave = () => {
    onSave(editedDescription),
    setIsEditing(false),
    toast({


=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

  const handleSave = () => {;
    onSave(editedDescription);
    setIsEditing(false);
    toast({
      title: "Description Saved",
      description: "Your edited description has been saved.",
    });
  };
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

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
=======
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description);
  const handleSave = () => {;
    onSave(editedDescription);
    setIsEditing(false);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    toast({;
      title: "Description Saved",;
      description: "Your edited description has been saved.";
    });
  };
<<<<<<< HEAD

  return (
=======
  return (

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    <Card className="border border-zion-blue-light bg-zion-blue-dark">;
      <CardHeader>;
        <CardTitle className="text-white flex items-center justify-between">;
          Generated Description;
<<<<<<< HEAD
          <Button
            variant="outline" 
            size="sm" 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
          <Button ;
            variant="outline" ;
            size="sm" ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description);

<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
            ) : (;
=======
            ) :(;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
            ) :(;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              <>;
                <Pencil className="h-4 w-4 mr-1" />;
                Edit;
              </>;
            )}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
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
            onClick={handleSave}
            className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white";
          >;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            Save Changes;
          </Button>;
        </CardFooter>;
      )}
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    </Card>;
  );
}

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
