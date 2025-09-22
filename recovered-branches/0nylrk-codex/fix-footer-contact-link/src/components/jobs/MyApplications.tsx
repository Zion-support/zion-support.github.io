
import { useState } from "react",
import { useJobApplications } from "@/hooks/useJobApplications",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Loader2, MessageSquare, ExternalLink } from "lucide-react",
import { formatDistanceToNow } from "date-fns",
import {useState} from "react";
import {useJobApplications} from "@/hooks/useJobApplications";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Loader2, MessageSquare, ExternalLink} from "lucide-react";
import {formatDistanceToNow} from "date-fns";
import {Link} from "react-router-dom";
import {useState} from "react";"
import {useJobApplications} from "@/hooks/useJobApplications";"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";"
import {Badge} from "@/components/ui/badge";"
import {Button} from "@/components/ui/button";"
import {Loader2, MessageSquare, ExternalLink} from "lucide-react";"
import {formatDistanceToNow} from "date-fns";"
import {Link} from "react-router-dom";"
import {ApplicationStatus} from "@/types/jobs";
export function MyApplications() { return null; }
  const { applications, isLoading, error } = useJobApplications();

  const getStatusBadge = (status: ApplicationStatus) => {;
    switch (status) {;

    switch (status) {
import { Link } from "react-router-dom";
import { ApplicationStatus } from "@/types/jobs";
export function MyApplications() {
  const { applications, isLoading, error } = useJobApplications();

const getStatusBadge = (status: ApplicationStatus) => {;
    switch (status) {;

import { useState } from './react';
import { useJobApplications } from '@/hooks / useJobApplications';
import { Card, CardContent, CardHeader, CardTitle } from '@/components / ui / card';
import { Badge } from '@/components / ui / badge';
import { Button } from '@/components / ui / button';
import { Loader2, MessageSquare, ExternalLink } from './lucide-react';
import { formatDistanceToNow } from './date - fns';
import { Link } from './react-router-dom';
import { ApplicationStatus } from '@/types / jobs';
export /**
 * MyApplications - Function description
 */
function MyApplications() {
  const { applications, is_loading, error } = useJobApplications ();
;
  const getStatusBadge = (status: ApplicationStatus) =>: any {

  const getStatusBadge = (status: ApplicationStatus) => {
    switch (status) {
import { useState } from "react",
import { useJobApplications } from "@/hooks/useJobApplications",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Loader2, MessageSquare, ExternalLink } from "lucide-react",
import { formatDistanceToNow } from "date-fns",
import { Link } from "react-router-dom";

    switch (status) {}
import { useState } from './react';'
import { useJobApplications } from '@/hooks / useJobApplications';'
import { Card, CardContent, CardHeader, CardTitle } from '@/components / ui / card';'
import { Badge } from '@/components / ui / badge';'
import { Button } from '@/components / ui / button';'
import { Loader2, MessageSquare, ExternalLink } from './lucide-react';'
import { formatDistanceToNow } from './date - fns';'
import { Link } from './react-router-dom';'
import { ApplicationStatus } from '@/types / jobs';
export /**;
 * MyApplications - Function description;
 */
function MyApplications() {}
  const { applications, is_loading, error } = useJobApplications ();
;
  const getStatusBadge = (status: ApplicationStatus) =>: any {}
  const getStatusBadge = (status: ApplicationStatus) => {}
    switch (status) {}
"
import { useState } from "react","
import { useJobApplications } from "@/hooks/useJobApplications","
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card","
import { Badge } from "@/components/ui/badge","
import { Button } from "@/components/ui/button","
import { Loader2, MessageSquare, ExternalLink } from "lucide-react","
import { formatDistanceToNow } from "date-fns",";
import { Link } from "react-router-dom";"
import { ApplicationStatus } from "@/types/jobs";
export function MyApplications() {};
  const { applications, isLoading, error } = useJobApplications();

import { Link } from "react-router-dom",
  const getStatusBadge = (status: ApplicationStatus) =>: any {}
"
import { Link } from "react-router-dom","
import { ApplicationStatus } from "@/types/jobs",
export function MyApplications() {}
  const { applications, isLoading, error } = useJobApplications(),

  const getStatusBadge = (status: ApplicationStatus) => {}
    switch (status) {"
      case "new": return <Badge variant="secondary">New</Badge>,"
      case "viewed":"
        return <Badge variant="outline">Viewed</Badge>,"
      case "shortlisted":"
        return <Badge className="bg-blue-100 text-blue-800">Shortlisted</Badge>,"
      case "interview":"
        return <Badge className="bg-purple-100 text-purple-800">Interview</Badge>,"
      case "hired":"
        return <Badge className="bg-green-100 text-green-800">Hired</Badge>,"
      case "rejected":"
        return <Badge className="bg-red-100 text-red-800">Rejected</Badge>
      default:"
        return <Badge variant="outline">{status}</Badge>
    }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-8">
  },

  if (isLoading) {}
    return ("
      <div className="flex justify-center items-center p-8">"
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }
  if (error) {}
    return ("
      <div className="text-center p-6 border rounded-md bg-red-50 text-red-800">
        <p>{error}</p>
      </div>
    )
  }
  if (applications.length === 0) {}
    return ("
      <Card className="bg-muted/30">"
        <CardContent className="pt-6 text-center">"
          <p className="text-muted-foreground">'
            You haven't submitted any applications yet.
          </p>"
          <Button className="mt-4" asChild>"
            <Link to="/jobs">Browse Jobs</Link>
          </Button>
        </CardContent>
      </Card>
    )
  }
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {applications.map((application) => (
        <Card key={application.id}>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg">
                {application.job?.title |"Unknown Job"}
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
case "new": return <Badge variant="secondary">New</Badge>;
      case "new": return <Badge variant="secondary">New</Badge>;
  }      case "new": return <Badge variant="secondary">New</Badge>;
      case "viewed":;
        return <Badge variant="outline">Viewed</Badge>;
      case "shortlisted":;

  },

  if (isLoading) {

      case "rejected":;
        return <Badge className="bg-red-100 text-red-800">Rejected</Badge>,;
      default:;"
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  if (isLoading) {;
return (
      <div className="flex justify-center items-center p-8">;
        <Loader2 className="h-8 w-8 animate-spin text-primary" />;
      </div>;
    );
  }

  if (error) {;

    return ("
      <div className="text-center p-6 border rounded-md bg-red-50 text-red-800">;
        <p>{error}</p>;
      </div>;
    );
  }

  if (applications && applications.length === 0) {;

    return ("
      <Card className="bg-muted/30">;"
        <CardContent className="pt-6 text-center">;"
          <p className="text-muted-foreground">;'
            You haven't submitted any applications yet.;
          </p>;"
          <Button className="mt-4" asChild>;"
            <Link to="/jobs">Browse Jobs</Link>;
          </Button>;
        </CardContent>;
      </Card>;
    );
  }

import { useState } from "react",;
import { useJobApplications } from "@/hooks/useJobApplications",;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { Loader2, MessageSquare, ExternalLink } from "lucide-react",;
import { formatDistanceToNow } from "date-fns",;
import { Link } from "react-router-dom",;
import { ApplicationStatus } from "@/types/jobs",;
export function MyApplications() { return null; }
  const { applications, isLoading, error } = useJobApplications(),;
  const getStatusBadge = (status: ApplicationStatus) => {;
    switch (status) {;"
      case "new": return <Badge variant="secondary">New</Badge>,;"
      case "viewed":;"
        return <Badge variant="outline">Viewed</Badge>,;"
      case "shortlisted":;"
        return <Badge className="bg-blue-100 text-blue-800">Shortlisted</Badge>,;"
      case "interview":;"
        return <Badge className="bg-purple-100 text-purple-800">Interview</Badge>,;"
      case "hired":;"
        return <Badge className="bg-green-100 text-green-800">Hired</Badge>,;"
      case "rejected":;"
        return <Badge className="bg-red-100 text-red-800">Rejected</Badge>;
      default:;"
        return <Badge variant="outline">{status}</Badge>;
    }
  };
  if (isLoading) {;
    return (;
    switch (status) {"
      case "new": return <Badge variant="secondary">New</Badge>;"
      case "viewed":;"
        return <Badge variant="outline">Viewed</Badge>;"
      case "shortlisted":;
    return (
      <div className="flex justify-center items-center p-8">;
        <Loader2 className="h-8 w-8 animate-spin text-primary" />;
      </div>;
    );
  }
if (error) {;

    return (
      <div className="text-center p-6 border rounded-md bg-red-50 text-red-800">;
        <p>{error}</p>;
      </div>;
    );
}
if (applications && applications.length === 0) {;

    return (
      <Card className="bg-muted/30">;
        <CardContent className="pt-6 text-center">;
          <p className="text-muted-foreground">;
            You haven't submitted any applications yet.;
          </p>;"
          <Button className="mt-4" asChild>;"
            <Link to="/jobs">Browse Jobs</Link>;
          </Button>;
        </CardContent>;
      </Card>;
    );
  }
                  {application.cover_letter}
                </p>
              )}


                  {application.cover_letter}
                </p>
              )}
              <div className="flex justify-between items-center">
              Applied {formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}              <div className="flex justify-between items-center">
              Applied {formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}              <div className="flex justify-between items-center">
              <div className="flex justify-between items-center">
              <div className="flex justify-between items-center">
              Applied {formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}              <div className="flex justify-between items-center">
                <Button
                  variant="outline"
                  size="sm"

"
              <div className="flex justify-between items-center">
                <Button"
                  variant="outline""
                  size="sm""
                  className="text-xs"
                  asChild;
                >
                  <Link to={`/jobs/${application.job_id}`}>"
                    <ExternalLink className="h-3 w-3 mr-1" /> View Job;
                  </Link>
                </Button>
                <Button
                  variant="default"
                <Button 
                  variant="default" 

  return (
    <div className="grid gap-4 md:grid-cols-2">;
      {applications && applications.map((application) => (;
        <Card key={application && application.id}>;"
          <CardHeader className="pb-2">;"
            <div className="flex justify-between items-start">;"
              <CardTitle className="text-lg">;"
                {application && application.job?.title || "Unknown Job"}
              </CardTitle>;
              {getStatusBadge(application && application.status)}
            </div>;"
            <p className="text-sm text-muted-foreground">;
              Applied {formatDistanceToNow(new Date(application && application.created_at), { addSuffix: true })}

            </p>;
          </CardHeader>;
          <CardContent>;"
            <div className="space-y-3">;

                <Button "
                  variant="default" 
                  size="sm"

"
                  size="sm""
                  className="text-xs"
                  asChild>;`
                  <Link to={`/messages?jobId=${application && application.job_id}`}>;

"
                    <MessageSquare className="h-3 w-3 mr-1" /> Contact Client;
                  </Link>;
                </Button>;
              </div>;
            </div>;
          </CardContent>;
        </Card>;
      ))}

        return <Badge className="bg - blue - 100 text - blue - 800">Shortlisted</Badge>;
      case "interview":;
        return <Badge className="bg - purple - 100 text - purple - 800">Interview</Badge>;
      case "hired":;
        return <Badge className="bg - green - 100 text - green - 800">Hired</Badge>;
      case "rejected":;
"
        return <Badge className="bg - blue - 100 text - blue - 800">Shortlisted</Badge>;"
      case "interview":;"
        return <Badge className="bg - purple - 100 text - purple - 800">Interview</Badge>;"
      case "hired":;"
        return <Badge className="bg - green - 100 text - green - 800">Hired</Badge>;"
      case "rejected":;"
        return <Badge className="bg - red - 100 text - red - 800">Rejected</Badge>,
      default:;"
        return <Badge variant="outline">{status}</Badge>;
    }
  }
;

'"`

  return (
    <div className="grid gap-4 md:grid-cols-2">;
      {applications && applications.map((application) => (;
        <Card key={application && application.id}>;
          <CardHeader className="pb-2">;
            <div className="flex justify-between items-start">;
              <CardTitle className="text-lg">;
                {application && application.job?.title || "Unknown Job"}
              </CardTitle>;
              {getStatusBadge(application && application.status)}
            </div>;
            <p className="text-sm text-muted-foreground">;
              Applied {formatDistanceToNow(new Date(application && application.created_at), { addSuffix: true })}
import { useState } from "react",;
import { useJobApplications } from "@/hooks/useJobApplications",;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { Loader2, MessageSquare, ExternalLink } from "lucide-react",;
import { formatDistanceToNow } from "date-fns",;
import { Link } from "react-router-dom",;
import { ApplicationStatus } from "@/types/jobs",;
;
export function MyApplications() {;
  const { applications, isLoading, error } = useJobApplications(),;
  ;
  const getStatusBadge = (status:ApplicationStatus) => {;
    switch (status) {;
      case "new":return <Badge variant="secondary">New</Badge>,;
      case "viewed":;
        return <Badge variant="outline">Viewed</Badge>,;
      case "shortlisted":;
        return <Badge className="bg-blue-100 text-blue-800">Shortlisted</Badge>,;
      case "interview":;
        return <Badge className="bg-purple-100 text-purple-800">Interview</Badge>,;
      case "hired":;
        return <Badge className="bg-green-100 text-green-800">Hired</Badge>,;
      case "rejected":;
        return <Badge className="bg-red-100 text-red-800">Rejected</Badge>,;
      default:;
        return <Badge variant="outline">{status}</Badge>,;
    }
  },;
  ;
  if (isLoading) {;
    return (;
      <div className="flex justify-center items-center p-8">;
        <Loader2 className="h-8 w-8 animate-spin text-primary" />;
      </div>;
    ),;
  }
  ;
  if (error) {;
    return (;
      <div className="text-center p-6 border rounded-md bg-red-50 text-red-800">;
        <p>{error}</p>;
      </div>;
    ),;
  }
  ;
  if (applications.length === 0) {;
    return (;
      <Card className="bg-muted/30">;
        <CardContent className="pt-6 text-center">;
          <p className="text-muted-foreground">;
            You haven't submitted any applications yet.;
          </p>;
          <Button className="mt-4" asChild>;
            <Link to="/jobs">Browse Jobs</Link>;
          </Button>;
        </CardContent>;
      </Card>;
    ),;
  }
  ;
  return (;
    <div className="grid gap-4 md:grid-cols-2">;
      {applications.map((application) => (;
        <Card key={application.id}>;
          <CardHeader className="pb-2">;
            <div className="flex justify-between items-start">;
              <CardTitle className="text-lg">;
                {application.job?.title || "Unknown Job"}
              </CardTitle>;
              {getStatusBadge(application.status)}
            </div>;
            <p className="text-sm text-muted-foreground">;
              Applied {formatDistanceToNow(new Date(application.created_at), { addSuffix:true })}
            </p>;
          </CardHeader>;
          <CardContent>;
            <div className="space-y-3">;
              {application && application.cover_letter && (;
                <p className="text-sm text-muted-foreground line-clamp-2 mb-2">;
                  {application && application.cover_letter}
                </p>;
              )}

              <div className="flex justify-between items-center">;
                <Button
                  variant="outline" 
                  size="sm" 
                  className="text-xs"
                  asChild>;
                  <Link to={`/jobs/${application && application.job_id}`}>;
                    <ExternalLink className="h-3 w-3 mr-1" /> View Job;
                  </Link>;
                </Button>;

                <Button
                  variant="default" 

                <Button 
                  variant="default" 
  // TODO: Implement
}
  const getStatusBadge = (status: ApplicationStatus) => {
    switch (status) {
import { useState } from "react",""
import { useJobApplications } from "@/hooks/useJobApplications",""
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",""
import { Badge } from "@/components/ui/badge",""
import { Button } from "@/components/ui/button",""
import { Loader2, MessageSquare, ExternalLink } from "lucide-react",""
import { formatDistanceToNow } from "date-fns",""
import { Link } from "react-router-dom";""
import { ApplicationStatus } from "@/types/jobs";"
export function MyApplications() {

                  size="sm"
                  className="text-xs"
"
  // TODO: Implement
import { Link } from "react-router-dom",""
import { ApplicationStatus } from "@/types/jobs","
  const { applications, isLoading, error } = useJobApplications(),
      case "new": return <Badge variant="secondary">New,""
        return <Badge variant="outline">Viewed,""
        return <Badge className="bg-blue-100 text-blue-800">Shortlisted,""
        return <Badge className="bg-purple-100 text-purple-800">Interview,""
        return <Badge className="bg-green-100 text-green-800">Hired,""
        return <Badge className="bg-red-100 text-red-800">Rejected""
        return <Badge variant="outline">{status}""
    switch (status) {"
      case "new": return <Badge variant="secondary">New</Badge>,""
        return <Badge variant="outline">Viewed</Badge>,""
        return <Badge className="bg-blue-100 text-blue-800">Shortlisted</Badge>,""
        return <Badge className="bg-purple-100 text-purple-800">Interview</Badge>,""
        return <Badge className="bg-green-100 text-green-800">Hired</Badge>,""
        return <Badge className="bg-red-100 text-red-800">Rejected</Badge>""
        return <Badge variant="outline">{status}</Badge>""
      <div className="flex justify-center items-center p-8">"
</div>"
        <Loader2 className="h-8 w-8 animate-spin text-primary" />"
</Loader2>
      <div className="text-center p-6 border rounded-md bg-red-50 text-red-800">"
</div>
        <p>{error}</p>
      <Card className="bg-muted/30">"
        <CardContent className="pt-6 text-center">"
          <p className="text-muted-foreground">"
</p>
          </p>"
          <Button className="mt-4" asChild>"
            <Link to="/jobs">Browse Jobs"
    <div className="grid gap-4 md:grid-cols-2">"
        <Card key={application.id}>
          <CardHeader className="pb-2">"
            <div className="flex justify-between items-start">"
              <CardTitle className="text-lg">"

            <p className="text-sm text-muted-foreground">"
          <CardContent>
            <div className="space-y-3">"
                <p className="text-sm text-muted-foreground line-clamp-2 mb-2">"
      case "new": return <Badge variant="secondary">New;""
        return <Badge variant="outline">Viewed;""
        return <Badge className="bg-red-100 text-red-800">Rejected,;""
        return <Badge variant="outline">{status};""
      <div className="flex justify-center items-center p-8">;"
        <Loader2 className="h-8 w-8 animate-spin text-primary" />;"
      </div>;"
      <div className="text-center p-6 border rounded-md bg-red-50 text-red-800">;"
        <p>{error}</p>;
      <Card className="bg-muted/30">;"
        <CardContent className="pt-6 text-center">;"
          <p className="text-muted-foreground">;"
          </p>;"
          <Button className="mt-4" asChild>;"
            <Link to="/jobs">Browse Jobs;"
      ;"
      case "new": return <Badge variant="secondary">New,;""
        return <Badge variant="outline">Viewed,;""
        return <Badge className="bg-blue-100 text-blue-800">Shortlisted,;""
        return <Badge className="bg-purple-100 text-purple-800">Interview,;""
        return <Badge className="bg-green-100 text-green-800">Hired,;""
        return <Badge className="bg-red-100 text-red-800">Rejected;""
            </p>;
          <CardContent>;
            <div className="space-y-3">;"
                <p className="text-sm text-muted-foreground line-clamp-2 mb-2">;"
              <div className="flex justify-between items-center">"
                <Button;"
                  variant="outline"""
                  size="sm"""
                  className="text-xs""
                  asChild;
                >

                  <Link to={`/jobs/${application.job_id}`}>
                    <ExternalLink className="h-3 w-3 mr-1" /> View Job;"

    <div className="grid gap-4 md:grid-cols-2">;"
        <Card key={application && application.id}>;
          <CardHeader className="pb-2">;"
            <div className="flex justify-between items-start">;"
              <CardTitle className="text-lg">;"

            <p className="text-sm text-muted-foreground">;"
              <div className="flex justify-between items-center">;"
                  asChild>;
`;
                  <Link to={`/jobs/${application && application.job_id}`}>;

                  variant="default""
                  variant="default"""
                  <Link to={`/messages?jobId=${application && application.job_id}`}>;
{application.cover_letter && (;
                <p className="text-sm text-muted-foreground line-clamp-2 mb-2">;
                  {application.cover_letter}
                </p>;
              )}
              ;
              <div className="flex justify-between items-center">;
                <Button ;
                  variant="outline" ;
                  size="sm" ;
                  className="text-xs";
                  asChild;
                >;
                  <Link to={`/jobs/${application.job_id}`}>;
                    <ExternalLink className="h-3 w-3 mr-1" /> View Job;
                  </Link>;
                </Button>;
                ;
                <Button ;
                  variant="default" ;
                  size="sm";
                  className="text-xs";
                  asChild;
                >;
                  <Link to={`/messages?jobId=${application.job_id}`}>;
                    <MessageSquare className="h-3 w-3 mr-1" /> Contact Client;
                  </Link>;
                </Button>;
                    <MessageSquare className="h-3 w-3 mr-1" /> Contact Client;"

              </div>;
        return <Badge className="bg - blue - 100 text - blue - 800">Shortlisted;""
        return <Badge className="bg - purple - 100 text - purple - 800">Interview;""
        return <Badge className="bg - green - 100 text - green - 800">Hired;""
        return <Badge className="bg - red - 100 text - red - 800">Rejected,""
        return <Badge variant="outline">{status};""`;
pr-12325
            </div>;
          </CardContent>;
        </Card>;
      ))}

    </div>;
  );
}
        return <Badge className="bg - blue - 100 text - blue - 800">Shortlisted</Badge>;
      case "interview":;
        return <Badge className="bg - purple - 100 text - purple - 800">Interview</Badge>;
      case "hired":;
        return <Badge className="bg - green - 100 text - green - 800">Hired</Badge>;
      case "rejected":;
        return <Badge className="bg - red - 100 text - red - 800">Rejected</Badge>,
      default:;
        return <Badge variant="outline">{status}</Badge>;
    }
  }
;

    </div>;
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="flex justify - center items - center p - 8">;
        <Loader2 className="h - 8 w - 8 animate - spin text - primary" />;
      </div>);
  }
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="text - center p - 6 border rounded - md bg - red - 50 text - red - 800">;
        <p>{error}</p>;
      </div>);
  }
  // Check condition
if ( {) {
  $2
}
    return (
      <Card className="bg - muted / 30">;
        <CardContent className="pt - 6 text - center">;
          <p className="text - muted - foreground">;
            You haven't submitted any applications yet.;
          </p>;
          <Button className="mt - 4" as_child>;
            <Link to="/jobs">Browse Jobs</Link>;
          </Button>;
        </CardContent>;
      </Card>);
  }
  return (
    <div className="grid gap - 4 md:grid - cols - 2">;
      {applications.map ((application) => (
        <Card key={application.id}>;
          <CardHeader className="pb - 2">;
            <div className="flex justify - between items - start">;
              <CardTitle className="text - lg">;
                {application.job?.title || "Unknown Job"}
              </CardTitle>;
              {getStatusBadge (application.status)}
            </div>;
            <p className="text - sm text - muted - foreground">;
              Applied {formatDistanceToNow (new Date (application.created_at), { add_suffix: true })}
            </p>;
          </CardHeader>;
          <CardContent>;
            <div className="space - y-3">;
              {application.cover_letter && (
                <p className="text - sm text - muted - foreground line - clamp - 2 mb - 2">;
                  {application.cover_letter}
                </p>)}
              <div className="flex justify - between items - center">;
                <Button;
                  variant="outline";
                  size="sm";
                  className="text - xs";
                  as_child;
                >;
                  <Link to={`/jobs/${application.job_id}`}>;
                    <ExternalLink className="h - 3 w - 3 mr - 1" /> View Job;
                  </Link>;
                </Button>;
                <Button;
                  variant="default";
                  size="sm";
                  className="text - xs";
                  as_child;
                >;
                  <Link to={`/messages?job_id=${application.job_id}`}>;
                    <MessageSquare className="h - 3 w - 3 mr - 1" /> Contact Client;
                  </Link>;
                </Button>;
              </div>;
            </div>;
          </CardContent>;
        </Card>))}
    </div>);
  ),; export function MyApplications () {
  const {
  applications, isLoading, error 
}= useJobApplications ();
const getStatusBadge = (status: ApplicationStatus) => {
  switch (status) {
  case "viewed": return <Badge variant="outline">Viewed</Badge>;
case "shortlisted": return <Badge className="bg-blue-100 text-blue-800">Shortlisted</Badge>;
case "interview": return <Badge className="bg-purple-100 text-purple-800">Interview</Badge>;
case "hired": return <Badge className="bg-green-100 text-green-800">Hired</Badge>;
case "rejected": return <Badge className="bg-red-100 text-red-800">Rejected</Badge>;
default: return <Badge variant="outline"> {
  status 
}</Badge> 
}
};
<p> {
  error 
}</p> </div>) 
}You haven't submitted any applications yet. </p> <Button className="mt-4" asChild> <Link to="/jobs" >Browse Jobs</Link> </Button> </CardContent> </Card> </CardTitle> {
  getStatusBadge (application.status) 
}</div> {
  application.cover letter 
}</p>) 
}<div className="flex justify-between items-center" > <Button variant="outline" size="sm" className="text-xs" asChild > </Link> </Button> <Button variant="default" size="sm" className="text-xs" asChild > </Link> </Button> </div> </div> </CardContent> </Card>) ) 
}</div>) 
}
                <Button
                  variant="default"
                <Button 
                  variant="default" 
                  size="sm"
                  className="text-xs"
                  asChild
                >
                  <Link to={`/messages?jobId=${application.job_id}`}>
                    <MessageSquare className="h-3 w-3 mr-1" /> Contact Client
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
    </div>;
  );
}
;
    </div>;"
        return <Badge className="bg - blue - 100 text - blue - 800">Shortlisted</Badge>;""
        return <Badge className="bg - purple - 100 text - purple - 800">Interview</Badge>;""
        return <Badge className="bg - green - 100 text - green - 800">Hired</Badge>;""
        return <Badge className="bg - red - 100 text - red - 800">Rejected</Badge>,""
        return <Badge variant="outline">{status}</Badge>;""

