// Local stub is used in place of the @hello-pangea/dnd package which isn't
// available in this environment.
import Link from "next/link";
import {_DropdownMenu, _DropdownMenuContent, _DropdownMenuItem, _DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import Image from 'next/image'; // Import next/image

interface CandidateCardProps {_application: JobApplication;
  index: number;}

export function CandidateCard(_{_application, _index}: CandidateCardProps) {_const [showNotes, _setShowNotes] = useState(false);
  const [notes, _setNotes] = useState(application.notes || "");
  const [showHireModal, _setShowHireModal] = useState(false);
  const [avatarError, _setAvatarError] = useState(false);

  // Check if application is stalled (no activity for 7 days)
  const _isStalled = application.updated_at && 
    new Date(application.updated_at).getTime() < 
    (Date.now() - 7 * 24 * 60 * 60 * 1000);
  
  const _handleSaveNotes = () => {
    // Here you would save the notes to the database
    // For now, _we'll just show a toast
    toast({
      title: "Notes saved", _description: "Your notes have been saved"});
    setShowNotes(false);
  };
  
  const _handleHireConfirmed = () => {_// Hiring process completed via the modal
    toast({
      title: "Hiring process initiated", _description: "Offer has been sent to the talent."});
  };

  const _candidateName = application.talent_profile?.full_name || "Candidate";
  
  return (_<>
      <Draggable draggableId={_application.id} index={_index}>
        {_(provided) => (_<Card 
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
                    {_application.talent_profile?.profile_picture_url && !avatarError ? (
                      <Image
                        src={application.talent_profile.profile_picture_url} 
                        alt={_candidateName}
                        width={_32} // Match h-8 w-8
                        height={_32} // Match h-8 w-8
                        className="rounded-full object-cover" // Ensure rounded and object-cover
                        onError={_() => setAvatarError(true)}
                        priority={_false} // Avatars are usually not LCP
                      />
                    ) : (
                      <User className="h-4 w-4" />
                    )}
                  </AvatarPrimitive>
                  <div>
                    <h4 className="font-medium text-sm">
                      {_candidateName}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {_application.talent_profile?.professional_title || "Applicant"}
                    </p>
                  </div>
                </div>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={_() => setShowNotes(!showNotes)}>
                      {_showNotes ? "Hide notes" : "Add notes"}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={_() => setShowHireModal(true)}>
                      <BriefcaseIcon className="h-4 w-4 mr-2" aria-hidden="true" /> Hire Candidate
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href={_`/messages?talentId=${application.talent_id}`}>
                        Message
                      </Link>
                    </DropdownMenuItem>
                    {_application.resume?.file_url && (
                      <DropdownMenuItem asChild>
                        <a href={application.resume.file_url} target="_blank" rel="noopener noreferrer">
                          View Resume
                        </a>
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
              
              {_/* Notes Section */}
              {_showNotes && (_<div className="mt-2">
                  <Textarea 
                    placeholder="Add private notes about this candidate..." 
                    className="text-xs min-h-[60px]"
                    value={notes}
                    onChange={_(e) => setNotes(e.target.value)}
                  />
                  <div className="flex justify-end mt-2">
                    <Button size="sm" onClick={_handleSaveNotes}>Save Notes</Button>
                  </div>
                </div>
              )}
              
              {_/* Action Buttons */}
              <div className="flex justify-between mt-2 gap-1">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  asChild
                >
                  <Link href={_`/messages?talentId=${application.talent_id}`}>
                    <MessageSquare className="h-3 w-3 mr-1" /> Message
                  </Link>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  asChild
                >
                  {_application.resume?.file_url ? (
                    <a href={application.resume.file_url} target="_blank" rel="noopener noreferrer">
                      <FileText className="h-3 w-3 mr-1" /> Resume
                    </a>
                  ) : (
                    <span>
                      <FileText className="h-3 w-3 mr-1" /> No Resume
                    </span>
                  )}
                </Button>
                
                <Button 
                  variant="default" 
                  size="sm" 
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
  );
}
