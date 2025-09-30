import React from "react";

type Props = { onSubmit?: (data: Record<string, string>) => void };

export default function EnhancedContactForm({ onSubmit }: Props): React.JSX.Element {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.({});
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input className="border p-2 w-full" placeholder="Name" />
      <input className="border p-2 w-full" placeholder="Email" />
      <textarea className="border p-2 w-full" placeholder="Message" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
    </form>
  );
}

