import React from 'react';
import { Link } from 'react-router-dom';

const CognitiveOrchestrationMegaBanner: React.FC = () => {
  return (
    <div className="cognitive-orchestration-mega-banner">
      <div className="banner-content">
        <h2>Cognitive Orchestration Mega Banner</h2>
        <p>
          Discover advanced cognitive orchestration solutions and AI-powered systems.
        </p>
        <Link to="/services/cognitive-orchestration">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default CognitiveOrchestrationMegaBanner;