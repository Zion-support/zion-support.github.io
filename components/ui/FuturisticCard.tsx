

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

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from "react";
type Props = {;
import React from './react';
type Props = {
  title: string;
  description: string;
<<<<<<< HEAD
  cta?: React && React.ReactNode;
};
export default function FuturisticCard(): any ({ title, description, cta }: Props) {;
  return (
      </div>;
    </div>;
  );
=======

  cta?: React && React.ReactNode;
};


export default function FuturisticCard(): any ({ title, description, cta }: Props) {;
  return (
<<<<<<< HEAD
    <div className="futuristic-card">;
      <div className="futuristic-card-glow" />;
      <div className="relative z-10">;
        <h3 className="font-semibold text-gray-100">{title}</h3>;
        <p className="text-sm text-gray-300 mt-1">{description}</p>;
        {cta && <div className="mt-3">{cta}</div>}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======

}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      </div>

    </div>

  );

}

<<<<<<< HEAD
}
      </div>
    </div>
  )
}

    <div className="futuristic-card">
      <div className="futuristic-card-glow" />
      <div className="relative z-10">
        <h3 className="font-semibold text-gray-100">{title}</h3>
        <p className="text-sm text-gray-300 mt-1">{description}</p>
        {cta && <div className="mt-3">{cta}</div>}
      </div>
    </div>;
    </div>
  );
}
}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
