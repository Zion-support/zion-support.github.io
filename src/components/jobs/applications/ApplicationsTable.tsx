interface ApplicationsTableProps {applications: JobApplication[];
processingId: string | null;
  onViewApplication: (applicationId: string) => Promise<void>;
onStatusChange: (applicationId: string newStatus: string) => Promise<void>;
}
}
                    <ApplicationActions
      <HireConfirmationModal
}{application.talent profile?.profile picture url && !avatarError ? (<Image src= {
  application.talent profile.profile picture url}alt= {talentName}width= {32}//for h-8 w-8 height= {
return (<> <div className=" rounded-md border"> hidden md:table-cell" >Applied</TableHead> <TableHead className="hidden md:table-cell" >Status</TableHead> <TableHead className="hidden lg:table-cell" >Match Score</TableHead> <TableHead className="text-right" >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {applications.map ( (application) => (<TableRow key= {
}</TableCell> <TableCell className="text-right" > <div className="flex items-center justify-end gap-2" > <ClickableBadge > <Briefcase className="h-3 w-3 mr-1" /> Hire </ClickableBadge> <ApplicationActions application= {application}processingId= {processingId}onViewApplication= {onViewApplication}onStatusChange= {onStatusChange}/> </div> </TableCell> </TableRow>) )
}</TableBody> </Table> </div> <HireConfirmationModal isOpen= {hireModalOpen}onClose= {
  () => setHireModalOpen (false)
}application= {selectedApplication |undefined}onConfirm= {handleHireConfirmed}/> </>)