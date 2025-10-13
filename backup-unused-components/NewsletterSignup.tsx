interface NewsletterSignupProps {
  className?: string;
  children?: React.ReactNode;
}

export default function NewsletterSignup({ className = '', children }: NewsletterSignupProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
