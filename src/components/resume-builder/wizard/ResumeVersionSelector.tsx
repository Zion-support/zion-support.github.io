
import { useState } from 'react';
import { DropdownMenu;
  DropdownMenuContent;
  DropdownMenuItem;
  DropdownMenuSeparator;
  DropdownMenuTrigger 
 } from '@/components/ui/dropdown-menu';
import { Button  } from '@/components/ui/button';
import { Input  } from '@/components/ui/input';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle  } from '@/components/ui/dialog';
}

export function ResumeVersionSelector({ currentResume, onResumeChange }: ResumeVersionSelectorProps) {
  const { createResume, fetchResume } = useResume();
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);
  const [newResumeTitle, setNewResumeTitle] = useState('');
  const [existingResumes, setExistingResumes] = useState<Resume[]>([]),
  const [isLoading, setIsLoading] = useState(false);
  const handleCreateNewVersion = null;
