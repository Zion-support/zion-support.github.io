
import { useState } from &quot;react&quot;;
import { Draggable } from &quot;react-beautiful-dnd&quot;;
import { formatDistanceToNow } from &quot;date-fns&quot;;
import { Link } from &quot;react-router-dom&quot;;
import { JobApplication } from &quot;@/types/jobs&quot;;
import { Card, CardContent } from &quot;@/components/ui/card&quot;;
import { Avatar } from &quot;@/components/ui/avatar&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Textarea } from &quot;@/components/ui/textarea&quot;;
import { 
  MessageSquare, 
  User, 
  FileText, 
  MoreVertical, 
  Calendar,
  AlertTriangle,
  BriefcaseIcon
} from &quot;lucide-react&quot;;
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger} from &quot;@/components/ui/dropdown-menu&quot;;
import { ScoreBadge } from &quot;@/components/jobs/applications/ScoreBadge&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;
import { HireConfirmationModal } from &quot;./HireConfirmationModal&quot;;

interface CandidateCardProps {
  application: JobApplication;
  index: number;
}

export function CandidateCard({ application, index }: CandidateCardProps) {
  const [showNotes, setShowNotes] = useState(false);
  const [notes, setNotes] = useState(application.notes || "&quot;);
  const [showHireModal, setShowHireModal] = useState(false);
  
  // Check if application is stalled (no activity for 7 days)
  const isStalled = application.updated_at && 
    new Date(application.updated_at).getTime() < 
    (Date.now() - 7 * 24 * 60 * 60 * 1000);
  
  const handleSaveNotes = () => {
    // Here you would save the notes to the database
    // For now, we'll just show a toast
    toast({
      title: &quot;Notes saved&quot;,
      description: &quot;Your notes have been saved&quot;
    });
    setShowNotes(false);
  };
  
  const handleHireConfirmed = () => {
    // Hiring process completed via the modal
    toast({
      title: &quot;Hiring process initiated&quot;,
      description: &quot;Offer has been sent to the talent."
    });
  };
  
  return (
    <>
      <Draggable draggableId={application.id} index={index}>
        {(provided) => (
          <Card 
            className="mb-2 p-0 shadow-sm border"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <CardContent className="p-3">
              {/* Candidate Header */}
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    {application.talent_profile?.profile_picture_url ? (
                      <img 
                        src={application.talent_profile.profile_picture_url} 
                        alt={application.talent_profile.full_name || "Candidate"} 
                      />
                    ) : (
                      <User className="h-4 w-4" />
                    )}
                  </Avatar>
                  <div>
                    <h4 className="font-medium text-sm&quot;>
                      {application.talent_profile?.full_name || &quot;Candidate"}
                    </h4>
                    <p className="text-xs text-muted-foreground&quot;>
                      {application.talent_profile?.professional_title || &quot;Applicant&quot;}
                    </p>
                  </div>
                </div>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant=&quot;ghost" className="h-8 w-8 p-0">
                      <MoreVertical className="h-4 w-4&quot; />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align=&quot;end&quot;>
                    <DropdownMenuItem onClick={() => setShowNotes(!showNotes)}>
                      {showNotes ? &quot;Hide notes&quot; : &quot;Add notes"}
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
                        <a href={application.resume.file_url} target="_blank&quot; rel=&quot;noopener noreferrer">
                          View Resume
                        </Link>
                      </DropdownMenuItem>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              
              {/* Application Info */}
              <div className="flex flex-wrap gap-2 items-center text-xs text-muted-foreground mb-2">
                <div className="flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  {formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}
                </div>
                
                {isStalled && (
                  <div className="flex items-center text-amber-500">
                    <AlertTriangle className="h-3 w-3 mr-1" />
                    Stalled
                  </div>
                )}
              </div>
              
              {/* Match Score */}
              {application.match_score !== null && application.match_score !== undefined && (
                <div className="mb-2">
                  <ScoreBadge application={application} />
                </div>
              )}
              
              {/* Notes Section */}
              {showNotes && (
                <div className="mt-2&quot;>
                  <Textarea 
                    placeholder=&quot;Add private notes about this candidate..." 
                    className="text-xs min-h-[60px]"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                  <div className="flex justify-end mt-2&quot;>
                    <Button size=&quot;sm" onClick={handleSaveNotes}>Save Notes</Button>
                  </div>
                </div>
              )}
              
              {/* Action Buttons */}
              <div className="flex justify-between mt-2 gap-1&quot;>
                <Button 
                  variant=&quot;outline&quot; 
                  size=&quot;sm" 
                  className="flex-1"
                  asChild
                >
                  <Link to={`/messages?talentId=${application.talent_id}`}>
                    <MessageSquare className="h-3 w-3 mr-1&quot; /> Message
                  </Link>
                </Button>
                
                <Button 
                  variant=&quot;outline&quot; 
                  size=&quot;sm" 
                  className="flex-1"
                  asChild
                >
                  {application.resume?.file_url ? (
                    <a href={application.resume.file_url} target="_blank&quot; rel=&quot;noopener noreferrer">
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
                  onClick={() => setShowHireModal(true)}
                >
                  <BriefcaseIcon className="h-3 w-3 mr-1" /> Hire
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </Draggable>
      
      {/* Hire Confirmation Modal */}
      <HireConfirmationModal
        isOpen={showHireModal}
        onClose={() => setShowHireModal(false)}
        application={application}
        onConfirm={handleHireConfirmed}
      />
    </>
  );
}
