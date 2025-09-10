
import { useState } from "react",
import { Draggable } from "react-beautiful-dnd",
import { formatDistanceToNow } from "date-fns",
import { Link } from "react-router-dom",
import { JobApplication } from "@/types/jobs",
import { Card, CardContent } from "@/components/ui/card",
import { Avatar } from "@/components/ui/avatar",
<<<<<<< HEAD

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import {;
  MessageSquare,;
  User,;
  FileText,;
  MoreVertical,;
  Calendar,;
  AlertTriangle,;
<<<<<<< HEAD
  BriefcaseIcon,;
} from "lucide-react";
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuTrigger,;

=======
  BriefcaseIcon,;
} from "lucide-react";
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuTrigger,;

} from "@/components/ui/dropdown-menu";
import { ScoreBadge } from "@/components/jobs/applications/ScoreBadge";
import { toast } from "@/hooks/use-toast";
import { HireConfirmationModal } from "./HireConfirmationModal";
interface CandidateCardProps {;
import { useState  } from './react';
import { Draggable  } from './react - beautiful - dnd';
import { formatDistanceToNow  } from './date - fns';
import { Link  } from './react-router-dom';
import { JobApplication  } from '@/types / jobs';
import { Card, CardContent  } from '@/components / ui / card';
import { Avatar  } from '@/components / ui / avatar';
import { Button  } from '@/components / ui / button';
import { Textarea  } from '@/components / ui / textarea';
import {


  MessageSquare,
  User,
  FileText,
  MoreVertical,
  Calendar,
  AlertTriangle,


  BriefcaseIcon
} from "lucide-react",


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { Button } from "@/components/ui/button";
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScoreBadge } from "@/components/jobs/applications/ScoreBadge";

import { toast } from "@/hooks/use-toast";
import { HireConfirmationModal } from "./HireConfirmationModal";
interface CandidateCardProps {
  application: JobApplication;
import { Button } from "@/components/ui/button",
import { Textarea } from "@/components/ui/textarea",
import { 
  MessageSquare,
  User, 
  FileText, 
  MoreVertical, 
  Calendar,
  AlertTriangle,
  BriefcaseIcon,;
} from "lucide-react";
  BriefcaseIcon
} from "lucide-react",
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
<<<<<<< HEAD
<<<<<<< HEAD
DropdownMenuTrigger,;
=======
  DropdownMenuTrigger,
>>>>>>> main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
} from "@/components/ui/dropdown-menu";
import { ScoreBadge } from "@/components/jobs/applications/ScoreBadge";

import { toast } from "@/hooks/use-toast";
import { HireConfirmationModal } from "./HireConfirmationModal";
<<<<<<< HEAD
interface CandidateCardProps {;
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { useState  } from './react';
import { Draggable  } from './react - beautiful - dnd';
import { formatDistanceToNow  } from './date - fns';
import { Link  } from './react-router-dom';
import { JobApplication  } from '@/types / jobs';
import { Card, CardContent  } from '@/components / ui / card';
import { Avatar  } from '@/components / ui / avatar';
import { Button  } from '@/components / ui / button';
import { Textarea  } from '@/components / ui / textarea';
import {
  MessageSquare,
  User,
  FileText,
  MoreVertical,
  Calendar,
  AlertTriangle,
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
<<<<<<< HEAD




=======
=======
=======
} from "@/components/ui/dropdown-menu";
import { ScoreBadge } from "@/components/jobs/applications/ScoreBadge";
import { toast } from "@/hooks/use-toast";
import { HireConfirmationModal } from "./HireConfirmationModal";
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",
import { ScoreBadge } from "@/components/jobs/applications/ScoreBadge",
import { toast } from "@/hooks/use-toast",
import { HireConfirmationModal } from "./HireConfirmationModal",
  const handleSaveNotes = () => {
    // Here you would save the notes to the database
    // For now, we'll just show a toast
    toast({
      title: "Notes saved",
      description: "Your notes have been saved"
    }),
    setShowNotes(false)
  },
  
  const handleHireConfirmed = () => {}
    // Hiring process completed via the modal;
    toast({"
      title: "Hiring process initiated","
      description: "Offer has been sent to the talent."
    })
  },
  
  return (
    <>
      <Draggable draggableId={application.id} index={index}>
        {(provided) => (
          <Card 
            className="mb-2 p-0 shadow-sm border"
  const handleSaveNotes = () => {;
    // Here you would save the notes to the database;
    // For now, we'll just show a toast;
    toast({;
      title: "Notes saved",,
  description: "Your notes have been saved",;
    });
    setShowNotes(false)
};

  const handleHireConfirmed = () => {;
    // Hiring process completed via the modal;
    toast({;
      title: "Hiring process initiated",,
  description: "Offer has been sent to the talent.",;
  }

  return (
    <>;
      <Draggable draggableId={application && application.id} index={index}>;
        {(provided) => (;                <div className="flex items-center gap-2">;
                  <Avatar className="h-8 w-8">;
                    {application && application.talent_profile?.profile_picture_url ? (;
                      <img
                        src={application && application.talent_profile.profile_picture_url}
                        alt={
                        }
                      />;
                    ) : (;                      {application.talent_profile?.professional_title |
                        "Applicant"}
                    </p>
                  </div>
                </div>"
                      {application.talent_profile?.professional_title || "Applicant"}
                    </p>
                  </div>
                </div>
                
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                          rel="noopener noreferrer">;                          View Resume;
                        </a>;
                      </DropdownMenuItem>;
                    )}
              {/* Match Score */}

              {application.match_score !== null && application.match_score !== undefined && (;
                <div className="mb-2">;
                  <ScoreBadge application={application} />;
                </div>;
              )}
;

              {/* Notes Section */}
              {showNotes && (;
                <div className="mt-2">;
                  <Textarea
                    placeholder="Add private notes about this candidate..."
                    className="text-xs min-h-[60px]"
                    value={notes}
                    onChange={(e) => setNotes(e && e.target.value)}
                  />;
                  <div className="flex justify-end mt-2">;
                    <Button size="sm" onClick={handleSaveNotes}>;
                      Save Notes;
                    </Button>;
                  </div>;
                </div>;
              )}

              {/* Action Buttons */}
              <div className="flex justify-between mt-2 gap-1">;
                <Button variant="outline" size="sm" className="flex-1" asChild>;
                  <Link to={`/messages?talentId=${application && application.talent_id}`}>;
                    <MessageSquare className="h-3 w-3 mr-1" /> Message;
                  </Link>;
                </Button>;
                <Button variant="outline" size="sm" className="flex-1" asChild>;
                  {application && application.resume?.file_url ? (;
                    <a
                      href={application && application.resume.file_url}
                      target="_blank"
                      rel="noopener noreferrer">;
                      <FileText className="h-3 w-3 mr-1" /> Resume;
                    </a>;
                  ) : (;
                    <span>;
                      <FileText className="h-3 w-3 mr-1" /> No Resume;
                    </span>;
                  )}
}
