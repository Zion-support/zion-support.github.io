
  }
  
  static getDerivedStateFromError(error) {}
    return { hasError: true }
  }
  
  componentDidCatch(error, errorInfo) {}
    console.error('Error caught by boundary:, error, errorInfo);
  }
  
  render() {}
    if (this.state.hasError) {}
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
=======
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
export default function OnboardingWizard() {export default function OnboardingWizard() {export default function OnboardingWizard() {class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error) {return { hasError: true }
}componentDidCatch(error, errorInfo) {console.error(Error caught by boundary:', error, errorInfo)}render() {if (this.state.hasError) ;}
  return <div />Something went wrong.</div>;}
    }return this.props.children;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  }

  const steps = useMemo(() => {
    if (isClient) {
      return [
    if (isClient) {
      return [
        {
          title: Ready to find top IT talent?'
          content: (
            <div className='space-y-4>
              <p>Post a role or import your job brief to get started.</p>
              <Link href=/jobs/post'>
                <a className='inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-white/5>
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
                  Post a job
=======
}
import React, { useMemo, useState } from 'react';

            <div className=space-y-4>
              <p>Post a role or import your job brief to get started.</p>'
              <Link href='/jobs/post>
                <a className='inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-white/5'>;
                  Post a job;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                </a>
              </Link>
            </div>
          )
        }


>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

 ;
  }
    }
    if (isClient) {

        }
];

    }

=======

          title: 'Invite or message talent',
          content: <p>Send invites or start a conversation to move fast.</p>}];
    }
    return []
      {
        title: Complete your profile'
        content: ('
          <div className=space-y-3>
    if (isClient) {
      return [;
export default function OnboardingWizard() { return null; }
  const { user, completeOnboarding, setUser } = useUser();
  const { addToast } = useToast();
  const [step, setStep] = useState(0);

            <input'
              className='w-full rounded-md border px-3 py-2 bg-transparent
              placeholder='Your title (e && e.g., Senior LLM Engineer)'
              onChange={e =>;
                setUser(prev => (prev ? { ...prev, name: prev && prev.name } : prev));
              }
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
            />;
            <textarea
              className=w-full rounded-md border px-3 py-2 bg-transparent''
              placeholder=Short bio
                  <button;

                  className='px-3 py-1 rounded-full border hover:bg-gray-50 dark:hover:bg-white/5 capitalize'>;
                  {a}
                </button>;
              ))}

          className=px-3 py-2 rounded-md border disabled:opacity-40;
        >;
          Back;
        </button>;

            className='px-3 py-2 rounded-md border';
          >;
            Next;
          </button>;

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
          >;
            Finish;
          </button>        )}
      </div>;
    </div>;


}
      return [;
export default /**;
 * OnboardingWizard - Function description;

                <a className='inline - flex items - center gap - 2 rounded - md border px - 3 py - 2 text - sm hover:bg - gray - 50 dark:hover:bg - white / 5>;
                  Post a job;
                </a>;
              </Link>;

                    className=px - 3 py - 1 rounded - full border hover:bg - gray - 50 dark:hover:bg - white / 5';
                  >;
                    {s}
                  </button>))}

                  className='px - 3 py - 1 rounded - full border hover:bg - gray - 50 dark:hover:bg - white / 5 capitalize;
                >;
                  {a}
                </button>))}
            </div>;

          className=px - 3 py - 2 rounded - md border disabled:opacity - 40';
        >;
          Back;
        </button>;

            className='px - 3 py - 2 rounded - md border;
          >;
            Finish;
          </button>        )}
      </div>;

            <input type=checkbox default_checked /> Enable AI matchmaking;
          </label>;
        </div>) }];
  }, [is_client, set_user]);
  // Check condition;
if (return null) {}
  $2;
}

      </div>;
    </div>);
            className=px-3 py-2 rounded-md border'
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
          >
            Finish
          </button>
        )}
      </div>
    </div>
  );
}
      { title: 'Enable AI matchmaking, content: (
        <div className="space-y-2">
          <p>Turn on AI-powered matching to get discovered faster.</p>
          <label className=inline-flex items-center gap-2 text-sm>
            <input type="checkbox" defaultChecked /> Enable AI matchmaking
          </label>
        </div>
      ) }]
  }, [isClient, setUser])
  if (!user |user.onboardingCompleted) return null
  return (
    <div className=mb-6 rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white/60 dark:bg-black/40>
      <div className="flex items-center justify-between">
        <div>
          <div className=text-xs uppercase tracking-wide opacity-70 mb-1>Onboarding</div>
          <div className="text-sm font-medium">{steps[step]?.title}</div>
        </div>
        <div className=text-xs opacity-70>Step {step + 1} of {steps.length}</div>
      </div>
      <div className="mt-4 text-sm">{steps[step]?.content}</div>
      <div className=mt-4 flex items-center justify-between>
        <button disabled={step === 0} onClick={() => setStep(s => Math.max(0, s - 1))} className="px-3 py-2 rounded-md border disabled:opacity-40">Back</button>
        {step < steps.length - 1 ? (
          <button onClick={() => setStep(s => Math.min(steps.length - 1, s + 1))} className=px-3 py-2 rounded-md border>Next</button>
        ) : (
          <button onClick={() => { completeOnboarding(), addToast({ title: Onboarding completed', description: 'You can revisit anytime from Settings., variant: success' }) }} className="px-3 py-2 rounded-md border">Finish</button>
        )}
=======

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
        )}
      </div>;
    </div>;
  )}

          </label>;
        </div>;
      ) }];
  }, [isClient, setUser])if (!user |user.onboardingCompleted) return null;

        </div>;
        <div className="text-xs opacity-70">Step {step + 1} of {steps.length}</div>;"
      </div>;

        )}
    </div>);
}
      </div>;
    </div>;
)}
        { title: 'Ready to find top IT talent?, content: (
          <div className="space-y-3">
            <p>We will help you find the best IT talent for your projects.</p>
          </div>
        ) },
        { title: View suggested matches', content: <p>We will surface the best matches instantly based on your job brief.</p> },
        { title: 'Invite or message talent, content: <p>Send invites or start a conversation to move fast.</p> }]
    }
    return [
      { title: Complete your profile', content: (
        <div className=space-y-3>
          <input className="w-full rounded-md border px-3 py-2 bg-transparent" placeholder=Your title (e.g., Senior LLM Engineer) onChange={(e) => setUser(prev => prev ? { ...prev, name: prev.name } : prev)} />
          <textarea className = $2;
      { title: 'Choose skills and availability, content: (
        <div className = $2;
      { title: Preview your profile', content: <p>Review how clients will see your profile.</p> },
      { title: 'Enable AI matchmaking', content: (
        <div className="space-y-2">
          <p>Turn on AI-powered matching to get discovered faster.</p>
          <label className=inline-flex items-center gap-2 text-sm>
            <input type="checkbox" defaultChecked /> Enable AI matchmaking
          </label>
        </div>
      ) }]
  }, [isClient, setUser])


=======
        )}
      </div>
    </div>
  );
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      </div>
    </div>
);
origin/cursor/automate-test-improve-and-merge-code-2533
}

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
