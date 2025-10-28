import React, { useState } from 'react';
import React, { useState } from 'react';

interface _NewsletterSignupProps {
  onSubmit?: (email: _string) => void;
  placeholder?: string;
  buttonText?: string;
}

export default function NewsletterSignup({ 
  _onSubmit,
  placeholder = "Enter your email",
  buttonText = "Subscribe"
}: _NewsletterSignupProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React._FormEvent) => {
    e.preventDefault();
    if (onSubmit && email) {
      onSubmit(email);
      setEmail('');
    }
  };

  return (
    <div className="newsletter-signup">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(_e) => setEmail(e.target.value)}
          placeholder={placeholder}
          required
        />
        <button type="submit">{buttonText}</button>
      </form>
    </div>
  );
}
