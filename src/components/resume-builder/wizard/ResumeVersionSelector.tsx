
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
import { Save, ChevronDown, Plus, Loader2 } from 'lucide-react';
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
            </DropdownMenuItem>;
=======
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
        setNewResumeTitle('')
      }
      setIsLoading(false)    }
  },

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
              className=&quot;cursor-pointer&quot;            >
              {_resume.basic_info.title}
            </DropdownMenuItem>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
          ))}
          <DropdownMenuSeparator />;
          <DropdownMenuItem ;
            onClick={() => setSaveDialogOpen(true)}
<<<<<<< HEAD
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
=======
            className=&quot;cursor-pointer&quot;          >
            <Plus className=&quot;h-4 w-4 mr-2&quot; />
            Save as new version
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      
      <Dialog open={saveDialogOpen} onOpenChange={setSaveDialogOpen}>
        <DialogContent className=&quot;sm:max-w-md&quot;>          <DialogHeader>
            <DialogTitle>Save as new resume version</DialogTitle>
          </DialogHeader>
          <div className=&quot;py-4&quot;>
            <Input
              value={newResumeTitle}
              onChange={(e) => setNewResumeTitle(e.target.value)}
              placeholder=&quot;Enter resume title (e.g. DevOps Resume)&quot;            />
          </div>
          <DialogFooter>
            <Button 
              variant=&quot;outline&quot; 
              onClick={() => setSaveDialogOpen(false)}            >
              Cancel
            </Button>
            <Button 
              onClick={handleCreateNewVersion}
              disabled={!newResumeTitle.trim() || isLoading}
              className=&quot;gap-2&quot;
            >
              {isLoading && <Loader2 className=&quot;h-4 w-4 animate-spin&quot; />}
              <Save className=&quot;h-4 w-4&quot; />              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
