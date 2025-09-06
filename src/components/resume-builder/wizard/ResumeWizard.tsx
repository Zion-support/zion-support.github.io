import { useState, useEffect  } from 'react';
import { useAuth  } from '@/hooks/useAuth';
import { useResume  } from '@/hooks/useResume';
import { Tabs  } from '@/components/ui/tabs';
import { Card, CardContent  } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle  } from '@/components/ui/alert';
import { AlertCircle, FilePlus, Loader2 } from 'lucide-react'
import { Button  } from '@/components/ui/button';
import { Resume  } from '@/types/resume';

import { useState, useEffect } from 'react',;
import { useAuth } from '@/hooks/useAuth',;
import { useResume } from '@/hooks/useResume',;
import { Tabs } from '@/components/ui/tabs',;
import { Card, CardContent } from '@/components/ui/card',;
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert',;
import { AlertCircle, FilePlus, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button',;
import { Resume } from '@/types/resume',;
// Import components;
import { ResumeProgress } from './ResumeProgress',;
import { EmptyResumeState } from './EmptyResumeState',;
import { CreateResumeForm } from './CreateResumeForm',;
import { ResumeSteps } from './ResumeSteps',;
import { ResumeStepContent } from './ResumeStepContent',;
import { useResumeProgress } from './useResumeProgress',;
import { ResumeVersionSelector } from './ResumeVersionSelector',;
import { RESUME_STEPS } from './constants',;
export function ResumeWizard() {;
  const { user } = useAuth(),;
  const {;
    isLoading,;
    error,;
    resume,;
    fetchResume,;
    createResume;
  } = useResume(),;
  const [activeTab, setActiveTab] = useState('basic-info'),;
  const [showNewResumeForm, setShowNewResumeForm] = useState(false),;
  // Use the extracted hook for progress calculation;
  const progress = useResumeProgress(resume),;
  useEffect(() => {;
    if (user) {;
      fetchResume();
    }
  }, [user, fetchResume]),;
  const handleCreateNewResume = async (title: string) => {;
    const resumeId = await createResume({ title: title.trim() }),;
    if (resumeId) {;
      await fetchResume(resumeId),;
      setShowNewResumeForm(false);
    }
  },;
  const nextStep = () => {;
    const currentIndex = RESUME_STEPS.findIndex(step => step.id === activeTab),;
    if (currentIndex < RESUME_STEPS.length - 1) {;
      const nextStep = RESUME_STEPS[currentIndex + 1],;
      if (nextStep) {;
        setActiveTab(nextStep.id);
      }
    }
  },;
  const prevStep = () => {;
    const currentIndex = RESUME_STEPS.findIndex(step => step.id === activeTab),;
    if (currentIndex > 0) {;
      const prevStep = RESUME_STEPS[currentIndex - 1],;
      if (prevStep) {;
        setActiveTab(prevStep.id);
      }
    }
  },

  const handleResumeChange = (resumeId: string) => {
    fetchResume(resumeId)
  },
  

  if (error) {;

};

};
<AlertTitle>Error</AlertTitle> <AlertDescription> {;
  error ;
}</AlertDescription> </Alert>) ;

}if (showNewResumeForm) {;

  () => setShowNewResumeForm (false) ;
}isLoading= {;
  isLoading ;
}/>) ;
}> <FilePlus className="h-4 w-4" /> Create New </Button> </div> </div> <Card> </div> <Tabsvalue= {
  activeTab 
}onValueChange= {
  setActiveTab 
}> <ResumeStepssteps= {
  RESUME STEPS 
}activeTab= {
  activeTab 
}onChange= {
  setActiveTab 
}/> {;
  resume && (<ResumeStepContentactiveTab= {
  activeTab 
      <Card>;
        <CardContent className="pt - 6">;
          <div className="flex flex - col sm:flex - row justify - between items - start sm:items - center gap - 4 mb - 6">;
            <h2 className="text - xl font - semibold">{resume?.basic_info?.title || 'My Resume'}</h2>;
            <ResumeProgress resume={resume} progress={progress} />;
          </div>;
          <Tabs value={active_tab} onValueChange={setActiveTab}>;
            <ResumeSteps;
              steps = {RESUME_STEPS, }
              active_tab = {active_tab, }
              on_change = {setActiveTab, }
            />;
            {resume && (
              <ResumeStepContent;
                active_tab = {active_tab, }
                resume = {resume as Resume, }
                onNextStep = {next_step, }
                onPrevStep = {prev_step, }
              />)}
          </Tabs>;
        </CardContent>;
      </Card>;
    </div>);
}resume= {
  resume as Resume;
}onNextStep= {
  next_step;
}onPrevStep= {



  prev_step;
}/>);
}</Tabs> </CardContent> </Card> </div>);
}'"}
