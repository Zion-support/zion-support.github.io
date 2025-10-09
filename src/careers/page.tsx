
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CareersPage: React.FC = () => {
      return (
    <div>
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">Join Our Team</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Be part of the future of AI. Join our team of innovators and help us build the next generation of intelligent solutions.
          </p>
        </section>

        {/* Open Positions */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">Open Positions</h2>
          <div>
            {openPositions.map((position, index) => (
              <div>
                <div>
                  <position.icon className="w-12 h-12 text-cyan-400 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                    <div>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {position.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {position.type}
                      </span>
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {position.department}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">{position.description}</p>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to="/contact"
                  className="cyber-button w-full text-center inline-block"
                >Apply Now</Link>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Why Work With Us?
          </h2>
          <div>
            {benefits.map((benefit, index) => (
              <div>
                <Award className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white">{benefit}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Culture Section */}
        <section className="container mx-auto px-4 py-16">
          <div>
            <h2 className="text-3xl font-bold text-white text-center mb-8">Our Culture</h2>
            <div>
              <div>
                <Brain className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
                <p className="text-gray-300">We encourage creative thinking and experimentation with cutting-edge technologies.</p>
              </div>
              <div>
                <Users className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Collaboration</h3>
                <p className="text-gray-300">We work together as a team, sharing knowledge and supporting each other's growth.</p>
              </div>
              <div>
                <Shield className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Integrity</h3>
                <p className="text-gray-300">We maintain the highest ethical standards in all our work and relationships.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Don't See Your Role?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our mission.
            </p>
            <div>
              <Link
                to="/contact"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg"
              >
                <Mail className="w-5 h-5 mr-2" />Send Your Resume</Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />(302) 464-0950</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>);
}
export default CareersPage