<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from 'react'
import {import { useState } from 'react'
import {
  DropdownMenu
  DropdownMenuContent
  DropdownMenuItem
  DropdownMenuSeparator
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
  Dialog
  DialogContent
  DialogFooter
  DialogHeader
  DialogTitle
} from '@/components/ui/dialog'

import { Save, ChevronDown, Plus, Loader2 } from 'lucide-react'
import { Resume  } from '@/types/resume';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { useResume } from '@/hooks/useResume';
interface ResumeVersionSelectorProps {
  currentResume: Resume;
  onResumeChange: (resumeId: string) => void


<<<<<<< HEAD
<<<<<<< HEAD







  return (

        setNewResumeTitle('')
      setIsLoading(false)
    }
  },
export function ResumeVersionSelector({
  currentResume
  onResumeChange
}: ResumeVersionSelectorProps) {
  const { createResume, fetchResume } = useResume()
  const [saveDialogOpen, setSaveDialogOpen] = useState(false)
  const [newResumeTitle, setNewResumeTitle] = useState('')
  const [existingResumes, setExistingResumes] = useState<Resume[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const handleCreateNewVersion = async () => {
    if (newResumeTitle.trim()) {
      setIsLoading(true)
      const resumeId = await createResume({ title: newResumeTitle.trim() })
      if (resumeId) {
        await fetchResume(resumeId)
        onResumeChange(resumeId)
        setSaveDialogOpen(false)
        setNewResumeTitle('')
      setIsLoading(false)
    }
  }

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
import { Save, ChevronDown, Plus, Loader2 } from 'lucide-react';
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
      }
      setIsLoading(false);
    }
  },

  return (
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function ResumeVersionSelector(): any ({;
  currentResume,;
  onResumeChange,;
}: ResumeVersionSelectorProps) {;
  const { createResume, fetchResume } = useResume();
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);
  const [newResumeTitle, setNewResumeTitle] = useState('');
  const [existingResumes, setExistingResumes] = useState<Resume[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateNewVersion = async () => {;
    if (newResumeTitle && newResumeTitle.trim()) {;

      setIsLoading(true);
      const resumeId = await createResume({ title: newResumeTitle && newResumeTitle.trim() });
      if (resumeId) {;
        await fetchResume(resumeId);
        onResumeChange(resumeId);
        setSaveDialogOpen(false);


import { useState } from 'react';
import {import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components / ui / dropdown - menu';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components / ui / dialog';
import { Save, ChevronDown, Plus, Loader2 } from 'lucide-react';
import { Resume } from '@/types / resume';
import { use_resume } from '@/hooks / use_resume';
interface ResumeVersionSelectorProps {
  current_resume: Resume;
  onResumeChange: (resume_id: string) => void;
export /**
 * ResumeVersionSelector - Function description
 */
function ResumeVersionSelector() {
  const { create_resume, fetch_resume } = use_resume ();
  const [saveDialogOpen, setSaveDialogOpen] = useState (false);
  const [newResumeTitle, setNewResumeTitle] = useState ('');
  const [existing_resumes, setExistingResumes] = useState < Resume[]>([]);
  const [is_loading, setIsLoading] = useState (false);
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
        setNewResumeTitle ('');
      setIsLoading (false);
    }
  }
<<<<<<< HEAD








  return (

        setNewResumeTitle('')
      }
      setIsLoading(false)
    }
  };


  return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
import { Save, ChevronDown, Plus, Loader2 } from 'lucide-react';
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
      }
      setIsLoading(false)
    }
  },

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

  return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground">Resume:</span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
<<<<<<< HEAD
<<<<<<< HEAD
          <Button variant='outline' size='sm' className='gap-2'>
            {currentResume?.basic_info?.title |'My Resume'}
            <ChevronDown className='h-4 w-4' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          {existingResumes.map(resume => (
            <DropdownMenuItem
              key={resume.id}
              onClick={() => onResumeChange(resume.id!)}
              className='cursor-pointer'            >              className="cursor-pointer"
        <DropdownMenuContent align="end">
          {existingResumes.map((resume) => (
            <DropdownMenuItem
              key={resume.id}
              onClick={() => onResumeChange(resume.id!)}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <Button variant="outline" size="sm" className="gap-2">
            {currentResume?.basic_info?.title || 'My Resume'}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <DropdownMenuContent align="end">
          {existingResumes.map((resume) => (
            <DropdownMenuItem
    <div className='flex items - center gap - 2'>;
      <span className='text - sm text - muted - foreground'>Resume:</span>;
      <DropdownMenu>;
        <DropdownMenuTrigger as_child>;
          <Button variant='outline' size='sm' className='gap - 2'>;
            {current_resume?.basic_info?.title || 'My Resume'}
            <ChevronDown className='h - 4 w - 4' />;
          </Button>;
        </DropdownMenuTrigger>;
        <DropdownMenuContent align='end'>;
          {existing_resumes.map (resume => (
            <DropdownMenuItem;
              key={resume.id}
              on_click={() => onResumeChange (resume.id!)}
              className='cursor - pointer'            >              className="cursor - pointer";
        <DropdownMenuContent align="end">;
          {existing_resumes.map ((resume) => (
            <DropdownMenuItem;
              key={resume.id}
              on_click={() => onResumeChange (resume.id!)}
              className="cursor - pointer";
            >;


<<<<<<< HEAD
=======
=======
        <DropdownMenuContent align="end">
          {existingResumes.map((resume) => (
            <DropdownMenuItem 
              key={resume.id}
              onClick={() => onResumeChange(resume.id!)}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className="cursor-pointer"
            >
              {resume.basic_info.title}

    <div className='flex items-center gap-2'>;
      <span className='text-sm text-muted-foreground'>Resume:</span>;
      <DropdownMenu>;
        <DropdownMenuTrigger asChild>;
          <Button variant='outline' size='sm' className='gap-2'>;
            {currentResume?.basic_info?.title || 'My Resume'}
            <ChevronDown className='h-4 w-4' />;
          </Button>;
        </DropdownMenuTrigger>;
        <DropdownMenuContent align='end'>;
          {existingResumes && existingResumes.map(resume => (;
            <DropdownMenuItem
              key={resume && resume.id}
              onClick={() => onResumeChange(resume && resume.id!)}
              className='cursor-pointer'            >              className="cursor-pointer";
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
<<<<<<< HEAD
              className="cursor-pointer"
            >
              {resume.basic_info.title}
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => setSaveDialogOpen(true)}
            className='cursor-pointer'          >
            <Plus className='h-4 w-4 mr-2' />            Save as new version
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
            <Plus className="h-4 w-4 mr-2" />
          <DropdownMenuSeparator />;
          <DropdownMenuItem;
          <DropdownMenuSeparator />;
          <DropdownMenuItem;
=======
          <DropdownMenuSeparator />
          <DropdownMenuItem 

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          <DropdownMenuSeparator />;
          <DropdownMenuItem;

            onClick={() => setSaveDialogOpen(true)}
<<<<<<< HEAD
=======
            className="cursor-pointer"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          >
            <Plus className="h-4 w-4 mr-2" />
            Save as new version
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
<<<<<<< HEAD
<<<<<<< HEAD
      <Dialog open={saveDialogOpen} onOpenChange={setSaveDialogOpen}>
        <DialogContent className='sm:max-w-md'>
          <DialogHeader>
            <DialogTitle>Save as new resume version</DialogTitle>
          </DialogHeader>
          <div className='py-4'>
            <Input
              value={newResumeTitle}
              onChange={e => setNewResumeTitle(e.target.value)}
              placeholder='Enter resume title (e.g. DevOps Resume)'
            />
          </div>
          <DialogFooter>
            <Button variant='outline' onClick={() => setSaveDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={handleCreateNewVersion}
              disabled={!newResumeTitle.trim() |isLoading}
              className='gap-2'
              value = {newResumeTitle,}
              onChange = {(e,) => setNewResumeTitle(e.target.value),}
              placeholder="Enter resume title (e.g. DevOps Resume)"
            />
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick = {() => setSaveDialogOpen(false),}
            >
              Cancel
            </Button>
            <Button
              onClick = {handleCreateNewVersion,}
              disabled = {!newResumeTitle.trim() |isLoading,}
              className="gap-2"
            >
              {isLoading && <Loader2 className='h-4 w-4 animate-spin' />}
              <Save className='h-4 w-4' />              Save              {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            className='cursor-pointer'          >;
            <Plus className='h-4 w-4 mr-2' />            Save as new version;
          </DropdownMenuItem>;
        </DropdownMenuContent>;
      </DropdownMenu>;

            <Plus className="h-4 w-4 mr-2" />;
            onClick={() => setSaveDialogOpen(true)}
            className="cursor-pointer";
          >;
            <Plus className="h-4 w-4 mr-2" />;
            </DropdownMenuItem>))}
          <DropdownMenuSeparator />;
          <DropdownMenuItem;
            on_click={() => setSaveDialogOpen (true)}
            className='cursor - pointer'          >;
            <Plus className='h - 4 w - 4 mr - 2' />            Save as new version;
          </DropdownMenuItem>;
        </DropdownMenuContent>;
      </DropdownMenu>;
            <Plus className="h - 4 w - 4 mr - 2" />;
            on_click={() => setSaveDialogOpen (true)}
            className="cursor - pointer";
          >;
            <Plus className="h - 4 w - 4 mr - 2" />;

            Save as new version;
          </DropdownMenuItem>;
        </DropdownMenuContent>;
      </DropdownMenu>;




      
<<<<<<< HEAD
<<<<<<< HEAD
      
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662



              placeholder="Enter resume title (e.g. DevOps Resume)"
          </div>
          <DialogFooter>

            <Button 
              variant="outline" 
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              placeholder="Enter resume title (e.g. DevOps Resume)"
            />
          </div>
          <DialogFooter>
<<<<<<< HEAD
<<<<<<< HEAD
            <Button 
              variant="outline" 
              onClick = {() => setSaveDialogOpen(false),}
            >
              Cancel
            </Button>
            <Button 
              onClick = {handleCreateNewVersion,}
              disabled = {!newResumeTitle.trim() || isLoading,}
              className="gap-2"
            >
              {isLoading && <Loader2 className='h-4 w-4 animate-spin' />}
              <Save className='h-4 w-4' />              Save              {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            <Button 
              variant="outline" 



<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <Save className="h-4 w-4" />
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
              disabled={!newResumeTitle && newResumeTitle.trim() || isLoading}
              className='gap-2'
              value = {newResumeTitle,}
              onChange = {(e,) => setNewResumeTitle(e && e.target.value),}
              placeholder="Enter resume title (e && e.g. DevOps Resume)";
            />;
          </div>;
          <DialogFooter>;
            <Button
              variant="outline" 
              onClick = {() => setSaveDialogOpen(false),}
            >;
              Cancel;
            </Button>;
            <Button
              onClick = {handleCreateNewVersion,}
              disabled = {!newResumeTitle && newResumeTitle.trim() || isLoading,}
              className="gap-2">;
              {isLoading && <Loader2 className='h-4 w-4 animate-spin' />}
              <Save className='h-4 w-4' />              Save              {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
              <Save className="h-4 w-4" />;
      <Dialog open={saveDialogOpen} onOpenChange={setSaveDialogOpen}>;
        <DialogContent className='sm:max - w-md'>;
          <DialogHeader>;
            <DialogTitle > Save as new resume version</DialogTitle>;
          </DialogHeader>;
          <div className='py - 4'>;
            <Input;
              value={newResumeTitle}
              on_change={e => setNewResumeTitle (e.target.value)}
              placeholder='Enter resume title (e.g. DevOps Resume)';
            />;
          </div>;
          <DialogFooter>;
            <Button variant='outline' on_click={() => setSaveDialogOpen (false)}>;
              Cancel;
            </Button>;
            <Button;
              on_click={handleCreateNewVersion}
              disabled={!newResumeTitle.trim () || is_loading}
              className='gap - 2';
              value = {newResumeTitle, }
              on_change = {(e, ) => setNewResumeTitle (e.target.value), }
              placeholder="Enter resume title (e.g. DevOps Resume)";
            />;
          </div>;
          <DialogFooter>;
            <Button;
              variant="outline";
              on_click = {() => setSaveDialogOpen (false), }
            >;
              Cancel;
            </Button>;
            <Button;
              on_click = {handleCreateNewVersion, }
              disabled = {!newResumeTitle.trim () || is_loading, }
              className="gap - 2";
            >;
              {is_loading && <Loader2 className='h - 4 w - 4 animate - spin' />}
              <Save className='h - 4 w - 4' />              Save              {is_loading && <Loader2 className="h - 4 w - 4 animate - spin" />}
              <Save className="h - 4 w - 4" />;
              Save;
            </Button>;
          </DialogFooter>;
        </DialogContent>;
      </Dialog>;


}
<<<<<<< HEAD
> {
  resume.basic info.title
}</DropdownMenuItem>) )
}<DropdownMenuSeparator /> <DropdownMenuItem > <Plus className="h-4 w-4 mr-2" /> Save as new version </DropdownMenuItem> </DropdownMenuContent> </DropdownMenu> <DialogHeader> <DialogTitle>Save as new resume version</DialogTitle> </DialogHeader> <div className="py-4" > <Input /> </div> <DialogFooter> <Button > Cancel </Button> <Button Save </Button> </DialogFooter> </DialogContent> </Dialog> </div>)
}"
}
;
  resume.basic info.title 
}</DropdownMenuItem>) ) ;
}<DropdownMenuSeparator /> <DropdownMenuItem > <Plus className="h-4 w-4 mr-2" /> Save as new version </DropdownMenuItem> </DropdownMenuContent> </DropdownMenu> <DialogHeader> <DialogTitle>Save as new resume version</DialogTitle> </DialogHeader> <div className="py-4" > <Input /> </div> <DialogFooter> <Button > Cancel </Button> <Button Save </Button> </DialogFooter> </DialogContent> </Dialog> </div>) ;
}";
};
;

    </div>);
}
}
;
  resume.basic info.title 
}</DropdownMenuItem>) ) ;
}<DropdownMenuSeparator /> <DropdownMenuItem > <Plus className="h-4 w-4 mr-2" /> Save as new version </DropdownMenuItem> </DropdownMenuContent> </DropdownMenu> <DialogHeader> <DialogTitle>Save as new resume version</DialogTitle> </DialogHeader> <div className="py-4" > <Input /> </div> <DialogFooter> <Button > Cancel </Button> <Button Save </Button> </DialogFooter> </DialogContent> </Dialog> </div>) ;
}";
};
;
;
}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

}


;

    </div>);
}
> {
  resume.basic info.title;
}</DropdownMenuItem>) );
}<DropdownMenuSeparator /> <DropdownMenuItem > <Plus className="h - 4 w - 4 mr - 2" /> Save as new version </DropdownMenuItem> </DropdownMenuContent> </DropdownMenu> <DialogHeader> <DialogTitle > Save as new resume version</DialogTitle> </DialogHeader> <div className="py - 4" > <Input /> </div> <DialogFooter> <Button > Cancel </Button> <Button Save </Button> </DialogFooter> </DialogContent> </Dialog> </div>);
}";
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
