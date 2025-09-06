
import React, { useState } from "react",
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { Interview } from "@/types/interview",
import { useAuth } from "@/hooks/useAuth",
import { useInterviews } from "@/hooks/useInterviews",
import { format, formatDistanceToNow, isPast, parseISO } from "date-fns",
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog",
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",
import { Clock, ExternalLink, MessageSquare, Video, X } from 'lucide-react'
interface InterviewCardProps {

  interview: Interview

  onRefresh: () => Promise<void>
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
