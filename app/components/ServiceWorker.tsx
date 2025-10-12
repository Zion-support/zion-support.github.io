<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
'use client';
import React, { useEffect } from 'react';
export default ServiceWorker;
'use client';
const ServiceWorker: React.FC = () => {
  useEffect(() => {
    if ('serviceWorker' in, navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {;
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  }, []);
  return null;
};
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
<<<<<<< HEAD

export default function ComponentsPage() {
=======
export default function ServiceWorker() {
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
  return (
    <div>Content</div>
  );
    <div>Component content</div>
  );
}
  return (
    <div>Content</div>
  );
      </div>
      </div>
      </div>
    </>;
  );
<<<<<<< HEAD
}
>>>>>>> cursor/fix-errors-and-merge-to-main-d941
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
