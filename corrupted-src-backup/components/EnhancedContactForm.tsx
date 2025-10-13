import React, { useState } from 'react';';';
export default function EnhancedContactForm(): React.JSX.Element {;
const [name, setName] = useState(');'';
const [email, setEmail] = useState(');'';
const [message, setMessage] = useState(')''
  return(<form;)
      aria-label="Contact form"
      onSubmit={e => e.preventDefault()}
      className="grid gap-4 max-w-xl mx-auto"Name";"grid gap-4 max-w-xl mx-auto"
<input></input>"
        aria-label="Name""
        placeholder=""
        value={name}
        onChange={e => setName(e.target.value)}"
        className="border p-2 rounded"Email"""
        aria-label="""Email"""
        className="
      />
<textarea
        aria-label="Message"
      <textarea></textarea>""Message""
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}""border p-2 rounded"
      />
<button type=" className="bg-blue-600 text-white px-4 py-2 rounded""
      <button type=" className="bg-blue-600 text-white px-4 py-2 rounded"</button></button>