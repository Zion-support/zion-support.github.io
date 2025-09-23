
<<<<<<< HEAD
import { useState } from 'react',
import { 
  DropdownMenu,
=======
import { useState } from 'react';
import { 
  DropdownMenu, 
>>>>>>> origin/auto/autonomy-17186719616
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator,
  DropdownMenuTrigger 
<<<<<<< HEAD
} from '@/components/ui/dropdown-menu',
import { Button } from '@/components/ui/button',
import { Input } from '@/components/ui/input',
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog',
import { Save, ChevronDown, Plus, Loader2 } from 'lucide-react'
import { Resume } from '@/types/resume',
import { useResume } from '@/hooks/useResume',

interface ResumeVersionSelectorProps {
  currentResume: Resume,
  onResumeChange: (resumeId: string) => void
}

export function ResumeVersionSelector({ currentResume, onResumeChange }: ResumeVersionSelectorProps) {
  const { createResume, fetchResume } = useResume(),
  const [saveDialogOpen, setSaveDialogOpen] = useState(false),
  const [newResumeTitle, setNewResumeTitle] = useState(''),
  const [existingResumes, setExistingResumes] = useState<Resume[]>([]),
  const [isLoading, setIsLoading] = useState(false),
  
  const handleCreateNewVersion = async () => {
    if (newResumeTitle.trim()) {
      setIsLoading(true),
      const resumeId = await createResume({ title: newResumeTitle.trim() }),
      if (resumeId) {
        await fetchResume(resumeId),
        onResumeChange(resumeId),
        setSaveDialogOpen(false),
        setNewResumeTitle(''),
      }
      setIsLoading(false),
    }
  },
=======
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Save, ChevronDown, Plus, Loader2 } from 'lucide-react'
import { Resume } from '@/types/resume';
import { useResume } from '@/hooks/useResume';

interface ResumeVersionSelectorProps {
  currentResume: Resume;
  onResumeChange: (resumeId: string) => void;
}

export function ResumeVersionSelector({ currentResume, onResumeChange }: ResumeVersionSelectorProps) {
  const { createResume, fetchResume } = useResume();
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);
  const [newResumeTitle, setNewResumeTitle] = useState('');
  const [existingResumes, setExistingResumes] = useState<Resume[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleCreateNewVersion = async () => {
    if (newResumeTitle.trim()) {
      setIsLoading(true);
      const resumeId = await createResume({ title: newResumeTitle.trim() });
      if (resumeId) {
        await fetchResume(resumeId);
        onResumeChange(resumeId);
        setSaveDialogOpen(false);
        setNewResumeTitle('');
      }
      setIsLoading(false);
    }
  };
>>>>>>> origin/auto/autonomy-17186719616

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground">Resume:</span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="gap-2">
            {currentResume?.basic_info?.title || 'My Resume'}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {existingResumes.map((resume) => (
<<<<<<< HEAD
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
=======
            <DropdownMenuItem 
>>>>>>> origin/auto/autonomy-17186719616
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
>>>>>>> origin/auto/autonomy-17186719616
            <Button 
              variant="outline" 
              onClick={() => setSaveDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button 
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
<<<<<<< HEAD
  ),
=======
  );
>>>>>>> origin/auto/autonomy-17186719616
}
