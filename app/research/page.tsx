
import React from 'react';
const researchAreas = [;
  {title: 'Artificial Intelligence',description: 'Advancing the frontiers of AI through cutting-edge research',focus: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'Natural Language Processing'];
  },{title: 'Quantum Computing',description: 'Pioneering quantum algorithms and quantum machine learning',focus: ['Quantum Algorithms', 'Quantum Machine Learning', 'Quantum Cryptography', 'Quantum Simulation'];
  },{title: 'Autonomous Systems',description: 'Developing self-managing and adaptive systems',focus: ['Autonomous Agents', 'Self-Healing Systems', 'Adaptive Learning', 'Distributed Intelligence'];
  },{title: 'Human-AI Collaboration',description: 'Enhancing human capabilities through AI partnership',focus: ['Augmented Intelligence', 'Human-AI Interfaces', 'Collaborative AI', 'Ethical AI'];
  }
];export default function ResearchPage() {return (<div className="min-h-screen bg-white">;
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">;
        <div className="text-center mb-16">;
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">;
            Research & Development;
          </h1>;
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
            Pushing the boundaries of technology through innovative research and development initiatives.;
          </p>;
import {{metric: 'Patents Filed';
    value: '25+';
    description: 'Intellectual property protecting our innovations'}
  {{name: 'Stanford University';
    location: 'Stanford, CA';
    focus: 'AI & Machine Learning';
    collaboration: 'Joint research programs and student exchanges'}
  {name: 'MIT';
    location: 'Cambridge, MA';
    focus: 'Quantum Computing & AI';
    collaboration: 'Shared research facilities and joint publications'}
  {name: 'University of Oxford';
    location: 'Oxford, UK';
    focus: 'AI Ethics & Governance';
    collaboration: 'Policy research and ethical AI development'}
  {{/* Hero section */}
      <div className=&quot;relative isolate px - 6 pt - 14 lg:px - 8&quot;>;
        <div className=&quot;mx - auto max - w-2xl py - 32 sm:py - 48 lg:py - 56 & quot;>;
          <div className=&quot;text - center & quot;>;
            <h1 className=&quot;text - 4xl font - bold tracking - tight text - white sm:text - 6xl & quot;>;
              Research &{' '}
              innovative discoveries, and academic collaboration.;
            </p>;
          </div>;
        </div>;
      </div>;
      {/* Research Focus Areas */}
      <div className=&quot;mx-auto max-w-7xl px-6 sm:px-6 lg:px-8&quot;>;
        <div className=&quot;mx-auto max-w-2xl lg:text-center&quot;>;
          <h2 className=&quot;text-base font-semibold leading-7 text-blue-400&quot;>Our Research</h2>;
          <p className=&quot;mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl&quot;>;
            Focus Areas;
          </p>;
          <p className=&quot;mt-6 text-lg leading-8 text-gray-300&quot;>;
            Our research spans the cutting edge of AI and technology, driving innovation;
            and advancing the state of the art.          </p>;
        </div>;
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">;
          {researchAreas.map((area, index) => (<div key={index} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">;
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{area.title}</h3>;
              <p className="text-gray-600 mb-6">{area.description}</p>;
              <div>;
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Research Focus:</h4>;
                <ul className="space-y-2">;
                  {area.focus.map((item, itemIndex) => (<li key={itemIndex} className="flex items-center">;
                      <span className="text-blue-600 mr-3">•</span>;
                      {item}
                    </li>;
                  ))}
                </ul>;
              </div>;
            </div>;
          ))}
        </div>;
        <div className="bg-gray-50 rounded-lg p-8 text-center">;
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Research Team</h2>;
          <p className="text-lg text-gray-600 mb-6">;
            We're always looking for talented researchers and engineers to join our mission of advancing technology.;
          </p>;
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">;
            View Open Positions;
          </button>;
        </div>;
      </div>;
    </div>;
  )}return (<div className="bg-black">;
      {/* Hero section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">;
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">;
          <div className="text-center">;
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">;
              Research &{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">;
                Innovation;
              </span>;
            </h1>;
              innovative discoveries, and academic collaboration.;
            </p>;
          </div>;
        </div>;
      </div>;
      {/* Research Focus Areas */}
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">;
        <div className="mx-auto max-w-2xl lg:text-center">;
          <h2 className="text-base font-semibold leading-7 text-blue-400">Our Research</h2>;
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">;
            Focus Areas;
          </p>;
            and advancing the state of the art.;
          </p>;
        </div>;
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">;
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">;
            {researchAreas.map((area) => (<div key={area.name} className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">;
                <div className="flex items-center gap-x-3 mb-4">;
                  <area.icon className="h-8 w-8 text-blue-400" />;
                  <h3 className="text-xl font-semibold text-white">{area.name}</h3>;
                </div>;
                <p className="text-gray-300 mb-6">{area.description}</p>;
                <div className="space-y-2">;
                  {area.topics.map((topic) => (<div key={topic} className="flex items-center gap-2">;
                      <div className="h-1.5 w-1.5 bg-blue-400 rounded-full"></div>;
                      <span className="text-sm text-gray-400">{topic}</span>;
                    </div>;
                  ))}
                </div>;
                <p className=&quot;text - gray - 300 mb - 6&quot;>{area.description}</p>;
                <div className=&quot;space - y-2 & quot;>;
                  {area.topics.map ((topic) => (<div key={topic} className=&quot;flex items - center gap - 2&quot;>;
                      <div className=&quot;h - 1.5 w - 1.5 bg - blue - 400 rounded - full & quot;></div>;
                      <span className=&quot;text - sm text - gray - 400 & quot;>{topic}</span>;
                    </div>))}
                </div>;
              </div>))}
          </div>;
        </div>;
      </div>;
      {/* Recent Publications */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">;
        <div className="mx-auto max-w-2xl lg:text-center">;
          <h2 className="text-base font-semibold leading-7 text-blue-400">Publications</h2>;
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">;
            Recent Research;
          </p>;
          <p className="mt-6 text-lg leading-8 text-gray-300">;
            Our latest research contributions to the field of artificial intelligence and technology.;
          </p>;
        </div>;
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">;
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">;
            {recentPublications.map((publication) => (<div key={publication.title} className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">;
                <div className="flex items-center gap-x-2 mb-4">;
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${publication.impact === 'High Impact' ? 'bg-blue-600/20 text-blue-400' :;
                    publication.impact === 'Industry Leading' ? 'bg-green-600/20 text-green-400' :;
                    publication.impact === 'Breakthrough' ? 'bg-purple-600/20 text-purple-400' :;
                    'bg-gray-600/20 text-gray-400';
                  }`}>;
                    {publication.impact}
                  </span>;
                  <span className=&quot;text - sm text - gray - 400 & quot;>{publication.year}</span>;
                </div>;
                <h3 className=&quot;text - lg font - semibold text - white mb - 2&quot;>{publication.title}</h3>;
                <p className=&quot;text - sm text - blue - 400 mb - 3&quot;>{publication.authors}</p>;
                <p className=&quot;text - sm text - gray - 400 mb - 3&quot;>{publication.journal}</p>;
                <p className=&quot;text - sm text - gray - 300 mb - 4&quot;>{publication.abstract}</p>;
                <a;
                  href={`https://doi.org/${publication.doi}`}
                  target=&quot;_blank & quot;
                  rel=&quot;noopener noreferrer & quot;
                  className=&quot;text - sm font - semibold leading - 6 text - blue - 400 hover:text - blue - 300 transition - colors duration - 200 & quot;
                >;
                  View Publication <span aria - hidden=&quot;true & quot;>→</span>;
                </Link>;
              </div>))}
          </div>;
        </div>;
      </div>;
      {/* Research Impact */}
            Research Influence;
          </p>;
          <p className=&quot;mt-6 text-lg leading-8 text-gray-300&quot;>;
            Our research has made significant contributions to the field;
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">;
        <div className="mx-auto max-w-2xl lg:text-center">;
          <h2 className="text-base font-semibold leading-7 text-blue-400">Impact</h2>;
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">;
            Research Influence;
          </p>;
          <p className="mt-6 text-lg leading-8 text-gray-300">;
            Our research has made significant contributions to the field,influencing both academia and industry.;
          </p>;
        </div>;
        <div className=&quot;mx-auto mt-16 max-w-2xl lg:max-w-none&quot;>;
          <dl className=&quot;grid max-w-xl grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4&quot;>;
            {researchImpact.map((item) => (<div key={item.metric} className=&quot;flex flex-col bg-white/5 p-8 backdrop-blur-sm&quot;>;
                <dt className=&quot;text-sm font-semibold leading-6 text-gray-300&quot;>{item.metric}</dt>;
                <dd className=&quot;order-first text-3xl font-bold tracking-tight text-white&quot;>{item.value}</dd>;
                <p className=&quot;mt-2 text-sm text-gray-400&quot;>{item.description}</p>;
              </div>;
            ))}
<div className=&quot;mx - auto mt - 32 max - w-7xl px - 6 sm:mt - 40 lg:px - 8&quot;>;
        <div className=&quot;mx - auto max - w-2xl lg:text - center & quot;>;
          <h2 className=&quot;text - base font - semibold leading - 7 text - blue - 400 & quot;>Impact</h2>;
          <p className=&quot;mt - 2 text - 3xl font - bold tracking - tight text - white sm:text - 4xl & quot;>;
            Research Influence;
          </p>;
          <p className=&quot;mt - 6 text - lg leading - 8 text - gray - 300 & quot;>;
            Our research has made significant contributions to the field,influencing both academia and industry.;
          </p>;
        </div>;
        <div className=&quot;mx - auto mt - 16 max - w-2xl lg:max - w-none & quot;>;
          <dl className=&quot;grid max - w-xl grid - cols - 1 gap - 0.5 overflow - hidden rounded - 2xl text - center sm:grid - cols - 2 lg:grid - cols - 4&quot;>;
            {research_impact.map ((item) => (<div key={item.metric} className=&quot;flex flex - col bg - white / 5 p - 8 backdrop - blur - sm & quot;>;
                <dt className=&quot;text - sm font - semibold leading - 6 text - gray - 300 & quot;>{item.metric}</dt>;
                <dd className=&quot;order - first text - 3xl font - bold tracking - tight text - white & quot;>{item.value}</dd>;
                <p className=&quot;mt - 2 text - sm text - gray - 400 & quot;>{item.description}</p>;
              </div>))}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">;
        <div className="mx-auto max-w-2xl lg:text-center">;
          <h2 className="text-base font-semibold leading-7 text-blue-400">Impact</h2>;
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">;
            Research Influence;
          </p>;
          <p className="mt-6 text-lg leading-8 text-gray-300">;
            Our research has made significant contributions to the field,influencing both academia and industry.;
          </p>;
        </div>;
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">;
          <dl className="grid max-w-xl grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">;
            {researchImpact.map((item) => (<div key={item.metric} className="flex flex-col bg-white/5 p-8 backdrop-blur-sm">;
                <dt className="text-sm font-semibold leading-6 text-gray-300">{item.metric}</dt>;
                <dd className="order-first text-3xl font-bold tracking-tight text-white">{item.value}</dd>;
                <p className="mt-2 text-sm text-gray-400">{item.description}</p>;
              </div>;
            ))}
          </dl>;
        </div>;
      </div>;
      {/* Academic Collaborations */}
            Academic Partnerships;
          </p>;
          <p className=&quot;mt-6 text-lg leading-8 text-gray-300&quot;>;
            We collaborate with leading academic institutions worldwide to advance;
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">;
        <div className="mx-auto max-w-2xl lg:text-center">;
          <h2 className="text-base font-semibold leading-7 text-blue-400">Collaborations</h2>;
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">;
            Academic Partnerships;
          </p>;
          <p className="mt-6 text-lg leading-8 text-gray-300">;
            We collaborate with leading academic institutions worldwide to advance;
            the frontiers of AI research and innovation.;
          </p>;
        </div>;
        <div className=&quot;mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none&quot;>;
          <div className=&quot;grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2&quot;>;
            {academicPartners.map((partner) => (<div key={partner.name} className=&quot;bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105&quot;>;
                <div className=&quot;flex items-center gap-x-3 mb-4&quot;>;
                  <AcademicCapIcon className=&quot;h-8 w-8 text-blue-400&quot; />;
                  <h3 className=&quot;text-xl font-semibold text-white&quot;>{partner.name}</h3>;
                </div>;
                <div className=&quot;space-y-3 text-gray-300&quot;>;
                  <p className=&quot;flex items-center gap-2&quot;>;
                    <GlobeAltIcon className=&quot;h-5 w-5 text-blue-400&quot; />;
                    {partner.location}
                  </p>;
                  <p className=&quot;flex items - center gap - 2&quot;>;
                    <LightBulbIcon className=&quot;h - 5 w - 5 text - blue - 400 & quot; />;
                    {partner.focus}
                  </p>;
                  <p className=&quot;flex items - center gap - 2&quot;>;
                    <UserGroupIcon className=&quot;h - 5 w - 5 text - blue - 400 & quot; />;
                    {partner.collaboration}
                  </p>;
                </div>;
              </div>))}
          </div>;
        </div>;
      </div>;
      {/* CTA section */}
            Join our research community;
          </h2>;
          <p className=&quot;mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300&quot;>;
            Interested in collaborating on cutting-edge AI research?;
            Join our research community;
          </h2>;
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">;
            Interested in collaborating on cutting-edge AI research?;
            Let's explore opportunities to work together.;
          </p>;
          <div className=&quot;mt-10 flex items-center justify-center gap-x-6&quot;>;
            <a;
              href=&quot;/contact&quot;
              className=&quot;rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105&quot;
            >;
              Get in Touch;
            </Link>;
            <a href=&quot;/careers&quot; className=&quot;text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200&quot;>;
              Research Careers <span aria-hidden=&quot;true&quot;>→</span>;
            </Link>;
          </div>;
        </div>;
      </div>;
    </div>;
  )}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">;
        <div className="mx-auto max-w-2xl text-center">;
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">;
            Join our research community;
          </h2>;
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">;
            Interested in collaborating on cutting-edge AI research?;
            Let's explore opportunities to work together.;
          </p>;
          <div className="mt-10 flex items-center justify-center gap-x-6">;
            <a;
              href="/contact";
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105";
            >;
              Get in Touch;
            </Link>;
            <a href="/careers" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">;
              Research Careers <span aria-hidden="true">→</span>;
            </Link>;
          </div>        </div>;
      </div>;
    </div>;
  )}export default Page;
export const metadata = {
  title: "Research | Zion Tech Group",
  description: "Explore our cutting-edge research in AI, quantum computing, and autonomous systems."
};

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Research & Innovation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Driving the future of technology through cutting-edge research in AI, quantum computing, and autonomous systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">AI Research</h3>
            <p className="text-gray-300 mb-4">
              Advanced machine learning algorithms and neural network architectures.
            </p>
            <div className="text-blue-400 font-semibold">25+ Patents Filed</div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Quantum Computing</h3>
            <p className="text-gray-300 mb-4">
              Breakthrough research in quantum algorithms and quantum machine learning.
            </p>
            <div className="text-blue-400 font-semibold">15+ Publications</div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Autonomous Systems</h3>
            <p className="text-gray-300 mb-4">
              Self-learning systems and autonomous decision-making frameworks.
            </p>
            <div className="text-blue-400 font-semibold">10+ Active Projects</div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Research Partnerships</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We collaborate with leading universities and research institutions worldwide to advance the frontiers of technology.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-2">Stanford University</h3>
              <p className="text-gray-300">AI & Machine Learning</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-2">MIT</h3>
              <p className="text-gray-300">Quantum Computing & AI</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-2">University of Oxford</h3>
              <p className="text-gray-300">AI Ethics & Governance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
