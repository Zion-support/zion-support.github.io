<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD



>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
  Dialog
=======
Dialog
>>>>>>> merged-prs-20250907-203621
  DialogContent
  DialogFooter
  DialogHeader
  DialogTitle
} from "@/components/ui/dialog";
import { Save, ChevronDown, Plus, Loader2 } from "lucide-react";
import { Resume } from "@/types/resume";
import { useResume } from "@/hooks/useResume";
<<<<<<< HEAD

import { useState } from 'react';
import { 
  DropdownMenu,
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator,
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu',
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Save, ChevronDown, Plus, Loader2 } from 'lucide-react';
import { Resume } from '@/types/resume';
import { useResume } from '@/hooks/useResume';
interface ResumeVersionSelectorProps {
  currentResume: Resume,
  onResumeChange: (resumeId: string) => void
}

export function ResumeVersionSelector({ currentResume, onResumeChange }: ResumeVersionSelectorProps) {
  const { createResume, fetchResume } = useResume($2);
  const [saveDialogOpen, setSaveDialogOpen] = useState($2);
  const [newResumeTitle, setNewResumeTitle] = useState($2);
  const [existingResumes, setExistingResumes] = useState<Resume[]>([]),
  const [isLoading, setIsLoading] = useState($2);
  const handleCreateNewVersion = async () => {
    if (newResumeTitle.trim()) {
      setIsLoading($2);
      const resumeId = $2;
      if (resumeId) {
        await fetchResume($2);
        onResumeChange($2);
        setSaveDialogOpen($2);
        setNewResumeTitle('')
      }
      setIsLoading(false)
    }
=======
=======
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {useState} from 'react';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger} from '@/components/ui/dropdown-menu';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle} from '@/components/ui/dialog';
import {Save, ChevronDown, Plus, Loader2} from 'lucide-react';
import {Resume} from '@/types/resume';
<<<<<<< HEAD
=======
import {useResume} from '@/hooks/useResume';
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

import { useState } from "react";
import {}

  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,

  DropdownMenuSeparator,

  Dialog,
  DialogContent,
  DialogFooter,

  DialogHeader,

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface ResumeVersionSelectorProps {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  currentResume: Resume;

  onResumeChange: (resumeId: string) => void;

}

<<<<<<< HEAD
export function ResumeVersionSelector({
=======
<<<<<<< HEAD
export function ResumeVersionSelector({ currentResume, onResumeChange }: ResumeVersionSelectorProps) {;


export function ResumeVersionSelector(): any ({ currentResume, onResumeChange }: ResumeVersionSelectorProps) {;

export function ResumeVersionSelector({
  currentResume
  onResumeChange
}: ResumeVersionSelectorProps) {

export function ResumeVersionSelector({ currentResume, onResumeChange }: ResumeVersionSelectorProps) {;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  currentResume,
  onResumeChange,
}: ResumeVersionSelectorProps) {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const { createResume, fetchResume } = useResume();
<<<<<<< HEAD

        setNewResumeTitle("");
=======
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);
  const [newResumeTitle, setNewResumeTitle] = useState('');
  const [existingResumes, setExistingResumes] = useState<Resume[]>([]),
  const [isLoading, setIsLoading] = useState(false);
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const handleCreateNewVersion = async () => {;
    if (newResumeTitle && newResumeTitle.trim()) {;
      setIsLoading(true);
      const resumeId = await createResume({ title: newResumeTitle && newResumeTitle.trim() }),;
      if (resumeId) {;
        await fetchResume(resumeId);
        onResumeChange(resumeId);
        setSaveDialogOpen(false);
        setNewResumeTitle('');
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD
  const handleCreateNewVersion = async () => {
    if (newResumeTitle.trim()) {
      setIsLoading(true);
      const resumeId = await createResume({ title: newResumeTitle.trim() });
      if (resumeId) {
        await fetchResume(resumeId);
        onResumeChange(resumeId);
        setSaveDialogOpen(false);
        setNewResumeTitle("");
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      }
      setIsLoading(false);
    }
  }
<<<<<<< HEAD

        setNewResumeTitle('')

        setNewResumeTitle('')

=======
<<<<<<< HEAD

        setNewResumeTitle('')


        setNewResumeTitle('')
=======
=======

        setNewResumeTitle('')

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { useState } from 'react',;

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
<<<<<<< HEAD

=======
        setSaveDialogOpen(false);
        setNewResumeTitle('');
<<<<<<< HEAD
      }
      setIsLoading(false);
    }
},
      }
      setIsLoading(false);
    }
  },
  };
>>>>>>> merged-prs-20250907-203621
  },

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground">Resume:</span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="gap-2">
<<<<<<< HEAD
            {currentResume?.basic_info?.title |"My Resume"}
=======
{currentResume?.basic_info?.title |"My Resume"}
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
=======

=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      }
      setIsLoading(false);
    }

"

<<<<<<< HEAD
        setNewResumeTitle("");
      }
      setIsLoading(false);
    }
  };
  },

