    let particles: Particle[] = [];
    let neuralNodes: NeuralNode[] = [];
    let quantumFields: QuantumField[] = [];
    let holographicLayers: HolographicLayer[] = [];

    // Set canvas size
    const resizeCanvas = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        canvas.width = rect.width;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      life: number;
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 2 * animationSpeed;
        this.vy = (Math.random() - 0.5) * 2 * animationSpeed;
        this.size = Math.random() * 3 + 1;
        this.color = getColorSchemeColor();
        this.alpha = Math.random() * 0.8 + 0.2;
        this.life = Math.random() * 100 + 50;
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;
        // Wrap around
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Neural network node class
    class NeuralNode {
      x: number;
      y: number;
      connections: NeuralNode[];
      activation: number;

    // Quantum field class
    class QuantumField {
      x: number;
      y: number;
      radius: number;
      intensity: number;
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 100 + 50;
        this.intensity = Math.random() * 0.8 + 0.2;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = 0.1;
      width: number;
      height: number;
      rotation: number;
      alpha: number;
      }

      update() {
        this.rotation += 0.005 * animationSpeed;
      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.globalAlpha = this.alpha;
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 1;
        ctx.setLineDash([5, 5]);
      // Create connections
      neuralNodes.forEach(node => {
        neuralNodes.forEach(otherNode => {
          if (node !== otherNode && Math.random() < 0.3) {
      // Update and draw quantum fields
      if (enableQuantumEffects) {
        quantumFields.forEach(field => {
          field.update();
      // Update and draw holographic layers
      if (enableHolographic) {
        holographicLayers.forEach(layer => {
          layer.update();
      // Update and draw neural network
      if (enableNeuralNetworks) {
        neuralNodes.forEach(node => {
          node.update();
      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();
              Math.pow(particle.x - otherParticle.x, 2) + 
              Math.pow(particle.y - otherParticle.y, 2)
            );
            
            if (distance < 100) {
              ctx.save();
              ctx.globalAlpha = (100 - distance) / 100 * 0.3;
              ctx.strokeStyle = getColorSchemeColor();
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
              ctx.restore();
            }
          });
        });
      }

            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-purple-400/20 rounded-full"
            animate={{
