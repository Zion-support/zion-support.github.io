
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { toast } from "@/hooks/use-toast";
import { HireConfirmationModal } from "./HireConfirmationModal";
interface CandidateCardProps {
  application: JobApplication;
import { Button } from "@/components/ui/button",
import { Textarea } from "@/components/ui/textarea",
import { 
<<<<<<< HEAD
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
DropdownMenuTrigger,;
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface CandidateCardProps {
=======

interface CandidateCardProps {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import { Avatar } from "@/components/ui/avatar",  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",
import { ScoreBadge } from "@/components/jobs/applications/ScoreBadge",
import { toast } from "@/hooks/use-toast",
import { HireConfirmationModal } from "./HireConfirmationModal",
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",
import { ScoreBadge } from "@/components/jobs/applications/ScoreBadge",
import { toast } from "@/hooks/use-toast",
import { HireConfirmationModal } from "./HireConfirmationModal",
interface CandidateCardProps {
  application: JobApplication;
  index: number
}

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  const handleSaveNotes = () => {
    // Here you would save the notes to the database
    // For now, we'll just show a toast
    toast({
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

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

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
=======
      title: "Hiring process initiated",;
      description: "Offer has been sent to the talent.",;
application: JobApplication;
  index: number
}
    });
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  }

  return (
    <>;
      <Draggable draggableId={application && application.id} index={index}>;
<<<<<<< HEAD
        {(provided) => (;
<<<<<<< HEAD
<<<<<<< HEAD

          <Card;
            className="mb-2 p-0 shadow-sm border";
<<<<<<< HEAD
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
              {/* Candidate Header */}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              <div className="flex justify-between items-start mb-2">;
                <div className="flex items-center gap-2">;
=======
        {(provided) => (;                <div className="flex items-center gap-2">;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
                    ) : (;
<<<<<<< HEAD
                      <img;
                        src={application && application.talent_profile.profile_picture_url}
                        alt={}
                        }
                      />;
                    ) : (;
<<<<<<< HEAD
                      <User className="h-4 w-4" />;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                      <User className="h-4 w-4" />;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                      {application.talent_profile?.professional_title |
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                <DropdownMenu>
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                <DropdownMenu>
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
                    <DropdownMenuItem onClick={() => setShowNotes(!showNotes)}>
<<<<<<< HEAD
<<<<<<< HEAD
                  </Avatar>;
                  <div>;"
                    <h4 className="font-medium text-sm">;"
                      {application && application.talent_profile?.full_name || "Candidate"}
                    </h4>;"
                    <p className="text-xs text-muted-foreground">;
                      {application && application.talent_profile?.professional_title ||;"
=======
                    <DropdownMenuItem onClick={() => setShowNotes(!showNotes)}>
                  </Avatar>;
                  <div>;
                    <h4 className="font-medium text-sm">;
                      {application && application.talent_profile?.full_name || "Candidate"}
                    </h4>;
                    <p className="text-xs text-muted-foreground">;
                      {application && application.talent_profile?.professional_title ||;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                        "Applicant"}
                    </p>;
                  </div>;
                </div>;

<<<<<<< HEAD
<<<<<<< HEAD
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

<<<<<<< HEAD
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

<<<<<<< HEAD
                  </DropdownMenuContent>;
                </DropdownMenu>;
              </div>;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              {/* Action Buttons */}

{/* Action Buttons */}

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              {/* Action Buttons */}
              <div className="flex justify-between mt-2 gap-1">
                <Button variant="outline" size="sm" className="flex-1" asChild>
;
              {/* Action Buttons */}
              <div className="flex justify-between mt-2 gap-1">
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                  {application.resume?.file_url ? (

                  {application.resume?.file_url ? (
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
<<<<<<< HEAD
                  size="sm"
                </Button>

                <Button"
                  variant="default""
                  size="sm"

<Button 
                  variant="default" 
                  size="sm" 
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                  className="flex-1"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
                <Button "
                  variant="default" "
                  size="sm" "
                  className="flex-1"

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  onClick={() => setShowHireModal(true)}
                >;"
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  <BriefcaseIcon className="h-3 w-3 mr-1" /> Hire;
                </Button>;
              </div>;
            </CardContent>;
          </Card>;
        )}
<<<<<<< HEAD
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
=======
  // TODO: Implement
}
    // Here you would save the notes to the database;"
    // For now, we'll just show a toast;'
    toast ({'
      title: "Notes saved",""
      description: "Your notes have been saved",")
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    });
    setShowNotes (false);
  }
;
const handleHireConfirmed = () =>: any {}
    // Hiring process completed via the modal;
    toast ({"
      title: "Hiring process initiated","
      description: "Offer has been sent to the talent.",
=======
    toast ({"
      title: "Hiring process initiated",""
      description: "Offer has been sent to the talent.",")
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                      <Link to={`/messages?talent_id=${application.talent_id}`}>;
</Link>
                      </Link>;
                    </DropdownMenuItem>;
                      <DropdownMenuItem as_child>;
</DropdownMenuItem>
                        <a;
<<<<<<< HEAD
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  <BriefcaseIcon className="h - 3 w - 3 mr - 1" /> Hire;
                </Button>;
              </div>;
            </CardContent>;
          </Card>)}
      </Draggable>;

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      </Draggable>;

      </Draggable>;

      {/* Hire Confirmation Modal */}
      <HireConfirmationModal;
        is_open={showHireModal}
        on_close={() => setShowHireModal (false)}
        application={application}

/>;
    </>;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  );
}
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
