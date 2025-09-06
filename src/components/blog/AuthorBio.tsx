import React from 'react';

interface AuthorBioProps {
  className?: string;
}

const AuthorBio: React.FC<AuthorBioProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AuthorBio</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AuthorBio;