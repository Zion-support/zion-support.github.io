<<<<<<< HEAD


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
<<<<<<< HEAD

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======


>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React from "react";
type EnhancedLoadingProps = {;
  lines?: number;
}

export default function EnhancedLoading(): any ({ lines = 3 }: EnhancedLoadingProps) {;
  return (
    <div className="space-y-2">;
      {Array && Array.from({ length: lines }).map((_, idx) => (;
        <div key={idx} className="skeleton h-4 rounded" />;
      ))}
}
<<<<<<< HEAD
;
export default /**
 * EnhancedLoading - Function description
 */
function EnhancedLoading() {
  return (
    <div className="space - y-2">;
      {Array.from ({ length: lines }).map ((_, idx) => (
        <div key={idx} className="skeleton h - 4 rounded" />))}
    </div>);

<<<<<<< HEAD
}
=======

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    </div>

  );

}

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
      ))}
    </div>;
    </div>
  );
}
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
