

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from 'react';
 resizeCanvas ();
window && window.addEventListener ('resize', resizeCanvas);
const UltraFuturisticBackground2034: React.FC<;
  UltraFuturisticBackground2034Props;
> = ({ intensity = 1 }) => {;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

