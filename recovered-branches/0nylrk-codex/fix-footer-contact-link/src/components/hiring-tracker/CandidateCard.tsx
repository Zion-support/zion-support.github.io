
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react",
import { Draggable } from "react-beautiful-dnd",
import { formatDistanceToNow } from "date-fns",
import { Link } from "react-router-dom",
import { JobApplication } from "@/types/jobs",
import { Card, CardContent } from "@/components/ui/card",
import { Avatar } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button",
import { Textarea } from "@/components/ui/textarea",
=======
import { useState } from &quot;react&quot;;
import { Draggable } from &quot;react-beautiful-dnd&quot;;
import { formatDistanceToNow } from &quot;date-fns&quot;;
import { Link } from &quot;react-router-dom&quot;;
import { JobApplication } from &quot;@/types/jobs&quot;;
import { Card, CardContent } from &quot;@/components/ui/card&quot;;
import { Avatar } from &quot;@/components/ui/avatar&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Textarea } from &quot;@/components/ui/textarea&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { 
  MessageSquare,
  User, 
  FileText, 
  MoreVertical, 
  Calendar,
  AlertTriangle,
  BriefcaseIcon
<<<<<<< HEAD
} from "lucide-react",
=======
} from &quot;lucide-react&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
<<<<<<< HEAD
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",
import { ScoreBadge } from "@/components/jobs/applications/ScoreBadge",
import { toast } from "@/hooks/use-toast",
import { HireConfirmationModal } from "./HireConfirmationModal",
=======
  DropdownMenuTrigger} from &quot;@/components/ui/dropdown-menu&quot;;
import { ScoreBadge } from &quot;@/components/jobs/applications/ScoreBadge&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;
import { HireConfirmationModal } from &quot;./HireConfirmationModal&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface CandidateCardProps {
  application: JobApplication,
  index: number
}

export function CandidateCard({ application, index }: CandidateCardProps) {
<<<<<<< HEAD
  const [showNotes, setShowNotes] = useState(false),
  const [notes, setNotes] = useState(application.notes || ""),
  const [showHireModal, setShowHireModal] = useState(false),
=======
  const [showNotes, setShowNotes] = useState(false);
  const [notes, setNotes] = useState(application.notes || "&quot;);
  const [showHireModal, setShowHireModal] = useState(false);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
import {_MessageSquare, _User, _FileText, _MoreVertical, _Calendar, _AlertTriangle, _BriefcaseIcon} from "lucide-react";
import {_DropdownMenu, _DropdownMenuContent, _DropdownMenuItem, _DropdownMenuTrigger} from "@/components/ui/dropdown-menu";

interface CandidateCardProps {_application: JobApplication;
  index: number;}

export function CandidateCard(_{_application, _index}: CandidateCardProps) {_const [showNotes, _setShowNotes] = useState(false);
  const [notes, _setNotes] = useState(application.notes || "");
  const [showHireModal, _setShowHireModal] = useState(false);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  // Check if application is stalled (no activity for 7 days)
  const _isStalled = application.updated_at && 
    new Date(application.updated_at).getTime() < 
    (Date.now() - 7 * 24 * 60 * 60 * 1000),
  
  const _handleSaveNotes = () => {
    // Here you would save the notes to the database
    // For now, _we'll just show a toast
    toast({
<<<<<<< HEAD
<<<<<<< HEAD
      title: "Notes saved",
      description: "Your notes have been saved"
    }),
    setShowNotes(false)
  },
=======
      title: &quot;Notes saved&quot;,
      description: &quot;Your notes have been saved&quot;
    });
=======
      title: "Notes saved", _description: "Your notes have been saved"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    setShowNotes(false);
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
  const _handleHireConfirmed = () => {_// Hiring process completed via the modal
    toast({
<<<<<<< HEAD
<<<<<<< HEAD
      title: "Hiring process initiated",
      description: "Offer has been sent to the talent."
    })
  },
=======
      title: &quot;Hiring process initiated&quot;,
      description: &quot;Offer has been sent to the talent."
    });
