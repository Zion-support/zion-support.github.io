
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



import {ApplyToJobModal} from '@/components/messaging/job-application';
import {SEO} from '@/components/SEO';
import {useWhitelabel} from '@/context/WhitelabelContext';
export default function JobDetails() {;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  // Cast to specify the expected route param type since useParams may be untyped;
  const { jobId } = useParams() as { jobId?: string };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  // Cast to specify the expected route param type since useParams may be untyped;
  const { jobId } = useParams() as { jobId?: string };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
export default function JobDetails() {
  // Cast to specify the expected route param type since useParams may be untyped;
  const { jobId } = useParams() as { jobId?: string };
  const { job, isLoading, error } = useJobDetails(jobId);
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { isWhitelabel, brandName } = useWhitelabel();
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState, useEffect } from 'react',
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
import { useWhitelabel } from '@/context/WhitelabelContext',
export default function JobDetails() {
  // Cast to specify the expected route param type since useParams may be untyped
  const { jobId } = useParams() as { jobId?: string },
  const { job, isLoading, error } = useJobDetails(jobId),
  const { user, isAuthenticated } = useAuth(),
  const navigate = useNavigate(),
  const { isWhitelabel, brandName } = useWhitelabel(),
<<<<<<< HEAD
<<<<<<< HEAD
  
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false),

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  
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
<<<<<<< HEAD
  
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false),

=======

  
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false),

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  if (isLoading) {

  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  if (isLoading) {;
    return (
      <div className="flex items-center justify-center min-h-screen">;
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>;
      </div>;
    );
  }
  if (error || !job) {;
    return (

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
;
export default function JobDetails() {;
  // Cast to specify the expected route param type since useParams may be untyped;
  const { jobId } = useParams() as { jobId?:string },;
  const { job, isLoading, error } = useJobDetails(jobId),;
  const { user, isAuthenticated } = useAuth(),;
  const navigate = useNavigate(),;
  const { isWhitelabel, brandName } = useWhitelabel(),;
  ;
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false),;
;
  if (isLoading) {;
    return (;
      <div className="flex items-center justify-center min-h-screen">;
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>;
      </div>;
    ),;
  }
;
  if (error || !job) {;
    return (;
      <>;
        <Header />;
        <div className="container mx-auto px-4 py-16 text-center">;
          <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>;
          <p className="mb-8">The job you're looking for doesn't exist or has been removed.</p>;
          <Button onClick={() => navigate('/jobs')}>View All Jobs</Button>;
        </div>;
        <Footer />;
      </>;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
  }
  const isOwnJob = user?.id === job.client_id;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  }
  const isOwnJob = user?.id === job.client_id;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  },

  const isOwnJob = user?.id === job.client_id,

<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <>
      <SEO
        title={`${job.title} - ${isWhitelabel ? brandName : 'Zion AI Marketplace'}`}
        description={job.description.substring(0, 160)}
      />
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate('/jobs')}
          >
            ← Back to Jobs
          </Button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl mb-2">{job.title}</CardTitle>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>Posted {formatDistanceToNow(new Date(job.created_at), { addSuffix: true })}</span>
                    </div>
                  </div>
                  <Badge>{job.category}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3">Job Description</h3>
                  <div className="whitespace-pre-wrap">
                    {job.description}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3">Required Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {job.skills?.map((skill: string, i: number) => (
                      <Badge key={i} variant="secondary">
<<<<<<< HEAD


<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  const { jobId } = useParams() as { jobId?: string },;
  const { job, isLoading, error } = useJobDetails(jobId),;
  const { user, isAuthenticated } = useAuth(),;
  const navigate = useNavigate(),;
  const { isWhitelabel, brandName } = useWhitelabel(),;
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false),;
  if (isLoading) {;
    return (;
      <div className="flex items-center justify-center min-h-screen">;
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>;
      </div>;
    );
  }
;
  if (error || !job) {;
    return (;
      <>;
        <Header />;
        <div className="container mx-auto px-4 py-16 text-center">;
          <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>;
          <p className="mb-8">The job you're looking for doesn't exist or has been removed.</p>;
          <Button onClick={() => navigate('/jobs')}>View All Jobs</Button>;
        </div>;
        <Footer />;
      </>;
    );
  }
