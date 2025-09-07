import React, { useState } from "react",;
import { useToast } from "@/hooks/use-toast",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card",;
import { Textarea } from "@/components/ui/textarea",;
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
} GeneratedDescriptionDisplayProps) {;
  const { toast } = useToast(),;
  const [isEditing, setIsEditing] = useState(false),;
  const [editedDescription, setEditedDescription] = useState(description),;
  const handleSave = () => {;
    onSave(editedDescription),;
    setIsEditing(false),;
    toast({;
<<<<<<< HEAD
      title:"Description Saved",;
      description:"Your edited description has been saved.";
=======

>>>>>>> merged-prs-20250907-203621
    }),;
  },;
;
  return (;
<<<<<<< HEAD
=======

>>>>>>> merged-prs-20250907-203621
    <Card className="border border-zion-blue-light bg-zion-blue-dark">;
      <CardHeader>;
        <CardTitle className="text-white flex items-center justify-between">;
          Generated Description;
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

              <>;"
                <Check className="h-4 w-4 mr-1" />;"

>>>>>>> merged-prs-20250907-203621
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
            className="bg-zion-blue border border-zion-blue-light text-white min-h-[300px] resize-none";
          />;
        ) :(;
          <div className="bg-zion-blue p-4 rounded-md text-white min-h-[300px] whitespace-pre-wrap">;
            {editedDescription}
=======
          <div className="bg-zion-blue p-4 rounded-md text-white min-h-[300px] whitespace-pre-wrap">;"
</div>
>>>>>>> merged-prs-20250907-203621
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

>>>>>>> merged-prs-20250907-203621
  ),;}
 import {;
  {;
  {;
  Check, Pencil ;
<<<<<<< HEAD
}from 'lucide-react' interface GeneratedDescriptionDisplayProps {;
=======

>>>>>>> merged-prs-20250907-203621
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

          <Button ;
            onClick={handleSave}"
            className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white";"
          >;

    ;"
  isEditing ? (<> <Check className="h-4 w-4 mr-1" /> Done </>) : (<> <Pencil className="h-4 w-4 mr-1" /> Edit </>) ;"

}   <CardContent> {;

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

} {;"
  isEditing && (<CardFooter> <Button onClick={;"  handleSave ";"}className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white" > Save Changes  ) ;""
});"}'""
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
