import React, { useState } from "react",;
import { useToast } from "@/hooks/use-toast",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card",;
import { Textarea } from "@/components/ui/textarea",;
<<<<<<< HEAD

;
interface GeneratedDescriptionDisplayProps {;

  description:string,;

  onSave:(editedDescription:string) => void;
}
export function GeneratedDescriptionDisplay({ ;
  description, ;
  onSave ;)
=======
<<<<<<< HEAD
import { Check, Pencil } from 'lucide-react';
;
interface GeneratedDescriptionDisplayProps {;
  description:string,;
  onSave:(editedDescription:string) => void;
}
;
export function GeneratedDescriptionDisplay({ ;
  description, ;
  onSave ;
=======

;
interface GeneratedDescriptionDisplayProps {;

  description:string,;

  onSave:(editedDescription:string) => void;
}
export function GeneratedDescriptionDisplay({ ;
  description, ;
  onSave ;)
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
} GeneratedDescriptionDisplayProps) {;
  const { toast } = useToast(),;
  const [isEditing, setIsEditing] = useState(false),;
  const [editedDescription, setEditedDescription] = useState(description),;
  const handleSave = () => {;
    onSave(editedDescription),;
    setIsEditing(false),;
    toast({;
<<<<<<< HEAD

=======
<<<<<<< HEAD
      title:"Description Saved",;
      description:"Your edited description has been saved.";
=======

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    }),;
  },;
;
  return (;
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    <Card className="border border-zion-blue-light bg-zion-blue-dark">;
      <CardHeader>;
        <CardTitle className="text-white flex items-center justify-between">;
          Generated Description;
<<<<<<< HEAD

            onClick={() => setIsEditing(!isEditing)}
=======
<<<<<<< HEAD
          <Button ;
            variant="outline" ;
            size="sm" ;
            onClick={() => setIsEditing(!isEditing)}
            className="border-zion-blue-light text-zion-slate-light hover:text-white";
          >;
            {isEditing ? (;
              <>;
                <Check className="h-4 w-4 mr-1" />;
                Done;
=======

            onClick={() => setIsEditing(!isEditing)}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

              <>;"
                <Check className="h-4 w-4 mr-1" />;"

<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
          <div className="bg-zion-blue p-4 rounded-md text-white min-h-[300px] whitespace-pre-wrap">;"
</div>
=======
<<<<<<< HEAD
            className="bg-zion-blue border border-zion-blue-light text-white min-h-[300px] resize-none";
          />;
        ) :(;
          <div className="bg-zion-blue p-4 rounded-md text-white min-h-[300px] whitespace-pre-wrap">;
            {editedDescription}
=======
          <div className="bg-zion-blue p-4 rounded-md text-white min-h-[300px] whitespace-pre-wrap">;"
</div>
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          </div>;
        <CardFooter>;
          <Button ;
            onClick={handleSave}
            className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white";
          >;

            Save Changes;
          </Button>;
        </CardFooter>;
      )}
    </Card>;
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  ),;}
 import {;
  {;
  {;
  Check, Pencil ;
<<<<<<< HEAD

=======
<<<<<<< HEAD
}from 'lucide-react' interface GeneratedDescriptionDisplayProps {;
=======

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
<<<<<<< HEAD
  }
=======
const handleSave = () => {;
>>>>>>> origin/chore/fix-lint-and-merge
  onSave (editedDescription);
setIsEditing (false);

};
:temp_broken_files/services/GeneratedDescriptionDisplay.tsx
pr-12325
=======
const handleSave = () => {;
  onSave (editedDescription);
setIsEditing (false);
toast ({;
  ;
};

  isEditing ? (<> <Check className="h-4 w-4 mr-1" /> Done </>) : (<> <Pencil className="h-4 w-4 mr-1" /> Edit </>) ;
}</Button> </CardTitle> </CardHeader> <CardContent> {;
  isEditing ? (<Textarea value= {;
  editedDescription ;
}</div>) ;
}</CardContent> {;
  isEditing && (<CardFooter> <Button onClick={;"  handleSave ";"}className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white" > Save Changes </Button> </CardFooter>) ;
}</Card>) ;"}'"
=======
<<<<<<< HEAD
  }
=======
const handleSave = () => {;
>>>>>>> origin/chore/fix-lint-and-merge
  onSave (editedDescription);
setIsEditing (false);

};
<<<<<<< HEAD
:temp_broken_files/services/GeneratedDescriptionDisplay.tsx
pr-12325
=======
<<<<<<< HEAD
:temp_broken_files/services/GeneratedDescriptionDisplay.tsx

ursor/fix-lint-push-and-merge-to-main-e10e:src/components/services/GeneratedDescriptionDisplay.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

          <Button ;
            onClick={handleSave}"
            className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white";"
          >;

    ;"
  isEditing ? (<> <Check className="h-4 w-4 mr-1" /> Done </>) : (<> <Pencil className="h-4 w-4 mr-1" /> Edit </>) ;"

}   <CardContent> {;

<<<<<<< HEAD
  isEditing ? (<Textarea value= {;
  editedDescription ;)
}</div>) ;
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  isEditing ? (<> <Check className="h-4 w-4 mr-1" /> Done </>) : (<> <Pencil className="h-4 w-4 mr-1" /> Edit </>) ;
}</Button> </CardTitle> </CardHeader> <CardContent> {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  isEditing ? (<Textarea value= {;
  editedDescription ;)
}</div>) ;
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

} {;"
  isEditing && (<CardFooter> <Button onClick={;"  handleSave ";"}className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white" > Save Changes  ) ;""
});"}'""
<<<<<<< HEAD
  isEditing && (<CardFooter> <Button onClick={;
=======
  isEditing && (<CardFooter> <Button onClick={;
=======
}</CardContent> {;
<<<<<<< HEAD
:temp_broken_files/services/GeneratedDescriptionDisplay.tsx
  isEditing && (<CardFooter> <Button onClick={;"  handleSave ";"}className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white" > Save Changes </Button> </CardFooter>) ;
}</Card>) ;"}'"
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  isEditing && (<CardFooter> <Button onClick={;
  handleSave ";
}className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white" > Save Changes </Button> </CardFooter>) ;
}</Card>) ;
}'"
<<<<<<< HEAD
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/services/GeneratedDescriptionDisplay.tsx
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
