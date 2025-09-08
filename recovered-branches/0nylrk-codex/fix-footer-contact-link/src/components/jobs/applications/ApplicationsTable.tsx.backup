
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
interface ApplicationsTableProps {

  applications: JobApplication[]
  processingId: string | null;
  onViewApplication: (applicationId: string) => Promise<void>
  onStatusChange: (applicationId: string, newStatus: string) => Promise<void>

<<<<<<< HEAD
  onViewScore: (application: JobApplication) => void

}
export function ApplicationsTable({
=======

interface ApplicationsTableProps {;
  applications: JobApplication[],;
  processingId: string | null,;
  onViewApplication: (applicationId: string) => Promise<void>,;
  onStatusChange: (applicationId: string, newStatus: string) => Promise<void>,;
  onViewScore: (application: JobApplication) => void;
>>>>>>> origin/cursor/delete-old-data-records-6bba

  applications
  processingId
  onViewApplication


<<<<<<< HEAD
=======
  onViewScore
}: ApplicationsTableProps) {
  const [hireModalOpen, setHireModalOpen] = useState(false),
  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null),
>>>>>>> origin/cursor/delete-old-data-records-6bba


export function ApplicationsTable(): any ({ ;
  applications, ;
  processingId, ;
  onViewApplication, ;

  onStatusChange;
  onViewScore;
}: ApplicationsTableProps) {;
  const [hireModalOpen, setHireModalOpen] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null);

<<<<<<< HEAD

  },



=======
  },

  
  const handleHireClick = (application: JobApplication) => {
    setSelectedApplication(application)
    setHireModalOpen(true)
  }
  },
  
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const handleHireConfirmed = () => {
    // This will be called after the hire confirmation is completed
    toast({
      title: "Hiring process initiated"

      description: "Offer has been sent to the talent."
    })

import { format } from './date - fns';
import { JobApplication } from '@/types / jobs';
import { Avatar } from '@/components / ui / avatar';
import { Badge } from '@/components / ui / badge';
import { ClickableBadge } from '@/components / ui / clickable - badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components / ui / table';
import { ApplicationActions } from './ApplicationActions';
import { StatusBadge } from './StatusBadge';
import { Briefcase, User } from './lucide-react';
import { HireConfirmationModal } from '@/components / hiring - tracker / HireConfirmationModal';
import { useState } from './react';
import { toast } from '@/hooks / use - toast';
interface ApplicationsTableProps {
  applications: JobApplication[],
  processing_id: string | null,
  onViewApplication: (application_id: string) => Promise < void>,
  onStatusChange: (application_id: string, new_status: string) => Promise < void>,
  onViewScore: (application: JobApplication) => void;
}
export /**
 * ApplicationsTable - Function description
 */
function ApplicationsTable() {
  const [hireModalOpen, setHireModalOpen] = useState (false);
  const [selected_application, setSelectedApplication] = useState < JobApplication | null>(null);
;
  const handleHireClick = (application: JobApplication) =>: any {
    setSelectedApplication (application),
    setHireModalOpen (true);
  }
;
  const handleHireConfirmed = () =>: any {
    // This will be called after the hire confirmation is completed;
    toast ({
      title: "Hiring process initiated",
      description: "Offer has been sent to the talent.";
    });
  }
;


<<<<<<< HEAD

=======
  },
>>>>>>> origin/cursor/delete-old-data-records-6bba

  return (
    <>;"
      <div className="rounded - md border">;
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead > Candidate</TableHead>;"
              <TableHead className="hidden md:table - cell">Applied</TableHead>;"
              <TableHead className="hidden md:table - cell">Status</TableHead>;"
              <TableHead className="hidden lg:table - cell">Match Score</TableHead>;"
              <TableHead className="text - right">Actions</TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody>;

<<<<<<< HEAD
            {applications.map ((application) => (
              <TableRow key={application.id}>;
                <TableCell>;
                  <div className="flex items - center gap - 3">;
                    <Avatar className="h - 8 w - 8">;
                      {application.talent_profile?.profile_picture_url ? (
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

                    <ClickableBadge
                      variant="outline"

                      className="cursor-pointer"
                      onClick={() => onViewScore(application)}
                    >
                      {application.match_score}%
                    </ClickableBadge>
                  ) : ("
                    <span className="text-muted-foreground text-sm">Not scored</span>
                  )}
                </TableCell>"
                <TableCell className="text-right">"
                  <div className="flex items-center justify-end gap-2">
                    <ClickableBadge"
                      variant="outline""
                      className="cursor-pointer bg-green-50 hover:bg-green-100 text-green-700"
                      onClick={() => handleHireClick(application)}
                    >"
                      <Briefcase className="h-3 w-3 mr-1" /> Hire;
                    </ClickableBadge>
<<<<<<< HEAD

                    <ApplicationActions

=======

                    <ApplicationActions;
"
import { format } from "date-fns",;"
import { JobApplication } from "@/types/jobs",;"
import { Avatar } from "@/components/ui/avatar",;"
import { Badge } from "@/components/ui/badge",;"

>>>>>>> origin/cursor/delete-old-data-records-6bba
import { ClickableBadge } from "@/components/ui/clickable-badge",;
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
  TableRow;"
} from "@/components/ui/table",;"
import { ApplicationActions } from "./ApplicationActions",;"
import { StatusBadge } from "./StatusBadge",;"
import { Briefcase, User } from "lucide-react",;"
import { HireConfirmationModal } from "@/components/hiring-tracker/HireConfirmationModal",;"
import { useState } from "react",;"
import { toast } from "@/hooks/use-toast",;
interface ApplicationsTableProps {;
  applications: JobApplication[],;
  processingId: string | null,;
  onViewApplication: (applicationId: string) => Promise<void>,;
  onStatusChange: (applicationId: string, newStatus: string) => Promise<void>,;
  onViewScore: (application: JobApplication) => void;
}
;
<<<<<<< HEAD

export function ApplicationsTable({;
  applications,;
  processingId,;
  onViewApplication,;
  onStatusChange,;
  onViewScore;
}: ApplicationsTableProps) {;
  const [hireModalOpen, setHireModalOpen] = useState(false),;
  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null),;

=======

export function ApplicationsTable() { return null; }
>>>>>>> origin/cursor/delete-old-data-records-6bba
  };
  const handleHireConfirmed = () => {;
    // This will be called after the hire confirmation is completed;
    toast({;"
      title: "Hiring process initiated","
      description: "Offer has been sent to the talent.";
    });
  };

  return (
    <>;"
      <div className="rounded-md border">;
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead>Candidate</TableHead>;"
              <TableHead className="hidden md:table-cell">Applied</TableHead>;"
              <TableHead className="hidden md:table-cell">Status</TableHead>;"
              <TableHead className="hidden lg:table-cell">Match Score</TableHead>;"
              <TableHead className="text-right">Actions</TableHead>;
            </TableRow>;
          </TableHeader>;

<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

                    <ClickableBadge
                      variant="outline"

                      className="cursor-pointer"
                      onClick={() => onViewScore(application)}
                    >;
                      {application && application.match_score}%;
                    </ClickableBadge>;
                  ) : (;"
                    <span className="text-muted-foreground text-sm">Not scored</span>;
                  )}

<<<<<<< HEAD


=======
                </TableCell>;
                <TableCell className="text-right">;
                  <div className="flex items-center justify-end gap-2">;
                    <ClickableBadge
                      variant="outline" 
>>>>>>> origin/cursor/delete-old-data-records-6bba
                      className="cursor-pointer bg-green-50 hover:bg-green-100 text-green-700"
                      onClick={() => handleHireClick(application)}
                    >;"
                      <Briefcase className="h-3 w-3 mr-1" /> Hire;
                    </ClickableBadge>;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                        <img;
                          src={application.talent_profile.profile_picture_url}"
                          alt={application.talent_profile.full_name || "Candidate"}
                        />) : ("
                        <User className="h - 4 w - 4" />)}
                    </Avatar>;
                    <div>;"
                      <div className="font - medium">;"
                        {application.talent_profile?.full_name || "Candidate"}
                      </div>;"
                      <div className="text - xs text - muted - foreground mt - 0.5">;"
                        {application.talent_profile?.professional_title || "Applicant"}
                      </div>;
                    </div>;
                  </div>;
                </TableCell>;
