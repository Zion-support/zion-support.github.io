
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
import { Avatar } from "@/components/ui/avatar",
";
import { Button } from "@/components/ui/button";"
import { Textarea } from "@/components/ui/textarea";
import {};
  MessageSquare;
  User;
  FileText;
  MoreVertical;
  Calendar;
  AlertTriangle;
  BriefcaseIcon"
} from "lucide-react",
import {};
  MessageSquare;
  User;
  FileText;
  MoreVertical;
  Calendar;
  AlertTriangle;
  BriefcaseIcon"
} from "lucide-react";

import { useState } from "react",;
import { Draggable } from "react-beautiful-dnd",;
import { formatDistanceToNow } from "date-fns",;
import { Link } from "react-router-dom",;
import { JobApplication } from "@/types/jobs",;
import { Card, CardContent } from "@/components/ui/card",;
import { Avatar } from "@/components/ui/avatar",  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",;
import { ScoreBadge } from "@/components/jobs/applications/ScoreBadge",;
import { toast } from "@/hooks/use-toast",;
import { HireConfirmationModal } from "./HireConfirmationModal",;

  const handleSaveNotes = () => {
    // Here you would save the notes to the database
    // For now, we'll just show a toast
    toast({

export function CandidateCard(): any ({ application, index }: CandidateCardProps) {;
  const [showNotes, setShowNotes] = useState(false);
  const [notes, setNotes] = useState(application && application.notes || "");
  const [showHireModal, setShowHireModal] = useState(false);

      title: "Notes saved",
      description: "Your notes have been saved"

import { useState } from "react",""
import { Draggable } from "react-beautiful-dnd",""
import { formatDistanceToNow } from "date-fns",""
import { Link } from "react-router-dom",""
import { JobApplication } from "@/types/jobs",""
import { Card, CardContent } from "@/components/ui/card",""
import { Avatar } from "@/components/ui/avatar","
import {;
  MessageSquare,;
  User,;
  FileText,;
  MoreVertical,;
  Calendar,;
  AlertTriangle,;
  BriefcaseIcon,;
} from "lucide-react";
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
DropdownMenuTrigger,;
} from "@/components/ui/dropdown-menu";
"
} from "@/components/ui/dropdown-menu";"
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
import {}
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
"
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu","
import { ScoreBadge } from "@/components/jobs/applications/ScoreBadge","
import { toast } from "@/hooks/use-toast","
import { HireConfirmationModal } from "./HireConfirmationModal",
interface CandidateCardProps {

interface CandidateCardProps {};
  application: JobApplication;
  index: number;
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

import { Avatar } from "@/components/ui/avatar",  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",
import { ScoreBadge } from "@/components/jobs/applications/ScoreBadge",
import { toast } from "@/hooks/use-toast",
import { HireConfirmationModal } from "./HireConfirmationModal",
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",
import { ScoreBadge } from "@/components/jobs/applications/ScoreBadge",
import { toast } from "@/hooks/use-toast",
import { HireConfirmationModal } from "./HireConfirmationModal",
interface CandidateCardProps {
  application: JobApplication;
  index: number
}


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
          <Card "
            className="mb-2 p-0 shadow-sm border"

  const handleSaveNotes = () => {;
    // Here you would save the notes to the database;
    // For now, we'll just show a toast;
    toast({;
      title: "Notes saved",;
      description: "Your notes have been saved",;
    });
    setShowNotes(false);
  };

  const handleHireConfirmed = () => {;
    // Hiring process completed via the modal;
    toast({;
title: "Hiring process initiated",,
  description: "Offer has been sent to the talent.",;
      title: "Hiring process initiated",;
      description: "Offer has been sent to the talent.",;
application: JobApplication;
  index: number
}
    });
  }

  return (
    <>;
      <Draggable draggableId={application && application.id} index={index}>;
        {(provided) => (;

          <Card;
            className="mb-2 p-0 shadow-sm border";

            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >"
            <CardContent className="p-3">
              {/* Candidate Header */}

              <div className="flex justify-between items-start mb-2">;
                <div className="flex items-center gap-2">;
        {(provided) => (;                <div className="flex items-center gap-2">;
        {(provided) => (;

          <Card;
            className="mb-2 p-0 shadow-sm border";

  const handleSaveNotes = () => {;
</Card>
    <>;
      <Draggable draggableId={application && application.id} index={index}>;
</Draggable>
          <Card;"
            className="mb-2 p-0 shadow-sm border";"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <CardContent className="p-3">
              {/* Candidate Header */}

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
                        }
                      />;
                    ) : (;
                      <img;
                        src={application && application.talent_profile.profile_picture_url}
                        alt={}
                        }
                      />;
                    ) : (;
                      <User className="h-4 w-4" />;
                      <User className="h-4 w-4" />;
                    )}
                  </Avatar>
                  <div>"
                    <h4 className="font-medium text-sm">"
                      {application.talent_profile?.full_name |"Candidate"}
                    </h4>"
                    <p className="text-xs text-muted-foreground">

)}
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
                    ) : (;                      {application.talent_profile?.professional_title |
                      {application.talent_profile?.professional_title |"
                        "Applicant"}
                    </p>
                  </div>
                </div>"
                      {application.talent_profile?.professional_title || "Applicant"}
                    </p>
                  </div>
                </div>
                <DropdownMenu>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>"
                    <Button variant="ghost" className="h-8 w-8 p-0">"
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>"
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setShowNotes(!showNotes)}>
                  </Avatar>;
                  <div>;"
                    <h4 className="font-medium text-sm">;"
                      {application && application.talent_profile?.full_name || "Candidate"}
                    </h4>;"
                    <p className="text-xs text-muted-foreground">;
                      {application && application.talent_profile?.professional_title ||;"
                    <DropdownMenuItem onClick={() => setShowNotes(!showNotes)}>
                  </Avatar>;
                  <div>;
                    <h4 className="font-medium text-sm">;
                      {application && application.talent_profile?.full_name || "Candidate"}
                    </h4>;
                    <p className="text-xs text-muted-foreground">;
                      {application && application.talent_profile?.professional_title ||;
                        "Applicant"}
                    </p>;
                  </div>;
                </div>;

                    <DropdownMenuItem onClick={() => setShowNotes(!showNotes)}>                      {showNotes ? "Hide notes" :"Add notes"}
                      {showNotes ? "Hide notes" : "Add notes"}

                <DropdownMenu>;
                  <DropdownMenuTrigger asChild>;"
                    <Button variant="ghost" className="h-8 w-8 p-0">;"
                      <MoreVertical className="h-4 w-4" />;
                    </Button>;
                  </DropdownMenuTrigger>;"
                  <DropdownMenuContent align="end">;
                    <DropdownMenuItem onClick={() => setShowNotes(!showNotes)}>;

"
                      {showNotes ? "Hide notes" : "Add notes"}

                    </DropdownMenuItem>;
                    <DropdownMenuItem onClick={() => setShowHireModal(true)}>;"
                      <BriefcaseIcon className="h-4 w-4 mr-2" /> Hire Candidate;
                    </DropdownMenuItem>;
                    <DropdownMenuItem asChild>;
<Link to={`/messages?talentId=${application && application.talent_id}`}>;
                        Message;
                      </Link>;
                    </DropdownMenuItem>;
                    {application && application.resume?.file_url && (;
                      <DropdownMenuItem asChild>;
                        <a
                          href={application && application.resume.file_url}
                          target="_blank"
                          rel="noopener noreferrer">;                          View Resume;
                        </a>;
                      </DropdownMenuItem>;
                    )}

                  </DropdownMenuContent>;
                </DropdownMenu>;
              </div>;

              {/* Match Score */}

              {application.match_score !== null && application.match_score !== undefined && (;"
                <div className="mb-2">;
                  <ScoreBadge application={application} />;
                </div>;
              )}
;

              {/* Notes Section */}
              {showNotes && (;"
                <div className="mt-2">;
                  <Textarea"
                    placeholder="Add private notes about this candidate...""
                    className="text-xs min-h-[60px]"
                    value={notes}
                    onChange={(e) => setNotes(e && e.target.value)}
                  />;"
                  <div className="flex justify-end mt-2">;"
                    <Button size="sm" onClick={handleSaveNotes}>;
                      Save Notes;
                    </Button>;
                  </div>;
                </div>;
              )}

{/* Action Buttons */}

                <DropdownMenu>;
                  <DropdownMenuTrigger asChild>;
                    <Button variant="ghost" className="h-8 w-8 p-0">;
                      <MoreVertical className="h-4 w-4" />;
                    </Button>;
                  </DropdownMenuTrigger>;
                  <DropdownMenuContent align="end">;
                    <DropdownMenuItem onClick={() => setShowNotes(!showNotes)}>;
                      {showNotes ? "Hide notes" : "Add notes"}
{showNotes ? "Hide notes" :"Add notes"}
                      {showNotes ? "Hide notes" : "Add notes"}
                    </DropdownMenuItem>;
                    <DropdownMenuItem onClick={() => setShowHireModal(true)}>;
                      <BriefcaseIcon className="h-4 w-4 mr-2" /> Hire Candidate;
                    </DropdownMenuItem>;
                    <DropdownMenuItem asChild>;
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
<Link to={`/messages?talentId=${application.talent_id}`}>;
                        Message;
                      </Link>;
                    </DropdownMenuItem>;
                    {application.resume?.file_url && (;
                      <DropdownMenuItem asChild>;
                        <a href={application.resume.file_url} target="_blank" rel="noopener noreferrer">;
                          View Resume;
                          rel="noopener noreferrer">;                          View Resume;
                        </a>;
                      </DropdownMenuItem>;
                    )}

                  </DropdownMenuContent>;
                </DropdownMenu>;
              </div>;

              {/* Application Info */}
              <div className="flex flex-wrap gap-2 items-center text-xs text-muted-foreground mb-2">;
                <div className="flex items-center">;
                  <Calendar className="h-3 w-3 mr-1" />;
{formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}
                </div>;
                {isStalled && (;
                  <div className="flex items-center text-amber-500">;
                    <AlertTriangle className="h-3 w-3 mr-1" />;
                    Stalled;
                  </div>;
                )}
              </div>;
              {/* Match Score */}
              {application.match_score !== null && application.match_score !== undefined && (;
                <div className="mb-2">;
                  <ScoreBadge application={application} />;
                </div>;
              )}
;


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



              {/* Action Buttons */}

{/* Action Buttons */}

              {/* Action Buttons */}
              <div className="flex justify-between mt-2 gap-1">
                <Button variant="outline" size="sm" className="flex-1" asChild>
;
              {/* Action Buttons */}
              <div className="flex justify-between mt-2 gap-1">
                <Button 
                  variant="outline" 
                  size="sm" 

              {/* Action Buttons */}"
              <div className="flex justify-between mt-2 gap-1">"
                <Button variant="outline" size="sm" className="flex-1" asChild>

;
              {/* Action Buttons */}"
              <div className="flex justify-between mt-2 gap-1">
                <Button "
                  variant="outline" "
                  size="sm" "
                  className="flex-1"
                  asChild;
                >
                  <Link to={`/messages?talentId=${application.talent_id}`}>
                    <MessageSquare className="h-3 w-3 mr-1" /> Message

                  <Link to={`/messages?talentId=${application.talent_id}`}>"
                    <MessageSquare className="h-3 w-3 mr-1" /> Message;
                  </Link>
                </Button>

"
                <Button variant="outline" size="sm" className="flex-1" asChild>

                <Button "
                  variant="outline" "
                  size="sm" "
                  className="flex-1"
                  asChild;
                >
                  {application.resume?.file_url ? (

                  {application.resume?.file_url ? (

</DropdownMenuContent>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              {/* Application Info */}
              <div className="flex flex-wrap gap-2 items-center text-xs text-muted-foreground mb-2">
                <div className="flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  {formatDistanceToNow(new Date(application.created_at), {
                    addSuffix: true
                  })}
                </div>
                {isStalled && (
                  <div className="flex items-center text-amber-500">
                    <AlertTriangle className="h-3 w-3 mr-1" />
                    Stalled
                  </div>
                )}
              </div>
              {/* Match Score */}
              {application.match_score !== null &&
                application.match_score !== undefined && (
                  <div className="mb-2">
                    <ScoreBadge application={application} />
                  </div>
                )}

                  </DropdownMenuContent>;
                </DropdownMenu>;
              </div>;
              {/* Application Info */}
              <div className="flex flex-wrap gap-2 items-center text-xs text-muted-foreground mb-2">;
                <div className="flex items-center">;
                  <Calendar className="h-3 w-3 mr-1" />;
                  {formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}
                </div>;
                {isStalled && (;
                  <div className="flex items-center text-amber-500">;
                    <AlertTriangle className="h-3 w-3 mr-1" />;
                    Stalled;
                  </div>;
                )}
              </div>;
              {/* Match Score */}
              {application.match_score !== null && application.match_score !== undefined && (;
                <div className="mb-2">;
                  <ScoreBadge application={application} />;
                </div>;
              )}
;
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
              {/* Action Buttons */}
              <div className="flex justify-between mt-2 gap-1">
                <Button variant="outline" size="sm" className="flex-1" asChild>
;
              {/* Action Buttons */}
              <div className="flex justify-between mt-2 gap-1">
              {/* Action Buttons */}
              <div className="flex justify-between mt-2 gap-1">
                <Button variant="outline" size="sm" className="flex-1" asChild>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  asChild
                >

                  <Link to={`/messages?talentId=${application.talent_id}`}>
                    <MessageSquare className="h-3 w-3 mr-1" /> Message
                  </Link>
                </Button>

                <Button variant="outline" size="sm" className="flex-1" asChild>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  asChild
                >

                  {application.resume?.file_url ? (
              <div className="flex justify-between mt-2 gap-1">;
                <Button variant="outline" size="sm" className="flex-1" asChild>;
                  <Link to={`/messages?talentId=${application && application.talent_id}`}>;

                  {application.resume?.file_url ? (

"
              <div className="flex justify-between mt-2 gap-1">;"
                <Button variant="outline" size="sm" className="flex-1" asChild>;`
                  <Link to={`/messages?talentId=${application && application.talent_id}`}>;"
                    <MessageSquare className="h-3 w-3 mr-1" /> Message;
                  </Link>;
                </Button>;
"
                <Button variant="outline" size="sm" className="flex-1" asChild>;
                  {application && application.resume?.file_url ? (;
                    <a
                      href={application && application.resume.file_url}
                      target="_blank"
                      rel="noopener noreferrer">;
                      <FileText className="h-3 w-3 mr-1" /> Resume;
                    </a>;
                  ) : (;
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
                      <FileText className="h-3 w-3 mr-1" /> No Resume;
                    </span>;
                  )}

</Button>;

                <Button
                  variant="default"
                  size="sm"
                </Button>

                <Button"
                  variant="default""
                  size="sm"

<Button 
                  variant="default" 
                  size="sm" 
                  className="flex-1"
                <Button "
                  variant="default" "
                  size="sm" "
                  className="flex-1"

                  onClick={() => setShowHireModal(true)}
                >;"
                  size="sm"
</Button>;
                </Button>

                <Button
                  variant="default"
                  size="sm"
                <Button 
                  variant="default" 
                  size="sm" 
                  className="flex-1"
;
                <Button ;
                  variant="default" ;
                  size="sm" ;
                  className="flex-1";
                  size="sm"                </Button>        on_confirm={handleHireConfirmed}
                <DropdownMenu>
</DropdownMenu>
                  <DropdownMenuTrigger asChild>
</DropdownMenuTrigger>"
                    <Button variant="ghost" className="h-8 w-8 p-0">"
</Button>"
                      <MoreVertical className="h-4 w-4" />"
</MoreVertical>
                    </Button>
                  </DropdownMenuTrigger>"
                  <DropdownMenuContent align="end">"
</DropdownMenuContent>
                    <DropdownMenuItem onClick={() => setShowNotes(!showNotes)}>
</DropdownMenuItem>
                  </Avatar>;
                  <div>;
</div>"
                    <h4 className="font-medium text-sm">;"
</h4>
                    </h4>;"
                    <p className="text-xs text-muted-foreground">;"
</p>
                    </p>;
                  </div>;
                </div>;
                <DropdownMenu>;
</DropdownMenu>
                  <DropdownMenuTrigger asChild>;
</DropdownMenuTrigger>"
                    <Button variant="ghost" className="h-8 w-8 p-0">;"
</Button>"
                      <MoreVertical className="h-4 w-4" />;"
</MoreVertical>
                    </Button>;
                  </DropdownMenuTrigger>;"
                  <DropdownMenuContent align="end">;"
</DropdownMenuContent>
                    <DropdownMenuItem onClick={() => setShowNotes(!showNotes)}>;
</DropdownMenuItem>
                    </DropdownMenuItem>;
                    <DropdownMenuItem onClick={() => setShowHireModal(true)}>;
</DropdownMenuItem>"
                      <BriefcaseIcon className="h-4 w-4 mr-2" /> Hire Candidate;"
</BriefcaseIcon>
                    </DropdownMenuItem>;
                    <DropdownMenuItem asChild>;
</DropdownMenuItem>
                      <Link to={`/messages?talentId=${application && application.talent_id}`}>;
</Link>
                      </Link>;
                    </DropdownMenuItem>;
                      <DropdownMenuItem asChild>;
</DropdownMenuItem>
                        <a;
                          href={application && application.resume.file_url}"
                          target="_blank"""
                          rel="noopener noreferrer">;"
</a>
                        </a>;
                      </DropdownMenuItem>;
                  </DropdownMenuContent>;
                </DropdownMenu>;
              </div>;"
              <div className="flex flex-wrap gap-2 items-center text-xs text-muted-foreground mb-2">;"
</div>"
                <div className="flex items-center">;"
</div>"
                  <Calendar className="h-3 w-3 mr-1" />;"
</Calendar>
                </div>;"
                  <div className="flex items-center text-amber-500">;"
</div>"
                    <AlertTriangle className="h-3 w-3 mr-1" />;"
</AlertTriangle>
                  </div>;
              </div>;"
                <div className="mb-2">;"
</div>
                  <ScoreBadge application={application} />;
</ScoreBadge>
                </div>;"
                <div className="mt-2">;"
</div>
                  <Textarea;"
                    placeholder="Add private notes about this candidate..."""
                    className="text-xs min-h-[60px]""
                    value={notes}
                    onChange={(e) => setNotes(e && e.target.value)}
</Textarea>"
                  <div className="flex justify-end mt-2">;"
</div>"
                    <Button size="sm" onClick={handleSaveNotes}>;"
</Button>
                    </Button>;
                  </div>;
                </div>;"
              <div className="flex justify-between mt-2 gap-1">"
</div>"
                <Button variant="outline" size="sm" className="flex-1" asChild>"
</Button>"
              <div className="flex justify-between mt-2 gap-1">"
</div>
                <Button;"
                  variant="outline"""
                  size="sm"""
                  className="flex-1""
                  asChild;
                >
</Button>

                  <Link to={`/messages?talentId=${application.talent_id}`}>
</Link>"
                    <MessageSquare className="h-3 w-3 mr-1" /> Message;"
</MessageSquare>
                  </Link>
                </Button>

"
                <Button variant="outline" size="sm" className="flex-1" asChild>"
</Button>
                <Button;"
                  variant="outline"""
                  size="sm"""
                  className="flex-1""
                  asChild;
                >
</Button>"
              <div className="flex justify-between mt-2 gap-1">;"
</div>"
                <Button variant="outline" size="sm" className="flex-1" asChild>;"
</Button>
                  <Link to={`/messages?talentId=${application && application.talent_id}`}>;
</Link>"
                    <MessageSquare className="h-3 w-3 mr-1" /> Message;"
</MessageSquare>
                  </Link>;
                </Button>;"
                <Button variant="outline" size="sm" className="flex-1" asChild>;"
</Button>
                    <a;
                      href={application && application.resume.file_url}"
                      target="_blank"""
                      rel="noopener noreferrer">;"
</a>"
                      <FileText className="h-3 w-3 mr-1" /> Resume;"
</FileText>
                    </a>;
                    <span>;
</span>"
                      <FileText className="h-3 w-3 mr-1" /> No Resume;"
</FileText>
                    </span>;
                </Button>;
                <Button;"
                  variant="default"""
                  size="sm""
                </Button>

                <Button;"
                  variant="default"""
                  size="sm""
                <Button;"
                  variant="default"""
                  size="sm"""
                  className="flex-1""
                  onClick={() => setShowHireModal(true)}
>;
                  <BriefcaseIcon className="h-3 w-3 mr-1" /> Hire;
                </Button>;
              </div>;
            </CardContent>;
          </Card>;
        )}
      </Draggable>
      </Draggable>;

export /**;
 * CandidateCard - Function description;
 */
function CandidateCard() {}
  const [show_notes, setShowNotes] = useState (false);"
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
const handleSaveNotes = () =>: any {}
    // Here you would save the notes to the database;'
    // For now, we'll just show a toast;
    toast ({"
      title: "Notes saved","
      description: "Your notes have been saved",
  // TODO: Implement
}
    // Here you would save the notes to the database;"
    // For now, we'll just show a toast;'
    toast ({'
      title: "Notes saved",""
      description: "Your notes have been saved",")
    });
    setShowNotes (false);
  }
;
const handleHireConfirmed = () =>: any {}
    // Hiring process completed via the modal;
    toast ({"
      title: "Hiring process initiated","
      description: "Offer has been sent to the talent.",
    toast ({"
      title: "Hiring process initiated",""
      description: "Offer has been sent to the talent.",")
    });
  }
;
  return (
    <>;
      <Draggable draggable_id={application.id} index={index}>;
{(provided) => (
<Card;"
            className="mb - 2 p - 0 shadow - sm border";
            ref={provided.inner_ref}
            {...provided.draggable_props}
            {...provided.dragHandleProps}
>;"
            <CardContent className="p - 3">;
              {/* Candidate Header */}"
              <div className="flex justify - between items - start mb - 2">;"
                <div className="flex items - center gap - 2">;"
                  <Avatar className="h - 8 w - 8">;
                    {application.talent_profile?.profile_picture_url ? (
                      <img;
                        src={application.talent_profile.profile_picture_url}
alt={"
                          application.talent_profile.full_name || "Candidate";
                        }
                      />) : ("
                      <User className="h - 4 w - 4" />)}
                  </Avatar>;
                  <div>;"
                    <h4 className="font - medium text - sm">;"
                      {application.talent_profile?.full_name || "Candidate"}
                    </h4>;"
                    <p className="text - xs text - muted - foreground">;
                      {application.talent_profile?.professional_title ||;"
                      />) : (
</img>)"
                      <User className="h - 4 w - 4" />)}"
</User>
                  </Avatar>;
                  <div>;
<h4 className="font - medium text - sm">;
                      {application.talent_profile?.full_name || "Candidate"}
                    </h4>;
                    <p className="text - xs text - muted - foreground">;
                      {application.talent_profile?.professional_title ||;
                        "Applicant"}
                    </p>;
                  </div>;
                </div>;
                <DropdownMenu>;
<DropdownMenuTrigger as_child>;"
                    <Button variant="ghost" className="h - 8 w - 8 p - 0">;"
                      <MoreVertical className="h - 4 w - 4" />;
                    </Button>;
                  </DropdownMenuTrigger>;"
                  <DropdownMenuContent align="end">;
                    <DropdownMenuItem on_click={() => setShowNotes (!show_notes)}>;"
                      {show_notes ? "Hide notes" : "Add notes"}
                    </DropdownMenuItem>;
                    <DropdownMenuItem on_click={() => setShowHireModal (true)}>;"
                      <BriefcaseIcon className="h - 4 w - 4 mr - 2" /> Hire Candidate;
                    </DropdownMenuItem>;
                    <DropdownMenuItem as_child>;`
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
                          href={application.resume.file_url}"
                          target="_blank";"
                          rel="noopener noreferrer";
                        >;
</a>
                        </a>;
                      </DropdownMenuItem>)}
                  </DropdownMenuContent>;
                </DropdownMenu>;
</div>;
{/* Application Info */}"
              <div className="flex flex - wrap gap - 2 items - center text - xs text - muted - foreground mb - 2">;"
                <div className="flex items - center">;"
                  <Calendar className="h - 3 w - 3 mr - 1" />;
                  {formatDistanceToNow (new Date (application.created_at), {}
                    add_suffix: true,
                  })}
                </div>;
                {is_stalled && ("
                  <div className="flex items - center text - amber - 500">;"
                    <AlertTriangle className="h - 3 w - 3 mr - 1" />;
                    Stalled;
                  </div>)}
              </div>;
              {/* Match Score */}
              {application.match_score !== null &&;
application.match_score !== undefined && ("
                  <div className="mb - 2">;
                    <ScoreBadge application={application} />;
                  </div>)}
              {/* Notes Section */}
{show_notes && ("
                <div className="mt - 2">;
                  <Textarea;"
                    placeholder="Add private notes about this candidate...";"
                    className="text - xs min - h-[60px]";
                    value={notes}
                    on_change={(e) => set_notes (e.target.value)}
                  />;"
                  <div className="flex justify - end mt - 2">;"
                    <Button size="sm" on_click={handleSaveNotes}>;
                      Save Notes;
                    </Button>;
                  </div>;
                </div>)}
{/* Action Buttons */}"
              <div className="flex justify - between mt - 2 gap - 1">;"
                <Button variant="outline" size="sm" className="flex - 1" as_child>;`
                  <Link to={`/messages?talent_id=${application.talent_id}`}>;"
                    <MessageSquare className="h - 3 w - 3 mr - 1" /> Message;
                  </Link>;
                </Button>;"
                <Button variant="outline" size="sm" className="flex - 1" as_child>;
                  {application.resume?.file_url ? (
                    <a;
                      href={application.resume.file_url}"
                      target="_blank";"
                      rel="noopener noreferrer";
                    >;"
                      <FileText className="h - 3 w - 3 mr - 1" /> Resume;
                    </a>) : (
                    <span>;"
                      <FileText className="h - 3 w - 3 mr - 1" /> No Resume;
                    </span>)}
                </Button>;
                <Button;"
                  variant="default";"
                  size="sm";"
                  className="flex - 1";
                  on_click={() => setShowHireModal (true)}
                >;"
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
>;
                  <BriefcaseIcon className="h - 3 w - 3 mr - 1" /> Hire;
                </Button>;
              </div>;
            </CardContent>;
          </Card>)}
      </Draggable>;

      </Draggable>;

      </Draggable>;

      {/* Hire Confirmation Modal */}
      <HireConfirmationModal;
        is_open={showHireModal}
        on_close={() => setShowHireModal (false)}
        application={application}

/>;
    </>;
  );
}
        onConfirm={handleHireConfirmed}

      />;
      </Draggable>;
      </Draggable>;
      <HireConfirmationModal;
        is_open={showHireModal}
        on_close={() => setShowHireModal (false)}
</HireConfirmationModal>
    </>;

  );

  );
}
  );
        on_confirm={handleHireConfirmed}
      />;
    </>);
}
;
      {/* Hire Confirmation Modal */}
      <HireConfirmationModal;
<Button variant="outline" size="sm" className="flex-1" asChild>

                  {application.resume?.file_url ? (
                    <a href={application.resume.file_url} target="_blank" rel="noopener noreferrer">
                      <FileText className="h-3 w-3 mr-1" /> Resume
                    </Link>
                  ) : (
                    <span>
                      <FileText className="h-3 w-3 mr-1" /> No Resume
                    </span>
                  )}
                </Button>
                <Button
                  variant="default"
                  size="sm"
                <Button 
                  variant="default" 
                  size="sm" 
                  className="flex-1"
                  onClick={() => setShowHireModal(true)}
                >
                  <BriefcaseIcon className="h-3 w-3 mr-1" /> Hire
      <HireConfirmationModal;"
<Button variant="outline" size="sm" className="flex-1" asChild>"
</HireConfirmationModal>"
                    <a href={application.resume.file_url} target="_blank" rel="noopener noreferrer">"
</a>"
                      <FileText className="h-3 w-3 mr-1" /> Resume;"
</FileText>
                    </Link>
                    <span>
</span>"
                      <FileText className="h-3 w-3 mr-1" /> No Resume;"
</FileText>

                    </span>
                </Button>

                <Button;"
                  variant="default"""
                  size="sm""
                <Button;"
                  variant="default"""
                  size="sm"""
                  className="flex-1""
                  onClick={() => setShowHireModal(true)}
</Button>"
                  <BriefcaseIcon className="h-3 w-3 mr-1" /> Hire;"
</BriefcaseIcon>

                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </Draggable>
      </Draggable>;
      {/* Hire Confirmation Modal */}
      <HireConfirmationModal
        isOpen={showHireModal}
        onClose={() => setShowHireModal(false)}
        application={application}
        onConfirm={handleHireConfirmed}
/>
      </Draggable>

      </Draggable>;
      <HireConfirmationModal;
        isOpen={showHireModal}
        onClose={() => setShowHireModal(false)}
</HireConfirmationModal>
    </>

      />
    </>
  );
}

'"`
    // Hiring process completed via the modal;
    toast({"
      title: "Hiring process initiated",""
      description: "Offer has been sent to the talent."")
    })

  return (
    <>
      <Draggable draggableId={application.id} index={index}>

          <Card;"
            className="mb-2 p-0 shadow-sm border"""
import { useState } from "react",;""
import { Draggable } from "react-beautiful-dnd",;""
import { formatDistanceToNow } from "date-fns",;""
import { Link } from "react-router-dom",;""
import { JobApplication } from "@/types/jobs",;""
import { Card, CardContent } from "@/components/ui/card",;""
import { Avatar } from "@/components/ui/avatar",;""
import { Button } from "@/components/ui/button",;""
import { Textarea } from "@/components/ui/textarea",;"
} from "lucide-react",;"
  DropdownMenuItem,;"
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",;""
import { ScoreBadge } from "@/components/jobs/applications/ScoreBadge",;""
import { toast } from "@/hooks/use-toast",;""
import { HireConfirmationModal } from "./HireConfirmationModal",;"
interface CandidateCardProps {;
  application: JobApplication,;
;)
export function CandidateCard({ application, index }: CandidateCardProps) {;
  const [showNotes, setShowNotes] = useState(false),;"
  const [notes, setNotes] = useState(application.notes || ""),;"
  const [showHireModal, setShowHireModal] = useState(false),;

  // Check if application is stalled (no activity for 7 days);
  const isStalled =;
    application && application.updated_at &&;
    new Date(application && application.updated_at).getTime() <;
      Date && Date.now() - 7 * 24 * 60 * 60 * 1000;

  const handleSaveNotes = () => {;

    <>;
      <Draggable draggableId={application && application.id} index={index}>;

            className="mb-2 p-0 shadow-sm border";"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <CardContent className="p-3">"
              <div className="flex justify-between items-start mb-2">;"
</div>"
                <div className="flex items-center gap-2">;"
                  <Avatar className="h-8 w-8">;"

                      <img;
                        src={application && application.talent_profile.profile_picture_url}
                        alt={
                      />;
</img>"
                      <User className="h-4 w-4" />;"

                  <div>
                    <h4 className="font-medium text-sm">"
</h4>
                    </h4>"
                    <p className="text-xs text-muted-foreground">"
</p>"

                      <img ;
                        src={application.talent_profile.profile_picture_url} ;"
                        alt={application.talent_profile.full_name || "Candidate"} ;"

                    </p>
                  </div>
                <DropdownMenu>

                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">"
                      <MoreVertical className="h-4 w-4" />"

                  <DropdownMenuContent align="end">"

                    <DropdownMenuItem onClick={() => setShowNotes(!showNotes)}>

                  ;
                  <div>;
                    <h4 className="font-medium text-sm">;"
                    </h4>;"
                    <p className="text-xs text-muted-foreground">;"
                    </p>;
                  </div>;
                <DropdownMenu>;

                  <DropdownMenuTrigger asChild>;
                    <Button variant="ghost" className="h-8 w-8 p-0">;"
                      <MoreVertical className="h-4 w-4" />;"

                  ;"
                  <DropdownMenuContent align="end">;"

                    <DropdownMenuItem onClick={() => setShowNotes(!showNotes)}>;

                    <DropdownMenuItem onClick={() => setShowHireModal(true)}>;
                      <BriefcaseIcon className="h-4 w-4 mr-2" /> Hire Candidate;"

                    <DropdownMenuItem asChild>;

                      <Link to={`/messages?talentId=${application && application.talent_id}`}>;

                        <a;
                          href={application && application.resume.file_url}"
                          target="_blank"""
                          rel="noopener noreferrer">;"
</a>
                        </a>;
              </div>;"
              <div className="flex flex-wrap gap-2 items-center text-xs text-muted-foreground mb-2">;"
                <div className="flex items-center">;"
                  <Calendar className="h-3 w-3 mr-1" />;"

                  <div className="flex items-center text-amber-500">;"
                    <AlertTriangle className="h-3 w-3 mr-1" />;"

                <div className="mb-2">;"
                  <ScoreBadge application={application} />;

                <div className="mt-2">;"
                  <Textarea;"
                    placeholder="Add private notes about this candidate..."""
                    className="text-xs min-h-[60px]""
                    value={notes}
                    onChange={(e) => setNotes(e && e.target.value)}
                  <div className="flex justify-end mt-2">;"
                    <Button size="sm" onClick={handleSaveNotes}>;"

              <div className="flex justify-between mt-2 gap-1">"
                <Button variant="outline" size="sm" className="flex-1" asChild>"
                <Button;"
                  variant="outline"""
                  size="sm"""
                  className="flex-1""
                  asChild;

`;
                  <Link to={`/messages?talentId=${application.talent_id}`}>
                    <MessageSquare className="h-3 w-3 mr-1" /> Message;"

              <div className="flex justify-between mt-2 gap-1">;"
                <Button variant="outline" size="sm" className="flex-1" asChild>;"

</a>"
                      <FileText className="h-3 w-3 mr-1" /> Resume;"

                    <span>;
</span>"
                      <FileText className="h-3 w-3 mr-1" /> No Resume;"

                    </span>;
                  variant="default"""
                  size="sm""

                  onClick={() => setShowHireModal(true)}
                  <BriefcaseIcon className="h-3 w-3 mr-1" /> Hire;"

    new Date (application.updated_at).get_time () <;
      Date.now () - 7 * 24 * 60 * 60 * 1000;
  const handleSaveNotes = () =>: any {
  // TODO: Implement
    // Here you would save the notes to the database;"
    // For now, we'll just show a toast;
    toast ({
      description: "Your notes have been saved",")
    });
    setShowNotes (false);
  const handleHireConfirmed = () =>: any {
  // TODO: Implement
    // Hiring process completed via the modal;
    toast ({"
      description: "Offer has been sent to the talent.",")
      <Draggable draggable_id={application.id} index={index}>;

            className="mb - 2 p - 0 shadow - sm border";"
            ref={provided.inner_ref}
            {...provided.draggable_props}
          >;
            <CardContent className="p - 3">;"
              <div className="flex justify - between items - start mb - 2">;"
                <div className="flex items - center gap - 2">;"
                  <Avatar className="h - 8 w - 8">;"

                        src={application.talent_profile.profile_picture_url}
                        alt={"
                          application.talent_profile.full_name || "Candidate";"
                      />) : (
</img>)"
                      <User className="h - 4 w - 4" />)}"

                    <h4 className="font - medium text - sm">;"
                    <p className="text - xs text - muted - foreground">;"

                  <DropdownMenuTrigger as_child>;
                    <Button variant="ghost" className="h - 8 w - 8 p - 0">;"
                      <MoreVertical className="h - 4 w - 4" />;"

                    <DropdownMenuItem on_click={() => setShowNotes (!show_notes)}>;

                    <DropdownMenuItem on_click={() => setShowHireModal (true)}>;
                      <BriefcaseIcon className="h - 4 w - 4 mr - 2" /> Hire Candidate;"

                    <DropdownMenuItem as_child>;
                      <Link to={`/messages?talent_id=${application.talent_id}`}>;

                          href={application.resume.file_url}"
                          target="_blank";""
                          rel="noopener noreferrer";"
                      )}
              <div className="flex flex - wrap gap - 2 items - center text - xs text - muted - foreground mb - 2">;"
                <div className="flex items - center">;"
                  <Calendar className="h - 3 w - 3 mr - 1" />;"

                  <div className="flex items - center text - amber - 500">;"
                    <AlertTriangle className="h - 3 w - 3 mr - 1" />;"

                  </div>)}
                  <div className="mb - 2">;"

                  </div>)}"
                <div className="mt - 2">;"
                    placeholder="Add private notes about this candidate...";""
                    className="text - xs min - h-[60px]";"
                    on_change={(e) => set_notes (e.target.value)}
                  <div className="flex justify - end mt - 2">;"
                    <Button size="sm" on_click={handleSaveNotes}>;"

              <div className="flex justify - between mt - 2 gap - 1">;"
                <Button variant="outline" size="sm" className="flex - 1" as_child>;"
                    <MessageSquare className="h - 3 w - 3 mr - 1" /> Message;"

                      <FileText className="h - 3 w - 3 mr - 1" /> Resume;"

                    </a>) : (
                      <FileText className="h - 3 w - 3 mr - 1" /> No Resume;"
                    </span>)}
                  variant="default";""
                  size="sm";""
                  className="flex - 1";"
                  on_click={() => setShowHireModal (true)}
                  <BriefcaseIcon className="h - 3 w - 3 mr - 1" /> Hire;"

      <HireConfirmationModal;
        is_open={showHireModal}
        on_close={() => setShowHireModal (false)}

    </>;

  );
        on_confirm={handleHireConfirmed}
    </>);
      {/* Hire Confirmation Modal */}
      <HireConfirmationModal;"
                    <a href={application.resume.file_url} target="_blank" rel="noopener noreferrer">"

                    <span>

                    </span>

        isOpen={showHireModal}
        onClose={() => setShowHireModal(false)}

    </>

      />
"`;
pr-12325
"
