import React from 'react';

// Initialize analytics tracking
// Google Analytics initialization
if (typeof window !== 'undefined' && window.gtag) {}
window.gtag('config', 'GA_MEASUREMENT_ID', {}
page_title: document.title,
page_location: window.location.href,
});
}
};
initAnalytics();
}, []);
return (
<></>
}

return <React.Fragment />{children}</React.Fragment>;

// Extend Window interface for gtag;
declare global {}
interface Window {}
void;
