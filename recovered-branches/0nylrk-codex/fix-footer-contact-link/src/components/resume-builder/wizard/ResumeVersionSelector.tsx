<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import { useState } from "react";
import {
  DropdownMenu
  DropdownMenuContent
  DropdownMenuItem
  DropdownMenuSeparator
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog
  DialogContent
  DialogFooter
  DialogHeader
  DialogTitle
} from "@/components/ui/dialog";
import { Save, ChevronDown, Plus, Loader2 } from "lucide-react";
import { Resume } from "@/types/resume";
import { useResume } from "@/hooks/useResume";

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

import {useState} from 'react';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger} from '@/components/ui/dropdown-menu';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle} from '@/components/ui/dialog';
import {Save, ChevronDown, Plus, Loader2} from 'lucide-react';
import {Resume} from '@/types/resume';
import {useResume} from '@/hooks/useResume';
<<<<<<< HEAD
import { useState } from "react";
import {}
=======
import { useState } from "react";
import {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

  currentResume: Resume;
import { useState } from "react";"

import {
  // TODO: Implement
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,

  DropdownMenuSeparator,
DropdownMenuTrigger,";
} from "@/components/ui/dropdown-menu";"
import { Button } from "@/components/ui/button";"
import { Input } from "@/components/ui/input";
import {}
  Dialog,
  DialogContent,
  DialogFooter,

  DialogHeader,
DialogTitle,";
} from "@/components/ui/dialog";"
import { Save, ChevronDown, Plus, Loader2 } from "lucide-react";"
import { Resume } from "@/types/resume";"
import { useResume } from "@/hooks/useResume";
<<<<<<< HEAD
interface ResumeVersionSelectorProps {
=======
interface ResumeVersionSelectorProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  DialogTitle,
} from "@/components/ui/dialog";
import { Save, ChevronDown, Plus, Loader2 } from "lucide-react";
import { Resume } from "@/types/resume";
import { useResume } from "@/hooks/useResume";
interface ResumeVersionSelectorProps {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  currentResume: Resume;
=======
  DialogTitle,"
} from "@/components/ui/dialog";""
import { Save, ChevronDown, Plus, Loader2 } from "lucide-react";""
import { Resume } from "@/types/resume";""
import { useResume } from "@/hooks/useResume";"
interface ResumeVersionSelectorProps {
  // TODO: Implement
}
  currentResume: Resume;,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  onResumeChange: (resumeId: string) => void;

}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

export function ResumeVersionSelector({ currentResume, onResumeChange }: ResumeVersionSelectorProps) {;
<<<<<<< HEAD
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export function ResumeVersionSelector({

  currentResume,
  onResumeChange,
}: ResumeVersionSelectorProps) {
>>>>>>> main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
export function ResumeVersionSelector({}
  currentResume,
  onResumeChange,
}: ResumeVersionSelectorProps) {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const { createResume, fetchResume } = useResume();
const [saveDialogOpen, setSaveDialogOpen] = useState(false);"
  const [newResumeTitle, setNewResumeTitle] = useState("");
  const [existingResumes, setExistingResumes] = useState<Resume[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateNewVersion = async () => {}
    if (newResumeTitle.trim()) {}
      setIsLoading(true);
      const resumeId = await createResume({ title: newResumeTitle.trim() });
      if (resumeId) {}
        await fetchResume(resumeId);
        onResumeChange(resumeId);
setSaveDialogOpen(false);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        setNewResumeTitle("");
=======
        setNewResumeTitle("");
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
        setNewResumeTitle("");
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      }
      setIsLoading(false);
    }
  }
<<<<<<< HEAD
        setNewResumeTitle('')
        setNewResumeTitle('')

        setNewResumeTitle('')