;
  const handleApply = () => {;
    if (!isAuthenticated) {;
      toast.error("Please log in to apply for this job"),;
      navigate('/login?redirect=' + encodeURIComponent(`/jobs/${jobId}`)),;
      return;
    }
;
<<<<<<< HEAD
<<<<<<< HEAD
  const handleApply = () => {;
    if (!isAuthenticated) {;
      toast && toast.error("Please log in to apply for this job");
      navigate('/login?redirect=' + encodeURIComponent(`/jobs/${jobId}`));
      return;
    }
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (user?.userType !== "jobSeeker" && user?.userType !== "talent") {;
      toast && toast.error("Only job seekers can apply for jobs");
      return;
    }
<<<<<<< HEAD
<<<<<<< HEAD
    setIsApplyModalOpen(true);
  };
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    setIsApplyModalOpen(true);
  };

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleApplySuccess = async (appliedJobId: string) => {;
    toast && toast.success("Application submitted successfully!"),;
    setIsApplyModalOpen(false);
  };
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const formatBudget = (budget: any) => {;
    if (!budget) return "Not specified",;
    return `$${budget && budget.min} - $${budget && budget.max}`;
  };
<<<<<<< HEAD
<<<<<<< HEAD
  const isOwnJob = user?.id === job && job.client_id;
=======

  const isOwnJob = user?.id === job && job.client_id;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

  const isOwnJob = user?.id === job && job.client_id;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <>;
      <SEO
        title={`${job && job.title} - ${isWhitelabel ? brandName : 'Zion AI Marketplace'}`}
        description={job && job.description.substring(0, 160)}
<<<<<<< HEAD
<<<<<<< HEAD
    ),;
  }
;
  const handleApply = () => {;
    if (!isAuthenticated) {;
      toast.error("Please log in to apply for this job"),;
      navigate('/login?redirect=' + encodeURIComponent(`/jobs/${jobId}`)),;
      return,;
    }
    ;
    if (user?.userType !== "jobSeeker" && user?.userType !== "talent") {;
      toast.error("Only job seekers can apply for jobs"),;
      return,;
    }
    ;
    setIsApplyModalOpen(true),;
  },;
;
  const handleApplySuccess = async (appliedJobId:string) => {;
    toast.success("Application submitted successfully!"),;
    setIsApplyModalOpen(false);
  },;
;
  const formatBudget = (budget:any) => {;
    if (!budget) return "Not specified",;
    return `$${budget.min} - $${budget.max}`,;
  },;
;
  const isOwnJob = user?.id === job.client_id,;
