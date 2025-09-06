

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








  return (

        setNewResumeTitle('')
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
      }
      setIsLoading(false)
    }
  },

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground">Resume:</span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>

        <DropdownMenuContent align='end'>
          {existingResumes.map(resume => (
            <DropdownMenuItem
              key={resume.id}
              onClick={() => onResumeChange(resume.id!)}
              className='cursor-pointer'            >              className="cursor-pointer"
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        <DropdownMenuContent align="end">
          {existingResumes.map((resume) => (
            <DropdownMenuItem 
              key={resume.id}
              onClick={() => onResumeChange(resume.id!)}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
          <DropdownMenuSeparator />
          <DropdownMenuItem 


          <DropdownMenuSeparator />;
          <DropdownMenuItem;

            onClick={() => setSaveDialogOpen(true)}
            className="cursor-pointer"
          >
            <Plus className="h-4 w-4 mr-2" />
            Save as new version
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

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




      
      <Dialog open={saveDialogOpen} onOpenChange={setSaveDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Save as new resume version</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <Input
              value={newResumeTitle}
              onChange={(e) => setNewResumeTitle(e.target.value)}




>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
              placeholder="Enter resume title (e.g. DevOps Resume)"
            />
          </div>
          <DialogFooter>
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
<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
