<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from 'react';
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import EnhancedButton from "../../components/ui/EnhancedButton";
import { TrustBadge, MicroTestimonial } from "../../components/ui/Badges";
<<<<<<< HEAD
import type { NextPage } from './next';
import Head from './next / head';
import { use_router  } from './next / router';
import { useState  } from './react';
import EnhancedButton from "../../components / ui / EnhancedButton";
import { TrustBadge, MicroTestimonial  } from '../../components / ui / Badges';
const TalentProfile: NextPage = () => {
  const router = use_router ();
  const { slug } = router.query;
const TalentProfile: NextPage = () => {;
  const router = useRouter();
  const { slug } = router && router.query;
  const [responseLog, setResponseLog] = useState<;
    Array<{ action: "Accept" | "Decline" | "Negotiate"; at: string }>;
  >([]);
  const handleRespond = (action: "Accept" | "Decline" | "Negotiate") => {;
    setResponseLog((prev) => [;
      ...prev,;
      { action, at: new Date().toISOString() },;
    ]);
  }
  return (
    <div className="space-y-6 pb-20">;
      {" "}
      <Head>;
        <title>{slug} - Talent - Zion</title>;
      </Head>;
      <header className="flex items-start justify-between gap-4">;
        <div>;
          <h1 className="text-2xl font-semibold">{slug}</h1>;
          <div className="text-sm opacity-80">Full-Stack Developer</div>;
          <div className="mt-2 flex gap-1">;
            <TrustBadge type="Verified" />;
            <TrustBadge type="Top Rated" />;
          </div>;
        </div>;
        <div className="flex gap-2">;
          <EnhancedButton onClick={() => handleRespond("Accept")}>;
            Accept;
          </EnhancedButton>;
          <EnhancedButton
            variant="secondary"
            onClick={() => handleRespond("Decline")}
          >;
            Decline;
          </EnhancedButton>;
          <EnhancedButton
            variant="ghost"
            onClick={() => handleRespond("Negotiate")}
  const [responseLog, setResponseLog] = useState<Array<{ action: 'Accept' | 'Decline' | 'Negotiate', at: string }>>([]),
  const handleRespond = (action: 'Accept' | 'Decline' | 'Negotiate') => {
    setResponseLog((prev) => [...prev, { action, at: new Date().toISOString() }])
  };
  return (
    <div className="space-y-6 pb-20">
      <Head>
        <title>{slug} - Talent - Zion</title>
      </Head>
      <header className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">{slug}</h1>
          <div className="text-sm opacity-80">Full-Stack Developer</div>
          <div className="mt-2 flex gap-1">
            <TrustBadge type="Verified" />
            <TrustBadge type="Top Rated" />
          </div>
        </div>
        <div className="flex gap-2">
          <EnhancedButton onClick={() => handleRespond('Accept')}>Accept</EnhancedButton>
          <EnhancedButton variant="secondary" onClick={() => handleRespond('Decline')}>Decline</EnhancedButton>
          <EnhancedButton variant="ghost" onClick={() => handleRespond('Negotiate')}>Negotiate</EnhancedButton>
        </div>
      </header>
      <section className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          <div className="border rounded-md p-4">
            <h2 className="font-semibold mb-2">About</h2>
            <p className="text-sm opacity-90">
              Experienced developer specializing in React, Next.js, and Node.js.
            </p>
          </div>
          <div className="border rounded-md p-4">
            <h2 className="font-semibold mb-2">Testimonials</h2>
            <MicroTestimonial
              quote="Fantastic work, delivered on time."
              author="Acme Corp"
            />
          </div>
        </div>
        <aside className="space-y-4">
          <div className="border rounded-md p-4">
            <h3 className="font-semibold mb-2">Response Log</h3>
            <ul className="space-y-1 text-sm">
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
          >;
            Negotiate;
          </EnhancedButton>;
        </div>;
      </header>;
              {responseLog.length === 0 && <li className="opacity-70">No responses yet.</li>}
              {responseLog.map((r, idx) => (
                <li key={idx} className="flex items-center justify-between">
                  <span>{r.action}</span>
                  <span className="opacity-70">{new Date(r.at).toLocaleString()}</span>
      <Head>
        <title>{_slug} - Talent - Zion</title>
      </Head>

      <header className=&quot;flex items-start justify-between gap-4&quot;>
        <div>
          <h1 className=&quot;text-2xl font-semibold&quot;>{slug}</h1>
          <div className=&quot;text-sm opacity-80&quot;>Full-Stack Developer</div>
          <div className=&quot;mt-2 flex gap-1&quot;>
            <TrustBadge type=&quot;Verified&quot; />
            <TrustBadge type=&quot;Top Rated&quot; />
          </div>
        </div>
        <div className=&quot;flex gap-2&quot;>
          <EnhancedButton onClick={() => handleRespond('Accept')}>Accept</EnhancedButton>
          <EnhancedButton variant=&quot;secondary&quot; onClick={() => handleRespond('Decline')}>Decline</EnhancedButton>
          <EnhancedButton variant=&quot;ghost&quot; onClick={() => handleRespond('Negotiate')}>Negotiate</EnhancedButton>
        </div>
      </header>

      <section className=&quot;grid md:grid-cols-3 gap-6&quot;>
        <div className=&quot;md:col-span-2 space-y-4&quot;>
          <div className=&quot;border rounded-md p-4&quot;>
            <h2 className=&quot;font-semibold mb-2&quot;>About</h2>
            <p className=&quot;text-sm opacity-90&quot;>Experienced developer specializing in React, Next.js, and Node.js.</p>
          </div>

          <div className=&quot;border rounded-md p-4&quot;>
            <h2 className=&quot;font-semibold mb-2&quot;>Testimonials</h2>
            <MicroTestimonial quote=&quot;Fantastic work, delivered on time.&quot; author=&quot;Acme Corp&quot; />
          </div>
        </div>

        <aside className=&quot;space-y-4&quot;>
          <div className=&quot;border rounded-md p-4&quot;>
            <h3 className=&quot;font-semibold mb-2&quot;>Response Log</h3>
            <ul className=&quot;space-y-1 text-sm&quot;>
              {responseLog.length === 0 && <li className=&quot;opacity-70&quot;>No responses yet.</li>}
              {responseLog.map((r, idx) => (
                <li key={idx} className=&quot;flex items-center justify-between&quot;>
                  <span>{r.action}</span>
                  <span className=&quot;opacity-70&quot;>{new Date(r.at).toLocaleString()}</span>

=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

=======
<<<<<<< HEAD
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from 'react';

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import EnhancedButton from "../../components/ui/EnhancedButton";
import { TrustBadge, MicroTestimonial } from "../../components/ui/Badges";

<<<<<<< HEAD
<<<<<<< HEAD
import type { NextPage } from 'next',
import Head from 'next/head',
import { useRouter } from 'next/router',
import { useState } from 'react',
import EnhancedButton from '../../components/ui/EnhancedButton',
import { TrustBadge, MicroTestimonial } from '../../components/ui/Badges',

const TalentProfile: NextPage = () => {
  const router = useRouter(),
  const { slug } = router.query,
  const [responseLog, setResponseLog] = useState<Array<{ action: 'Accept' | 'Decline' | 'Negotiate', at: string }>>([]),
  const handleRespond = (action: 'Accept' | 'Decline' | 'Negotiate') => {
    setResponseLog((prev) => [...prev, { action, at: new Date().toISOString() }])
  },
=======
import type { NextPage } from './next';
import Head from './next / head';
import { use_router  } from './next / router';
import { useState  } from './react';
import EnhancedButton from "../../components / ui / EnhancedButton";
import { TrustBadge, MicroTestimonial  } from '../../components / ui / Badges';

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
const TalentProfile: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;
<<<<<<< HEAD


const TalentProfile: NextPage = () => {;
  const router = useRouter();
  const { slug } = router && router.query;

  const [responseLog, setResponseLog] = useState<;
    Array<{ action: "Accept" | "Decline" | "Negotiate"; at: string }>;
  >([]);

  const handleRespond = (action: "Accept" | "Decline" | "Negotiate") => {;
    setResponseLog((prev) => [;
      ...prev,;
      { action, at: new Date().toISOString() },;

    ]);
  }
  return (
    <div className="space-y-6 pb-20">;
      {" "}
      <Head>;
        <title>{slug} - Talent - Zion</title>;
      </Head>;
      <header className="flex items-start justify-between gap-4">;
        <div>;
          <h1 className="text-2xl font-semibold">{slug}</h1>;
          <div className="text-sm opacity-80">Full-Stack Developer</div>;
          <div className="mt-2 flex gap-1">;
            <TrustBadge type="Verified" />;
            <TrustBadge type="Top Rated" />;
          </div>;
        </div>;
        <div className="flex gap-2">;
          <EnhancedButton onClick={() => handleRespond("Accept")}>;
            Accept;
          </EnhancedButton>;
          <EnhancedButton
            variant="secondary"
            onClick={() => handleRespond("Decline")}
          >;
            Decline;
          </EnhancedButton>;
          <EnhancedButton
            variant="ghost"
            onClick={() => handleRespond("Negotiate")}



  const [responseLog, setResponseLog] = useState<Array<{ action: 'Accept' | 'Decline' | 'Negotiate', at: string }>>([]),
  const handleRespond = (action: 'Accept' | 'Decline' | 'Negotiate') => {
    setResponseLog((prev) => [...prev, { action, at: new Date().toISOString() }])
  };
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
  const [responseLog, setResponseLog] = useState<
    Array<{ action: "Accept" | "Decline" | "Negotiate"; at: string }>
  >([]);
  const handleRespond = (action: "Accept" | "Decline" | "Negotiate") => {
    setResponseLog((prev) => [
      ...prev
      { action, at: new Date().toISOString() }
    ]);
  }
import type { NextPage } from 'next',
import Head from 'next/head',
import { useRouter } from 'next/router',
import { useState } from 'react',
import EnhancedButton from '../../components/ui/EnhancedButton',
import { TrustBadge, MicroTestimonial } from '../../components/ui/Badges',
const TalentProfile: NextPage = () => {
  const router = useRouter(),
  const { slug } = router.query,
  const [responseLog, setResponseLog] = useState<Array<{ action: 'Accept' | 'Decline' | 'Negotiate', at: string }>>([]),
  const handleRespond = (action: 'Accept' | 'Decline' | 'Negotiate') => {
    setResponseLog((prev) => [...prev, { action, at: new Date().toISOString() }])
  },
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  return (
    <div className="space-y-6 pb-20">
      <Head>
        <title>{slug} - Talent - Zion</title>
      </Head>
      <header className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">{slug}</h1>
          <div className="text-sm opacity-80">Full-Stack Developer</div>
          <div className="mt-2 flex gap-1">
            <TrustBadge type="Verified" />
            <TrustBadge type="Top Rated" />
          </div>
        </div>
        <div className="flex gap-2">
          <EnhancedButton onClick={() => handleRespond('Accept')}>Accept</EnhancedButton>
          <EnhancedButton variant="secondary" onClick={() => handleRespond('Decline')}>Decline</EnhancedButton>
          <EnhancedButton variant="ghost" onClick={() => handleRespond('Negotiate')}>Negotiate</EnhancedButton>
        </div>
      </header>
      <section className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          <div className="border rounded-md p-4">
            <h2 className="font-semibold mb-2">About</h2>
            <p className="text-sm opacity-90">Experienced developer specializing in React, Next.js, and Node.js.</p>
          </div>
          <div className="border rounded-md p-4">
            <h2 className="font-semibold mb-2">Testimonials</h2>
            <MicroTestimonial quote="Fantastic work, delivered on time." author="Acme Corp" />
          </div>
        </div>
        <aside className="space-y-4">
          <div className="border rounded-md p-4">
            <h3 className="font-semibold mb-2">Response Log</h3>
            <ul className="space-y-1 text-sm">
<<<<<<< HEAD

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

          >;
            Negotiate;
          </EnhancedButton>;
        </div>;
      </header>;

              {responseLog.length === 0 && <li className="opacity-70">No responses yet.</li>}
=======
              {responseLog.length === 0 && <li className="opacity-70">No responses yet.</li>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              {responseLog.map((r, idx) => (
                <li key={idx} className="flex items-center justify-between">
                  <span>{r.action}</span>
                  <span className="opacity-70">{new Date(r.at).toLocaleString()}</span>
<<<<<<< HEAD
                </li>
<<<<<<< HEAD

export default TalentProfile;

=======


=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </div>
<<<<<<< HEAD
  )
};
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <div className="border rounded-md p-4">;
            <h2 className="font-semibold mb-2">Testimonials</h2>;
            <MicroTestimonial
              quote="Fantastic work, delivered on time."
              author="Acme Corp"
            />;
          </div>;
        </div>;
        <aside className="space-y-4">;
          <div className="border rounded-md p-4">;
            <h3 className="font-semibold mb-2">Response Log</h3>;
            <ul className="space-y-1 text-sm">;
              {responseLog && responseLog.length === 0 && (;
                <li className="opacity-70">No responses yet.</li>;
              )}
              {responseLog && responseLog.map((r, idx) => (;
                <li key={idx} className="flex items-center justify-between">;
                  <span>{r && r.action}</span>;
                  <span className="opacity-70">;
                    {new Date(r && r.at).toLocaleString()}
                  </span>{" "}
                </li>;
              ))}
      <section className="grid md:grid - cols - 3 gap - 6">;
        <div className="md:col - span - 2 space - y-4">;
          <div className="border rounded - md p - 4">;
            <h2 className="font - semibold mb - 2">About</h2>;
            <p className="text - sm opacity - 90">;
              Experienced developer specializing in React, Next.js, and Node.js.;
            </p>;
          </div>;
          <div className="border rounded - md p - 4">;
            <h2 className="font - semibold mb - 2">Testimonials</h2>;
            <MicroTestimonial;
              quote="Fantastic work, delivered on time.";
              author="Acme Corp";
            />;
          </div>;
        </div>;
        <aside className="space - y-4">;
          <div className="border rounded - md p - 4">;
            <h3 className="font - semibold mb - 2">Response Log</h3>;
            <ul className="space - y-1 text - sm">;
              {response_log.length === 0 && (
                <li className="opacity - 70">No responses yet.</li>)}
              {response_log.map ((r, idx) => (
                <li key={idx} className="flex items - center justify - between">;
                  <span>{r.action}</span>;
                  <span className="opacity - 70">;
                    {new Date (r.at).toLocaleString ()}
                  </span>{" "}
                </li>))}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </ul>;
          </div>;
        </aside>;
      </section>;
<<<<<<< HEAD

},;


export default TalentProfile;

<<<<<<< HEAD

=======
    </div>);
=======
    </div>);
=======
  );
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
;
export default TalentProfile;
<<<<<<< HEAD
;
=======

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}
            </ul>;
          </div>;
        </aside>;
      </section>;
    </div>;
  );
},;
export default TalentProfile;
<<<<<<< HEAD
<<<<<<< HEAD
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
