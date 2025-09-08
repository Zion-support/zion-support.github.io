<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";
import { JobApplication } from "@/types/jobs";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {


import { useState } from "react",
import { Draggable } from "react-beautiful-dnd",
import { formatDistanceToNow } from "date-fns",
import { Link } from "react-router-dom",
import { JobApplication } from "@/types/jobs",
import { Card, CardContent } from "@/components/ui/card",
<<<<<<< HEAD



=======


import { Avatar } from "@/components/ui/avatar",
";
import { Button } from "@/components/ui/button";"
import { Textarea } from "@/components/ui/textarea";"
import {
  }
  MessageSquare,
  User, 
  FileText, 
  MoreVertical, 
  Calendar,
  AlertTriangle,
  BriefcaseIcon

>>>>>>> origin/cursor/delete-old-data-records-6bba
import {;
  MessageSquare,;
  User,;
  FileText,;
  MoreVertical,;
  Calendar,;
  AlertTriangle,;
  BriefcaseIcon,;
} from "lucide-react";
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {;
  BriefcaseIcon,;"
} from "lucide-react";"
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuTrigger,;

BriefcaseIcon,;
} from "lucide-react";
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
<<<<<<< HEAD

  DropdownMenuTrigger,;


=======
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

>>>>>>> origin/cursor/delete-old-data-records-6bba
} from "@/components/ui/dropdown-menu";
import { ScoreBadge } from "@/components/jobs/applications/ScoreBadge";
import { toast } from "@/hooks/use-toast";
import { HireConfirmationModal } from "./HireConfirmationModal";
<<<<<<< HEAD

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

=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
  MessageSquare,
  User,
  FileText,
  MoreVertical,
  Calendar,
  AlertTriangle,

  BriefcaseIcon
} from "lucide-react",
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
"
import { Button } from "@/components/ui/button";""
import { Textarea } from "@/components/ui/textarea";"
import {
  // TODO: Implement
}
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
import {
DropdownMenu
  DropdownMenuContent
  DropdownMenuItem
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { ScoreBadge } from "@/components/jobs/applications/ScoreBadge";

<<<<<<< HEAD

=======

import { toast } from "@/hooks/use-toast";
import { HireConfirmationModal } from "./HireConfirmationModal";

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

>>>>>>> origin/cursor/delete-old-data-records-6bba
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,

<<<<<<< HEAD
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

=======
DropdownMenuTrigger,;
DropdownMenuTrigger,;
>>>>>>> origin/cursor/delete-old-data-records-6bba

} from "@/components/ui/dropdown-menu";

import { ScoreBadge } from "@/components/jobs/applications/ScoreBadge";
"
import { toast } from "@/hooks/use-toast";"
import { HireConfirmationModal } from "./HireConfirmationModal";

import { useState  } from './react';'
import { Draggable  } from './react - beautiful - dnd';'
import { formatDistanceToNow  } from './date - fns';'
import { Link  } from './react-router-dom';'
import { JobApplication  } from '@/types / jobs';'
import { Card, CardContent  } from '@/components / ui / card';'
import { Avatar  } from '@/components / ui / avatar';'
import { Button  } from '@/components / ui / button';'
import { Textarea  } from '@/components / ui / textarea';
import {}

  MessageSquare,
  User,
  FileText,
  MoreVertical,
  Calendar,
  AlertTriangle,

interface CandidateCardProps {


