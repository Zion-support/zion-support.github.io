import React, { useState } from 'react';

export default function EnhancedContactForm(): React.JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <form
      aria-label="Contact form"
      onSubmit={e => e.preventDefault()}
      className="grid gap-4 max-w-xl mx-auto"
    >
      <input
        aria-label="Name"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        aria-label="Email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="border p-2 rounded"
      />
      <textarea
        aria-label="Message"
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Send
      </button>
    </form>
  );
}
