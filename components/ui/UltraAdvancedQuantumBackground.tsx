
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let animationFrameId: number;
let particles: Particle[] = [];
let quantumFields: QuantumField[] = [];
let neuralNetworks: NeuralNetwork[] = [];
class Particle {;
  x: number;
y: number;
canvas.width = window.inner_width;
canvas.height = window.inner_height;
let animationFrameId: number;
let particles: Particle[] = [];
let quantum_fields: QuantumField[] = [];
let neural_networks: NeuralNetwork[] = [];
class Particle {
  coordinate_x: number;
coordinate_y: number;
vx: number;
vy: number;
size: number;
color: string;
life: number;
maxLife: number;
constructor () {
  this.coordinate_x = Math.random () * canvas.width;
this.coordinate_y = Math.random () * canvas.height;
this.vx = (Math.random () - 0.5) * 2;
this.vy = (Math.random () - 0.5) * 2;
this.size = Math.random () * 3 + 1;
this.color = `hsl ($ {
  Math.random () * 360
 70%, 60%) `;
this.life = Math.random () * 100;
this.maxLife = 100
if (this.x < 0 |this.x > canvas.width) this.vx *= -1;
if (this.y < 0 |this.y > canvas.height) this.vy *= -1;
if (this.life 