

  onViewScore: (application: JobApplication) => void

}
export function ApplicationsTable({

  },




            {applications.map ((application) => (
              <TableRow key={application.id}>;
                <TableCell>;
                  <div className="flex items - center gap - 3">;
                    <Avatar className="h - 8 w - 8">;
                      {application.talent_profile?.profile_picture_url ? (

                    <ApplicationActions


export function ApplicationsTable({;
  applications,;
  processingId,;
  onViewApplication,;
  onStatusChange,;
  onViewScore;
}: ApplicationsTableProps) {;
  const [hireModalOpen, setHireModalOpen] = useState(false),;
  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null),;

          <TableBody>;
            {applications && applications.map((application) => (;
              <TableRow key={application && application.id}>;
                <TableCell>;
                  <div className="flex items-center gap-3">;
                    <Avatar className="h-8 w-8">;
                      {application && application.talent_profile?.profile_picture_url ? (;
                        <img
                          src={application && application.talent_profile.profile_picture_url} 
                          alt={application && application.talent_profile.full_name || "Candidate"} 
                        />;
                      ) : (;
                        <User className="h-4 w-4" />;
                      )}
                    </Avatar>;
                    <div>;
                      <div className="font-medium">;
                        {application && application.talent_profile?.full_name || "Candidate"}
                      </div>;
                      <div className="text-xs text-muted-foreground mt-0 && 0.5">;
                        {application && application.talent_profile?.professional_title || "Applicant"}
                      </div>;
                    </div>;
                  </div>;
                </TableCell>;
                <TableCell className="hidden md:table-cell">;
                  {format(new Date(application && application.created_at), "PP")}
                </TableCell>;
                <TableCell className="hidden md:table-cell">;
                  <StatusBadge status={application && application.status} />;
                </TableCell>;
                <TableCell className="hidden lg:table-cell">;
                  {application && application.match_score !== undefined && application && application.match_score !== null ? (;





                <TableCell className="hidden md:table - cell">;
                  {format (new Date (application.created_at), "PP")}
                </TableCell>;
                <TableCell className="hidden md:table - cell">;
                  <StatusBadge status={application.status} />;
                </TableCell>;
                <TableCell className="hidden lg:table - cell">;
                  {application.match_score !== undefined && application.match_score !== null ? (
                    <ClickableBadge;
                      variant="outline";
                      className="cursor - pointer";
                      on_click={() => onViewScore (application)}
                    >;
                      {application.match_score}%;
                    </ClickableBadge>) : (
                    <span className="text - muted - foreground text - sm">Not scored</span>)}
                </TableCell>;
                <TableCell className="text - right">;
                  <div className="flex items - center justify - end gap - 2">;
                    <ClickableBadge;
                      variant="outline";
                      className="cursor - pointer bg - green - 50 hover:bg - green - 100 text - green - 700";
                      on_click={() => handleHireClick (application)}
                    >;
                      <Briefcase className="h - 3 w - 3 mr - 1" /> Hire;
                    </ClickableBadge>;
                    <ApplicationActions;
                    <ApplicationActions;

                <TableCell className="hidden md:table-cell">;
                  {format(new Date(application.created_at), "PP")}
                </TableCell>;
                <TableCell className="hidden md:table-cell">;
                  <StatusBadge status={application.status} />;
                </TableCell>;
                <TableCell className="hidden lg:table-cell">;
                  {application.match_score !== undefined && application.match_score !== null ? (;
                    <ClickableBadge;
                      variant="outline";
                      className="cursor-pointer";
                      onClick={() => onViewScore(application)}
                    >;
                      {application.match_score}%;
                    </ClickableBadge>;
                  ) : (;
                    <span className="text-muted-foreground text-sm">Not scored</span>;
                  )}
                </TableCell>;
                <TableCell className="text-right">;
                  <div className="flex items-center justify-end gap-2">;
                    <ClickableBadge;
                      variant="outline";
                      className="cursor-pointer bg-green-50 hover:bg-green-100 text-green-700";
                      onClick={() => handleHireClick(application)}
                    >;
                      <Briefcase className="h-3 w-3 mr-1" /> Hire;
                    </ClickableBadge>;
                    <ApplicationActions;
              </TableRow>;
            ))}
          </TableBody>;
        </Table>;
      </div>;




}