setNewResumeTitle('')
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useState } from 'react',;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        setNewResumeTitle('')

        setNewResumeTitle('')
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

        setNewResumeTitle('')

  const handleCreateNewVersion = async () => {
    if (newResumeTitle.trim()) {
      setIsLoading(true);
      const resumeId = await createResume({ title: newResumeTitle.trim() });
      if (resumeId) {
        await fetchResume(resumeId);
        onResumeChange(resumeId);
        setSaveDialogOpen(false);
        setNewResumeTitle('')

        setNewResumeTitle('')
import { useState } from 'react',;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuSeparator,;
  DropdownMenuTrigger;'
} from '@/components/ui/dropdown-menu',;'
import { Button } from '@/components/ui/button',;'
import { Input } from '@/components/ui/input',;'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog',;'
import { Save, ChevronDown, Plus, Loader2 } from 'lucide-react',;'
import { Resume } from '@/types/resume',;'
import { useResume } from '@/hooks/useResume',;
interface ResumeVersionSelectorProps {;
  currentResume: Resume,;
  onResumeChange: (resumeId: string) => void;
}
;
export function ResumeVersionSelector() { return null; }
  const { createResume, fetchResume } = useResume(),;
  const [saveDialogOpen, setSaveDialogOpen] = useState(false),;'
  const [newResumeTitle, setNewResumeTitle] = useState(''),;
  const [existingResumes, setExistingResumes] = useState<Resume[]>([]),;
  const [isLoading, setIsLoading] = useState(false),;
  const handleCreateNewVersion = async () => {;
    if (newResumeTitle.trim()) {;
      setIsLoading(true),;
      const resumeId = await createResume({ title: newResumeTitle.trim() }),;
      if (resumeId) {;
        await fetchResume(resumeId),;
        onResumeChange(resumeId),;
setSaveDialogOpen(false);
<<<<<<< HEAD
<<<<<<< HEAD
        setNewResumeTitle('');
<<<<<<< HEAD
      }
      setIsLoading(false);
    }
  },
  };
  },
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      }
      setIsLoading(false);
    }

"
=======
        setNewResumeTitle('');

      }
      setIsLoading(false);
    }

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground">Resume:</span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="gap-2">
            {currentResume?.basic_info?.title || "My Resume"}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {existingResumes.map((resume) => (
            <DropdownMenuItem
              key={resume.id}
              onClick={() => onResumeChange(resume.id!)}
              className="cursor-pointer"
            >
              {resume.basic_info.title}
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => setSaveDialogOpen(true)}
            className="cursor-pointer"
          >
            <Plus className="h-4 w-4 mr-2" />
            Save as new version
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={saveDialogOpen} onOpenChange={setSaveDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Save as new resume version</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <Input
              value={newResumeTitle}
              onChange={(e) => setNewResumeTitle(e.target.value)}
              placeholder="Enter resume title (e.g. DevOps Resume)"
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setSaveDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={handleCreateNewVersion}
              disabled={!newResumeTitle.trim() || isLoading}

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        setNewResumeTitle("");
      }
      setIsLoading(false);
    }
  };
  },
<Dialog open={saveDialogOpen} onOpenChange={setSaveDialogOpen}>"
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Save as new resume version</DialogTitle>
          </DialogHeader>"
          <div className="py-4">
            <Input;
              value={newResumeTitle}
              onChange={(e) => setNewResumeTitle(e.target.value)}"
              placeholder="Enter resume title (e.g. DevOps Resume)"
            />
          </div>
          <DialogFooter>"
            <Button variant="outline" onClick={() => setSaveDialogOpen(false)}>
              Cancel;
            </Button>
            <Button;
              onClick={handleCreateNewVersion}
              disabled={!newResumeTitle.trim() || isLoading}
"
              className="gap-2"

=======
      <Dialog open={saveDialogOpen} onOpenChange={setSaveDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Save as new resume version</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <Input
              value={newResumeTitle}
              onChange={(e) => setNewResumeTitle(e.target.value)}
              placeholder="Enter resume title (e.g. DevOps Resume)"
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setSaveDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={handleCreateNewVersion}
              disabled={!newResumeTitle.trim() || isLoading}

            <Button variant="outline" onClick={() => setSaveDialogOpen(false)}>
              Cancel
            </Button>
            <Button
onClick={handleCreateNewVersion}
              disabled={!newResumeTitle.trim() |isLoading}
              onClick={handleCreateNewVersion}
              disabled={!newResumeTitle.trim() || isLoading}

              className="gap-2"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            >
              {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
=======
            >"
              {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              <Save className="h-4 w-4" />
              Save;
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
)
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
;
;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

};
> {}
  resume.basic info.title;
}</DropdownMenuItem>) ) "
=======

};
> {
  resume.basic info.title 
}</DropdownMenuItem>) ) 
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}<DropdownMenuSeparator /> <DropdownMenuItem > <Plus className="h-4 w-4 mr-2" /> Save as new version </DropdownMenuItem> </DropdownMenuContent> </DropdownMenu> <DialogHeader> <DialogTitle>Save as new resume version</DialogTitle> </DialogHeader> <div className="py-4" > <Input /> </div> <DialogFooter> <Button > Cancel </Button> <Button Save </Button> </DialogFooter> </DialogContent> </Dialog> </div>) 
}
  );
}
}
;

  );
}
  )
}

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  )
}

