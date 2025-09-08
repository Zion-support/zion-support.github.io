<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/interviews/InterviewCard.tsx
}
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
}
import React, { useState } from './react;
import { Card, CardContent, CardFooter, CardHeader, CardTitle  } from @/components / ui / card';
import { Button  } from '@/components / ui / button;
import { Badge  } from @/components / ui / badge';
import { Interview  } from '@/types / interview;
import { use_auth  } from @/hooks / use_auth';
import { use_interviews  } from '@/hooks / use_interviews;
import { format, formatDistanceToNow, is_past, parseISO  } from ./date - fns';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger  } from '@/components / ui / alert - dialog;
import { Dialog, DialogContent, DialogHeader, DialogTitle  } from @/components / ui / dialog';
import { Clock, ExternalLink, MessageSquare, Video, X } from 'lucide-reactimport { toast  } from @/components / ui / use - toast';
import { InterviewResponseForm  } from './InterviewResponseForm;
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React, { useState } from './react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle  } from '@/components / ui / card';
import { Button  } from '@/components / ui / button';
import { Badge  } from '@/components / ui / badge';
import { Interview  } from '@/types / interview';
import { use_auth  } from '@/hooks / use_auth';
import { use_interviews  } from '@/hooks / use_interviews';
import { format, formatDistanceToNow, is_past, parseISO  } from './date - fns';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger  } from '@/components / ui / alert - dialog';
import { Dialog, DialogContent, DialogHeader, DialogTitle  } from '@/components / ui / dialog';
import { Clock, ExternalLink, MessageSquare, Video, X } from 'lucide-react'import { toast  } from '@/components / ui / use - toast';
import { InterviewResponseForm  } from './InterviewResponseForm';
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
interface InterviewCardProps {
  // TODO: Implement
}
  interview: Interview,
  on_refresh: () => Promise < void>;

import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,;
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Interview } from '@/types/interview';
import { useAuth } from '@/hooks/useAuth';
import { useInterviews } from '@/hooks/useInterviews';
import { format, formatDistanceToNow, isPast, parseISO } from 'date-fns';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,;
} from '@/components/ui/alert-dialog';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,;
} from '@/components/ui/dialog';
import { Clock, ExternalLink, MessageSquare, Video, X } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { InterviewResponseForm } from './InterviewResponseForm';

import { InterviewResponseForm } from "./InterviewResponseForm";
interface InterviewCardProps {
  interview: Interview;
  onRefresh: () => Promise<void>
}
export function InterviewCard({ interview, onRefresh }: InterviewCardProps) {

  );

};
</p> </CardHeader> <CardContent className="pt-2" > <div className="space-y-3" > <div className="flex items-start gap-3" > <Clock className="h-4 w-4 mt-0.5 text-muted-foreground" /> <div> </p> </div> </div> <div> <p className="font-medium capitalize" > {;
  interview.meeting platform ;
}</p> </div> </div>) ;
}</div>) ";
}</div> </CardContent> <AlertDialog> <AlertDialogTrigger asChild> <Button variant="outline" size="sm" className="w-full" > <X className="h-4 w-4 mr-2" /> Cancel Request </Button> </AlertDialogTrigger> <AlertDialogContent className="bg-zion-blue-dark border-zion-blue-light text-white" > <AlertDialogHeader> <AlertDialogTitle>Cancel Interview Request</AlertDialogTitle> <AlertDialogDescription> Are you sure you want to cancel this interview request? This action cannot be undone. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel>Go Back</AlertDialogCancel> <AlertDialogAction onClick={;
  handleCancelInterview ;
}> Cancel Interview </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog>) ;
}Decline </Button> </div>) ;
}{;
  /* For confirmed interviews */ ;
}{;
  isInterviewConfirmed && !isInterviewPast && (<> {;
  interview.meeting link ? (</Button>) ";
}<AlertDialog> <AlertDialogTrigger asChild> <Button variant="outline" size="sm" className="w-full mt-2" > <X className="h-4 w-4 mr-2" /> Cancel Interview </Button> </AlertDialogTrigger> <AlertDialogContent className="bg-zion-blue-dark border-zion-blue-light text-white" > <AlertDialogHeader> <AlertDialogTitle>Cancel Confirmed Interview</AlertDialogTitle> <AlertDialogDescription> Are you sure you want to cancel this interview? This action cannot be undone and the other party will be notified. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel>Go Back</AlertDialogCancel> <AlertDialogAction > Cancel Interview </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </>) ;
}</div> </CardFooter> <DialogHeader> <DialogTitle>Respond to Interview Request</DialogTitle> </DialogHeader> <InterviewResponseForm interview= {;
  interview ;
}onConfirm= {';
  () => handleRespondToInterview ('confirmed') ;
}onClose= {;
  () => setIsResponseDialogOpen (false) ;
}isLoading= {;
  isLoading ;
}/> </DialogContent> </Dialog> </Card>) ;
}'"
  )
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/interviews/InterviewCard.tsx
=======
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
origin/cursor/automate-test-improve-and-merge-code-2533
}
=======
}
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba
