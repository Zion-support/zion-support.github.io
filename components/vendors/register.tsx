
import {FormEvent, useState} from 'react';

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries())
    try {
      const res = await fetch('/api/vendors/register', {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({
          slug: String(payload.slug)
          name: String(payload.name)
          servicesOffered: String(payload.servicesOffered |'')
            .split(',')
            .map(s => s.trim())
            .filter(Boolean)
          teamSize: Number(payload.teamSize |0)
          about: String(payload.about |'')
          verificationDocs: String(payload.verificationDocs |'')
            .split(',')
            .map(s => s.trim())
            .filter(Boolean)
          caseStudies: []
        })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error |'Failed to submit');
      setMessage('Application submitted. Await approval.');
      form.reset();
    } catch (err: any) {
      setMessage(err.message);
    } finally {
      setLoading(false);    }
  }

=======

  return (


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (            .map(s => s.trim())
            .filter(Boolean);
          teamSize: Number(payload.teamSize |0)
          about: String(payload.about |'')
          verificationDocs: String(payload.verificationDocs |'')
            .split()
            .map(s => s.trim())
            .filter(Boolean);
          caseStudies: []})})
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error |'Failed to submit');
      setMessage('Application submitted. Await approval.');
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

      form.reset()
    } catch (err: any) {
      setMessage(err.message)
    } finally {
      setLoading(false)
    }
  }



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
