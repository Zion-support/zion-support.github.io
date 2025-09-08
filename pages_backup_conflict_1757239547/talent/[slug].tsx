import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import EnhancedButton from "../../components/ui/EnhancedButton";
import { TrustBadge, MicroTestimonial } from "../../components/ui/Badges";
const TalentProfile: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [responseLog, setResponseLog] = useState<
    Array<{ action: "Accept" | "Decline" | "Negotiate"; at: string }>
  >([]);
  const handleRespond = (action: "Accept" | "Decline" | "Negotiate") => {
    setResponseLog((prev) => [
      ...prev
      { action, at: new Date().toISOString() }
    ]);
  }
  const router = useRouter(),
  const { slug } = router.query,
  const [responseLog, setResponseLog] = useState<Array<{ action: 'Accept' | 'Decline' | 'Negotiate', at: string }>>([]),
  const handleRespond = (action: 'Accept' | 'Decline' | 'Negotiate') => {
    setResponseLog((prev) => [...prev, { action, at: new Date().toISOString() }])
  },
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6">Page</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600">Content coming soon.</p>
        </div>
        <div className="flex gap-2">
          <EnhancedButton onClick={() => handleRespond("Accept")}>
            Accept
          </EnhancedButton>
          <EnhancedButton
            variant="secondary"
            onClick={() => handleRespond("Decline")}
          >
            Decline
          </EnhancedButton>
          <EnhancedButton
            variant="ghost"
            onClick={() => handleRespond("Negotiate")}
          >
            Negotiate
          </EnhancedButton>
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
              {responseLog.length === 0 && <li className="opacity-70">No responses yet.</li>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              {responseLog.map((r, idx) => (
                <li key={idx} className="flex items-center justify-between">
                  <span>{r.action}</span>
                  <span className="opacity-70">
                    {new Date(r.at).toLocaleString()}
                  </span>{" "}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </div>
  );
}
export default TalentProfile;
export default TalentProfile;
