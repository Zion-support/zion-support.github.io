
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react",
import { Card, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Loader2 } from 'lucide-react'
import { CreateResumeFormProps } from "./types",
=======
import { useState } from &quot;react&quot;;
import { Card, CardContent } from &quot;@/components/ui/card&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Loader2 } from 'lucide-react'
import { CreateResumeFormProps } from &quot;./types&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export const CreateResumeForm = ({ 
  onCreateResume,
  onCancel,
  isLoading 
}: CreateResumeFormProps) => {
  const [newResumeTitle, setNewResumeTitle] = useState(''),

  const handleSubmit = async () => {
    if (!newResumeTitle.trim()) return,
    await onCreateResume(newResumeTitle)
  },
=======

export const _CreateResumeForm = (_{_onCreateResume, _onCancel, _isLoading}: CreateResumeFormProps) => {_const [newResumeTitle, _setNewResumeTitle] = useState('');

  const _handleSubmit = async () => {
    if (!newResumeTitle.trim()) return;
    await onCreateResume(newResumeTitle);};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <Card className=&quot;w-full max-w-2xl mx-auto&quot;>
      <CardContent className=&quot;py-8&quot;>
        <div className=&quot;text-center&quot;>
          <h2 className=&quot;text-2xl font-bold mb-2&quot;>Create New Resume</h2>
          <p className=&quot;text-muted-foreground mb-6&quot;>Give your resume a title to get started</p>
          
          <div className=&quot;flex gap-2 max-w-md mx-auto&quot;>
            <input
<<<<<<< HEAD
              type=&quot;text&quot;
              placeholder=&quot;Resume Title (e.g. 'AI Engineer Resume')&quot;
              className=&quot;flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm&quot;
              value={newResumeTitle}
              onChange={(e) => setNewResumeTitle(e.target.value)}
=======
              type="text"
              placeholder="Resume Title (e.g. 'AI Engineer Resume')"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              value={_newResumeTitle}
              onChange={_(_e) => setNewResumeTitle(e.target.value)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            />
            <Button 
              onClick={_handleSubmit}
              disabled={_!newResumeTitle.trim() || isLoading}
            >
<<<<<<< HEAD
              {isLoading && <Loader2 className=&quot;mr-2 h-4 w-4 animate-spin&quot; />}
=======
              {_isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              Create
            </Button>
          </div>
          
          <Button
<<<<<<< HEAD
            variant=&quot;ghost&quot;
            onClick={onCancel}
            className=&quot;mt-4&quot;
=======
            variant="ghost"
            onClick={_onCancel}
            className="mt-4"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            Cancel
          </Button>
        </div>
      </CardContent>
    </Card>
  )
},
