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
=======
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
import React from "react";
type Props = {;
import React from './react';
type Props = {
  title: string;
  description: string;
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
      </div>;
    </div>;
  );
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
}
      </div>
    </div>
  )
}

=======
    <div className="futuristic-card">
      <div className="futuristic-card-glow" />
      <div className="relative z-10">
        <h3 className="font-semibold text-gray-100">{title}</h3>
        <p className="text-sm text-gray-300 mt-1">{description}</p>
        {cta && <div className="mt-3">{cta}</div>}
      </div>
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
