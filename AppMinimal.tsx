import React from 'react';

<<<<<<< HEAD
interface AppMinimalProps {
  className?: string;
  children?: React.ReactNode;
}

const AppMinimal: React.FC<AppMinimalProps> = ({ 
  className = ', 
  children 
}) => {
  return (
    <main 
      className={`app-minimal ${className}`}
      role="main
      data-testid=app-minimal"
    >
      {children || (
        <div className="minimal-content">
          <h1>Minimal App</h1>
          <p>This is a minimal React component for testing purposes.</p>
        </div>
      )}
    </main>
  );
};

export default AppMinimal;
}
=======
>>>>>>> origin/chore/fix-lint-and-merge
export default function AppMinimal(): React.JSX.Element {
  return (
    <main>
      <h1>Zion Tech Group - Minimal App</h1>
      <p>Building the future with innovative technology solutions</p>
<<<<<<< HEAD
    </main>)

=======
    </main>
  );
}
>>>>>>> origin/chore/fix-lint-and-merge
