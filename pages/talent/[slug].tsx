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

  return (
    <div className=&quot;space-y-6 pb-20&quot;>
      <Head>
        <title>{slug} - Talent - Zion</title>
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
                </li>
=======
import type { NextPage } from 'next',;
import Head from 'next/head',;
import { useRouter } from 'next/router',;
import { useState } from 'react',;
import EnhancedButton from '../../components/ui/EnhancedButton',;
import { TrustBadge, MicroTestimonial } from '../../components/ui/Badges',;
const TalentProfile: NextPage = () => {;
  const router = useRouter(),;
  const { slug } = router.query,;
  const [responseLog, setResponseLog] = useState<Array<{ action: 'Accept' | 'Decline' | 'Negotiate', at: string }>>([]),;
  const handleRespond = (action: 'Accept' | 'Decline' | 'Negotiate') => {;
    setResponseLog((prev) => [...prev, { action, at: new Date().toISOString() }]);
  },;
  return (;
    <div className="space-y-6 pb-20">;
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
          <EnhancedButton onClick={() => handleRespond('Accept')}>Accept</EnhancedButton>;
          <EnhancedButton variant="secondary" onClick={() => handleRespond('Decline')}>Decline</EnhancedButton>;
          <EnhancedButton variant="ghost" onClick={() => handleRespond('Negotiate')}>Negotiate</EnhancedButton>;
        </div>;
      </header>;
      <section className="grid md:grid-cols-3 gap-6">;
        <div className="md:col-span-2 space-y-4">;
          <div className="border rounded-md p-4">;
            <h2 className="font-semibold mb-2">About</h2>;
            <p className="text-sm opacity-90">Experienced developer specializing in React, Next.js, and Node.js.</p>;
          </div>;
          <div className="border rounded-md p-4">;
            <h2 className="font-semibold mb-2">Testimonials</h2>;
            <MicroTestimonial quote="Fantastic work, delivered on time." author="Acme Corp" />;
          </div>;
        </div>;
        <aside className="space-y-4">;
          <div className="border rounded-md p-4">;
            <h3 className="font-semibold mb-2">Response Log</h3>;
            <ul className="space-y-1 text-sm">;
              {responseLog.length === 0 && <li className="opacity-70">No responses yet.</li>}
              {responseLog.map((r, idx) => (;
                <li key={idx} className="flex items-center justify-between">;
                  <span>{r.action}</span>;
                  <span className="opacity-70">{new Date(r.at).toLocaleString()}</span>;
                </li>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
              ))}
            </ul>;
          </div>;
        </aside>;
      </section>;
    </div>;
  );
},;
export default TalentProfile;