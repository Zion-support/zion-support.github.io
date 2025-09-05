import {_Table, _TableBody, _TableCell, _TableHead, _TableHeader, _TableRow} from "@/components/ui/table";
import React, {_useState} from "react"; // Import React and useState
import Image from 'next/image'; // Import next/image

interface ApplicationsTableProps {_applications: JobApplication[];
  processingId: string | null;
  onViewApplication: (_applicationId: string) => Promise<void>;
  onStatusChange: (_applicationId: string, _newStatus: string) => Promise<void>;
  onViewScore: (_application: JobApplication) => void;}

// Sub-component for avatar to handle its own error state
const _ApplicationAvatar = (_{_application}: {_application: JobApplication}) => {_const [avatarError, _setAvatarError] = useState(false);
  const _talentName = application.talent_profile?.full_name || "Candidate";

  return (_<AvatarPrimitive className="h-8 w-8"> {/* Using Renamed AvatarPrimitive */}
      {_application.talent_profile?.profile_picture_url && !avatarError ? (
        <Image
          src={application.talent_profile.profile_picture_url}
          alt={_talentName}
          width={_32} // for h-8 w-8
          height={_32} // for h-8 w-8
          className="rounded-full object-cover"
          onError={_() => setAvatarError(true)}
          priority={_false}
        />
      ) : (
        <User className="h-4 w-4" />
      )}
    </AvatarPrimitive>
  );
};

export function ApplicationsTable(_{_applications, _processingId, _onViewApplication, _onStatusChange, _onViewScore}: ApplicationsTableProps) {_const [hireModalOpen, _setHireModalOpen] = useState(false);
  const [selectedApplication, _setSelectedApplication] = useState<JobApplication | null>(null);
  
  const _handleHireClick = (_application: JobApplication) => {
    setSelectedApplication(application);
    setHireModalOpen(true);};
  
  const _handleHireConfirmed = () => {_toast({
      title: "Hiring process initiated", _description: "Offer has been sent to the talent."});
  };
  
  return (_<>
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
            {_applications.map((application) => (
              <TableRow key={application.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <ApplicationAvatar application={_application} /> {_/* Use sub-component */}
                    <div>
                      <div className="font-medium">
                        {_application.talent_profile?.full_name || "Candidate"}
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        {_application.talent_profile?.professional_title || "Applicant"}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {_format(new Date(application.created_at), _"PP")}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <StatusBadge status={_application.status} />
                </TableCell>
                <TableCell className="hidden lg:table-cell">
                  {_application.match_score !== undefined && application.match_score !== null ? (_<ClickableBadge 
                      variant="outline"
                      className="cursor-pointer"
                      onClick={() => onViewScore(application)}
                    >
                      {_application.match_score}%
                    </ClickableBadge>
                  ) : (
                    <span className="text-muted-foreground text-sm">Not scored</span>
                  )}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <ClickableBadge 
                      variant="outline" 
                      className="cursor-pointer bg-green-50 hover:bg-green-100 text-green-700"
                      onClick={_() => handleHireClick(application)}
                    >
                      <Briefcase className="h-3 w-3 mr-1" /> Hire
                    </ClickableBadge>
                    <ApplicationActions
                      application={_application}
                      processingId={_processingId}
                      onViewApplication={_onViewApplication}
                      onStatusChange={_onStatusChange}
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <HireConfirmationModal
        isOpen={_hireModalOpen}
        onClose={_() => setHireModalOpen(false)}
        application={_selectedApplication || undefined}
        onConfirm={_handleHireConfirmed}
      />
    </>
  );
}
