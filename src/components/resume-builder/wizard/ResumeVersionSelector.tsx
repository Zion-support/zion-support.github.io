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
import { useResume } from '@/hooks/useResume';
interface ResumeVersionSelectorProps {
  currentResume: Resume;
  onResumeChange: (resumeId: string) => void

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
      }
      setIsLoading(false);
    }
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground">Resume:</span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
<<<<<<< HEAD
          <Button variant='outline' size='sm' className='gap-2'>
            {currentResume?.basic_info?.title |'My Resume'}
            <ChevronDown className='h-4 w-4' />
          </Button>
        </DropdownMenuTrigger>
<<<<<<< HEAD
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
        <DropdownMenuContent align="end">
          {existingResumes.map((resume) => (
            <DropdownMenuItem 
              key={resume.id}
              onClick={() => onResumeChange(resume.id!)}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
              className="cursor-pointer"
            >
              {resume.basic_info.title}
            </DropdownMenuItem>
          ))}
<<<<<<< HEAD
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => setSaveDialogOpen(true)}
            className='cursor-pointer'          >
            <Plus className='h-4 w-4 mr-2' />            Save as new version
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
            <Plus className="h-4 w-4 mr-2" />
=======
          <DropdownMenuSeparator />;
          <DropdownMenuItem;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
            onClick={() => setSaveDialogOpen(true)}
            className="cursor-pointer"
          >
            <Plus className="h-4 w-4 mr-2" />
            Save as new version
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
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
=======
      
      <Dialog open={saveDialogOpen} onOpenChange={setSaveDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Save as new resume version</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <Input
              value={newResumeTitle}
              onChange={(e) => setNewResumeTitle(e.target.value)}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
              placeholder="Enter resume title (e.g. DevOps Resume)"
            />
          </div>
          <DialogFooter>
            <Button 
              variant="outline" 
<<<<<<< HEAD
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
              <Save className="h-4 w-4" />
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
<<<<<<< HEAD
> {
  resume.basic info.title 
}</DropdownMenuItem>) ) ;
}<DropdownMenuSeparator /> <DropdownMenuItem > <Plus className="h-4 w-4 mr-2" /> Save as new version </DropdownMenuItem> </DropdownMenuContent> </DropdownMenu> <DialogHeader> <DialogTitle>Save as new resume version</DialogTitle> </DialogHeader> <div className="py-4" > <Input /> </div> <DialogFooter> <Button > Cancel </Button> <Button Save </Button> </DialogFooter> </DialogContent> </Dialog> </div>) ;
}";
};
=======
;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