  application: JobApplication;
  index: number;
}


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const handleSaveNotes = () => {
    // Here you would save the notes to the database
    // For now, we'll just show a toast
    toast({

<<<<<<< HEAD


export function CandidateCard(): any ({ application, index }: CandidateCardProps) {;
  const [showNotes, setShowNotes] = useState(false);
  const [notes, setNotes] = useState(application && application.notes || "");
  const [showHireModal, setShowHireModal] = useState(false);


=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD
  

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

  return (
    <>
      <Draggable draggableId={application.id} index={index}>
        {(provided) => (
<<<<<<< HEAD

          <Card "
            className="mb-2 p-0 shadow-sm border"

=======
          <Card "
            className="mb-2 p-0 shadow-sm border"

  const handleSaveNotes = () => {;
    // Here you would save the notes to the database;
    // For now, we'll just show a toast;
    toast({;
      title: "Notes saved",
      description: "Your notes have been saved",;
    });
    setShowNotes(false);
  };

  const handleHireConfirmed = () => {;
    // Hiring process completed via the modal;
    toast({;

  }

  return (
    <>;
      <Draggable draggableId={application && application.id} index={index}>;

            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >"
            <CardContent className="p-3">

              <div className="flex justify-between items-start mb-2">;
                <div className="flex items-center gap-2">;

                  <Avatar className="h-8 w-8">;
                    {application && application.talent_profile?.profile_picture_url ? (;
                      <img
</Card>"
            <CardContent className="p-3">"
</CardContent>"
              <div className="flex justify-between items-start mb-2">;"
</div>"
                <div className="flex items-center gap-2">;"
</div>"
                  <Avatar className="h-8 w-8">;"
</Avatar>
                      <img;
                        src={application && application.talent_profile.profile_picture_url}
                        alt={
import { useState } from "react",;
import { Draggable } from "react-beautiful-dnd",;
import { formatDistanceToNow } from "date-fns",;
import { Link } from "react-router-dom",;
import { JobApplication } from "@/types/jobs",;
import { Card, CardContent } from "@/components/ui/card",;
import { Avatar } from "@/components/ui/avatar",;
import { Button } from "@/components/ui/button",;
import { Textarea } from "@/components/ui/textarea",;
import {;
  MessageSquare,;
  User,;
  FileText,;
  MoreVertical,;
  Calendar,;
  AlertTriangle,;
  BriefcaseIcon;
} from "lucide-react",;
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",;
import { ScoreBadge } from "@/components/jobs/applications/ScoreBadge",;
import { toast } from "@/hooks/use-toast",;
import { HireConfirmationModal } from "./HireConfirmationModal",;
interface CandidateCardProps {;
  application: JobApplication,;
  index: number;
}
;
export function CandidateCard({ application, index }: CandidateCardProps) {;
  const [showNotes, setShowNotes] = useState(false),;
  const [notes, setNotes] = useState(application.notes || ""),;
  const [showHireModal, setShowHireModal] = useState(false),;

  // Check if application is stalled (no activity for 7 days);
  const isStalled =;
    application && application.updated_at &&;
    new Date(application && application.updated_at).getTime() <;
      Date && Date.now() - 7 * 24 * 60 * 60 * 1000;
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",;
import { ScoreBadge } from "@/components/jobs/applications/ScoreBadge",;
import { toast } from "@/hooks/use-toast",;
import { HireConfirmationModal } from "./HireConfirmationModal",;
;
interface CandidateCardProps {;
  application:JobApplication,;
  index:number;
}
;
export function CandidateCard({ application, index } CandidateCardProps) {;
  const [showNotes, setShowNotes] = useState(false),;
  const [notes, setNotes] = useState(application.notes || ""),;
  const [showHireModal, setShowHireModal] = useState(false),;
  ;
  // Check if application is stalled (no activity for 7 days);
  const isStalled = application.updated_at && ;
    new Date(application.updated_at).getTime() < ;
    (Date.now() - 7 * 24 * 60 * 60 * 1000),;
  ;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const handleSaveNotes = () => {;
    // Here you would save the notes to the database;
    // For now, we'll just show a toast;
    toast({;
<<<<<<< HEAD
=======

      title: "Notes saved",
      description: "Your notes have been saved",;
    });
    setShowNotes(false);
  };
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
  }

  return (
    <>;
      <Draggable draggableId={application && application.id} index={index}>;

>>>>>>> origin/cursor/delete-old-data-records-6bba
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >"
            <CardContent className="p-3">

<<<<<<< HEAD
          <Card
            className="mb-2 p-0 shadow-sm border"
            ref={provided && provided.innerRef}
            {...provided && provided.draggableProps}
            {...provided && provided.dragHandleProps}>;
      title:"Notes saved",;
      description:"Your notes have been saved";
    }),;
    setShowNotes(false),;
  },;
  ;
  const handleHireConfirmed = () => {;
    // Hiring process completed via the modal;
    toast({;
      title:"Hiring process initiated",;
      description:"Offer has been sent to the talent.";
    }),;
  },;
  ;
  return (;
    <>;
      <Draggable draggableId={application.id} index={index}>;
        {(provided) => (;
          <Card ;
            className="mb-2 p-0 shadow-sm border";
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >;
            <CardContent className="p-3">;
              {/* Candidate Header */}

              {/* Candidate Header */}

              <div className="flex justify-between items-start mb-2">;
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

=======

              <div className="flex justify-between items-start mb-2">;
                <div className="flex items-center gap-2">;

                  <Avatar className="h-8 w-8">;
>>>>>>> origin/cursor/delete-old-data-records-6bba


                      {application.talent_profile?.professional_title || "Applicant"}
</img>"
                      <User className="h-4 w-4" />;"
</User>
                  </Avatar>
                  <div>
</div>"
                    <h4 className="font-medium text-sm">"
</h4>
                    </h4>"
                    <p className="text-xs text-muted-foreground">"
</p>"
              <div className="flex justify-between items-start mb-2">;"
</div>"
                <div className="flex items-center gap-2">;"
</div>"
                  <Avatar className="h-8 w-8">;"
</Avatar>
                      <img ;
                        src={application.talent_profile.profile_picture_url} ;"
                        alt={application.talent_profile.full_name || "Candidate"} ;"
                      />;
</img>"
                      <User className="h-4 w-4" />;"
</User>
                    </p>
                  </div>
                </div>
                    </p>
                  </div>
                </div>
                    </p>
                  </div>
                </div>

                      {application.talent_profile?.professional_title |

                        "Applicant"}
                    </p>
                  </div>
                </div>"
                      {application.talent_profile?.professional_title || "Applicant"}
                    </p>
                  </div>
                </div>


<<<<<<< HEAD




=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                <DropdownMenu>

                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
<<<<<<< HEAD


                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>"
                  <DropdownMenuContent align="end">
=======
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setShowNotes(!showNotes)}>
                      {showNotes ? "Hide notes" : "Add notes"}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setShowHireModal(true)}>
                      <BriefcaseIcon className="h-4 w-4 mr-2" /> Hire Candidate
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to={`/messages?talentId=${application.talent_id}`}>
                        Message
                      </Link>
                    </DropdownMenuItem>
                    {application.resume?.file_url && (
                      <DropdownMenuItem asChild>
                        <a href={application.resume.file_url} target="_blank" rel="noopener noreferrer">
                          View Resume
                        </Link>
                      </DropdownMenuItem>
                    )}
                  </Avatar>;
                  <div>;
                    <h4 className="font-medium text-sm">;
                      {application.talent_profile?.full_name || "Candidate"}
                    </h4>;
                    <p className="text-xs text-muted-foreground">;
                      {application.talent_profile?.professional_title || "Applicant"}
                    </p>;
                  </div>;
                </div>;
                ;
>>>>>>> origin/cursor/delete-old-data-records-6bba

                  </Avatar>;
                  <div>;"
                    <h4 className="font-medium text-sm">;"
                      {application && application.talent_profile?.full_name || "Candidate"}
                    </h4>;"
                    <p className="text-xs text-muted-foreground">;
                      {application && application.talent_profile?.professional_title ||;"

                        "Applicant"}
                    </p>;
                  </div>;
                </div>;


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                <DropdownMenu>;
                  <DropdownMenuTrigger asChild>;
                    <Button variant="ghost" className="h-8 w-8 p-0">;
                      <MoreVertical className="h-4 w-4" />;
                    </Button>;
                  </DropdownMenuTrigger>;
                  <DropdownMenuContent align="end">;
                    <DropdownMenuItem onClick={() => setShowNotes(!showNotes)}>;

<<<<<<< HEAD

                      {showNotes ? "Hide notes" : "Add notes"}

=======
                      {showNotes ? "Hide notes" : "Add notes"}

                      {showNotes ? "Hide notes" : "Add notes"}
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    </DropdownMenuItem>;
                    <DropdownMenuItem onClick={() => setShowHireModal(true)}>;
                      <BriefcaseIcon className="h-4 w-4 mr-2" /> Hire Candidate;
                    </DropdownMenuItem>;
                    <DropdownMenuItem asChild>;
<<<<<<< HEAD

                      <Link to={`/messages?talentId=${application && application.talent_id}`}>;
                        Message;
                      </Link>;
                    </DropdownMenuItem>;
                    {application && application.resume?.file_url && (;
                      <DropdownMenuItem asChild>;
                        <a
                          href={application && application.resume.file_url}
                          target="_blank"
                          rel="noopener noreferrer">;

=======
                      <Link to={`/messages?talentId=${application.talent_id}`}>;
                        Message;
                      </Link>;
                    </DropdownMenuItem>;
                    {application.resume?.file_url && (;
                      <DropdownMenuItem asChild>;
                        <a href={application.resume.file_url} target="_blank" rel="noopener noreferrer">;
<Link to={`/messages?talentId=${application.talent_id}`}>;
                        Message;
                      </Link>;
                    </DropdownMenuItem>;
                    {application.resume?.file_url && (;
                      <DropdownMenuItem asChild>;
                        <a href={application.resume.file_url} target="_blank" rel="noopener noreferrer">;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                          View Resume;
                          rel="noopener noreferrer">;                          View Resume;
                        </a>;
                      </DropdownMenuItem>;
                    )}
<<<<<<< HEAD


                  </DropdownMenuContent>;
                </DropdownMenu>;
              </div>;


=======
                  </DropdownMenuContent>;
                </DropdownMenu>;
              </div>;
              ;
>>>>>>> origin/cursor/delete-old-data-records-6bba
              {/* Application Info */}
              <div className="flex flex-wrap gap-2 items-center text-xs text-muted-foreground mb-2">;
                <div className="flex items-center">;
                  <Calendar className="h-3 w-3 mr-1" />;


                {isStalled && (;
                  <div className="flex items-center text-amber-500">;
                    <AlertTriangle className="h-3 w-3 mr-1" />;
                    Stalled;
                  </div>;
                )}
              </div>;


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              {/* Match Score */}
              {application.match_score !== null && application.match_score !== undefined && (;
                <div className="mb-2">;
                  <ScoreBadge application={application} />;
                </div>;
              )}
;


<<<<<<< HEAD





=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              {/* Notes Section */}
              {showNotes && (
                <div className="mt-2">
                  <Textarea 
                    placeholder="Add private notes about this candidate..." 
                    className="text-xs min-h-[60px]"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                  <div className="flex justify-end mt-2">
                    <Button size="sm" onClick={handleSaveNotes}>Save Notes</Button>
                  </div>
                </div>
              )}


<<<<<<< HEAD





              {/* Action Buttons */}
              <div className="flex justify-between mt-2 gap-1">
                <Button variant="outline" size="sm" className="flex-1" asChild>

;
              {/* Action Buttons */}
              <div className="flex justify-between mt-2 gap-1">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  asChild
                >


=======
;
              {/* Action Buttons */}
              <div className="flex justify-between mt-2 gap-1">
                <Button 
                  variant="outline" 
                  size="sm" 

                  className="flex-1"
                  asChild;
                >


>>>>>>> origin/cursor/delete-old-data-records-6bba
                  <Link to={`/messages?talentId=${application.talent_id}`}>
                    <MessageSquare className="h-3 w-3 mr-1" /> Message

                  </Link>
                </Button>


<<<<<<< HEAD

                  className="flex-1"
                  asChild;
                >


                  {application.resume?.file_url ? (

=======
                  className="flex-1"
                  asChild;
                >
              {/* Action Buttons */}

                    <MessageSquare className="h-3 w-3 mr-1" /> Message;
                  </Link>;
                </Button>;
"
                <Button variant="outline" size="sm" className="flex-1" asChild>;
                  {application && application.resume?.file_url ? (;

              <div className="flex justify-between mt-2 gap-1">;
                <Button variant="outline" size="sm" className="flex-1" asChild>;
                  <Link to={`/messages?talentId=${application && application.talent_id}`}>;
                    <MessageSquare className="h-3 w-3 mr-1" /> Message;
                  </Link>;
                </Button>;
                <Button variant="outline" size="sm" className="flex-1" asChild>;
                  {application && application.resume?.file_url ? (;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    <a
                      href={application && application.resume.file_url}
                      target="_blank"
                      rel="noopener noreferrer">;
                      <FileText className="h-3 w-3 mr-1" /> Resume;
                    </a>;
                  ) : (;
<<<<<<< HEAD


                    <span>;

=======
              ;
              {/* Match Score */}
              {application.match_score !== null && application.match_score !== undefined && (;
                <div className="mb-2">;
                  <ScoreBadge application={application} />;
                </div>;              )}
              ;
              {/* Notes Section */}
              {showNotes && (;
                <div className="mt-2">;
                  <Textarea ;
                    placeholder="Add private notes about this candidate..." ;
                    className="text-xs min-h-[60px]";
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />;
                  <div className="flex justify-end mt-2">;
                    <Button size="sm" onClick={handleSaveNotes}>Save Notes</Button>;
                  </div>;
                </div>;              )}
              ;
              {/* Action Buttons */}
              <div className="flex justify-between mt-2 gap-1">;
                <Button ;
                  variant="outline" ;
                  size="sm" ;
                  className="flex-1";
                  asChild;
                >;
                  <Link to={`/messages?talentId=${application.talent_id}`}>;
                    <MessageSquare className="h-3 w-3 mr-1" /> Message;
                  </Link>;
                </Button>;
                ;
                <Button ;
                  variant="outline" ;
                  size="sm" ;
                  className="flex-1";
                  asChild;
                >;
                  {application.resume?.file_url ? (;
                    <a href={application.resume.file_url} target="_blank" rel="noopener noreferrer">;
                      <FileText className="h-3 w-3 mr-1" /> Resume;
                    </a>;
                  ) :(;
                    <span>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                      <FileText className="h-3 w-3 mr-1" /> No Resume;
                    </span>;
                  )}

<<<<<<< HEAD

                </Button>;



                </Button>

                <Button"
                  variant="default""
                  size="sm"



                  className="flex-1"

                  onClick={() => setShowHireModal(true)}
                >;
                  <BriefcaseIcon className="h-3 w-3 mr-1" /> Hire;
                </Button>;
              </div>;
            </CardContent>;
          </Card>;
        )}



  const [notes, set_notes] = useState (application.notes || "");
  const [showHireModal, setShowHireModal] = useState (false);
;
  // Check if application is stalled (no activity for 7 days);
  const is_stalled =;
    application.updated_at &&;
      </Draggable>;
    new Date (application.updated_at).get_time () <;
      Date.now () - 7 * 24 * 60 * 60 * 1000;
;

      description: "Your notes have been saved",

    });
    setShowNotes (false);
  }
;

      description: "Offer has been sent to the talent.",

    });
  }
;
  return (
    <>;
      <Draggable draggable_id={application.id} index={index}>;

            className="mb - 2 p - 0 shadow - sm border";

            ref={provided.inner_ref}
            {...provided.draggable_props}
            {...provided.dragHandleProps}

                  <Avatar className="h - 8 w - 8">;
                    {application.talent_profile?.profile_picture_url ? (
                      <img;
                        src={application.talent_profile.profile_picture_url}

                      />) : (
</img>)"
                      <User className="h - 4 w - 4" />)}"
</User>
                  </Avatar>;
                  <div>;

                    </p>;
                  </div>;
                </div>;
                <DropdownMenu>;

                  <DropdownMenuTrigger as_child>;
</DropdownMenuTrigger>"
                    <Button variant="ghost" className="h - 8 w - 8 p - 0">;"
</Button>"
                      <MoreVertical className="h - 4 w - 4" />;"
</MoreVertical>
                    </Button>;
                  </DropdownMenuTrigger>;"
                  <DropdownMenuContent align="end">;"
</DropdownMenuContent>
                    <DropdownMenuItem on_click={() => setShowNotes (!show_notes)}>;
</DropdownMenuItem>
                    </DropdownMenuItem>;
                    <DropdownMenuItem on_click={() => setShowHireModal (true)}>;
</DropdownMenuItem>"
                      <BriefcaseIcon className="h - 4 w - 4 mr - 2" /> Hire Candidate;"
</BriefcaseIcon>
                    </DropdownMenuItem>;
                    <DropdownMenuItem as_child>;

                      <Link to={`/messages?talent_id=${application.talent_id}`}>;
</Link>
                      </Link>;
                    </DropdownMenuItem>;
                      <DropdownMenuItem as_child>;
</DropdownMenuItem>
                        <a;

                          rel="noopener noreferrer";

                        >;
</a>
                        </a>;
                      </DropdownMenuItem>)}
                  </DropdownMenuContent>;
                </DropdownMenu>;

                    <AlertTriangle className="h - 3 w - 3 mr - 1" />;
                    Stalled;
                  </div>)}
              </div>;
              {/* Match Score */}
              {application.match_score !== null &&;

                  <div className="mb - 2">;
                    <ScoreBadge application={application} />;
                  </div>)}
              {/* Notes Section */}

                    <Button size="sm" on_click={handleSaveNotes}>;
                      Save Notes;
                    </Button>;
                  </div>;
                </div>)}

                  <Link to={`/messages?talent_id=${application.talent_id}`}>;
</Link>"
                    <MessageSquare className="h - 3 w - 3 mr - 1" /> Message;"
</MessageSquare>
                  </Link>;
                </Button>;"
                <Button variant="outline" size="sm" className="flex - 1" as_child>;"
</Button>
                    <a;
                      href={application.resume.file_url}"
                      target="_blank";""
                      rel="noopener noreferrer";"
                    >;
</a>"
                      <FileText className="h - 3 w - 3 mr - 1" /> Resume;"
</FileText>
                    </a>) : (
                    <span>;
</span>"
                      <FileText className="h - 3 w - 3 mr - 1" /> No Resume;"
</FileText>)
                    </span>)}
                </Button>;
                <Button;"
                  variant="default";""
                  size="sm";""
                  className="flex - 1";"
                  on_click={() => setShowHireModal (true)}

                </Button>;
              </div>;
            </CardContent>;
          </Card>)}
      </Draggable>;





      {/* Hire Confirmation Modal */}
      <HireConfirmationModal;
        is_open={showHireModal}
        on_close={() => setShowHireModal (false)}
        application={application}


      />;
    </>;
  );



=======

}
>>>>>>> origin/cursor/delete-old-data-records-6bba
