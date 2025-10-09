
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CookiesPage: React.FC = () => {
  return (
    <div>
      <Navigation />
      
      <main className="pt-20">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">Cookie Policy</h1>
          <p className="text-xl text-gray-300 mb-8">Last updated: January 2025</p>

          <div>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Cookie className="w-6 h-6 mr-3 text-cyan-400" />
                What Are Cookies?
              </h2>
              <p className="text-gray-300">
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and enabling certain functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Settings className="w-6 h-6 mr-3 text-cyan-400" />Types of Cookies We Use</h2>
              <div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Essential Cookies</h3>
                  <p className="text-gray-300">These cookies are necessary for the website to function properly. They enable basic functions like page
                    navigation and access to secure areas of the website.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Analytics Cookies</h3>
                  <p className="text-gray-300">These cookies help us understand how visitors interact with our website by collecting and reporting
                    information anonymously.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Functional Cookies</h3>
                  <p className="text-gray-300">These cookies enable the website to provide enhanced functionality and personalization, such as
                    remembering your preferences.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Marketing Cookies</h3>
                  <p className="text-gray-300">
                    These cookies are used to track visitors across websites to display relevant and engaging advertisements.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-cyan-400" />Managing Your Cookie Preferences</h2>
              <p className="text-gray-300 mb-4">
                You can control and manage cookies in various ways:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Use our cookie consent banner to choose which cookies to accept</li>
                <li>Configure your browser settings to block or delete cookies</li>
                <li>Use browser extensions to manage cookies</li>
                <li>Contact us to update your preferences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Third-Party Cookies</h2>
              <p className="text-gray-300 mb-4">
                We may use third-party services that set their own cookies:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Google Analytics for website analytics</li>
                <li>Social media platforms for sharing functionality</li>
                <li>Payment processors for transaction security</li>
                <li>Customer support tools for live chat</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300 mb-4">
                If you have any questions about our use of cookies, please contact us:
              </p>
              <div>
                <a
                  href="tel:+13024640950"
                  className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />(302) 464-0950</a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2" />kleber@ziontechgroup.com</a>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>);
}
export default CookiesPage