=======

  return (


>>>>>>> merged-prs-20250907-203621
            <Button variant="outline" onClick={() => setSaveDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={handleCreateNewVersion}
              disabled={!newResumeTitle.trim() |isLoading}
<<<<<<< HEAD
              className="gap-2"
            >
              {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
              <Save className="h-4 w-4" />
              Save
=======
            <Button 
              variant="outline" 
              onClick={() => setSaveDialogOpen(false)}
            >;
              Cancel;
            </Button>;
            <Button;
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            >
              {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}

              <Save className="h-4 w-4" />
              Save;
>>>>>>> merged-prs-20250907-203621
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
<<<<<<< HEAD
  )
}
=======
<<<<<<< HEAD
  );
}

}<DropdownMenuSeparator /> <DropdownMenuItem > <Plus className="h-4 w-4 mr-2" /> Save as new version </DropdownMenuItem> </DropdownMenuContent> </DropdownMenu> <DialogHeader> <DialogTitle>Save as new resume version</DialogTitle> </DialogHeader> <div className="py-4" > <Input /> </div> <DialogFooter> <Button > Cancel </Button> <Button Save </Button> </DialogFooter> </DialogContent> </Dialog> </div>) 
});
}
}
;

  );
}
  )
}
=======

<<<<<<< HEAD
import { useState } from 'react',;
import { ;
  DropdownMenu,;
  DropdownMenuContent, ;
  DropdownMenuItem, ;
  DropdownMenuSeparator,;
  DropdownMenuTrigger ;
} from '@/components/ui/dropdown-menu',;
import { Button } from '@/components/ui/button',;
import { Input } from '@/components/ui/input',;
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog',;
import { Save, ChevronDown, Plus, Loader2 } from 'lucide-react',;
import { Resume } from '@/types/resume',;
import { useResume } from '@/hooks/useResume',;
;
interface ResumeVersionSelectorProps {;
  currentResume:Resume,;
  onResumeChange:(resumeId:string) => void;
}
;
export function ResumeVersionSelector({ currentResume, onResumeChange } ResumeVersionSelectorProps) {;
  const { createResume, fetchResume } = useResume(),;
  const [saveDialogOpen, setSaveDialogOpen] = useState(false),;
  const [newResumeTitle, setNewResumeTitle] = useState(''),;
  const [existingResumes, setExistingResumes] = useState<Resume[]>([]),;
  const [isLoading, setIsLoading] = useState(false),;
  ;
  const handleCreateNewVersion = async () => {;
    if (newResumeTitle.trim()) {;
      setIsLoading(true),;
      const resumeId = await createResume({ title:newResumeTitle.trim() }),;
      if (resumeId) {;
        await fetchResume(resumeId),;
        onResumeChange(resumeId),;
        setSaveDialogOpen(false),;
        setNewResumeTitle(''),;
      }
      setIsLoading(false),;
    }
  },;
;
  return (;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <div className="flex items-center gap-2">;
      <span className="text-sm text-muted-foreground">Resume:</span>;
      <DropdownMenu>;
        <DropdownMenuTrigger asChild>;
          <Button variant="outline" size="sm" className="gap-2">;
            {currentResume?.basic_info?.title || 'My Resume'}
            <ChevronDown className="h-4 w-4" />;
          </Button>;
        </DropdownMenuTrigger>;
        <DropdownMenuContent align="end">;
          {existingResumes.map((resume) => (;
            <DropdownMenuItem ;
              key={resume.id}
              onClick={() => onResumeChange(resume.id!)}
              className="cursor-pointer";
            >;
              {resume.basic_info.title}
            </DropdownMenuItem>;          ))}
          <DropdownMenuSeparator />;
          <DropdownMenuItem ;
            onClick={() => setSaveDialogOpen(true)}
            className="cursor-pointer";
          >;
            <Plus className="h-4 w-4 mr-2" />;
            Save as new version;
          </DropdownMenuItem>;
        </DropdownMenuContent>;
      </DropdownMenu>;
      ;
      <Dialog open={saveDialogOpen} onOpenChange={setSaveDialogOpen}>;
        <DialogContent className="sm:max-w-md">;
          <DialogHeader>;
            <DialogTitle>Save as new resume version</DialogTitle>;
          </DialogHeader>;
          <div className="py-4">;
            <Input;
              value={newResumeTitle}
              onChange={(e) => setNewResumeTitle(e.target.value)}
              placeholder="Enter resume title (e.g. DevOps Resume)";
            />;
          </div>;
          <DialogFooter>;
            <Button ;
              variant="outline" ;
              onClick={() => setSaveDialogOpen(false)}
            >;
              Cancel;
            </Button>;
            <Button ;
              onClick={handleCreateNewVersion}
              disabled={!newResumeTitle.trim() || isLoading}
              className="gap-2";
            >;
              {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
              <Save className="h-4 w-4" />;
              Save;
            </Button>;
          </DialogFooter>;
        </DialogContent>;
      </Dialog>;
    </div>;
  ),; 
}

  )
}

<<<<<<< HEAD
};
> {
  resume.basic info.title 
}</DropdownMenuItem>) ) 
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
;
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
