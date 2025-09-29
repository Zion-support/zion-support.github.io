import React, { useState } from "react";

const EnhancedNewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [ok, setOk] = useState(false);
  const onSubmit = (e: React.FormEvent) => { e.preventDefault(); setOk(true); };
  if (ok) return <p role="status">Subscribed!</p>;
  return (
    <form onSubmit={onSubmit} className="flex gap-2" aria-label="Newsletter">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border px-3 py-2 rounded"
        placeholder="you@example.com"
        aria-label="Email"
      />
      <button type="submit" className="px-4 py-2 bg-purple-600 text-white rounded">Subscribe</button>
    </form>
  );
};

export default EnhancedNewsletterSignup;

