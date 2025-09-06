<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeVersionSelector.tsx

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======



========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeVersionSelector.tsx
import {useState} from 'react';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger} from '@/components/ui/dropdown-menu';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle} from '@/components/ui/dialog';
import {Save, ChevronDown, Plus, Loader2} from 'lucide-react';
import {Resume} from '@/types/resume';
import {useResume} from '@/hooks/useResume';

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

<<<<<<< HEAD
=======
import {useState} from 'react';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger} from '@/components/ui/dropdown-menu';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle} from '@/components/ui/dialog';
import {Save, ChevronDown, Plus, Loader2} from 'lucide-react';
import {Resume} from '@/types/resume';
import {useResume} from '@/hooks/useResume';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface ResumeVersionSelectorProps {
  currentResume: Resume;
  onResumeChange: (resumeId: string) => void
}
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeVersionSelector.tsx

<<<<<<< HEAD
<<<<<<< HEAD
=======

export function ResumeVersionSelector({ currentResume, onResumeChange }: ResumeVersionSelectorProps) {;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
export function ResumeVersionSelector(): any ({ currentResume, onResumeChange }: ResumeVersionSelectorProps) {;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeVersionSelector.tsx
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export function ResumeVersionSelector({
  currentResume
  onResumeChange
}: ResumeVersionSelectorProps) {
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

export function ResumeVersionSelector({ currentResume, onResumeChange }: ResumeVersionSelectorProps) {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const { createResume, fetchResume } = useResume();
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);
  const [newResumeTitle, setNewResumeTitle] = useState('');
  const [existingResumes, setExistingResumes] = useState<Resume[]>([]),
  const [isLoading, setIsLoading] = useState(false);
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeVersionSelector.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeVersionSelector.tsx
  const handleCreateNewVersion = async () => {;
    if (newResumeTitle && newResumeTitle.trim()) {;
      setIsLoading(true);
      const resumeId = await createResume({ title: newResumeTitle && newResumeTitle.trim() }),;
      if (resumeId) {;
        await fetchResume(resumeId);
        onResumeChange(resumeId);
        setSaveDialogOpen(false);
<<<<<<< HEAD

=======
        setNewResumeTitle('');
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeVersionSelector.tsx

=======

  const handleCreateNewVersion = async () => {
    if (newResumeTitle.trim()) {
      setIsLoading(true);
      const resumeId = await createResume({ title: newResumeTitle.trim() });
      if (resumeId) {
        await fetchResume(resumeId);
        onResumeChange(resumeId);
        setSaveDialogOpen(false);
<<<<<<< HEAD
setNewResumeTitle("");
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
        setNewResumeTitle("");
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      }
      setIsLoading(false);
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======

        setNewResumeTitle('')

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
        setNewResumeTitle('')
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useState } from 'react',;
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuSeparator,;
  DropdownMenuTrigger;
} from '@/components/ui/dropdown-menu',;
import { Button } from '@/components/ui/button',;
import { Input } from '@/components/ui/input',;
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog',;
import { Save, ChevronDown, Plus, Loader2 } from 'lucide-react',;
import { Resume } from '@/types/resume',;
import { useResume } from '@/hooks/useResume',;
interface ResumeVersionSelectorProps {;
  currentResume: Resume,;
  onResumeChange: (resumeId: string) => void;
}
;
export function ResumeVersionSelector({ currentResume, onResumeChange }: ResumeVersionSelectorProps) {;
  const { createResume, fetchResume } = useResume(),;
  const [saveDialogOpen, setSaveDialogOpen] = useState(false),;
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
        setNewResumeTitle('');
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
      }
      setIsLoading(false);
    }
=======
      }
      setIsLoading(false);
    }
},
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
      }
      setIsLoading(false);
    }
  },
  };
  },
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      }
      setIsLoading(false);
    }


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

  return (


=======
            <Button variant="outline" onClick={() => setSaveDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={handleCreateNewVersion}
              disabled={!newResumeTitle.trim() |isLoading}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            <Button 
              variant="outline" 
              onClick={() => setSaveDialogOpen(false)}
            >;
              Cancel;
            </Button>;
            <Button;
              onClick={handleCreateNewVersion}
              disabled={!newResumeTitle.trim() || isLoading}
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======

            <Button variant="outline" onClick={() => setSaveDialogOpen(false)}>
              Cancel
            </Button>
            <Button
onClick={handleCreateNewVersion}
              disabled={!newResumeTitle.trim() |isLoading}
              onClick={handleCreateNewVersion}
              disabled={!newResumeTitle.trim() || isLoading}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              className="gap-2"
            >
              {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
              <Save className="h-4 w-4" />
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeVersionSelector.tsx
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      }
      setIsLoading(false),;
    }
<<<<<<< HEAD
  }
  return (
=======
  },;
