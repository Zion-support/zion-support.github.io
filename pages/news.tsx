import { 
  Newspaper;
  Calendar, 
  User, 
  Tag, 
  ArrowRight, 
  ExternalLink;
  TrendingUp;
  Award;
  Rocket;
  Globe;
  Brain;
  Atom;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  Zap
} from 'lucide-react'
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
=======
import React from 'react',
import Head from 'next / head',
import { motion } from 'framer-motion',
import {
  Newspaper,
  Calendar,
  User,
  Tag,
  ArrowRight,
  ExternalLink,
  TrendingUp,
  Award,
  Rocket,
  Globe,
  Brain,
  Atom,
  Zap;
} from 'lucide-react',
import UltraAdvancedFuturisticBackground from '../components / ui / UltraAdvancedFuturisticBackground',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
const NewsPage: React.FC = () => {
  const news_articles = [;
    {
        {/* Category Filter */}
        <section className="py - 10 px - 4">;
          <div className="container mx - auto max - w-6xl">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex - wrap justify - center gap - 4";
            >;
              {categories.map ((category, index) => (
                <button;
                  key={category}
      {/* Hero Section */}
      <section className="relative pt - 32 pb - 20 px - 6">;
        <div className="max - w-7xl mx - auto text - center">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
      {/* Featured News */}
      {featured_news.length > 0 && (
        <section className="py - 16 px - 6">;
          <div className="max - w-7xl mx - auto">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
                  key={item.title}
                  initial={{ opacity: 0, coordinate_y: 30 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg - gradient - to - br from - slate - 800 / 50 to - slate - 900 / 50 backdrop - blur - xl border border - white / 10 rounded - 2xl overflow - hidden hover:border - blue - 500 / 30 transition - all duration - 300";
                >;
                  <div className="p - 8">;
                    <div className="flex items - center gap - 3 mb - 4">;
                      <div className={`w - 12 h - 12 bg - gradient - to - br ${item.color} rounded - xl flex items - center justify - center`}>;
                        <item.icon className="w - 6 h - 6 text - white" />;
                      </div>;
                      <div className="flex items - center gap - 2">;
                        <span className="text - sm text - white / 60 bg - white / 5 px - 3 py - 1 rounded - full">;
                          {item.category}
      {/* Category Filter */}
      <section className="py - 8 px - 6">;
        <div className="max - w-7xl mx - auto">;
          <div className="flex flex - wrap justify - center gap - 4">;
            {categories.map ((category) => (
              <button;
                key={category}
                on_click={() => setSelectedCategory (category)}
                className={`px - 6 py - 3 rounded - full font - semibold transition - all duration - 300 ${
                  selected_category === category;
                    ? 'bg - gradient - to - r from - blue - 600 to - cyan - 600 text - white';
                    : 'bg - white / 5 text - white / 70 hover:bg - white / 10 hover:text - white';
                }`}
              >;
                {category}
      {/* News Grid */}
      <section className="py - 20 px - 6">;
        <div className="max - w-7xl mx - auto">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
                key={item.title}
                initial={{ opacity: 0, coordinate_y: 30 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg - gradient - to - br from - slate - 800 / 50 to - slate - 900 / 50 backdrop - blur - xl border border - white / 10 rounded - 2xl overflow - hidden hover:border - blue - 500 / 30 transition - all duration - 300";
              >;
                <div className="p - 6">;
                  <div className="flex items - center gap - 3 mb - 4">;
                    <div className={`w - 10 h - 10 bg - gradient - to - br ${item.color} rounded - xl flex items - center justify - center`}>;
                      <item.icon className="w - 5 h - 5 text - white" />;
                    </div>;
                    <span className="text - xs text - white / 60 bg - white / 5 px - 2 py - 1 rounded - full">;
                      {item.category}
      {/* Press Kit CTA */}
      <section className="py - 20 px - 6">;
        <div className="max - w-4xl mx - auto text - center">;
          <motion.div;
                    <a;
                      href={`/news/${news.id}`}
                  key={article.title}
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  animate={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg - gray - 800 / 50 backdrop - blur - sm rounded - xl p - 6 border border - gray - 700 / 50 hover:border - cyan - 500 / 50 transition - all duration - 300";
                >;
                  <div className="flex items - center gap - 4 mb - 4">;
                    <span className="px - 3 py - 1 bg - cyan - 500 / 20 text - cyan - 400 text - sm font - medium rounded - full border border - cyan - 500 / 30">;
                      {article.category}
=======
                    </span>;
                  </div>;
                  <h3 className="text - xl font - semibold mb - 3 line - clamp - 2">{article.title}</h3>;
                  <p className="text - gray - 400 mb - 4 line - clamp - 3">{article.excerpt}</p>;
                  <div className="flex items - center justify - between text - sm text - gray - 500 mb - 4">;
                    <div className="flex items - center gap - 2">;
                      <Calendar className="w - 4 h - 4" />;
                      {new Date (article.date).toLocaleDateString ()}
                    </div>;
                    <div className="flex items - center gap - 2">;
                      <Clock className="w - 4 h - 4" />;
                      {article.read_time}
                    </div>;
                  </div>;
                  <button className="w - full px - 4 py - 2 border border - cyan - 500 / 30 text - cyan - 400 rounded - lg hover:bg - cyan - 500 / 10 transition - all duration - 300 flex items - center justify - center gap - 2">;
                    Read More;
                    <ArrowRight className="w - 4 h - 4" />;
                  </button>;
                </motion.article>))}
            </div>;
          </div>;
        </section>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
        {/* Newsletter Signup */}
              <h2 className="text - 3xl lg:text - 4xl font - bold text - white mb - 6">;
                Stay Updated;
              </h2>;
              <p className="text - xl text - gray - 400 max - w-2xl mx - auto mb - 8">;
                Subscribe to our newsletter for the latest news, insights, and breakthroughs in AI consciousness and quantum computing.;
        <section className="py - 20 px - 4 sm:px - 6 lg:px - 8 bg - gray - 800 / 30">;
          <div className="max - w-4xl mx - auto text - center">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
                  key={release.title}
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg - gradient - to - br from - gray - 800 / 30 to - gray - 900 / 30 p - 6 rounded - 2xl border border - gray - 700 / 30 hover:border - purple - 500 / 50 transition - all duration - 300 group";
                >;
                  <div className="flex items - center gap - 2 mb - 3">;
                    <span className="px - 3 py - 1 bg - purple - 500 / 20 text - purple - 300 rounded - full text - xs font - medium">;
                      {release.category}
                    </span>;
                    <span className="text - gray - 400 text - sm">{release.read_time}</span>;
                  </div>;
                  <h3 className="text - xl font - bold text - white mb - 3 group - hover:text - purple - 400 transition - colors duration - 300">;
                    {release.title}
                  </h3>;
                  <p className="text - gray - 300 text - sm mb - 4 leading - relaxed">;
                    {release.excerpt}
        {/* News Categories */}
        <section className="py - 20 px - 4 sm:px - 6 lg:px - 8">;
          <div className="max - w-7xl mx - auto">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
                  key={category.name}
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text - center group cursor - pointer";
                >;
                  <div className="w - 16 h - 16 bg - white / 10 backdrop - blur - lg rounded - 2xl flex items - center justify - center mx - auto mb - 3 group - hover:bg - purple - 500 / 20 transition - all duration - 300 border border - white / 20">;
                    <div className="text - purple - 400 group - hover:text - purple - 300 transition - colors duration - 300">;
                      {category.icon}
                    </div>;
                  </div>;
                  <h3 className="text - sm font - semibold text - white mb - 1">;
                    {category.name}
        {/* Recent News */}
        <section className="py - 20 px - 4 sm:px - 6 lg:px - 8 bg - black / 20">;
          <div className="max - w-7xl mx - auto">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
                  key={news.title}
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg - gradient - to - br from - gray - 800 / 30 to - gray - 900 / 30 p - 6 rounded - 2xl border border - gray - 700 / 30 hover:border - purple - 500 / 50 transition - all duration - 300 group";
                >;
                  <div className="flex items - center gap - 2 mb - 3">;
                    <span className="px - 3 py - 1 bg - purple - 500 / 20 text - purple - 300 rounded - full text - xs font - medium">;
                      {news.category}
                    </span>;
                    <span className="text - gray - 400 text - sm">{news.read_time}</span>;
                  </div>;
                  <h3 className="text - xl font - bold text - white mb - 3 group - hover:text - purple - 400 transition - colors duration - 300">;
                    {news.title}
                  </h3>;
                  <p className="text - gray - 300 text - sm mb - 4 leading - relaxed">;
                    {news.excerpt}
=======
                  </p>;
                  <div className="flex items - center justify - between">;
                    <div className="flex items - center gap - 2">;
                      <User className="w - 4 h - 4 text - gray - 400" />;
                      <span className="text - gray - 400 text - sm">{news.author}</span>;
                    </div>;
                    <div className="flex items - center gap - 2">;
                      <Calendar className="w - 4 h - 4 text - gray - 400" />;
                      <span className="text - gray - 400 text - sm">{news.date}</span>;
                    </div>;
                  </div>;
                </motion.article>))}
            </div>;
          </div>;
        </section>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
        {/* Media Contact */}
        <section className="py - 20 px - 4 sm:px - 6 lg:px - 8">;
          <div className="max - w-4xl mx - auto text - center">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
      {/* CTA Section */}
      <section className="py - 20 px - 4 sm:px - 6 lg:px - 8">;
        <div className="max - w-4xl mx - auto text - center">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >;
            <h2 className="text - 4xl font - bold mb - 6 bg - gradient - to - r from - purple - 400 to - pink - 600 bg - clip - text text - transparent">;
              Get in Touch;
            </h2>;
            <p className="text - xl text - gray - 300 mb - 8 max - w-3xl mx - auto">;
              Have questions about our news or want to learn more about our latest developments? Contact our team.;
            </p>;
            <div className="flex flex - wrap justify - center gap - 4">;
              <a href="/contact" className="bg - gradient - to - r from - purple - 500 to - pink - 600 hover:from - purple - 600 hover:to - pink - 700 text - white px - 8 py - 3 rounded - lg font - semibold transition - all duration - 300 flex items - center space - x-2">;
                <span > Contact Us</span>;
                <ArrowRight className="w - 5 h - 5" />;
              </a>;
              <a href="/about" className="border border - purple - 500 text - purple - 400 hover:bg - purple - 500 hover:text - white px - 8 py - 3 rounded - lg font - semibold transition - all duration - 300">;
                About Zion Tech Group;
              </a>;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >;
            <h2 className="text - 4xl font - bold text - white mb - 6">;
              Media & Press Inquiries;
            </h2>;
            <p className="text - xl text - white / 70 mb - 8 max - w-2xl mx - auto">;
              Journalists and media representatives can access our press kit, company information, and arrange interviews with our leadership team.;
            </p>;
            <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
              <button className="px - 8 py - 4 bg - gradient - to - r from - blue - 600 to - cyan - 600 hover:from - blue - 700 hover:to - cyan - 700 rounded - full font - semibold text - lg transition - all duration - 300 transform hover:scale - 105">;
                Download Press Kit;
              </button>;
              <button className="px - 8 py - 4 border border - white / 20 hover:border - white / 40 rounded - full font - semibold text - lg transition - all duration - 300 backdrop - blur - sm bg - white / 5 hover:bg - white / 10">;
                Contact Media Relations;
              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
        {/* Latest News */}
        <section className="py - 20 bg - black / 50">;
          <div className="container mx - auto px - 4">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
                  key={news.id}
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap - 6 p - 6 bg - gradient - to - br from - gray - 900 / 50 to - gray - 800 / 50 rounded - 2xl border border - gray - 700 / 50 hover:border - cyan - 500 / 50 transition - all duration - 300";
                >;
                  <div className="w - 24 h - 24 bg - gradient - to - br from - cyan - 500 / 20 to - purple - 500 / 20 rounded - xl flex items - center justify - center flex - shrink - 0">;
                    <Newspaper className="w - 12 h - 12 text - gray - 400" />;
                  </div>;
                  <div className="flex - 1">;
                    <div className="flex items - center gap - 2 mb - 2">;
                      <span className="px - 2 py - 1 bg - purple - 500 / 20 text - purple - 400 rounded text - xs border border - purple - 500 / 30">;
                        {news.category}
                      </span>;
                      <span className="text - gray - 400 text - xs">;
                        {news.read_time}
                      </span>;
                    </div>;
                    <h3 className="text - lg font - bold text - white mb - 2 line - clamp - 2">;
                      {news.title}
                    </h3>;
                    <p className="text - gray - 300 text - sm mb - 3 line - clamp - 2">;
                      {news.excerpt}
        {/* Press Releases */}
        <section className="py - 20">;
          <div className="container mx - auto px - 4">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
                  key={release.title}
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="p - 6 bg - gradient - to - br from - gray - 900 / 50 to - gray - 800 / 50 rounded - 2xl border border - gray - 700 / 50 hover:border - cyan - 500 / 50 transition - all duration - 300";
                >;
                  <h3 className="text - xl font - bold text - white mb - 3">;
                    {release.title}
                  </h3>;
                  <p className="text - gray - 300 mb - 4">;
                    {release.summary}
        {/* Media Resources */}
        <section className="py - 20 bg - black / 50">;
          <div className="container mx - auto px - 4">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
                  key={resource.title}
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="p - 6 bg - gradient - to - br from - gray - 900 / 50 to - gray - 800 / 50 rounded - 2xl border border - gray - 700 / 50 hover:border - cyan - 500 / 50 transition - all duration - 300";
                >;
                  <h3 className="text - xl font - bold text - white mb - 3">;
                    {resource.title}
                  </h3>;
                  <p className="text - gray - 300 mb - 4">;
                    {resource.description}
                  </p>;
                  <div className="flex items - center justify - between">;
                    <div className="flex items - center gap - 4 text - sm text - gray - 400">;
                      <span className="px - 2 py - 1 bg - gray - 700 / 50 rounded">;
                        {resource.type}
                      </span>;
                      <span>{resource.size}</span>;
                    </div>;
                    <a;
                      href={resource.download}
        {/* CTA Section */}
        <section className="py - 20 bg - gradient - to - r from - cyan - 500 / 10 via - purple - 500 / 10 to - pink - 500 / 10">;
          <div className="container mx - auto px - 4 text - center">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >;
              <h2 className="text - 4xl font - bold text - white mb - 6">;
                Stay Updated;
              </h2>;
              <p className="text - xl text - gray - 300 mb - 8 max - w-3xl mx - auto">;
                Get the latest news, product updates, and industry insights delivered to your inbox. Never miss a breakthrough announcement.;
              </p>;
              <div className="flex flex - col sm: flex - row gap - 4 justify - center">;
                <a;
                  href="/contact";
                  className="px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - blue - 500 text - white font - bold rounded - xl hover:from - cyan - 600 hover:to - blue - 600 transition - all duration - 300 transform hover:scale - 105";
                >;
                  Subscribe to Updates;
                </a>;
                <a;
                  href="/contact";
                  className="px - 8 py - 4 border - 2 border - cyan - 500 text - cyan - 400 font - bold rounded - xl hover:bg - cyan - 500 hover:text - white transition - all duration - 300";
                >;
                  Media Inquiries;
                </a>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </Layout>);
}
=======
    <div className="min - h-[60vh] px - 6 py - 24">;
      <SEO title="News | Zion Tech Group" description="News and press from Zion Tech Group" />;
      <div className="max - w-3xl mx - auto">;
        <h1 className="text - 4xl font - bold text - white mb - 4">News & Press</h1>;
        <p className="text - gray - 300">Press releases and announcements will appear here.</p>;
      </div>;
      <EnhancedFooter />;
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
