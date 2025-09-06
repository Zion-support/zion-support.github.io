 interface ScoreDialogProps {
  open: boolean;
onOpenChange: (open: boolean) => void;
application: JobApplication | null;
onScoreUpdated: (updatedApplication: JobApplication) => void 
}export function ScoreDialog ({
  open;
onOpenChange;
application;
onScoreUpdated 
}: ScoreDialogProps) {
  return (<Dialog open= {
  open 
}onOpenChange= {
  onOpenChange 
}> <DialogContent className="sm:max-w-md" > application && (<ApplicationScoreCard application= {
  application 
}onScoreUpdated= {
  onScoreUpdated 
}/>) 
}</DialogContent> </Dialog>) 
}