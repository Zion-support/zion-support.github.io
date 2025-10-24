'use client';

import React, { useRef, useEffect } from 'react';

const FuturisticBackground: React.FC = () => {;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d');
<<<<<<< HEAD:all-pages-backup/components/FuturisticBackground.tsx
    if (!ctx) return
    const resizeCanvas = () => {;
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    };

=======
    if (!ctx) return;

    const resizeCanvas = () => {;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
>>>>>>> cursor/fix-errors-and-merge-to-main-92e4:app/components/FuturisticBackground.tsx
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    const particles: Array<{
      x: number,
  y: number,
  vx: number,
  vy: number,
  size: number,
  opacity: number
    }> = [];

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
<<<<<<< HEAD:all-pages-backup/components/FuturisticBackground.tsx
        x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  vx: (Math.random() - 0.5) * 2,
  vy: (Math.random() - 0.5) * 2,
  size: Math.random() * 3 + 1,
  opacity: Math.random() * 0.5 + 0.1
      })}
=======
        x: Math.random() * canvas.width
        y: Math.random() * canvas.height
        vx: (Math.random() - 0.5) * 2
        vy: (Math.random() - 0.5) * 2
        size: Math.random() * 3 + 1
        opacity: Math.random() * 0.5 + 0.1
      });
    }
>>>>>>> cursor/fix-errors-and-merge-to-main-92e4:app/components/FuturisticBackground.tsx

    const animate = () => {;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy
        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${particle.opacity})`;
        ctx.fill()});

      // Draw connections
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 1
            ctx.stroke()}
        })});

<<<<<<< HEAD:all-pages-backup/components/FuturisticBackground.tsx
      requestAnimationFrame(animate)};

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas)}}, []);
=======
      requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    }
  }, []);
>>>>>>> cursor/fix-errors-and-merge-to-main-92e4:app/components/FuturisticBackground.tsx

  return (
    <>
      <Helmet>
        <Head>
        <title>FuturisticBackground - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Advanced futuristicbackground solutions powered by AI technology.&quot; />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>
        <meta name=&quot;keywords&quot; content=&quot;AI, artificial intelligence, FuturisticBackground, AI solutions, intelligent automation&quot; />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>
      </Helmet>
      <Navigation />
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900&quot;></div>
        <section className=&quot;relative py-20 px-4 overflow-hidden&quot;></section>
          <div className=&quot;absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20&quot;></div>
          <div className=&quot;relative max-w-7xl mx-auto text-center&quot;></div>
            <h1 className=&quot;text-5xl md: text-7xl font-bold text-white mb-6 leading-tight&quot;></h1>
              FuturisticBackground
            <p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed&quot;>
              Advanced futuristicbackground solutions powered by AI technology.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <button className=&quot;bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center&quot;>
                Get Started
                <ArrowRight className=&quot;ml-2 h-5 w-5&quot; />
              </button>
              <button className=&quot;bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105&quot;>
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className=&quot;py-20 px-4&quot;></section>
          <div className=&quot;max-w-7xl mx-auto&quot;></div>
            <div className=&quot;text-center mb-16&quot;></div>
              <h2 className=&quot;text-4xl md: text-5xl font-bold text-white mb-6&quot;></h2>
                Key Features
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;></p>
                Powerful AI technology that drives results
            </div>
            <div className=&quot;grid md:grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
              {features.map((feature, index) => (
                <div key={index} className=&quot;bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20&quot;></div>
                  <feature.icon className=&quot;h-12 w-12 text-emerald-400 mb-4&quot; />
                  <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>{feature.title}</h3>
                  <p className=&quot;text-gray-300 mb-4&quot;>{feature.description}</p>
                  <ul className=&quot;space-y-2&quot;>
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className=&quot;flex items-center text-sm text-gray-300&quot;>
                        <CheckCircle className=&quot;h-4 w-4 text-emerald-400 mr-2 flex-shrink-0&quot; />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className=&quot;py-20 px-4 bg-white/5&quot;></section>
          <div className=&quot;max-w-7xl mx-auto&quot;></div>
            <div className=&quot;text-center mb-16&quot;></div>
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Why Choose Our Solution</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Experience the benefits of cutting-edge AI technology
              </p>
            </div>
            <div className=&quot;grid md: grid-cols-2 lg:grid-cols-3 gap-8&quot;></div>
              {benefits.map((benefit, index) => (
                <div key={index} className=&quot;flex items-start space-x-4&quot;></div>
                  <CheckCircle className=&quot;h-6 w-6 text-emerald-400 mt-1 flex-shrink-0&quot; />
                  <p className=&quot;text-gray-300 text-lg&quot;>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className=&quot;py-20 px-4&quot;></section>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;></div>
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>Ready to Transform Your Business?</h2>
            <p className=&quot;text-xl text-gray-300 mb-8&quot;>
              Join thousands of businesses already using our AI solutions
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <button className=&quot;bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;>
                Start Free Trial
              </button>
              <button className=&quot;border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;>
                Contact Sales
              </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
<<<<<<< HEAD:all-pages-backup/components/FuturisticBackground.tsx
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)' }}
    />
  )};

export default FuturisticBackground
=======
  );
}
export default FuturisticBackground;
>>>>>>> cursor/fix-errors-and-merge-to-main-92e4:app/components/FuturisticBackground.tsx
