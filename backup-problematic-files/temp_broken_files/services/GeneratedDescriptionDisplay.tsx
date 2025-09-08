import React, { useState } from "react",;
import { useToast } from "@/hooks/use-toast",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card",;
import { Textarea } from "@/components/ui/textarea",;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

;
interface GeneratedDescriptionDisplayProps {;

  description:string,;

  onSave:(editedDescription:string) => void;
}
export function GeneratedDescriptionDisplay({ ;
  description, ;
  onSave ;)
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }),;
  },;
;
  return (;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    <Card className="border border-zion-blue-light bg-zion-blue-dark">;
      <CardHeader>;
        <CardTitle className="text-white flex items-center justify-between">;
          Generated Description;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

            onClick={() => setIsEditing(!isEditing)}

              <>;"
                <Check className="h-4 w-4 mr-1" />;"

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
          <div className="bg-zion-blue p-4 rounded-md text-white min-h-[300px] whitespace-pre-wrap">;"
</div>
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
  ),;}
 import {;
  {;
  {;
  Check, Pencil ;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
  isEditing ? (<Textarea value= {;
  editedDescription ;)
}</div>) ;

}</CardContent> {;


=======
          <Button ;
            onClick={handleSave}"
            className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white";"
          >;

    ;"
  isEditing ? (<> <Check className="h-4 w-4 mr-1" /> Done </>) : (<> <Pencil className="h-4 w-4 mr-1" /> Edit </>) ;"

}   <CardContent> {;


  isEditing && (<CardFooter> <Button onClick={;
>>>>>>> origin/cursor/delete-old-data-records-6bba
