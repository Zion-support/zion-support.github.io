
import React from 'react';

import Link from 'next/link';

import { motion } from 'framer-motion';

} from 'lucide-react';
import Layout from '../../components/Layout';

const solutions = [
  {
    title: "Enterprise Solutions"
    description: "Comprehensive technology solutions for large organizations"
    icon: Building
    href: "/solutions/enterprise"
    features: [
      "Scalable Infrastructure"
      "Enterprise Security"
      "Custom Integration"
      "24/7 Support"
    ]
    color: "from-blue-600 to-blue-800"
  }
  {
    title: "Startup Solutions"
    description: "Rapid deployment solutions for growing startups"
    icon: Rocket
    href: "/solutions/startup"
    features: [
      "Quick Setup"
      "Cost Effective"
      "Scalable Growth"
      "Expert Guidance"
    ]
    color: "from-green-600 to-green-800"
  }
  {
    title: "Industry Solutions"
    description: "Specialized solutions for specific industries"
    icon: BarChart3
    href: "/solutions/industry"
    features: [
      "Industry Expertise"
      "Compliance Ready"
      "Custom Workflows"
      "Best Practices"
    ]
    color: "from-purple-600 to-purple-800"
  }
  {
    title: "Custom Development"
    description: "Tailored solutions built specifically for your needs"
    icon: Settings
    href: "/solutions/custom"
    features: [
      "Bespoke Development"
      "Unique Requirements"
      "Full Ownership"
      "Ongoing Support"
    ]
    color: "from-orange-600 to-orange-800"

const SolutionsPage: NextPage = () => {
  const solutions = [
    // Healthcare Solutions
    {

    // Financial Services Solutions
    {
      category: "Financial Services & FinTech",
      solutions: [
        {
          name: "AI-Powered Risk Assessment",
          description: "Machine learning-based risk assessment and fraud detection for financial institutions.",

    // Manufacturing & Industry 4.0
    {
      category: "Manufacturing & Industry 4.0",
      solutions: [
        {
          name: "IoT Manufacturing Platform",

    // Retail & E-commerce Solutions
    {
      category: "Retail & E-commerce",
      solutions: [
        {
          name: "AI-Powered Customer Analytics",
          description: "Advanced customer behavior analysis and personalized marketing automation platform.",

    // Education & Training Solutions
    {
      category: "Education & Training",
      solutions: [
        {
          name: "AI-Powered Learning Platform",
          description: "Personalized learning platform with AI-driven content recommendations and adaptive assessments.",

    // Government & Public Sector
    {
      category: "Government & Public Sector",
      solutions: [
        {
          name: "Smart City Platform",

  }
}
      ];
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],
  return (

                efficiency, and innovation across all industries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Custom Solution
                </Link>
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Solutions Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Solution Categories

                    key={index}
                    className="bg - white p - 8 rounded - xl shadow - lg hover:shadow - xl transition - all duration - 300 group";
                    initial={{ opacity: 0, coordinate_y: 30 }}
                    whileInView={{ opacity: 1, coordinate_y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    while_hover={{ coordinate_y: -5 }}
                  >;
                    <div className={`w - 16 h - 16 bg - gradient - to - r ${solution.color} rounded - lg flex items - center justify - center mb - 6 group - hover:scale - 110 transition - transform`}>;
                      <IconComponent className="w - 8 h - 8 text - white" />;
                    </div>;
                    <h3 className="text - 2xl font - bold text - gray - 900 mb - 4">;
                      {solution.title}
                    </h3>;
                    <p className="text - gray - 600 mb - 6 leading - relaxed">;
                      {solution.description}
                    </p>;
                    <ul className="space - y-2 mb - 6">;
                      {solution.features.map ((feature, feature_index) => (
                        <li key={feature_index} className="flex items - center text - sm text - gray - 600">;
                          <CheckCircle className="w - 4 h - 4 text - green - 500 mr - 2 flex - shrink - 0" />;
                          {feature}
                        </li>))}
                    </ul>;
                    <Link;
                      href={solution.href}

              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We offer comprehensive technology solutions tailored to different business needs and stages.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {solution.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={solution.href}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:text-purple-600 transition-colors"

                    >
                      <span>Explore {solution.title}</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>

                  </motion.div>
                );

              })}
            </div>;
          </div>;
        </section>;
        {/* Industries Section */}
        <section className="py - 20 bg - white">;
          <div className="container mx - auto px - 4">;
            <motion.div;
              className="text - center mb - 16";
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >;
              <h2 className="text - 3xl sm:text - 4xl md:text - 5xl font - bold text - gray - 900 mb - 4">;
                Industries We Serve;
              </h2>;
              <p className="text - lg sm:text - xl text - gray - 600 max - w-4xl mx - auto leading - relaxed">;
                Our solutions are designed to meet the unique challenges and requirements of various industries.;
              </p>;
            </motion.div>;
            <div className="grid grid - cols - 2 md:grid - cols - 3 lg:grid - cols - 6 gap - 6">;
              {industries.map ((industry, index) => (
                <motion.div;
                  key={index}
                  className="text - center p - 6 bg - gray - 50 rounded - lg hover:bg - blue - 50 transition - colors group cursor - pointer";
                  initial={{ opacity: 0, coordinate_y: 30 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  while_hover={{ coordinate_y: -5 }}
                >;
                  <div className="text - 4xl mb - 3 group - hover:scale - 110 transition - transform">;
                    {industry.icon}
                  </div>;
                  <div className="text - sm font - medium text - gray - 700 group - hover:text - blue - 600 transition - colors">;
                    {industry.name}
                  </div>;
                </motion.div>))}
            </div>;
          </div>;
        </section>;
        {/* Stats Section */}
        <section className="py - 20 bg - gray - 900 text - white">;
          <div className="container mx - auto px - 4">;
            <div className="grid grid - cols - 2 md:grid - cols - 4 gap - 8">;
              {stats.map ((stat, index) => (
                <motion.div;
                  key={index}
                  className="text - center";
                  initial={{ opacity: 0, coordinate_y: 30 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >;
                  <div className="text - 3xl md:text - 4xl font - bold text - blue - 400 mb - 2">;
                    {stat.number}
                  </div>;
                  <div className="text - gray - 300 font - medium">{stat.label}</div>;
                </motion.div>))}
            </div>;
          </div>;
        </section>;
        {/* CTA Section */}
        <section className="py - 20 bg - gradient - to - r from - blue - 600 to - purple - 600 text - white">;
          <div className="container mx - auto px - 4 text - center">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >;
              <h2 className="text - 3xl sm:text - 4xl md:text - 5xl font - bold mb - 6">;
                Ready to Transform Your Business?;
              </h2>;
              <p className="text - xl text - blue - 100 mb - 8 max - w-3xl mx - auto">;
                Let's discuss your specific needs and create a custom solution that drives your success.;
              </p>;
              <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
                <Link href="/contact" className="px - 8 py - 4 bg - white text - blue - 600 rounded - lg hover:bg - gray - 100 transition - all duration - 300 font - semibold">;
                  Get Free Consultation;
                </Link>;
                <Link href="/about" className="px - 8 py - 4 border - 2 border - white text - white rounded - lg hover:bg - white hover:text - blue - 600 transition - all duration - 300 font - semibold">;
                  Learn About Us;
                </Link>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </Layout>);
}
  );

}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Can't find exactly what you need? Our expert team can design and develop
            custom solutions tailored to your specific requirements and industry challenges.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-2">Custom Development</h3>
              <p className="text-gray-600">Tailored solutions built from the ground up</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-semibold mb-2">System Integration</h3>
              <p className="text-gray-600">Seamless integration with existing systems</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-2">Training & Support</h3>
              <p className="text-gray-600">Comprehensive training and ongoing support</p>
            </div>
          </div>
          <Link
            href="/contact"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Discuss Custom Solutions
          </Link>
        </div>
        {/* Contact Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Let's discuss how our industry-specific solutions can address your unique challenges
            and drive measurable business outcomes.
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <Link
              href="/contact"
              className="bg-purple-600 hover: bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Request Demo
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600">
            <div>
              <h3 className="font-semibold mb-2">📱 Mobile</h3>
              <p>+1 302 464 0950</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">✉️ Email</h3>
              <p>kleber@ziontechgroup.com</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">🌐 Website</h3>
              <p>https://ziontechgroup.com</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )

export default SolutionsPage;
