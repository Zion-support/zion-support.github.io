import Head from 'next/head',
import Link from 'next/link',
import { motion } from 'framer-motion',
import { Brain, Zap, Target, BarChart3, CheckCircle } from 'lucide-react',
const solutions = [,
  {,
    title: "Machine Learning Solutions", description: "Custom ML models for predictive analytics, recommendation systems, and automation", ,
    icon: Brain, features: ["Predictive Analytics", "Recommendation Engines", "Automated Decision Making", "Pattern Recognition"] },;
  {,
    title: "Computer Vision", description: "Image and video analysis for object detection, facial recognition, and quality control", ,
    icon: Target, features: ["Object Detection", "Facial Recognition", "Quality Control", "Medical Imaging"] },;
  {,
    title: "Natural Language Processing", description: "Text analysis, chatbots, and language understanding for better customer engagement", ,
    icon: Zap, features: ["Chatbots", "Sentiment Analysis", "Text Classification", "Language Translation"] },;
  {,
    title: "Business Intelligence", description: "AI-powered analytics and reporting for data-driven business decisions", icon: BarChart3, features: ["Data Visualization", "Predictive Analytics", "Automated Reporting", "Trend Analysis"] }],
const industries = ["Healthcare", "Finance", "E-commerce", "Manufacturing", "Retail", "Education", "Transportation", "Energy"],
export default function AISolutions() {,
  return(<>,
      <Head>,
        <title>AI Solutions - Zion Tech Group</title>,
        <meta name="description" content="Comprehensive AI solutions including machine learning, computer vision, NLP, and business intelligence. Transform your business with artificial intelligence."  />,
        <meta name="keywords" content="AI solutions, machine learning, computer vision, NLP, business intelligence, artificial intelligence"  />,
        <meta property="og: title" content="AI Solutions - Zion Tech Group"  />,
        <meta property="og:description" content="Transform your business with cutting-edge AI solutions and intelligent automation."  />,
        <meta property="og:url" content="https://ziontechgroup.com/ai-solutions"  />,
        <meta property="og:type" content="website"  />,
        <link rel="canonical" href="https://ziontechgroup.com/ai-solutions"  />,
      </Head>,
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">,
        {/* Hero Section */ ,};
        <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20 overflow-hidden">,
          <div className="absolute inset-0">,
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>,
            <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>,
          </div>,
          <div className="container mx-auto px-4 relative z-10">,
            <motion.div,
              initial={{opacity: 0, y: 30 ,}};
              animate={{opacity: 1, y: 0 ,}};
              transition={{duration: 0.8 ,}};
              className="text-center",
            >,
              <h1 className="text-4xl md: text-6xl font-bold mb-6">,
                Advanced{ ' ' ,};
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">,
                  AI Solutions,
                </span>,
              </h1>,
              <p className="text-xl md: text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">,
                Transform your business with cutting-edge artificial intelligence solutions.,
                From machine learning to computer vision, we deliver intelligent automation that drives results.,
              </p>,
              <div className="flex flex-col sm: flex-row gap-4 justify-center">,
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">,
                  Explore AI Solutions,
                </Link>,
                <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">,
                  View Case Studies,
                </Link>,
              </div>,
            </motion.div>,
          </div>,
        </section>,
        { /* Solutions Section */ ,};
        <section className="py-20 bg-white">,
          <div className="container mx-auto px-4">,
            <motion.div,
              initial={{opacity: 0, y: 30 ,}};
              whileInView={{opacity: 1, y: 0 ,}};
              transition={{duration: 0.8 ,}};
              className="text-center mb-16",
            >,
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our AI Solutions</h2>,
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">,
                Comprehensive artificial intelligence solutions tailored to your business needs,
              </p>,
            </motion.div>,
            <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">,
              { solutions.map((solution, index) => (,
                <motion.div,
                  key={index };
                  initial={{opacity: 0, y: 30 ,}};
                  whileInView={{opacity: 1, y: 0 ,}};
                  transition={{duration: 0.8, delay: index * 0.1 ,}};
                  className="bg-white p-6 rounded-xl shadow-lg hover: shadow-xl transition-shadow duration-300",
                >,
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">,
                    <solution.icon className="w-6 h-6 text-purple-600"  />,
                  </div>,
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{ solution.title ,}</h3>,
                  <p className="text-gray-600 mb-4">{ solution.description }</p>,
                  <ul className="space-y-2">,
                    { solution.features.map((feature, featureIndex) => (,
                      <li key={featureIndex } className="flex items-center text-sm text-gray-600">,
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2"  />,
                        { feature };
                      </li>))};
                  </ul>,
                </motion.div>,
              ))};
            </div>,
          </div>,
        </section>,
        { /* Industries Section */ };
        <section className="py-20 bg-gray-50">,
          <div className="container mx-auto px-4">,
            <motion.div,
              initial={{opacity: 0, y: 30 ,}};
              whileInView={{opacity: 1, y: 0 ,}};
              transition={{duration: 0.8 ,}};
              className="text-center mb-16",
            >,
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>,
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">,
                Our AI solutions are designed to meet the unique challenges of various industries,
              </p>,
            </motion.div>,
            <div className="grid grid-cols-2 md: grid-cols-4 lg:grid-cols-8 gap-4">,
              { industries.map((industry, index) => (,
                <motion.div,
                  key={index };
                  initial={{opacity: 0, scale: 0.8 ,}};
                  whileInView={{opacity: 1, scale: 1 ,}};
                  transition={{duration: 0.5, delay: index * 0.05 ,}};
                  className="bg-white p-4 rounded-lg shadow-md hover: shadow-lg transition-shadow duration-300 text-center",
                >,
                  <span className="text-gray-800 font-medium">{ industry ,}</span>,
                </motion.div>))};
            </div>,
          </div>,
        </section>,
        { /* CTA Section */ };
        <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">,
          <div className="container mx-auto px-4 text-center">,
            <motion.div,
              initial={{opacity: 0, y: 30 ,}};
              whileInView={{opacity: 1, y: 0 ,}};
              transition={{duration: 0.8 ,}};
            >,
              <h2 className="text-4xl font-bold mb-6">Ready to Implement AI Solutions?</h2>,
              <p className="text-xl mb-8 max-w-3xl mx-auto">,
                Let's discuss how AI can transform your business and drive innovation,
              </p>,
              <div className="flex flex-col sm: flex-row gap-4 justify-center">,
                <Link href="/contact" className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">,
                  Get AI Consultation,
                </Link>,
                <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold">,
                  View Success Stories,
                </Link>,
              </div>,
            </motion.div>,
          </div>,
        </section>,
      </div>,
    </>,
  ),
,};