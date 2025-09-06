
import Head from 'next/head';
import { motion } from 'framer-motion';
import { FileText;
  Download;
  Calendar;
  User;
  Tag;
  ArrowRight;
  TrendingUp;
  BarChart3;
  Brain;
  Atom;
  Globe;
  Shield;
  Zap;
  Eye;
  Clock;
  Award
 } from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
    }
    {
      title: 'Global Tech Investment Trends: Venture Capital & Innovation Funding'
      excerpt: 'Comprehensive overview of technology investment patterns, emerging sectors, and funding opportunities worldwide.';
    }
    {
      title: 'Sustainable Technology: Green Computing & Environmental Impact'
      excerpt: 'Analysis of sustainable technology practices, environmental impact assessment, and green computing solutions.';
                key={index}
                className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-400/20 rounded-3xl p-12 hover:border-cyan-400/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >;
                <div className="flex flex - col lg:flex - row items - start space - y-8 lg:space - y-0 lg:space - x-8">;
                  <div className={`w - 24 h - 24 bg - gradient - to - br ${report.color} rounded - 2xl flex items - center justify - center text - white flex - shrink - 0`}>;
                    {report.icon}
                  </div>;
                  <div className="flex - 1">;
                    <div className="flex items - center space - x-4 mb - 4">;
                      <span className="bg - cyan - 500 / 20 text - cyan - 400 px - 3 py - 1 rounded - full text - sm font - medium">;
                        {report.category}
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8, delay: 0 && 0.2 }}
              viewport={{ once: true }}>;
              {categories && categories.map((category, index) => (;
                <button
                  key={index}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    category && category.active
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                  }`}>;
                  {category && category.name} ({category && category.count});
                </button>;
              ))}
            {/* Reports Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
              {reports && reports.filter(report => !report && report.featured).map((report, index) => (;
                <motion&& motion.article
                  key={index}
                  className="bg-black/40 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:shadow-xl hover:shadow-cyan-500/30"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >;
                  <div className={`w - 16 h - 16 bg - gradient - to - br ${report.color} rounded - xl flex items - center justify - center text - white mb - 6`}>;
                    {report.icon}
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">;
          <div className="max-w-4xl mx-auto text-center">;
            <motion&& motion.div
              className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-400/20 rounded-3xl p-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}>;
              <h2 className="text-4xl font-bold text-white mb-6">;
                Need Custom Research?;
              </h2>;
              <p className="text-xl text-gray-300 mb-8">;
                Our research team can conduct custom studies and analysis tailored to your specific industry needs and challenges.;
              </p>;
              <div className="flex flex-col sm: flex-row gap-4 justify-center">;
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 inline-flex items-center space-x-2">;
                  <span>Request Custom Research</span>;
                  <ArrowRight className="w-5 h-5" />;
                </a>;
                <a
                  href="/services"
                  </div>;
                  <div className="flex items - center space - x-4 mb - 4">;
                    <span className="bg - cyan - 500 / 20 text - cyan - 400 px - 3 py - 1 rounded - full text - sm font - medium">;
                      {report.category}
                    </span>;
                    <span className="text - gray - 400 text - sm flex items - center space - x-1">;
                      <Calendar className="w - 4 h - 4" />;
                      <span>{format_date (report.date)}</span>;
                    </span>;
                  </div>;
                  <h3 className="text - xl font - bold text - white mb - 4 line - clamp - 3">{report.title}</h3>;
                  <p className="text - gray - 300 mb - 6 line - clamp - 4">{report.excerpt}</p>;
                  <div className="flex items - center justify - between mb - 6">;
                    <span className="text - gray - 400 text - sm flex items - center space - x-1">;
                      <FileText className="w - 4 h - 4" />;
                      <span>{report.pages} pages</span>;
                    </span>;
                    <span className="text - gray - 400 text - sm flex items - center space - x-1">;
                      <Download className="w - 4 h - 4" />;
                      <span>{format_number (report.downloads)}</span>;
                    </span>;
                  </div>;
                  <div className="flex items - center justify - between">;
                    <span className="text - gray - 400 text - sm flex items - center space - x-1">;
                      <User className="w - 4 h - 4" />;
                      <span>{report.author.split ('&')[0].trim ()}</span>;
                    </span>;
                    <button className="text - cyan - 400 hover:text - cyan - 300 transition - colors duration - 200 inline - flex items - center space - x-1">;
                      <span > Download</span>;
                      <Download className="w - 4 h - 4" />;
                    </button>;
                  </div>;
                </motion.article>))}
            </div>;
          </div>;
        </section>;
        {/* CTA Section */}
        <section className="py - 20 px - 4 sm:px - 6 lg:px - 8">;
          <div className="max - w-4xl mx - auto text - center">;
            <motion.div;
              className="bg - gradient - to - r from - cyan - 900 / 20 to - blue - 900 / 20 border border - cyan - 400 / 20 rounded - 3xl p - 12";
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >;
              <h2 className="text - 4xl font - bold text - white mb - 6">;
                Need Custom Research?;
              </h2>;
              <p className="text - xl text - gray - 300 mb - 8">;
                Our research team can conduct custom studies and analysis tailored to your specific industry needs and challenges.;
              </p>;
              <div className="flex flex - col sm: flex - row gap - 4 justify - center">;
                <a;
                  href="/contact";
                  className="bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 600 hover:to - blue - 700 text - white px - 8 py - 4 rounded - xl font - semibold transition - all duration - 200 shadow - lg hover:shadow - cyan - 500 / 25 inline - flex items - center space - x-2";
                >;
                  <span > Request Custom Research</span>;
                  <ArrowRight className="w - 5 h - 5" />;
                </a>;
                <a;
                  href="/services";
                  className="border border - cyan - 400 / 40 text - cyan - 400 hover:bg - cyan - 400 / 10 px - 8 py - 4 rounded - xl font - semibold transition - all duration - 200";
                >;
                  View Research Services;
                </a>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </UltraAdvancedFuturisticBackground>);
}
;
export default ReportsPage;
;
