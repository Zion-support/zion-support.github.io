
import React, { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Interview } from "@/types/interview";
import { useAuth } from "@/hooks/useAuth";
import { useInterviews } from "@/hooks/useInterviews";
import { format, formatDistanceToNow, isPast, parseISO } from "date-fns";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Clock, ExternalLink, MessageSquare, Video, X } from 'lucide-react'
import { toast } from "@/components/ui/use-toast";
import { InterviewResponseForm } from "./InterviewResponseForm";
interface InterviewCardProps {
  interview: Interview,
  onRefresh: () => Promise<void>
}

export function InterviewCard({ interview, onRefresh }: InterviewCardProps) {
  const { user } = useAuth();
  const { respondToInterview, cancelInterview } = useInterviews();
  const [isResponseDialogOpen, setIsResponseDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  
  const isClient = user?.id === interview.client_id;
  const isTalent = user?.id === interview.talent_id;

  const formattedEndTime = format(endTime, 'h: mm a'),
  
  const isInterviewPending = interview.status === 'requested';
  const isInterviewConfirmed = interview.status === 'confirmed';
  const isInterviewLive = isInterviewConfirmed && !isPast(interviewDate) && isPast(new Date(interviewDate.getTime() - 5 * 60000)), // 5 minutes before


        return <Badge variant="outline" className="border-destructive text-destructive">Cancelled</Badge>;
      default:
        return <Badge>{interview.status}</Badge>
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
