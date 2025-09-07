
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { ApplyToJobModal  } from '@/components/messaging/job-application';
import { SEO  } from '@/components/SEO';
import { useWhitelabel  } from '@/context/WhitelabelContext';
export default function JobDetails() {
  // Cast to specify the expected route param type since useParams may be untyped
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const { jobId } = useParams() as { jobId?: string }
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
  const { jobId } = useParams() as { jobId?: string }
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31



import {ApplyToJobModal} from '@/components/messaging/job-application';
import {SEO} from '@/components/SEO';
import {useWhitelabel} from '@/context/WhitelabelContext';
export default function JobDetails() {;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate  } from 'react-router-dom';
import { Header  } from '@/components/Header';
import { Footer  } from '@/components/Footer';
import { Button  } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle  } from '@/components/ui/card';
import { Badge  } from '@/components/ui/badge';
import { Calendar, Clock, DollarSign, Tag, Users, Briefcase  } from '@/components/icons';
import { formatDistanceToNow  } from 'date-fns';
import { toast  } from 'sonner';
import { useAuth  } from '@/hooks/useAuth';
import useJobDetails from '@/hooks/useJobDetails';
import { ApplyToJobModal  } from '@/components/messaging/job-application';
import { SEO  } from '@/components/SEO';
import { useWhitelabel  } from '@/context/WhitelabelContext';
export default function JobDetails() {
  // Cast to specify the expected route param type since useParams may be untyped
  const { jobId } = useParams() as { jobId?: string }
<<<<<<< HEAD

  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false),

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }
  if (error |!job) {
    return (
      <>
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>
          <p className="mb-8">The job you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => navigate('/jobs')}>View All Jobs</Button>
        </div>
        <Footer />
      </>
    )
  }
  const handleApply = () => {
    if (!isAuthenticated) {
      toast.error("Please log in to apply for this job"),
      navigate('/login?redirect=' + encodeURIComponent(`/jobs/${jobId}`)),
      return
    }
    if (user?.userType !== "jobSeeker" && user?.userType !== "talent") {
      toast.error("Only job seekers can apply for jobs"),
      return
    }
    setIsApplyModalOpen(true)

  const handleApplySuccess = async (appliedJobId: string) => {
    toast.success("Application submitted successfully!")
    setIsApplyModalOpen(false)

  const formatBudget = (budget: any) => {
    if (!budget) return "Not specified"
    return `$${budget.min} - $${budget.max}`

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
=======

import { ApplyToJobModal  } from '@/components/messaging/job-application';'
import { SEO  } from '@/components/SEO';'
import { useWhitelabel  } from '@/context/WhitelabelContext';
export default function JobDetails() {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  // Cast to specify the expected route param type since useParams may be untyped;
  const { jobId } = useParams() as { jobId?: string }



'
import {ApplyToJobModal} from '@/components/messaging/job-application';'
import {SEO} from '@/components/SEO';'
import {useWhitelabel} from '@/context/WhitelabelContext';
export default function JobDetails() { return null; }
  const { job, isLoading, error } = useJobDetails(jobId);
  const { user, isAuthenticated } = useAuth();

  const navigate = useNavigate();
  const { isWhitelabel, brandName } = useWhitelabel();'
import {ApplyToJobModal} from '@/components/messaging/job-application';'
import {SEO} from '@/components/SEO';'
import {useWhitelabel} from '@/context/WhitelabelContext';

  // Cast to specify the expected route param type since useParams may be untyped;
  const { jobId } = useParams() as { jobId?: string };
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const { job, isLoading, error } = useJobDetails(jobId);
  const { user, isAuthenticated } = useAuth();

  const navigate = useNavigate();
  const { isWhitelabel, brandName } = useWhitelabel();
<<<<<<< HEAD
<<<<<<< HEAD
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
import {ApplyToJobModal} from '@/components/messaging/job-application';
import {SEO} from '@/components/SEO';
import {useWhitelabel} from '@/context/WhitelabelContext';
export default function JobDetails() {;
  // Cast to specify the expected route param type since useParams may be untyped;
  const { jobId } = useParams() as { jobId?: string };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
  const { job, isLoading, error } = useJobDetails(jobId);
  const { user, isAuthenticated } = useAuth();

  const navigate = useNavigate();
  const { isWhitelabel, brandName } = useWhitelabel();
import {ApplyToJobModal} from '@/components/messaging/job-application';
import {SEO} from '@/components/SEO';
import {useWhitelabel} from '@/context/WhitelabelContext';
export default function JobDetails() {
export default function JobDetails() {;
  // Cast to specify the expected route param type since useParams may be untyped;
  const { jobId } = useParams() as { jobId?: string };
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const { job, isLoading, error } = useJobDetails(jobId);
  const { user, isAuthenticated } = useAuth();

  const navigate = useNavigate();
  const { isWhitelabel, brandName } = useWhitelabel();
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useState, useEffect } from 'react',
=======
  const { jobId } = useParams() as { jobId?: string }import React, { useState, useEffect } from 'react',
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  const { jobId } = useParams() as { jobId?: string }import React, { useState, useEffect } from 'react',
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


import React, { useState, useEffect } from 'react',
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useParams, useNavigate } from 'react-router-dom',
import { Header } from '@/components/Header',
import { Footer } from '@/components/Footer',
import { Button } from '@/components/ui/button',
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',
import { Badge } from '@/components/ui/badge',
import { Calendar, Clock, DollarSign, Tag, Users, Briefcase } from '@/components/icons',
import { formatDistanceToNow } from 'date-fns',
import { toast } from 'sonner',
import { useAuth } from '@/hooks/useAuth',
import useJobDetails from '@/hooks/useJobDetails',
import { ApplyToJobModal } from '@/components/messaging/job-application',
import { SEO } from '@/components/SEO',
=======


'
import React, { useState, useEffect } from 'react','
import { useParams, useNavigate } from 'react-router-dom','
import { Header } from '@/components/Header','
import { Footer } from '@/components/Footer','
import { Button } from '@/components/ui/button','
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card','
import { Badge } from '@/components/ui/badge','
import { Calendar, Clock, DollarSign, Tag, Users, Briefcase } from '@/components/icons','
import { formatDistanceToNow } from 'date-fns','
import { toast } from 'sonner','
import { useAuth } from '@/hooks/useAuth','
import useJobDetails from '@/hooks/useJobDetails','
import { ApplyToJobModal } from '@/components/messaging/job-application','
import { SEO } from '@/components/SEO','
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { useWhitelabel } from '@/context/WhitelabelContext',
export default function JobDetails() {};
  // Cast to specify the expected route param type since useParams may be untyped;
  const { jobId } = useParams() as { jobId?: string },
  const { job, isLoading, error } = useJobDetails(jobId),
  const { user, isAuthenticated } = useAuth(),
  const navigate = useNavigate(),
  const { isWhitelabel, brandName } = useWhitelabel(),
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false),

  
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false),

  
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false),

  if (isLoading) {
  
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false),
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

    return (
      <div className="flex items-center justify-center min-h-screen">;"
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>;
      </div>;
    );
  }
    return (
      <>;
        <Header />;"
        <div className="container mx-auto px-4 py-16 text-center">;"
          <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>;'"
          <p className="mb-8">The job you're looking for doesn't exist or has been removed.</p>;'
          <Button onClick={() => navigate('/jobs')}>View All Jobs</Button>;
        </div>;
        <Footer />;
      </>;
    );
  }
