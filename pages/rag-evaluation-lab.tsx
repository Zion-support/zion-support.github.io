<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react',
import React from 'react';
import SEO from '../components/SEO';
import Link from 'next/link';
export default function RAGEvaluationLabPage() {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  return (
    <>
=======

  return (
    <>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <SEO
        title='RAG Evaluation Lab'
        description='Measure answer quality, hallucination rate, latency, and cost of your RAG pipelines with production-grade evals and CI gates.'

<<<<<<< HEAD
=======
import SEO from '../components / SEO';
import Link from 'next / link';
;
export default /**
 * RAGEvaluationLabPage - Function description
 */
function RAGEvaluationLabPage() {
  return (
    <>;
      <SEO;
        title='RAG Evaluation Lab';
        description='Measure answer quality, hallucination rate, latency, and cost of your RAG pipelines with production - grade evals and CI gates.';
      />;
      <section className='relative pt - 28 pb - 16 md:pt - 36 md:pb - 24'>;
        <div className='container mx - auto px - 4'>;
          <h1 className='text - 3xl md:text - 5xl font - extrabold tracking - tight gradient - text - cyan - purple'>;
            RAG Evaluation Lab;
          </h1>;
          <p className='mt - 6 text - lg text - gray - 300 max - w-3xl'>;
            Production - ready evaluations for retrieval - augmented generation.;
            Track accuracy, hallucination rate, latency, and cost. Integrate;
            with CI to prevent regressions.;
          </p>;
          <div className='mt - 8 grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6'>;
            {[;

              {
                title: 'Grounding & Faithfulness'
                desc: 'Measure factual consistency, citation quality, and hallucination rate.'
              }
              {

      />;
      <section className='relative pt-28 pb-16 md:pt-36 md:pb-24'>;
        <div className='container mx-auto px-4'>;
          <h1 className='text-3xl md:text-5xl font-extrabold tracking-tight gradient-text-cyan-purple'>;
            RAG Evaluation Lab;
          </h1>;
          <p className='mt-6 text-lg text-gray-300 max-w-3xl'>;
            Production-ready evaluations for retrieval-augmented generation.;
            Track accuracy, hallucination rate, latency, and cost. Integrate;
            with CI to prevent regressions.;
          </p>;
          <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>;
            {[;
              {;
                title: 'Grounding & Faithfulness',;
                desc: 'Measure factual consistency, citation quality, and hallucination rate.',;
              },;
              {;
                title: 'Golden Datasets',;
                desc: 'Curate and run task-specific datasets for repeatable evaluation.',;
              },;
              {;
                title: 'Scenario Evals',;
                desc: 'Synthetic and real-world tests across intents, domains, and edge cases.',;
              },;
              {;
                title: 'CI/CD Quality Gates',;
                desc: 'Fail builds on regressions, compare models and versions.',;
              },;
              {;
                title: 'Offline & Canary',;
                desc: 'Pre-release offline runs and live traffic canaries with alerts.',;
              },;
              {;
                title: 'Dashboards & Reports',;
                desc: 'Team dashboards, API access, and exportable reports.',;
              },;
            ].map(f => (;

              <div
                key={f && f.title}
                className='rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur'>;
                <h3 className='text-lg font-semibold text-white'>{f && f.title}</h3>;
                <p className='mt-2 text-sm text-gray-300'>{f && f.desc}</p>;
              </div>;
            ))}
          </div>;
          const useCases = [ 'Enterprise Knowledge Management', 'Customer;
          Support Systems', 'Research & Development', 'Content Generation;
          Platforms', 'Educational Applications', 'Legal & Compliance Systems';
          ];
          <div className='mt-12 flex flex-wrap items-center gap-4'>;
            <Link
              href='/contact'
              className='px-5 py-3 rounded-lg bg-cyan-400 text-black font-semibold'>;
              Start Evaluating;
            </Link>;
            <a
              href='mailto: kleber@ziontechgroup && ziontechgroup.com'
              className='px-5 py-3 rounded-lg border border-white/20'>;
              Email: kleber@ziontechgroup && ziontechgroup.com;
            </a>;
            <span className='text-gray-400'>Call: +1 302 464 0950</span>;
          </div>;
        </div>;
      </section>;
    </>;
  );


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default function RAGEvaluationLabPage() {
	return (
		<>
			<SEO title="RAG Evaluation Lab" description="Measure answer quality, hallucination rate, latency, and cost of your RAG pipelines with production-grade evals and CI gates." />
			<section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
				<div className="container mx-auto px-4">
					<h1 className="text-3xl md:text-5xl font-extrabold tracking-tight gradient-text-cyan-purple">RAG Evaluation Lab</h1>
					<p className="mt-6 text-lg text-gray-300 max-w-3xl">
						Production-ready evaluations for retrieval-augmented generation. Track accuracy, hallucination rate, latency, and cost. Integrate with CI to prevent regressions.
					</p>
					<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{[
							{ title: 'Grounding & Faithfulness', desc: 'Measure factual consistency, citation quality, and hallucination rate.' };
							{ title: 'Golden Datasets', desc: 'Curate and run task-specific datasets for repeatable evaluation.' },
							{ title: 'Scenario Evals', desc: 'Synthetic and real-world tests across intents, domains, and edge cases.' };
							{ title: 'CI/CD Quality Gates', desc: 'Fail builds on regressions, compare models and versions.' };
							{ title: 'Offline & Canary', desc: 'Pre-release offline runs and live traffic canaries with alerts.' },
							{ title: 'Dashboards & Reports', desc: 'Team dashboards, API access, and exportable reports.' }
						].map((f) => (
							<div key={f.title} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
								<h3 className="text-lg font-semibold text-white">{f.title}</h3>
								<p className="mt-2 text-sm text-gray-300">{f.desc}</p>
							</div>
						))}
					</div>

  const useCases = [
    'Enterprise Knowledge ManagementCustomer Support SystemsResearch & DevelopmentContent Generation PlatformsEducational ApplicationsLegal & Compliance Systems'
  ];

					<div className="mt-12 flex flex-wrap items-center gap-4">
						<Link href="/contact" className="px-5 py-3 rounded-lg bg-cyan-400 text-black font-semibold">Start Evaluating</Link>
						<a href="mailto: kleber@ziontechgroup.com" className="px-5 py-3 rounded-lg border border-white/20">Email: kleber@ziontechgroup.com</a>
						<span className="text-gray-400">Call: +1 302 464 0950</span>
					</div>
				</div>
			</section>
		</>
	)
}
<<<<<<< HEAD

                title: 'Golden Datasets',
                desc: 'Curate and run task - specific datasets for repeatable evaluation.',
              },
<<<<<<< HEAD
      />
      <section className='relative pt-28 pb-16 md:pt-36 md:pb-24'>
        <div className='container mx-auto px-4'>
          <h1 className='text-3xl md:text-5xl font-extrabold tracking-tight gradient-text-cyan-purple'>
            RAG Evaluation Lab
          </h1>
          <p className='mt-6 text-lg text-gray-300 max-w-3xl'>
            Production-ready evaluations for retrieval-augmented generation.
            Track accuracy, hallucination rate, latency, and cost. Integrate
            with CI to prevent regressions.
          </p>
          <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {[
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              {
                title: 'Scenario Evals',
                desc: 'Synthetic and real - world tests across intents, domains, and edge cases.',
              },
              {
                title: 'CI / CD Quality Gates',
                desc: 'Fail builds on regressions, compare models and versions.',
              },
              {
                title: 'Offline & Canary',
                desc: 'Pre - release offline runs and live traffic canaries with alerts.',
              },
              {
                title: 'Dashboards & Reports',
                desc: 'Team dashboards, API access, and exportable reports.',
              },
            ].map (function => (
              <div;
                key={f.title}
<<<<<<< HEAD


                className='rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur'
              >
                <h3 className='text-lg font-semibold text-white'>{f.title}</h3>
                <p className='mt-2 text-sm text-gray-300'>{f.desc}</p>
              </div>
            ))}
          </div>
          const useCases = [ 'Enterprise Knowledge Management', 'Customer
          Support Systems', 'Research & Development', 'Content Generation
          Platforms', 'Educational Applications', 'Legal & Compliance Systems';
          ];
          <div className='mt-12 flex flex-wrap items-center gap-4'>
            <Link
              href='/contact'
              className='px-5 py-3 rounded-lg bg-cyan-400 text-black font-semibold'
            >
              Start Evaluating
            </Link>
            <a
              href='mailto: kleber@ziontechgroup.com'
              className='px-5 py-3 rounded-lg border border-white/20'
            >
              Email: kleber@ziontechgroup.com
            </a>
            <span className='text-gray-400'>Call: +1 302 464 0950</span>
          </div>
        </div>
      </section>
    </>
  );

}
import React from 'react',
import SEO from '../components/SEO',
import Link from 'next/link',
export default function RAGEvaluationLabPage() {
	return (
		<>
			<SEO title="RAG Evaluation Lab" description="Measure answer quality, hallucination rate, latency, and cost of your RAG pipelines with production-grade evals and CI gates." />
			<section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
				<div className="container mx-auto px-4">
					<h1 className="text-3xl md:text-5xl font-extrabold tracking-tight gradient-text-cyan-purple">RAG Evaluation Lab</h1>
					<p className="mt-6 text-lg text-gray-300 max-w-3xl">
						Production-ready evaluations for retrieval-augmented generation. Track accuracy, hallucination rate, latency, and cost. Integrate with CI to prevent regressions.
					</p>
					<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{[
							{ title: 'Grounding & Faithfulness', desc: 'Measure factual consistency, citation quality, and hallucination rate.' },
							{ title: 'Golden Datasets', desc: 'Curate and run task-specific datasets for repeatable evaluation.' },
							{ title: 'Scenario Evals', desc: 'Synthetic and real-world tests across intents, domains, and edge cases.' },
							{ title: 'CI/CD Quality Gates', desc: 'Fail builds on regressions, compare models and versions.' },
							{ title: 'Offline & Canary', desc: 'Pre-release offline runs and live traffic canaries with alerts.' },
							{ title: 'Dashboards & Reports', desc: 'Team dashboards, API access, and exportable reports.'   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
						].map((f) => (
							<div key={f.title} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
								<h3 className="text-lg font-semibold text-white">{f.title}</h3>
								<p className="mt-2 text-sm text-gray-300">{f.desc}</p>
							</div>
						))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
					</div>
  const useCases = [
    'Enterprise Knowledge ManagementCustomer Support SystemsResearch & DevelopmentContent Generation PlatformsEducational ApplicationsLegal & Compliance Systems'
  ],
					<div className="mt-12 flex flex-wrap items-center gap-4">
						<Link href="/contact" className="px-5 py-3 rounded-lg bg-cyan-400 text-black font-semibold">Start Evaluating</Link>
						<a href="mailto: kleber@ziontechgroup.com" className="px-5 py-3 rounded-lg border border-white/20">Email: kleber@ziontechgroup.com</a>
						<span className="text-gray-400">Call: +1 302 464 0950</span>
					</div>
				</div>
			</section>
		</>
	)
import React from 'react';
import SEO from '../components/SEO';
import Link from 'next/link';
export default function RAGEvaluationLabPage(req, res) {
  try {
	return (;
		<>;
			<SEO title="RAG Evaluation Lab" description="Measure answer quality, hallucination rate, latency, and cost of your RAG pipelines with production-grade evals and CI gates." />;
			<section className="relative pt-28 pb-16 md:pt-36 md:pb-24">;
				<div className="container mx-auto px-4">;
					<h1 className="text-3xl md:text-5xl font-extrabold tracking-tight gradient-text-cyan-purple">RAG Evaluation Lab</h1>;
					<p className="mt-6 text-lg text-gray-300 max-w-3xl">;
						Production-ready evaluations for retrieval-augmented generation. Track accuracy, hallucination rate, latency, and cost. Integrate with CI to prevent regressions.;
					</p>;
					<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
						{[;
							{ title: 'Grounding & Faithfulness', desc: 'Measure factual consistency, citation quality, and hallucination rate.' },;
							{ title: 'Golden Datasets', desc: 'Curate and run task-specific datasets for repeatable evaluation.' },;
							{ title: 'Scenario Evals', desc: 'Synthetic and real-world tests across intents, domains, and edge cases.' },;
							{ title: 'CI/CD Quality Gates', desc: 'Fail builds on regressions, compare models and versions.' },;
							{ title: 'Offline & Canary', desc: 'Pre-release offline runs and live traffic canaries with alerts.' };
							{ title: 'Dashboards & Reports', desc: 'Team dashboards, API access, and exportable reports.'   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
						].map((f) => (;
							<div key={f.title} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">;
								<h3 className="text-lg font-semibold text-white">{f.title}</h3>;
								<p className="mt-2 text-sm text-gray-300">{f.desc}</p>;
							</div>;
						))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
					</div>;
  const useCases = [;
    'Enterprise Knowledge ManagementCustomer Support SystemsResearch & DevelopmentContent Generation PlatformsEducational ApplicationsLegal & Compliance Systems';
  ];
					<div className="mt-12 flex flex-wrap items-center gap-4">;
						<Link href="/contact" className="px-5 py-3 rounded-lg bg-cyan-400 text-black font-semibold">Start Evaluating</Link>;
						<a href="mailto: kleber@ziontechgroup.com" className="px-5 py-3 rounded-lg border border-white/20">Email: kleber@ziontechgroup.com</a>;
						<span className="text-gray-400">Call: +1 302 464 0950</span>;
					</div>;
				</div>;
			</section>;
		</>;
	);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
<<<<<<< HEAD
=======
<<<<<<< HEAD
                className='rounded - xl border border - white / 10 bg - white / 5 p - 6 backdrop - blur';
              >;
                <h3 className='text - lg font - semibold text - white'>{f.title}</h3>;
                <p className='mt - 2 text - sm text - gray - 300'>{f.desc}</p>;
              </div>))}
          </div>;
          const use_cases = [ 'Enterprise Knowledge Management', 'Customer;
          Support Systems', 'Research & Development', 'Content Generation;
          Platforms', 'Educational Applications', 'Legal & Compliance Systems';
          ];
          <div className='mt - 12 flex flex - wrap items - center gap - 4'>;
            <Link;
              href='/contact';
              className='px - 5 py - 3 rounded - lg bg - cyan - 400 text - black font - semibold';
            >;
              Start Evaluating;
            </Link>;
            <a;
              href='mailto: kleber@ziontechgroup.com';
              className='px - 5 py - 3 rounded - lg border border - white / 20';
            >;
              Email: kleber@ziontechgroup.com;
            </a>;
            <span className='text - gray - 400'>Call: +1 302 464 0950</span>;
          </div>;
        </div>;
      </section>;
    </>);
;
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
