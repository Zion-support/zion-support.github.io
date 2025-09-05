 import {
  Table;
TableBody;
TableCell;
TableHead;
TableHeader;
TableRow interface ApplicationsTableProps {
  applications: JobApplication[];
processingId: string | null;
onViewApplication: (applicationId: string) => Promise<void>;
onStatusChange: (applicationId: string, newStatus: string) => Promise<void>;
onViewScore: (application: JobApplication) => void 
}export function ApplicationsTable ({
  applications;
processingId;
onViewApplication;
onStatusChange;
onViewScore 
}: ApplicationsTableProps) {
  const [hireModalOpen, setHireModalOpen] = useState (false);
const [selectedApplication, setSelectedApplication] = useState<JobApplication | null> (null);
const handleHireClick = (application: JobApplication) => {
  setSelectedApplication (application);
setHireModalOpen (true) 
};
//This will be called after the hire confirmation is completed toast ({
  
};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 <Table> <TableHeader> <TableRow> <TableHead>Candidate</TableHead> <TableHead className="hidden md:table-cell" >Applied</TableHead> <TableHead className="hidden md:table-cell" >Status</TableHead> <TableHead className="hidden lg:table-cell" >Match Score</TableHead> <TableHead className="text-right" >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {
  applications.map ( (application) => (<TableRow key= {
  application.id 
}> <TableCell> />) : (<User className="h-4 w-4" />) 
}</Avatar> <div> </div> </div> </div> </TableCell> onClick= {
  () => onViewScore (application) 
}> {
  application.match score 
}% </ClickableBadge>) : (<span className="text-muted-foreground text-sm" >Not scored</span>) 
}</TableCell> <TableCell className="text-right" > <div className="flex items-center justify-end gap-2" > <ClickableBadge > <Briefcase className="h-3 w-3 mr-1" /> Hire </ClickableBadge> <ApplicationActions application= {
  application 
}processingId= {
  processingId 
}onViewApplication= {
  onViewApplication 
}onStatusChange= {
  onStatusChange 
}/> </div> </TableCell> </TableRow>) ) 
}</TableBody> </Table> </div> {
  /* Hire Confirmation Modal */ 
}<HireConfirmationModal isOpen= {
  hireModalOpen 
}onClose= {
  () => setHireModalOpen (false) 
}application= {
  selectedApplication || undefined 
}onConfirm= {
  handleHireConfirmed 
}/> </>) 
}