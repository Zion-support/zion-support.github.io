
import React, { useState } from 'react';
import React, { useState, useEffect } from "react";

import React from 'react';;';
import SEOHead from './components/SEOHead';
;

const ComponentsPage: React.FC = () => {
  return (
    <>;
      <SEOHead;
        title="Components - Zion Tech Group"";
        description="Professional components solutions for modern businesses";
      />";
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";
        <div className ="text-center">";
          <h1 className ="text-4xl font-bold mb-4">Components</h1>";
          <p className ="text-gray-300">Professional solutions coming soon...</p>;";
        </div>;
      </div>;
    </>;
  ),
};

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({};)
  end, duration = 2000, className = "", prefix = "", suffix = ""}) => {};
  const [count, setCount] = useState(0);

  useEffect(() => {};
    let startTime: number;
    let animationFrame: number;

    const animate = (_currentTime: number) => {};
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if ($1) {}
  // If body
}
        animationFrame = requestAnimationFrame(animate);
      };
    };
    animationFrame = requestAnimationFrame(animate)
    return () => {};
}if (animationFrame) {},
      cancelAnimationFrame(animationFrame)
      }
    },
    {}
  }, [end, duration])
  return ()
    <span className={className}></span>
      {prefix};
      {count.toLocaleString()};
      {suffix};
    </span>
  )
},
      export default AnimatedCounter

;
export default ComponentsPage;'";'";

