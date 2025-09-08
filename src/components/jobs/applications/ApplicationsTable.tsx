

  return (
    <AvatarPrimitive className="h-8 w-8"> {/* Using Renamed AvatarPrimitive */}
      {application.talent_profile?.profile_picture_url && !avatarError ? (
        <Image
          src={application.talent_profile.profile_picture_url}
          alt={talentName}
          width={32} // for h-8 w-8
          height={32} // for h-8 w-8


          className="rounded-full object-cover"
          onError={() => setAvatarError(true)}
          priority={false}
        />


    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Candidate</TableHead>
              <TableHead className="hidden md:table-cell">Applied</TableHead>
              <TableHead className="hidden md:table-cell">Status</TableHead>
              <TableHead className="hidden lg:table-cell">Match Score</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {applications.map((application) => (
              <TableRow key={application.id}>



                <TableCell>
                  <div className="flex items-center gap-3">
                    <ApplicationAvatar application={application} /> {/* Use sub-component */}
                    <div>


                      </div>
            {applications.map(application => (              <TableRow key={application.id}>
                  <div className="flex items-center gap-3">
                    <ApplicationAvatar application={application} /> {/* Use sub-component */}
            {applications.map(application => (              <TableRow key={application.id}>
            {applications.map((application) => (
              <TableRow key={application.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <ApplicationAvatar application={application} /> {/* Use sub-component */}
                    <div>
                      <div className='font-medium'>
                        {application.talent_profile?.full_name |'Candidate'}
                      </div>
                      <div className='text-xs text-muted-foreground mt-0.5'>
                        {application.talent_profile?.professional_title |
                          'Applicant'}

                      <div className="font-medium">
                        {application.talent_profile?.full_name || "Candidate"}
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        {application.talent_profile?.professional_title || "Applicant"}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {format(new Date(application.created_at), "PP")}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <StatusBadge status={application.status} />
                </TableCell>

                <TableCell className='hidden lg:table-cell'>
                  {application.match_score !== undefined &&
                  application.match_score !== null ? (
                    <ClickableBadge
                      variant='outline'
                      className='cursor-pointer'
                      onClick={() => onViewScore(application)}                    >

                <TableCell className="hidden lg:table-cell">
                  {application.match_score !== undefined && application.match_score !== null ? (
                    <ClickableBadge 
                      variant="outline"
                      className="cursor-pointer"
                      onClick={() => onViewScore(application)}
                    >



                      {application.match_score}%
                    </ClickableBadge>
                  ) : (
                    <span className="text-muted-foreground text-sm">Not scored</span>
                  )}
                </TableCell>

}h-4 w-4"/>)
}</AvatarPrimitive>)
ursor/fix-website-loading-errors-and-merge-6662
                <TableCell className='text-right'>
                  <div className='flex items-center justify-end gap-2'>
                    <ClickableBadge
                      variant='outline'
                      className='cursor-pointer bg-green-50 hover:bg-green-100 text-green-700'
                      onClick={() => handleHireClick(application)}                    >
                      <Briefcase className='h-3 w-3 mr-1' /> Hire
                    </ClickableBadge>
                    <ApplicationActions
                      application = {application,}
                      processingId = {processingId,}
                      onViewApplication = {onViewApplication,}
                      onStatusChange = {onStatusChange,}
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <HireConfirmationModal
        isOpen = {hireModalOpen,}
        onClose = {() => setHireModalOpen(false),}
        application = {selectedApplication |undefined,}
        onConfirm = {handleHireConfirmed,}
      />
    </>
  )
  /* Using Renamed AvatarPrimitive */
}{
  application.talent profile?.profile picture url && !avatarError ? (<Image src= {
  application.talent profile.profile picture url
}alt= {
  talentName
}width= {
  32
}//for h-8 w-8 height= {
  32 "
}//for h-8 w-8 className="rounded-full object-cover" onError= {
  () => setAvatarError (true)
}priority= {
  false "
}h-4 w-4"/>)
}</AvatarPrimitive>)
}h-4 w-4"/>) ;
}</AvatarPrimitive>) ;

};"
return (<> <div className=" rounded-md border"> hidden md:table-cell" >Applied</TableHead> <TableHead className="hidden md:table-cell" >Status</TableHead> <TableHead className="hidden lg:table-cell" >Match Score</TableHead> <TableHead className="text-right" >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {
  applications.map ( (application) => (<TableRow key= {
  application.id
}> <TableCell> </div> </div> </div> </TableCell> onClick={
  () => onViewScore (application)
}> {
  application.match score "
}% </ClickableBadge>) : (<span className="text-muted-foreground text-sm" >Not scored</span>) "
}</TableCell> <TableCell className="text-right" > <div className="flex items-center justify-end gap-2" > <ClickableBadge > <Briefcase className="h-3 w-3 mr-1" /> Hire </ClickableBadge> <ApplicationActions application= {
  application
}processingId= {
  processingId
}onViewApplication= {
  onViewApplication
}onStatusChange= {
  onStatusChange
}/> </div> </TableCell> </TableRow>) )
}</TableBody> </Table> </div> <HireConfirmationModal isOpen= {
  hireModalOpen
}onClose= {
  () => setHireModalOpen (false)
}application= {
  selectedApplication |undefined
}onConfirm= {
  handleHireConfirmed
}/> </>)
}'"}

                      application={application}
                      processingId={processingId}
                      onViewApplication={onViewApplication}
                      onStatusChange={onStatusChange}

                    />;
                  </div>;
                </TableCell>;
              </TableRow>;
            ))}
          </TableBody>;
        </Table>;
      </div>;
      <HireConfirmationModal;

        isOpen={hireModalOpen}
        onClose={() => setHireModalOpen(false)}
        application={selectedApplication || undefined}
        onConfirm={handleHireConfirmed}

      />;

