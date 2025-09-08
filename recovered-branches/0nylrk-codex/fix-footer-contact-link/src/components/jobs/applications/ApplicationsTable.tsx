
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
interface ApplicationsTableProps {

  applications: JobApplication[]
  processingId: string | null;
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
          <TableBody>;                      variant="outline"
                      className="cursor-pointer"
                      onClick={() => onViewScore(application)}
                    >;
                      {application && application.match_score}%;
                    </ClickableBadge>;
                  ) : (;"
                    <span className="text-muted-foreground text-sm">Not scored</span>;
                  )}
                      className="cursor-pointer bg-green-50 hover:bg-green-100 text-green-700"
                      onClick={() => handleHireClick(application)}
                    >;"
                      <Briefcase className="h-3 w-3 mr-1" /> Hire;
                    </ClickableBadge>;
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