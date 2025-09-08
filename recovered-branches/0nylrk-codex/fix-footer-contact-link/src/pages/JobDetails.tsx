

  
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false),

  if (isLoading) {


  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  if (isLoading) {;

  if (error || !job) {;



          <Button onClick={() => navigate('/jobs')}>View All Jobs</Button>;
        </div>;
        <Footer />;
      </>;




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

                ;
                {!isOwnJob && (;
                  <Button ;
                    className="w-full mt-4" ;


                



      <Footer />

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
    </>;


