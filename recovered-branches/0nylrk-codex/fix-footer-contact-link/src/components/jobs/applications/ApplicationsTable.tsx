interface ApplicationsTableProps {

  applications: JobApplication[]
  processingId: string | null
  onViewApplication: (applicationId: string) => Promise<void>
  onStatusChange: (applicationId: string, newStatus: string) => Promise<void>
  onViewScore: (application: JobApplication) => void
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
import {toast} from "@/hooks/use-toast";export function ApplicationsTable({
  applications
  processingId
  onViewApplication

export function ApplicationsTable(): any ({ ;
  applications, ;
  processingId, ;
  onViewApplication, ;
  onStatusChange;
  onViewScore;
}: ApplicationsTableProps) {;
  const [hireModalOpen, setHireModalOpen] = useState(false);

  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null);

export function ApplicationsTable({ 
  applications, 
  processingId, 

  const handleHireClick = (application: JobApplication) => {
    setSelectedApplication(application)
    setHireModalOpen(true)
  return (
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
          <TableBody>;                      variant="outline"
                      className="cursor-pointer"
                      onClick={() => onViewScore(application)}
                    >;
                      {application && application.match_score}%;
                    </ClickableBadge>;
                  ) : (;
                    <span className="text-muted-foreground text-sm">Not scored</span>;
                  )}
                      className="cursor-pointer bg-green-50 hover:bg-green-100 text-green-700"
                      onClick={() => handleHireClick(application)}
                    >;
                      <Briefcase className="h-3 w-3 mr-1" /> Hire;
                    </ClickableBadge>;
  // TODO: Implement
}
  applications: JobApplication[],
  processingId: string | null;
  onViewApplication: (applicationId: string) => Promise<void>
</void>
  onStatusChange: (applicationId: string, newStatus: string) => Promise<void>
  onViewApplication: (applicationId: string) => Promise<void>,;
  onStatusChange: (applicationId: string, newStatus: string) => Promise<void>,;
  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null);

  onViewApplication: (application_id: string) => Promise < void>,
  onStatusChange: (application_id: string, new_status: string) => Promise < void>,
  onViewScore: (application: JobApplication) => void;
export /**
 * ApplicationsTable - Function description;
 */
function ApplicationsTable() {
  const [hireModalOpen, setHireModalOpen] = useState (false);
  const [selected_application, setSelectedApplication] = useState < JobApplication | null>(null);
;
  const handleHireClick = (application: JobApplication) =>: any {
  // TODO: Implement
    setSelectedApplication (application),
    setHireModalOpen (true);
  const handleHireConfirmed = () =>: any {
  // TODO: Implement
    // This will be called after the hire confirmation is completed;
    toast ({
      title: "Hiring process initiated",""
      description: "Offer has been sent to the talent.";")
    });

  },
  

  return (
    <>;"
      <div className="rounded - md border">;"
</div>
        <Table>;

          <TableHeader>;

            <TableRow>;

              <TableHead > Candidate;"
              <TableHead className="hidden md:table - cell">Applied;""
              <TableHead className="hidden md:table - cell">Status;""
              <TableHead className="hidden lg:table - cell">Match Score;""
              <TableHead className="text - right">Actions;"
          <TableBody>;

              <TableRow key={application.id}>;

                <TableCell>;
"
                  <div className="flex items - center gap - 3">;"
</div>"
                    <Avatar className="h - 8 w - 8">;"

                    <ClickableBadge;"
                      variant="outline"""
                      className="cursor-pointer"")
                      onClick={() => onViewScore(application)}

                    <span className="text-muted-foreground text-sm">Not scored</span>"
                <TableCell className="text-right">"
                  <div className="flex items-center justify-end gap-2">"
                      className="cursor-pointer bg-green-50 hover:bg-green-100 text-green-700""
                      onClick={() => handleHireClick(application)}
                      <Briefcase className="h-3 w-3 mr-1" /> Hire;"

                    
                    <ApplicationActions;"
import { format } from "date-fns",;""
import { JobApplication } from "@/types/jobs",;""
import { Avatar } from "@/components/ui/avatar",;""
import { Badge } from "@/components/ui/badge",;""
import { ClickableBadge } from "@/components/ui/clickable-badge",;"
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
  TableRow;"
} from "@/components/ui/table",;""
import { ApplicationActions } from "./ApplicationActions",;""
import { StatusBadge } from "./StatusBadge",;""
import { Briefcase, User } from "lucide-react",;""
import { HireConfirmationModal } from "@/components/hiring-tracker/HireConfirmationModal",;""
import { useState } from "react",;""
import { toast } from "@/hooks/use-toast",;"
interface ApplicationsTableProps {;
  applications: JobApplication[],;
  processingId: string | null,;

  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null),;

      <div className="rounded-md border">;"



              <TableHead>Candidate;"
              <TableHead className="hidden md:table-cell">Applied;""
              <TableHead className="hidden md:table-cell">Status;""
              <TableHead className="hidden lg:table-cell">Match Score;""
              <TableHead className="text-right">Actions;"

              <TableRow key={application && application.id}>;

                  <div className="flex items-center gap-3">;"
                    <Avatar className="h-8 w-8">;"

                        <img;
                          src={application && application.talent_profile.profile_picture_url} "
                          alt={application && application.talent_profile.full_name || "Candidate"}"
                        />;
</img>"
                        <User className="h-4 w-4" />;"

                    <div>;
                      <div className="font-medium">;"
                      </div>;"
                      <div className="text-xs text-muted-foreground mt-0 && 0.5">;"
                      </div>;
                ;"
                <TableCell className="hidden md:table-cell">;"


                  <StatusBadge status={application && application.status} />;

                <TableCell className="hidden lg:table-cell">;"

                      className="cursor-pointer""

                    <span className="text-muted-foreground text-sm">Not scored</span>;"
                <TableCell className="text-right">;"
                  <div className="flex items-center justify-end gap-2">;"

                          src={application.talent_profile.profile_picture_url}"
                          alt={application.talent_profile.full_name || "Candidate"}"
                        />) : (
</img>)"
                        <User className="h - 4 w - 4" />)}"

                      <div className="font - medium">;"
                      <div className="text - xs text - muted - foreground mt - 0.5">;"
                <TableCell className="hidden md:table - cell">;"


                  <StatusBadge status={application.status} />;

                <TableCell className="hidden lg:table - cell">;"

                      variant="outline";""
                      className="cursor - pointer";"
                      on_click={() => onViewScore (application)}

                    ) : ()"
                    <span className="text - muted - foreground text - sm">Not scored</span>)}"
                <TableCell className="text - right">;"
                  <div className="flex items - center justify - end gap - 2">;"
                      className="cursor - pointer bg - green - 50 hover:bg - green - 100 text - green - 700";"
                      on_click={() => handleHireClick (application)}
                      <Briefcase className="h - 3 w - 3 mr - 1" /> Hire;"

                    <ApplicationActions;

pr-12325
                      application={application}
                      processing_id={processing_id}
                      onViewApplication={onViewApplication}
                      onStatusChange={onStatusChange}
                    />;
                  </div>;
                </TableCell>;

          </TableBody>;
        </Table>;
      </div>;

      {/* Hire Confirmation Modal */}
      <HireConfirmationModal
        isOpen={hireModalOpen}
        onClose={() => setHireModalOpen(false)}
        application={selectedApplication |undefined}
        onConfirm={handleHireConfirmed}
      <HireConfirmationModal;
        isOpen={hireModalOpen}
        onClose={() => setHireModalOpen(false)}
        application={selectedApplication || undefined}
        onConfirm={handleHireConfirmed}
      />;
    </>;
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
}

      <HireConfirmationModal;
        isOpen={hireModalOpen}
        onClose={() => setHireModalOpen(false)}

    </>;
  );

      {/* Hire Confirmation Modal */}

              ))}
        is_open={hireModalOpen}
        on_close={() => setHireModalOpen (false)}

    </>);
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
