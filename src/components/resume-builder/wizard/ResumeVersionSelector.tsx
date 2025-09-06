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
<<<<<<< HEAD
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
<<<<<<< HEAD
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
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      }
      setIsLoading(false);
    }
  },
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  return (
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
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        <DropdownMenuContent align='end'>
          {existingResumes.map(resume => (
            <DropdownMenuItem
              key={resume.id}
              onClick={() => onResumeChange(resume.id!)}
              className='cursor-pointer'            >              className="cursor-pointer"
<<<<<<< HEAD
        <DropdownMenuContent align="end">
          {existingResumes.map((resume) => (
            <DropdownMenuItem
              key={resume.id}
              onClick={() => onResumeChange(resume.id!)}
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
          <Button variant="outline" size="sm" className="gap-2">
            {currentResume?.basic_info?.title || 'My Resume'}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
<<<<<<< HEAD
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
<<<<<<< HEAD
              on_click={() => onResumeChange (resume.id!)}
              className="cursor - pointer";
            >;


<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        <DropdownMenuContent align="end">
          {existingResumes.map((resume) => (
            <DropdownMenuItem 
              key={resume.id}
              onClick={() => onResumeChange(resume.id!)}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
              onClick={() => onResumeChange(resume.id!)}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
              className="cursor-pointer"
            >
              {resume.basic_info.title}
            </DropdownMenuItem>
          ))}
<<<<<<< HEAD
          <DropdownMenuSeparator />
          <DropdownMenuItem 


          <DropdownMenuSeparator />;
          <DropdownMenuItem;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
            onClick={() => setSaveDialogOpen(true)}
            className="cursor-pointer"
          >
            <Plus className="h-4 w-4 mr-2" />
            Save as new version
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

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




=======
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      
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
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee




=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
              placeholder="Enter resume title (e.g. DevOps Resume)"
            />
          </div>
          <DialogFooter>
            <Button 
              variant="outline" 
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
<<<<<<< HEAD



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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

}


;

    </div>);
}
> {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  resume.basic info.title;
}</DropdownMenuItem>) );
}<DropdownMenuSeparator /> <DropdownMenuItem > <Plus className="h - 4 w - 4 mr - 2" /> Save as new version </DropdownMenuItem> </DropdownMenuContent> </DropdownMenu> <DialogHeader> <DialogTitle > Save as new resume version</DialogTitle> </DialogHeader> <div className="py - 4" > <Input /> </div> <DialogFooter> <Button > Cancel </Button> <Button Save </Button> </DialogFooter> </DialogContent> </Dialog> </div>);
=======
=======
  resume.basic info.title 
}</DropdownMenuItem>) ) ;
}<DropdownMenuSeparator /> <DropdownMenuItem > <Plus className="h-4 w-4 mr-2" /> Save as new version </DropdownMenuItem> </DropdownMenuContent> </DropdownMenu> <DialogHeader> <DialogTitle>Save as new resume version</DialogTitle> </DialogHeader> <div className="py-4" > <Input /> </div> <DialogFooter> <Button > Cancel </Button> <Button Save </Button> </DialogFooter> </DialogContent> </Dialog> </div>) ;
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
}";
};
=======
;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
