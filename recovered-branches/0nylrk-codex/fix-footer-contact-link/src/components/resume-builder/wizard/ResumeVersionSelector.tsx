
import { useState } from 'react';
import { 
<<<<<<< HEAD
  DropdownMenu
  DropdownMenuContent
  DropdownMenuItem
=======
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
>>>>>>> origin/auto/autonomy-17186719616
  DropdownMenuSeparator,
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
<<<<<<< HEAD
import { DialogContentDialogFooterDialogHeaderDialogTitle } from '@/components/ui/dialog';
SaveChevronDownPlusLoader2
=======
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Save, ChevronDown, Plus, Loader2 } from 'lucide-react';
>>>>>>> origin/auto/autonomy-17186719616
import { Resume } from '@/types/resume';
import { useResume } from '@/hooks/useResume';

interface ResumeVersionSelectorProps {
  currentResume: Resume;
  onResumeChange: (resumeId: string) => void;
}

<<<<<<< HEAD
export function ResumeVersionSelector({ currentResumeonResumeChange }: ResumeVersionSelectorProps) {
  const { createResumefetchResume } = useResume();
  const [saveDialogOpensetSaveDialogOpen] = useState(false);
  const [newResumeTitlesetNewResumeTitle] = useState('');
  const [existingResumesetExistingResumes] = useState<Resume[]>([]);
  const [isLoadingsetIsLoading] = useState(false);
=======
export function ResumeVersionSelector({ currentResume, onResumeChange }: ResumeVersionSelectorProps) {
  const { createResume, fetchResume } = useResume();
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);
  const [newResumeTitle, setNewResumeTitle] = useState('');
  const [existingResumes, setExistingResumes] = useState<Resume[]>([]);
  const [isLoading, setIsLoading] = useState(false);
>>>>>>> origin/auto/autonomy-17186719616
  
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
  );
}
