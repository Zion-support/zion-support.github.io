
import React from 'react';
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
import MainLayout from '../src/components/layout/MainLayout';
=======
import MainLayout from '../src / components / layout / MainLayout';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
import { motion } from 'framer-motion';
  { number: "24/7", label: "Support Available" }
];

export default function CaseStudiesPage() {;
  return (
    <MainLayout
      title="Case Studies - Zion Tech Group"
      description="Explore our success stories and see how we've helped businesses transform through innovative technology solutions."
      keywords="case studies, success stories, client projects, technology solutions, AI implementation">;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
        {/* Hero Section */}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              className="text-center">;
              <h1 className="text-4xl md:text-6xl font-bold mb-6">;
                Success{' '}
        {/* Stats Section */}
        <section className="py-16 bg-white">;
          <div className="container mx-auto px-4">;
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">;
              {stats && stats.map((stat, index) => (;
                <motion&& motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                  viewport={{ once: true }}>;
                  <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">;
                    {stat && stat.number}
                  </div>;
                  <div className="text-gray-600 font-medium">{stat && stat.label}</div>;
                </motion && motion.div>;
              ))}
        {/* Case Studies */}
        <section className="py-20 bg-gray-50">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
                    key={study.id}
                    className="bg - white rounded - lg shadow - lg overflow - hidden";
                    initial={{ opacity: 0, coordinate_y: 30 }}
                    whileInView={{ opacity: 1, coordinate_y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >;
                    <div className="grid grid - cols - 1 lg:grid - cols - 2">;
                      <div className="p - 8">;
                        <div className="flex items - center mb - 4">;
                          <span className="bg - green - 100 text - green - 800 px - 3 py - 1 rounded - full text - sm font - semibold mr - 4">;
                            {study.industry}
                                {result}
                              </li>;
                            ))}
                              {tech}
                            </span>;
                          ))}
                            A comprehensive solution that transformed our client's business operations;
                          </p>;
                        </div>;
                      </div>;
                    </div>;
              </div>;
            </div>;
          </div>;
        </section>;
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-green-600 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">;
                  Start Your Project;
                </a>;
                <a
                  href="/services"
  );
}
=======
=======
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
  return (
    <Layout>;
      <Head>;
        <title>Case Studies | Zion Tech Group</title>;
        <link rel='canonical' href='https://ziontechgroup && ziontechgroup.com/case-studies' />;
        <meta
          name='description'
          content='Proven outcomes across AI, IT, and micro SaaS deployments.'
>>>>>>> origin/automation-improvements-final
  );
 </Head> </section> </Layout>
=======
import Layout from '../components/layout/Layout';
export default function CaseStudiesPage() {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
	return (
		<Layout>
			<Head>
				<title>Case Studies | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/case-studies" />
				<meta name="description" content="Proven outcomes across AI, IT, and micro SaaS deployments." />
			</Head>
			<section className="container mx-auto px-4 py-24">
				<h1 className="text-4xl md: text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">Case Studies</h1>
				<p className="text-gray-300">Proven outcomes and detailed success stories. Coming soon.</p>
			</section>
		</Layout>
	)
}
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
        {/* CTA Section */}
        <section className="py - 20 bg - gradient - to - r from - green - 600 to - teal - 600 text - white">;
          <div className="container mx - auto px - 4">;
            <motion.div;
              className="text - center";
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >;
              <h2 className="text - 3xl md:text - 4xl font - bold mb - 6">;
                Ready to Start Your Success Story?;
              </h2>;
              <p className="text - xl text - green - 100 mb - 8 max - w-3xl mx - auto">;
                Let's work together to create your own success story.;
                Contact us today to discuss your project.;
              </p>;
              <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
                <a;
                  href="/contact";
                  className="px - 8 py - 4 bg - white text - green - 600 rounded - lg hover:shadow - lg transition - all duration - 300 font - semibold";
                >;
                  Start Your Project;
                </a>;
                <a;
                  href="/services";
                  className="px - 8 py - 4 border - 2 border - white text - white rounded - lg hover:bg - white hover:text - green - 600 transition - all duration - 300 font - semibold";
                >;
                  Explore Our Services;
                </a>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </MainLayout>);
}
import Link from 'next / link';
import Layout from '../components / Layout';
;
export default /**
 * CaseStudiesPage - Function description
 */
function CaseStudiesPage() {
  return (
    <Layout>;
      <Head>;
        <title > Case Studies | Zion Tech Group</title>;
        <link rel='canonical' href='https://ziontechgroup.com / case - studies' />;
        <meta;
          name='description';
          content='Proven outcomes across AI, IT, and micro SaaS deployments.';
        />;
      </Head>;
      <section className='container mx - auto px - 4 py - 24'>;
        <h1 className='text - 4xl md:text - 6xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 500 to - pink - 500 bg - clip - text text - transparent mb - 6'>;
          Case Studies;
        </h1>;
        <p className='text - gray - 300'>;
          Proven outcomes and detailed success stories. Coming soon.;
        </p>;
      </section>;
    </Layout>);
;
</Head> </section> </Layout>;
return (
  <Layout>;
  <Head>;
    <title > Case Studies | Zion Tech Group</title>;
    <link rel="canonical" href="https://ziontechgroup.com / case - studies" />;
    <meta name="description" content="Proven outcomes across AI, IT, and micro SaaS deployments." />;
  </Head>;
  <section className="container mx - auto px - 4 py - 24">;
    <h1 className="text - 4xl md: text - 6xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 500 to - pink - 500 bg - clip - text text - transparent mb - 6">Case Studies</h1>;
    <p className="text - gray - 300">Proven outcomes and detailed success stories. Coming soon.</p>;
  </section>;
  </Layout>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
