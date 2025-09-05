import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import EnhancedButton from '../../components/ui/EnhancedButton';
import { TrustBadge, MicroTestimonial } from '../../components/ui/Badges';

const TalentProfile: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [responseLog, setResponseLog] = useState<Array<{ action: 'Accept' | 'Decline' | 'Negotiate'; at: string }>>([]);

  const handleRespond = (action: 'Accept' | 'Decline' | 'Negotiate') => {
    setResponseLog((prev) => [...prev, { action, at: new Date().toISOString() }]);
  };

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
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default TalentProfile;