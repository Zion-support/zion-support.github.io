import React from 'react';

export function About() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            We are a leading technology company dedicated to delivering innovative solutions 
            that drive digital transformation and business growth.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-card p-8 rounded-xl border">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-foreground/80 leading-relaxed text-lg">
              To empower businesses with cutting-edge technology solutions that drive innovation, 
              efficiency, and growth. We believe in the transformative power of technology and 
              its ability to solve complex business challenges.
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-xl border">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Vision</h2>
            <p className="text-foreground/80 leading-relaxed text-lg">
              To be the global leader in technology solutions, recognized for our innovation, 
              reliability, and commitment to client success. We envision a future where technology 
              seamlessly integrates with business operations.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-foreground/70">
                We constantly push the boundaries of what's possible with technology.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Collaboration</h3>
              <p className="text-foreground/70">
                We work closely with our clients to understand their unique needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p className="text-foreground/70">
                We deliver high-quality solutions that exceed expectations.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl border text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👨‍💼</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">John Smith</h3>
              <p className="text-primary mb-2">CEO & Founder</p>
              <p className="text-foreground/70 text-sm">
                Technology visionary with 15+ years of experience in enterprise solutions.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl border text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👩‍💻</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
              <p className="text-primary mb-2">CTO</p>
              <p className="text-foreground/70 text-sm">
                AI and machine learning expert leading our technical innovation.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl border text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👨‍🔬</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Mike Chen</h3>
              <p className="text-primary mb-2">Lead Developer</p>
              <p className="text-foreground/70 text-sm">
                Full-stack developer specializing in scalable cloud architectures.
              </p>
            </div>
          </div>
        </div>

        {/* Company Stats */}
        <div className="bg-primary/5 rounded-xl p-12">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Company at a Glance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">2018</div>
              <div className="text-foreground/70">Founded</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-foreground/70">Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-foreground/70">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-foreground/70">Projects Delivered</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}