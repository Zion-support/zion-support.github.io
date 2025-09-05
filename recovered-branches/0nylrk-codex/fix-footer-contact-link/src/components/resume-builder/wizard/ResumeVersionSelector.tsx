
<<<<<<< HEAD
import { useState } from 'react',
import { 
  DropdownMenu,
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator,
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu',
import { Button } from '@/components/ui/button',
import { Input } from '@/components/ui/input',
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog',
import { Save, ChevronDown, Plus, Loader2 } from 'lucide-react',
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
        setNewResumeTitle('')
      }
      setIsLoading(false)
=======
import {_DropdownMenu, _DropdownMenuContent, _DropdownMenuItem, _DropdownMenuSeparator, _DropdownMenuTrigger} from '@/components/ui/dropdown-menu';

interface ResumeVersionSelectorProps {_currentResume: Resume;
  onResumeChange: (_resumeId: string) => void;}

export function ResumeVersionSelector(_{_currentResume, _onResumeChange}: ResumeVersionSelectorProps) {_const { createResume, _fetchResume} = useResume();
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);
  const [newResumeTitle, setNewResumeTitle] = useState('');
  const [existingResumes, setExistingResumes] = useState<Resume[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const _handleCreateNewVersion = async () => {_if (newResumeTitle.trim()) {
      setIsLoading(true);
      const _resumeId = await createResume({ title: newResumeTitle.trim()});
      if (resumeId) {_await fetchResume(resumeId);
        onResumeChange(resumeId);
        setSaveDialogOpen(false);
        setNewResumeTitle('');}
      setIsLoading(false);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

<<<<<<< HEAD
  return (
    <div className=&quot;flex items-center gap-2&quot;>
      <span className=&quot;text-sm text-muted-foreground&quot;>Resume:</span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant=&quot;outline&quot; size=&quot;sm&quot; className=&quot;gap-2&quot;>
            {currentResume?.basic_info?.title || 'My Resume'}
            <ChevronDown className=&quot;h-4 w-4&quot; />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align=&quot;end&quot;>
          {existingResumes.map((resume) => (
            <DropdownMenuItem 
              key={resume.id}
              onClick={() => onResumeChange(resume.id!)}
              className=&quot;cursor-pointer&quot;
=======
  return (_<div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground">Resume:</span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="gap-2">
            {_currentResume?.basic_info?.title || 'My Resume'}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {_existingResumes.map((resume) => (_<DropdownMenuItem 
              key={resume.id}
              onClick={_() => onResumeChange(resume.id!)}
              className="cursor-pointer"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              {_resume.basic_info.title}
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuItem 
<<<<<<< HEAD
            onClick={() => setSaveDialogOpen(true)}
            className=&quot;cursor-pointer&quot;
=======
            onClick={_() => setSaveDialogOpen(true)}
            className="cursor-pointer"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <Plus className=&quot;h-4 w-4 mr-2&quot; />
            Save as new version
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      
<<<<<<< HEAD
      <Dialog open={saveDialogOpen} onOpenChange={setSaveDialogOpen}>
        <DialogContent className=&quot;sm:max-w-md&quot;>
=======
      <Dialog open={_saveDialogOpen} onOpenChange={_setSaveDialogOpen}>
        <DialogContent className="sm:max-w-md">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <DialogHeader>
            <DialogTitle>Save as new resume version</DialogTitle>
          </DialogHeader>
          <div className=&quot;py-4&quot;>
            <Input
<<<<<<< HEAD
              value={newResumeTitle}
              onChange={(e) => setNewResumeTitle(e.target.value)}
              placeholder=&quot;Enter resume title (e.g. DevOps Resume)&quot;
=======
              value={_newResumeTitle}
              onChange={_(_e) => setNewResumeTitle(e.target.value)}
              placeholder="Enter resume title (e.g. DevOps Resume)"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            />
          </div>
          <DialogFooter>
            <Button 
<<<<<<< HEAD
              variant=&quot;outline&quot; 
              onClick={() => setSaveDialogOpen(false)}
=======
              variant="outline" 
              onClick={_() => setSaveDialogOpen(false)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              Cancel
            </Button>
            <Button 
<<<<<<< HEAD
              onClick={handleCreateNewVersion}
              disabled={!newResumeTitle.trim() || isLoading}
              className=&quot;gap-2&quot;
            >
              {isLoading && <Loader2 className=&quot;h-4 w-4 animate-spin&quot; />}
              <Save className=&quot;h-4 w-4&quot; />
=======
              onClick={_handleCreateNewVersion}
              disabled={_!newResumeTitle.trim() || isLoading}
              className="gap-2"
            >
              {_isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
              <Save className="h-4 w-4" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
