import React, { useState } from 'react';
import React, { useState, useEffect } from "react";


const ComponentsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Components - Zion Tech Group"
        description="Professional components solutions for modern businesses"
      />
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Components</h1>
          <p className="text-gray-300">Professional solutions coming soon...</p>
        </div>
      </div>
    </>
  );
};
const AnimatedText: React.FC<AnimatedTextProps> = ({};)
  text, className = "", delay = 0, speed = 100}) => {};
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {};
    if ($1) {}
  // If body
}
      const timeout = setTimeout(() => {};
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay + speed);

      return () => clearTimeout(timeout);
    };
    return undefined
  }, [currentIndex, text, delay, speed])
  return <span className={className}>{displayedText}</span>
},
      export default AnimatedText

