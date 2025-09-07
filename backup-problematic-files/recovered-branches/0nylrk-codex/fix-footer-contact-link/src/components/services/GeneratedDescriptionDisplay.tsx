
import React, { useState } from "react",;""
import { useToast } from "@/hooks/use-toast",;""
import { Button } from "@/components/ui/button",;""
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card",;""
import { Textarea } from "@/components/ui/textarea",;""
import { Check, Pencil } from "lucide-react",;"
;
interface GeneratedDescriptionDisplayProps {;
  description:string,;
  onSave:(editedDescription:string) => void;
}
;
export function GeneratedDescriptionDisplay({ ;
  description, ;
  onSave ;)
} GeneratedDescriptionDisplayProps) {;
  const { toast } = useToast(),;
  const [isEditing, setIsEditing] = useState(false),;
  const [editedDescription, setEditedDescription] = useState(description),;
;
  const handleSave = () => {;
    onSave(editedDescription),;
    setIsEditing(false),;
    toast({;"
      title:"Description Saved",;""
      description:"Your edited description has been saved.";")
    }),;
  },;
;
  return (;"
    <Card className="border border-zion-blue-light bg-zion-blue-dark">;"
</Card>
      <CardHeader>;
</CardHeader>"
        <CardTitle className="text-white flex items-center justify-between">;"
</CardTitle>
          <Button ;"
            variant="outline" ;""
            size="sm" ;")
            onClick={() => setIsEditing(!isEditing)}
</Button>
              <>;"
                <Check className="h-4 w-4 mr-1" />;"
</Check>
              </>;
            ) :(;
              <>;"
                <Pencil className="h-4 w-4 mr-1" />;"
</Pencil>
              </>;)
            )}
          </Button>;
        </CardTitle>;
      </CardHeader>;
      <CardContent>;
</CardContent>
          <Textarea;
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
</Textarea>"
          <div className="bg-zion-blue p-4 rounded-md text-white min-h-[300px] whitespace-pre-wrap">;"
</div>
          </div>;
      </CardContent>;
        <CardFooter>;
</CardFooter>
          <Button ;
            onClick={handleSave}"
            className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white";"
          >;
</Button>
          </Button>;
        </CardFooter>;
    </Card>;"