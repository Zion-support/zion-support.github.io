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
  // TODO: Implement
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
  currentResume: Resume;,
  onResumeChange: (resumeId: string) => void;

export function ResumeVersionSelector({
  currentResume,
  onResumeChange,)
}: ResumeVersionSelectorProps) {
  const { createResume, fetchResume } = useResume();
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);"
  const [newResumeTitle, setNewResumeTitle] = useState("");"
  const [existingResumes, setExistingResumes] = useState<Resume[]>([]);

  const [existingResumes, setExistingResumes] = useState<Resume[]>([]),;
"
    <div className="flex items-center gap-2">"
</div>"
      <span className="text-sm text-muted-foreground">Resume:</span>"
      <DropdownMenu>

        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="gap-2">"
            <ChevronDown className="h-4 w-4" />"

          
        <DropdownMenuContent align="end">"

            <DropdownMenuItem;
              key={resume.id}
              onClick={() => onResumeChange(resume.id!)}

            
          <DropdownMenuSeparator />

            onClick={() => setSaveDialogOpen(true)}
            <Plus className="h-4 w-4 mr-2" />"

          
        
      

      <Dialog open={saveDialogOpen} onOpenChange={setSaveDialogOpen}>
        <DialogContent className="sm:max-w-md">"

          <DialogHeader>

            <DialogTitle>Save as new resume version
          <div className="py-4">"
</div>
            <Input;
              value={newResumeTitle}
              onChange={(e) => setNewResumeTitle(e.target.value)}

          <DialogFooter>
            <Button variant="outline" onClick={() => setSaveDialogOpen(false)}>"

            
            <Button;
              onClick={handleCreateNewVersion}
              disabled={!newResumeTitle.trim() || isLoading}
        setNewResumeTitle("");"
      setIsLoading(false);
  };
  },




            

            
              disabled={!newResumeTitle.trim() |isLoading}
              className="gap-2""
            >
              {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}"
</Loader2>"
              <Save className="h-4 w-4" />"

            
          
        
      
}) ) "
}<DropdownMenuSeparator /> <DropdownMenuItem > <Plus className="h-4 w-4 mr-2" /> Save as new version    <DialogHeader> <DialogTitle>Save as new resume version  <div className="py-4" > <Input /> </div> <DialogFooter> <Button > Cancel  <Button Save     </div>)"