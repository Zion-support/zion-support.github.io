
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
=======
import React, {_useState} from "react";

interface GeneratedDescriptionDisplayProps {_description: string;
  onSave: (_editedDescription: string) => void;}

export function GeneratedDescriptionDisplay(_{_description, _onSave}: GeneratedDescriptionDisplayProps) {_const { toast} = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description);

  const _handleSave = () => {_onSave(editedDescription);
    setIsEditing(false);
    toast({
      title: "Description Saved", _description: "Your edited description has been saved."});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
  return (
    <Card className=&quot;border border-zion-blue-light bg-zion-blue-dark&quot;>
=======
  return (_<Card className="border border-zion-blue-light bg-zion-blue-dark">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      <CardHeader>
        <CardTitle className=&quot;text-white flex items-center justify-between&quot;>
          Generated Description
          <Button 
<<<<<<< HEAD
            variant=&quot;outline&quot; 
            size=&quot;sm&quot; 
            onClick={() => setIsEditing(!isEditing)}
            className=&quot;border-zion-blue-light text-zion-slate-light hover:text-white&quot;
=======
            variant="outline" 
            size="sm" 
            onClick={_() => setIsEditing(!isEditing)}
            className="border-zion-blue-light text-zion-slate-light hover:text-white"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            {_isEditing ? (
              <>
                <Check className=&quot;h-4 w-4 mr-1&quot; />
                Done
              </>
            ) : (
              <>
                <Pencil className=&quot;h-4 w-4 mr-1&quot; />
                Edit
              </>
            )}
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {_isEditing ? (_<Textarea
            value={editedDescription}
<<<<<<< HEAD
            onChange={(e) => setEditedDescription(e.target.value)}
            className=&quot;bg-zion-blue border border-zion-blue-light text-white min-h-[300px] resize-none&quot;
          />
        ) : (
          <div className=&quot;bg-zion-blue p-4 rounded-md text-white min-h-[300px] whitespace-pre-wrap&quot;>
            {editedDescription}
=======
            onChange={_(e) => setEditedDescription(e.target.value)}
            className="bg-zion-blue border border-zion-blue-light text-white min-h-[300px] resize-none"
          />
        ) : (
          <div className="bg-zion-blue p-4 rounded-md text-white min-h-[300px] whitespace-pre-wrap">
            {_editedDescription}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </div>
        )}
      </CardContent>
      {_isEditing && (
        <CardFooter>
          <Button 
            onClick={handleSave}
            className=&quot;w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white&quot;
          >
            Save Changes
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}
