'use client';
import React, {useEffect, useState}from 'react';

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {if (typeof window === 'undefined') return;

        >
          ×
        </button>
      </div>
      
      </div>
    </div>
  );
};

export default PerformanceMonitor;
