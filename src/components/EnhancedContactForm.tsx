import React, { useState } from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const EnhancedContactForm: React.FC = () => {
  const [form, setForm] = useState<FormData>({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return <p role="status">Thanks, we'll be in touch.</p>;
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" aria-label="Contact form">
      <div>
        <label htmlFor="name" className="block text-sm">Name</label>
        <input id="name" name="name" value={form.name} onChange={onChange} className="w-full border px-3 py-2 rounded" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm">Email</label>
        <input id="email" name="email" type="email" value={form.email} onChange={onChange} className="w-full border px-3 py-2 rounded" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm">Message</label>
        <textarea id="message" name="message" value={form.message} onChange={onChange} className="w-full border px-3 py-2 rounded" rows={4} />
      </div>
      <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white">Send</button>
    </form>
  );
};

export default EnhancedContactForm;

