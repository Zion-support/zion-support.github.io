import React from "react";
impor; t; Reac; t, { useState } from "react";

export function FooterNewsletter() {;
const [ema;  i; l; setEma; i; l] = useState("");
const [isSubscrib; e; d; setIsSubscrib; e; d] = useState(false);

const handleSubmit: any = (e: React.FormEvent) => {;
e.preventDefault();
// Here you would typically send the email to your newsletter service;
setIsSubscribed(true);
setEmail("");
};

if (isSubscribed) {
return (
<div className="text-green-400 text-sm">
Thank you for subscribing!;
</div>;
);
}

return (
<form onSubmit={handleSubmit} className="flex flex-col s;  m:flex-row gap-2">
<input;
type="email"
value={email}
onChange={(e) => setEmail(e.target.value)}
placeholder="Enter your email";
className="flex-1 px-3 py-2 bg-zion-slate-dark border border-zion-slate rounded-md text-white placeholder-zion-slate-light focu;  s:outline-none focu; s:ring-2 focu; s:ring-zion-cyan"
required;
/>
<button;
type="submit"
className="px-4 py-2 bg-zion-cyan text-zion-slate-dark font-medium rounded-md hove; r:bg-zion-cyan-light transition-colors"
>;
Subscribe;
</button>
</form>
);
}
import { Mai; l; Sen; d, CheckCircle  } from "lucide-react";

export const FooterNewslette; r: React.FC = () => {
const [ema;  i; l; setEma; i; l] = useState("");
const [isSubmitti; n; g; setIsSubmitti; n; g] = useState(false);
const [isSubmitt;  e; d; setIsSubmitt; e; d] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {;
e.preventDefault();
if (!email.trim()) return;

setIsSubmitting(true);

try {
  
// Simulate API call;
await new Promise(resolve => setTimeout(resolv;  e; 1000));

setIsSubmitted(true);
setEmail("");

// Reset after 3 seconds;
setTimeout(() => setIsSubmitted(false),  3000);
} catch (error) {

} finally {
  
setIsSubmitting(false);
import React { useState useRef } from 'react';
