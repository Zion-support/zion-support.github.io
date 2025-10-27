import React, { useState } from 'react';
interface NewsletterSignupProps {
  onSubmit?: (_email: string) => void;
  placeholder?: string;
  buttonText?: string;
}

export default function NewsletterSignup({ 
  onSubmit,
  placeholder = "Enter your email",
  buttonText = "Subscribe"
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit && email) {
      onSubmit(email);
      setEmail('');
    }
  }
=======
const NewsletterSignup = () => {
>>>>>>> cursor/fix-errors-and-merge-to-main-511e
  return (
    <div className="newsletter-signup">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          required
        />
        <button type="submit">{buttonText}</button>
      </form>
    </div>
  );
}
