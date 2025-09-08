

import { cn } from '@/lib/utils';
  title: string;
  description: string;
  icon: React.ReactNode;
  action: {
    text: string;







        text: 'Browse Talent',
        url: '/talent',
      },
    },
  ]


        text: 'Enable Matchmaking',
        url: '/talent-dashboard',
      },
    },
  ]
  const steps = type === 'client' ? clientSteps : talentSteps
  // Navigate to the specified URL
  const handleAction = () => {
    const currentStepData = steps[currentStep]
    if (!currentStepData) return;
    if (currentStep < steps.length - 1) {
      router.push(currentStepData.action.url); // Changed to router.push
      setCurrentStep(currentStep + 1)
    } else {
      // Last step
      router.push(currentStepData.action.url); // Changed to router.push
      onComplete()
    }
  }
  // Skip the current step
  const handleSkip = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Last step
      onSkip()
    }
  }
    >


  
  return (
    <Card className={cn("border border-zion-blue-light bg-zion-blue-dark/80 backdrop-blur-sm w-full max-w-md", className)}>

          <div className='flex items-center justify-center flex-1'>
          <div className='flex items-center justify-center flex-1'>
          <div className="flex items-center justify-center flex-1">
            {steps.map((_, index) => (
              <div
                key={index}
                className={cn(
                  'h-2 w-2 rounded-full mx-1',                  index === currentStep
                    ? 'bg-zion-purple scale-125'




            onClick={handleSkip}
          >;



