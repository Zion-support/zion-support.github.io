
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
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false),;
  if (isLoading) {;
    return (;
      <div className="flex items-center justify-center min-h-screen">;"
</div>"
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>;"
      </div>;
),;
  }
;
  if (error || !job) {;
    return (;
      <>;
        <Header />;
"
        <div className="container mx-auto px-4 py-16 text-center">;"
          <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>;""
          <p className="mb-8">The job you're looking for doesn't exist or has been removed.</p>;')
          <Button onClick={() => navigate('/jobs')}>View All Jobs;
        <Footer />;

      </>;
/>;
<Header />;
      <main className="container mx-auto px-4 py-8">;
        <div className="mb-6">;

            onClick={() => navigate('/jobs')}
          >;
            ← Back to Jobs;
          </Button>;
        </div>;
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">;
          <div className="lg:col-span-2">;
            <Card>;

              <CardHeader>;
                <div className="flex justify-between items-start">;"
                  <div>;
                </div>;
              </CardHeader>;
              <CardContent className="space-y-6">;
                <div>;
                  <h3 className="font-semibold text-lg mb-3">Job Description</h3>;
                  <div className="whitespace-pre-wrap">;

                      <Badge key={i} variant="secondary">;
                        {skill}
                      </Badge>;
                    ))}
                  </div>;
                </div>;
              </CardContent>;
            </Card>;
          </div>;

          <div>;
            <Card>;
              <CardContent className="pt-6 space-y-4">;
                <div className="flex items-start">;
                  <DollarSign className="mt-1 h-5 w-5 text-muted-foreground" />;
                  <div className="ml-3">;
                    <p className="text-sm text-muted-foreground">Budget</p>;

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

                    onClick={handleApply}
                    disabled={isOwnJob}
                  >;
                    Apply Now;

              </CardContent>;
            </Card>;
          </div>;
        </div>;
      </main>;
      <Footer />;

        <ApplyToJobModal;
          job={{;
            id: job.id;,;
            title: job.title;,,
  description: job.description;,;
            company_name: job.company_name || "Company";,;
            title: job.title;,;
            description: job.description;,;"
            company_name: job.company_name || "Company";,;"
pr-12325
            budget: job.budget;,;
            client_id:job.client_id;
          }}
          isOpen={isApplyModalOpen}
          onClose={() => setIsApplyModalOpen(false)}
/>;
      )}
    </>;
  ),;}
 const [isApplyModalOpen, setIsApplyModalOpen] = useState (false);
if (error || !job) {"
  return (<> <Header /> <div className="container mx-auto px-4 py-16 text-center" > <h1 className="text-2xl font-bold mb-4" >Job Not Found</h1> <p className="mb-8" >The job you're looking for doesn't exist or has been removed.</p> <Button onClick= {
)
}>View All Jobs </div> <Footer /> </>) 

}/> <Header /> <main className="container mx-auto px-4 py-8" > <div className="mb-6" > <Button >  Back to Jobs  </div> <div className="grid grid-cols-1 lg: grid-cols-3 gap-6" > <div className="lg:col-span-2" > <Card> <CardHeader> <div className="flex justify-between items-start" > <div> </div> </div> <Badge> {";
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
}
