import React from 'react';

interface NewsletterSignupProps {
  title?: string;
  placeholder?: string;
  buttonText?: string;
  onSubmit?: (email: string) => void;
}

export default function NewsletterSignup({ 
  title = "Subscribe to our newsletter",
  placeholder = "Enter your email",
  buttonText = "Subscribe",
  onSubmit
}: NewsletterSignupProps) {
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(email);
    }
  };

  return (
    <div>
      <h2>{title}</h2>
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
