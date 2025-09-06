
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/CreateResumeForm.tsx
=======
import { useState } from "react",;
import { Card, CardContent } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Loader2 } from "lucide-react",;
=======
import { useState } from "react",;
import { Card, CardContent } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Loader2 } from 'lucide-react';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/resume-builder/wizard/CreateResumeForm.tsx
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
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/CreateResumeForm.tsx
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/resume-builder/wizard/CreateResumeForm.tsx
    <Card className="w-full max-w-2xl mx-auto">;
      <CardContent className="py-8">;
        <div className="text-center">;
          <h2 className="text-2xl font-bold mb-2">Create New Resume</h2>;
          <p className="text-muted-foreground mb-6">Give your resume a title to get started</p>;
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/CreateResumeForm.tsx

              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Create;
            </Button>;
          </div>;
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/CreateResumeForm.tsx

=======
          ;
          <Button;
            variant="ghost";
            onClick={onCancel}
            className="mt-4";
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/resume-builder/wizard/CreateResumeForm.tsx
          >;
            Cancel;
          </Button>;
        </div>;
      </CardContent>;
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/CreateResumeForm.tsx

=======
    </Card>;
  ),;
},; export const CreateResumeForm = ({;
  onCreateResume;
onCancel;
isLoading ;
}: CreateResumeFormProps) => {;
  const [newResumeTitle, setNewResumeTitle] = useState ('');
const handleSubmit = async () => {;
  if (!newResumeTitle.trim () ) return;
await onCreateResume (newResumeTitle) ;
};
w-full max-w-2xl mx-auto"> <CardContent className=" py-8"> <div className=" text-center"> <h2 className=" text-2xl font-bold mb-2">Create New Resume</h2> <p className=" text-muted-foreground mb-6">Give your resume a title to get started</p> <div className=" flex gap-2 max-w-md mx-auto" > <input /> <Button onClick={;
  handleSubmit ;
}disabled= {;
  !newResumeTitle.trim () || isLoading ;
}> Create </Button> </div> <Button > Cancel </Button> </div> </CardContent> </Card>) ;
:temp_broken_files/resume-builder/wizard/CreateResumeForm.tsx
};"'"
};
'"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/resume-builder/wizard/CreateResumeForm.tsx
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/resume-builder/wizard/CreateResumeForm.tsx
