
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
  BriefcaseIcon,;"
} from "lucide-react";"
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuTrigger,;
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
  BriefcaseIcon;"
} from "lucide-react","
import {
  // TODO: Implement
}
  MessageSquare;
  User;
  FileText;
  MoreVertical;
  Calendar;
  AlertTriangle;
  BriefcaseIcon;"
} from "lucide-react";"
import {
  // TODO: Implement
}
DropdownMenu;
  DropdownMenuContent;
  DropdownMenuItem;
  DropdownMenuTrigger;"
} from "@/components/ui/dropdown-menu";""
import { ScoreBadge } from "@/components/jobs/applications/ScoreBadge";""
import { toast } from "@/hooks/use-toast";""
import { HireConfirmationModal } from "./HireConfirmationModal";"
interface CandidateCardProps {
  // TODO: Implement
}
  application: JobApplication;"
import { Button } from "@/components/ui/button",""
import { Textarea } from "@/components/ui/textarea","
import {
  // TODO: Implement
}
  MessageSquare,
  User, 
  FileText, 
  MoreVertical, 
  Calendar,
  AlertTriangle,
  BriefcaseIcon,;"
} from "lucide-react";"
  BriefcaseIcon;"
} from "lucide-react","
import {
  // TODO: Implement
}
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
DropdownMenuTrigger,;"
} from "@/components/ui/dropdown-menu";""
import { ScoreBadge } from "@/components/jobs/applications/ScoreBadge";""
import { toast } from "@/hooks/use-toast";""
import { HireConfirmationModal } from "./HireConfirmationModal";"
interface CandidateCardProps {;"
import { useState  } from './react';''
import { Draggable  } from './react - beautiful - dnd';''
import { formatDistanceToNow  } from './date - fns';''
import { Link  } from './react-router-dom';''
import { JobApplication  } from '@/types / jobs';''
import { Card, CardContent  } from '@/components / ui / card';''
import { Avatar  } from '@/components / ui / avatar';''
import { Button  } from '@/components / ui / button';''
import { Textarea  } from '@/components / ui / textarea';'
import {
  // TODO: Implement
}
  MessageSquare,
  User,
  FileText,
  MoreVertical,
  Calendar,
  AlertTriangle,
import {
  // TODO: Implement
}
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,



'
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",""
import { ScoreBadge } from "@/components/jobs/applications/ScoreBadge",""
import { toast } from "@/hooks/use-toast",""
import { HireConfirmationModal } from "./HireConfirmationModal","
interface CandidateCardProps {
  // TODO: Implement
}
  application: JobApplication;,
  index: number;
}





  

  const handleSaveNotes = () => {
    // Here you would save the notes to the database;"
    // For now, we'll just show a toast;'
    toast({

)
export function CandidateCard(): any ({ application, index }: CandidateCardProps) {;
  const [showNotes, setShowNotes] = useState(false);'
  const [notes, setNotes] = useState(application && application.notes || "");"
  const [showHireModal, setShowHireModal] = useState(false);

"
      title: "Notes saved",""
      description: "Your notes have been saved""
    }),
    setShowNotes(false)
  },
  
  const handleHireConfirmed = () => {
    // Hiring process completed via the modal;
    toast({"
      title: "Hiring process initiated",""
      description: "Offer has been sent to the talent."")
    })
  },
  

  return (
    <>
      <Draggable draggableId={application.id} index={index}>
</Draggable>
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
import {;
  MessageSquare,;
  User,;
  FileText,;
  MoreVertical,;
  Calendar,;
  AlertTriangle,;
  BriefcaseIcon;"
} from "lucide-react",;"
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;"
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",;""
import { ScoreBadge } from "@/components/jobs/applications/ScoreBadge",;""
import { toast } from "@/hooks/use-toast",;""
import { HireConfirmationModal } from "./HireConfirmationModal",;"
interface CandidateCardProps {;
  application: JobApplication,;
  index: number;
}
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
</Button>"
                  <BriefcaseIcon className="h-3 w-3 mr-1" /> Hire;"
</BriefcaseIcon>
                </Button>;
              </div>;
            </CardContent>;
          </Card>;
      </Draggable>;
    new Date (application.updated_at).get_time () <;
      Date.now () - 7 * 24 * 60 * 60 * 1000;
;
  const handleSaveNotes = () =>: any {
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
  const handleHireConfirmed = () =>: any {
  // TODO: Implement
}
    // Hiring process completed via the modal;
    toast ({"
      title: "Hiring process initiated",""
      description: "Offer has been sent to the talent.",")
    });
  }
;
  return (
    <>;
      <Draggable draggable_id={application.id} index={index}>;
</Draggable>
          <Card;"
            className="mb - 2 p - 0 shadow - sm border";"
            ref={provided.inner_ref}
            {...provided.draggable_props}
            {...provided.dragHandleProps}
          >;
</Card>"
            <CardContent className="p - 3">;"
</CardContent>"
              <div className="flex justify - between items - start mb - 2">;"
</div>"
                <div className="flex items - center gap - 2">;"
</div>"
                  <Avatar className="h - 8 w - 8">;"
</Avatar>
                      <img;
                        src={application.talent_profile.profile_picture_url}
                        alt={"
                          application.talent_profile.full_name || "Candidate";"
                        })
                      />) : (
</img>)"
                      <User className="h - 4 w - 4" />)}"
