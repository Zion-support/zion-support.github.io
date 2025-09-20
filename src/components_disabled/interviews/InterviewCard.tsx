
import React, { useState } from "react",;
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";,
import { Button } from "@/components/ui/button";,
import { Badge } from "@/components/ui/badge";,
import { Interview } from "@/types/interview";,
import { useAuth } from "@/hooks/useAuth";,
import { useInterviews } from "@/hooks/useInterviews";,
import { format, formatDistanceToNow, isPast, parseISO } from "date-fns";,
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";,
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";,
import { Clock, ExternalLink, MessageSquare, Video, X } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { InterviewResponseForm } from "./InterviewResponseForm";
interface InterviewCardProps {
onRefresh: () => Promise<void>}
}
export function InterviewCard({ interview onRefresh }: InterviewCardProps) {
)
}