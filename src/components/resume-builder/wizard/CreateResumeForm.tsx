
<<<<<<< HEAD
import { useState } from "react",;
import { Card, CardContent } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Loader2 } from 'lucide-react';
import { CreateResumeFormProps } from "./types",;
;
export const CreateResumeForm = ({ ;
  onCreateResume,;
  onCancel,;
  isLoading ;
} CreateResumeFormProps) => {;
  const [newResumeTitle, setNewResumeTitle] = useState(''),;
;
  const handleSubmit = async () => {;
    if (!newResumeTitle.trim()) return,;
    await onCreateResume(newResumeTitle),;
  },;
;
  return (;
    <Card className="w-full max-w-2xl mx-auto">;
      <CardContent className="py-8">;
        <div className="text-center">;
          <h2 className="text-2xl font-bold mb-2">Create New Resume</h2>;
          <p className="text-muted-foreground mb-6">Give your resume a title to get started</p>;
          ;
          <div className="flex gap-2 max-w-md mx-auto">;
            <input;
              type="text";
              placeholder="Resume Title (e.g. 'AI Engineer Resume')";
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm";
              value={newResumeTitle}
              onChange={(e) => setNewResumeTitle(e.target.value)}
            />;
            <Button ;
              onClick={handleSubmit}
              disabled={!newResumeTitle.trim() || isLoading}
            >;
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Create;
            </Button>;
          </div>;
          ;
          <Button;
            variant="ghost";
            onClick={onCancel}
            className="mt-4";
          >;
            Cancel;
          </Button>;
        </div>;
      </CardContent>;
    </Card>;
  ),;
},;
=======
import { useState } from "react",
import { Card, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Loader2 } from 'lucide-react'
import { CreateResumeFormProps } from "./types",export const CreateResumeForm = ({ 
  onCreateResume,
  onCancel,
  isLoading 
}: CreateResumeFormProps) => {
  const [newResumeTitle, setNewResumeTitle] = useState(''),

  const handleSubmit = async () => {
    if (!newResumeTitle.trim()) return,
    await onCreateResume(newResumeTitle)
  },

export const _CreateResumeForm = (_{_onCreateResume, _onCancel, _isLoading}: CreateResumeFormProps) => {_const [newResumeTitle, _setNewResumeTitle] = useState('');

  const _handleSubmit = async () => {
    if (!newResumeTitle.trim()) return;
    await onCreateResume(newResumeTitle);};

  return (
    <Card className=&quot;w-full max-w-2xl mx-auto&quot;>
      <CardContent className=&quot;py-8&quot;>
        <div className=&quot;text-center&quot;>
          <h2 className=&quot;text-2xl font-bold mb-2&quot;>Create New Resume</h2>
          <p className=&quot;text-muted-foreground mb-6&quot;>Give your resume a title to get started</p>
          
          <div className=&quot;flex gap-2 max-w-md mx-auto&quot;>
            <input
              type=&quot;text&quot;
              placeholder=&quot;Resume Title (e.g. 'AI Engineer Resume')&quot;
              className=&quot;flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm&quot;
              value={newResumeTitle}
              onChange={(e) => setNewResumeTitle(e.target.value)}            />
            <Button 
              onClick={_handleSubmit}
              disabled={_!newResumeTitle.trim() || isLoading}
            >
              {isLoading && <Loader2 className=&quot;mr-2 h-4 w-4 animate-spin&quot; />}              Create
            </Button>
          </div>
          
          <Button
            variant=&quot;ghost&quot;
            onClick={onCancel}
            className=&quot;mt-4&quot;          >
            Cancel
          </Button>
        </div>
      </CardContent>
    </Card>
  )
},
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
