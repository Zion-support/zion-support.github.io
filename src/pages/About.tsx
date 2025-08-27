import { Users, Award, Globe, Zap, Shield, Cloud } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-3xl mx-auto">
            Leading the future of technology with innovative solutions and unwavering commitment to excellence
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zion-slate-dark mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-zion-slate-light mb-6 leading-relaxed">
                To empower businesses with cutting-edge technology solutions that drive innovation, 
                enhance security, and accelerate digital transformation. We believe in making 
                advanced technology accessible and practical for organizations of all sizes.
              </p>
              <p className="text-lg text-zion-slate-light leading-relaxed">
                Our team of experts combines deep technical knowledge with industry experience 
                to deliver solutions that not only meet current needs but also prepare our 
                clients for future challenges.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-zion-cyan" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-zion-slate-dark mb-2">Innovation First</h3>
                  <p className="text-zion-slate-light">
                    We stay at the forefront of emerging technologies to provide cutting-edge solutions.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-zion-purple/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-zion-purple" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-zion-slate-dark mb-2">Security by Design</h3>
                  <p className="text-zion-slate-light">
                    Every solution we build incorporates security best practices from the ground up.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-zion-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Cloud className="w-6 h-6 text-zion-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-zion-slate-dark mb-2">Scalable Solutions</h3>
                  <p className="text-zion-slate-light">
                    We design systems that grow with your business and adapt to changing needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-zion-slate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-slate-dark mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-zion-slate-dark mb-2">People First</h3>
              <p className="text-zion-slate-light">
                We value our team, our clients, and the communities we serve above all else.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-zion-purple" />
              </div>
              <h3 className="text-xl font-semibold text-zion-slate-dark mb-2">Excellence</h3>
              <p className="text-zion-slate-light">
                We strive for excellence in every project, every interaction, and every solution.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-zion-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-zion-blue" />
              </div>
              <h3 className="text-xl font-semibold text-zion-slate-dark mb-2">Global Impact</h3>
              <p className="text-zion-slate-light">
                We work to create positive change through technology on a global scale.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-slate-dark mb-2">Innovation</h3>
              <p className="text-zion-slate-light">
                We continuously push boundaries and explore new possibilities in technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-zion-cyan mb-2">10+</div>
              <div className="text-zion-slate-dark">Years of Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-zion-purple mb-2">100+</div>
              <div className="text-zion-slate-dark">Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-zion-cyan mb-2">25+</div>
              <div className="text-zion-slate-dark">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-zion-purple mb-2">99%</div>
              <div className="text-zion-slate-dark">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
