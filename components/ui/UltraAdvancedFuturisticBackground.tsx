let animationFrameId: number;
let particles: Array< {
  resizeCanvas ();
window.addEventListener ('resize', resizeCanvas);
//Color schemes Math.random () > 0.5 ? 'holographic' : Math.random () > 0.3 ? 'neon' : 'fusion';
particles.push ({
  x: Math.random () * canvas.width, y: Math.random () * canvas.height, vx: (Math.random () - 0.5) * 2 * animationSpeed, vy: (Math.random () - 0.5) * 2 * animationSpeed, size: Math.random () * 3 + 1, opacity: Math.random () * 0.8 + 0.2, color: type === 'quantum' ? colors.quantum : type === 'holographic' ? colors.holographic : 

interface UltraAdvancedFuturisticBackgroundProps {
  intensity?: 'low' | 'medium' | 'high';
  colorScheme?: 'quantum-fusion' | 'neon-cyber' | 'holographic' | 'quantum-ai';
  particleCount?: number;
  animationSpeed?: number;
  enableHolographic?: boolean;
  enableQuantumEffects?: boolean;
  children: React.ReactNode
}

const UltraAdvancedFuturisticBackground: React.FC<UltraAdvancedFuturisticBackgroundProps> = ({
  intensity;
