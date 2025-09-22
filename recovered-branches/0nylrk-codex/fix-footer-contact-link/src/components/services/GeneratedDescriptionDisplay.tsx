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

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useState } from "react";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
>>>>>>> main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
interface GeneratedDescriptionDisplayProps {
=======
interface GeneratedDescriptionDisplayProps {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  description: string;
  onSave: (editedDescription: string) => void;
}

<<<<<<< HEAD
<<<<<<< HEAD
export function GeneratedDescriptionDisplay({
  description
  onSave

export function GeneratedDescriptionDisplay({ 
  description, 
  onSave
export function GeneratedDescriptionDisplay(): any ({ ;
  description, ;
  onSave ;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}: GeneratedDescriptionDisplayProps) {;
const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description);
<<<<<<< HEAD
}: GeneratedDescriptionDisplayProps) {
  const { toast } = useToast(),
  const [isEditing, setIsEditing] = useState(false),
  const [editedDescription, setEditedDescription] = useState(description),
  description,
  onSave,
}: GeneratedDescriptionDisplayProps) {};
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
export function GeneratedDescriptionDisplay({
  description,
  onSave,
}: GeneratedDescriptionDisplayProps) {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description);

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const handleSave = () => {;
    onSave(editedDescription);
    setIsEditing(false);
    toast({"
      title: "Description Saved","
      description: "Your edited description has been saved.",
    });
  };
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

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
  Card,
  CardContent,
  CardHeader,

  CardTitle,
  CardFooter,"
} from "@/components/ui/card";""
import { Textarea } from "@/components/ui/textarea";""
import { Check, Pencil } from "lucide-react";"
interface GeneratedDescriptionDisplayProps {
  // TODO: Implement
}
  description: string;,
  onSave: (editedDescription: string) => void;
}

export function GeneratedDescriptionDisplay({
  description,
  onSave,)
}: GeneratedDescriptionDisplayProps) {

  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description);

  const handleSave = (
    onSave(editedDescription);
    setIsEditing(false);

    toast({"
      title: "Description Saved",""
      description: "Your edited description has been saved.",")
    });
  };

  return ("
    <Card className="border border-zion-blue-light bg-zion-blue-dark">"
</Card>
      <CardHeader>
</CardHeader>"
        <CardTitle className="text-white flex items-center justify-between">"
</CardTitle>
          <Button;"
            variant="outline"""
            size="sm"")
            onClick={() => setIsEditing(!isEditing)}
</Button>
              <>"
                <Check className="h-4 w-4 mr-1" />"
</Check>
              </>
            ) : (
              <>"
                <Pencil className="h-4 w-4 mr-1" />"
</Pencil>
              </>)

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
    toast({;
      title: "Description Saved",;
      description: "Your edited description has been saved.";
    });
  };
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  return (
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
    <Card className="border border-zion-blue-light bg-zion-blue-dark">;
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
<<<<<<< HEAD
=======
<Button ;
            variant="outline" ;
            size="sm" ;
  CardFooter,"
} from "@/components/ui/card";""
import { Textarea } from "@/components/ui/textarea";""
import { Check, Pencil } from "lucide-react";"
interface GeneratedDescriptionDisplayProps {
  // TODO: Implement
  description: string;,
  onSave: (editedDescription: string) => void;

export function GeneratedDescriptionDisplay({
  description,
  onSave,)
}: GeneratedDescriptionDisplayProps) {
pr-12325
</CardContent>
          <Textarea;
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
</Textarea>"
          <div className="bg-zion-blue p-4 rounded-md text-white min-h-[300px] whitespace-pre-wrap">"
</div>

          </div>
      </CardContent>

        <CardFooter>
</CardFooter>
          <Button;
            onClick={handleSave}"
            className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white""
          >
</Button>
          </Button>
        </CardFooter>
    </Card>"
    <Card className="border border-zion-blue-light bg-zion-blue-dark">;"
</Card>
      <CardHeader>;
</CardHeader>"
        <CardTitle className="text-white flex items-center justify-between">;"
</CardTitle>
          <Button;"
            variant="outline"""
            size="sm""
          <Button ;"
            variant="outline" ;""
            size="sm" ;"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description);

onClick={() => setIsEditing(!isEditing)}
            className="border-zion-blue-light text-zion-slate-light hover:text-white";
          >;
            {isEditing ? (;
              <>;"
                <Check className="h-4 w-4 mr-1" />;
                Done;
              </>;
) : (;            ) :(;
              <>;
=======

            ) :(;

              <>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                <Pencil className="h-4 w-4 mr-1" />;
                Edit;
              </>;

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
            )}
<<<<<<< HEAD
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
          </Button>;
        </CardFooter>;
      )}

=======
  on_save: (edited_description: string) => void;            Save Changes;
          </Button>;
        </CardFooter>;
      )}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        {is_editing ? (
          <Textarea;
            value={edited_description}
            on_change={(e) => setEditedDescription (e.target.value)}
            className="bg - zion - blue border border - zion - blue - light text - white min - h-[300px] resize-none";
          />) : (
<div className="bg - zion - blue p - 4 rounded - md text - white min - h-[300px] whitespace - pre-wrap">;
=======
          <div className="bg - zion - blue p - 4 rounded - md text - white min - h-[300px] whitespace - pre-wrap">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            {edited_description}
          </div>)}
      </CardContent>;
      {is_editing && (
        <CardFooter>;
          <Button;
on_click={handle_save}
<<<<<<< HEAD
            className="w - full bg - gradient - to - r from - zion - cyan to - zion - cyan - dark hover:from - zion - cyan - light hover:to - zion - cyan text-white";
=======
            className="w - full bg - gradient - to - r from - zion - cyan to - zion - cyan - dark hover:from - zion - cyan - light hover:to - zion - cyan text-white";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          >;
            Save Changes;
          </Button>;
        </CardFooter>)}
    </Card>);
}
'"
