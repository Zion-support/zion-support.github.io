<<<<<<< HEAD
import React from "react";

const EnhancedContactForm: React.FC = () => {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
      <h2 className="text-2xl font-bold text-white mb-6">Enhanced Contact Form</h2>
      <p className="text-gray-400">Enhanced contact form component</p>
    </div>
  );
};

export default EnhancedContactForm;
=======
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
>>>>>>> 83e4988d0b484747cc68fa307caba20f45af70a7
