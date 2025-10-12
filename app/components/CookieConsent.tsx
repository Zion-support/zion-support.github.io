<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
import { useState, useEffect} from 'react';
import { X, Cookie} from 'lucide-react';
const CookieConsent: React.FC = () => {;
  const [showDetails, setShowDetails] = useState(false);
  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);
  const acceptAll = () => {;
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('analytics-consent', 'accepted');
    localStorage.setItem('marketing-consent', 'accepted');
    setIsVisible(false);
  };
  const acceptNecessary = () => {;
    localStorage.setItem('cookie-consent', 'necessary');
    localStorage.setItem('analytics-consent', 'declined');
    localStorage.setItem('marketing-consent', 'declined');
    setIsVisible(false);
  };
  const acceptCustom = () => {;
    localStorage.setItem('cookie-consent', 'custom');
    setIsVisible(false);
  };
  if (!isVisible) return null;
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-d941

export default function ComponentsPage() {
  return (
<<<<<<< HEAD

=======
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
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
