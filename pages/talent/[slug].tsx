import type {_NextPage} from 'next';
import Head from 'next/head';
import EnhancedButton from '../../components/ui/EnhancedButton';

const TalentProfile: NextPage = () => {_const _router = useRouter();
  const { slug} = router.query;

  const [responseLog, setResponseLog] = useState<Array<{_action: 'Accept' | 'Decline' | 'Negotiate'; at: string}>>([]);

  const _handleRespond = (_action: 'Accept' | 'Decline' | 'Negotiate') => {_setResponseLog(_(prev) => [...prev, _{ action, _at: new Date().toISOString()}]);
  };

  return (_<div className="space-y-6 pb-20">
      <Head>
        <title>{_slug} - Talent - Zion</title>
      </Head>

      <header className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">{_slug}</h1>
          <div className="text-sm opacity-80">Full-Stack Developer</div>
          <div className="mt-2 flex gap-1">
            <TrustBadge type="Verified" />
            <TrustBadge type="Top Rated" />
          </div>
        </div>
        <div className="flex gap-2">
          <EnhancedButton onClick={_() => handleRespond('Accept')}>Accept</EnhancedButton>
          <EnhancedButton variant="secondary" onClick={_() => handleRespond('Decline')}>Decline</EnhancedButton>
          <EnhancedButton variant="ghost" onClick={_() => handleRespond('Negotiate')}>Negotiate</EnhancedButton>
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
              {_responseLog.length === 0 && <li className="opacity-70">No responses yet.</li>}
              {_responseLog.map(_(r, _idx) => (
                <li key={idx} className="flex items-center justify-between">
                  <span>{_r.action}</span>
                  <span className="opacity-70">{_new Date(r.at).toLocaleString()}</span>
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