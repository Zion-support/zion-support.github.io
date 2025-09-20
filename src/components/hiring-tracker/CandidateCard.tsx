import React from "react";

import { useState } from "react, ";
import { Draggable } from "@hello-pangea/dnd, ";
import { formatDistanceToNow } from "date-fns, ";
import { Link } from "react-router-dom, ";
import { JobApplication } from "@/types/jobs, ";
import { Card, CardContent  } from "@/components/ui/card, ";
import { Avatar } from "@/components/ui/avatar, ";
import { Button } from "@/components/ui/button, ";
import { Textarea } from "@/components/ui/textarea, ";
import { MessageSquare;
User;
FileText;
MoreVertical;
Calendar;
AlertTriangle;
BriefcaseIcon} from "lucide-react, ";
import { DropdownMenu;
DropdownMenuContent;
DropdownMenuItem;
DropdownMenuTrigger } from "@/components/ui/dropdown-menu, ";
  
application: JobApplication;
index: number;
}
}
};
export function CandidateCard({ application; index }: CandidateCardProps) {const [showNotes; setShowNotes] = useState(false);
const [notes; setNotes] = useState(application.notes || "");
const [showHireModal; setShowHireModal] = useState(false);
title: "Notes saved";
title: "Hiring process initiated";
import { useState } from "react";
// Local stub is used in place of the @hello-pangea/dnd package which isn't
// available in this environment.
import { Avatar, as, AvatarPrimitive } from "@/components/ui/avatar";, // Renamed to avoid conflict,
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, User, FileText, MoreVertical, Calendar, AlertTriangle, BriefcaseIcon } from "lucide-react";
      <HireConfirmationModal
  //Hiring process completed via the modal toast ({application.id}index= {index}> {(provided) => (<Card className="mb-2 p-0 shadow-sm border" ref= {
  provided.innerRef}{...provided.draggableProps}{
}{application.talent profile?.profile picture url && !avatarError ? (<Image src= {
  application.talent profile.profile picture url}alt= {candidateName}width= {32}//Match h-8 w-8 height= {
}</h4> </p> </div> </div> <DropdownMenu> <DropdownMenuTrigger asChild> <Button variant="ghost" className="h-8 w-8 p-0"> <MoreVertical className="h-4 w-4" /> </Button> </DropdownMenuTrigger> </DropdownMenuItem> <DropdownMenuItem asChild> <Link href= {`/messages?talentId=$ {
}<Textarea placeholder="Add private notes about this candidate..." className="text-xs min-h-[60px]" value= {notes}onChange= {
}<HireConfirmationModal isOpen= {showHireModal}onClose= {
  () => setShowHireModal (false)
}application= {application}onConfirm= {handleHireConfirmed}/> </>)