;
  return (;
    <>;
      <SEO ;
        title={`${job.title} - ${isWhitelabel ? brandName :'Zion AI Marketplace'}`}
        description={job.description.substring(0, 160)}
    if (user?.userType !== "jobSeeker" && user?.userType !== "talent") {;
      toast.error("Only job seekers can apply for jobs"),;
      return;
    }
;
    setIsApplyModalOpen(true);
  },;
  const handleApplySuccess = async (appliedJobId: string) => {;
    toast.success("Application submitted successfully!"),;
    setIsApplyModalOpen(false);
  },;
  const formatBudget = (budget: any) => {;
    if (!budget) return "Not specified",;
    return `$${budget.min} - $${budget.max}`;
  },;
  const isOwnJob = user?.id === job.client_id,;
  return (;
    <>;
      <SEO;
        title={`${job.title} - ${isWhitelabel ? brandName : 'Zion AI Marketplace'}`}
        description={job.description.substring(0, 160)}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      />;
      <Header />;
      <main className="container mx-auto px-4 py-8">;
        <div className="mb-6">;
<<<<<<< HEAD
<<<<<<< HEAD
          <Button ;
            variant="outline" ;
            size="sm";
          <Button;
            variant="outline";
            size="sm";
=======
          <Button
            variant="outline" 
            size="sm"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          <Button
            variant="outline" 
            size="sm"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            onClick={() => navigate('/jobs')}
          >;
            ← Back to Jobs;
          </Button>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
        ;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">;
          <div className="lg:col-span-2">;
            <Card>;
              <CardHeader>;
                <div className="flex justify-between items-start">;
                  <div>;
<<<<<<< HEAD
<<<<<<< HEAD
                    <CardTitle className="text-2xl mb-2">{job.title}</CardTitle>;
                    <div className="flex items-center text-muted-foreground">;
                      <Calendar className="mr-2 h-4 w-4" />;
                      <span>Posted {formatDistanceToNow(new Date(job.created_at), { addSuffix:true })}</span>;
                    </div>;
                  </div>;
                  <Badge>{job.category}</Badge>;
                    <CardTitle className="text-2xl mb-2">{job.title}</CardTitle>;
                    <div className="flex items-center text-muted-foreground">;
                      <Calendar className="mr-2 h-4 w-4" />;
                      <span>Posted {formatDistanceToNow(new Date(job.created_at), { addSuffix: true })}</span>;
                    </div>;
                  </div>;
                  <Badge>{job.category}</Badge>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <CardTitle className="text-2xl mb-2">{job && job.title}</CardTitle>;
                    <div className="flex items-center text-muted-foreground">;
                      <Calendar className="mr-2 h-4 w-4" />;
                      <span>Posted {formatDistanceToNow(new Date(job && job.created_at), { addSuffix: true })}</span>;
                    </div>;
                  </div>;
                  <Badge>{job && job.category}</Badge>;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </div>;
              </CardHeader>;
              <CardContent className="space-y-6">;
                <div>;
                  <h3 className="font-semibold text-lg mb-3">Job Description</h3>;
                  <div className="whitespace-pre-wrap">;
<<<<<<< HEAD
<<<<<<< HEAD
                    {job.description}
                  </div>;
                </div>;
                ;
                <div>;
                  <h3 className="font-semibold text-lg mb-3">Required Skills</h3>;
                  <div className="flex flex-wrap gap-2">;
                    {job.skills?.map((skill:string, i:number) => (;
                      <Badge key={i} variant="secondary">;
                    {job.description}
                  </div>;
                </div>;
                <div>;
                  <h3 className="font-semibold text-lg mb-3">Required Skills</h3>;
                  <div className="flex flex-wrap gap-2">;
                    {job.skills?.map((skill: string, i: number) => (;
                      <Badge key={i} variant="secondary">;
                        {skill}
                      </Badge>
=======
                    {job && job.description}
                  </div>;
                </div>;

                <div>;
                  <h3 className="font-semibold text-lg mb-3">Required Skills</h3>;
                  <div className="flex flex-wrap gap-2">;
                    {job && job.skills?.map((skill: string, i: number) => (;
                      <Badge key={i} variant="secondary">;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                        {skill}
                      </Badge>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
                    {job && job.description}
                  </div>;
                </div>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                        {skill}
                      </Badge>;
                    ))}
                  </div>;
                </div>;
              </CardContent>;
            </Card>;
          </div>;
          ;
          <div>;
            <Card>;
              <CardContent className="pt-6 space-y-4">;
                <div className="flex items-start">;
                  <DollarSign className="mt-1 h-5 w-5 text-muted-foreground" />;
                  <div className="ml-3">;
                    <p className="text-sm text-muted-foreground">Budget</p>;
                    <p className="font-medium">{formatBudget(job.budget)}</p>;
                  </div>;
                </div>;
                ;
                <div className="flex items-start">;
                  <Clock className="mt-1 h-5 w-5 text-muted-foreground" />;
                  <div className="ml-3">;
                    <p className="text-sm text-muted-foreground">Deadline</p>;
                    <p className="font-medium">;
                      {job.deadline ? new Date(job.deadline).toLocaleDateString() :"Flexible"}
                    </p>;
                  </div>;
                </div>;
                ;
                <div className="flex items-start">;
                  <Briefcase className="mt-1 h-5 w-5 text-muted-foreground" />;
                  <div className="ml-3">;
                    <p className="text-sm text-muted-foreground">Job Type</p>;
                    <p className="font-medium">Freelance / Remote</p>;
                  </div>;
                </div>;

                  <Button 
                    className="w-full mt-4" 

                ;
                {!isOwnJob && (;
                  <Button ;
                    className="w-full mt-4" ;
                    onClick={handleApply}
                    disabled={isOwnJob}>;
                    Apply Now;
                  </Button>;
                )}

                


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <Button
                    className="w-full mt-4"
                  <Button 
                    className="w-full mt-4" 
                    onClick={handleApply}
<<<<<<< HEAD
                    disabled={isOwnJob}
                  >
                    Apply Now
                  </Button>
                )}
                
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                    disabled={isOwnJob}>;
                    Apply Now;
                  </Button>;
                )}
                
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                {isOwnJob && (
                  <div className="text-center p-2 bg-muted rounded-md mt-4">
                    <p className="text-sm text-muted-foreground">This is your job posting</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                {isOwnJob && (;
                  <div className="text-center p-2 bg-muted rounded-md mt-4">;
                    <p className="text-sm text-muted-foreground">This is your job posting</p>;
                  </div>;
                )}
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  // Cast to specify the expected route param type since use_params may be untyped;
  const { job_id } = use_params () as { job_id?: string }
  const { job, is_loading, error } = useJobDetails (job_id);
  const { user, is_authenticated } = use_auth ();
  const navigate = use_navigate ();
  const { is_whitelabel, brand_name } = use_whitelabel ();
;
  const [isApplyModalOpen, setIsApplyModalOpen] = useState (false);
;
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
          <Button on_click={() => navigate ('/jobs')}>View All Jobs</Button>;
        </div>;
        <Footer />;
      </>);
  }
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
      toast.error ("Only job seekers can apply for jobs");
      return;
    }
    setIsApplyModalOpen (true);
  }
;
  const handleApplySuccess = async (appliedJobId: string) => {
    toast.success ("Application submitted successfully!"),
    setIsApplyModalOpen (false);
  }
;
  const format_budget = (budget: any) =>: any {
    // Check condition
if (return "Not specified", ) {
  $2
}
    return `$${budget.min} - $${budget.max}`;
  }
;
  const isOwnJob = user?.id === job.client_id;
;
  return (
    <>;
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
            on_click={() => navigate ('/jobs')}
          >;
            ← Back to Jobs;
          </Button>;
        </div>;
        <div className="grid grid - cols - 1 lg:grid - cols - 3 gap - 6">;
          <div className="lg:col - span - 2">;
            <Card>;
              <CardHeader>;
                <div className="flex justify - between items - start">;
                  <div>;
                    <CardTitle className="text - 2xl mb - 2">{job.title}</CardTitle>;
                    <div className="flex items - center text - muted - foreground">;
                      <Calendar className="mr - 2 h - 4 w - 4" />;
                      <span > Posted {formatDistanceToNow (new Date (job.created_at), { add_suffix: true })}</span>;
                    </div>;
                  </div>;
                  <Badge>{job.category}</Badge>;
                </div>;
              </CardHeader>;
              <CardContent className="space - y-6">;
                <div>;
                  <h3 className="font - semibold text - lg mb - 3">Job Description</h3>;
                  <div className="whitespace - pre - wrap">;
                    {job.description}
                  </div>;
                </div>;
                <div>;
                  <h3 className="font - semibold text - lg mb - 3">Required Skills</h3>;
                  <div className="flex flex - wrap gap - 2">;
                    {job.skills?.map ((skill: string, index: number) => (
                      <Badge key={i} variant="secondary">;
                        {skill}
                      </Badge>))}
                  </div>;
                </div>;
              </CardContent>;
            </Card>;
          </div>;
          <div>;
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
                    <p className="font - medium">Freelance / Remote</p>;
                  </div>;
                </div>;
                {!isOwnJob && (
                  <Button;
                    className="w - full mt - 4";
                    on_click={handle_apply}
                    disabled={isOwnJob}
                  >;
                    Apply Now;
<<<<<<< HEAD
                  </Button>;
                )}
                ;
                {isOwnJob && (;
                  <div className="text-center p-2 bg-muted rounded-md mt-4">;
                    <p className="text-sm text-muted-foreground">This is your job posting</p>;
                  </div>;
                )}
=======
                  </Button>)}
                {isOwnJob && (
                  <div className="text - center p - 2 bg - muted rounded - md mt - 4">;
                    <p className="text - sm text - muted - foreground">This is your job posting</p>;
                  </div>)}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </CardContent>;
            </Card>;
          </div>;
        </div>;
      </main>;
      <Footer />;
