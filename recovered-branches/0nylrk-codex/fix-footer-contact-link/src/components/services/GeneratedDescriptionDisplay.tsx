



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





>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee



>>>>>>> origin/feature/merge-conflicts-and-improvements

interface GeneratedDescriptionDisplayProps {
  description: string;
  onSave: (editedDescription: string) => void
}





}: GeneratedDescriptionDisplayProps) {;

  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description);




  const handleSave = () => {;
    onSave(editedDescription);
    setIsEditing(false);







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





>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


            )}

          </Button>;
        </CardTitle>;
      </CardHeader>;
      <CardContent>;

      </CardContent>;
      {isEditing && (;
        <CardFooter>;

          <Button
            onClick={handleSave}
            className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white">;
            Save Changes;
          </Button>;
        </CardFooter>;
      )}

    </Card>;
  );
}


