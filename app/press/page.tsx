import React from 'react';

const PressPage: React.FC = () => {
  return (
    <div className="text-left">
      <div className="text-left">
        <h1 className="text-left">
          Press Center
        </h1>
        <div className="text-left">
          <div className="text-left">
            <h3 className="text-left">Press Releases</h3>
            <div className="text-left">
              <div className="text-left">
                <h4 className="text-left">Zion Tech Solutions Launches Revolutionary AI Platform</h4>
                <p className="text-left">December 15, 2024</p>
              </div>
              <div className="text-left">
                <h4 className="text-left">Company Expands Global Operations</h4>
                <p className="text-left">November 20, 2024</p>
              </div>
              <div className="text-left">
                <h4 className="text-left">New Partnership with Fortune 500 Companies</h4>
                <p className="text-left">October 10, 2024</p>
              </div>
            </div>
          </div>
          <div className="text-left">
            <h3 className="text-left">Media Contact</h3>
            <p className="text-left">
              For media inquiries, please contact our press team.
            </p>
            <p className="text-left">
              Email: press@ziontech.com<br />
              Phone: (555) 123-4567
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressPage;