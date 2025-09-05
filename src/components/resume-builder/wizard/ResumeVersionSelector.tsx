
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
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuItem 
            onClick={() => setSaveDialogOpen(true)}
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
}
