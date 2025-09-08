
<<<<<<< HEAD
=======
import { ApplyToJobModal  } from '@/components/messaging/job-application';
import { SEO  } from '@/components/SEO';
import { useWhitelabel  } from '@/context/WhitelabelContext';
export default function JobDetails() {
  // Cast to specify the expected route param type since useParams may be untyped
>>>>>>> origin/cursor/delete-old-data-records-6bba


import {ApplyToJobModal} from '@/components/messaging/job-application';
import {SEO} from '@/components/SEO';
import {useWhitelabel} from '@/context/WhitelabelContext';
export default function JobDetails() {;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
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

>>>>>>> origin/cursor/delete-old-data-records-6bba

  const { job, isLoading, error } = useJobDetails(jobId);
  const { user, isAuthenticated } = useAuth();

  const navigate = useNavigate();
  const { isWhitelabel, brandName } = useWhitelabel();

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const { job, isLoading, error } = useJobDetails(jobId);
  const { user, isAuthenticated } = useAuth();

  const navigate = useNavigate();
  const { isWhitelabel, brandName } = useWhitelabel();


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

  
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false),
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false),

  if (isLoading) {
  
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false),

    return (
  }
  if (error |!job) {
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


<<<<<<< HEAD

  if (isLoading) {

=======
  
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false),
  


  
>>>>>>> origin/cursor/delete-old-data-records-6bba

  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false),

  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false),

  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false),
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

  if (isLoading) {
  


<<<<<<< HEAD
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  if (isLoading) {;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    return (
      <div className="flex items-center justify-center min-h-screen">;"
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>;
      </div>;
    );
  }

<<<<<<< HEAD
  if (error || !job) {;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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


=======
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

    return (
      <div className="flex items-center justify-center min-h-screen">;
>>>>>>> origin/cursor/delete-old-data-records-6bba

        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>;
      </div>;
    );
  }

<<<<<<< HEAD
          <Button onClick={() => navigate('/jobs')}>View All Jobs</Button>;
        </div>;
        <Footer />;
      </>;

=======


>>>>>>> origin/cursor/delete-old-data-records-6bba
  },

  const isOwnJob = user?.id === job.client_id,

<<<<<<< HEAD
=======

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

>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======

        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>;
      </div>;
    );
  }
;
  if (error || !job) {;

    return (      <>;
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
import { ApplyToJobModal } from '@/components/messaging/job-application';
import { SEO } from '@/components/SEO';
import { useWhitelabel } from '@/context/WhitelabelContext';
export default function JobDetails() {
  // Cast to specify the expected route param type since useParams may be untyped
  const { jobId } = useParams() as { jobId?: string },
  const { job, isLoading, error } = useJobDetails($2);
  const { user, isAuthenticated } = useAuth($2);
  const navigate = useNavigate($2);
  const { isWhitelabel, brandName } = useWhitelabel($2);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState($2);
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
      toast.error($2);
      navigate('/login?redirect = $2;
      return
    }
    if (user?.userType !== "jobSeeker" && user?.userType !== "talent") {
      toast.error($2);
      return
    }
    
    setIsApplyModalOpen(true)
  },

  const handleApplySuccess = async (appliedJobId: string) => {
    toast.success($2);
    setIsApplyModalOpen(false)
  },

  const formatBudget = $2;
    return `$${budget.min} - $${budget.max}`
  },

  const isOwnJob = $2;
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
                      <span>Posted {formatDistanceToNow(new Date(job.created_at), { addSuffix: true})}</span>
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
<<<<<<< HEAD


=======
                      <Badge key={i} variant="secondary">    if (user?.userType !== "jobSeeker" && user?.userType !== "talent") {;
      toast && toast.error("Only job seekers can apply for jobs");
      return;
    }

      toast && toast.error("Only job seekers can apply for jobs");
      return;
    }
  const handleApplySuccess = async (appliedJobId: string) => {;"
    toast && toast.success("Application submitted successfully!"),;

>>>>>>> origin/cursor/delete-old-data-records-6bba
  return (
    <>;
      <SEO
        title={`${job && job.title} - ${isWhitelabel ? brandName : 'Zion AI Marketplace'}`}
        description={job && job.description.substring(0, 160)}


          <div className="lg:col-span-2">;
            <Card>;
              <CardHeader>;
                <div className="flex justify-between items-start">;
                  <div>;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

                        {skill}
                      </Badge>;
                    ))}
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
                  </div>;
                </div>;
              </CardContent>;
            </Card>;
          </div>;
