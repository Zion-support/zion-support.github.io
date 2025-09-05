
import React, { useState } from &quot;react&quot;;
import { useToast } from &quot;@/hooks/use-toast&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from &quot;@/components/ui/card&quot;;
import { Textarea } from &quot;@/components/ui/textarea&quot;;
import { Check, Pencil } from 'lucide-react'

interface GeneratedDescriptionDisplayProps {
  description: string;
  onSave: (editedDescription: string) => void;
}

export function GeneratedDescriptionDisplay({ 
  description, 
  onSave 
}: GeneratedDescriptionDisplayProps) {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description);

  const handleSave = () => {
    onSave(editedDescription);
    setIsEditing(false);
    toast({
      title: &quot;Description Saved&quot;,
      description: &quot;Your edited description has been saved.&quot;
    });
  };

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
            )}
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isEditing ? (
          <Textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            className=&quot;bg-zion-blue border border-zion-blue-light text-white min-h-[300px] resize-none&quot;
          />
        ) : (
          <div className=&quot;bg-zion-blue p-4 rounded-md text-white min-h-[300px] whitespace-pre-wrap&quot;>
            {editedDescription}
          </div>
        )}
      </CardContent>
      {isEditing && (
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
  );
}
