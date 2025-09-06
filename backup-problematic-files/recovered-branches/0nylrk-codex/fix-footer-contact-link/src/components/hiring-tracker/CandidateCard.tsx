<<<<<<< HEAD
import {;
  MessageSquare,;
  User,;
  FileText,;
  MoreVertical,;
  Calendar,;
  AlertTriangle,;
  BriefcaseIcon,;
} from "lucide-react";
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
<<<<<<< HEAD
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
  BriefcaseIcon,
} from './lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components / ui / dropdown - menu';
import { ScoreBadge  } from '@/components / jobs / applications / ScoreBadge';
import { toast  } from '@/hooks / use - toast';
import { HireConfirmationModal  } from './HireConfirmationModal';
interface CandidateCardProps {
  application: JobApplication;
  index: number
}
export function CandidateCard(): any ({ application, index }: CandidateCardProps) {;
  const [showNotes, setShowNotes] = useState(false);
  const [notes, setNotes] = useState(application && application.notes || "");
  const [showHireModal, setShowHireModal] = useState(false);
  // Check if application is stalled (no activity for 7 days);
  const isStalled =;
    application && application.updated_at &&;
    new Date(application && application.updated_at).getTime() <;
      Date && Date.now() - 7 * 24 * 60 * 60 * 1000;
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  const handleSaveNotes = () => {;
    // Here you would save the notes to the database;
    // For now, we'll just show a toast;
    toast({;
<<<<<<< HEAD
      title: "Notes saved",;
      description: "Your notes have been saved",;
    });
    setShowNotes(false);
  };
  const handleHireConfirmed = () => {;
    // Hiring process completed via the modal;
    toast({;
      title: "Hiring process initiated",;
      description: "Offer has been sent to the talent.",;
    });
  }
  return (
    <>;
      <Draggable draggableId={application && application.id} index={index}>;
        {(provided) => (;
          <Card
            className="mb-2 p-0 shadow-sm border"
            ref={provided && provided.innerRef}
            {...provided && provided.draggableProps}
            {...provided && provided.dragHandleProps}>;
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            <CardContent className="p-3">;
              {/* Candidate Header */}
              <div className="flex justify-between items-start mb-2">;
                <div className="flex items-center gap-2">;
                  <Avatar className="h-8 w-8">;
<<<<<<< HEAD
                    {application && application.talent_profile?.profile_picture_url ? (;
                      <img
                        src={application && application.talent_profile.profile_picture_url}
                        alt={
                          application && application.talent_profile.full_name || "Candidate"
                        }
                      />;
                    ) : (;
=======
                    {application.talent_profile?.profile_picture_url ? (;
                      <img ;
                        src={application.talent_profile.profile_picture_url} ;
                        alt={application.talent_profile.full_name || "Candidate"} ;
                      />;
                    ) :(;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                      <User className="h-4 w-4" />;
                    )}
                  </Avatar>;
                  <div>;
                    <h4 className="font-medium text-sm">;
<<<<<<< HEAD
                      {application && application.talent_profile?.full_name || "Candidate"}
                    </h4>;
                    <p className="text-xs text-muted-foreground">;
                      {application && application.talent_profile?.professional_title ||;
                        "Applicant"}
                    </p>;
                  </div>;
                </div>;
=======
                      {application.talent_profile?.full_name || "Candidate"}
                    </h4>;
                    <p className="text-xs text-muted-foreground">;
                      {application.talent_profile?.professional_title || "Applicant"}
                    </p>;
                  </div>;
                </div>;
                ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
                      {showNotes ? "Hide notes" :"Add notes"}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                          View Resume;
                        </a>;
                      </DropdownMenuItem>;
                    )}
                  </DropdownMenuContent>;
                </DropdownMenu>;
              </div>;
<<<<<<< HEAD
=======
              ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              {/* Application Info */}
              <div className="flex flex-wrap gap-2 items-center text-xs text-muted-foreground mb-2">;
                <div className="flex items-center">;
                  <Calendar className="h-3 w-3 mr-1" />;
<<<<<<< HEAD
                  {formatDistanceToNow(new Date(application && application.created_at), {;
                    addSuffix: true,;
                  })}
                </div>;
=======
                  {formatDistanceToNow(new Date(application.created_at), { addSuffix:true })}
                </div>;
                ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                {isStalled && (;
                  <div className="flex items-center text-amber-500">;
                    <AlertTriangle className="h-3 w-3 mr-1" />;
                    Stalled;
                  </div>;
                )}
              </div>;
<<<<<<< HEAD
              {/* Match Score */}
              {application && application.match_score !== null &&;
                application && application.match_score !== undefined && (;
                  <div className="mb-2">;
                    <ScoreBadge application={application} />;
                  </div>;
                )}
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    <span>;
                      <FileText className="h-3 w-3 mr-1" /> No Resume;
                    </span>;
                  )}
                </Button>;
<<<<<<< HEAD
                <Button
                  variant="default"
                  size="sm"
                  className="flex-1"
=======
                ;
                <Button ;
                  variant="default" ;
                  size="sm" ;
                  className="flex-1";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  onClick={() => setShowHireModal(true)}
                >;
                  <BriefcaseIcon className="h-3 w-3 mr-1" /> Hire;
                </Button>;
              </div>;
            </CardContent>;
          </Card>;
        )}
      </Draggable>;
