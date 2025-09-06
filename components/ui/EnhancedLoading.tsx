<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

<<<<<<< HEAD
  );
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from './react';
type EnhancedLoadingProps = {
  lines?: number;
}
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

    </div>

  );

}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      ))}
    </div>;
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
  )

}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  );
}
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
