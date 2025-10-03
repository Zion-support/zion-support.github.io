import React from 'react';

const TeamPage: React.FC = () => {
  return (
    <div className="text-left">
      <div className="text-left">
        <h1 className="text-left">
          Our Team
        </h1>
        <div className="text-left">
          <div className="text-left">
            <div className="text-left"></div>
            <h3 className="text-left">John Doe</h3>
            <p className="text-left">CEO & Founder</p>
          </div>
          <div className="text-left">
            <div className="text-left"></div>
            <h3 className="text-left">Jane Smith</h3>
            <p className="text-left">CTO</p>
          </div>
          <div className="text-left">
            <div className="text-left"></div>
            <h3 className="text-left">Mike Johnson</h3>
            <p className="text-left">Lead Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;