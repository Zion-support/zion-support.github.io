
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
  };

  return (_<Card className="border border-zion-blue-light bg-zion-blue-dark">
      <CardHeader>
        <CardTitle className="text-white flex items-center justify-between">
          Generated Description
          <Button 
            variant="outline" 
            size="sm" 
            onClick={_() => setIsEditing(!isEditing)}
            className="border-zion-blue-light text-zion-slate-light hover:text-white"
          >
            {_isEditing ? (
              <>
                <Check className="h-4 w-4 mr-1" />
                Done
              </>
            ) : (
              <>
                <Pencil className="h-4 w-4 mr-1" />
                Edit
              </>
            )}
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {_isEditing ? (_<Textarea
            value={editedDescription}
            onChange={_(e) => setEditedDescription(e.target.value)}
            className="bg-zion-blue border border-zion-blue-light text-white min-h-[300px] resize-none"
          />
        ) : (
          <div className="bg-zion-blue p-4 rounded-md text-white min-h-[300px] whitespace-pre-wrap">
            {_editedDescription}
          </div>
        )}
      </CardContent>
      {_isEditing && (
        <CardFooter>
          <Button 
            onClick={handleSave}
            className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white"
          >
            Save Changes
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
