
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { ApplyToJobModal  } from '@/components/messaging/job-application';
import { SEO  } from '@/components/SEO';
import { useWhitelabel  } from '@/context/WhitelabelContext';
export default function JobDetails() {
  // Cast to specify the expected route param type since useParams may be untyped
<<<<<<< HEAD
  const { jobId } = useParams() as { jobId?: string }
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

import {ApplyToJobModal} from '@/components/messaging/job-application';
import {SEO} from '@/components/SEO';
import {useWhitelabel} from '@/context/WhitelabelContext';
export default function JobDetails() {;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
import {ApplyToJobModal} from '@/components/messaging/job-application';
import {SEO} from '@/components/SEO';
import {useWhitelabel} from '@/context/WhitelabelContext';
export default function JobDetails() {;
  // Cast to specify the expected route param type since useParams may be untyped;
  const { jobId } = useParams() as { jobId?: string };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  const { job, isLoading, error } = useJobDetails(jobId);
  const { user, isAuthenticated } = useAuth();

  const navigate = useNavigate();
  const { isWhitelabel, brandName } = useWhitelabel();
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
const [isApplyModalOpen, setIsApplyModalOpen] = useState(false),

  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false),

  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false),

  if (isLoading) {

  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false),

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
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>;
      </div>;
    );
  }
if (error || !job) {;

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

  },

  const isOwnJob = user?.id === job.client_id,

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
{job.skills?.map((skill: string, i: number) => (
<Badge key={i} variant="secondary">    if (user?.userType !== "jobSeeker" && user?.userType !== "talent") {;
  const { jobId } = useParams() as { jobId?: string },;
  const { job, isLoading, error } = useJobDetails(jobId),;
  const { user, isAuthenticated } = useAuth(),;
  const navigate = useNavigate(),;
  const { isWhitelabel, brandName } = useWhitelabel(),;
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false),;
  if (isLoading) {;
return (;"
      <div className="flex items-center justify-center min-h-screen">;"
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>;
      </div>;
    );
  }
;
  if (error || !job) {;
    return (;
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
;
  const handleApply = () => {;
if (!isAuthenticated) {;"
      toast.error("Please log in to apply for this job"),;'`
      navigate('/login?redirect=' + encodeURIComponent(`/jobs/${jobId}`)),;
      return;
    }
;

"
    if (user?.userType !== "jobSeeker" && user?.userType !== "talent") {;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      toast && toast.error("Only job seekers can apply for jobs");
      return;
    }
  const handleApplySuccess = async (appliedJobId: string) => {;"
    toast && toast.success("Application submitted successfully!"),;
<<<<<<< HEAD
    setIsApplyModalOpen(false)
};
  const formatBudget = (budget: any) => {;
    if (!budget) return "Not specified",;
    return `$${budget && budget.min} - $${budget && budget.max}`
};
  return (
    <>;
      <SEO'`
        title={`${job && job.title} - ${isWhitelabel ? brandName : 'Zion AI Marketplace'}`}
        description={job && job.description.substring(0, 160)}
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
</div>;        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">;
          <div className="lg:col-span-2">;
            <Card>;
              <CardHeader>;"
                <div className="flex justify-between items-start">;
                  <div>;
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
                  <div className="whitespace-pre-wrap">;

                  </div>;
                </div>;

                <div>;"
                  <h3 className="font-semibold text-lg mb-3">Required Skills</h3>;"
                  <div className="flex flex-wrap gap-2">;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                        {skill}
                      </Badge>;
                    ))}

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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
<Card>;"
              <CardContent className="pt-6 space-y-4">;"
                <div className="flex items-start">;"
                  <DollarSign className="mt-1 h-5 w-5 text-muted-foreground" />;"
                  <div className="ml-3">;"
                    <p className="text-sm text-muted-foreground">Budget</p>;

                  </div>;
                </div>;

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
                    className="w-full mt-4" 

                  <Button "
                    className="w-full mt-4" 
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    onClick={handleApply}
                    disabled={isOwnJob}>;
                    Apply Now;
                  </Button>;
                )}
<<<<<<< HEAD

<<<<<<< HEAD
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
      <Footer />
<<<<<<< HEAD
<<<<<<< HEAD

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
          <Button on_click={() => navigate ('/jobs')}>View All Jobs</Button>;
        </div>;
        <Footer />;
      </>);
  }
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
      toast.error ("Only job seekers can apply for jobs");
      return;
    }
    setIsApplyModalOpen (true);
  }
