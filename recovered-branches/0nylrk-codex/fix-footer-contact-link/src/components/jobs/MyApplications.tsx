<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


import { useState } from "react",
import { useJobApplications } from "@/hooks/useJobApplications",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Loader2, MessageSquare, ExternalLink } from "lucide-react",
import { formatDistanceToNow } from "date-fns",
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {useState} from "react";
import {useJobApplications} from "@/hooks/useJobApplications";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Loader2, MessageSquare, ExternalLink} from "lucide-react";
import {formatDistanceToNow} from "date-fns";
import {Link} from "react-router-dom";
=======
import {useState} from "react";"
import {useJobApplications} from "@/hooks/useJobApplications";"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";"
import {Badge} from "@/components/ui/badge";"
import {Button} from "@/components/ui/button";"
import {Loader2, MessageSquare, ExternalLink} from "lucide-react";"
import {formatDistanceToNow} from "date-fns";"
import {Link} from "react-router-dom";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import {ApplicationStatus} from "@/types/jobs";
export function MyApplications() { return null; }
  const { applications, isLoading, error } = useJobApplications();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

  const getStatusBadge = (status: ApplicationStatus) => {;
    switch (status) {;

    switch (status) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
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
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { Link } from "react-router-dom";
import { ApplicationStatus } from "@/types/jobs";
export function MyApplications() {
  const { applications, isLoading, error } = useJobApplications();

<<<<<<< HEAD
  const getStatusBadge = (status: ApplicationStatus) => {;
    switch (status) {;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useState } from "react",
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { useJobApplications } from "@/hooks/useJobApplications",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Loader2, MessageSquare, ExternalLink } from "lucide-react",
import { formatDistanceToNow } from "date-fns",
import { Link } from "react-router-dom";
=======

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
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { ApplicationStatus } from "@/types/jobs";
export function MyApplications() {};
  const { applications, isLoading, error } = useJobApplications();
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

  const getStatusBadge = (status: ApplicationStatus) => {;
    switch (status) {;
'
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
<<<<<<< HEAD
  const getStatusBadge = (status: ApplicationStatus) =>: any {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

import { Link } from "react-router-dom",
=======
  const getStatusBadge = (status: ApplicationStatus) =>: any {}
"
import { Link } from "react-router-dom","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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

<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-8">
=======
  },
  
  if (isLoading) {}
    return ("
      <div className="flex justify-center items-center p-8">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  }
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
  }
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      case "new": return <Badge variant="secondary">New</Badge>;
<<<<<<< HEAD
=======
  }      case "new": return <Badge variant="secondary">New</Badge>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  }      case "new": return <Badge variant="secondary">New</Badge>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      case "new": return <Badge variant="secondary">New</Badge>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  }      case "new": return <Badge variant="secondary">New</Badge>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      case "viewed":;
        return <Badge variant="outline">Viewed</Badge>;
      case "shortlisted":;

  },

  if (isLoading) {
<<<<<<< HEAD
=======
  };
";
      case "rejected":;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
      case "rejected":;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        return <Badge className="bg-red-100 text-red-800">Rejected</Badge>,;
      default:;"
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  if (isLoading) {;
<<<<<<< HEAD
    return (
      <div className="flex justify-center items-center p-8">;
=======

    return ("
      <div className="flex justify-center items-center p-8">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======import { useState } from "react",;
=======


=======
{application.cover_letter}
                </p>
              )}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { useState } from "react",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useJobApplications } from "@/hooks/useJobApplications",;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { Loader2, MessageSquare, ExternalLink } from "lucide-react",;
import { formatDistanceToNow } from "date-fns",;
import { Link } from "react-router-dom",;
=======




"
import { useState } from "react",;"
import { useJobApplications } from "@/hooks/useJobApplications",;"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;"
import { Badge } from "@/components/ui/badge",;"
import { Button } from "@/components/ui/button",;"
import { Loader2, MessageSquare, ExternalLink } from "lucide-react",;"
import { formatDistanceToNow } from "date-fns",;"
import { Link } from "react-router-dom",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    return (
      <div className="flex justify-center items-center p-8">;
        <Loader2 className="h-8 w-8 animate-spin text-primary" />;
      </div>;
    );
  }
