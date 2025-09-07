<<<<<<< HEAD
=======
<<<<<<< HEAD
import React, { useState } from "react";
=======
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";

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
=======

<<<<<<< HEAD
import React, { useState } from "react";
>>>>>>> merged-prs-20250907-203621

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
<<<<<<< HEAD

import { Textarea } from "@/components/ui/textarea";
import { Check, Pencil } from "lucide-react";
interface GeneratedDescriptionDisplayProps {
  description: string,
  onSave: (editedDescription: string) => void
}

export function GeneratedDescriptionDisplay({ 
  description, 
  onSave 
}: GeneratedDescriptionDisplayProps) {
  const { toast } = useToast($2);
  const [isEditing, setIsEditing] = useState($2);
  const [editedDescription, setEditedDescription] = useState($2);
  const handleSave = () => {
    onSave($2);
    setIsEditing($2);
    toast({
      title: "Description Saved"
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
                Done
              </>
            ) : (
              <>
                <Pencil className="h-4 w-4 mr-1" />
                Edit
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
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface GeneratedDescriptionDisplayProps {

  description: string;
<<<<<<< HEAD
  onSave: (editedDescription: string) => void;
}

export function GeneratedDescriptionDisplay(): any ({ ;
  description, ;
  onSave ;

}: GeneratedDescriptionDisplayProps) {;

  description,
  onSave,
}: GeneratedDescriptionDisplayProps) {};
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description);
=======
  onSave: (editedDescription: string) => void
}

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


export function GeneratedDescriptionDisplay({ 
  description, 
  onSave 

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  const handleSave = () => {;
    onSave(editedDescription);
    setIsEditing(false);
    toast({"
      title: "Description Saved","
      description: "Your edited description has been saved.",
    });
  };

<<<<<<< HEAD
  return ("
=======

    })
  },


<<<<<<< HEAD
title: "Description Saved"
      description: "Your edited description has been saved."
});
  }
    });
  }
    })
  },
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    <Card className="border border-zion-blue-light bg-zion-blue-dark">
      <CardHeader>"
        <CardTitle className="text-white flex items-center justify-between">
          Generated Description;
          <Button"
            variant="outline""
            size="sm"
<<<<<<< HEAD
            onClick={() => setIsEditing(!isEditing)}"
=======
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            onClick={() => setIsEditing(!isEditing)}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
>>>>>>> merged-prs-20250907-203621
              </>
<<<<<<< HEAD
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
=======
import React, { useState } from "react",;
import { useToast } from "@/hooks/use-toast",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card",;
import { Textarea } from "@/components/ui/textarea",;
import { Check, Pencil } from "lucide-react",;
interface GeneratedDescriptionDisplayProps {;
  description: string,;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
          <Textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            className="bg-zion-blue border border-zion-blue-light text-white min-h-[300px] resize-none"
          />
        ) : (
=======
          <Textarea;
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}"
            className="bg-zion-blue border border-zion-blue-light text-white min-h-[300px] resize-none"
          />
        ) : ("
>>>>>>> merged-prs-20250907-203621
          <div className="bg-zion-blue p-4 rounded-md text-white min-h-[300px] whitespace-pre-wrap">
            {editedDescription}
          </div>
        )}
      </CardContent>
      {isEditing && (
        <CardFooter>
<<<<<<< HEAD
          <Button
            onClick={handleSave}
=======
          <Button;
            onClick={handleSave}"
>>>>>>> merged-prs-20250907-203621
            className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white"
          >
            Save Changes;
          </Button>
        </CardFooter>
      )}
    </Card>
<<<<<<< HEAD
  )
=======
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

    toast({;
      title: "Description Saved",
      description: "Your edited description has been saved.";
    });
  };

  return (
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    <Card className="border border-zion-blue-light bg-zion-blue-dark">;
      title: "Description Saved",,
  description: "Your edited description has been saved.";
    })
};

  return (    <Card className="border border-zion-blue-light bg-zion-blue-dark">;
      <CardHeader>;
        <CardTitle className="text-white flex items-center justify-between">;
          Generated Description;
<<<<<<< HEAD
          <Button ;
            variant="outline" ;
            size="sm" ;
=======
          <Button
            variant="outline" 
            size="sm" 
<<<<<<< HEAD
<<<<<<< HEAD
=======

  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description);
>>>>>>> origin/chore/fix-lint-and-merge

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            onClick={() => setIsEditing(!isEditing)}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            className="border-zion-blue-light text-zion-slate-light hover:text-white";
          >;
            {isEditing ? (;
              <>;"
                <Check className="h-4 w-4 mr-1" />;
                Done;
              </>;
<<<<<<< HEAD

=======
<<<<<<< HEAD
            ) :(;
=======
            ) : (;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              <>;

                <Pencil className="h-4 w-4 mr-1" />;
                Edit;
              </>;
<<<<<<< HEAD
=======

            )}

import { use_toast  } from '@/hooks / use - toast';

import { Button  } from '@/components / ui / button';
<<<<<<< HEAD
=======

>>>>>>> origin/chore/fix-lint-and-merge
  Card,
  CardContent,
  CardHeader,
  CardTitle,

import { Check, Pencil  } from './lucide-react';
interface GeneratedDescriptionDisplayProps {}
  description: string;

  const { toast } = use_toast ();
  const [is_editing, setIsEditing] = useState (false);
  const [edited_description, setEditedDescription] = useState (description);
;

      description: "Your edited description has been saved.",
    });
  }
;
<<<<<<< HEAD

=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          </Button>;
        </CardTitle>;
      </CardHeader>;
      <CardContent>;
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

<<<<<<< HEAD
=======
      </CardContent>;
      {isEditing && (;
        <CardFooter>;

          <Button
            onClick={handleSave}
            className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white">;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            Save Changes;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          </Button>;
        </CardFooter>;
      )}
<<<<<<< HEAD
    </Card>;
=======

<<<<<<< HEAD
=======
    </Card>;
  );
}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        {is_editing ? (
          <Textarea;
            value={edited_description}
            on_change={(e) => setEditedDescription (e.target.value)}
            className="bg - zion - blue border border - zion - blue - light text - white min - h-[300px] resize-none";
          />) : (

            {edited_description}
          </div>)}
      </CardContent>;
      {is_editing && (
        <CardFooter>;
          <Button;

          >;
            Save Changes;
          </Button>;
        </CardFooter>)}
    </Card>);
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
}
=======
}
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
