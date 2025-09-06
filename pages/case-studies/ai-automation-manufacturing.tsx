
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
<<<<<<< HEAD
export default function CaseStudyPage() {
  const caseStudy = {
    id: 'ai-automation-manufacturing'
    title: 'AI-Powered Manufacturing Automation'
    company: 'Global Manufacturing Corp'
    industry: 'Manufacturing'
    challenge: 'Inefficient production processes, high downtime, and quality control issues'
    solution: 'Implemented autonomous AI systems for predictive maintenance, quality control, and production optimization'
    results: [
      '40% increase in production efficiency60% reduction in unplanned downtime35% improvement in product quality25% reduction in operational costs'
    ]
    technologies: ['Machine LearningComputer VisionIoT SensorsPredictive Analytics']
    duration: '6 months'
    teamSize: '8 engineers'
    featured: true
<<<<<<< HEAD
  }
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
}

export default function CaseStudyPage() {
  const caseStudy = {
    id: 'ai-automation-manufacturing',
    title: 'AI-Powered Manufacturing Automation',
    company: 'Global Manufacturing Corp',
    industry: 'Manufacturing',
    challenge:
      'Inefficient production processes, high downtime, and quality control issues',
    solution:
      'Implemented autonomous AI systems for predictive maintenance, quality control, and production optimization',
    results: [
      '40% increase in production efficiency',
      '60% reduction in unplanned downtime',
      '35% improvement in product quality',
      '25% reduction in operational costs',
    ],
    technologies: [
      'Machine Learning',
      'Computer Vision',
      'IoT Sensors',
      'Predictive Analytics',
    ],
    duration: '6 months',
    teamSize: '8 engineers',
    featured: true,
  };

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

=======
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
  return (
    <>
      <Head>
        <title>{caseStudy.title} - Case Study | Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content={`Learn how ${caseStudy.company} achieved ${caseStudy.results[0]} with AI automation.`} />
        <meta name="keywords" content="AI automation, manufacturing, case study, predictive maintenance, quality control" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <main className="pt-20 pb-16">
          <div className="max-w-4xl mx-auto px-6">
<<<<<<< HEAD
            {/* Breadcrumb */}
=======
            {/* Breadcrumb */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            <nav className="mb-8">
              <Link href="/case-studies" className="text-cyan-400 hover:text-cyan-300 transition-colors">
=======
        <meta
          name='description'
          content={`Learn how ${caseStudy.company} achieved ${caseStudy.results[0]} with AI automation.`}
        />
        <meta
          name='keywords'
          content='AI automation, manufacturing, case study, predictive maintenance, quality control'
        />
      </Head>

      <div className='min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900'>
        <main className='pt-20 pb-16'>
          <div className='max-w-4xl mx-auto px-6'>
            {/* Breadcrumb */}
            <nav className='mb-8'>
              <Link
                href='/case-studies'
                className='text-cyan-400 hover:text-cyan-300 transition-colors'
              >
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
                ← Back to Case Studies
              </Link>
            </nav>
<<<<<<< HEAD
            {/* Header */}
<<<<<<< HEAD
            <header className="mb-12 text-center">
              <div className="mb-4">
                <span className="px-4 py-2 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                  {caseStudy.industry}
=======
            {/* Header */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <header className="mb-12 text-center">
              <div className="mb-4">
                <span className="px-4 py-2 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                  {caseStudy.industry  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                </span>
              </div>
              <h1 className="text-4xl font-bold text-white mb-4">{caseStudy.title}</h1>
              <p className="text-xl text-cyan-400 font-semibold">{caseStudy.company}</p>
              <div className="mt-4 text-white/60">
                <span className="mr-6">Duration: {caseStudy.duration}</span>
=======
            <header className='mb-12 text-center'>
              <div className='mb-4'>
                <span className='px-4 py-2 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30'>
                  {caseStudy.industry}
                </span>
              </div>
              <h1 className='text-4xl font-bold text-white mb-4'>
                {caseStudy.title}
              </h1>
              <p className='text-xl text-cyan-400 font-semibold'>
                {caseStudy.company}
              </p>
              <div className='mt-4 text-white/60'>
                <span className='mr-6'>Duration: {caseStudy.duration}</span>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
                <span>Team: {caseStudy.teamSize}</span>
              </div>
            </header>
<<<<<<< HEAD
            {/* Challenge */}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
            {/* Challenge */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-red-400">The Challenge</h2>
              <div className="bg-red-500/10 rounded-lg p-6 border border-red-500/20">
                <p className="text-white/90 text-lg">{caseStudy.challenge}</p>
=======
            <section className='mb-12'>
              <h2 className='text-2xl font-semibold mb-6 text-red-400'>
                The Challenge
              </h2>
              <div className='bg-red-500/10 rounded-lg p-6 border border-red-500/20'>
                <p className='text-white/90 text-lg'>{caseStudy.challenge}</p>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
              </div>
            </section>
<<<<<<< HEAD
            {/* Solution */}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
            {/* Solution */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-green-400">Our Solution</h2>
              <div className="bg-green-500/10 rounded-lg p-6 border border-green-500/20">
                <p className="text-white/90 text-lg">{caseStudy.solution}</p>
=======
            <section className='mb-12'>
              <h2 className='text-2xl font-semibold mb-6 text-green-400'>
                Our Solution
              </h2>
              <div className='bg-green-500/10 rounded-lg p-6 border border-green-500/20'>
                <p className='text-white/90 text-lg'>{caseStudy.solution}</p>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
              </div>
            </section>
<<<<<<< HEAD
            {/* Technologies */}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
            {/* Technologies */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-blue-400">Technologies Used</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {caseStudy.technologies.map((tech, index) => (
                  <div key={index} className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20 text-center">
                    <span className="text-blue-400 font-semibold">{tech}</span>
=======
            <section className='mb-12'>
              <h2 className='text-2xl font-semibold mb-6 text-blue-400'>
                Technologies Used
              </h2>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                {caseStudy.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className='bg-blue-500/10 rounded-lg p-4 border border-blue-500/20 text-center'
                  >
                    <span className='text-blue-400 font-semibold'>{tech}</span>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
                  </div>
<<<<<<< HEAD
                ))}
              </div>
            </section>
            {/* Results */}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </div>;
            </section>;
            {/* Results */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-yellow-400">Results Achieved</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="bg-yellow-500/10 rounded-lg p-6 border border-yellow-500/20">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                        <span className="text-yellow-900 font-bold text-sm">✓</span>
                      </div>
                      <span className="text-white/90 font-semibold">{result}</span>
=======
            <section className='mb-12'>
              <h2 className='text-2xl font-semibold mb-6 text-yellow-400'>
                Results Achieved
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {caseStudy.results.map((result, index) => (
                  <div
                    key={index}
                    className='bg-yellow-500/10 rounded-lg p-6 border border-yellow-500/20'
                  >
                    <div className='flex items-center gap-3'>
                      <div className='w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center'>
                        <span className='text-yellow-900 font-bold text-sm'>
                          ✓
                        </span>
                      </div>
                      <span className='text-white/90 font-semibold'>
                        {result}
                      </span>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
                    </div>
                  </div>
<<<<<<< HEAD
                ))}
              </div>
            </section>
            {/* Call to Action */}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </div>;
            </section>;
            {/* Call to Action */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
            <section className="text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20">
                <h2 className="text-2xl font-bold mb-4 text-white">Ready to Achieve Similar Results?</h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
<<<<<<< HEAD
=======
<<<<<<< HEAD
                  This case study demonstrates the real impact of AI automation in manufacturing. 
                  Let's discuss how we can help you achieve similar results.
                </p>
                <div className="flex flex-col sm: flex-row gap-4 justify-center">
                  <Link 
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  This case study demonstrates the real impact of AI automation in manufacturing.
                  Let's discuss how we can help you achieve similar results.
                </p>
                <div className="flex flex-col sm: flex-row gap-4 justify-center">
                  <Link
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300"
=======
            <section className='text-center'>
              <div className='bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20'>
                <h2 className='text-2xl font-bold mb-4 text-white'>
                  Ready to Achieve Similar Results?
                </h2>
                <p className='text-white/80 mb-6 max-w-2xl mx-auto'>
                  This case study demonstrates the real impact of AI automation
                  in manufacturing. Let's discuss how we can help you achieve
                  similar results.
                </p>
                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                  <Link
                    href='/contact'
                    className='bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300'
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
                  >
                    Get Started
                  </Link>
<<<<<<< HEAD
                  <Link
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
                  <Link 
=======
                  <Link
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
                    href="/case-studies"
                    className="px-8 py-4 border border-white/20 rounded-lg text-white hover:border-cyan-400/50 transition-all duration-300"
=======
                    href='/case-studies'
                    className='px-8 py-4 border border-white/20 rounded-lg text-white hover:border-cyan-400/50 transition-all duration-300'
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
                  >
                    View More Case Studies
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
<<<<<<< HEAD
<<<<<<< HEAD
  )
}
=======
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
=======
<<<<<<< HEAD
  );
};
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  )
            <section className="text-center">;
              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20">;
                <h2 className="text-2xl font-bold mb-4 text-white">Ready to Achieve Similar Results?</h2>;
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">;
                  This case study demonstrates the real impact of AI automation in manufacturing.;
                  Let's discuss how we can help you achieve similar results.;
                </p>;
                <div className="flex flex-col sm: flex-row gap-4 justify-center">;
                  <Link;
                    href="/contact";
                    className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300";
                  >;
                    Get Started;
                  </Link>;
                  <Link;
                    href="/case-studies";
                    className="px-8 py-4 border border-white/20 rounded-lg text-white hover:border-cyan-400/50 transition-all duration-300";
                  >;
                    View More Case Studies;
                  </Link>;
                </div>;
              </div>;
            </section>;
          </div>;
        </main>;
      </div>;
    </>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
