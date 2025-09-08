


        case 'neon':;

  useEffect__(() => {
    // Only run on client side
    if (typeof window === 'undefined') return,
    
    const canvas = canvasRef.current
    if (!canvas) return,

    const ctx = canvas.getContext('2d')
    if (!ctx) return,

    canvas.width = window.innerWidth,
    canvas.height = window.innerHeight,

    let animationFrameId: number
    let particles: Particle[] = []
    let quantumFields: QuantumField[] = []

    // Enhanced theme-based color schemes
    const _getThemeColors = () => {
      switch (theme) {
        case 'neon':

          return {
            primary: ['#ff0080#00ffff#ffff00#ff00ff'],
            secondary: ['#8000ff#00ff80#ff8000#0080ff'],
            accent: ['#ff4080#40ffff#ffff40#ff40ff'],
glow: ['#ff0066#00ffff#ffff00#ff00ff'];
          },
        case 'holographic':;
          return {
            primary: ['#ff6b6b#4ecdc4#45b7d1#96ceb4'],
            secondary: ['#feca57#ff9ff3#54a0ff#5f27cd'],
            accent: ['#ff9ff3#54a0ff#5f27cd#ff6b6b'],
glow: ['#ff5252#26d0ce#42a5f5#66bb6a'];
          },
        case 'cyberpunk':;
          return {
            primary: ['#ff0055#00ffff#ffff00#ff00ff'],
            secondary: ['#8000ff#00ff80#ff8000#0080ff'],
            accent: ['#ff4080#40ffff#ffff40#ff40ff'],
glow: ['#ff0033#00ffff#ffff00#ff00ff'];
          },
        case 'quantum':;
          return {
            primary: ['#8b5cf6#06b6d4#ec4899#10b981'],
            secondary: ['#f59e0b#ef4444#8b5cf6#06b6d4'],
            accent: ['#ec4899#10b981#f59e0b#ef4444'],
glow: ['#7c3aed#0891b2#db2777#059669'];
          },
        default: // quantum - neon;
          return {
            primary: ['#8b5cf6#06b6d4#ec4899#10b981'],
            secondary: ['#ff0080#00ffff#ffff00#ff00ff'],
            accent: ['#f59e0b#ef4444#8000ff#00ff80'],
glow: ['#7c3aed#0891b2#ff0066#00ffff'];

    let particles: Array<{
      coordinate_x: number,
      coordinate_y: number,
    const colors = getThemeColors()

    // Enhanced particle system with quantum effects
    let particles: Array<{
      x: number,
      y: number,

      vx: number,
      vy: number,
      size: number,
      color: string,
type: 'particle' | 'wave' | 'quantum' | 'neon' | 'hologram' | 'quantum - neon',
      life: number,
      max_life: number,
      rotation: number,
      rotation_speed: number,
      wave_frequency: number,
      wave_amplitude: number,
      quantum_state: number,
      neon_intensity: number,
      hologram_opacity: number;
    }> = [],


    const animate = () =>: any {
      // Check condition
if (return, ) {
  $2
}
      ctx.clear_rect (0, 0, canvas.width, canvas.height),
      // Check condition
if ( {) {
  $2
}
        particles.for_each ((particle1, i) => {
          particles.slice (i + 1).for_each ((particle2) => {
            const distance = Math.sqrt (
              Math.pow (particle1.x - particle2.x, 2) +;
              Math.pow (particle1.y - particle2.y, 2)),
            // Check condition
if ( {) {
  $2
}
              ctx.stroke_style = `${particle1.color}20`,
              ctx.line_width = 1,
              ctx.begin_path (),
              ctx.move_to (particle1.x, particle1.y),
              ctx.line_to (particle2.x, particle2.y),
              ctx.stroke ();