<<<<<<< HEAD
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
=======

          <div>;

>>>>>>> origin/cursor/delete-old-data-records-6bba

                <div className="flex items-start">;

                  <Clock className="mt-1 h-5 w-5 text-muted-foreground" />;
                  <div className="ml-3">;
                    <p className="text-sm text-muted-foreground">Deadline</p>;
                    <p className="font-medium">;
                <div className="flex items-start">;
                  <Briefcase className="mt-1 h-5 w-5 text-muted-foreground" />;
                  <div className="ml-3">;
                    <p className="text-sm text-muted-foreground">Job Type</p>;
                    <p className="font-medium">Freelance / Remote</p>;
                  </div>;
                </div>;
<<<<<<< HEAD

=======
                  <Button 
                    className="w-full mt-4"                 {isOwnJob && (
                {!isOwnJob && (;
                  <Button
                    className="w-full mt-4" 
>>>>>>> origin/cursor/delete-old-data-records-6bba


                  <Button 

                    className="w-full mt-4" 

                  <Button "
                    className="w-full mt-4" 


<<<<<<< HEAD
                ;
                {!isOwnJob && (;
                  <Button ;
                    className="w-full mt-4" ;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    onClick={handleApply}
                    disabled={isOwnJob}>;
                    Apply Now;
                  </Button>;
                )}

<<<<<<< HEAD

                



=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD
      <Footer />

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

                {isOwnJob && (;"
                  <div className="text-center p-2 bg-muted rounded-md mt-4">;"
                    <p className="text-sm text-muted-foreground">This is your job posting</p>;
                  </div>;
                )}

<<<<<<< HEAD
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
=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba

import {use_whitelabel} from '@/context / WhitelabelContext';
export default /**;
 * JobDetails - Function description;
 */
function JobDetails() {}

  // Cast to specify the expected route param type since use_params may be untyped;
  const { job_id } = use_params () as { job_id?: string }
  const { job, is_loading, error } = useJobDetails (job_id);
  const { user, is_authenticated } = use_auth ();
  const navigate = use_navigate ();
  const { is_whitelabel, brand_name } = use_whitelabel ();
;
  const [isApplyModalOpen, setIsApplyModalOpen] = useState (false);
;

          <Button on_click={() => navigate ('/jobs')}>View All Jobs</Button>;
        </div>;
        <Footer />;
      </>);
  }

      toast.error ("Only job seekers can apply for jobs");
      return;
    }
    setIsApplyModalOpen (true);
  }
;

    toast.success ("Application submitted successfully!"),
    setIsApplyModalOpen (false);
  }
;

    return `$${budget.min} - $${budget.max}`;
  }
;
  const isOwnJob = user?.id === job.client_id;
;
  return (
    <>;

            on_click={() => navigate ('/jobs')}
          >;
            ← Back to Jobs;
          </Button>;

                      <Calendar className="mr - 2 h - 4 w - 4" />;
                      <span > Posted {formatDistanceToNow (new Date (job.created_at), { add_suffix: true })}</span>;
                    </div>;
                  </div>;
                  <Badge>{job.category}</Badge>;
                </div>;

                  <div className="whitespace - pre - wrap">;
                    {job.description}
                  </div>;
                </div>;

                      <Badge key={i} variant="secondary">;
                        {skill}
                      </Badge>))}
                  </div>;
                </div>;
              </CardContent>;
            </Card>;
          </div>;
          <div>;

                    <p className="font - medium">Freelance / Remote</p>;
                  </div>;
                </div>;
                {!isOwnJob && (

                    className="w - full mt - 4";
                    on_click={handle_apply}
                    disabled={isOwnJob}
                  >;
                    Apply Now;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
                  </Button>;
                )}
                ;
                {isOwnJob && (;
                  <div className="text-center p-2 bg-muted rounded-md mt-4">;
                    <p className="text-sm text-muted-foreground">This is your job posting</p>;
                  </div>;
                )}


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
>>>>>>> origin/cursor/delete-old-data-records-6bba

          }}
          isOpen={isApplyModalOpen}
          onClose={() => setIsApplyModalOpen(false)}
        />;
      )}

<<<<<<< HEAD
    </>;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

      {/* Job application modal */}
      {job && (
        <ApplyToJobModal;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

=======
    </>
  )

}
>>>>>>> origin/cursor/delete-old-data-records-6bba
