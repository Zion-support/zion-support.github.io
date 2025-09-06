<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import EnhancedButton from "../../components/ui/EnhancedButton";
import { TrustBadge, MicroTestimonial } from "../../components/ui/Badges";
<<<<<<< HEAD
const TalentProfile: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  const [responseLog, setResponseLog] = useState<
    Array<{ action: "Accept" | "Decline" | "Negotiate"; at: string }>
  >([]);
<<<<<<< HEAD
  const handleRespond = (action: "Accept" | "Decline" | "Negotiate") => {
    setResponseLog((prev) => [
      ...prev
      { action, at: new Date().toISOString() }
    ]);
  }
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import type { NextPage } from 'next',
import Head from 'next/head',
import { useRouter } from 'next/router',
import { useState } from 'react',
import EnhancedButton from '../../components/ui/EnhancedButton',
import { TrustBadge, MicroTestimonial } from '../../components/ui/Badges',
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const TalentProfile: NextPage = () => {
  const router = useRouter(),
  const { slug } = router.query,
  const [responseLog, setResponseLog] = useState<Array<{ action: 'Accept' | 'Decline' | 'Negotiate', at: string }>>([]),
  const handleRespond = (action: 'Accept' | 'Decline' | 'Negotiate') => {
    setResponseLog((prev) => [...prev, { action, at: new Date().toISOString() }])
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
<<<<<<< HEAD
          <EnhancedButton onClick={() => handleRespond("Accept")}>
            Accept
          </EnhancedButton>
          <EnhancedButton
            variant="secondary"
            onClick={() => handleRespond("Decline")}
=======

  const handleRespond = (action: 'Accept' | 'Decline' | 'Negotiate') => {
    setResponseLog(prev => [...prev, { action, at: new Date().toISOString() }]);
  };

  return (
    <div className='space-y-6 pb-20'>
      <Head>
        <title>{slug} - Talent - Zion</title>
      </Head>

      <header className='flex items-start justify-between gap-4'>
        <div>
          <h1 className='text-2xl font-semibold'>{slug}</h1>
          <div className='text-sm opacity-80'>Full-Stack Developer</div>
          <div className='mt-2 flex gap-1'>
            <TrustBadge type='Verified' />
            <TrustBadge type='Top Rated' />
          </div>
        </div>
        <div className='flex gap-2'>
          <EnhancedButton onClick={() => handleRespond('Accept')}>
            Accept
          </EnhancedButton>
          <EnhancedButton
            variant='secondary'
            onClick={() => handleRespond('Decline')}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          >
            Decline
          </EnhancedButton>
          <EnhancedButton
<<<<<<< HEAD
            variant="ghost"
            onClick={() => handleRespond("Negotiate")}
=======
            variant='ghost'
            onClick={() => handleRespond('Negotiate')}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          >
            Negotiate
          </EnhancedButton>
=======
          <EnhancedButton onClick={() => handleRespond('Accept')}>Accept</EnhancedButton>
          <EnhancedButton variant="secondary" onClick={() => handleRespond('Decline')}>Decline</EnhancedButton>
          <EnhancedButton variant="ghost" onClick={() => handleRespond('Negotiate')}>Negotiate</EnhancedButton>
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
        </div>
      </header>
<<<<<<< HEAD
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
              {responseLog.length === 0 && <li className="opacity-70">No responses yet.</li>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              {responseLog.map((r, idx) => (
                <li key={idx} className="flex items-center justify-between">
                  <span>{r.action}</span>
<<<<<<< HEAD
                  <span className="opacity-70">
                    {new Date(r.at).toLocaleString()}
                  </span>{" "}
=======

      <section className='grid md:grid-cols-3 gap-6'>
        <div className='md:col-span-2 space-y-4'>
          <div className='border rounded-md p-4'>
            <h2 className='font-semibold mb-2'>About</h2>
            <p className='text-sm opacity-90'>
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
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
                  <span className="opacity-70">{new Date(r.at).toLocaleString()}</span>
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
                </li>
<<<<<<< HEAD
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </div>
  );
<<<<<<< HEAD
}
export default TalentProfile;
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
};
}

export default TalentProfile;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

=======
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
