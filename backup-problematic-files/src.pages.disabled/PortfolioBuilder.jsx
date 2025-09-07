<<<<<<< HEAD
import React from 'react';
interface PortfolioBuilderProps {
  // Add props here as needed
}
export default function PortfolioBuilder({ }: PortfolioBuilderProps) {
=======
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from 'react';

const PortfolioBuilder = ({ className }) => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  return (
    <div className={className || ''}>
      <h1>PortfolioBuilder</h1>
      <p>This component is under development.</p>
    </div>
  );
<<<<<<< HEAD
<<<<<<<< HEAD:backup-problematic-files/src.pages.disabled/PortfolioBuilder.jsx
========
<<<<<<< HEAD:src.pages.disabled/PortfolioBuilder.jsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/PortfolioBuilder.jsx
}
}
<<<<<<<< HEAD:backup-problematic-files/src.pages.disabled/PortfolioBuilder.jsx
}
========
>>>>>>> c9abe902f4e156a854fa9adfeb4892dd1a62a086
=======
}
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
=======
>>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/PortfolioBuilder.jsx
}
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
}
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/PortfolioBuilder.jsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
