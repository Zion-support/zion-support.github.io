import React from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollReveal({ children, className = '', delay = 0 }: ScrollRevealProps) {
  return (
    <div className={className} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
  return <>{children}</>;
};

export default ScrollReveal;

>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-5719
=======
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-966c:app.disabled/components/ScrollReveal.tsx
