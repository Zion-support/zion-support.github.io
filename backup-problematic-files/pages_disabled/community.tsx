import React from "react";

const communityStats = [
  { number: '2,500+', label: 'Active Members' },
  { number: '15,000+', label: 'Discussions' },
  { number: '500+', label: 'Solutions Shared' },
  { number: '50+', label: 'Countries Represented' }
];

const Community: React.FC<CommunityProps> = ({ className }) => {
  return (
    <div className={className || ""}>
      <h1>Community</h1>
      <p>This component is under development.</p>
    </div>
  );

export default Community;
