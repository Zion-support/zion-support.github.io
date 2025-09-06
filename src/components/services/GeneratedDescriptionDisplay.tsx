
<<<<<<< HEAD

=======
import React, { useState } from 'react'
import { useToast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'
import {
  Card
  CardContent
  CardHeader
  CardTitle
  CardFooter
} from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import React, { useState } from "react",
import { useToast } from "@/hooks/use-toast",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card",
import { Textarea } from "@/components/ui/textarea",
<<<<<<< HEAD

import { Check, Pencil } from 'lucide-react'
=======
>>>>>>> import { Check, Pencil } from 'lucide-react'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
interface GeneratedDescriptionDisplayProps {;
  description: string;
  onSave: (editedDescription: string) => void;interface GeneratedDescriptionDisplayProps {;
  description: string,;
  onSave: (editedDescription: string,) => void;
}
<<<<<<< HEAD
=======
export function GeneratedDescriptionDisplay({
  description
  onSave
}: GeneratedDescriptionDisplayProps) {
  const { toast } = useToast()
  const [isEditing, setIsEditing] = useState(false)
  const [editedDescription, setEditedDescription] = useState(description)
  const handleSave = () => {
    onSave(editedDescription)
    setIsEditing(false)
    toast({
      title: 'Description Saved'
      description: 'Your edited description has been saved.'
    })
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

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
      title: "Description Saved",
      description: "Your edited description has been saved."
    })
  },
<<<<<<< HEAD

  return (
=======
>>>>>>> 
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    <Card className="border border-zion-blue-light bg-zion-blue-dark">
      <CardHeader>
        <CardTitle className="text-white flex items-center justify-between">
          Generated Description
<<<<<<< HEAD

=======
          <Button
            variant='outline'
            size='sm'
            onClick={() => setIsEditing(!isEditing)}
            className='border-zion-blue-light text-zion-slate-light hover:text-white'          >
>>>>>>>             {isEditing ? (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            {isEditing ? (
>>>>>>>               <>
                <Check className="h-4 w-4 mr-1" />
                Done
              </>
            ) : (
              <>
                <Pencil className="h-4 w-4 mr-1" />
                Edit
              </>
<<<<<<< HEAD

            {editedDescription}
          </div>
        )}

            Save Changes
          </Button>
        </CardFooter>
      )}

    </Card>;
=======
            )}
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isEditing ? (
          <Textarea
            value={editedDescription}
            onChange={e => setEditedDescription(e.target.value)}
            className='bg-zion-blue border border-zion-blue-light text-white min-h-[300px] resize-none'          />
        ) : (
          <div className='bg-zion-blue p-4 rounded-md text-white min-h-[300px] whitespace-pre-wrap'>
>>>>>>>             {editedDescription}
          </div>
        )}
      </CardContent>
      {isEditing && (
        <CardFooter>
          <Button
            onClick={handleSave}
            className='w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white'          >
>>>>>>>             Save Changes
          </Button>
        </CardFooter>
      )}
}className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white" > Save Changes </Button> </CardFooter>)
}</Card>)
}'"
}
ursor/fix-website-loading-errors-and-merge-6662
            {isEditing ? (;
              <>;
                <Check className='h-4 w-4 mr-1' />;
                Done;
              </>;
            ) : (;
              <>;
                <Pencil className='h-4 w-4 mr-1' />;
                Edit;
              </>;
            )}
    <Card className='border border - zion - blue - light bg - zion - blue - dark'>;
      <CardHeader>;
        <CardTitle className='text - white flex items - center justify - between'>;
          Generated Description;
          <Button;
            variant='outline';
            size='sm';
            on_click={() => setIsEditing (!is_editing)}
            className='border - zion - blue - light text - zion - slate - light hover:text - white'          >;
            {is_editing ? (
              <>;
                <Check className='h - 4 w - 4 mr - 1' />;
                Done;
              </>) : (
              <>;
                <Pencil className='h - 4 w - 4 mr - 1' />;
                Edit;
              </>)}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
          </Button>;
        </CardTitle>;
      </CardHeader>;
      <CardContent>;

            onChange={(e) => setEditedDescription(e.target.value)}
            className="bg-zion-blue border border-zion-blue-light text-white min-h-[300px] resize-none"
          />
        ) : (
          <div className="bg-zion-blue p-4 rounded-md text-white min-h-[300px] whitespace-pre-wrap">


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
            {editedDescription}
          </div>;
        )}



      </CardContent>;
      {isEditing && (;
        <CardFooter>;
          <Button
            onClick={handleSave}

            className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white"
          >


            Save Changes
          </Button>
        </CardFooter>
      )}

}className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white" > Save Changes </Button> </CardFooter>) 
}</Card>) 
}'";
};

>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>     </Card>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  );

  isEditing ? (<> <Check className="h-4 w-4 mr-1" /> Done </>) : (<> <Pencil className="h-4 w-4 mr-1" /> Edit </>) ;
}</Button> </CardTitle> </CardHeader> <CardContent> {;
  isEditing ? (<Textareavalue= {
  editedDescription 
}</div>) ;
}</CardContent> {;
  isEditing && (<CardFooter> <ButtononClick={
  handleSave "
}className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white"> Save Changes </Button> </CardFooter>) ;
}</Card>) ;
}'";
}
;
<<<<<<< HEAD

=======
>>>>>>> 
;


>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
