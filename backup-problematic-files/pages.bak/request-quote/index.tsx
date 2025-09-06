export default function RequestQuote() { return ( <div className=\"ztg-page\"> <div className=\"ztg-container\"> <div className=\"ztg-card\"> <h1>Request a Quote</h1> <p>Email us at kleber@ziontechgroup.com or call +1 302 464 0950. Well scope your project within 2 business days.</p> </div> </div> </div> ) }
module.exports = default function RequestQuote() { return ( <div className="ztg-page"> <div className="ztg-container"> <div className="ztg-card"> <h1>Request a Quote</h1> <p>Email us at kleber@ziontechgroup.com or call +1 302 464 0950. Well scope your project within 2 business days.</p> </div> </div> </div> ) }""
import React from 'react';

interface IndexProps {
  className?: string;
}

const Index: React.FC<IndexProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Index</h1>
      <p>This component is under development.</p>
    </div>
  );
}
}
}
