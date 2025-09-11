
=======import { useState } from "react",
import { Draggable } from "react-beautiful-dnd",
import { formatDistanceToNow } from "date-fns",
import { Link } from "react-router-dom",
import { JobApplication } from "@/types/jobs",
import { Card, CardContent } from "@/components/ui/card",
import { Avatar } from "@/components/ui/avatar",
import { useState } from "react",;
import { Draggable } from "react-beautiful-dnd",;
import { formatDistanceToNow } from "date-fns",;
import { Link } from "react-router-dom",;
import { JobApplication } from "@/types/jobs",;
import { Card, CardContent } from "@/components/ui/card",;
import { Avatar } from "@/components/ui/avatar",;
import { Button } from "@/components/ui/button",;
import { Textarea } from "@/components/ui/textarea",;
import { ;
  MessageSquare,;
  User, ;
  FileText, ;
  MoreVertical, ;
  Calendar,;
  AlertTriangle,;
  BriefcaseIcon;
} from "lucide-react",;
=======import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;

  MessageSquare,
  User,
  FileText,
  MoreVertical,
  Calendar,
  AlertTriangle,


  BriefcaseIcon
} from "lucide-react",


=======import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  MessageSquare;
  User;
  FileText;
  MoreVertical;
  Calendar;
  AlertTriangle;
  BriefcaseIcon
} from "lucide-react",
import {

  MessageSquare
  User
  FileText
  MoreVertical
  Calendar
  AlertTriangle
  BriefcaseIcon
} from "lucide-react";
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuTrigger,;
} from "@/components/ui/dropdown-menu";
import { ScoreBadge } from "@/components/jobs/applications/ScoreBadge";

import { toast } from "@/hooks/use-toast";
import { HireConfirmationModal } from "./HireConfirmationModal";
  MessageSquare,
  User,
  FileText,
  MoreVertical,
  Calendar,
  AlertTriangle,
  BriefcaseIcon
} from "lucide-react",

=======
  BriefcaseIcon,;
} from "lucide-react";
  BriefcaseIcon
} from "lucide-react",
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,


interface CandidateCardProps {
  application: JobApplication,
  index: number
}
export function CandidateCard({ application, index }: CandidateCardProps) {;
  const [showNotes, setShowNotes] = useState(false);
  const [notes, setNotes] = useState(application.notes || "");
  const [showHireModal, setShowHireModal] = useState(false);

export function CandidateCard({ application, index }: CandidateCardProps) {
  const [showNotes, setShowNotes] = useState(false);
  const [notes, setNotes] = useState(application.notes |"");
  const [showHireModal, setShowHireModal] = useState(false);
  // Check if application is stalled (no activity for 7 days)



  const isStalled =
    application.updated_at &&
    new Date(application.updated_at).getTime() <
      Date.now() - 7 * 24 * 60 * 60 * 1000;
  const [showNotes, setShowNotes] = useState(false),
  const [notes, setNotes] = useState(application.notes || ""),
  const [showHireModal, setShowHireModal] = useState(false),
  
  // Check if application is stalled (no activity for 7 days)
  const isStalled = application.updated_at && 
    new Date(application.updated_at).getTime() < 
    (Date.now() - 7 * 24 * 60 * 60 * 1000),


interface CandidateCardProps {
  application: JobApplication;
  index: number
}



=======
    const handleSaveNotes = () => {
    // Here you would save the notes to the database
    // For now, we'll just show a toast
    toast({
export function CandidateCard(): any ({ application, index }: CandidateCardProps) {;
  const [showNotes, setShowNotes] = useState(false);
  const [notes, setNotes] = useState(application && application.notes || "");
  const [showHireModal, setShowHireModal] = useState(false);

  // Check if application is stalled (no activity for 7 days);
  const isStalled =;
    application && application.updated_at &&;
    new Date(application && application.updated_at).getTime() <;
      Date && Date.now() - 7 * 24 * 60 * 60 * 1000;  const handleSaveNotes = () => {;
    // Here you would save the notes to the database;
    // For now, we'll just show a toast;
    toast({;
  const handleHireConfirmed = () => {;
    // Hiring process completed via the modal;
    toast({;
      title: "Hiring process initiated",;
      description: "Offer has been sent to the talent.",;    });
  }

  return (
    <>;
      <Draggable draggableId={application && application.id} index={index}>;
        {(provided) => (;

          <Card;
            className="mb-2 p-0 shadow-sm border";


              {/* Candidate Header */}
                        }
                      />;
                    ) : (;
                      <User className="h-4 w-4" />;

                    )}
                  </Avatar>
                  <div>
                    <h4 className="font-medium text-sm">
                      {application.talent_profile?.full_name |"Candidate"}
                    </h4>
                    <p className="text-xs text-muted-foreground">
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662              <div className="flex justify-between items-start mb-2">;
                <div className="flex items-center gap-2">;
                  <Avatar className="h-8 w-8">;
                          application && application.talent_profile.full_name || "Candidate"
                        }
                      />;
                    ) : (;
                    {application.talent_profile?.profile_picture_url ? (;
                      <img ;
                        src={application.talent_profile.profile_picture_url} ;
                        alt={application.talent_profile.full_name || "Candidate"} ;
                      />;
                    ) :(;
                      <User className="h-4 w-4" />;



                    )}

                      {application.talent_profile?.professional_title || "Applicant"}
=======                    </p>
                  </div>
                </div>


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662



=======
                  </DropdownMenuContent>;
                </DropdownMenu>;
              </div>;

=======
        on_confirm={handleHireConfirmed}
      />;
    </>);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
