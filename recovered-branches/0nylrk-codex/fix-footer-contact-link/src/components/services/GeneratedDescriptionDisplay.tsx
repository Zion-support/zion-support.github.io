<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React, { useState } from "react";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import {useToast} from "@/hooks/use-toast";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle, CardFooter} from "@/components/ui/card";
import {Textarea} from "@/components/ui/textarea";
import {Check, Pencil} from "lucide-react";
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

import { useToast } from "@/hooks/use-toast",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card",
import { Textarea } from "@/components/ui/textarea",
import { Check, Pencil } from "lucide-react",

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
=======
import React, { useState } from "react";"
import {useToast} from "@/hooks/use-toast";"
import {Button} from "@/components/ui/button";"
import {Card, CardContent, CardHeader, CardTitle, CardFooter} from "@/components/ui/card";"
import {Textarea} from "@/components/ui/textarea";"
import {Check, Pencil} from "lucide-react";

"
import React, { useState } from "react","
import { useToast } from "@/hooks/use-toast","
import { Button } from "@/components/ui/button","
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card","
import { Textarea } from "@/components/ui/textarea","
import { Check, Pencil } from "lucide-react",




";
import React, { useState } from "react";"
import { useToast } from "@/hooks/use-toast";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Button } from "@/components/ui/button";
import {}
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,";
} from "@/components/ui/card";"
import { Textarea } from "@/components/ui/textarea";"
import { Check, Pencil } from "lucide-react";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
interface GeneratedDescriptionDisplayProps {
=======

interface GeneratedDescriptionDisplayProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  description: string;
  onSave: (editedDescription: string) => void;
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export function GeneratedDescriptionDisplay({
  description
  onSave

export function GeneratedDescriptionDisplay({ 
  description, 
  onSave 
=======
<<<<<<< HEAD
<<<<<<< HEAD

interface GeneratedDescriptionDisplayProps {;
  description: string,;
  onSave: (editedDescription: string) => void;
}

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export function GeneratedDescriptionDisplay(): any ({ ;
  description, ;
  onSave ;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}: GeneratedDescriptionDisplayProps) {;
<<<<<<< HEAD

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
=======
export function GeneratedDescriptionDisplay({
=======
export function GeneratedDescriptionDisplay({}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  description,
  onSave,
}: GeneratedDescriptionDisplayProps) {};
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const handleSave = () => {;
    onSave(editedDescription);
    setIsEditing(false);
    toast({"
      title: "Description Saved","
      description: "Your edited description has been saved.",
    })
};

  return ("
    <Card className="border border-zion-blue-light bg-zion-blue-dark">
      <CardHeader>"
        <CardTitle className="text-white flex items-center justify-between">
          Generated Description;
          <Button"
            variant="outline""
            size="sm"
            onClick={() => setIsEditing(!isEditing)}"
            className="border-zion-blue-light text-zion-slate-light hover:text-white"
          >
            {isEditing ? (
              <>"
                <Check className="h-4 w-4 mr-1" />
                Done;
              </>
            ) : (
              <>"
                <Pencil className="h-4 w-4 mr-1" />
                Edit;
              </>
            )}
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isEditing ? (
          <Textarea;
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}"
            className="bg-zion-blue border border-zion-blue-light text-white min-h-[300px] resize-none"
          />
        ) : ("
          <div className="bg-zion-blue p-4 rounded-md text-white min-h-[300px] whitespace-pre-wrap">
            {editedDescription}
          </div>
        )}
      </CardContent>
      {isEditing && (
        <CardFooter>
          <Button;
            onClick={handleSave}"
            className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white"
          >
            Save Changes;
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
;
export function GeneratedDescriptionDisplay() { return null; }
  const { toast } = useToast(),;
  const [isEditing, setIsEditing] = useState(false),;
  const [editedDescription, setEditedDescription] = useState(description),;
  const handleSave = () => {;
    onSave(editedDescription),;
    setIsEditing(false),;

<<<<<<< HEAD
      title: "Description Saved",,
  description: "Your edited description has been saved.";
    })
};

  return (    <Card className="border border-zion-blue-light bg-zion-blue-dark">;
      <CardHeader>;
        <CardTitle className="text-white flex items-center justify-between">;
          Generated Description;
          <Button
            variant="outline" 
            size="sm" 
=======

    toast({;"
      title: "Description Saved",;"
      description: "Your edited description has been saved.";
    });
  };
"
    <Card className="border border-zion-blue-light bg-zion-blue-dark">;
      <CardHeader>;"
        <CardTitle className="text-white flex items-center justify-between">;
          Generated Description;


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description);

<<<<<<< HEAD
            onClick={() => setIsEditing(!isEditing)}
=======

            onClick={() => setIsEditing(!isEditing)}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            className="border-zion-blue-light text-zion-slate-light hover:text-white";
          >;
            {isEditing ? (;
              <>;"
                <Check className="h-4 w-4 mr-1" />;
                Done;
              </>;
<<<<<<< HEAD
            ) : (;            ) :(;
              <>;
=======


            ) :(;

              <>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                <Pencil className="h-4 w-4 mr-1" />;
                Edit;
              </>;
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
            )}
<<<<<<< HEAD
<<<<<<< HEAD
=======
            )}
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { use_toast  } from '@/hooks / use - toast';
=======

import React, { useState } from './react';'
import { use_toast  } from '@/hooks / use - toast';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Button  } from '@/components / ui / button';
import {}
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,';
} from '@/components / ui / card';'
import { Textarea  } from '@/components / ui / textarea';'
import { Check, Pencil  } from './lucide-react';
interface GeneratedDescriptionDisplayProps {}
  description: string;
<<<<<<< HEAD
<<<<<<< HEAD
  on_save: (edited_description: string) => void;



}
export /**;
 * GeneratedDescriptionDisplay - Function description;
 */
