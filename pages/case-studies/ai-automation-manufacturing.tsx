<<<<<<< HEAD
<<<<<<< HEAD
    id: 'ai-automation-manufacturing',
=======

    id: 'ai-automation-manufacturing',
    title: 'AI-Powered Manufacturing Automation',
import React from 'react',
import Head from 'next / head',
import Link from 'next / link',
export default /**
 * CaseStudyPage - Function description
 */
function CaseStudyPage() {
  const case_study = {
    id: 'ai - automation - manufacturing',
    title: 'AI - Powered Manufacturing Automation',

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    company: 'Global Manufacturing Corp',
    industry: 'Manufacturing',
    challenge: 'Inefficient production processes, high downtime, and quality control issues',
    solution: 'Implemented autonomous AI systems for predictive maintenance, quality control, and production optimization',

<<<<<<< HEAD
  },
=======

=======

  },
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  return (
    <>
      <Head>
        <title>{caseStudy.title} - Case Study | Zion Tech Group</title>
        <meta name="description" content={`Learn how ${caseStudy.company} achieved ${caseStudy.results[0]} with AI automation.`} />
        <meta name="keywords" content="AI automation, manufacturing, case study, predictive maintenance, quality control" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <main className="pt-20 pb-16">
          <div className="max-w-4xl mx-auto px-6">


            {/* Breadcrumb */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


<<<<<<< HEAD
            <nav className="mb-8">
              <Link href="/case-studies" className="text-cyan-400 hover:text-cyan-300 transition-colors">
};
  return (
    <>
      <Head>
        <title>{caseStudy.title} - Case Study | Zion Tech Group</title>
        <meta name="description" content={`Learn how ${caseStudy.company} achieved ${caseStudy.results[0]} with AI automation.`} />
        <meta name="keywords" content="AI automation, manufacturing, case study, predictive maintenance, quality control" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <main className="pt-20 pb-16">
          <div className="max-w-4xl mx-auto px-6">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <Link href="/case-studies" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Case Studies
              </Link>
            </nav>
            {/* Header */}
            <header className="mb-12 text-center">
              <div className="mb-4">
                <span className="px-4 py-2 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                  {caseStudy.industry}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-white mb-4">{caseStudy.title}</h1>
              <p className="text-xl text-cyan-400 font-semibold">{caseStudy.company}</p>
              <div className="mt-4 text-white/60">
                <span className="mr-6">Duration: {caseStudy.duration}</span>
                <span>Team: {caseStudy.teamSize}</span>
              </div>
            </header>
            {/* Challenge */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-red-400">The Challenge</h2>
              <div className="bg-red-500/10 rounded-lg p-6 border border-red-500/20">
                <p className="text-white/90 text-lg">{caseStudy.challenge}</p>
              </div>
            </section>
            {/* Solution */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-green-400">Our Solution</h2>
              <div className="bg-green-500/10 rounded-lg p-6 border border-green-500/20">
                <p className="text-white/90 text-lg">{caseStudy.solution}</p>
              </div>
            </section>
            {/* Technologies */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-blue-400">Technologies Used</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {caseStudy.technologies.map((tech, index) => (
                  <div key={index} className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20 text-center">
                    <span className="text-blue-400 font-semibold">{tech}</span>

  return (_<>
      <Head>
        <title>{caseStudy.title} - Case Study | Zion Tech Group</title>
        <meta name=&quot;description&quot; content={`Learn how ${caseStudy.company} achieved ${caseStudy.results[0]} with AI automation.`} />
        <meta name=&quot;keywords&quot; content=&quot;AI automation, manufacturing, case study, predictive maintenance, quality control&quot; />
      </Head>
      
      <div className=&quot;min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900&quot;>
        <main className=&quot;pt-20 pb-16&quot;>
          <div className=&quot;max-w-4xl mx-auto px-6&quot;>
            {/* Breadcrumb */}
            <nav className=&quot;mb-8&quot;>
              <Link href=&quot;/case-studies&quot; className=&quot;text-cyan-400 hover:text-cyan-300 transition-colors&quot;>
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            <nav className="mb-8">
              <Link href="/case-studies" className="text-cyan-400 hover:text-cyan-300 transition-colors">
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                ← Back to Case Studies
              </Link>
            </nav>


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


                </span>
              </div>
              <h1 className="text-4xl font-bold text-white mb-4">{caseStudy.title}</h1>
              <p className="text-xl text-cyan-400 font-semibold">{caseStudy.company}</p>
              <div className="mt-4 text-white/60">
                <span className="mr-6">Duration: {caseStudy.duration}</span>
<<<<<<< HEAD
            {/* Header */}
            <header className=&quot;mb-12 text-center&quot;>
              <div className=&quot;mb-4&quot;>
                <span className=&quot;px-4 py-2 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30&quot;>
                  {caseStudy.industry}
                </span>
              </div>
              <h1 className=&quot;text-4xl font-bold text-white mb-4&quot;>{caseStudy.title}</h1>
              <p className=&quot;text-xl text-cyan-400 font-semibold&quot;>{caseStudy.company}</p>
              <div className=&quot;mt-4 text-white/60&quot;>
                <span className=&quot;mr-6&quot;>Duration: {caseStudy.duration}</span>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <span>Team: {caseStudy.teamSize}</span>
              </div>
            </header>


            {/* Challenge */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-red-400">The Challenge</h2>
              <div className="bg-red-500/10 rounded-lg p-6 border border-red-500/20">
                <p className="text-white/90 text-lg">{caseStudy.challenge}</p>
              </div>
            </section>


            {/* Solution */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-green-400">Our Solution</h2>
              <div className="bg-green-500/10 rounded-lg p-6 border border-green-500/20">
                <p className="text-white/90 text-lg">{caseStudy.solution}</p>
              </div>
            </section>


<<<<<<< HEAD
            {/* Challenge */}
            <section className=&quot;mb-12&quot;>
              <h2 className=&quot;text-2xl font-semibold mb-6 text-red-400&quot;>The Challenge</h2>
              <div className=&quot;bg-red-500/10 rounded-lg p-6 border border-red-500/20&quot;>
                <p className=&quot;text-white/90 text-lg&quot;>{caseStudy.challenge}</p>
              </div>
            </section>

            {/* Solution */}
            <section className=&quot;mb-12&quot;>
              <h2 className=&quot;text-2xl font-semibold mb-6 text-green-400&quot;>Our Solution</h2>
              <div className=&quot;bg-green-500/10 rounded-lg p-6 border border-green-500/20&quot;>
                <p className=&quot;text-white/90 text-lg&quot;>{caseStudy.solution}</p>
              </div>
            </section>

            {/* Technologies */}
            <section className=&quot;mb-12&quot;>
              <h2 className=&quot;text-2xl font-semibold mb-6 text-blue-400&quot;>Technologies Used</h2>
              <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-4&quot;>
                {caseStudy.technologies.map((tech, index) => (
                  <div key={index} className=&quot;bg-blue-500/10 rounded-lg p-4 border border-blue-500/20 text-center&quot;>
                    <span className=&quot;text-blue-400 font-semibold&quot;>{tech}</span>

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
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
  }

  },
  return (
    <>
      <Head>
        <title>{caseStudy.title} - Case Study | Zion Tech Group</title>
        <meta name="description" content={`Learn how ${caseStudy.company} achieved ${caseStudy.results[0]} with AI automation.`} />
        <meta name="keywords" content="AI automation, manufacturing, case study, predictive maintenance, quality control" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <main className="pt-20 pb-16">
          <div className="max-w-4xl mx-auto px-6">
            {/* Breadcrumb */}
            {/* Breadcrumb */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <nav className="mb-8">
              <Link href="/case-studies" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Case Studies
              </Link>
            </nav>
            {/* Header */}
            <header className="mb-12 text-center">
              <div className="mb-4">
                <span className="px-4 py-2 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                  {caseStudy.industry}
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
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </span>
              </div>
              <h1 className="text-4xl font-bold text-white mb-4">{caseStudy.title}</h1>
              <p className="text-xl text-cyan-400 font-semibold">{caseStudy.company}</p>
              <div className="mt-4 text-white/60">
                <span className="mr-6">Duration: {caseStudy.duration}</span>
                <span>Team: {caseStudy.teamSize}</span>
              </div>
            </header>
            {/* Challenge */}
            {/* Challenge */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-red-400">The Challenge</h2>
              <div className="bg-red-500/10 rounded-lg p-6 border border-red-500/20">
                <p className="text-white/90 text-lg">{caseStudy.challenge}</p>
              </div>
            </section>
            {/* Solution */}
            {/* Solution */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-green-400">Our Solution</h2>
              <div className="bg-green-500/10 rounded-lg p-6 border border-green-500/20">
                <p className="text-white/90 text-lg">{caseStudy.solution}</p>
              </div>
            </section>
            {/* Technologies */}
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {/* Technologies */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-blue-400">Technologies Used</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {caseStudy.technologies.map((tech, index) => (
                  <div key={index} className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20 text-center">
                    <span className="text-blue-400 font-semibold">{tech}</span>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </div>
                ))}
              </div>
            </section>
            {/* Results */}
<<<<<<< HEAD
=======
                  </div>


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
                    </div>
                  </div>
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                ))}
              </div>
            </section>
            {/* Call to Action */}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <section className="text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20">
                <h2 className="text-2xl font-bold mb-4 text-white">Ready to Achieve Similar Results?</h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
<<<<<<< HEAD
<<<<<<< HEAD
                  This case study demonstrates the real impact of AI automation in manufacturing. 
                  Let's discuss how we can help you achieve similar results.
                </p>
                <div className="flex flex-col sm: flex-row gap-4 justify-center">
                  <Link 
                  This case study demonstrates the real impact of AI automation in manufacturing.
                  Let's discuss how we can help you achieve similar results.
                </p>
                <div className="flex flex-col sm: flex-row gap-4 justify-center">
                  <Link



=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300"
                  >
                    Get Started
                  </Link>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



                    href="/case-studies"
                    className="px-8 py-4 border border-white/20 rounded-lg text-white hover:border-cyan-400/50 transition-all duration-300"
<<<<<<< HEAD
<<<<<<< HEAD
                  <Link
                  <Link 
                  <Link
                    href="/case-studies"
                    className="px-8 py-4 border border-white/20 rounded-lg text-white hover:border-cyan-400/50 transition-all duration-300"
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
}

  );
};
  )
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

=======
}

=======
    results: [;
      '40% increase in production efficiency60% reduction in unplanned downtime35% improvement in product quality25% reduction in operational costs';
    ],
    technologies: ['Machine LearningComputer VisionIoT SensorsPredictive Analytics'],
    duration: '6 months',
    team_size: '8 engineers',
    featured: true;
  },
  return (
    <>;
      <Head>;
        <title>{case_study.title} - Case Study | Zion Tech Group</title>;
        <meta name="description" content={`Learn how ${case_study.company} achieved ${case_study.results[0]} with AI automation.`} />;
        <meta name="keywords" content="AI automation, manufacturing, case study, predictive maintenance, quality control" />;
      </Head>;
      <div className="min - h-screen bg - gradient - to - br from - gray - 900 via - blue - 900 to - gray - 900">;
        <main className="pt - 20 pb - 16">;
          <div className="max - w-4xl mx - auto px - 6">;
            {/* Breadcrumb */}
            <nav className="mb - 8">;
              <Link href="/case - studies" className="text - cyan - 400 hover:text - cyan - 300 transition - colors">;
                ← Back to Case Studies;
              </Link>;
            </nav>;
            {/* Header */}
            <header className="mb - 12 text - center">;
              <div className="mb - 4">;
                <span className="px - 4 py - 2 bg - cyan - 400 / 20 text - cyan - 400 text - sm rounded - full border border - cyan - 400 / 30">;
                  {case_study.industry}
                </span>;
              </div>;
              <h1 className="text - 4xl font - bold text - white mb - 4">{case_study.title}</h1>;
              <p className="text - xl text - cyan - 400 font - semibold">{case_study.company}</p>;
              <div className="mt - 4 text - white / 60">;
                <span className="mr - 6">Duration: {case_study.duration}</span>;
                <span > Team: {case_study.team_size}</span>;
              </div>;
            </header>;
            {/* Challenge */}
            <section className="mb - 12">;
              <h2 className="text - 2xl font - semibold mb - 6 text - red - 400">The Challenge</h2>;
              <div className="bg - red - 500 / 10 rounded - lg p - 6 border border - red - 500 / 20">;
                <p className="text - white / 90 text - lg">{case_study.challenge}</p>;
              </div>;
            </section>;
            {/* Solution */}
            <section className="mb - 12">;
              <h2 className="text - 2xl font - semibold mb - 6 text - green - 400">Our Solution</h2>;
              <div className="bg - green - 500 / 10 rounded - lg p - 6 border border - green - 500 / 20">;
                <p className="text - white / 90 text - lg">{case_study.solution}</p>;
              </div>;
            </section>;
            {/* Technologies */}
            <section className="mb - 12">;
              <h2 className="text - 2xl font - semibold mb - 6 text - blue - 400">Technologies Used</h2>;
              <div className="grid grid - cols - 2 md:grid - cols - 4 gap - 4">;
                {case_study.technologies.map ((tech, index) => (
                  <div key={index} className="bg - blue - 500 / 10 rounded - lg p - 4 border border - blue - 500 / 20 text - center">;
                    <span className="text - blue - 400 font - semibold">{tech}</span>;
                  </div>))}
              </div>;
            </section>;
            {/* Results */}
            <section className="mb - 12">;
              <h2 className="text - 2xl font - semibold mb - 6 text - yellow - 400">Results Achieved</h2>;
              <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 6">;
                {case_study.results.map ((result, index) => (
                  <div key={index} className="bg - yellow - 500 / 10 rounded - lg p - 6 border border - yellow - 500 / 20">;
                    <div className="flex items - center gap - 3">;
                      <div className="w - 8 h - 8 bg - yellow - 400 rounded - full flex items - center justify - center">;
                        <span className="text - yellow - 900 font - bold text - sm">✓</span>;
                      </div>;
                      <span className="text - white / 90 font - semibold">{result}</span>;
                    </div>;
                  </div>))}
              </div>;
            </section>;
            {/* Call to Action */}
            <section className="text - center">;
              <div className="bg - gradient - to - r from - cyan - 500 / 10 to - fuchsia - 500 / 10 rounded - 2xl p - 8 border border - cyan - 500 / 20">;
                <h2 className="text - 2xl font - bold mb - 4 text - white">Ready to Achieve Similar Results?</h2>;
                <p className="text - white / 80 mb - 6 max - w-2xl mx - auto">;
                  This case study demonstrates the real impact of AI automation in manufacturing.;
                  Let's discuss how we can help you achieve similar results.;
                </p>;
                <div className="flex flex - col sm: flex - row gap - 4 justify - center">;
                  <Link;
                    href="/contact";
                    className="bg - gradient - to - r from - cyan - 400 to - fuchsia - 400 text - white px - 8 py - 4 rounded - lg font - semibold hover:from - cyan - 500 hover:to - fuchsia - 500 transition - all duration - 300";
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  >;
                    Get Started;
                  </Link>;
                  <Link;
<<<<<<< HEAD
                    href="/case-studies";
                    className="px-8 py-4 border border-white/20 rounded-lg text-white hover:border-cyan-400/50 transition-all duration-300";
=======
                    href="/case - studies";
                    className="px - 8 py - 4 border border - white / 20 rounded - lg text - white hover:border - cyan - 400 / 50 transition - all duration - 300";
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  >;
                    View More Case Studies;
                  </Link>;
                </div>;
              </div>;
            </section>;
          </div>;
        </main>;
      </div>;
    </>);
}
<<<<<<< HEAD
<<<<<<< HEAD


    </>);
}
    </>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