<<<<<<< HEAD
      ;
      {/* Job application modal */}
      {job && (;
        <ApplyToJobModal;
          job={{;
            id:job.id,;
            title:job.title,;
            description:job.description,;
            company_name:job.company_name || "Company",;
            budget:job.budget,;
            client_id:job.client_id;
=======

            id: job && job.id,
            title: job && job.title,
            description: job && job.description,
            company_name: job && job.company_name || "Company",
            budget: job && job.budget,
            client_id: job && job.client_id

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          }}
          isOpen={isApplyModalOpen}
          onClose={() => setIsApplyModalOpen(false)}
        />;
      )}
<<<<<<< HEAD
    </>;
=======

    </>;
  );
}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Job application modal */}
      {job && (
        <ApplyToJobModal;
          job={{
            id: job.id,
            title: job.title,
            description: job.description,
            company_name: job.company_name || "Company",
            budget: job.budget,
            client_id: job.client_id;
          }}
          is_open={isApplyModalOpen}
          on_close={() => setIsApplyModalOpen (false)}
        />)}
    </>);
}
<<<<<<< HEAD
<<<<<<< HEAD
  ),;}
 const [isApplyModalOpen, setIsApplyModalOpen] = useState (false);
if (error || !job) {
  return (<> <Header /> <div className="container mx-auto px-4 py-16 text-center" > <h1 className="text-2xl font-bold mb-4" >Job Not Found</h1> <p className="mb-8" >The job you're looking for doesn't exist or has been removed.</p> <Button onClick= {
  () => navigate ('/jobs') 
}>View All Jobs</Button> </div> <Footer /> </>) 
}navigate ('/login?redirect=' + encodeURIComponent (`/jobs/$ {
  jobId 
}`) );
return;
}setIsApplyModalOpen (true) 
};
const isOwnJob = user?.id === job.client id;
`$ {
  job.title 
}- $ {
  isWhitelabel ? brandName : 'Zion AI Marketplace' 
}` 
}description= {
  job.description.substring (0, 160) 
}/> <Header /> <main className="container mx-auto px-4 py-8" > <div className="mb-6" > <Button > ← Back to Jobs </Button> </div> <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" > <div className="lg:col-span-2" > <Card> <CardHeader> <div className="flex justify-between items-start" > <div> </div> </div> <Badge> {
  job.category 
}</Badge> </div> </CardHeader> <CardContent className="space-y-6" > <div> </div> </div> <div> </Badge>) ) 
}</div> </div> </CardContent> </Card> </div> <div> <Card> </p> </div> </div> <div className="flex items-start" > <Briefcase className="mt-1 h-5 w-5 text-muted-foreground" /> <div className="ml-3" > <p className="text-sm text-muted-foreground" >Job Type</p> <p className="font-medium" >Freelance / Remote</p> </div> </div> {
  !isOwnJob && (<Button className="w-full mt-4" onClick= {
  handleApply 
}disabled= {
  isOwnJob 
}> Apply Now </Button>) 
}</div>) 
}</CardContent> </Card> </div> </div> </main> <Footer /> {
  /* Job application modal */ 
}{
  job && (<ApplyToJobModal job= {
  {
  />) 
}</>) 
}
      {/* Job application modal */}
      {job && (
        <ApplyToJobModal
          job={{
            id: job.id
            title: job.title
            description: job.description
            company_name: job.company_name |"Company"
            budget: job.budget

            client_id: job.client_id
          }}
          isOpen={isApplyModalOpen}
          onClose={() => setIsApplyModalOpen(false)}
        />
      )}
    </>
  )
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
