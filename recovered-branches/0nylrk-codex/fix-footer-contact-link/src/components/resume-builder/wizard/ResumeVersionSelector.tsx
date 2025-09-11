
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


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import {useState} from 'react';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger} from '@/components/ui/dropdown-menu';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle} from '@/components/ui/dialog';
import {Save, ChevronDown, Plus, Loader2} from 'lucide-react';
import {Resume} from '@/types/resume';
import {useResume} from '@/hooks/useResume';
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface ResumeVersionSelectorProps {
  currentResume: Resume;
  onResumeChange: (resumeId: string) => void
}

<<<<<<< HEAD
<<<<<<< HEAD
export function ResumeVersionSelector({ currentResume, onResumeChange }: ResumeVersionSelectorProps) {;


export function ResumeVersionSelector(): any ({ currentResume, onResumeChange }: ResumeVersionSelectorProps) {;

export function ResumeVersionSelector({
  currentResume
  onResumeChange
}: ResumeVersionSelectorProps) {

export function ResumeVersionSelector({ currentResume, onResumeChange }: ResumeVersionSelectorProps) {;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export function ResumeVersionSelector({ currentResume, onResumeChange }: ResumeVersionSelectorProps) {;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const { createResume, fetchResume } = useResume();
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);
  const [newResumeTitle, setNewResumeTitle] = useState('');
  const [existingResumes, setExistingResumes] = useState<Resume[]>([]),
  const [isLoading, setIsLoading] = useState(false);
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleCreateNewVersion = async () => {;
    if (newResumeTitle && newResumeTitle.trim()) {;
      setIsLoading(true);
      const resumeId = await createResume({ title: newResumeTitle && newResumeTitle.trim() }),;
      if (resumeId) {;
        await fetchResume(resumeId);
        onResumeChange(resumeId);
        setSaveDialogOpen(false);
        setNewResumeTitle('');

<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }
      setIsLoading(false);
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD

        setNewResumeTitle('')


        setNewResumeTitle('')
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======

        setNewResumeTitle('')

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      }
      setIsLoading(false);
    }
},
      }
      setIsLoading(false);
    }
  },
  };
  },
=======


      }
      setIsLoading(false);
    }


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      }
      setIsLoading(false);
    }



  return (


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Button variant="outline" onClick={() => setSaveDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={handleCreateNewVersion}
              disabled={!newResumeTitle.trim() |isLoading}
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

            <Button variant="outline" onClick={() => setSaveDialogOpen(false)}>
              Cancel
            </Button>
            <Button
onClick={handleCreateNewVersion}
              disabled={!newResumeTitle.trim() |isLoading}
              onClick={handleCreateNewVersion}
              disabled={!newResumeTitle.trim() || isLoading}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  );
}
  )
}
<<<<<<< HEAD
;
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