;
const handleApplySuccess = async (appliedJobId: string) => {"
    toast.success ("Application submitted successfully!"),
    setIsApplyModalOpen (false);
  }
;
const format_budget = (budget: any) =>: any {}
    // Check condition"
if (return "Not specified", ) {}
  $2;
}`
    return `$${budget.min} - $${budget.max}`;
  }
;
  const isOwnJob = user?.id === job.client_id;
;
  return (
    <>;
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
            on_click={() => navigate ('/jobs')}
          >;
            ← Back to Jobs;
          </Button>;
</div>;"
        <div className="grid grid - cols - 1 lg:grid - cols - 3 gap - 6">;"
          <div className="lg:col - span - 2">;
            <Card>;
              <CardHeader>;"
                <div className="flex justify - between items - start">;
                  <div>;"
                    <CardTitle className="text - 2xl mb - 2">{job.title}</CardTitle>;"
                    <div className="flex items - center text - muted - foreground">;"
                      <Calendar className="mr - 2 h - 4 w - 4" />;
                      <span > Posted {formatDistanceToNow (new Date (job.created_at), { add_suffix: true })}</span>;
                    </div>;
                  </div>;
                  <Badge>{job.category}</Badge>;
                </div>;
</CardHeader>;"
              <CardContent className="space - y-6">;
                <div>;"
                  <h3 className="font - semibold text - lg mb - 3">Job Description</h3>;"
                  <div className="whitespace - pre - wrap">;
                    {job.description}
                  </div>;
                </div>;
<div>;"
                  <h3 className="font - semibold text - lg mb - 3">Required Skills</h3>;"
                  <div className="flex flex - wrap gap - 2">;
                    {job.skills?.map ((skill: string, index: number) => ("
                      <Badge key={i} variant="secondary">;
                        {skill}
                      </Badge>))}
                  </div>;
                </div>;
              </CardContent>;
            </Card>;
          </div>;
          <div>;
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
                    <p className="font - medium">Freelance / Remote</p>;
                  </div>;
                </div>;
                {!isOwnJob && (
<Button;"
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
                  </Button>;
                )}
                ;
                {isOwnJob && (;
                  <div className="text-center p-2 bg-muted rounded-md mt-4">;
                    <p className="text-sm text-muted-foreground">This is your job posting</p>;
                  </div>;
                )}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              </CardContent>;
            </Card>;
          </div>;
        </div>;
      </main>;
      <Footer />;

          }}
          isOpen={isApplyModalOpen}
          onClose={() => setIsApplyModalOpen(false)}
        />;
      )}

      {/* Job application modal */}
      {job && (
        <ApplyToJobModal;
job={{}
            id: job.id,
            title: job.title,
            description: job.description,"
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
  ),;}
 const [isApplyModalOpen, setIsApplyModalOpen] = useState (false);
if (error || !job) {"
  return (<> <Header /> <div className="container mx-auto px-4 py-16 text-center" > <h1 className="text-2xl font-bold mb-4" >Job Not Found</h1> <p className="mb-8" >The job you're looking for doesn't exist or has been removed.</p> <Button onClick= {
)
}>View All Jobs </div> <Footer /> </>) 

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            client_id: job.client_id
          }}
          isOpen={isApplyModalOpen}
          onClose={() => setIsApplyModalOpen(false)}

    </>
  )
}
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
