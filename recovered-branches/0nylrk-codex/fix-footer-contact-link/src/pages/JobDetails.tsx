<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
import { ApplyToJobModal  } from '@/components/messaging/job-application';
import { SEO  } from '@/components/SEO';
import { useWhitelabel  } from '@/context/WhitelabelContext';
export default function JobDetails() {
  // Cast to specify the expected route param type since useParams may be untyped
  const { jobId } = useParams() as { jobId?: string }
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a



import {ApplyToJobModal} from '@/components/messaging/job-application';
import {SEO} from '@/components/SEO';
import {useWhitelabel} from '@/context/WhitelabelContext';
export default function JobDetails() {;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  // Cast to specify the expected route param type since useParams may be untyped;
  const { jobId } = useParams() as { jobId?: string };
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const { job, isLoading, error } = useJobDetails(jobId);
  const { user, isAuthenticated } = useAuth();

  const navigate = useNavigate();
  const { isWhitelabel, brandName } = useWhitelabel();
import {ApplyToJobModal} from '@/components/messaging/job-application';
import {SEO} from '@/components/SEO';
import {useWhitelabel} from '@/context/WhitelabelContext';
<<<<<<< HEAD
export default function JobDetails() {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export default function JobDetails() {;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  // Cast to specify the expected route param type since useParams may be untyped;
  const { jobId } = useParams() as { jobId?: string };
  const { job, isLoading, error } = useJobDetails(jobId);
  const { user, isAuthenticated } = useAuth();

  const navigate = useNavigate();
  const { isWhitelabel, brandName } = useWhitelabel();
<<<<<<< HEAD
<<<<<<< HEAD


=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false),

  
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false),

  if (isLoading) {
=======
  
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false),

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    return (
      <div className="flex items-center justify-center min-h-screen">;
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>;
      </div>;
    );
  }
    return (
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

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  if (isLoading) {

  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

<<<<<<< HEAD
=======
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  if (isLoading) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return (
      <div className="flex items-center justify-center min-h-screen">;
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>;
      </div>;
    );
  }
<<<<<<< HEAD

=======
  if (error || !job) {;
    return (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  if (error || !job) {;
<<<<<<< HEAD

    return (
=======
    return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <>;
        <Header />;
        <div className="container mx-auto px-4 py-16 text-center">;
          <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>;
          <p className="mb-8">The job you're looking for doesn't exist or has been removed.</p>;
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


=======
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  },

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const handleApplySuccess = async (appliedJobId: string) => {
    toast.success("Application submitted successfully!")
    setIsApplyModalOpen(false)
  }
<<<<<<< HEAD
  },

  const formatBudget = (budget: any) => {
    if (!budget) return "Not specified"
    return `$${budget.min} - $${budget.max}`
<<<<<<< HEAD

=======
  }
  const isOwnJob = user?.id === job.client_id;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  },

  const isOwnJob = user?.id === job.client_id,

<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

=======
  const handleApply = () => {;
    if (!isAuthenticated) {;
      toast && toast.error("Please log in to apply for this job");
      navigate('/login?redirect=' + encodeURIComponent(`/jobs/${jobId}`));
      return;
    }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    if (user?.userType !== "jobSeeker" && user?.userType !== "talent") {;
      toast && toast.error("Only job seekers can apply for jobs");
      return;
    }
  const handleApplySuccess = async (appliedJobId: string) => {;
    toast && toast.success("Application submitted successfully!"),;
    setIsApplyModalOpen(false);
  };
  const formatBudget = (budget: any) => {;
    if (!budget) return "Not specified",;
    return `$${budget && budget.min} - $${budget && budget.max}`;
  };
  return (
    <>;
      <SEO
        title={`${job && job.title} - ${isWhitelabel ? brandName : 'Zion AI Marketplace'}`}
        description={job && job.description.substring(0, 160)}
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      />;
      <Header />;
      <main className="container mx-auto px-4 py-8">;
        <div className="mb-6">;
<<<<<<< HEAD
<<<<<<< HEAD
          <Button
            variant="outline" 
            size="sm"
=======
          <Button ;
            variant="outline" ;
            size="sm";
          <Button;
            variant="outline";
            size="sm";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            onClick={() => navigate('/jobs')}
          >;
            ← Back to Jobs;
          </Button>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD

=======
        ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">;
          <div className="lg:col-span-2">;
            <Card>;
              <CardHeader>;
                <div className="flex justify-between items-start">;
                  <div>;
<<<<<<< HEAD
<<<<<<< HEAD
                    <CardTitle className="text-2xl mb-2">{job && job.title}</CardTitle>;
                    <div className="flex items-center text-muted-foreground">;
                      <Calendar className="mr-2 h-4 w-4" />;
                      <span>Posted {formatDistanceToNow(new Date(job && job.created_at), { addSuffix: true })}</span>;
                    </div>;
                  </div>;
                  <Badge>{job && job.category}</Badge>;
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                </div>;
              </CardHeader>;
              <CardContent className="space-y-6">;
                <div>;
                  <h3 className="font-semibold text-lg mb-3">Job Description</h3>;
                  <div className="whitespace-pre-wrap">;
<<<<<<< HEAD
<<<<<<< HEAD
                    {job && job.description}
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  </div>;
                </div>;

                <div>;
                  <h3 className="font-semibold text-lg mb-3">Required Skills</h3>;
                  <div className="flex flex-wrap gap-2">;
<<<<<<< HEAD
                    {job && job.skills?.map((skill: string, i: number) => (;
                      <Badge key={i} variant="secondary">;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                        {skill}
                      </Badge>;
                    ))}

=======
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

                        {skill}
                      </Badge>;
                    ))}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  </div>;
                </div>;
              </CardContent>;
            </Card>;
          </div>;
<<<<<<< HEAD

=======
          ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          <div>;
            <Card>;
              <CardContent className="pt-6 space-y-4">;
                <div className="flex items-start">;
                  <DollarSign className="mt-1 h-5 w-5 text-muted-foreground" />;
                  <div className="ml-3">;
                    <p className="text-sm text-muted-foreground">Budget</p>;
<<<<<<< HEAD
                    <p className="font-medium">{formatBudget(job && job.budget)}</p>;
                  </div>;
                </div>;

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
                  <Clock className="mt-1 h-5 w-5 text-muted-foreground" />;
                  <div className="ml-3">;
                    <p className="text-sm text-muted-foreground">Deadline</p>;
                    <p className="font-medium">;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                      {job && job.deadline ? new Date(job && job.deadline).toLocaleDateString() : "Flexible"}
                    </p>;
                  </div>;
                </div>;

<<<<<<< HEAD
=======
                      {job.deadline ? new Date(job.deadline).toLocaleDateString() :"Flexible"}
                    </p>;
                  </div>;
                </div>;
                ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                <div className="flex items-start">;
                  <Briefcase className="mt-1 h-5 w-5 text-muted-foreground" />;
                  <div className="ml-3">;
                    <p className="text-sm text-muted-foreground">Job Type</p>;
                    <p className="font-medium">Freelance / Remote</p>;
                  </div>;
                </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

                {!isOwnJob && (;
                  <Button
                    className="w-full mt-4" 

<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

                  <Button 
                    className="w-full mt-4" 

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
                ;
                {!isOwnJob && (;
                  <Button ;
                    className="w-full mt-4" ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

                  <Button 
                    className="w-full mt-4" 
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                    onClick={handleApply}
                    disabled={isOwnJob}>;
                    Apply Now;
                  </Button>;
                )}
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

                


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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

                {isOwnJob && (;
                  <div className="text-center p-2 bg-muted rounded-md mt-4">;
                    <p className="text-sm text-muted-foreground">This is your job posting</p>;
                  </div>;
                )}
=======
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
                  </Button>)}
                {isOwnJob && (
                  <div className="text - center p - 2 bg - muted rounded - md mt - 4">;
                    <p className="text - sm text - muted - foreground">This is your job posting</p>;
                  </div>)}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
                  </Button>;
                )}
                ;
                {isOwnJob && (;
                  <div className="text-center p-2 bg-muted rounded-md mt-4">;
                    <p className="text-sm text-muted-foreground">This is your job posting</p>;
                  </div>;
                )}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              </CardContent>;
            </Card>;
          </div>;
        </div>;
      </main>;
      <Footer />;
<<<<<<< HEAD
<<<<<<< HEAD

            id: job && job.id,
            title: job && job.title,
            description: job && job.description,
            company_name: job && job.company_name || "Company",
            budget: job && job.budget,
            client_id: job && job.client_id

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          }}
          isOpen={isApplyModalOpen}
          onClose={() => setIsApplyModalOpen(false)}
        />;
      )}
<<<<<<< HEAD
<<<<<<< HEAD

    </>;
  );
}

=======
=======
    </>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
