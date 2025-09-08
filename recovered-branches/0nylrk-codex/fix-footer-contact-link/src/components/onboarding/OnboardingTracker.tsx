
}: OnboardingTrackerProps) {
  const completedSteps = steps.filter(step => step.completed).length;
  const progress = Math.round((completedSteps / steps.length) * 100);


  return (



      {/* Steps list */}


      </div>;
    </div>;
  );
}