<<<<<<< HEAD
export /**
 * CandidateCard - Function description
 */
function CandidateCard() {
  const [show_notes, setShowNotes] = useState (false);
  const [notes, set_notes] = useState (application.notes || "");
  const [showHireModal, setShowHireModal] = useState (false);
;
  // Check if application is stalled (no activity for 7 days);
  const is_stalled =;
    application.updated_at &&;
    new Date (application.updated_at).get_time () <;
      Date.now () - 7 * 24 * 60 * 60 * 1000;
;
  const handleSaveNotes = () =>: any {
    // Here you would save the notes to the database;
    // For now, we'll just show a toast;
    toast ({
      title: "Notes saved",
      description: "Your notes have been saved",
    });
    setShowNotes (false);
  }
;
  const handleHireConfirmed = () =>: any {
    // Hiring process completed via the modal;
    toast ({
      title: "Hiring process initiated",
      description: "Offer has been sent to the talent.",
    });
  }
;
  return (
    <>;
      <Draggable draggable_id={application.id} index={index}>;
        {(provided) => (
          <Card;
            className="mb - 2 p - 0 shadow - sm border";
            ref={provided.inner_ref}
            {...provided.draggable_props}
            {...provided.dragHandleProps}
          >;
            <CardContent className="p - 3">;
              {/* Candidate Header */}
              <div className="flex justify - between items - start mb - 2">;
                <div className="flex items - center gap - 2">;
                  <Avatar className="h - 8 w - 8">;
                    {application.talent_profile?.profile_picture_url ? (
                      <img;
                        src={application.talent_profile.profile_picture_url}
                        alt={
                          application.talent_profile.full_name || "Candidate";
                        }
                      />) : (
                      <User className="h - 4 w - 4" />)}
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
                  <DropdownMenuTrigger as_child>;
                    <Button variant="ghost" className="h - 8 w - 8 p - 0">;
                      <MoreVertical className="h - 4 w - 4" />;
                    </Button>;
                  </DropdownMenuTrigger>;
                  <DropdownMenuContent align="end">;
                    <DropdownMenuItem on_click={() => setShowNotes (!show_notes)}>;
                      {show_notes ? "Hide notes" : "Add notes"}
                    </DropdownMenuItem>;
                    <DropdownMenuItem on_click={() => setShowHireModal (true)}>;
                      <BriefcaseIcon className="h - 4 w - 4 mr - 2" /> Hire Candidate;
                    </DropdownMenuItem>;
                    <DropdownMenuItem as_child>;
                      <Link to={`/messages?talent_id=${application.talent_id}`}>;
                        Message;
                      </Link>;
                    </DropdownMenuItem>;
                    {application.resume?.file_url && (
                      <DropdownMenuItem as_child>;
                        <a;
                          href={application.resume.file_url}
                          target="_blank";
                          rel="noopener noreferrer";
                        >;
                          View Resume;
                        </a>;
                      </DropdownMenuItem>)}
                  </DropdownMenuContent>;
                </DropdownMenu>;
              </div>;
              {/* Application Info */}
              <div className="flex flex - wrap gap - 2 items - center text - xs text - muted - foreground mb - 2">;
                <div className="flex items - center">;
                  <Calendar className="h - 3 w - 3 mr - 1" />;
                  {formatDistanceToNow (new Date (application.created_at), {
                    add_suffix: true,
                  })}
                </div>;
                {is_stalled && (
                  <div className="flex items - center text - amber - 500">;
                    <AlertTriangle className="h - 3 w - 3 mr - 1" />;
                    Stalled;
                  </div>)}
              </div>;
              {/* Match Score */}
              {application.match_score !== null &&;
                application.match_score !== undefined && (
                  <div className="mb - 2">;
                    <ScoreBadge application={application} />;
                  </div>)}
              {/* Notes Section */}
              {show_notes && (
                <div className="mt - 2">;
                  <Textarea;
                    placeholder="Add private notes about this candidate...";
                    className="text - xs min - h-[60px]";
                    value={notes}
                    on_change={(e) => set_notes (e.target.value)}
                  />;
                  <div className="flex justify - end mt - 2">;
                    <Button size="sm" on_click={handleSaveNotes}>;
                      Save Notes;
                    </Button>;
                  </div>;
                </div>)}
              {/* Action Buttons */}
              <div className="flex justify - between mt - 2 gap - 1">;
                <Button variant="outline" size="sm" className="flex - 1" as_child>;
                  <Link to={`/messages?talent_id=${application.talent_id}`}>;
                    <MessageSquare className="h - 3 w - 3 mr - 1" /> Message;
                  </Link>;
                </Button>;
                <Button variant="outline" size="sm" className="flex - 1" as_child>;
                  {application.resume?.file_url ? (
                    <a;
                      href={application.resume.file_url}
                      target="_blank";
                      rel="noopener noreferrer";
                    >;
                      <FileText className="h - 3 w - 3 mr - 1" /> Resume;
                    </a>) : (
                    <span>;
                      <FileText className="h - 3 w - 3 mr - 1" /> No Resume;
                    </span>)}
                </Button>;
                <Button;
                  variant="default";
                  size="sm";
                  className="flex - 1";
                  on_click={() => setShowHireModal (true)}
                >;
                  <BriefcaseIcon className="h - 3 w - 3 mr - 1" /> Hire;
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
        on_confirm={handleHireConfirmed}
      />;
    </>);
}
=======
      ;
      {/* Hire Confirmation Modal */}
      <HireConfirmationModal;
        isOpen={showHireModal}
        onClose={() => setShowHireModal(false)}
        application={application}
        onConfirm={handleHireConfirmed}
      />;
    </>;
  ),;}
 import {
  MessageSquare;
User;
FileText;
MoreVertical;
Calendar;
AlertTriangle;
BriefcaseIcon import {
  DropdownMenu;
DropdownMenuContent;
DropdownMenuItem;
interface CandidateCardProps {
  application: JobApplication;
index: number 
}export function CandidateCard ({
  application, index 
}: CandidateCardProps) {
  const handleSaveNotes = () => {
  //Here you would save the notes to the database //For now, we'll just show a toast toast ({
  setShowNotes (false);
};
  //Hiring process completed via the modal toast ({
  
};
  application.id 
}index= {
  index 
}> {
  (provided) => (<Card className="mb-2 p-0 shadow-sm border" ref= {
  provided.innerRef 
}{
  ...provided.draggableProps 
}{
  ...provided.dragHandleProps 
}> <CardContent className="p-3"> {
  /* Candidate Header */ 
}<div className="flex justify-between items-start mb-2"> <div className="flex items-center gap-2"> <Avatar className="h-8 w-8"> {
  application.talent profile?.profile picture url ? (<img src= {
  application.talent profile.profile picture url 
}alt= {
  application.talent profile.full name || "Candidate" 
}/>) : (<User className="h-4 w-4" />) 
}</Avatar> <div> </p> </div> </div> <DropdownMenu> <DropdownMenuTrigger asChild> <Button variant="ghost" className="h-8 w-8 p-0"> <MoreVertical className="h-4 w-4" /> </Button> </DropdownMenuTrigger> </DropdownMenuItem> <DropdownMenuItem onClick= {
  () => setShowHireModal (true) 
}> <BriefcaseIcon className="h-4 w-4 mr-2" /> Hire Candidate </DropdownMenuItem> <DropdownMenuItem asChild> <Link to= {
  `/messages?talentId=$ {
  application.talent id 
}` 
}> Message </Link> </DropdownMenuItem> {
  application.resume?.file url && (<DropdownMenuItem asChild> <a href= {
  application.resume.file url 
}target="blank" rel="noopener noreferrer"> View Resume </Link> </DropdownMenuItem>) 
}</DropdownMenuContent> </DropdownMenu> </div> {
  /* Application Info */ 
}<div className="flex flex-wrap gap-2 items-center text-xs text-muted-foreground mb-2"> <div className="flex items-center"> <Calendar className="h-3 w-3 mr-1" /> {
  formatDistanceToNow (new Date (application.created at), {
  addSuffix: true 
}) 
}</div> {
  isStalled && (<div className="flex items-center text-amber-500"> <AlertTriangle className="h-3 w-3 mr-1" /> Stalled </div>) 
}</div> {
  /* Match Score */ 
}{
  application.match score !== null && application.match score !== undefined && (<div className="mb-2"> <ScoreBadge application= {
  application 
}/> </div>) 
}<Textarea placeholder="Add private notes about this candidate..." className="text-xs min-h-[60px]" value= {
  notes 
}onChange= {
  (e) => setNotes (e.target.value) 
}/> </div> </div>) 
}<Button variant="outline" size="sm" className="flex-1" asChild > </Link> </Button> <Button variant="outline" size="sm" className="flex-1" asChild > <FileText className="h-3 w-3 mr-1" /> Resume </Link>) : (<span> <FileText className="h-3 w-3 mr-1" /> No Resume </span>) 
}</Button> <Button variant="default" size="sm" className="flex-1" onClick= {
  () => setShowHireModal (true) 
}> <BriefcaseIcon className="h-3 w-3 mr-1" /> Hire </Button> </div> </CardContent> </Card>) 
}</Draggable> {
  /* Hire Confirmation Modal */ 
}<HireConfirmationModal isOpen= {
  showHireModal 
}onClose= {
  () => setShowHireModal (false) 
}application= {
  application 
}onConfirm= {
  handleHireConfirmed 
}/> </>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