<<<<<<< HEAD


  if (error) {;

    return (
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    return ("
      <div className="flex justify-center items-center p-8">;"
        <Loader2 className="h-8 w-8 animate-spin text-primary" />;
      </div>;
    );
  }"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      <div className="text-center p-6 border rounded-md bg-red-50 text-red-800">;
        <p>{error}</p>;
      </div>;
    );
<<<<<<< HEAD
  }
<<<<<<< HEAD


  if (applications && applications.length === 0) {;

    return (
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      <Card className="bg-muted/30">;
        <CardContent className="pt-6 text-center">;
          <p className="text-muted-foreground">;
=======
  }"
      <Card className="bg-muted/30">;"
        <CardContent className="pt-6 text-center">;"
          <p className="text-muted-foreground">;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            You haven't submitted any applications yet.;
          </p>;"
          <Button className="mt-4" asChild>;"
            <Link to="/jobs">Browse Jobs</Link>;
          </Button>;
        </CardContent>;
      </Card>;
    );
  }
<<<<<<< HEAD




>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                  {application.cover_letter}
                </p>
              )}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
              </CardTitle>
              {getStatusBadge(application.status)}
            </div>"
            <p className="text-sm text-muted-foreground">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              Applied {formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}
=======
              Applied {formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}
            </p>;
          </CardHeader>;
          <CardContent>;
            <div className="space-y-3">;
              {application.cover_letter && (;
                <p className="text-sm text-muted-foreground line-clamp-2 mb-2">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

                  {application.cover_letter}
                </p>
              )}
<<<<<<< HEAD
              
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              <div className="flex justify-between items-center">
=======
              Applied {formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}              <div className="flex justify-between items-center">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
              Applied {formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}              <div className="flex justify-between items-center">
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
              <div className="flex justify-between items-center">
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
              <div className="flex justify-between items-center">
              Applied {formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}              <div className="flex justify-between items-center">
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                <Button
                  variant="outline"
                  size="sm"
=======


"
              <div className="flex justify-between items-center">
                <Button"
                  variant="outline""
                  size="sm""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  className="text-xs"
                  asChild;
                >
                  <Link to={`/jobs/${application.job_id}`}>"
                    <ExternalLink className="h-3 w-3 mr-1" /> View Job;
                  </Link>
                </Button>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                <Button
                  variant="default"
                <Button 
                  variant="default" 
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

  return (
=======





  return ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            </p>;
          </CardHeader>;
          <CardContent>;"
            <div className="space-y-3">;
<<<<<<< HEAD
=======

              {application && application.cover_letter && (;"
                <p className="text-sm text-muted-foreground line-clamp-2 mb-2">;
                  {application && application.cover_letter}
                </p>;
              )}
"
              <div className="flex justify-between items-center">;
                <Button"
                  variant="outline" "
                  size="sm" "
                  className="text-xs"
                  asChild>;`
                  <Link to={`/jobs/${application && application.job_id}`}>;"
                    <ExternalLink className="h-3 w-3 mr-1" /> View Job;
                  </Link>;
                </Button>;

                <Button"
                  variant="default" 

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934




                <Button "
                  variant="default" 
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  size="sm"
=======


"
                  size="sm""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD

    </div>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        return <Badge className="bg - blue - 100 text - blue - 800">Shortlisted</Badge>;
      case "interview":;
        return <Badge className="bg - purple - 100 text - purple - 800">Interview</Badge>;
      case "hired":;
        return <Badge className="bg - green - 100 text - green - 800">Hired</Badge>;
      case "rejected":;
=======
"
        return <Badge className="bg - blue - 100 text - blue - 800">Shortlisted</Badge>;"
      case "interview":;"
        return <Badge className="bg - purple - 100 text - purple - 800">Interview</Badge>;"
      case "hired":;"
        return <Badge className="bg - green - 100 text - green - 800">Hired</Badge>;"
      case "rejected":;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        return <Badge className="bg - red - 100 text - red - 800">Rejected</Badge>,
      default:;"
        return <Badge variant="outline">{status}</Badge>;
    }
  }
;



<<<<<<< HEAD
=======
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
<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

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

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