<<<<<<< HEAD

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

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba


                        />;
                      ) : (;
                        <User className="h-4 w-4" />;
                      )}
                    </Avatar>;
                    <div>;
                      <div className="font-medium">;

                      </div>;
                    </div>;
                  </div>;
                </TableCell>;

<<<<<<< HEAD
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

=======

                      </div>;
                    </div>;
                  </div>;
                </TableCell>;
                <TableCell className="hidden md:table-cell">;

                      onClick={() => onViewScore(application)}
                    >;
                      {application.match_score}%;
                    </ClickableBadge>;
                  ) : (;
                    <span className="text-muted-foreground text-sm">Not scored</span>;
                  )}

                      onClick={() => handleHireClick(application)}
                    >;
                      <Briefcase className="h-3 w-3 mr-1" /> Hire;
                    </ClickableBadge>;

>>>>>>> origin/cursor/delete-old-data-records-6bba
      {/* Hire Confirmation Modal */}


      <HireConfirmationModal;
        isOpen={hireModalOpen}
        onClose={() => setHireModalOpen(false)}
        application={selectedApplication || undefined}
        onConfirm={handleHireConfirmed}

<<<<<<< HEAD


=======
      />;
    </>;
              </TableRow>))}
>>>>>>> origin/cursor/delete-old-data-records-6bba
          </TableBody>;
        </Table>;
      </div>;
      {/* Hire Confirmation Modal */}
      <HireConfirmationModal;
        is_open={hireModalOpen}
        on_close={() => setHireModalOpen (false)}
        application={selected_application || undefined}
        on_confirm={handleHireConfirmed}
      />;
    </>);
<<<<<<< HEAD

}



=======


  ),;}
};
  applications.map ( (application) => (<TableRow key= {
  application.id;)"
}> <TableCell> />) : (<User className="h-4 w-4" />)"

} <div> </div> </div> </div>  onClick= {"
}% ) : (<span className="text-muted-foreground text-sm" >Not scored</span>)""
} <TableCell className="text-right" > <div className="flex items-center justify-end gap-2" > <ClickableBadge > <Briefcase className="h-3 w-3 mr-1" /> Hire  <ApplicationActions application= {"

}/> </div>  ) ) 
}  </div> {
}<HireConfirmationModal isOpen= {
  hireModalOpen;
}onClose= {
  () => setHireModalOpen (false) 

}/> </>) 

}
>>>>>>> origin/cursor/delete-old-data-records-6bba