;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD
          {existingResumes && existingResumes.map((resume) => (;
            <DropdownMenuItem
              key={resume && resume.id}
              onClick={() => onResumeChange(resume && resume.id!)}
              className="cursor-pointer";
            >;
              {resume && resume.basic_info.title}
            </DropdownMenuItem>;
          ))}
          <DropdownMenuSeparator />;
          <DropdownMenuItem
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            onClick={() => setSaveDialogOpen(true)}
            className="cursor-pointer";
          >;
            <Plus className="h-4 w-4 mr-2" />;
<<<<<<< HEAD
import { useState  } from './react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components / ui / dropdown - menu';
import { Button  } from '@/components / ui / button';
import { Input  } from '@/components / ui / input';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components / ui / dialog';
import { Save, ChevronDown, Plus, Loader2  } from './lucide-react';
import { Resume  } from '@/types / resume';
import { use_resume  } from '@/hooks / use_resume';
interface ResumeVersionSelectorProps {
  current_resume: Resume;
  onResumeChange: (resume_id: string) => void;
}
export /**
 * ResumeVersionSelector - Function description
 */
function ResumeVersionSelector() {
  const { create_resume, fetch_resume } = use_resume ();
  const [saveDialogOpen, setSaveDialogOpen] = useState (false);
  const [newResumeTitle, setNewResumeTitle] = useState ("");
  const [existing_resumes, setExistingResumes] = useState < Resume[]>([]);
  const [is_loading, setIsLoading] = useState (false);
;
  const handleCreateNewVersion = async () => {
    if () {) {
  $2
}
      setIsLoading (true);
      const resume_id = await create_resume ({ title: newResumeTitle.trim () });
      // Check condition
if ( {) {
  $2
}
        await fetch_resume (resume_id);
        onResumeChange (resume_id);
        setSaveDialogOpen (false);
        setNewResumeTitle ("");
      }
      setIsLoading (false);
    }
  }
;
  return (
    <div className="flex items - center gap - 2">;
      <span className="text - sm text - muted - foreground">Resume:</span>;
      <DropdownMenu>;
        <DropdownMenuTrigger as_child>;
          <Button variant="outline" size="sm" className="gap - 2">;
            {current_resume?.basic_info?.title || "My Resume"}
            <ChevronDown className="h - 4 w - 4" />;
          </Button>;
        </DropdownMenuTrigger>;
        <DropdownMenuContent align="end">;
          {existing_resumes.map ((resume) => (
            <DropdownMenuItem;
              key={resume.id}
              on_click={() => onResumeChange (resume.id!)}
              className="cursor - pointer";
            >;
              {resume.basic_info.title}
            </DropdownMenuItem>))}
          <DropdownMenuSeparator />;
          <DropdownMenuItem;
            on_click={() => setSaveDialogOpen (true)}
            className="cursor - pointer";
          >;
            <Plus className="h - 4 w - 4 mr - 2" />;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeVersionSelector.tsx

========
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeVersionSelector.tsx
            Save as new version;
          </DropdownMenuItem>;
        </DropdownMenuContent>;
      </DropdownMenu>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeVersionSelector.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeVersionSelector.tsx
      <Dialog open={saveDialogOpen} onOpenChange={setSaveDialogOpen}>;
        <DialogContent className="sm:max - w-md">;
          <DialogHeader>;
            <DialogTitle > Save as new resume version</DialogTitle>;
          </DialogHeader>;
          <div className="py - 4">;
            <Input;
              value={newResumeTitle}
              on_change={(e) => setNewResumeTitle (e.target.value)}
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              placeholder="Enter resume title (e.g. DevOps Resume)";
            />;
          </div>;
          <DialogFooter>;
<<<<<<< HEAD
            <Button variant="outline" on_click={() => setSaveDialogOpen (false)}>;
              Cancel;
            </Button>;
            <Button;
              on_click={handleCreateNewVersion}
              disabled={!newResumeTitle.trim () || is_loading}
              className="gap - 2";
            >;
              {is_loading && <Loader2 className="h - 4 w - 4 animate - spin" />}
              <Save className="h - 4 w - 4" />;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeVersionSelector.tsx

========
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeVersionSelector.tsx
              Save;
            </Button>;
          </DialogFooter>;
        </DialogContent>;
      </Dialog>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeVersionSelector.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeVersionSelector.tsx
    </div>);
=======
    </div>;
  ),; 
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeVersionSelector.tsx

=======

  )
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
};
> {
  resume.basic info.title 
}</DropdownMenuItem>) ) 
}<DropdownMenuSeparator /> <DropdownMenuItem > <Plus className="h-4 w-4 mr-2" /> Save as new version </DropdownMenuItem> </DropdownMenuContent> </DropdownMenu> <DialogHeader> <DialogTitle>Save as new resume version</DialogTitle> </DialogHeader> <div className="py-4" > <Input /> </div> <DialogFooter> <Button > Cancel </Button> <Button Save </Button> </DialogFooter> </DialogContent> </Dialog> </div>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeVersionSelector.tsx
=======
  );
}
}
;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  );
}
  )
}
;
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
