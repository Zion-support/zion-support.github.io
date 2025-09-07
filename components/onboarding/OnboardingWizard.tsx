export default function OnboardingWizard() {export default function OnboardingWizard() {export default function OnboardingWizard() {class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error) {return { hasError: true }
}componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}render() {if (this.state.hasError) ;}
  return <div />Something went wrong.</div>;}
    }return this.props.children;
  }
}
import React, { useMemo, useState } from 'react';

  const steps = useMemo(() => {
    if (isClient) {
      return [


        )}
      </div>;
    </div>;
  )}
      { title: 'Enable AI matchmaking',
  content: (<div className=\"space-y-2\" />;
          <p />Turn on AI-powered matching to get discovered faster.</p>;"
          <label className=\"inline-flex items-center gap-2 text-sm\" />;"
            <input type=\"checkbox\" defaultChecked /> Enable AI matchmaking;
          </label>;}
        </div>;}
      ) }];
  }, [isClient, setUser])if (!user |user.onboardingCompleted) return null;"
  return (<div className=\"mb-6 rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white/60 dark:bg-black/40\" />;"
      <div className=\"flex items-center justify-between\" />;
        <div />;"
          <div className=\"text-xs uppercase tracking-wide opacity-70 mb-1\" />Onboarding</div>;"
          <div className=\"text-sm font-medium\" />{steps[step]?.title}</div>;
        </div>;"
        <div className=\"text-xs opacity-70\" />Step {step + 1} of {steps.length}</div>;
      </div>;"
      <div className=\"mt-4 text-sm\" />{steps[step]?.content}</div>;"
      <div className=\"mt-4 flex items-center justify-between\" />;"
        <button disabled={step === 0} onClick={() = /> setStep(s => Math.max(0, s - 1))} className=\"px-3 py-2 rounded-md border disabled:opacity-40\">Back</button>;"
        {step < steps.length - 1 ? (<button onClick={() = /> setStep(s => Math.min(steps.length - 1, s + 1))} className=\"px-3 py-2 rounded-md border\">Next</button>;
        ) : (<button onClick={() = /> { completeOnboarding(), addToast({ title: 'Onboarding completed'}
  description: 'You can revisit anytime from Settings.', variant: 'success' }) ,"
} className=\"px-3 py-2 rounded-md border\">Finish</button>;
        )}

      </div>
    </div>
);
origin/cursor/automate-test-improve-and-merge-code-2533
}

"