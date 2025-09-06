
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
  description: string;
  onSave: (editedDescription: string) => void
}

export function GeneratedDescriptionDisplay({
  description
  onSave

}: GeneratedDescriptionDisplayProps) {
=======
interface GeneratedDescriptionDisplayProps {;
  description: string,;
  onSave: (editedDescription: string) => void;
}

export function GeneratedDescriptionDisplay(): any ({ ;
  description, ;
  onSave ;
}: GeneratedDescriptionDisplayProps) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description);

  const handleSave = () => {;
    onSave(editedDescription);
    setIsEditing(false);
<<<<<<< HEAD
    toast({
      title: "Description Saved"
      description: "Your edited description has been saved."
    });
  }

  return (
    <Card className="border border-zion-blue-light bg-zion-blue-dark">
      <CardHeader>
        <CardTitle className="text-white flex items-center justify-between">
          Generated Description
          <Button
            variant="outline"
            size="sm"
=======
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
            )}
          </Button>;
        </CardTitle>;
      </CardHeader>;
      <CardContent>;
        {isEditing ? (;
          <Textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e && e.target.value)}
            className="bg-zion-blue border border-zion-blue-light text-white min-h-[300px] resize-none";
          />;
        ) : (;
          <div className="bg-zion-blue p-4 rounded-md text-white min-h-[300px] whitespace-pre-wrap">;
            {editedDescription}
          </div>;
        )}
<<<<<<< HEAD
      </CardContent>
      {isEditing && (
        <CardFooter>
=======
      </CardContent>;
      {isEditing && (;
        <CardFooter>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          <Button
            onClick={handleSave}
            className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white">;
            Save Changes;
          </Button>;
        </CardFooter>;
      )}
<<<<<<< HEAD
    </Card>
  );
}
=======
    </Card>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