<<<<<<< HEAD
  const handleApply = () => {
    if (!isAuthenticated) {
      toast.error("Please log in to apply for this job"),
      navigate('/login?redirect=' + encodeURIComponent(`/jobs/${jobId}`)),
      return
    }
    if (user?.userType !== "jobSeeker" && user?.userType !== "talent") {
      toast.error("Only job seekers can apply for jobs"),
      return
    }
    setIsApplyModalOpen(true)
  
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false),

  if (isLoading) {

  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  if (isLoading) {;
    return (
      <div className="flex items-center justify-center min-h-screen">;
=======

  if (isLoading) {;

    return ("
      <div className="flex items-center justify-center min-h-screen">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>;
      </div>;
    );
  }
<<<<<<< HEAD


  if (error || !job) {;

    return (
      <>;
        <Header />;
        <div className="container mx-auto px-4 py-16 text-center">;
          <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>;
          <p className="mb-8">The job you're looking for doesn't exist or has been removed.</p>;
=======


  if (error || !job) {;

      <>;
        <Header />;"
        <div className="container mx-auto px-4 py-16 text-center">;"
          <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>;'"
          <p className="mb-8">The job you're looking for doesn't exist or has been removed.</p>;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <Button onClick={() => navigate('/jobs')}>View All Jobs</Button>;
        </div>;
        <Footer />;
      </>;
<<<<<<< HEAD
    );
  }


  const handleApply = () => {;
    if (!isAuthenticated) {;
      toast && toast.error("Please log in to apply for this job");

      navigate('/login?redirect=' + encodeURIComponent(`/jobs/${jobId}`));
      return;
    }


  },

  const handleApplySuccess = async (appliedJobId: string) => {
    toast.success("Application submitted successfully!")
    setIsApplyModalOpen(false)
  }
  },

  const formatBudget = (budget: any) => {
    if (!budget) return "Not specified"
    return `$${budget.min} - $${budget.max}`
<<<<<<< HEAD
=======

  },



  const handleApplySuccess = async (appliedJobId: string) => {"
    toast.success("Application submitted successfully!")
    setIsApplyModalOpen(false)
  }

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  },

  const isOwnJob = user?.id === job.client_id,

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return (
    <>
      <SEO'
        title={`${job.title} - ${isWhitelabel ? brandName : 'Zion AI Marketplace'}`}
        description={job.description.substring(0, 160)}
      />
      <Header />"
      <main className="container mx-auto px-4 py-8">"
        <div className="mb-6">
          <Button"
            variant="outline""
            size="sm"'
            onClick={() => navigate('/jobs')}
          >
            ← Back to Jobs;
          </Button>
        </div>"
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">"
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>"
                <div className="flex justify-between items-start">
                  <div>"
                    <CardTitle className="text-2xl mb-2">{job.title}</CardTitle>"
                    <div className="flex items-center text-muted-foreground">"
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>Posted {formatDistanceToNow(new Date(job.created_at), { addSuffix: true })}</span>
                    </div>
                  </div>
                  <Badge>{job.category}</Badge>
                </div>
              </CardHeader>"
              <CardContent className="space-y-6">
                <div>"
                  <h3 className="font-semibold text-lg mb-3">Job Description</h3>"
                  <div className="whitespace-pre-wrap">
                    {job.description}
                  </div>
                </div>
                <div>"
                  <h3 className="font-semibold text-lg mb-3">Required Skills</h3>"
                  <div className="flex flex-wrap gap-2">
<<<<<<< HEAD
                    {job.skills?.map((skill: string, i: number) => (
<<<<<<< HEAD
                      <Badge key={i} variant="secondary">    if (user?.userType !== "jobSeeker" && user?.userType !== "talent") {;
=======
                    {job.skills?.map((skill: string, i: number) => ("
                      <Badge key={i} variant="secondary">


'
import React, { useState, useEffect } from 'react',;'
import { useParams, useNavigate } from 'react-router-dom',;'
import { Header } from '@/components/Header',;'
import { Footer } from '@/components/Footer',;'
import { Button } from '@/components/ui/button',;'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',;'
import { Badge } from '@/components/ui/badge',;'
import { Calendar, Clock, DollarSign, Tag, Users, Briefcase } from '@/components/icons',;'
import { formatDistanceToNow } from 'date-fns',;'
import { toast } from 'sonner',;'
import { useAuth } from '@/hooks/useAuth',;'
import useJobDetails from '@/hooks/useJobDetails',;'
import { ApplyToJobModal } from '@/components/messaging/job-application',;'
import { SEO } from '@/components/SEO',;'
import { useWhitelabel } from '@/context/WhitelabelContext',;
export default function JobDetails() { return null; }
=======
                      <Badge key={i} variant="secondary">


import React, { useState, useEffect } from 'react',;
import { useParams, useNavigate } from 'react-router-dom',;
import { Header } from '@/components/Header',;
import { Footer } from '@/components/Footer',;
import { Button } from '@/components/ui/button',;
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',;
import { Badge } from '@/components/ui/badge',;
import { Calendar, Clock, DollarSign, Tag, Users, Briefcase } from '@/components/icons',;
import { formatDistanceToNow } from 'date-fns',;
import { toast } from 'sonner',;
import { useAuth } from '@/hooks/useAuth',;
import useJobDetails from '@/hooks/useJobDetails',;
import { ApplyToJobModal } from '@/components/messaging/job-application',;
import { SEO } from '@/components/SEO',;
import { useWhitelabel } from '@/context/WhitelabelContext',;
export default function JobDetails() {;
  // Cast to specify the expected route param type since useParams may be untyped;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const { jobId } = useParams() as { jobId?: string },;
  const { job, isLoading, error } = useJobDetails(jobId),;
  const { user, isAuthenticated } = useAuth(),;
  const navigate = useNavigate(),;
  const { isWhitelabel, brandName } = useWhitelabel(),;
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false),;
  if (isLoading) {;
<<<<<<< HEAD
    return (;"
      <div className="flex items-center justify-center min-h-screen">;"
=======
    return (;
      <div className="flex items-center justify-center min-h-screen">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>;
      </div>;
    );
  }
;
  if (error || !job) {;
    return (;
      <>;
<<<<<<< HEAD
        <Header />;"
        <div className="container mx-auto px-4 py-16 text-center">;"
          <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>;'"
          <p className="mb-8">The job you're looking for doesn't exist or has been removed.</p>;'
=======
        <Header />;
        <div className="container mx-auto px-4 py-16 text-center">;
          <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>;
          <p className="mb-8">The job you're looking for doesn't exist or has been removed.</p>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <Button onClick={() => navigate('/jobs')}>View All Jobs</Button>;
        </div>;
        <Footer />;
      </>;
    );
  }
;
  const handleApply = () => {;
<<<<<<< HEAD
    if (!isAuthenticated) {;"
      toast.error("Please log in to apply for this job"),;'`
=======
    if (!isAuthenticated) {;
      toast.error("Please log in to apply for this job"),;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      navigate('/login?redirect=' + encodeURIComponent(`/jobs/${jobId}`)),;
      return;
    }
;

<<<<<<< HEAD

"
    if (user?.userType !== "jobSeeker" && user?.userType !== "talent") {;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    if (user?.userType !== "jobSeeker" && user?.userType !== "talent") {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      toast && toast.error("Only job seekers can apply for jobs");
      return;
    }
  const handleApplySuccess = async (appliedJobId: string) => {;"
    toast && toast.success("Application submitted successfully!"),;
<<<<<<< HEAD
<<<<<<< HEAD
    setIsApplyModalOpen(false)
};
  const formatBudget = (budget: any) => {;
    if (!budget) return "Not specified",;
    return `$${budget && budget.min} - $${budget && budget.max}`
};
=======
    setIsApplyModalOpen(false);
  };
  const formatBudget = (budget: any) => {;"
    if (!budget) return "Not specified",;`
    return `$${budget && budget.min} - $${budget && budget.max}`;
  };
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    setIsApplyModalOpen(false);
  };
  const formatBudget = (budget: any) => {;
    if (!budget) return "Not specified",;
    return `$${budget && budget.min} - $${budget && budget.max}`;
  };
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return (
    <>;
      <SEO'`
        title={`${job && job.title} - ${isWhitelabel ? brandName : 'Zion AI Marketplace'}`}
        description={job && job.description.substring(0, 160)}
<<<<<<< HEAD
      />;
      <Header />;
      <main className="container mx-auto px-4 py-8">;
        <div className="mb-6">;
          <Button
            variant="outline" 
            size="sm"
            onClick={() => navigate('/jobs')}
          >;
            ← Back to Jobs;
          </Button>;
<<<<<<< HEAD
        </div>;        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">;
=======



      />;
      <Header />;"
      <main className="container mx-auto px-4 py-8">;"
        <div className="mb-6">;


'
            onClick={() => navigate('/jobs')}
          >;
            ← Back to Jobs;
          </Button>;
        </div>;


"
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        </div>;

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <div className="lg:col-span-2">;
            <Card>;
              <CardHeader>;"
                <div className="flex justify-between items-start">;
                  <div>;
<<<<<<< HEAD
                    <CardTitle className="text-2xl mb-2">{job && job.title}</CardTitle>;
                    <div className="flex items-center text-muted-foreground">;
                      <Calendar className="mr-2 h-4 w-4" />;
                      <span>Posted {formatDistanceToNow(new Date(job && job.created_at), { addSuffix: true })}</span>;
                    </div>;
                  </div>;
                  <Badge>{job && job.category}</Badge>;
                </div>;
              </CardHeader>;
              <CardContent className="space-y-6">;
                <div>;
                  <h3 className="font-semibold text-lg mb-3">Job Description</h3>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======



                </div>;
              </CardHeader>;"
              <CardContent className="space-y-6">;
                <div>;"
                  <h3 className="font-semibold text-lg mb-3">Job Description</h3>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  <div className="whitespace-pre-wrap">;

                  </div>;
                </div>;

                <div>;"
                  <h3 className="font-semibold text-lg mb-3">Required Skills</h3>;"
                  <div className="flex flex-wrap gap-2">;

<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
                  <div className="whitespace-pre-wrap">;
                    {job && job.description}
                  </div>;
                </div>;

                <div>;
                  <h3 className="font-semibold text-lg mb-3">Required Skills</h3>;
                  <div className="flex flex-wrap gap-2">;
                    {job && job.skills?.map((skill: string, i: number) => (;
                      <Badge key={i} variant="secondary">;



>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                        {skill}
                      </Badge>;
                    ))}

<<<<<<< HEAD
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                    {job.skills?.map((skill: string, i: number) => (;
                      <Badge key={i} variant="secondary">;
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start">
                  <DollarSign className="mt-1 h-5 w-5 text-muted-foreground" />
                  <div className="ml-3">
                    <p className="text-sm text-muted-foreground">Budget</p>
                    <p className="font-medium">{formatBudget(job.budget)}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="mt-1 h-5 w-5 text-muted-foreground" />
                  <div className="ml-3">
                    <p className="text-sm text-muted-foreground">Deadline</p>
                    <p className="font-medium">
                      {job.deadline ? new Date(job.deadline).toLocaleDateString() : "Flexible"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Briefcase className="mt-1 h-5 w-5 text-muted-foreground" />
                  <div className="ml-3">
                    <p className="text-sm text-muted-foreground">Job Type</p>
                    <p className="font-medium">Freelance / Remote</p>
                  </div>
                </div>
                {!isOwnJob && (

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
                        {skill}
                      </Badge>;
                    ))}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                        {skill}
                      </Badge>;
                    ))}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  </div>;
                </div>;
              </CardContent>;
            </Card>;
          </div>;

          <div>;
<<<<<<< HEAD
            <Card>;"
              <CardContent className="pt-6 space-y-4">;"
                <div className="flex items-start">;"
                  <DollarSign className="mt-1 h-5 w-5 text-muted-foreground" />;"
                  <div className="ml-3">;"
                    <p className="text-sm text-muted-foreground">Budget</p>;


                  </div>;
                </div>;

<<<<<<< HEAD
=======
                    <p className="font-medium">{formatBudget(job.budget)}</p>;
                  </div>;
                </div>;
                ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
                  </div>;
                </div>;

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                <div className="flex items-start">;
=======
                  <div className="whitespace-pre-wrap">;                <div className="flex items-start">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                  <div className="whitespace-pre-wrap">;                <div className="flex items-start">;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
            <Card>;
              <CardContent className="pt-6 space-y-4">;
                <div className="flex items-start">;
                  <DollarSign className="mt-1 h-5 w-5 text-muted-foreground" />;
                  <div className="ml-3">;
                    <p className="text-sm text-muted-foreground">Budget</p>;
                    <p className="font-medium">{formatBudget(job && job.budget)}</p>;
                  </div>;
                </div>;

                  </div>;
                </div>;

                <div className="flex items-start">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  <Clock className="mt-1 h-5 w-5 text-muted-foreground" />;
                  <div className="ml-3">;
                    <p className="text-sm text-muted-foreground">Deadline</p>;
                    <p className="font-medium">;
                      {job && job.deadline ? new Date(job && job.deadline).toLocaleDateString() : "Flexible"}
                    </p>;
                  </div>;
                </div>;

                <div className="flex items-start">;
                  <Briefcase className="mt-1 h-5 w-5 text-muted-foreground" />;
                  <div className="ml-3">;
                    <p className="text-sm text-muted-foreground">Job Type</p>;
                    <p className="font-medium">Freelance / Remote</p>;
                  </div>;
                </div>;

                {!isOwnJob && (;
                  <Button
                    className="w-full mt-4" 


                  <Button 
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
"
                <div className="flex items-start">;"
                  <Clock className="mt-1 h-5 w-5 text-muted-foreground" />;"
                  <div className="ml-3">;"
                    <p className="text-sm text-muted-foreground">Deadline</p>;"
                    <p className="font-medium">;
"
                      {job && job.deadline ? new Date(job && job.deadline).toLocaleDateString() : "Flexible"}
                    </p>;
                  </div>;
                </div>;



"
                <div className="flex items-start">;"
                  <Briefcase className="mt-1 h-5 w-5 text-muted-foreground" />;"
                  <div className="ml-3">;"
                    <p className="text-sm text-muted-foreground">Job Type</p>;"
                    <p className="font-medium">Freelance / Remote</p>;
                  </div>;
                </div>;


                {!isOwnJob && (;
                  <Button"
                    className="w-full mt-4" 



                  <Button "
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    className="w-full mt-4" 




                  <Button "
                    className="w-full mt-4" 
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                    className="w-full mt-4" 

                ;
                {!isOwnJob && (;
                  <Button ;
                    className="w-full mt-4" ;

                  <Button 
                    className="w-full mt-4" 
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                    onClick={handleApply}
                    disabled={isOwnJob}>;
                    Apply Now;
                  </Button>;
                )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


                


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
                  <Button
                    className="w-full mt-4"
                  <Button 
                    className="w-full mt-4" 
                    onClick={handleApply}
                    disabled={isOwnJob}
                  >
                    Apply Now
                  </Button>
                )}
                
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                {isOwnJob && (
=======
                    className="w-full mt-4"                 {isOwnJob && (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                    className="w-full mt-4"                 {isOwnJob && (
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                {isOwnJob && (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  <div className="text-center p-2 bg-muted rounded-md mt-4">
=======



                {isOwnJob && ("
                  <div className="text-center p-2 bg-muted rounded-md mt-4">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    <p className="text-sm text-muted-foreground">This is your job posting</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <Footer />
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


                {isOwnJob && (;"
                  <div className="text-center p-2 bg-muted rounded-md mt-4">;"
                    <p className="text-sm text-muted-foreground">This is your job posting</p>;
                  </div>;
                )}
'
import React, { useState, useEffect } from 'react';'
import {use_params, use_navigate} from 'react-router-dom';'
import {Header} from '@/components / Header';'
import {Footer} from '@/components / Footer';'
import {Button} from '@/components / ui / button';'
import {Card, CardContent, CardHeader, CardTitle} from '@/components / ui / card';'
import {Badge} from '@/components / ui / badge';'
import {Calendar, Clock, DollarSign, Tag, Users, Briefcase} from '@/components / icons';'
import {formatDistanceToNow} from 'date - fns';'
import {toast} from 'sonner';'
import {use_auth} from '@/hooks / use_auth';'
import useJobDetails from '@/hooks / useJobDetails';'
import {ApplyToJobModal} from '@/components / messaging / job - application';'
import {SEO} from '@/components / SEO';'
import {use_whitelabel} from '@/context / WhitelabelContext';
export default /**;
 * JobDetails - Function description;
 */
function JobDetails() {}
=======
      <Footer />

                {isOwnJob && (;
                  <div className="text-center p-2 bg-muted rounded-md mt-4">;
                    <p className="text-sm text-muted-foreground">This is your job posting</p>;
                  </div>;
                )}
import React, { useState, useEffect } from 'react';
import {use_params, use_navigate} from 'react-router-dom';
import {Header} from '@/components / Header';
import {Footer} from '@/components / Footer';
import {Button} from '@/components / ui / button';
import {Card, CardContent, CardHeader, CardTitle} from '@/components / ui / card';
import {Badge} from '@/components / ui / badge';
import {Calendar, Clock, DollarSign, Tag, Users, Briefcase} from '@/components / icons';
import {formatDistanceToNow} from 'date - fns';
import {toast} from 'sonner';
import {use_auth} from '@/hooks / use_auth';
import useJobDetails from '@/hooks / useJobDetails';
import {ApplyToJobModal} from '@/components / messaging / job - application';
import {SEO} from '@/components / SEO';
import {use_whitelabel} from '@/context / WhitelabelContext';
export default /**
 * JobDetails - Function description
 */
function JobDetails() {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  // Cast to specify the expected route param type since use_params may be untyped;
  const { job_id } = use_params () as { job_id?: string }
  const { job, is_loading, error } = useJobDetails (job_id);
  const { user, is_authenticated } = use_auth ();
  const navigate = use_navigate ();
  const { is_whitelabel, brand_name } = use_whitelabel ();
;
  const [isApplyModalOpen, setIsApplyModalOpen] = useState (false);
;
<<<<<<< HEAD
  // Check condition;
if ( {) {}
  $2;
}
    return ("
      <div className="flex items - center justify - center min - h-screen">;"
        <div className="animate - spin rounded - full h - 12 w - 12 border - t-2 border - b-2 border - primary"></div>;
      </div>);
  }
  // Check condition;
if ( {) {}
  $2;
}
    return (
      <>;
        <Header />;"
        <div className="container mx - auto px - 4 py - 16 text - center">;"
          <h1 className="text - 2xl font - bold mb - 4">Job Not Found</h1>;'"
          <p className="mb - 8">The job you're looking for doesn't exist or has been removed.</p>;'
=======
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="flex items - center justify - center min - h-screen">;
        <div className="animate - spin rounded - full h - 12 w - 12 border - t-2 border - b-2 border - primary"></div>;
      </div>);
  }
  // Check condition
if ( {) {
  $2
}
    return (
      <>;
        <Header />;
        <div className="container mx - auto px - 4 py - 16 text - center">;
          <h1 className="text - 2xl font - bold mb - 4">Job Not Found</h1>;
          <p className="mb - 8">The job you're looking for doesn't exist or has been removed.</p>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <Button on_click={() => navigate ('/jobs')}>View All Jobs</Button>;
        </div>;
        <Footer />;
      </>);
  }
<<<<<<< HEAD
  const handle_apply = () =>: any {}
    // Check condition;
if ( {) {}
  $2;
}"
      toast.error ("Please log in to apply for this job");'`
      navigate ('/login?redirect=' + encodeURIComponent (`/jobs/${job_id}`));
      return;
    }
    // Check condition;
if ( {) {}
  $2;
}"
=======
  const handle_apply = () =>: any {
    // Check condition
if ( {) {
  $2
}
      toast.error ("Please log in to apply for this job");
      navigate ('/login?redirect=' + encodeURIComponent (`/jobs/${job_id}`));
      return;
    }
    // Check condition
if ( {) {
  $2
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      toast.error ("Only job seekers can apply for jobs");
      return;
    }
    setIsApplyModalOpen (true);
  }
;
<<<<<<< HEAD
  const handleApplySuccess = async (appliedJobId: string) => {"
=======
  const handleApplySuccess = async (appliedJobId: string) => {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    toast.success ("Application submitted successfully!"),
    setIsApplyModalOpen (false);
  }
;
<<<<<<< HEAD
  const format_budget = (budget: any) =>: any {}
    // Check condition"
if (return "Not specified", ) {}
  $2;
}`
=======
  const format_budget = (budget: any) =>: any {
    // Check condition
if (return "Not specified", ) {
  $2
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    return `$${budget.min} - $${budget.max}`;
  }
;
  const isOwnJob = user?.id === job.client_id;
;
  return (
    <>;
<<<<<<< HEAD
      <SEO;'`
        title={`${job.title} - ${is_whitelabel ? brand_name : 'Zion AI Marketplace'}`}
        description={job.description.substring (0, 160)}
      />;
      <Header />;"
      <main className="container mx - auto px - 4 py - 8">;"
        <div className="mb - 6">;
          <Button;"
            variant="outline";"
            size="sm";'
=======
      <SEO;
        title={`${job.title} - ${is_whitelabel ? brand_name : 'Zion AI Marketplace'}`}
        description={job.description.substring (0, 160)}
      />;
      <Header />;
      <main className="container mx - auto px - 4 py - 8">;
        <div className="mb - 6">;
          <Button;
            variant="outline";
            size="sm";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            on_click={() => navigate ('/jobs')}
          >;
            ← Back to Jobs;
          </Button>;
<<<<<<< HEAD
        </div>;"
        <div className="grid grid - cols - 1 lg:grid - cols - 3 gap - 6">;"
          <div className="lg:col - span - 2">;
            <Card>;
              <CardHeader>;"
                <div className="flex justify - between items - start">;
                  <div>;"
                    <CardTitle className="text - 2xl mb - 2">{job.title}</CardTitle>;"
                    <div className="flex items - center text - muted - foreground">;"
=======
        </div>;
        <div className="grid grid - cols - 1 lg:grid - cols - 3 gap - 6">;
          <div className="lg:col - span - 2">;
            <Card>;
              <CardHeader>;
                <div className="flex justify - between items - start">;
                  <div>;
                    <CardTitle className="text - 2xl mb - 2">{job.title}</CardTitle>;
                    <div className="flex items - center text - muted - foreground">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                      <Calendar className="mr - 2 h - 4 w - 4" />;
                      <span > Posted {formatDistanceToNow (new Date (job.created_at), { add_suffix: true })}</span>;
                    </div>;
                  </div>;
                  <Badge>{job.category}</Badge>;
                </div>;
<<<<<<< HEAD
              </CardHeader>;"
              <CardContent className="space - y-6">;
                <div>;"
                  <h3 className="font - semibold text - lg mb - 3">Job Description</h3>;"
=======
              </CardHeader>;
              <CardContent className="space - y-6">;
                <div>;
                  <h3 className="font - semibold text - lg mb - 3">Job Description</h3>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  <div className="whitespace - pre - wrap">;
                    {job.description}
                  </div>;
                </div>;
<<<<<<< HEAD
                <div>;"
                  <h3 className="font - semibold text - lg mb - 3">Required Skills</h3>;"
                  <div className="flex flex - wrap gap - 2">;
                    {job.skills?.map ((skill: string, index: number) => ("
=======
                <div>;
                  <h3 className="font - semibold text - lg mb - 3">Required Skills</h3>;
                  <div className="flex flex - wrap gap - 2">;
                    {job.skills?.map ((skill: string, index: number) => (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                      <Badge key={i} variant="secondary">;
                        {skill}
                      </Badge>))}
                  </div>;
                </div>;
              </CardContent>;
            </Card>;
          </div>;
          <div>;
<<<<<<< HEAD
            <Card>;"
              <CardContent className="pt - 6 space - y-4">;"
                <div className="flex items - start">;"
                  <DollarSign className="mt - 1 h - 5 w - 5 text - muted - foreground" />;"
                  <div className="ml - 3">;"
                    <p className="text - sm text - muted - foreground">Budget</p>;"
                    <p className="font - medium">{format_budget (job.budget)}</p>;
                  </div>;
                </div>;"
                <div className="flex items - start">;"
                  <Clock className="mt - 1 h - 5 w - 5 text - muted - foreground" />;"
                  <div className="ml - 3">;"
                    <p className="text - sm text - muted - foreground">Deadline</p>;"
                    <p className="font - medium">;"
                      {job.deadline ? new Date (job.deadline).toLocaleDateString () : "Flexible"}
                    </p>;
                  </div>;
                </div>;"
                <div className="flex items - start">;"
                  <Briefcase className="mt - 1 h - 5 w - 5 text - muted - foreground" />;"
                  <div className="ml - 3">;"
                    <p className="text - sm text - muted - foreground">Job Type</p>;"
=======
            <Card>;
              <CardContent className="pt - 6 space - y-4">;
                <div className="flex items - start">;
                  <DollarSign className="mt - 1 h - 5 w - 5 text - muted - foreground" />;
                  <div className="ml - 3">;
                    <p className="text - sm text - muted - foreground">Budget</p>;
                    <p className="font - medium">{format_budget (job.budget)}</p>;
                  </div>;
                </div>;
                <div className="flex items - start">;
                  <Clock className="mt - 1 h - 5 w - 5 text - muted - foreground" />;
                  <div className="ml - 3">;
                    <p className="text - sm text - muted - foreground">Deadline</p>;
                    <p className="font - medium">;
                      {job.deadline ? new Date (job.deadline).toLocaleDateString () : "Flexible"}
                    </p>;
                  </div>;
                </div>;
                <div className="flex items - start">;
                  <Briefcase className="mt - 1 h - 5 w - 5 text - muted - foreground" />;
                  <div className="ml - 3">;
                    <p className="text - sm text - muted - foreground">Job Type</p>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                    <p className="font - medium">Freelance / Remote</p>;
                  </div>;
                </div>;
                {!isOwnJob && (
<<<<<<< HEAD
                  <Button;"
=======
                  <Button;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                    className="w - full mt - 4";
                    on_click={handle_apply}
                    disabled={isOwnJob}
                  >;
                    Apply Now;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  </Button>)}
                {isOwnJob && (
                  <div className="text - center p - 2 bg - muted rounded - md mt - 4">;
                    <p className="text - sm text - muted - foreground">This is your job posting</p>;
                  </div>)}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  </Button>;
                )}
                ;
                {isOwnJob && (;
                  <div className="text-center p-2 bg-muted rounded-md mt-4">;
                    <p className="text-sm text-muted-foreground">This is your job posting</p>;
                  </div>;
                )}
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              </CardContent>;
            </Card>;
          </div>;
        </div>;
      </main>;
      <Footer />;

<<<<<<< HEAD

=======
            id: job && job.id,
            title: job && job.title,
            description: job && job.description,
            company_name: job && job.company_name || "Company",
            budget: job && job.budget,
            client_id: job && job.client_id
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

          }}
          isOpen={isApplyModalOpen}
          onClose={() => setIsApplyModalOpen(false)}
        />;
      )}

<<<<<<< HEAD

=======
    </>;
  );
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

      {/* Job application modal */}
      {job && (
        <ApplyToJobModal;
<<<<<<< HEAD
          job={{}
            id: job.id,
            title: job.title,
            description: job.description,"
=======
          job={{
            id: job.id,
            title: job.title,
            description: job.description,
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            company_name: job.company_name || "Company",
            budget: job.budget,
            client_id: job.client_id;
          }}
          is_open={isApplyModalOpen}
=======

          }}
          is_open={isApplyModalOpen})
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          on_close={() => setIsApplyModalOpen (false)}
        />)}
    </>);
}
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  ),;}
 const [isApplyModalOpen, setIsApplyModalOpen] = useState (false);
if (error || !job) {"
  return (<> <Header /> <div className="container mx-auto px-4 py-16 text-center" > <h1 className="text-2xl font-bold mb-4" >Job Not Found</h1> <p className="mb-8" >The job you're looking for doesn't exist or has been removed.</p> <Button onClick= {
)
}>View All Jobs </div> <Footer /> </>) 

<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            client_id: job.client_id
          }}
          isOpen={isApplyModalOpen}
=======
}/> <Header /> <main className="container mx-auto px-4 py-8" > <div className="mb-6" > <Button > ← Back to Jobs  </div> <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" > <div className="lg:col-span-2" > <Card> <CardHeader> <div className="flex justify-between items-start" > <div> </div> </div> <Badge> {"
} </div>  <CardContent className="space-y-6" > <div> </div> </div> <div> ) )"
}</div> </div>   </div> <div> <Card> </p> </div> </div> <div className="flex items-start" > <Briefcase className="mt-1 h-5 w-5 text-muted-foreground" /> <div className="ml-3" > <p className="text-sm text-muted-foreground" >Job Type</p> <p className="font-medium" >Freelance / Remote</p> </div> </div> {""
  !isOwnJob && (<Button className="w-full mt-4" onClick= {"
  handleApply;
}disabled= {
  isOwnJob;)
}> Apply Now ) 
}</div>) 
}  </div> </div> </main> <Footer /> {

  job && (<ApplyToJobModal job= {
  {)
  />) 

}</>) 
            id: job.id;,
  title: job.title;
            description: job.description;,"
  company_name: job.company_name |"Company""
            budget: job.budget;,
          isOpen={isApplyModalOpen})
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          onClose={() => setIsApplyModalOpen(false)}

    </>
  )
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
      <Footer />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      <Footer />
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
"`;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
