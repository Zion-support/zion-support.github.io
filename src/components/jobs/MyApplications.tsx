
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react",
import { useJobApplications } from "@/hooks/useJobApplications",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Loader2, MessageSquare, ExternalLink } from 'lucide-react'
import { formatDistanceToNow } from "date-fns",
import Link from "next/link",
import { ApplicationStatus } from "@/types/jobs",
=======
import { useState } from &quot;react&quot;;
import { useJobApplications } from &quot;@/hooks/useJobApplications&quot;;
import { Card, CardContent, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Loader2, MessageSquare, ExternalLink } from 'lucide-react'
import { formatDistanceToNow } from &quot;date-fns&quot;;
import Link from &quot;next/link&quot;;
import { ApplicationStatus } from &quot;@/types/jobs&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export function MyApplications() {
  const { applications, isLoading, error } = useJobApplications(),
  
  const getStatusBadge = (status: ApplicationStatus) => {
    switch (status) {
<<<<<<< HEAD
      case "new": return <Badge variant="secondary">New</Badge>,
=======
import Link from "next/link";

export function MyApplications() {_const { applications, _isLoading, _error} = useJobApplications();
  
  const _getStatusBadge = (_status: ApplicationStatus) => {_switch (status) {
      case "new":
        return <Badge variant="secondary">New</Badge>;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      case "viewed":
        return <Badge variant="outline">Viewed</Badge>,
      case "shortlisted":
        return <Badge className="bg-blue-100 text-blue-800">Shortlisted</Badge>,
      case "interview":
        return <Badge className="bg-purple-100 text-purple-800">Interview</Badge>,
      case "hired":
        return <Badge className="bg-green-100 text-green-800">Hired</Badge>,
      case "rejected":
        return <Badge className="bg-red-100 text-red-800">Rejected</Badge>,
      default:
        return <Badge variant="outline">{status}</Badge>
=======
      case &quot;new&quot;:
        return <Badge variant=&quot;secondary&quot;>New</Badge>;
      case &quot;viewed&quot;:
        return <Badge variant=&quot;outline&quot;>Viewed</Badge>;
      case &quot;shortlisted&quot;:
        return <Badge className=&quot;bg-blue-100 text-blue-800&quot;>Shortlisted</Badge>;
      case &quot;interview&quot;:
        return <Badge className=&quot;bg-purple-100 text-purple-800&quot;>Interview</Badge>;
      case &quot;hired&quot;:
        return <Badge className=&quot;bg-green-100 text-green-800&quot;>Hired</Badge>;
      case &quot;rejected&quot;:
        return <Badge className=&quot;bg-red-100 text-red-800&quot;>Rejected</Badge>;
      default:
        return <Badge variant=&quot;outline&quot;>{status}</Badge>;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },
  
<<<<<<< HEAD
  if (isLoading) {
    return (
      <div className=&quot;flex justify-center items-center p-8&quot;>
        <Loader2 className=&quot;h-8 w-8 animate-spin text-primary&quot; />
      </div>
    )
  }
  
  if (error) {
    return (
      <div className=&quot;text-center p-6 border rounded-md bg-red-50 text-red-800&quot;>
=======
  if (isLoading) {_return (
      <div className="flex justify-center items-center p-8">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );}
  
  if (error) {_return (
      <div className="text-center p-6 border rounded-md bg-red-50 text-red-800">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        <p>{error}</p>
      </div>
    )
  }
  
<<<<<<< HEAD
  if (applications.length === 0) {
    return (
      <Card className=&quot;bg-muted/30&quot;>
        <CardContent className=&quot;pt-6 text-center&quot;>
          <p className=&quot;text-muted-foreground&quot;>
=======
  if (applications.length === 0) {_return (
      <Card className="bg-muted/30">
        <CardContent className="pt-6 text-center">
          <p className="text-muted-foreground">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            You haven't submitted any applications yet.
          </p>
          <Button className=&quot;mt-4&quot; asChild>
            <Link href=&quot;/jobs&quot;>Browse Jobs</Link>
          </Button>
        </CardContent>
      </Card>
<<<<<<< HEAD
    )
  }
  
  return (
    <div className=&quot;grid gap-4 md:grid-cols-2&quot;>
      {applications.map((application) => (
        <Card key={application.id}>
          <CardHeader className=&quot;pb-2&quot;>
            <div className=&quot;flex justify-between items-start&quot;>
              <CardTitle className=&quot;text-lg&quot;>
                {application.job?.title || &quot;Unknown Job&quot;}
=======
    );}
  
  return (_<div className="grid gap-4 md:grid-cols-2">
      {_applications.map((application) => (
        <Card key={application.id}>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg">
                {_application.job?.title || "Unknown Job"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </CardTitle>
              {_getStatusBadge(application.status)}
            </div>
<<<<<<< HEAD
            <p className=&quot;text-sm text-muted-foreground&quot;>
              Applied {formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}
            </p>
          </CardHeader>
          <CardContent>
            <div className=&quot;space-y-3&quot;>
              {application.cover_letter && (
                <p className=&quot;text-sm text-muted-foreground line-clamp-2 mb-2&quot;>
=======
            <p className="text-sm text-muted-foreground">
              Applied {_formatDistanceToNow(new Date(application.created_at), _{ addSuffix: true})}
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {_application.cover_letter && (
                <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  {application.cover_letter}
                </p>
              )}
              
              <div className=&quot;flex justify-between items-center&quot;>
                <Button 
                  variant=&quot;outline&quot; 
                  size=&quot;sm&quot; 
                  className=&quot;text-xs&quot;
                  asChild
                >
<<<<<<< HEAD
                  <Link href={`/jobs/${application.job_id}`}>
                    <ExternalLink className=&quot;h-3 w-3 mr-1&quot; /> View Job
=======
                  <Link href={_`/jobs/${application.job_id}`}>
                    <ExternalLink className="h-3 w-3 mr-1" /> View Job
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </Link>
                </Button>
                
                <Button 
                  variant=&quot;default&quot; 
                  size=&quot;sm&quot;
                  className=&quot;text-xs&quot;
                  asChild
                >
<<<<<<< HEAD
                  <Link href={`/messages?jobId=${application.job_id}`}>
                    <MessageSquare className=&quot;h-3 w-3 mr-1&quot; /> Contact Client
=======
                  <Link href={_`/messages?jobId=${application.job_id}`}>
                    <MessageSquare className="h-3 w-3 mr-1" /> Contact Client
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