function GeneratedDescriptionDisplay() {}
  const { toast } = use_toast ();
  const [is_editing, setIsEditing] = useState (false);
  const [edited_description, setEditedDescription] = useState (description);
;
  const handle_save = () =>: any {}
    on_save (edited_description);
    setIsEditing (false);
    toast ({"
      title: "Description Saved","
      description: "Your edited description has been saved.",
    });
  }
;
  return ("
    <Card className="border border - zion - blue - light bg - zion - blue - dark">;
      <CardHeader>;"
        <CardTitle className="text - white flex items - center justify - between">;
          Generated Description;
          <Button;"
            variant="outline";"
            size="sm";
            on_click={() => setIsEditing (!is_editing)}"
            className="border - zion - blue - light text - zion - slate - light hover:text - white";
          >;
            {is_editing ? (
              <>;"
                <Check className="h - 4 w - 4 mr - 1" />;
                Done;
              </>) : (
              <>;"
                <Pencil className="h - 4 w - 4 mr - 1" />;
                Edit;
              </>)}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          </Button>;
        </CardTitle>;
      </CardHeader>;
      <CardContent>;



            Save Changes;
=======
  on_save: (edited_description: string) => void;            Save Changes;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  on_save: (edited_description: string) => void;            Save Changes;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          </Button>;
        </CardFooter>;
      )}
<<<<<<< HEAD
        {is_editing ? (
          <Textarea;
            value={edited_description}
            on_change={(e) => setEditedDescription (e.target.value)}
            className="bg - zion - blue border border - zion - blue - light text - white min - h-[300px] resize-none";
          />) : (
          <div className="bg - zion - blue p - 4 rounded - md text - white min - h-[300px] whitespace - pre-wrap">;
=======

    </Card>;
  );
}




        {is_editing ? (
          <Textarea;
            value={edited_description}
            on_change={(e) => setEditedDescription (e.target.value)}"
            className="bg - zion - blue border border - zion - blue - light text - white min - h-[300px] resize - none";
          />) : ("
          <div className="bg - zion - blue p - 4 rounded - md text - white min - h-[300px] whitespace - pre - wrap">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            {edited_description}
          </div>)}
      </CardContent>;
      {is_editing && (
        <CardFooter>;
          <Button;
<<<<<<< HEAD
            on_click={handle_save}
            className="w - full bg - gradient - to - r from - zion - cyan to - zion - cyan - dark hover:from - zion - cyan - light hover:to - zion - cyan text-white";
=======
            on_click={handle_save}"
            className="w - full bg - gradient - to - r from - zion - cyan to - zion - cyan - dark hover:from - zion - cyan - light hover:to - zion - cyan text - white";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          >;
            Save Changes;
          </Button>;
        </CardFooter>)}
    </Card>);
}
'"