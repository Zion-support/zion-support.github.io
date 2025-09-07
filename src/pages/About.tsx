import React from 'react';

<<<<<<< HEAD
<<<<<<< HEAD
const AboutPage: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900">About Us</h1>
      <p className="mt-4 text-lg text-gray-700">Learn more about Zion Tech Group.</p>
=======
const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 text-center">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Zion Tech Group</span>
          </h1>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl text-gray-300 mb-8 text-center">
              Empowering businesses with cutting-edge technology solutions and innovative digital strategies.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-gray-300 mb-6">
                  We are dedicated to transforming businesses through innovative technology solutions. 
                  Our mission is to bridge the gap between complex technology and practical business needs, 
                  delivering solutions that drive growth and efficiency.
                </p>
                <p className="text-gray-300">
                  From AI-powered applications to comprehensive IT services, we provide the tools and 
                  expertise your business needs to thrive in the digital age.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
                <p className="text-gray-300 mb-6">
                  To be the leading technology partner for businesses worldwide, known for our 
                  innovative solutions, exceptional service, and commitment to client success.
                </p>
                <p className="text-gray-300">
                  We envision a future where technology seamlessly integrates with business operations, 
                  creating opportunities for growth and innovation across all industries.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-8 mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
                  <p className="text-gray-300">Cutting-edge solutions that keep you ahead of the competition</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Reliability</h3>
                  <p className="text-gray-300">Proven track record of delivering successful projects on time</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Expertise</h3>
                  <p className="text-gray-300">Experienced team with deep knowledge across multiple technologies</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-gray-300 mb-8">
                Let&apos;s discuss how we can help transform your business with our technology solutions.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
              >
                Contact Us Today
              </a>
            </div>
          </div>
        </div>
      </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-3cef
    </div>
  );
};

<<<<<<< HEAD
export default AboutPage;
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
export default About;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-3cef
