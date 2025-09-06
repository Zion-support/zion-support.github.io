DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,

interface ResumeVersionSelectorProps {
  currentResume: Resume;
  onResumeChange: (resumeId: string) => void;

export function ResumeVersionSelector({
  currentResume,
  onResumeChange,
}: ResumeVersionSelectorProps) {
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

  return (
    <div className='flex items-center gap-2'>
      <span className='text-sm text-muted-foreground'>Resume:</span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='outline' size='sm' className='gap-2'>
            {currentResume?.basic_info?.title || 'My Resume'}
            <ChevronDown className='h-4 w-4' />
          </Button>
        </DropdownMenuTrigger>

              className="cursor-pointer"

            >

              {resume.basic_info.title}
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />

          >
            <Plus className='h-4 w-4 mr-2' />            Save as new version
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

            Save as new version
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

            >
              {isLoading && <Loader2 className='h-4 w-4 animate-spin' />}
              <Save className='h-4 w-4' />              Save

              Save

            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );

};
> {;
  resume.basic info.title ;
}</DropdownMenuItem>) ) ;
}<DropdownMenuSeparator /> <DropdownMenuItem > <Plus className="h-4 w-4 mr-2" /> Save as new version </DropdownMenuItem> </DropdownMenuContent> </DropdownMenu> <DialogHeader> <DialogTitle>Save as new resume version</DialogTitle> </DialogHeader> <div className="py-4" > <Input /> </div> <DialogFooter> <Button > Cancel </Button> <Button Save </Button> </DialogFooter> </DialogContent> </Dialog> </div>) ;
}"

}