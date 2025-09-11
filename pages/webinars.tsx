

<<<<<<< HEAD
import React from 'react',;
import SEO from '../components/SEO',;
import React from 'react';
import SEO from '../components/SEO';
export default function WebinarsPage() {
import React from 'react';
import React from 'react';
ursor/integrate-build-improve-and-re-verify-8f7d
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { Calendar, Clock, Users, Play, ArrowRight, Star, CheckCircle } from 'lucide-react';

const WebinarsPage = () => {
  const webinars = [
    {
      id: 'ai-implementation-guide',
      title: 'AI Implementation: From Strategy to Success',
      description: 'Learn how to successfully implement AI solutions in your business with real-world case studies and best practices.',
      date: '2024-02-15',
      time: '2:00 PM EST',
      duration: '60 minutes',
      speaker: 'Dr. Sarah Johnson',
      attendees: 250,
      category: 'AI & Machine Learning',
      featured: true
    },
    {
      id: 'cloud-migration-best-practices',
      title: 'Cloud Migration: Best Practices and Common Pitfalls',
      description: 'Discover the essential strategies for successful cloud migration and how to avoid costly mistakes.',
      date: '2024-02-22',
      time: '3:00 PM EST',
      duration: '45 minutes',
      speaker: 'Michael Chen',
      attendees: 180,
      category: 'Cloud Computing',
      featured: false
    },
    {
      id: 'cybersecurity-fundamentals',
      title: 'Cybersecurity Fundamentals for Modern Businesses',
      description: 'Essential cybersecurity practices every business should implement to protect against modern threats.',
      date: '2024-03-01',
      time: '1:00 PM EST',
      duration: '50 minutes',
      speaker: 'David Kim',
      attendees: 320,
      category: 'Security',
      featured: true
    }
  ];

  return (
    <Layout 
      title="Webinars - Zion Tech Group" 
      description="Join our expert-led webinars on AI, cloud computing, cybersecurity, and more. Learn from industry leaders."
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Expert Webinars
                </h1>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                  Learn from industry experts and stay ahead of the latest technology trends. 
                  Join our free webinars and gain valuable insights.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Webinars Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {webinars.map((webinar, index) => (
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                >
                  {webinar.featured && (
                    <div className="bg-blue-600 text-white px-4 py-2 text-center text-sm font-medium">
                      Featured Webinar
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                        {webinar.category}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="h-4 w-4 mr-1" />
                        {webinar.attendees}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{webinar.title}</h3>
                    <p className="text-gray-600 mb-4">{webinar.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-2" />
                        {webinar.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-2" />
                        {webinar.time} ({webinar.duration})
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="h-4 w-4 mr-2" />
                        Speaker: {webinar.speaker}
                      </div>
                    </div>
                    
                    <Link
                      href="/contact"
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center"
                    >
                      <Play className="h-4 w-4 mr-2" />
                      Register Now
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Want to Host a Webinar?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                We're always looking for industry experts to share their knowledge. 
                Contact us if you'd like to host a webinar with us.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

 <> <SEO title="Webinars | Zion Tech Group" description="Upcoming webinars and on-demand sessions." canonical="/webinars" /> <div className="container mx-auto px-4 py-16" > <h1 className="text-4xl font-bold mb-4" >Webinars</h1> <p className="text-gray-300" >No upcoming webinars at this time. Check back soon.</p> </div> </> 
import SEO from '../components/SEO';
export default function WebinarsPage() {
import SEO from '../components/SEO';
export default function WebinarsPage() {
origin/main
origin/automation-improvements-final
=======
import React from 'react';




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
	return (
		<>
			<SEO title="Webinars | Zion Tech Group" description="Upcoming webinars and on-demand sessions." canonical="/webinars" />
			<div className="container mx-auto px-4 py-16">
				<h1 className="text-4xl font-bold mb-4">Webinars</h1>
				<p className="text-gray-300">No upcoming webinars at this time. Check back soon.</p>
<<<<<<< HEAD
		<>
			<SEO title=&quot;Webinars | Zion Tech Group&quot; description=&quot;Upcoming webinars and on-demand sessions.&quot; canonical=&quot;/webinars&quot; />
			<div className=&quot;container mx-auto px-4 py-16&quot;>
				<h1 className=&quot;text-4xl font-bold mb-4&quot;>Webinars</h1>
				<p className=&quot;text-gray-300&quot;>No upcoming webinars at this time. Check back soon.</p>

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
			</div>
		</>
	)

}
<<<<<<< HEAD
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from 'react',
import SEO from '../components / SEO',
export default /**
 * WebinarsPage - Function description
 */
function WebinarsPage() {
return (
  <>;
  <SEO title="Webinars | Zion Tech Group" description="Upcoming webinars and on - demand sessions." canonical="/webinars" />;
  <div className="container mx - auto px - 4 py - 16">;
    <h1 className="text - 4xl font - bold mb - 4">Webinars</h1>;
    <p className="text - gray - 300">No upcoming webinars at this time. Check back soon.</p>;
  </div>;
  </>);
}
<<<<<<< HEAD

}
ursor/integrate-build-improve-and-re-verify-8f7d
}
origin/main
origin/automation-improvements-final
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
