
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
class ErrorBoundary extends React.Component {
  constructor(props) {
=======
class ErrorBoundary extends React.Component {}
  constructor(props) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {}
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {}
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {}
    if (this.state.hasError) {}
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}'
import React from 'react';



<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import EnhancedButton from "../../components/ui/EnhancedButton";
import { TrustBadge, MicroTestimonial } from "../../components/ui/Badges";
<<<<<<< HEAD
<<<<<<< HEAD
=======

const TalentProfile: NextPage = () => {
  const router = useRouter(),
  const { slug } = router.query,
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
const TalentProfile: NextPage = () => {
=======


import type { NextPage } from "next";"
import Head from "next/head";"
import { useRouter } from "next/router";"
import { useState } from "react";"
import EnhancedButton from "../../components/ui/EnhancedButton";"
import { TrustBadge, MicroTestimonial } from "../../components/ui/Badges";
const TalentProfile: NextPage = () => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const router = use_router ();
  const { slug } = router.query;


const TalentProfile: NextPage = () => {;
  const router = useRouter();
  const { slug } = router && router.query;

  const [responseLog, setResponseLog] = useState<;"
    Array<{ action: "Accept" | "Decline" | "Negotiate"; at: string }>;
  >([]);
"
  const handleRespond = (action: "Accept" | "Decline" | "Negotiate") => {;
    setResponseLog((prev) => [;
      ...prev,;
      { action, at: new Date().toISOString() },;

    ]);
  }'
import type { NextPage } from 'next','
import Head from 'next/head','
import { useRouter } from 'next/router','
import { useState } from 'react','
import EnhancedButton from '../../components/ui/EnhancedButton','
import { TrustBadge, MicroTestimonial } from '../../components/ui/Badges',
const TalentProfile: NextPage = () => {}
  const router = useRouter(),
  const { slug } = router.query,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  return (
    <div className="space-y-6 pb-20">;
=======
  return (";
    <div className="space-y-6 pb-20">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      {" "}
      <Head>;
        <title>{slug} - Talent - Zion</title>;
      </Head>;"
      <header className="flex items-start justify-between gap-4">;
        <div>;"
          <h1 className="text-2xl font-semibold">{slug}</h1>;"
          <div className="text-sm opacity-80">Full-Stack Developer</div>;"
          <div className="mt-2 flex gap-1">;"
            <TrustBadge type="Verified" />;"
            <TrustBadge type="Top Rated" />;
          </div>;
        </div>;"
        <div className="flex gap-2">;"
          <EnhancedButton onClick={() => handleRespond("Accept")}>;
            Accept;
          </EnhancedButton>;
          <EnhancedButton"
            variant="secondary""
            onClick={() => handleRespond("Decline")}
          >;
            Decline;
          </EnhancedButton>;
          <EnhancedButton"
            variant="ghost""
            onClick={() => handleRespond("Negotiate")}


<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const [responseLog, setResponseLog] = useState<Array<{ action: 'Accept' | 'Decline' | 'Negotiate', at: string }>>([]),
  const handleRespond = (action: 'Accept' | 'Decline' | 'Negotiate') => {
    setResponseLog((prev) => [...prev, { action, at: new Date().toISOString() }])
  },
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (
=======
'
  const [responseLog, setResponseLog] = useState<Array<{ action: 'Accept' | 'Decline' | 'Negotiate', at: string }>>([]),'
  const handleRespond = (action: 'Accept' | 'Decline' | 'Negotiate') => {}
    setResponseLog((prev) => [...prev, { action, at: new Date().toISOString() }])
  },

  return ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    <div className="space-y-6 pb-20">
=======
  return (
    <div className="space-y-6 pb-20">
=======
const [responseLog, setResponseLog] = useState<
    Array<{ action: 'Accept' | 'Decline' | 'Negotiate'; at: string }>
  >([]);

  const handleRespond = (action: 'Accept' | 'Decline' | 'Negotiate') => {
    setResponseLog(prev => [...prev, { action, at: new Date().toISOString() }]);
  };

  return (
    <div className='space-y-6 pb-20'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      <Head>
        <title>{slug} - Talent - Zion</title>
      </Head>
<<<<<<< HEAD

<<<<<<< HEAD
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      <header className="flex items-start justify-between gap-4">
        <div>"
          <h1 className="text-2xl font-semibold">{slug}</h1>"
          <div className="text-sm opacity-80">Full-Stack Developer</div>"
          <div className="mt-2 flex gap-1">"
            <TrustBadge type="Verified" />"
            <TrustBadge type="Top Rated" />
          </div>
<<<<<<< HEAD
        </div>
=======
<<<<<<< HEAD
      <header className="flex items-start justify-between gap-4">
=======
<header className='flex items-start justify-between gap-4'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
        <div>
          <h1 className='text-2xl font-semibold'>{slug}</h1>
          <div className='text-sm opacity-80'>Full-Stack Developer</div>
          <div className='mt-2 flex gap-1'>
            <TrustBadge type='Verified' />
            <TrustBadge type='Top Rated' />
          </div>
        </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        <div className="flex gap-2">
          <EnhancedButton onClick={() => handleRespond('Accept')}>Accept</EnhancedButton>
          <EnhancedButton variant="secondary" onClick={() => handleRespond('Decline')}>Decline</EnhancedButton>
          <EnhancedButton variant="ghost" onClick={() => handleRespond('Negotiate')}>Negotiate</EnhancedButton>
        </div>
      </header>

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      <section className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          <div className="border rounded-md p-4">
            <h2 className="font-semibold mb-2">About</h2>
=======
        </div>"
        <div className="flex gap-2">'
          <EnhancedButton onClick={() => handleRespond('Accept')}>Accept</EnhancedButton>'"
          <EnhancedButton variant="secondary" onClick={() => handleRespond('Decline')}>Decline</EnhancedButton>'"
          <EnhancedButton variant="ghost" onClick={() => handleRespond('Negotiate')}>Negotiate</EnhancedButton>
        </div>
      </header>
"
      <section className="grid md:grid-cols-3 gap-6">"
        <div className="md:col-span-2 space-y-4">"
          <div className="border rounded-md p-4">"
            <h2 className="font-semibold mb-2">About</h2>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <p className="text-sm opacity-90">
<<<<<<< HEAD
              Experienced developer specializing in React, Next.js, and Node.js.
            </p>
          </div>"
          <div className="border rounded-md p-4">"
            <h2 className="font-semibold mb-2">Testimonials</h2>
            <MicroTestimonial"
              quote="Fantastic work, delivered on time.""
              author="Acme Corp"
            />
          </div>
<<<<<<< HEAD
        </div>
=======
=======
        <div className='flex gap-2'>
          <EnhancedButton onClick={() => handleRespond('Accept')}>
            Accept
          </EnhancedButton>
          <EnhancedButton
            variant='secondary'
            onClick={() => handleRespond('Decline')}
          >
            Decline
          </EnhancedButton>
          <EnhancedButton
            variant='ghost'
            onClick={() => handleRespond('Negotiate')}
          >
            Negotiate
          </EnhancedButton>
        </div>
      </header>

      <section className='grid md:grid-cols-3 gap-6'>
        <div className='md:col-span-2 space-y-4'>
          <div className='border rounded-md p-4'>
            <h2 className='font-semibold mb-2'>About</h2>
            <p className='text-sm opacity-90'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
              Experienced developer specializing in React, Next.js, and Node.js.
            </p>
          </div>

          <div className='border rounded-md p-4'>
            <h2 className='font-semibold mb-2'>Testimonials</h2>
            <MicroTestimonial
              quote='Fantastic work, delivered on time.'
              author='Acme Corp'
            />
          </div>
        </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        <aside className="space-y-4">
          <div className="border rounded-md p-4">
            <h3 className="font-semibold mb-2">Response Log</h3>
            <ul className="space-y-1 text-sm">
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
=======
;
  const [response_log, setResponseLog] = useState<;
    Array<{ action: "Accept" | "Decline" | "Negotiate"; at: string }>;
  >([]);
;
  const handle_respond = (action: "Accept" | "Decline" | "Negotiate") =>: any {
    setResponseLog ((prev) => [;
      ...prev,
      { action, at: new Date ().toISOString () },
    ]);
  }
;
  return (
    <div className="space - y-6 pb - 20">;
      {" "}
      <Head>;
        <title>{slug} - Talent - Zion</title>;
      </Head>;
      <header className="flex items - start justify - between gap - 4">;
        <div>;
          <h1 className="text - 2xl font - semibold">{slug}</h1>;
          <div className="text - sm opacity - 80">Full - Stack Developer</div>;
          <div className="mt - 2 flex gap - 1">;
            <TrustBadge type="Verified" />;
            <TrustBadge type="Top Rated" />;
          </div>;
        </div>;
        <div className="flex gap - 2">;
          <EnhancedButton on_click={() => handle_respond ("Accept")}>;
            Accept;
          </EnhancedButton>;
          <EnhancedButton;
            variant="secondary";
            on_click={() => handle_respond ("Decline")}
          >;
            Decline;
          </EnhancedButton>;
          <EnhancedButton;
            variant="ghost";
            on_click={() => handle_respond ("Negotiate")}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
        </div>"
        <aside className="space-y-4">"
          <div className="border rounded-md p-4">"
            <h3 className="font-semibold mb-2">Response Log</h3>"
            <ul className="space-y-1 text-sm">

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          >;
            Negotiate;
          </EnhancedButton>;
        </div>;
      </header>;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
              {responseLog.length === 0 && <li className="opacity-70">No responses yet.</li>}
              {responseLog.map((r, idx) => (
                <li key={idx} className="flex items-center justify-between">
                  <span>{r.action}</span>
                  <span className="opacity-70">{new Date(r.at).toLocaleString()}</span>
                </li>
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

              ))  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            </ul>;
          </div>;
        </aside>;
      </section>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

export default TalentProfile;
=======

},;


export default TalentProfile;


=======
    </div>);
}
            </ul>;
          </div>;
        </aside>;
      </section>;
    </div>;
  );
},;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default TalentProfile;
<<<<<<< HEAD
<<<<<<< HEAD
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======

        <aside className='space-y-4'>
          <div className='border rounded-md p-4'>
            <h3 className='font-semibold mb-2'>Response Log</h3>
            <ul className='space-y-1 text-sm'>
              {responseLog.length === 0 && (
                <li className='opacity-70'>No responses yet.</li>
              )}
              {responseLog.map((r, idx) => (
                <li key={idx} className='flex items-center justify-between'>
                  <span>{r.action}</span>
                  <span className='opacity-70'>
                    {new Date(r.at).toLocaleString()}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </div>
);
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533

export default TalentProfile;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


export default TalentProfile;
;


'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
