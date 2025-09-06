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
import { useState } from 'react';
import {import { useState } from 'react';
import { ;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuSeparator,;
  DropdownMenuTrigger,;
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {;
  Dialog,;
  DialogContent,;
  DialogFooter,;
  DialogHeader,;
  DialogTitle,;
} from '@/components/ui/dialog';
import { Save, ChevronDown, Plus, Loader2 } from 'lucide-react';
import { Resume } from '@/types/resume';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
import { useResume } from '@/hooks/useResume';
interface ResumeVersionSelectorProps {;
  currentResume: Resume;
  onResumeChange: (resumeId: string) => void

<<<<<<< HEAD
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
=======
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
        setNewResumeTitle('');
      setIsLoading(false);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
  }

  return (
<<<<<<< HEAD
    <div className='flex items-center gap-2'>
      <span className='text-sm text-muted-foreground'>Resume:</span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
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
              className="cursor-pointer"
            >
              {resume.basic_info.title}
            </DropdownMenuItem>
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          ))}
          <DropdownMenuSeparator />;
          <DropdownMenuItem
            onClick={() => setSaveDialogOpen(true)}
<<<<<<< HEAD
            className='cursor-pointer'          >
            <Plus className='h-4 w-4 mr-2' />            Save as new version
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
            <Plus className="h-4 w-4 mr-2" />
            onClick={() => setSaveDialogOpen(true)}
            className="cursor-pointer"
          >
            <Plus className="h-4 w-4 mr-2" />
            Save as new version
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Dialog open={saveDialogOpen} onOpenChange={setSaveDialogOpen}>
        <DialogContent className='sm:max-w-md'>
          <DialogHeader>
            <DialogTitle>Save as new resume version</DialogTitle>
          </DialogHeader>
          <div className='py-4'>
=======
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
            Save as new version;
          </DropdownMenuItem>;
        </DropdownMenuContent>;
      </DropdownMenu>;

      <Dialog open={saveDialogOpen} onOpenChange={setSaveDialogOpen}>;
        <DialogContent className='sm:max-w-md'>;
          <DialogHeader>;
            <DialogTitle>Save as new resume version</DialogTitle>;
          </DialogHeader>;
          <div className='py-4'>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            <Input
              value={newResumeTitle}
              onChange={e => setNewResumeTitle(e && e.target.value)}
              placeholder='Enter resume title (e && e.g. DevOps Resume)';
            />;
          </div>;
          <DialogFooter>;
            <Button variant='outline' onClick={() => setSaveDialogOpen(false)}>;
              Cancel;
            </Button>;
            <Button
              onClick={handleCreateNewVersion}
<<<<<<< HEAD
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
              <Save className="h-4 w-4" />
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
=======
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
              Save;
            </Button>;
          </DialogFooter>;
        </DialogContent>;
      </Dialog>;
    </div>;
  );

};
> {;
  resume && resume.basic info && info.title ;
}</DropdownMenuItem>) ) ;
}<DropdownMenuSeparator /> <DropdownMenuItem > <Plus className="h-4 w-4 mr-2" /> Save as new version </DropdownMenuItem> </DropdownMenuContent> </DropdownMenu> <DialogHeader> <DialogTitle>Save as new resume version</DialogTitle> </DialogHeader> <div className="py-4" > <Input /> </div> <DialogFooter> <Button > Cancel </Button> <Button Save </Button> </DialogFooter> </DialogContent> </Dialog> </div>) ;
}";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
> {
  resume.basic info.title
}</DropdownMenuItem>) )
}<DropdownMenuSeparator /> <DropdownMenuItem > <Plus className="h-4 w-4 mr-2" /> Save as new version </DropdownMenuItem> </DropdownMenuContent> </DropdownMenu> <DialogHeader> <DialogTitle>Save as new resume version</DialogTitle> </DialogHeader> <div className="py-4" > <Input /> </div> <DialogFooter> <Button > Cancel </Button> <Button Save </Button> </DialogFooter> </DialogContent> </Dialog> </div>)
}"
}