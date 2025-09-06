

import { useState } from "react",
import { useJobApplications } from "@/hooks/useJobApplications",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Loader2, MessageSquare, ExternalLink } from 'lucide-react'
import { formatDistanceToNow } from "date-fns",

      default:
        return <Badge variant="outline">{status}</Badge>
    }
        <Card key={application.id}>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg">

              </CardTitle>
              {getStatusBadge(application.status)}
            </div>
            <p className="text-sm text-muted-foreground">
              Applied {formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {application.cover_letter && (
                <p className="text-sm text-muted-foreground line-clamp-2 mb-2">

                  {application.cover_letter}
                </p>
              )}

                  className="text-xs"
                  asChild
                >
                  <Link href={`/jobs/${application.job_id}`}>
                    <ExternalLink className="h-3 w-3 mr-1" /> View Job
                  </Link>
                </Button>

                <Button
                  variant="default"
=======
  const { applications, isLoading, error } = useJobApplications()
  const getStatusBadge = (status: ApplicationStatus,) => {
    switch (status) {
      case "new": return <Badge variant="secondary">New</Badge>
        return <Badge className="bg-red-100 text-red-800">Rejected</Badge>

import { useState } from "react",;
import { useJobApplications } from "@/hooks/useJobApplications",;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { Loader2, MessageSquare, ExternalLink } from 'lucide-react';
import { formatDistanceToNow } from "date-fns",;
import Link from "next/link",;
import { ApplicationStatus } from "@/types/jobs",;
                  className="text-xs"
                  variant="outline" 
                  size="sm" 
                  className="text-xs"
                  asChild>;
                  <Link href={`/jobs/${application && application.job_id}`}>;
                    <ExternalLink className="h-3 w-3 mr-1" /> View Job;
                  </Link>;
                </Button>;
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea

                  size="sm"
                  className="text-xs"
                  asChild>;
                  <Link href={`/messages?jobId=${application && application.job_id}`}>;
                    <MessageSquare className="h-3 w-3 mr-1" /> Contact Client;
                  </Link>;
                </Button>;
              </div>;
            </div>;
          </CardContent>;
        </Card>;
      ))}
<<<<<<< HEAD