=======
      title: "Hiring process initiated", _description: "Offer has been sent to the talent."});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
  return (_<>
      <Draggable draggableId={_application.id} index={_index}>
        {_(provided) => (
          <Card 
            className="mb-2 p-0 shadow-sm border"
            ref={provided.innerRef}
            {_...provided.draggableProps}
            {_...provided.dragHandleProps}
          >
            <CardContent className="p-3">
              {_/* Candidate Header */}
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    {_application.talent_profile?.profile_picture_url ? (
                      <img 
                        src={application.talent_profile.profile_picture_url} 
                        alt={_application.talent_profile.full_name || "Candidate"} 
                      />
                    ) : (
                      <User className="h-4 w-4" />
                    )}
                  </Avatar>
                  <div>
<<<<<<< HEAD
                    <h4 className="font-medium text-sm&quot;>
                      {application.talent_profile?.full_name || &quot;Candidate"}
                    </h4>
                    <p className="text-xs text-muted-foreground&quot;>
                      {application.talent_profile?.professional_title || &quot;Applicant&quot;}
=======
                    <h4 className="font-medium text-sm">
                      {_application.talent_profile?.full_name || "Candidate"}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {_application.talent_profile?.professional_title || "Applicant"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </p>
                  </div>
                </div>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant=&quot;ghost" className="h-8 w-8 p-0">
                      <MoreVertical className="h-4 w-4&quot; />
                    </Button>
                  </DropdownMenuTrigger>
<<<<<<< HEAD
                  <DropdownMenuContent align=&quot;end&quot;>
                    <DropdownMenuItem onClick={() => setShowNotes(!showNotes)}>
                      {showNotes ? &quot;Hide notes&quot; : &quot;Add notes"}
=======
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={_() => setShowNotes(!showNotes)}>
                      {_showNotes ? "Hide notes" : "Add notes"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={_() => setShowHireModal(true)}>
                      <BriefcaseIcon className="h-4 w-4 mr-2" /> Hire Candidate
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to={_`/messages?talentId=${application.talent_id}`}>
                        Message
                      </Link>
                    </DropdownMenuItem>
                    {_application.resume?.file_url && (
                      <DropdownMenuItem asChild>
                        <a href={application.resume.file_url} target="_blank&quot; rel=&quot;noopener noreferrer">
                          View Resume
                        </Link>
                      </DropdownMenuItem>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              
              {_/* Application Info */}
              <div className="flex flex-wrap gap-2 items-center text-xs text-muted-foreground mb-2">
                <div className="flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  {_formatDistanceToNow(new Date(application.created_at), _{ addSuffix: true})}
                </div>
                
                {_isStalled && (
                  <div className="flex items-center text-amber-500">
                    <AlertTriangle className="h-3 w-3 mr-1" />
                    Stalled
                  </div>
                )}
              </div>
              
              {_/* Match Score */}
              {_application.match_score !== null && application.match_score !== undefined && (
                <div className="mb-2">
                  <ScoreBadge application={application} />
                </div>
              )}
              
<<<<<<< HEAD
              {/* Notes Section */}
              {showNotes && (
                <div className="mt-2&quot;>
=======
              {_/* Notes Section */}
              {_showNotes && (_<div className="mt-2">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  <Textarea 
                    placeholder=&quot;Add private notes about this candidate..." 
                    className="text-xs min-h-[60px]"
                    value={notes}
                    onChange={_(e) => setNotes(e.target.value)}
                  />
<<<<<<< HEAD
                  <div className="flex justify-end mt-2&quot;>
                    <Button size=&quot;sm" onClick={handleSaveNotes}>Save Notes</Button>
=======
                  <div className="flex justify-end mt-2">
                    <Button size="sm" onClick={_handleSaveNotes}>Save Notes</Button>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </div>
                </div>
              )}
              
<<<<<<< HEAD
              {/* Action Buttons */}
              <div className="flex justify-between mt-2 gap-1&quot;>
=======
              {_/* Action Buttons */}
              <div className="flex justify-between mt-2 gap-1">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <Button 
                  variant=&quot;outline&quot; 
                  size=&quot;sm" 
                  className="flex-1"
                  asChild
                >
<<<<<<< HEAD
                  <Link to={`/messages?talentId=${application.talent_id}`}>
                    <MessageSquare className="h-3 w-3 mr-1&quot; /> Message
=======
                  <Link to={_`/messages?talentId=${application.talent_id}`}>
                    <MessageSquare className="h-3 w-3 mr-1" /> Message
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </Link>
                </Button>
                
                <Button 
                  variant=&quot;outline&quot; 
                  size=&quot;sm" 
                  className="flex-1"
                  asChild
                >
<<<<<<< HEAD
                  {application.resume?.file_url ? (
                    <a href={application.resume.file_url} target="_blank&quot; rel=&quot;noopener noreferrer">
=======
                  {_application.resume?.file_url ? (
                    <a href={application.resume.file_url} target="_blank" rel="noopener noreferrer">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      <FileText className="h-3 w-3 mr-1" /> Resume
                    </Link>
                  ) : (
                    <span>
                      <FileText className="h-3 w-3 mr-1&quot; /> No Resume
                    </span>
                  )}
                </Button>
                
                <Button 
                  variant=&quot;default&quot; 
                  size=&quot;sm" 
                  className="flex-1"
                  onClick={_() => setShowHireModal(true)}
                >
                  <BriefcaseIcon className="h-3 w-3 mr-1" /> Hire
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </Draggable>
      
      {_/* Hire Confirmation Modal */}
      <HireConfirmationModal
        isOpen={_showHireModal}
        onClose={_() => setShowHireModal(false)}
        application={_application}
        onConfirm={_handleHireConfirmed}
      />
    </>
  )
}
