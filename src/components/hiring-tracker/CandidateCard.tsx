import { useState } from "react",
// Local stub is used in place of the @hello-pangea/dnd package which isn't
// available in this environment.
import { Draggable } from "@/lib/dnd-stub",
import { formatDistanceToNow } from "date-fns",
import Link from "next/link",
import { JobApplication } from "@/types/jobs",
import { Card, CardContent } from "@/components/ui/card",
import { Avatar as AvatarPrimitive } from "@/components/ui/avatar", // Renamed to avoid conflict,
import { Button } from "@/components/ui/button",
import { Textarea } from "@/components/ui/textarea",import { MessageSquare, User, FileText, MoreVertical, Calendar, AlertTriangle, BriefcaseIcon } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",
import { ScoreBadge } from "@/components/jobs/applications/ScoreBadge",
import { toast } from "@/hooks/use-toast",
import { HireConfirmationModal } from "./HireConfirmationModal",
import Image from 'next/image', // Import next/imageimport Image from 'next/image'; // Import next/image,
interface CandidateCardProps {
  application: JobApplication,
  index: number
}

export function CandidateCard({ application, index }: CandidateCardProps) {
  const [showNotes, setShowNotes] = useState(false),
  const [notes, setNotes] = useState(application.notes || ""),
  const [showHireModal, setShowHireModal] = useState(false),
  const [avatarError, setAvatarError] = useState(false),interface CandidateCardProps {application: JobApplication,
  index: number}

export function CandidateCard(_{application, index}: CandidateCardProps) {const [showNotes, setShowNotes] = useState(false);
  const [notes, setNotes] = useState(application.notes || "");
  const [showHireModal, setShowHireModal] = useState(false);
  const [avatarError, setAvatarError] = useState(false);

  // Check if application is stalled (no activity for 7 days)
  const isStalled = application.updatedat && 
    new Date(application.updatedat).getTime() < 
    (Date.now() - 7 * 24 * 60 * 60 * 1000),
  
  const handleSaveNotes = () => {
    // Here you would save the notes to the database
    // For now, we'll just show a toast,
toast({
      title: "Notes saved",
      description: "Your notes have been saved"
    }),
    setShowNotes(false)
  },    setShowNotes(false)
  };
  
  const handleHireConfirmed = () => {_// Hiring process completed via the modal,
toast({
      title: "Hiring process initiated",
      description: "Offer has been sent to the talent."
    })
  },

  const candidateName = application.talentprofile?.fullname || "Candidate",      title: "Hiring process initiated", description: "Offer has been sent to the talent."})
  };

  const candidateName = application.talentprofile?.fullname || "Candidate";
  
  return (_<>
      <Draggable draggableId={application.id} index={index}>
        {_(provided) => (_<Card,
className="mb-2 p-0 shadow-sm border"
            ref={provided.innerRef}
            {_...provided.draggableProps}
            {_...provided.dragHandleProps}
          >
            <CardContent className="p-3">
              {_/* Candidate Header */}
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <AvatarPrimitive className="h-8 w-8"> {_/* Using renamed AvatarPrimitive */}
                    {application.talentprofile?.profilepicture_url && !avatarError ? (
                      <Image,
src={application.talentprofile.profilepicture_url} 
                        alt={candidateName}
                        width={32} // Match h-8 w-8,
height={32} // Match h-8 w-8,
className="rounded-full object-cover" // Ensure rounded and object-cover,
onError={_() => setAvatarError(true)}
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
                      {application.talentprofile?.professionaltitle || &quot;Applicant&quot}                    </p>
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
                      <BriefcaseIcon className="h-4 w-4 mr-2&quot; aria-hidden=&quot;true" /> Hire Candidate                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href={_`/messages?talentId=${application.talentid}`}>
                        Message
                      </Link>
                    </DropdownMenuItem>
                    {application.resume?.fileurl && (
                      <DropdownMenuItem asChild>
                        <a href={application.resume.fileurl} target="blank&quot; rel=&quot;noopener noreferrer">
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
                  {formatDistanceToNow(new Date(application.createdat), _{ addSuffix: true})}
                </div>
                
                {isStalled && (
                  <div className="flex items-center text-amber-500">
                    <AlertTriangle className="h-3 w-3 mr-1" />
                    Stalled
                  </div>
                )}
              </div>
              
              {_/* Match Score */}
              {application.matchscore !== null && application.matchscore !== undefined && (
                <div className="mb-2">
                  <ScoreBadge application={application} />
                </div>
              )}
              
              {/* Notes Section */}
              {showNotes && (
                <div className="mt-2&quot;>                  <Textarea,
placeholder=&quot;Add private notes about this candidate..." 
                    className="text-xs min-h-[60px]"
                    value={notes}
                    onChange={_(e) => setNotes(e.target.value)}
                  />
                  <div className="flex justify-end mt-2&quot;>
                    <Button size=&quot;sm" onClick={handleSaveNotes}>Save Notes</Button>                  </div>
                </div>
              )}
              
              {/* Action Buttons */}
              <div className="flex justify-between mt-2 gap-1&quot;>                <Button,
variant=&quot;outline&quot; 
                  size=&quot;sm" 
                  className="flex-1"
                  asChild
                >
                  <Link href={`/messages?talentId=${application.talentid}`}>
                    <MessageSquare className="h-3 w-3 mr-1&quot; /> Message                  </Link>
                </Button>
                
                <Button,
variant=&quot;outline&quot; 
                  size=&quot;sm" 
                  className="flex-1"
                  asChild
                >
                  {application.resume?.fileurl ? (
                    <a href={application.resume.fileurl} target="blank&quot; rel=&quot;noopener noreferrer">                      <FileText className="h-3 w-3 mr-1" /> Resume
                    </Link>
                  ) : (
                    <span>
                      <FileText className="h-3 w-3 mr-1&quot; /> No Resume
                    </span>
                  )}
                </Button>
                
                <Button,
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
      <HireConfirmationModal,
isOpen={showHireModal}
        onClose={_() => setShowHireModal(false)}
        application={application}
        onConfirm={handleHireConfirmed}
      />
    </>
  )
}
