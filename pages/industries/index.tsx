import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Building, 
  ShoppingCart, 
  GraduationCap, 
  DollarSign,
  Target
} from 'lucide-react';
import Layout from '../../components/Layout';

const industries = [
  {
    title: 'Healthcare',
    description: 'Transform healthcare delivery with AI-powered medical solutions.',
    icon: Heart,
    href: '/industries/healthcare',
    color: 'from-red-500 to-pink-600'
  },
  {
    title: 'Finance',
    description: 'Modernize financial services with secure banking solutions.',
    icon: DollarSign,
    href: '/industries/finance',
    color: 'from-green-500 to-emerald-600'
  },
  {
    title: 'Education',
    description: 'Enhance learning with educational technology solutions.',
    icon: GraduationCap,
    href: '/industries/education',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    title: 'Government',
    description: 'Modernize public sector with digital government platforms.',
    icon: Building,
    href: '/industries/government',
    color: 'from-purple-500 to-indigo-600'
  },
  {
    title: 'Retail',
    description: 'Revolutionize retail with e-commerce solutions.',
    icon: ShoppingCart,
    href: '/industries/retail',
    color: 'from-orange-500 to-red-600'
  },
  {
    title: 'Manufacturing',
    description: 'Optimize manufacturing with smart factory solutions.',
    icon: Target,
    href: '/industries/manufacturing',
    color: 'from-teal-500 to-blue-600'
  }
];

export default function Industries() {
  return (
    <Layout>
      <Head>
        <title>Industries - Zion Tech Group</title>
        <meta name="description" content="Discover how we serve different industries with tailored technology solutions." />
      </Head>

      <main>
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Industries We Serve
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover how we serve different industries with tailored technology solutions.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {industries.map((industry, index) => {
                  const IconComponent = industry.icon;
                  return (
                    <motion.div
                      key={index}
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Link href={industry.href}>
                        <div className="p-8">
                          <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                            <IconComponent className={`w-8 h-8 bg-gradient-to-r ${industry.color} bg-clip-text text-transparent`} />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-4">{industry.title}</h3>
                          <p className="text-gray-600">{industry.description}</p>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}