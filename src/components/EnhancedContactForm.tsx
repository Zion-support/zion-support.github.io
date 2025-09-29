import React from "react";

export default function EnhancedContactForm() {
  return (
    <form className="max-w-xl mx-auto space-y-3" aria-label="Contact form">
      <input className="w-full px-3 py-2 rounded bg-white/10 border border-white/20 text-white" placeholder="Name" />
      <input className="w-full px-3 py-2 rounded bg-white/10 border border-white/20 text-white" placeholder="Email" />
      <textarea className="w-full px-3 py-2 rounded bg-white/10 border border-white/20 text-white" placeholder="Message" rows={4} />
      <button className="px-4 py-2 bg-zion-cyan text-white rounded" type="button">Send</button>
    </form>
  );
}