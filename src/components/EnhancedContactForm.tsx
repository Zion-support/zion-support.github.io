<<<<<<< HEAD
import React, { useState } from "react";

export default function EnhancedContactForm(): React.JSX.Element {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	return (
		<form aria-label="Contact form" onSubmit={(e) => e.preventDefault()} className="grid gap-4 max-w-xl mx-auto">
			<input aria-label="Name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="border p-2 rounded" />
			<input aria-label="Email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2 rounded" />
			<textarea aria-label="Message" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} className="border p-2 rounded" />
			<button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
		</form>
	);
}

=======
import React from "react";

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
}
>>>>>>> origin/main
