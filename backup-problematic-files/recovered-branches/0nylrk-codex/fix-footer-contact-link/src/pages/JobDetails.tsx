
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, DollarSign, Tag, Users, Briefcase } from '@/components/icons';
import { formatDistanceToNow } from 'date-fns';
import { toast } from 'sonner';
import { useAuth } from '@/hooks/useAuth';
import useJobDetails from '@/hooks/useJobDetails';
import { ApplyToJobModal } from '@/components/messaging/job-application';
import { SEO } from '@/components/SEO';
import { useWhitelabel } from '@/context/WhitelabelContext';
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
      <>;
        <Header />;
"
        <div className="container mx-auto px-4 py-16 text-center">;"
          <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>;""
          <p className="mb-8">The job you're looking for doesn't exist or has been removed.</p>;')
          <Button onClick={() => navigate('/jobs')}>View All Jobs;
        <Footer />;

      </>;
    ),;
  }
  const handleApply = () => {;
    if (!isAuthenticated) {;
      toast.error("Please log in to apply for this job"),;""
      navigate('/login?redirect=' + encodeURIComponent(`/jobs/${jobId}`)),;
      return,;
    if (user?.userType !== "jobSeeker" && user?.userType !== "talent") {;""
      toast.error("Only job seekers can apply for jobs"),;"
    setIsApplyModalOpen(true),;
  },;
  const handleApplySuccess = async (appliedJobId:string) => {;"
    toast.success("Application submitted successfully!"),;"
    setIsApplyModalOpen(false);
  const formatBudget = (budget:any) => {;"
    if (!budget) return "Not specified",;"`;
    return `$${budget.min} - $${budget.max}`,;
  const isOwnJob = user?.id === job.client_id,;
      <SEO ;"`;
        title={`${job.title} - ${isWhitelabel ? brandName :'Zion AI Marketplace'}`}')
        description={job.description.substring(0, 160)}
      />;


      <main className="container mx-auto px-4 py-8">;"
</main>"
        <div className="mb-6">;"
</div>
          <Button ;"
            variant="outline" ;""
            size="sm";""
            onClick={() => navigate('/jobs')}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">;"
          <div className="lg:col-span-2">;"
            <Card>;

              <CardHeader>;
                <div className="flex justify-between items-start">;"
                  <div>;
                    <CardTitle className="text-2xl mb-2">{job.title};""
                    <div className="flex items-center text-muted-foreground">;"
                      <Calendar className="mr-2 h-4 w-4" />;"

                      <span>Posted {formatDistanceToNow(new Date(job.created_at), { addSuffix: true ;})}</span>;
                  <Badge>{job.category};
              ;"
              <CardContent className="space-y-6">;"

                  <h3 className="font-semibold text-lg mb-3">Job Description</h3>;""
                  <div className="whitespace-pre-wrap">;"
                  <h3 className="font-semibold text-lg mb-3">Required Skills</h3>;""
                  <div className="flex flex-wrap gap-2">;"
                      <Badge key={i} variant="secondary">;"

              <CardContent className="pt-6 space-y-4">;"
                <div className="flex items-start">;"
                  <DollarSign className="mt-1 h-5 w-5 text-muted-foreground" />;"
                  <div className="ml-3">;"
                    <p className="text-sm text-muted-foreground">Budget</p>;""
                    <p className="font-medium">{formatBudget(job.budget)}</p>;"
                </div>;"
                  <Clock className="mt-1 h-5 w-5 text-muted-foreground" />;"
                    <p className="text-sm text-muted-foreground">Deadline</p>;""
                    <p className="font-medium">;"
</p>
                    </p>;
                  <Briefcase className="mt-1 h-5 w-5 text-muted-foreground" />;"
                    <p className="text-sm text-muted-foreground">Job Type</p>;""
                    <p className="font-medium">Freelance / Remote</p>;"
                    className="w-full mt-4" ;"
                    onClick={handleApply}
                    disabled={isOwnJob}
                  >;

                  <div className="text-center p-2 bg-muted rounded-md mt-4">;"
                    <p className="text-sm text-muted-foreground">This is your job posting</p>;"
      </main>;

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
"`;