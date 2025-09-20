import, React, from "react";
import { SEO } from "../components/SEO";
import { motion } from "framer-motion";
import { ;
  PenTool,;
  Brain,;
  Zap,;
  CheckCircle,;
  Star,;
  TrendingUp,;
  Award,;
  Globe,;
  Lock,;
  Database,;
  Cpu,;
  Network,;
  BarChart3,;
  FileText,;
  MessageCircle,;
  Phone,;
  Mail,;
  MapPin,;
  Building,;
  Video,;
  Eye,;
  Type,;
  Image,;
  Music,;
  Code,;
  Palette,;
  TargetUsersArrowRight;
} from "lucide-react";
export, default, function AIContentCreation() {
  const features = [;
    {
      icon: Type,title: 'AI, Text, Generation',description: 'Advanced, language, models for, creating, engagingSEO-optimized content'colo,;
  r: 'from-blue-50o0 to-cyan-50o0';
    };
    {
      icon: Image,title: 'AI, Image, Creation',description: 'Generate, stunning, visuals, graphicsand, illustrations, with AI'color: 'from-purple-50o0 to-pink-50o0';
    };
    {
      icon: Video,title: 'AI, Video, Production',description: 'Create, professional, videos, animationsand, multimedia, content'color: 'from-red-50o0 to-orange-50o0';
    };
    {
      icon: Music,title: 'AI, Audio, Generation',description: 'Generate, background, music, sound, effectsand, voiceovers'color: 'from-green-50o0 to-emerald-50o0';
    };
    {
      icon: Code,title: 'AI, Code, Generation'description: 'Automated, code, writing and, technical, documentation'colo,;
  r: 'from-yellow-50o0 to-orange-50o0';
    },;
    {
      icon: Palettetitl,;
    e: 'AI, Design, Tools'description: 'Intelligent, design, assistance and, creative, automation'colo,;
  r: 'from-indigo-50o0 to-purple-50o0';
    };
,  ];
  const benefits = [;
    'Increase, content, production by, 10xReduce, content creation, costs, by 70%',;
    'Improve, SEO, rankings and, engagementMaintain, consistent brand voice''Scale, content, across multiple platforms24/7, content, generation capability';
,  ],;
  const useCases = [;
    {;
      title: 'Marketing Content',description: 'Generate, blog, posts, social, media, contentand marketing copy'icon: Target;
    };
    {
      title: 'Product Descriptions'descriptio,;
    n: 'Create, compelling, product descriptions, and, e-commerce content'ico,;
  n: ShoppingCart;
    };
    {
      title: 'Technical Documentation',description: 'Generate, user, manuals, API, docsand, technical guides'icon: FileText;
    },;
    {
      title: 'Creative Writing',description: 'Novels, scriptspoetryand, creative, storytelling'icon: PenTool;
    }
,  ];
  const contentTypes = [;
    {
      name: 'Blog Posts & Articles'descriptio,;
    n: 'SEO-optimized, content, for websites, and, blogs'example,;
  s: ['How-to, guidesIndustry, insights''Product, reviews'];
    },;
    {
      name: 'Social, Media, Content',description: 'Engaging, posts, for all, social, platforms'example,;
  s: ['CaptionsHashtag suggestions''Visual, content'];
    },;
    {
      name: 'Email Marketing',description: 'Personalized, email, campaigns and newsletters'example,;
  s: ['Subject, linesEmail,, body''Call-to-actions'];
    },;
    {
      name: 'Video Scripts',description: 'Scripts, for, YouTube, TikTok, and, marketing, videos'examples: ['Product, demosEducational, content''Brand, stories'];
    }
  ],;
;
  return(<>;
      <SEO;
        title="AI, Content, Creation - Zion, Tech, Group";
        description="Revolutionary AI-powered, content, creation platform. Generate text, images, videos, and, audio, content with, advanced, AI technology. Transform, your, content strategy.";
        keywords="AI, content, creation, content generation, AI writing, AI images, AI video, content, automationAI, marketing";
      />;
      <div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg: py-32">;
          <div className="container-responsive">;
            <motion.div;
              initial={{ opacit,;
    y: 0,;
  y: 30 }}
              animate={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto";
            >;
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50o0/20 to-indigo-50o0/20, border, border-blue-50o0/30 rounded-full text-blue-40o0 text-sm font-medium mb-6">;
                <PenTool className="w-4 h-4" />;
                Content Innovation;
              </div>;
              <h1 className="text-4xl lg: text-6xl font-bold text-white mb-6">;
                AI-Powered;
                <span className="block bg-gradient-to-r from-blue-40o0 via-indigo-40o0 to-purple-40o0 bg-clip-text text-transparent">;
                  Content Creation;
                </span>;
              </h1>;
              <p className="text-xl text-gray-30o0 mb-8 leading-relaxed">;
                Transform, your, content strategy, with, our revolutionary, AI, platform.;
                Generate high-quality text, images, videosand, audio, content;
                that, engages, your audience, and, drives results.;
              </p>;
              <div className="flex flex-col sm: flex-row gap-4 justify-center">;
                <motion.button;
                  whileHover={{ scal,;
  e: 1.0o5 }};
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-50o0 to-indigo-60o0 text-white font-semibold rounded-lg hover: from-blue-60o0 hover:to-indigo-70o0 transition-all duration-30o0 shadow-lg hove,;
    r:shadow-blue-50o0/25";
                >;
                  Start Creating;
                </motion.button>;
                <motion.button;
                  whileHover={{ scal,;
  e: 1.0o5 }};
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4, border, border-gray-60o0 text-white font-semibold rounded-lg hover: border-gray-50o0 hove,;
  r:bg-gray-80o0/50 transition-all duration-30o0";
                >;
                  View Demo;
                </motion.button>;
              </div>;
            </motion.div>;
          </div>;
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">;
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-50o0/10 rounded-full blur-3xl"></div>;
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-50o0/10 rounded-full blur-3xl"></div>;
          </div>;
        </section>;
        {/* Features Section */}
        <section className="py-20">;
          <div className="container-responsive">;
            <motion.div;
              initial={{ opacity: 0,;
  y: 30 }};
              whileInView={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16";
            >;
              <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4">;
                Revolutionary, Content, Creation Features;
              </h2>;
              <p className="text-xl text-gray-40o0 max-w-3xl mx-auto">;
                Our, AI, platform combines cutting-edge, technology, with creative expertise;
                to, deliver, unprecedented content, quality, and efficiency.;
              </p>;
            </motion.div>;
            <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8">;
              {features.map((featureindex) => (;
                <motion.div;
                  key={feature.title}
                  initial={{ opacity: 0,;
  y: 30 }};
                  whileInView={{ opacity: 1,;
  y: 0 }}
                  transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-6 bg-slate-80o0/50 rounded-2xl, border, border-slate-70o0/50 hover: border-blue-50o0/30 transition-all duration-30o0 hove,;
  r:bg-slate-80o0/70";
                >;
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl, flex, items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-30o0`}>;
                    <feature.icon className="w-8 h-8 text-white" />;
                  </div>;
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-40o0 transition-colors">;
                    {feature.title}
                  </h3>;
                  <p className="text-gray-40o0 leading-relaxed">;
                    {feature.description}
                  </p>;
                </motion.div>;
              ))}
            </div>;
          </div>;
        </section>;
        {/* Benefits Section */}
        <section className="py-20 bg-slate-80o0/30">;
          <div className="container-responsive">;
            <div className="grid grid-cols-1 lg: grid-cols-2 gap-16 items-center">;
              <motion.div;
                initial={{ opacit,;
    y: 0,;
  x: -30 }};
                whileInView={{ opacity: 1,;
  x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >;
                <h2 className="text-3xl lg: text-4xl font-bold text-white mb-6">;
                  Transform, Your, Content Strategy;
                </h2>;
                <p className="text-lg text-gray-30o0 mb-8 leading-relaxed">;
                  Our, AI, content creation, platform, delivers measurable, improvements, in;
                  content quality, production speed, and, audience, engagement while;
                  maintaining, your, unique brand, voice, and style.;
                </p>;
                <div className="grid grid-cols-1 sm: grid-cols-2 gap-4">;
                  {benefits.map((benefitindex) => (;
                    <motion.div;
                      key={benefit}
                      initial={{ opacity: 0,;
  x: -20 }};
                      whileInView={{ opacity: 1,;
  x: 0 }}
                      transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3";
                    >;
                      <CheckCircle className="w-5 h-5 text-green-40o0 flex-shrink-0" />;
                      <span className="text-gray-30o0">{benefit}</span>;
                    </motion.div>;
                  ))}
                </div>;
              </motion.div>;
              ;
              <motion.div;
                initial={{ opacity: 0,;
  x: 30 }};
                whileInView={{ opacity: 1,;
  x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative";
              >;
                <div className="bg-gradient-to-br from-blue-50o0/20 to-indigo-50o0/20 rounded-3xl p-8, border, border-blue-50o0/30">;
                  <div className="text-center">;
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-50o0 to-indigo-60o0 rounded-full, flex, items-center justify-center mx-auto mb-6">;
                      <TrendingUp className="w-10 h-10 text-white" />;
                    </div>;
                    <h3 className="text-2xl font-bold text-white mb-4">;
                      Proven Results;
                    </h3>;
                    <div className="grid grid-cols-2 gap-6">;
                      <div className="text-center">;
                        <div className="text-3xl font-bold text-blue-40o0 mb-2">10x</div>;
                        <div className="text-sm text-gray-40o0">Content Production</div>;
                      </div>;
                      <div className="text-center">;
                        <div className="text-3xl font-bold text-indigo-40o0 mb-2">70%</div>;
                        <div className="text-sm text-gray-40o0">Cost Reduction</div>;
                      </div>;
                      <div className="text-center">;
                        <div className="text-3xl font-bold text-purple-40o0 mb-2">3x</div>;
                        <div className="text-sm text-gray-40o0">Engagement</div>;
                      </div>;
                      <div className="text-center">;
                        <div className="text-3xl font-bold text-cyan-40o0 mb-2">24/7</div>;
                        <div className="text-sm text-gray-40o0">Generation</div>;
                      </div>;
                    </div>;
                  </div>;
                </div>;
              </motion.div>;
            </div>;
          </div>;
        </section>;
        {/* Content, Types, Section */}
        <section className="py-20">;
          <div className="container-responsive">;
            <motion.div;
              initial={{ opacity: 0,;
  y: 30 }};
              whileInView={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16";
            >;
              <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4">;
                Content, Types, We Generate;
              </h2>;
              <p className="text-xl text-gray-40o0 max-w-3xl mx-auto">;
                From, blog, posts to, video, scripts, our, AI, platform creates, diverse, content;
                types, that, engage your, audience, across all platforms.;
              </p>;
            </motion.div>;
            <div className="grid grid-cols-1 md: grid-cols-2 gap-8">;
              {contentTypes.map((contentTypeindex) => (;
                <motion.div;
                  key={contentType.name}
                  initial={{ opacity: 0,;
  y: 30 }};
                  whileInView={{ opacity: 1,;
  y: 0 }}
                  transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-slate-80o0/50 rounded-2xl, border, border-slate-70o0/50 hover: border-blue-50o0/30 transition-all duration-30o0 group";
                >;
                  <h3 className="text-xl font-semibold text-white mb-3 group-hove,;
  r:text-blue-40o0 transition-colors">;
                    {contentType.name}
                  </h3>;
                  <p className="text-gray-40o0 mb-4 leading-relaxed">;
                    {contentType.description}
                  </p>;
                  <div className="space-y-2">;
                    {contentType.examples.map((exampleidx) => (;
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-50o0">;
                        <div className="w-1.5 h-1.5 bg-blue-40o0 rounded-full"></div>;
                        {example}
                      </div>;
                    ))}
                  </div>;
                </motion.div>;
              ))}
            </div>;
          </div>;
        </section>;
        {/* Use, Cases, Section */}
        <section className="py-20 bg-slate-80o0/30">;
          <div className="container-responsive">;
            <motion.div;
              initial={{ opacity: 0,;
  y: 30 }};
              whileInView={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16";
            >;
              <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4">;
                Content, Creation, Use Cases;
              </h2>;
              <p className="text-xl text-gray-40o0 max-w-3xl mx-auto">;
                Our, AI, platform adapts, to, various content, needs, and industries;
                providing, tailored, solutions for, different, content strategies.;
              </p>;
            </motion.div>;
            <div className="grid grid-cols-1 m,;
  d: grid-cols-2 gap-8">;
              {useCases.map((useCaseindex) => (;
                <motion.div;
                  key={useCase.title}
                  initial={{ opacity: 0,;
  y: 30 }};
                  whileInView={{ opacity: 1,;
  y: 0 }}
                  transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-slate-80o0/50 rounded-2xl, border, border-slate-70o0/50 hover: border-blue-50o0/30 transition-all duration-30o0 group";
                >;
                  <div className="flex items-start gap-4">;
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-50o0 to-indigo-60o0 rounded-lg, flex, items-center justify-center group-hover:scale-110 transition-transform duration-30o0">;
                      <useCase.icon className="w-6 h-6 text-white" />;
                    </div>;
                    <div className="flex-1">;
                      <h3 className="text-xl font-semibold text-white mb-2 group-hove,;
  r:text-blue-40o0 transition-colors">;
                        {useCase.title}
                      </h3>;
                      <p className="text-gray-40o0 leading-relaxed">;
                        {useCase.description}
                      </p>;
                    </div>;
                  </div>;
                </motion.div>;
              ))}
            </div>;
          </div>;
        </section>;
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-50o0/10 to-indigo-50o0/10">;
          <div className="container-responsive">;
            <motion.div;
              initial={{ opacity: 0,;
  y: 30 }};
              whileInView={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto";
            >;
              <h2 className="text-3xl lg: text-4xl font-bold text-white mb-6">;
                Ready, to, Transform Your Content?;
              </h2>;
              <p className="text-xl text-gray-30o0 mb-8 leading-relaxed">;
                Join, leading, brands and, creators, that are, already, using our, AI, platform;
                to, revolutionize, their content, creation, and marketing strategies.;
              </p>;
              <div className="flex flex-col sm: flex-row gap-4 justify-center">;
                <motion.button;
                  whileHover={{ scal,;
  e: 1.0o5 }};
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-50o0 to-indigo-60o0 text-white font-semibold rounded-lg hover: from-blue-60o0 hover:to-indigo-70o0 transition-all duration-30o0 shadow-lg hove,;
    r:shadow-blue-50o0/25";
                >;
                  Start, Creating, Today;
                </motion.button>;
                <motion.button;
                  whileHover={{ scal,;
  e: 1.0o5 }};
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4, border, border-gray-60o0 text-white font-semibold rounded-lg hover: border-gray-50o0 hove,;
  r:bg-gray-80o0/50 transition-all duration-30o0";
                >;
                  Schedule Demo;
                </motion.button>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </>;
  );
};
;