
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react",
import { useToast } from "@/hooks/use-toast",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card",
import { Textarea } from "@/components/ui/textarea",
=======
import React, { useState } from &quot;react&quot;;
import { useToast } from &quot;@/hooks/use-toast&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from &quot;@/components/ui/card&quot;;
import { Textarea } from &quot;@/components/ui/textarea&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { Check, Pencil } from 'lucide-react'

interface GeneratedDescriptionDisplayProps {
  description: string,
  onSave: (editedDescription: string) => void
}

export function GeneratedDescriptionDisplay({ 
  description, 
  onSave 
}: GeneratedDescriptionDisplayProps) {
  const { toast } = useToast(),
  const [isEditing, setIsEditing] = useState(false),
  const [editedDescription, setEditedDescription] = useState(description),

  const handleSave = () => {
    onSave(editedDescription),
    setIsEditing(false),
    toast({
<<<<<<< HEAD
      title: "Description Saved",
      description: "Your edited description has been saved."
    })
  },
=======
      title: &quot;Description Saved&quot;,
      description: &quot;Your edited description has been saved.&quot;
    });
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  return (
    <Card className=&quot;border border-zion-blue-light bg-zion-blue-dark&quot;>
      <CardHeader>
        <CardTitle className=&quot;text-white flex items-center justify-between&quot;>
          Generated Description
          <Button 
            variant=&quot;outline&quot; 
            size=&quot;sm&quot; 
            onClick={() => setIsEditing(!isEditing)}
            className=&quot;border-zion-blue-light text-zion-slate-light hover:text-white&quot;
          >
            {isEditing ? (
              <>
                <Check className=&quot;h-4 w-4 mr-1&quot; />
                Done
              </>
            ) : (
              <>
                <Pencil className=&quot;h-4 w-4 mr-1&quot; />
                Edit
              </>
=======
import React, { useState } from "react",;
import { useToast } from "@/hooks/use-toast",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card",;
import { Textarea } from "@/components/ui/textarea",;
import { Check, Pencil } from 'lucide-react';
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
      title: "Description Saved";
      description: "Your edited description has been saved.";
    });
  };
  return (;
    <Card className="border border-zion-blue-light bg-zion-blue-dark">;
      <CardHeader>;
        <CardTitle className="text-white flex items-center justify-between">;
          Generated Description;
          <Button;
            variant="outline";
            size="sm";
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
            )}
          </Button>;
        </CardTitle>;
      </CardHeader>;
      <CardContent>;
        {isEditing ? (;
          <Textarea;
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
<<<<<<< HEAD
            className=&quot;bg-zion-blue border border-zion-blue-light text-white min-h-[300px] resize-none&quot;
          />
        ) : (
          <div className=&quot;bg-zion-blue p-4 rounded-md text-white min-h-[300px] whitespace-pre-wrap&quot;>
=======
            className="bg-zion-blue border border-zion-blue-light text-white min-h-[300px] resize-none";
          />;
        ) : (;
          <div className="bg-zion-blue p-4 rounded-md text-white min-h-[300px] whitespace-pre-wrap">;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
            {editedDescription}
          </div>;
        )}
      </CardContent>;
      {isEditing && (;
        <CardFooter>;
          <Button;
            onClick={handleSave}
<<<<<<< HEAD
            className=&quot;w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white&quot;
          >
            Save Changes
          </Button>
        </CardFooter>
=======
            className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white";
          >;
            Save Changes;
          </Button>;
        </CardFooter>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      )}
    </Card>;
  );
}
;