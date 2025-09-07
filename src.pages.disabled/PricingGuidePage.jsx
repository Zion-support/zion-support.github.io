
class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error) {return { hasError: true }}componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}render() {if (this.state.hasError) {return <div>Something went wrong.</div>;
    }return this.props.children;
  }
}
import React from 'react';
interface PricingGuidePageProps  {// Add props here as needed;
}export default function PricingGuidePage() {return (<div>;
      <h1>PricingGuidePage</h1>;
      <p>This component is currently under development.</p>;
    </div>;
  )}
:src.pages.disabled/PricingGuidePage.jsx;
interface PricingGuidePageProps {
  // Add props here as needed

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
}

export default function PricingGuidePage({}: PricingGuidePageProps) {
  return (
    <div>
      <h1>PricingGuidePage</h1>
      <p>This component is currently under development.</p>
    </div>
  );

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c


}

<<<<<<< HEAD
=======
}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
:src.pages.disabled/PricingGuidePage.jsx
}
}
}
}
}
}:src.pages.disabled/PricingGuidePage.jsx;
:temp_exclude/src.pages.disabled/PricingGuidePage.jsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
}






:src.pages.disabled/PricingGuidePage.jsx
}
}
}
}
}
<<<<<<< HEAD
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
:temp_exclude/src.pages.disabled/PricingGuidePage.jsx;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
