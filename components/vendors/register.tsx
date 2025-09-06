import {FormEvent, useState} from 'react';

export default function VendorRegisterPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries()),
    try {
      const res = await fetch('/api/vendors/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          slug: String(payload.slug),
          name: String(payload.name),
          servicesOffered: String(payload.servicesOffered || '')
            .split(',')

            .map(s => s.trim())
            .filter(Boolean),
          teamSize: Number(payload.teamSize || 0),
          about: String(payload.about || ''),
          verificationDocs: String(payload.verificationDocs || '')
            .split(',')
            .map(s => s.trim())
            .filter(Boolean),
          caseStudies: [],
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Failed to submit');
      setMessage('Application submitted. Await approval.');
      form.reset();
    } catch (err: any) {
      setMessage(err.message);
    } finally {
      setLoading(false);    }
  }

  return (

    }
  }

  return (