import { useState } from "react";"
import {
  // TODO: Implement
}
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,"
} from "@/components/ui/dropdown-menu";""
import { Button } from "@/components/ui/button";""
import { Input } from "@/components/ui/input";"
import {
  // TODO: Implement
}
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,"
} from "@/components/ui/dialog";""
import { Save, ChevronDown, Plus, Loader2 } from "lucide-react";""
import { Resume } from "@/types/resume";""
import { useResume } from "@/hooks/useResume";"
interface ResumeVersionSelectorProps {
  // TODO: Implement
}
  currentResume: Resume;,
  onResumeChange: (resumeId: string) => void;
}

export function ResumeVersionSelector({
  currentResume,
  onResumeChange,)
}: ResumeVersionSelectorProps) {
  const { createResume, fetchResume } = useResume();
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);"
  const [newResumeTitle, setNewResumeTitle] = useState("");"
  const [existingResumes, setExistingResumes] = useState<Resume[]>([]);
</Resume>
  const [existingResumes, setExistingResumes] = useState<Resume[]>([]),;
</Resume>"
    <div className="flex items-center gap-2">"
</div>"
      <span className="text-sm text-muted-foreground">Resume:</span>"
      <DropdownMenu>
</DropdownMenu>
        <DropdownMenuTrigger asChild>
</DropdownMenuTrigger>"
          <Button variant="outline" size="sm" className="gap-2">"
</Button>"
            <ChevronDown className="h-4 w-4" />"
</ChevronDown>
          </Button>
        </DropdownMenuTrigger>"
        <DropdownMenuContent align="end">"
</DropdownMenuContent>
            <DropdownMenuItem;
              key={resume.id}
              onClick={() => onResumeChange(resume.id!)}
</DropdownMenuItem>
            </DropdownMenuItem>
          <DropdownMenuSeparator />
</DropdownMenuSeparator>
          <DropdownMenuItem;
            onClick={() => setSaveDialogOpen(true)}
</DropdownMenuItem>"
            <Plus className="h-4 w-4 mr-2" />"
</Plus>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={saveDialogOpen} onOpenChange={setSaveDialogOpen}>
</Dialog>"
        <DialogContent className="sm:max-w-md">"
</DialogContent>
          <DialogHeader>
</DialogHeader>
            <DialogTitle>Save as new resume version</DialogTitle>
          </DialogHeader>"
          <div className="py-4">"
</div>
            <Input;
              value={newResumeTitle}
              onChange={(e) => setNewResumeTitle(e.target.value)}
</Input>
          </div>
          <DialogFooter>
</DialogFooter>"
            <Button variant="outline" onClick={() => setSaveDialogOpen(false)}>"
</Button>
            </Button>
            <Button;
              onClick={handleCreateNewVersion}
              disabled={!newResumeTitle.trim() || isLoading}
"
        setNewResumeTitle("");"
      }
      setIsLoading(false);
    }
  };
  },
      <Dialog open={saveDialogOpen} onOpenChange={setSaveDialogOpen}>
</Button>"
        <DialogContent className="sm:max-w-md">"
</DialogContent>
          <DialogHeader>
</DialogHeader>
            <DialogTitle>Save as new resume version</DialogTitle>
          </DialogHeader>"
          <div className="py-4">"
</div>
            <Input;
              value={newResumeTitle}
              onChange={(e) => setNewResumeTitle(e.target.value)}
</Input>
          </div>
          <DialogFooter>
</DialogFooter>"
            <Button variant="outline" onClick={() => setSaveDialogOpen(false)}>"
</Button>
            </Button>
            <Button;
              onClick={handleCreateNewVersion}
              disabled={!newResumeTitle.trim() || isLoading}
"
            <Button variant="outline" onClick={() => setSaveDialogOpen(false)}>"
</Button>
            </Button>
            <Button;
onClick={handleCreateNewVersion}
              disabled={!newResumeTitle.trim() |isLoading}
              onClick={handleCreateNewVersion}
              disabled={!newResumeTitle.trim() || isLoading}
"
              className="gap-2""
            >
</Button>"
              {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}"
</Loader2>"
              <Save className="h-4 w-4" />"
</Save>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
}</DropdownMenuItem>) ) "
}<DropdownMenuSeparator /> <DropdownMenuItem > <Plus className="h-4 w-4 mr-2" /> Save as new version </DropdownMenuItem> </DropdownMenuContent> </DropdownMenu> <DialogHeader> <DialogTitle>Save as new resume version</DialogTitle> </DialogHeader> <div className="py-4" > <Input /> </div> <DialogFooter> <Button > Cancel </Button> <Button Save </Button> </DialogFooter> </DialogContent> </Dialog> </div>)"
</DropdownMenuSeparator>"