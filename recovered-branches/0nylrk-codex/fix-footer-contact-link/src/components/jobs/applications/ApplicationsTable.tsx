<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface ApplicationsTableProps {

  applications: JobApplication[]
  processingId: string | null;
  onViewApplication: (applicationId: string) => Promise<void>
  onStatusChange: (applicationId: string, newStatus: string) => Promise<void>
<<<<<<< HEAD

=======
  onViewScore: (application: JobApplication) => void
<<<<<<< HEAD

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {format} from "date-fns";
import {JobApplication} from "@/types/jobs";
import {Avatar} from "@/components/ui/avatar";
import {Badge} from "@/components/ui/badge";
import {ClickableBadge} from "@/components/ui/clickable-badge";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {ApplicationActions} from "./ApplicationActions";
import {StatusBadge} from "./StatusBadge";
import {Briefcase, User} from "lucide-react";
import {HireConfirmationModal} from "@/components/hiring-tracker/HireConfirmationModal";
import {useState} from "react";
import {toast} from "@/hooks/use-toast";
<<<<<<< HEAD
import { format } from "date-fns",
import { JobApplication } from "@/types/jobs",
import { Avatar } from "@/components/ui/avatar",
import { Badge } from "@/components/ui/badge";
import { ClickableBadge } from "@/components/ui/clickable-badge";
import { Badge } from "@/components/ui/badge",
import { ClickableBadge } from "@/components/ui/clickable-badge",
import { 
  Table;
  TableBody;
  TableCell;
  TableHead;
  TableHeader;
  TableRow
} from "@/components/ui/table",
import { ApplicationActions } from "./ApplicationActions",
import { StatusBadge } from "./StatusBadge",
import { Briefcase, User } from "lucide-react",
import { HireConfirmationModal } from "@/components/hiring-tracker/HireConfirmationModal",
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { useState } from "react",
import { toast } from "@/hooks/use-toast",
interface ApplicationsTableProps {

  applications: JobApplication[]
  processingId: string | null
  onViewApplication: (applicationId: string) => Promise<void>
  onStatusChange: (applicationId: string, newStatus: string) => Promise<void>
  onViewScore: (application: JobApplication) => void
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface ApplicationsTableProps {;
  applications: JobApplication[],;
  processingId: string | null,;
  onViewApplication: (applicationId: string) => Promise<void>,;
  onStatusChange: (applicationId: string, newStatus: string) => Promise<void>,;
  onViewScore: (application: JobApplication) => void;
<<<<<<< HEAD

import { format } from "date-fns",
import { JobApplication } from "@/types/jobs",
import { Avatar } from "@/components/ui/avatar",
import { Badge } from "@/components/ui/badge";
import { ClickableBadge } from "@/components/ui/clickable-badge";
import { Badge } from "@/components/ui/badge",

import { ClickableBadge } from "@/components/ui/clickable-badge",
import {};

  Table;
  TableBody;
  TableCell;
  TableHead;
  TableHeader;

interface ApplicationsTableProps {;
  applications: JobApplication[],;
  processingId: string | null,;
  onViewApplication: (applicationId: string) => Promise<void>,;
  onStatusChange: (applicationId: string, newStatus: string) => Promise<void>,;
  onViewScore: (application: JobApplication) => void;

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
export function ApplicationsTable({
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  applications
  processingId
  onViewApplication

<<<<<<< HEAD
=======
<<<<<<< HEAD
  onStatusChange;
  onViewScore
}: ApplicationsTableProps) {
  const [hireModalOpen, setHireModalOpen] = useState(false);

  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null);
export function ApplicationsTable({ 
  applications, 
  processingId, 
  onViewApplication, ;
  onStatusChange;
  onViewApplication, 
  onStatusChange,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  onViewScore
}: ApplicationsTableProps) {
  const [hireModalOpen, setHireModalOpen] = useState(false),
  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null),
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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

export function ApplicationsTable({ 
  applications, 
  processingId, 

  const handleHireClick = (application: JobApplication) => {
    setSelectedApplication(application)
    setHireModalOpen(true)

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  },

<<<<<<< HEAD
  
  const handleHireClick = (application: JobApplication) => {
    setSelectedApplication(application)
    setHireModalOpen(true)
  }
  },
  
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
  },
  

=======
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  },

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

=======
            {applications.map ((application) => (
              <TableRow key={application.id}>;
                <TableCell>;
                  <div className="flex items - center gap - 3">;
                    <Avatar className="h - 8 w - 8">;
                      {application.talent_profile?.profile_picture_url ? (
<<<<<<< HEAD
  }

  },
  
  return (
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
                    <Avatar className="h-8 w-8">
                      {application.talent_profile?.profile_picture_url ? (
                        <img
                          src={application.talent_profile.profile_picture_url}
                          alt={application.talent_profile.full_name |"Candidate"}
                        />
                      ) : (
                        <User className="h-4 w-4" />
                      )}
                    </Avatar>
                    <div>
                      <div className="font-medium">
                        {application.talent_profile?.full_name |"Candidate"}
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        {application.talent_profile?.professional_title |"Applicant"}
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
                <TableCell className="hidden lg:table-cell">
                  {application.match_score !== undefined && application.match_score !== null ? (
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
                    <ApplicationActions;
"
import { format } from "date-fns",;"
import { JobApplication } from "@/types/jobs",;"
import { Avatar } from "@/components/ui/avatar",;"
import { Badge } from "@/components/ui/badge",;"
=======
                    <ApplicationActions
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { format } from "date-fns",;
import { JobApplication } from "@/types/jobs",;
import { Avatar } from "@/components/ui/avatar",;
import { Badge } from "@/components/ui/badge",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
export function ApplicationsTable() { return null; }
=======
export function ApplicationsTable({;
  applications,;
  processingId,;
  onViewApplication,;
  onStatusChange,;
  onViewScore;
}: ApplicationsTableProps) {;
  const [hireModalOpen, setHireModalOpen] = useState(false),;
  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null),;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const handleHireClick = (application: JobApplication) => {;
    setSelectedApplication(application),;
    setHireModalOpen(true);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                </TableCell>;
                <TableCell className="text-right">;
                  <div className="flex items-center justify-end gap-2">;
                    <ClickableBadge
                      variant="outline" 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                      className="cursor-pointer bg-green-50 hover:bg-green-100 text-green-700"
                      onClick={() => handleHireClick(application)}
                    >;"
                      <Briefcase className="h-3 w-3 mr-1" /> Hire;
                    </ClickableBadge>;
<<<<<<< HEAD
                    <ApplicationActions
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

                      application={application}
                      processing_id={processing_id}

import { format } from "date-fns",;
import { JobApplication } from "@/types/jobs",;
import { Avatar } from "@/components/ui/avatar",;
import { Badge } from "@/components/ui/badge",;
import { ClickableBadge } from "@/components/ui/clickable-badge",;
import { ;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
  TableRow;
} from "@/components/ui/table",;
import { ApplicationActions } from "./ApplicationActions",;
import { StatusBadge } from "./StatusBadge",;
import { Briefcase, User } from "lucide-react",;
import { HireConfirmationModal } from "@/components/hiring-tracker/HireConfirmationModal",;
import { useState } from "react",;
import { toast } from "@/hooks/use-toast",;
;
interface ApplicationsTableProps {;
  applications:JobApplication[],;
  processingId:string | null,;
  onViewApplication:(applicationId:string) => Promise<void>,;
  onStatusChange:(applicationId:string, newStatus:string) => Promise<void>,;
  onViewScore:(application:JobApplication) => void;
}
;
export function ApplicationsTable({ ;
  applications, ;
  processingId, ;
  onViewApplication, ;
  onStatusChange,;
  onViewScore;
} ApplicationsTableProps) {;
  const [hireModalOpen, setHireModalOpen] = useState(false),;
  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null),;
  ;
  const handleHireClick = (application:JobApplication) => {;
    setSelectedApplication(application),;
    setHireModalOpen(true);
  },;
  ;
  const handleHireConfirmed = () => {;
    // This will be called after the hire confirmation is completed;
    toast({;
      title:"Hiring process initiated",;
      description:"Offer has been sent to the talent.";
    }),;
  },;
  ;
  const handleHireClick = (application: JobApplication) => {;
    setSelectedApplication(application),;
    setHireModalOpen(true);
  },;
  const handleHireConfirmed = () => {;
    // This will be called after the hire confirmation is completed;
    toast({;
      title: "Hiring process initiated";
      description: "Offer has been sent to the talent.";
    });
  };
  return (;
    <>;
      <div className="rounded-md border">;
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead>Candidate</TableHead>;
              <TableHead className="hidden md:table-cell">Applied</TableHead>;
              <TableHead className="hidden md:table-cell">Status</TableHead>;
              <TableHead className="hidden lg:table-cell">Match Score</TableHead>;
              <TableHead className="text-right">Actions</TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody>;
            {applications.map((application) => (;
              <TableRow key={application.id}>;
                <TableCell>;
                  <div className="flex items-center gap-3">;
                    <Avatar className="h-8 w-8">;
                      {application.talent_profile?.profile_picture_url ? (;
                        <img;
                          src={application.talent_profile.profile_picture_url} ;
                          alt={application.talent_profile.full_name || "Candidate"} ;
                        />;
                      ) : (;
                        <User className="h-4 w-4" />;
                      )}
                    </Avatar>;
                    <div>;
                      <div className="font-medium">;
                        {application.talent_profile?.full_name || "Candidate"}
                      </div>;
                      <div className="text-xs text-muted-foreground mt-0.5">;
                        {application.talent_profile?.professional_title || "Applicant"}
                      </div>;
                    </div>;
                  </div>;
                </TableCell>;
<<<<<<< HEAD

                        />;
                      ) : (;
                        <User className="h-4 w-4" />;
                      )}
                    </Avatar>;
                    <div>;
                      <div className="font-medium">;
=======
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
<<<<<<< HEAD
      ;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Hire Confirmation Modal */}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      <HireConfirmationModal;
        isOpen={hireModalOpen}
        onClose={() => setHireModalOpen(false)}
        application={selectedApplication || undefined}
        onConfirm={handleHireConfirmed}
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      />;
    </>;
              </TableRow>))}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
                      processingId={processingId}
                    />

    </>
  )
pr-12325
}
=======
}
<<<<<<< HEAD
  ),;}
};
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
                      application={application}
                      processingId={processingId}
                      onViewApplication={onViewApplication}
                      onStatusChange={onStatusChange}
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {/* Hire Confirmation Modal */}
      <HireConfirmationModal
        isOpen={hireModalOpen}
        onClose={() => setHireModalOpen(false)}
        application={selectedApplication |undefined}
        onConfirm={handleHireConfirmed}
      />
    </>
  )
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
