
import {useState} from "react";
import {useJobApplications} from "@/hooks/useJobApplications";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Loader2, MessageSquare, ExternalLink} from 'lucide-react'
import {formatDistanceToNow} from "date-fns";
import Link from "next/link";
import {ApplicationStatus} from "@/types/jobs";
export function MyApplications() {
  const { applications, isLoading, error } = useJobApplications();
  
  const getStatusBadge = (status: ApplicationStatus) => {
    switch (status) {
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      case "new": return <Badge variant="secondary">New</Badge>;
        return <Badge className="bg-red-100 text-red-800">Rejected</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
