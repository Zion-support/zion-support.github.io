import { useState } from "react",;
import { Card, CardContent } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Loader2 } from 'lucide-react';
<<<<<<< HEAD

import { CreateResumeFormProps } from "./types",;

=======
<<<<<<< HEAD
import { CreateResumeFormProps } from "./types",;
=======

import { CreateResumeFormProps } from "./types",;

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
;
export const CreateResumeForm = ({ ;
  onCreateResume,;
  onCancel,;
<<<<<<< HEAD
  isLoading ;)
} CreateResumeFormProps) => {;"
  const [newResumeTitle, setNewResumeTitle] = useState(),;
=======
<<<<<<< HEAD
  isLoading ;
} CreateResumeFormProps) => {;
  const [newResumeTitle, setNewResumeTitle] = useState(''),;
;
=======
  isLoading ;)
} CreateResumeFormProps) => {;"
  const [newResumeTitle, setNewResumeTitle] = useState(),;
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const handleSubmit = async () => {;
    if (!newResumeTitle.trim()) return,;
    await onCreateResume(newResumeTitle),;
  },;
  return (;
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    <Card className="w-full max-w-2xl mx-auto">;
      <CardContent className="py-8">;
        <div className="text-center">;
          <h2 className="text-2xl font-bold mb-2">Create New Resume</h2>;
          <p className="text-muted-foreground mb-6">Give your resume a title to get started</p>;
<<<<<<< HEAD

=======
<<<<<<< HEAD
          ;
          <div className="flex gap-2 max-w-md mx-auto">;
            <input;
              type="text";
              placeholder="Resume Title (e.g. 'AI Engineer Resume')";
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm";
=======

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              value={newResumeTitle}
              onChange={(e) => setNewResumeTitle(e.target.value)}
</input>
            <Button ;
              onClick={handleSubmit}
              disabled={!newResumeTitle.trim() || isLoading}
            >;
<<<<<<< HEAD

=======
<<<<<<< HEAD
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Create;
            </Button>;
=======

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          </div>;

          ;
          <Button;
            variant="ghost";
            onClick={onCancel}
            className="mt-4";
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          >;
            Cancel;
          </Button>;
        </div>;
      </CardContent>;

    </Card>;
  ),;
},; export const CreateResumeForm = ({;
  onCreateResume;
onCancel;
isLoading ;
}: CreateResumeFormProps) => {;
<<<<<<< HEAD
<<<<<<< HEAD
=======
  const [newResumeTitle, setNewResumeTitle] = useState ('');
const handleSubmit = async () => {;
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  }
  const [newResumeTitle, setNewResumeTitle] = useState ('');'
  }
=======
  const [newResumeTitle, setNewResumeTitle] = useState ('');
const handleSubmit = async () => {;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  if (!newResumeTitle.trim () ) return;

};
w-full max-w-2xl mx-auto"> <CardContent className=" py-8"> <div className=" text-center"> <h2 className=" text-2xl font-bold mb-2">Create New Resume</h2> <p className=" text-muted-foreground mb-6">Give your resume a title to get started</p> <div className=" flex gap-2 max-w-md mx-auto" > <input /> <Button onClick={;
  handleSubmit ;
}disabled= {;
  !newResumeTitle.trim () || isLoading ;
}> Create </Button> </div> <Button > Cancel </Button> </div> </CardContent> </Card>) ;
<<<<<<< HEAD
};"'"
=======
<<<<<<< HEAD
:temp_broken_files/resume-builder/wizard/CreateResumeForm.tsx
};"'"
};
'"
<<<<<<< HEAD
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/resume-builder/wizard/CreateResumeForm.tsx
=======
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/resume-builder/wizard/CreateResumeForm.tsx
=======
<<<<<<< HEAD
:temp_broken_files/resume-builder/wizard/CreateResumeForm.tsx
};"'"
};
'"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/resume-builder/wizard/CreateResumeForm.tsx
=======

};
'"

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
