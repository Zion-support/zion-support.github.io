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
import React from "react";
type Props = {;
import React from './react';
type Props = {
  title: string;
  description: string;
<<<<<<< HEAD

  cta?: React && React.ReactNode;
};


=======
  cta?: React && React.ReactNode;
};
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export default function FuturisticCard(): any ({ title, description, cta }: Props) {;
  return (
<<<<<<< HEAD
    <div className="futuristic-card">;
      <div className="futuristic-card-glow" />;
      <div className="relative z-10">;
        <h3 className="font-semibold text-gray-100">{title}</h3>;
        <p className="text-sm text-gray-300 mt-1">{description}</p>;
        {cta && <div className="mt-3">{cta}</div>}
<<<<<<< HEAD

=======
      </div>;
    </div>;
  );
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
;
export default /**
 * FuturisticCard - Function description
 */
function FuturisticCard() {
  return (
    <div className="futuristic - card">;
      <div className="futuristic - card - glow" />;
      <div className="relative z - 10">;
        <h3 className="font - semibold text - gray - 100">{title}</h3>;
        <p className="text - sm text - gray - 300 mt - 1">{description}</p>;
        {cta && <div className="mt - 3">{cta}</div>}
      </div>;
    </div>);
<<<<<<< HEAD

}
=======
      </div>

    </div>

  );

}

<<<<<<< HEAD
export default function FuturisticCard({ title, description, cta }: Props) {
  return (
=======
}
      </div>
    </div>
  )
}

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div className="futuristic-card">
      <div className="futuristic-card-glow" />
      <div className="relative z-10">
        <h3 className="font-semibold text-gray-100">{title}</h3>
        <p className="text-sm text-gray-300 mt-1">{description}</p>
        {cta && <div className="mt-3">{cta}</div>}
      </div>
<<<<<<< HEAD

  );

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
    </div>;
=======
    </div>
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
