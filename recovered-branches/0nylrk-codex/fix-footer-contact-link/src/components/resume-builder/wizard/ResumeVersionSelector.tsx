import {useState} from 'react';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger} from '@/components/ui/dropdown-menu';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle} from '@/components/ui/dialog';
import {Save, ChevronDown, Plus, Loader2} from 'lucide-react';
import {Resume} from '@/types/resume';

import { useState } from "react";
import {}

  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,

  DropdownMenuSeparator,

  Dialog,
  DialogContent,
  DialogFooter,

  DialogHeader,

  currentResume: Resume;

  onResumeChange: (resumeId: string) => void;

}

export function ResumeVersionSelector({

  currentResume,
  onResumeChange,
}: ResumeVersionSelectorProps) {

  const { createResume, fetchResume } = useResume();

        setNewResumeTitle("");

      }
      setIsLoading(false);
    }
  }

        setNewResumeTitle('')

        setNewResumeTitle('')

import { useState } from 'react',;

import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuSeparator,;
  DropdownMenuTrigger;'
} from '@/components/ui/dropdown-menu',;'
import { Button } from '@/components/ui/button',;'
import { Input } from '@/components/ui/input',;'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog',;'
import { Save, ChevronDown, Plus, Loader2 } from 'lucide-react',;'
import { Resume } from '@/types/resume',;'
import { useResume } from '@/hooks/useResume',;
interface ResumeVersionSelectorProps {;
  currentResume: Resume,;
  onResumeChange: (resumeId: string) => void;
}
;
export function ResumeVersionSelector() { return null; }
  const { createResume, fetchResume } = useResume(),;
  const [saveDialogOpen, setSaveDialogOpen] = useState(false),;'
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

      }
      setIsLoading(false);
    }

"

        setNewResumeTitle("");
      }
      setIsLoading(false);
    }
  };
  },

            >
              {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}

              <Save className="h-4 w-4" />
              Save;
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

}<DropdownMenuSeparator /> <DropdownMenuItem > <Plus className="h-4 w-4 mr-2" /> Save as new version </DropdownMenuItem> </DropdownMenuContent> </DropdownMenu> <DialogHeader> <DialogTitle>Save as new resume version</DialogTitle> </DialogHeader> <div className="py-4" > <Input /> </div> <DialogFooter> <Button > Cancel </Button> <Button Save </Button> </DialogFooter> </DialogContent> </Dialog> </div>) 
});
}
}
;

  );
}
  )
}