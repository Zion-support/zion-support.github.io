import React from 'react';

interface ProjectOfferBannerProps {
  className?: string;
}

const ProjectOfferBanner: React.FC<ProjectOfferBannerProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ProjectOfferBanner</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ProjectOfferBanner;