</User>
                  </Avatar>;
                  <div>;
</div>"
                    <h4 className="font - medium text - sm">;"
</h4>
                    </h4>;"
                    <p className="text - xs text - muted - foreground">;"
</p>
                    </p>;
                  </div>;
                </div>;
                <DropdownMenu>;
</DropdownMenu>
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
</DropdownMenuItem>
                      <Link to={`/messages?talent_id=${application.talent_id}`}>;
</Link>
                      </Link>;
                    </DropdownMenuItem>;
                      <DropdownMenuItem as_child>;
</DropdownMenuItem>
                        <a;
                          href={application.resume.file_url}"
                          target="_blank";""
                          rel="noopener noreferrer";"
                        >;
</a>
                        </a>;
                      </DropdownMenuItem>)}
                  </DropdownMenuContent>;
                </DropdownMenu>;
              </div>;"
              <div className="flex flex - wrap gap - 2 items - center text - xs text - muted - foreground mb - 2">;"
</div>"
                <div className="flex items - center">;"
</div>"
                  <Calendar className="h - 3 w - 3 mr - 1" />;"
</Calendar>
                </div>;"
                  <div className="flex items - center text - amber - 500">;"
</div>"
                    <AlertTriangle className="h - 3 w - 3 mr - 1" />;"
</AlertTriangle>
                  </div>)}
              </div>;"
                  <div className="mb - 2">;"
</div>
                    <ScoreBadge application={application} />;
</ScoreBadge>
                  </div>)}"
                <div className="mt - 2">;"
</div>
                  <Textarea;"
                    placeholder="Add private notes about this candidate...";""
                    className="text - xs min - h-[60px]";"
                    value={notes}
                    on_change={(e) => set_notes (e.target.value)}
</Textarea>"
                  <div className="flex justify - end mt - 2">;"
</div>"
                    <Button size="sm" on_click={handleSaveNotes}>;"
</Button>
                    </Button>;
                  </div>;
                </div>)}"
              <div className="flex justify - between mt - 2 gap - 1">;"
</div>"
                <Button variant="outline" size="sm" className="flex - 1" as_child>;"
</Button>
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
</Button>"
                  <BriefcaseIcon className="h - 3 w - 3 mr - 1" /> Hire;"
</BriefcaseIcon>
                </Button>;
              </div>;
            </CardContent>;
          </Card>)}
      </Draggable>;
      </Draggable>;
      </Draggable>;
      <HireConfirmationModal;
        is_open={showHireModal}
        on_close={() => setShowHireModal (false)}
</HireConfirmationModal>
    </>;


  );
}
  );
        on_confirm={handleHireConfirmed}
      />;
    </>);
}
      ;
      {/* Hire Confirmation Modal */}
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
      </Draggable>
      </Draggable>;
      <HireConfirmationModal;
        isOpen={showHireModal}
        onClose={() => setShowHireModal(false)}
</HireConfirmationModal>
    </>

      />
    </>
      />;
    </>;
  );
}
"