

    e.preventDefault();
    setError(null);

    if (!title || !description || !category || !clientEmail) {
      setError('Please fill in all required fields.');

      router.push(`/client/dashboard`)
    } catch (err: any) {
      setError(err.message |'Something went wrong')
    } finally {

import { useState } from 'react';
import { useRouter } from 'next/router';
export default function PostJobPage(req, res) {
  try {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [skills, setSkills] = useState<string>('');
  const [budgetMinUsd, setBudgetMinUsd] = useState<string>('');
  const [budgetMaxUsd, setBudgetMaxUsd] = useState<string>('');
  const [deliveryDeadlineIso, setDeliveryDeadlineIso] = useState<string>('');
  const [clientEmail, setClientEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  async function handleSubmit(e: React.FormEvent) {;
    e.preventDefault(),;
    setError(null);
    if (!title || !description || !category || !clientEmail) {;
      setError('Please fill in all required fields.');
      return;
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });



  }
}
;
    try {
      setIsSubmitting(true);
      const res = await fetch('/api/jobs', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON.stringify({;
          title,;
          description,;
          category,;
          requiredSkills: skills;
            .split();
            .map((s) => s.trim());
            .filter(Boolean);
          budgetMinUsd: budgetMinUsd ? Number(budgetMinUsd) : undefined,;
          budgetMaxUsd: budgetMaxUsd ? Number(budgetMaxUsd) : undefined,;
          deliveryDeadlineIso: deliveryDeadlineIso || undefined,;
          clientEmail})}),;
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to post job');
      router.push(`/client/dashboard`);
    } catch (error) {
      setError(err.message || 'Something went wrong');
    } finally {;
      setIsSubmitting(false);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Post a Job</h1>

      setIsSubmitting(false),
    }
  }
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Post a Job</h1>
      {error && <p className="text-red-600 mb-3">{error}</p>}
import { useState } from 'react';
import { useRouter } from 'next/router';
export default function PostJobPage(req, res) {
  try {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [skills, setSkills] = useState<string>('');
  const [budgetMinUsd, setBudgetMinUsd] = useState<string>('');
  const [budgetMaxUsd, setBudgetMaxUsd] = useState<string>('');
  const [deliveryDeadlineIso, setDeliveryDeadlineIso] = useState<string>('');
  const [clientEmail, setClientEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  async function handleSubmit(e: React.FormEvent) {;
    e.preventDefault(),;
    setError(null);
    if (!title || !description || !category || !clientEmail) {;
      setError('Please fill in all required fields.');
      return;
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    try {
      setIsSubmitting(true);
      const res = await fetch('/api/jobs', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON.stringify({;
          title,;
          description,;
          category,;
          requiredSkills: skills;
            .split();
            .map((s) => s.trim());
            .filter(Boolean);
          budgetMinUsd: budgetMinUsd ? Number(budgetMinUsd) : undefined,;
          budgetMaxUsd: budgetMaxUsd ? Number(budgetMaxUsd) : undefined,;
          deliveryDeadlineIso: deliveryDeadlineIso || undefined,;
          clientEmail})}),;
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to post job');
      router.push(`/client/dashboard`);
    } catch (error) {
      setError(err.message || 'Something went wrong');
    } finally {;
      setIsSubmitting(false);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Post a Job</h1>
      {error && <p className="text-red-600 mb-3">{error}</p>}
      {error && <p className="text-red-600 mb-3">{error}</p>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

=======
=======
      setIsSubmitting(false),

    }



=======
import { useState } from 'react';
import { useRouter } from 'next/router';
export default function PostJobPage(req, res) {
  try {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [skills, setSkills] = useState<string>('');
  const [budgetMinUsd, setBudgetMinUsd] = useState<string>('');
  const [budgetMaxUsd, setBudgetMaxUsd] = useState<string>('');
  const [deliveryDeadlineIso, setDeliveryDeadlineIso] = useState<string>('');
  const [clientEmail, setClientEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  async function handleSubmit(e: React.FormEvent) {;
    e.preventDefault(),;
    setError(null);
    if (!title || !description || !category || !clientEmail) {;
      setError('Please fill in all required fields.');
      return;
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });



  }
}
;
    try {
      setIsSubmitting(true);
      const res = await fetch('/api/jobs', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON.stringify({;
          title,;
          description,;
          category,;
          requiredSkills: skills;
            .split();
            .map((s) => s.trim());
            .filter(Boolean);
          budgetMinUsd: budgetMinUsd ? Number(budgetMinUsd) : undefined,;
          budgetMaxUsd: budgetMaxUsd ? Number(budgetMaxUsd) : undefined,;
          deliveryDeadlineIso: deliveryDeadlineIso || undefined,;
          clientEmail})}),;
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to post job');
      router.push(`/client/dashboard`);
    } catch (error) {
      setError(err.message || 'Something went wrong');
    } finally {;
      setIsSubmitting(false);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Post a Job</h1>


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

  );
};

}
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
