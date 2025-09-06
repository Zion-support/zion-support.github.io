<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { useState } from "react",
import { Draggable } from "react-beautiful-dnd",
import { formatDistanceToNow } from "date-fns",
import { Link } from "react-router-dom",
import { JobApplication } from "@/types/jobs",
import { Card, CardContent } from "@/components/ui/card",
<<<<<<< HEAD
<<<<<<< HEAD
=======

import { useState } from "react","
import { Draggable } from "react-beautiful-dnd","
import { formatDistanceToNow } from "date-fns","
import { Link } from "react-router-dom","
import { JobApplication } from "@/types/jobs","
import { Card, CardContent } from "@/components/ui/card","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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

<<<<<<< HEAD
import { toast } from "@/hooks/use-toast";
import { HireConfirmationModal } from "./HireConfirmationModal";
interface CandidateCardProps {
  application: JobApplication;
import { Button } from "@/components/ui/button",
import { Textarea } from "@/components/ui/textarea",
import { 
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
DropdownMenuTrigger,;
=======
  DropdownMenuTrigger,
>>>>>>> main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
} from "@/components/ui/dropdown-menu";
=======
"
} from "@/components/ui/dropdown-menu";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
import {}
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
"
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu","
import { ScoreBadge } from "@/components/jobs/applications/ScoreBadge","
import { toast } from "@/hooks/use-toast","
import { HireConfirmationModal } from "./HireConfirmationModal",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface CandidateCardProps {
=======

interface CandidateCardProps {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  application: JobApplication;
  index: number;
}
<<<<<<< HEAD
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
<<<<<<< HEAD
<<<<<<< HEAD




=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import { Avatar } from "@/components/ui/avatar",  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",
import { ScoreBadge } from "@/components/jobs/applications/ScoreBadge",
import { toast } from "@/hooks/use-toast",
import { HireConfirmationModal } from "./HireConfirmationModal",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import { Avatar } from "@/components/ui/avatar",  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",
import { ScoreBadge } from "@/components/jobs/applications/ScoreBadge",
import { toast } from "@/hooks/use-toast",
import { HireConfirmationModal } from "./HireConfirmationModal",
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  

  const handleSaveNotes = () => {
    // Here you would save the notes to the database
    // For now, we'll just show a toast
    toast({
=======


  

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
      title: "Notes saved",
=======
  const handleSaveNotes = () => {}
    // Here you would save the notes to the database'
    // For now, we'll just show a toast;
    toast({}
"
      title: "Notes saved","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  return (
    <>
      <Draggable draggableId={application.id} index={index}>
        {(provided) => (
          <Card "
            className="mb-2 p-0 shadow-sm border"
<<<<<<< HEAD
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
=======
"
import { useState } from "react",;"
import { Draggable } from "react-beautiful-dnd",;"
import { formatDistanceToNow } from "date-fns",;"
import { Link } from "react-router-dom",;"
import { JobApplication } from "@/types/jobs",;"
import { Card, CardContent } from "@/components/ui/card",;"
import { Avatar } from "@/components/ui/avatar",;"
import { Button } from "@/components/ui/button",;"
import { Textarea } from "@/components/ui/textarea",;
import {;
  MessageSquare,;
  User,;
  FileText,;
  MoreVertical,;
  Calendar,;
  AlertTriangle,;
  BriefcaseIcon;"
} from "lucide-react",;
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;"
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",;"
import { ScoreBadge } from "@/components/jobs/applications/ScoreBadge",;"
import { toast } from "@/hooks/use-toast",;"
import { HireConfirmationModal } from "./HireConfirmationModal",;
interface CandidateCardProps {;
  application: JobApplication,;
  index: number;
}
;
export function CandidateCard() { return null; }
    });
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  }

  return (
    <>;
      <Draggable draggableId={application && application.id} index={index}>;
<<<<<<< HEAD
<<<<<<< HEAD
        {(provided) => (;
<<<<<<< HEAD
<<<<<<< HEAD

          <Card;
            className="mb-2 p-0 shadow-sm border";
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >"
            <CardContent className="p-3">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              {/* Candidate Header */}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              <div className="flex justify-between items-start mb-2">;
                <div className="flex items-center gap-2">;
=======
        {(provided) => (;                <div className="flex items-center gap-2">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        {(provided) => (;                <div className="flex items-center gap-2">;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  <Avatar className="h-8 w-8">;
                    {application && application.talent_profile?.profile_picture_url ? (;
                      <img
                        src={application && application.talent_profile.profile_picture_url}
                        alt={
                        }
                      />;
<<<<<<< HEAD
<<<<<<< HEAD
                    ) : (;
<<<<<<< HEAD
=======
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
<div className="flex justify-between items-start mb-2">
              {/* Candidate Header */}
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    {application.talent_profile?.profile_picture_url ? (
                      <img
                        src={application.talent_profile.profile_picture_url}
                        alt={
                          application.talent_profile.full_name |"Candidate"
                        }
                      />
                    ) : (
                      <User className="h-4 w-4" />
              <div className="flex justify-between items-start mb-2">;
                <div className="flex items-center gap-2">;
                  <Avatar className="h-8 w-8">;
                    {application.talent_profile?.profile_picture_url ? (;
=======
"
              <div className="flex justify-between items-start mb-2">;"
                <div className="flex items-center gap-2">;"
                  <Avatar className="h-8 w-8">;
                    {application && application.talent_profile?.profile_picture_url ? (;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                      <img;
                        src={application && application.talent_profile.profile_picture_url}
                        alt={}
                        }
                      />;
                    ) : (;
<<<<<<< HEAD
<<<<<<< HEAD
                      <User className="h-4 w-4" />;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                      <User className="h-4 w-4" />;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    )}
                  </Avatar>
                  <div>"
                    <h4 className="font-medium text-sm">"
                      {application.talent_profile?.full_name |"Candidate"}
                    </h4>"
                    <p className="text-xs text-muted-foreground">

<<<<<<< HEAD


                    )}
<<<<<<< HEAD


                      {application.talent_profile?.professional_title || "Applicant"}
                    </p>
                  </div>
                </div>


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                      {application.talent_profile?.professional_title |
=======
                    ) : (;                      {application.talent_profile?.professional_title |
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                    ) : (;                      {application.talent_profile?.professional_title |
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                      {application.talent_profile?.professional_title |"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                        "Applicant"}
                    </p>
                  </div>
                </div>"
                      {application.talent_profile?.professional_title || "Applicant"}
                    </p>
                  </div>
                </div>
<<<<<<< HEAD
                
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                <DropdownMenu>
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
=======

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>"
                    <Button variant="ghost" className="h-8 w-8 p-0">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>"
                  <DropdownMenuContent align="end">
<<<<<<< HEAD
<<<<<<< HEAD
                    <DropdownMenuItem onClick={() => setShowNotes(!showNotes)}>
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
                    <DropdownMenuItem onClick={() => setShowNotes(!showNotes)}>                      {showNotes ? "Hide notes" :"Add notes"}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                    <DropdownMenuItem onClick={() => setShowNotes(!showNotes)}>                      {showNotes ? "Hide notes" :"Add notes"}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                      {showNotes ? "Hide notes" : "Add notes"}
=======



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

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    </DropdownMenuItem>;
                    <DropdownMenuItem onClick={() => setShowHireModal(true)}>;"
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
                          rel="noopener noreferrer">;                          View Resume;
=======



                          View Resume;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                        </a>;
                      </DropdownMenuItem>;
                    )}

                  </DropdownMenuContent>;
                </DropdownMenu>;
              </div>;
<<<<<<< HEAD
=======




              {/* Application Info */}"
              <div className="flex flex-wrap gap-2 items-center text-xs text-muted-foreground mb-2">;"
                <div className="flex items-center">;"
                  <Calendar className="h-3 w-3 mr-1" />;

                  {formatDistanceToNow(new Date(application && application.created_at), {;
                    addSuffix: true,;
                  })}
                </div>;




                {isStalled && (;"
                  <div className="flex items-center text-amber-500">;"
                    <AlertTriangle className="h-3 w-3 mr-1" />;
                    Stalled;
                  </div>;
                )}
              </div>;


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              {/* Match Score */}

              {application.match_score !== null && application.match_score !== undefined && (;"
                <div className="mb-2">;
                  <ScoreBadge application={application} />;
                </div>;
              )}
;

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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

<<<<<<< HEAD
              {/* Action Buttons */}

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
              {/* Action Buttons */}

;
              {/* Action Buttons */}
              <div className="flex justify-between mt-2 gap-1">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  asChild
                >



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

<<<<<<< HEAD
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
                          View Resume;
                        </a>;
                      </DropdownMenuItem>;
                    )}





=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              {/* Match Score */}
              {application.match_score !== null && application.match_score !== undefined && (;
                <div className="mb-2">;
                  <ScoreBadge application={application} />;
                </div>;
              )}
;
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              {/* Action Buttons */}
              <div className="flex justify-between mt-2 gap-1">
                <Button variant="outline" size="sm" className="flex-1" asChild>
                <Button 
                  variant="outline" 
                  size="sm" 
=======





              {/* Action Buttons */}"
              <div className="flex justify-between mt-2 gap-1">"
                <Button variant="outline" size="sm" className="flex-1" asChild>

;
              {/* Action Buttons */}"
              <div className="flex justify-between mt-2 gap-1">
                <Button "
                  variant="outline" "
                  size="sm" "
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  className="flex-1"
                  asChild;
                >
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  <Link to={`/messages?talentId=${application.talent_id}`}>
                    <MessageSquare className="h-3 w-3 mr-1" /> Message
=======



                  <Link to={`/messages?talentId=${application.talent_id}`}>"
                    <MessageSquare className="h-3 w-3 mr-1" /> Message;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                  {application.resume?.file_url ? (
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


                  {application.resume?.file_url ? (
<<<<<<< HEAD
=======
=======
              {/* Action Buttons */}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              <div className="flex justify-between mt-2 gap-1">;
                <Button variant="outline" size="sm" className="flex-1" asChild>;
                  <Link to={`/messages?talentId=${application && application.talent_id}`}>;
=======



                  {application.resume?.file_url ? (


"
              <div className="flex justify-between mt-2 gap-1">;"
                <Button variant="outline" size="sm" className="flex-1" asChild>;`
                  <Link to={`/messages?talentId=${application && application.talent_id}`}>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    <MessageSquare className="h-3 w-3 mr-1" /> Message;
                  </Link>;
                </Button>;
"
                <Button variant="outline" size="sm" className="flex-1" asChild>;
                  {application && application.resume?.file_url ? (;
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    <a
                      href={application && application.resume.file_url}
                      target="_blank"
                      rel="noopener noreferrer">;
                      <FileText className="h-3 w-3 mr-1" /> Resume;
                    </a>;
                  ) : (;
                    <span>;
=======
                    <a;
                      href={application && application.resume.file_url}"
                      target="_blank""
                      rel="noopener noreferrer">;"
                      <FileText className="h-3 w-3 mr-1" /> Resume;
                    </a>;
                  ) : (;



                    <span>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                      <FileText className="h-3 w-3 mr-1" /> No Resume;
                    </span>;
                  )}

<<<<<<< HEAD
                </Button>;

                <Button
                  variant="default"
<<<<<<< HEAD
<<<<<<< HEAD
                  size="sm"
=======
=======
                </Button>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                </Button>


                <Button"
                  variant="default""
                  size="sm"

                
<<<<<<< HEAD
                <Button 
                  variant="default" 
                  size="sm" 
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                  className="flex-1"
=======
                  className="flex-1"
<<<<<<< HEAD
<<<<<<< HEAD
=======
                ;
                <Button ;
                  variant="default" ;
                  size="sm" ;
                  className="flex-1";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
                <Button "
                  variant="default" "
                  size="sm" "
                  className="flex-1"



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  onClick={() => setShowHireModal(true)}
                >;"
                  <BriefcaseIcon className="h-3 w-3 mr-1" /> Hire;
                </Button>;
              </div>;
            </CardContent>;
          </Card>;
        )}
<<<<<<< HEAD
<<<<<<< HEAD
      </Draggable>
      </Draggable>;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

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
    new Date (application.updated_at).get_time () <;
      Date.now () - 7 * 24 * 60 * 60 * 1000;
;
  const handleSaveNotes = () =>: any {}
    // Here you would save the notes to the database;'
    // For now, we'll just show a toast;
    toast ({"
      title: "Notes saved","
      description: "Your notes have been saved",
    });
    setShowNotes (false);
  }
;
  const handleHireConfirmed = () =>: any {}
    // Hiring process completed via the modal;
    toast ({"
      title: "Hiring process initiated","
      description: "Offer has been sent to the talent.",
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
                      <Link to={`/messages?talent_id=${application.talent_id}`}>;
                        Message;
                      </Link>;
                    </DropdownMenuItem>;
                    {application.resume?.file_url && (
                      <DropdownMenuItem as_child>;
                        <a;
                          href={application.resume.file_url}"
                          target="_blank";"
                          rel="noopener noreferrer";
                        >;
                          View Resume;
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
                  <BriefcaseIcon className="h - 3 w - 3 mr - 1" /> Hire;
                </Button>;
              </div>;
            </CardContent>;
          </Card>)}
      </Draggable>;

<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      </Draggable>;


      </Draggable>;



      {/* Hire Confirmation Modal */}
      <HireConfirmationModal;
        is_open={showHireModal}
        on_close={() => setShowHireModal (false)}
        application={application}

      />;
    </>;
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  );
}
=======


  );

}


  );

        on_confirm={handleHireConfirmed}
=======
                  size="sm"                </Button>        on_confirm={handleHireConfirmed}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                  size="sm"                </Button>        on_confirm={handleHireConfirmed}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      />;
    </>);
}
<<<<<<< HEAD
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
    </>

      />
    </>
      />;
    </>;
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
