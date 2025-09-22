
import { MessageSquare, User, FileText, MoreVertical, Calendar, AlertTriangle, BriefcaseIcon } from 'lucide-react';
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;

}> <CardContent className="p-3"> {;
  /* Candidate Header */ ";
}<div className="flex justify-between items-start mb-2"> <div className="flex items-center gap-2"> <AvatarPrimitive className="h-8 w-8"> {;
  /* Using renamed AvatarPrimitive */ ;
}{;

  () => setAvatarError (true) ;
}priority= {;
  false ";
}//Avatars are usually not LCP />) : (<User className="h-4 w-4" />) ";
}</AvatarPrimitive> <div> <h4 className="font-medium text-sm"> {;
  candidateName ";

}target="blank" rel="noopener noreferrer"> View Resume </Link> </DropdownMenuItem>) ;
}</DropdownMenuContent> </DropdownMenu> </div> {;
  /* Application Info */ ";
}<div className="flex flex-wrap gap-2 items-center text-xs text-muted-foreground mb-2"> <div className="flex items-center"> <Calendar className="h-3 w-3 mr-1" /> {;

  addSuffix: true ;
}) ;
}</div> {";
  isStalled && (<div className="flex items-center text-amber-500"> <AlertTriangle className="h-3 w-3 mr-1" /> Stalled </div>) ;
}</div> {;
  /* Match Score */ ;
}{";

  () => setShowHireModal (true) ";
}> <BriefcaseIcon className="h-3 w-3 mr-1" /> Hire </Button> </div> </CardContent> </Card>) ;
}</Draggable> {;
  /* Hire Confirmation Modal */ ;

  () => setShowHireModal (false) ;
}application= {;
  application ;
}onConfirm= {;
  handleHireConfirmed ;
}/> </>) ;