import { useState } from "react";"
import {
  // TODO: Implement
}
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,"
} from "@/components/ui/dropdown-menu";""
import { Button } from "@/components/ui/button";""
import { Input } from "@/components/ui/input";"
  // TODO: Implement
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,"
} from "@/components/ui/dialog";""
import { Save, ChevronDown, Plus, Loader2 } from "lucide-react";""
import { Resume } from "@/types/resume";""
import { useResume } from "@/hooks/useResume";"
interface ResumeVersionSelectorProps {
  // TODO: Implement
  currentResume: Resume;,
  onResumeChange: (resumeId: string) => void;

export function ResumeVersionSelector({
  currentResume,
  onResumeChange,)
}: ResumeVersionSelectorProps) {
  const { createResume, fetchResume } = useResume();
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);"
  const [newResumeTitle, setNewResumeTitle] = useState("");"
  const [existingResumes, setExistingResumes] = useState<Resume[]>([]);

  const [existingResumes, setExistingResumes] = useState<Resume[]>([]),;
"
    <div className="flex items-center gap-2">"
</div>"
      <span className="text-sm text-muted-foreground">Resume:</span>"
      <DropdownMenu>

        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="gap-2">"
            <ChevronDown className="h-4 w-4" />"

        <DropdownMenuContent align="end">"

            <DropdownMenuItem;
              key={resume.id}
              onClick={() => onResumeChange(resume.id!)}

          <DropdownMenuSeparator />

</DropdownMenuItem>

            </DropdownMenuItem>
          <DropdownMenuSeparator />

</DropdownMenuSeparator>
          <DropdownMenuItem;
            onClick={() => setSaveDialogOpen(true)}
            <Plus className="h-4 w-4 mr-2" />"

</Plus>

          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={saveDialogOpen} onOpenChange={setSaveDialogOpen}>
        <DialogContent className="sm:max-w-md">"

          <DialogHeader>

            <DialogTitle>Save as new resume version
          <div className="py-4">"
</div>
            <Input;
              value={newResumeTitle}
              onChange={(e) => setNewResumeTitle(e.target.value)}

          <DialogFooter>
            <Button variant="outline" onClick={() => setSaveDialogOpen(false)}>"

            <Button;
              onClick={handleCreateNewVersion}
              disabled={!newResumeTitle.trim() || isLoading}
        setNewResumeTitle("");"
      setIsLoading(false);
  };
  },

              disabled={!newResumeTitle.trim() |isLoading}
      <Dialog open={saveDialogOpen} onOpenChange={setSaveDialogOpen}>
</Button>"
        <DialogContent className="sm:max-w-md">"
</DialogContent>
          <DialogHeader>
</DialogHeader>
            <DialogTitle>Save as new resume version</DialogTitle>
          </DialogHeader>"
          <div className="py-4">"
</div>
            <Input;
              value={newResumeTitle}
              onChange={(e) => setNewResumeTitle(e.target.value)}
</Input>
          </div>
          <DialogFooter>
</DialogFooter>"
            <Button variant="outline" onClick={() => setSaveDialogOpen(false)}>"
</Button>
            </Button>
            <Button;
              onClick={handleCreateNewVersion}
              disabled={!newResumeTitle.trim() || isLoading}
"
            <Button variant="outline" onClick={() => setSaveDialogOpen(false)}>"
</Button>
            </Button>
            <Button;

onClick={handleCreateNewVersion}
              disabled={!newResumeTitle.trim() || isLoading}

"
              className="gap-2""
            >
              {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}"
</Loader2>"
              <Save className="h-4 w-4" />"

}) ) "
}<DropdownMenuSeparator /> <DropdownMenuItem > <Plus className="h-4 w-4 mr-2" /> Save as new version    <DialogHeader> <DialogTitle>Save as new resume version  <div className="py-4" > <Input /> </div> <DialogFooter> <Button > Cancel  <Button Save     </div>)"
pr-12325
</Save>

            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>

}</DropdownMenuItem>) ) "
}<DropdownMenuSeparator /> <DropdownMenuItem > <Plus className="h-4 w-4 mr-2" /> Save as new version </DropdownMenuItem> </DropdownMenuContent> </DropdownMenu> <DialogHeader> <DialogTitle>Save as new resume version</DialogTitle> </DialogHeader> <div className="py-4" > <Input /> </div> <DialogFooter> <Button > Cancel </Button> <Button Save </Button> </DialogFooter> </DialogContent> </Dialog> </div>)"
</DropdownMenuSeparator>"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
