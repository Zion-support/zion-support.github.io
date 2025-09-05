<<<<<<< HEAD
import { useState } from "react",
// Local stub is used in place of the @hello-pangea/dnd package which isn't
// available in this environment.
import { Draggable } from "@/lib/dnd-stub",
import { formatDistanceToNow } from "date-fns",
import Link from "next/link",
import { JobApplication } from "@/types/jobs",
import { Card, CardContent } from "@/components/ui/card",
import { Avatar as AvatarPrimitive } from "@/components/ui/avatar", // Renamed to avoid conflict
import { Button } from "@/components/ui/button",
import { Textarea } from "@/components/ui/textarea",
=======
import { useState } from &quot;react&quot;;
// Local stub is used in place of the @hello-pangea/dnd package which isn't
// available in this environment.
import { Draggable } from &quot;@/lib/dnd-stub&quot;;
import { formatDistanceToNow } from &quot;date-fns&quot;;
import Link from &quot;next/link&quot;;
import { JobApplication } from &quot;@/types/jobs&quot;;
import { Card, CardContent } from &quot;@/components/ui/card&quot;;
import { Avatar as AvatarPrimitive } from &quot;@/components/ui/avatar&quot;; // Renamed to avoid conflict
import { Button } from &quot;@/components/ui/button&quot;;
import { Textarea } from &quot;@/components/ui/textarea&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { MessageSquare, User, FileText, MoreVertical, Calendar, AlertTriangle, BriefcaseIcon } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
<<<<<<< HEAD
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",
import { ScoreBadge } from "@/components/jobs/applications/ScoreBadge",
import { toast } from "@/hooks/use-toast",
import { HireConfirmationModal } from "./HireConfirmationModal",
import Image from 'next/image', // Import next/image
=======
  DropdownMenuTrigger} from &quot;@/components/ui/dropdown-menu&quot;;
import { ScoreBadge } from &quot;@/components/jobs/applications/ScoreBadge&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;
import { HireConfirmationModal } from &quot;./HireConfirmationModal&quot;;
import Image from 'next/image'; // Import next/image
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
  const [avatarError, setAvatarError] = useState(false),
=======
  const [showNotes, setShowNotes] = useState(false);
  const [notes, setNotes] = useState(application.notes || "&quot;);
  const [showHireModal, setShowHireModal] = useState(false);
  const [avatarError, setAvatarError] = useState(false);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  // Check if application is stalled (no activity for 7 days)
  const isStalled = application.updated_at && 
    new Date(application.updated_at).getTime() < 
    (Date.now() - 7 * 24 * 60 * 60 * 1000),
  
  const handleSaveNotes = () => {
    // Here you would save the notes to the database
    // For now, we'll just show a toast
    toast({
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
    setShowNotes(false);
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
  const handleHireConfirmed = () => {
    // Hiring process completed via the modal
    toast({
<<<<<<< HEAD
      title: "Hiring process initiated",
      description: "Offer has been sent to the talent."
    })
  },

  const candidateName = application.talent_profile?.full_name || "Candidate",
=======
      title: &quot;Hiring process initiated&quot;,
      description: &quot;Offer has been sent to the talent.&quot;
    });
  };

  const candidateName = application.talent_profile?.full_name || &quot;Candidate";
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
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
                  <AvatarPrimitive className="h-8 w-8"> {/* Using renamed AvatarPrimitive */}
                    {application.talent_profile?.profile_picture_url && !avatarError ? (
                      <Image
                        src={application.talent_profile.profile_picture_url} 
                        alt={candidateName}
                        width={32} // Match h-8 w-8
                        height={32} // Match h-8 w-8
                        className="rounded-full object-cover" // Ensure rounded and object-cover
                        onError={() => setAvatarError(true)}
                        priority={false} // Avatars are usually not LCP
                      />
                    ) : (
                      <User className="h-4 w-4" />
                    )}
                  </AvatarPrimitive>
                  <div>
                    <h4 className="font-medium text-sm">
                      {candidateName}
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
                      <BriefcaseIcon className="h-4 w-4 mr-2&quot; aria-hidden=&quot;true" /> Hire Candidate
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href={`/messages?talentId=${application.talent_id}`}>
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
                  <Link href={`/messages?talentId=${application.talent_id}`}>
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
  )
}
