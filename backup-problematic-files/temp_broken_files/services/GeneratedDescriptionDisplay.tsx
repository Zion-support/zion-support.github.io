
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/GeneratedDescriptionDisplay.tsx
import React, { useState } from "react",;
import { useToast } from "@/hooks/use-toast",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card",;
import { Textarea } from "@/components/ui/textarea",;
import { Check, Pencil } from "lucide-react",;
;
interface GeneratedDescriptionDisplayProps {;
  description:string,;
=======
import React, { useState } from "react";""
import { useToast } from "@/hooks/use-toast";""
import { Button } from "@/components/ui/button";""
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";""
import { Textarea } from "@/components/ui/textarea";""
import { Check, Pencil } from 'lucide-react';
;
interface GeneratedDescriptionDisplayProps {,
  description: string;,;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  onSave:(editedDescription:string) => void;
}
export function GeneratedDescriptionDisplay({ ;
  description, ;
  onSave ;)
} GeneratedDescriptionDisplayProps) {;
  const { toast } = useToast(),;
  const [isEditing, setIsEditing] = useState(false),;
  const [editedDescription, setEditedDescription] = useState(description),;
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
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/GeneratedDescriptionDisplay.tsx
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    <Card className="border border-zion-blue-light bg-zion-blue-dark">;
      <CardHeader>;
        <CardTitle className="text-white flex items-center justify-between">;
          Generated Description;

            onClick={() => setIsEditing(!isEditing)}

              <>;"
                <Check className="h-4 w-4 mr-1" />;"

              </>;

              <>;
                <Pencil className="h-4 w-4 mr-1" />;
                Edit;
              </>;
            )}
</Button>;
        </CardTitle>;
      </CardHeader>;
      <CardContent>;

          <Textarea;
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          <div className="bg-zion-blue p-4 rounded-md text-white min-h-[300px] whitespace-pre-wrap">;"
</div>
          </div>;
        <CardFooter>;
          <Button ;
            onClick={handleSave}
            className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white";
          >;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/services/GeneratedDescriptionDisplay.tsx
            Save Changes;
          </Button>;
        </CardFooter>;
      )}
    </Card>;
),;}
 import {;
  {;
  {;
  Check, Pencil ;
}from 'lucide-react' interface GeneratedDescriptionDisplayProps {;
  description: string;
onSave: (editedDescription: string) => void ;
}export function GeneratedDescriptionDisplay ({;
  description;
onSave ;
}: GeneratedDescriptionDisplayProps) {;
  const { ;
  toast ;
 } = useToast ();
const [isEditing, setIsEditing] = useState (false);
const [editedDescription, setEditedDescription] = useState (description);
const handleSave = () => {;
  onSave (editedDescription);
setIsEditing (false);
toast ({;
  ;
};
:temp_broken_files/services/GeneratedDescriptionDisplay.tsx
pr-12325

          <Button ;
            onClick={handleSave}"
            className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white";"
          >;

    ;"
  isEditing ? (<> <Check className="h-4 w-4 mr-1" /> Done </>) : (<> <Pencil className="h-4 w-4 mr-1" /> Edit </>) ;"

}   <CardContent> {;

  isEditing ? (<Textarea value= {;
  editedDescription ;)
}</div>) ;

} {;"
  isEditing && (<CardFooter> <Button onClick={;"  handleSave ";"}className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white" > Save Changes  ) ;""
}) ;"}'""
  isEditing && (<CardFooter> <Button onClick={;
handleSave ";
}className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white" > Save Changes </Button> </CardFooter>) ;
}</Card>) ;
}'"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/services/GeneratedDescriptionDisplay.tsx
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/services/GeneratedDescriptionDisplay.tsx
