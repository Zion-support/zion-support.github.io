
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
  
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false),

  if (isLoading) {
    return (
      <div className=&quot;flex items-center justify-center min-h-screen&quot;>
        <div className=&quot;animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary&quot;></div>
      </div>
    )
  }

  if (error || !job) {
    return (
      <>
        <Header />
        <div className=&quot;container mx-auto px-4 py-16 text-center&quot;>
          <h1 className=&quot;text-2xl font-bold mb-4&quot;>Job Not Found</h1>
          <p className=&quot;mb-8&quot;>The job you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => navigate('/jobs')}>View All Jobs</Button>
        </div>
        <Footer />
      </>
    )
  }

  const handleApply = () => {
    if (!isAuthenticated) {
<<<<<<< HEAD
      toast.error("Please log in to apply for this job"),
      navigate('/login?redirect=' + encodeURIComponent(`/jobs/${jobId}`)),
      return
    }
    
    if (user?.userType !== "jobSeeker" && user?.userType !== "talent") {
      toast.error("Only job seekers can apply for jobs"),
      return
=======
      toast.error(&quot;Please log in to apply for this job&quot;);
      navigate('/login?redirect=' + encodeURIComponent(`/jobs/${jobId}`));
      return;
    }
    
    if (user?.userType !== &quot;jobSeeker&quot; && user?.userType !== &quot;talent&quot;) {
      toast.error(&quot;Only job seekers can apply for jobs&quot;);
      return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
    
    setIsApplyModalOpen(true)
  },

  const handleApplySuccess = async (appliedJobId: string) => {
<<<<<<< HEAD
    toast.success("Application submitted successfully!"),
    setIsApplyModalOpen(false)
  },

  const formatBudget = (budget: any) => {
    if (!budget) return "Not specified",
    return `$${budget.min} - $${budget.max}`
  },
=======
    toast.success(&quot;Application submitted successfully!&quot;);
    setIsApplyModalOpen(false);
  };

  const formatBudget = (budget: any) => {
    if (!budget) return &quot;Not specified&quot;;
    return `$${budget.min} - $${budget.max}`;
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  const isOwnJob = user?.id === job.client_id,

  return (
    <>
      <SEO 
        title={`${job.title} - ${isWhitelabel ? brandName : 'Zion AI Marketplace'}`}
        description={job.description.substring(0, 160)}
      />
      <Header />
      <main className=&quot;container mx-auto px-4 py-8&quot;>
        <div className=&quot;mb-6&quot;>
          <Button 
            variant=&quot;outline&quot; 
            size=&quot;sm&quot;
            onClick={() => navigate('/jobs')}
          >
            ← Back to Jobs
          </Button>
        </div>
        
        <div className=&quot;grid grid-cols-1 lg:grid-cols-3 gap-6&quot;>
          <div className=&quot;lg:col-span-2&quot;>
            <Card>
              <CardHeader>
                <div className=&quot;flex justify-between items-start&quot;>
                  <div>
                    <CardTitle className=&quot;text-2xl mb-2&quot;>{job.title}</CardTitle>
                    <div className=&quot;flex items-center text-muted-foreground&quot;>
                      <Calendar className=&quot;mr-2 h-4 w-4&quot; />
                      <span>Posted {formatDistanceToNow(new Date(job.created_at), { addSuffix: true })}</span>
                    </div>
                  </div>
                  <Badge>{job.category}</Badge>
                </div>
              </CardHeader>
              <CardContent className=&quot;space-y-6&quot;>
                <div>
                  <h3 className=&quot;font-semibold text-lg mb-3&quot;>Job Description</h3>
                  <div className=&quot;whitespace-pre-wrap&quot;>
                    {job.description}
                  </div>
                </div>
                
                <div>
                  <h3 className=&quot;font-semibold text-lg mb-3&quot;>Required Skills</h3>
                  <div className=&quot;flex flex-wrap gap-2&quot;>
                    {job.skills?.map((skill: string, i: number) => (
                      <Badge key={i} variant=&quot;secondary&quot;>
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
              <CardContent className=&quot;pt-6 space-y-4&quot;>
                <div className=&quot;flex items-start&quot;>
                  <DollarSign className=&quot;mt-1 h-5 w-5 text-muted-foreground&quot; />
                  <div className=&quot;ml-3&quot;>
                    <p className=&quot;text-sm text-muted-foreground&quot;>Budget</p>
                    <p className=&quot;font-medium&quot;>{formatBudget(job.budget)}</p>
                  </div>
                </div>
                
                <div className=&quot;flex items-start&quot;>
                  <Clock className=&quot;mt-1 h-5 w-5 text-muted-foreground&quot; />
                  <div className=&quot;ml-3&quot;>
                    <p className=&quot;text-sm text-muted-foreground&quot;>Deadline</p>
                    <p className=&quot;font-medium&quot;>
                      {job.deadline ? new Date(job.deadline).toLocaleDateString() : &quot;Flexible&quot;}
                    </p>
                  </div>
                </div>
                
                <div className=&quot;flex items-start&quot;>
                  <Briefcase className=&quot;mt-1 h-5 w-5 text-muted-foreground&quot; />
                  <div className=&quot;ml-3&quot;>
                    <p className=&quot;text-sm text-muted-foreground&quot;>Job Type</p>
                    <p className=&quot;font-medium&quot;>Freelance / Remote</p>
                  </div>
                </div>
                
                {!isOwnJob && (
                  <Button 
                    className=&quot;w-full mt-4&quot; 
                    onClick={handleApply}
                    disabled={isOwnJob}
                  >
                    Apply Now
                  </Button>
                )}
                
                {isOwnJob && (
                  <div className=&quot;text-center p-2 bg-muted rounded-md mt-4&quot;>
                    <p className=&quot;text-sm text-muted-foreground&quot;>This is your job posting</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
      
      {/* Job application modal */}
      {job && (
        <ApplyToJobModal
          job={{
            id: job.id,
            title: job.title,
            description: job.description,
            company_name: job.company_name || &quot;Company&quot;,
            budget: job.budget,
            client_id: job.client_id
          }}
          isOpen={isApplyModalOpen}
          onClose={() => setIsApplyModalOpen(false)}
        />
      )}
    </>
  )
}
