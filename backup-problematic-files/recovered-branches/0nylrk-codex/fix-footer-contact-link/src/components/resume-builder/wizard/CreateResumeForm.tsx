
=======
import { useState } from "react",;
import { Card, CardContent } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Loader2 } from "lucide-react",;
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    <Card className="w-full max-w-2xl mx-auto">;
      <CardContent className="py-8">;
        <div className="text-center">;
          <h2 className="text-2xl font-bold mb-2">Create New Resume</h2>;
          <p className="text-muted-foreground mb-6">Give your resume a title to get started</p>;
<<<<<<< HEAD

              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Create;
            </Button>;
          </div>;

          >;
            Cancel;
          </Button>;
        </div>;
      </CardContent>;

