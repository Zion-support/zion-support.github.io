
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



import {useState} from 'react';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger} from '@/components/ui/dropdown-menu';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle} from '@/components/ui/dialog';
import {Save, ChevronDown, Plus, Loader2} from 'lucide-react';
import {Resume} from '@/types/resume';
import {useResume} from '@/hooks/useResume';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface ResumeVersionSelectorProps {
  currentResume: Resume;
  onResumeChange: (resumeId: string) => void
}

<<<<<<< HEAD
export function ResumeVersionSelector({
  currentResume
  onResumeChange
}: ResumeVersionSelectorProps) {

=======
export function ResumeVersionSelector({ currentResume, onResumeChange }: ResumeVersionSelectorProps) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const { createResume, fetchResume } = useResume();
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);
  const [newResumeTitle, setNewResumeTitle] = useState('');
  const [existingResumes, setExistingResumes] = useState<Resume[]>([]),
  const [isLoading, setIsLoading] = useState(false);


  const handleCreateNewVersion = async () => {;
    if (newResumeTitle && newResumeTitle.trim()) {;
      setIsLoading(true);
      const resumeId = await createResume({ title: newResumeTitle && newResumeTitle.trim() }),;
      if (resumeId) {;
        await fetchResume(resumeId);
        onResumeChange(resumeId);
        setSaveDialogOpen(false);
<<<<<<< HEAD
        setNewResumeTitle("");
      }
      setIsLoading(false);
    }
  }
=======

        setNewResumeTitle('')
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      }
      setIsLoading(false);
    }
<<<<<<< HEAD
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
  };
=======
  },
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

  return (


            <Button 
              variant="outline" 
              onClick={() => setSaveDialogOpen(false)}
            >;
              Cancel;
            </Button>;
            <Button;
              onClick={handleCreateNewVersion}
              disabled={!newResumeTitle.trim() || isLoading}


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
            onClick={() => setSaveDialogOpen(true)}
            className="cursor-pointer";
          >;
            <Plus className="h-4 w-4 mr-2" />;
=======
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

            Save as new version;
          </DropdownMenuItem>;
        </DropdownMenuContent>;
      </DropdownMenu>;

      <Dialog open={saveDialogOpen} onOpenChange={setSaveDialogOpen}>;
        <DialogContent className="sm:max - w-md">;
          <DialogHeader>;
            <DialogTitle > Save as new resume version</DialogTitle>;
          </DialogHeader>;
          <div className="py - 4">;
            <Input;
              value={newResumeTitle}
              on_change={(e) => setNewResumeTitle (e.target.value)}
              placeholder="Enter resume title (e.g. DevOps Resume)";
            />;
          </div>;
          <DialogFooter>;
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

              Save;
            </Button>;
          </DialogFooter>;
        </DialogContent>;
      </Dialog>;

    </div>);
}

=======

  )
}
<<<<<<< HEAD
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
=======
;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
