<<<<<<< HEAD


interface ContentNewsletterSignupProps {
  className?: string;
  children?: React.ReactNode;
}
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-f8bc

const ContentNewsletterSignup: React.FC<ContentNewsletterSignupProps> = ({ className, children }) => {
  return (
    <div className={className} role="region" aria-label="Newsletter Signup">
      {children || <p>Content Newsletter Signup</p>}
    </div>
  );
};

export default ContentNewsletterSignup;