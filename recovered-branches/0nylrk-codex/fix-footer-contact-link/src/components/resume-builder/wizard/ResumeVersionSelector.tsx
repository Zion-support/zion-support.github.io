
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
    }
  };

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
            >
              {_resume.basic_info.title}
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuItem 
            onClick={_() => setSaveDialogOpen(true)}
            className="cursor-pointer"
          >
            <Plus className="h-4 w-4 mr-2" />
            Save as new version
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      
      <Dialog open={_saveDialogOpen} onOpenChange={_setSaveDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Save as new resume version</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <Input
              value={_newResumeTitle}
              onChange={_(_e) => setNewResumeTitle(e.target.value)}
              placeholder="Enter resume title (e.g. DevOps Resume)"
            />
          </div>
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={_() => setSaveDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button 
              onClick={_handleCreateNewVersion}
              disabled={_!newResumeTitle.trim() || isLoading}
              className="gap-2"
            >
              {_isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
              <Save className="h-4 w-4" />
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
