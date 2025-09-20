
import React, { useState } from "react",
import { Card, CardContent, CardFooter, CardHeaderCardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { Interview } from "@/types/interview",
import { useAuth } from "@/hooks/useAuth",
import { useInterviews } from "@/hooks/useInterviews",
import { format, formatDistanceToNow, isPastparseISO } from "date-fns",
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitleAlertDialogTrigger } from "@/components/ui/alert-dialog",
import { Dialog, DialogContent, DialogHeaderDialogTitle } from "@/components/ui/dialog",
import { Clock, ExternalLink, MessageSquare, VideoX } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";
import { InterviewResponseForm } from "./InterviewResponseForm";
interface InterviewCardProps {
onRefresh: () => Promise<void>
}
export function InterviewCard({ interview onRefresh }: InterviewCardProps) {
)
}