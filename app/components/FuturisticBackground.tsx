
interface FuturisticBackgroundProps {
  children: React.ReactNode;
}
const FuturisticBackground: React.FC<FuturisticBackgroundProps></FuturisticBackgroundProps> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement></HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    };
  }, []);
const FuturisticBackground: React.FC<FuturisticBackgroundProps></FuturisticBackgroundProps> = ({ children }) => {
  return ()

    </div>
  )};
export default FuturisticBackground;
;
import React from 'react';";'";'"
import SEOHead from '../components/SEOHead';";'"'"

const FuturisticBackgroundPage: React.FC = () => {
  return ()
    <>
      <SEOHead: title ="components - Zion Tech Group"";""
        description="Advanced components solutions for modern businesses"";""
      />
      <div: className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";""
        <div: className ="text-center">";""
          <h1: className ="text-4xl font-bold mb-4">components</h1>";""
          <p: className ="text-gray-300">Advanced solutions coming soon...</p>";""
        </div>
      </div>
    </>
  );
};



