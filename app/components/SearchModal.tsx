'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { X, ArrowRight} from 'lucide-react';

interface Search Result {
  title: string;,
  description: string;,
  path: string;,
  category: string;,
  icon: React.React Node;
}

interface Search Modal Props {
  is Open: boolean;,
  on Close: () => void;
}

const Search Modal: React.F C<S earch Modal Props /> = ({ is Open, on Close }) => {
  const [query, set Query] = use State('');
  const [results, set Results] = use State<S earch Result[] />([]);
  const [is Loading, set Is Loading] = use State(false);
  const input Ref = use Ref<H T M LInput Element />(null);
  // Mock search data - in a real app, this would come from an A PI
  const search Data: Search Result[] = [
    // A I Services

    { title: 'A I Content Generator', description: 'Create high-quality content with A I', path: '/ai-content-generator', category: 'A I Services', icon: <B rain const class Name="w-4h-4" / /> },
    { title: 'A I Chatbot Builder', description: 'Build intelligent chatbots for your business', path: '/ai-chatbot-builder', category: 'A I Services', icon: <B rain class Name="w-4h-4" / /> },
    { title: 'A I Analytics Dashboard', description: 'Advanced analytics powered by A I', path: '/ai-analytics-dashboard', category: 'A I Services', icon: <B rain class Name="w-4h-4" / /> },
    { title: 'A I Email Assistant', description: 'Automate your email management', path: '/ai-email-assistant', category: 'A I Services', icon: <B rain class Name="w-4h-4" / /> },
    { title: 'A I Voice Assistant', description: 'Voice-powered A I solutions', path: '/ai-voice-assistant', category: 'A I Services', icon: <B rain class Name="w-4h-4" / /> },
    { title: 'A I Automation', description: 'Automate business processes with A I', path: '/ai-automation', category: 'A I Services', icon: <B rain class Name="w-4h-4" / /> },
    { title: 'A I 3 D Generation', description: 'Create 3 D models with A I', path: '/ai-3 d-generation', category: 'A I Services', icon: <B rain class Name="w-4h-4" / /> },
    { title: 'A I Drug Discovery Pro', description: 'Advanced A I for pharmaceutical research', path: '/ai-drug-discovery-pro', category: 'A I Services', icon: <B rain class Name="w-4h-4" / /> },

    // I T Services

    { title: 'Web Development', description: 'Custom web applications and websites', path: '/web-development', category: 'I T Services', icon: <S hield class Name="w-4h-4" / /> },
    { title: 'Mobile Development', description: 'i OS and Android app development', path: '/mobile-development', category: 'I T Services', icon: <S hield class Name="w-4h-4" / /> },
    { title: 'Dev Ops', description: 'Streamline your development and operations', path: '/devops', category: 'I T Services', icon: <S hield class Name="w-4h-4" / /> },
    { title: 'Data Analytics', description: 'Transform data into actionable insights', path: '/data-analytics', category: 'I T Services', icon: <S hield class Name="w-4h-4" / /> },
    { title: 'Cloud Services', description: 'Scalable cloud infrastructure solutions', path: '/cloud-services', category: 'I T Services', icon: <C loud class Name="w-4h-4" / /> },
    { title: 'Cybersecurity', description: 'Protect your business from cyber threats', path: '/cybersecurity', category: 'I T Services', icon: <S hield class Name="w-4h-4" / /> },

    // 5 G Services

    { title: '5 G Implementation', description: 'Deploy 5 G networks and solutions', path: '/5 g-implementation', category: '5 G Solutions', icon: <Z ap class Name="w-4h-4" / /> },
    { title: '5 G Network Infrastructure', description: 'Build robust 5 G network infrastructure', path: '/5 g-network-infrastructure', category: '5 G Solutions', icon: <Z ap class Name="w-4h-4" / /> },
    { title: '5 G Io T Solutions', description: 'Connect devices with 5 G Io T', path: '/5 g-iot-solutions', category: '5 G Solutions', icon: <Z ap class Name="w-4h-4" / /> },
    { title: '5 G Edge Computing', description: 'Edge computing powered by 5 G', path: '/5 g-edge-computing', category: '5 G Solutions', icon: <Z ap class Name="w-4h-4" / /> },

    // Micro S AA S

    { title: 'A I Task Manager', description: 'Intelligent task management system', path: '/ai-task-manager', category: 'Micro S AA S', icon: <C pu class Name="w-4h-4" / /> },
    { title: 'A I Expense Tracker', description: 'Smart expense tracking and analysis', path: '/ai-expense-tracker', category: 'Micro S AA S', icon: <C pu class Name="w-4h-4" / /> },
    { title: 'A I Password Manager', description: 'Secure password management with A I', path: '/ai-password-manager', category: 'Micro S AA S', icon: <C pu class Name="w-4h-4" / /> },
    { title: 'A I Invoice Generator', description: 'Automated invoice generation', path: '/ai-invoice-generator', category: 'Micro S AA S', icon: <C pu class Name="w-4h-4" / /> },
    { title: 'A I Health Tracker', description: 'Personal health monitoring with A I', path: '/ai-health-tracker', category: 'Micro S AA S', icon: <C pu class Name="w-4h-4" / /> },
    { title: 'A I Smart Calendar', description: 'Intelligent calendar management', path: '/ai-smart-calendar', category: 'Micro S AA S', icon: <C pu class Name="w-4h-4" / /> },

    // Company Pages

    { title: 'About Us', description: 'Learn about Zion Tech Group', path: '/about', category: 'Company', icon: <S hield class Name="w-4h-4" / /> },
    { title: 'Contact', description: 'Get in touch with our team', path: '/contact', category: 'Company', icon: <S hield class Name="w-4h-4" / /> },
  ];
  use Effect(() => {
    if (is Open && input Ref.current) {
      input Ref.current.focus();
    }
  }, [is Open]);

  use Effect(() => {
    if (query.length > 0) {
      set Is Loading(true);
      // Simulate search delay
      const timer = set Timeout(() => {
        const filtered Results = search Data.filter(item =>
          item.title.to Lower Case().includes(query.to Lower Case()) ||
          item.description.to Lower Case().includes(query.to Lower Case()) ||
          item.category.to Lower Case().includes(query.to Lower Case())
        );
        set Results(filtered Results);
        set Is Loading(false);
      }, 150);

      return () => clear Timeout(timer);
    } else {
      set Results([]);
    }
  }, [query]);

  const handle Key Down = (e: React.Keyboard Event) => {
    if (e.key === 'Escape') {
      on Close();
    }
  };

  if (!is Open) return null;

  return (

    <d iv class Name="f ixed inset-0z-50overflow-y-auto">
        </d iv>
      <d iv class Name="f lex min-h-screen items-start justify-center px-4 pt-16 pb-20 text-centersm:blocksm:p-0">
        </d iv>
        {/* Backdrop */}
        <d iv
          class Name="f ixed inset-0 bg-black/50backdrop-blur-smtransition-opacity"
          on Click="{on Close}"
        / />
        {/* Modal */}
        <d iv class Name="r elative inline-block w-full max-w-2 xl transform overflow-hidden rounded-2 xl bg-slate-800 text-left align-bottom shadow-xl transition-allsm:my-8sm:align-middle">
        </d iv>
          {/* Header */}

          <d iv class Name="f lex items-center justify-between p-6border-bborder-slate-700">
        </d iv>
            <d iv class Name="f lexitems-centerspace-x-3">
        </d iv>
              <S earch class Name="w-6h-6t ext-cyan-400" / />
              <h3 c lass Name="t ext-lgfont-semiboldtext-white">Search Services</h3>
            </d iv>
            <b utton
              on Click="{on Close}"
              class Name="t ext-gray-400 hover:text-whitetransition-colorsp-1"
              aria-label="Close search" />

              <X c lass Name="w-6h-6" / />
            </b utton>
          </d iv>

          {/* Search Input */}

          <d iv class Name="p-6">
        </d iv>
            <d iv class Name="r elative" />
              <i nput
                ref="{input Ref}"
                type="text"
                value="{query}"
                on Change="{(e)" = /> set Query(e.target.value)}
                on Key Down="{handle Key Down}"
                placeholder="Search for services, solutions, or pages..."
                class Name="w-f ull px-4 py-3 pl-12 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2focus:ring-cyan-500focus:border-transparent"
              />

              <S earch class Name="a bsolute left-4 top-1/2 transform -translate-y-1/2 w-5h-5text-gray-400" / />
            </d iv>

          {/* Results */}
          <d iv class Name="m ax-h-96overflow-y-auto">
        </d iv>
            {is Loading ? (

              <d iv class Name="f lex items-centerjustify-centerpy-8">
        </d iv>
                <d iv class Name="a nimate-spin rounded-full h-8 w-8border-b-2border-cyan-400">
        </d iv></d iv>
                <s pan class Name="m l-3text-gray-400">Searching...</s pan>
              </d iv>
            ) : query.length === 0 ? (

              <d iv class Name="p x-6py-8text-center">
        </d iv>
                <S earch class Name="w-12 h-12 t ext-gray-600mx-automb-4" / />
                <p c lass Name="t ext-gray-400">Start typing to search for services</p>
              </d iv>
            ) : results.length === 0 ? (

              <d iv class Name="p x-6py-8text-center">
        </d iv>
                <p c lass Name="t ext-gray-400">No results found for "{query}"</p>
              </d iv>
            ) : (

              <d iv class Name="p x-6pb-6">
        </d iv>
                <p c lass Name="t ext-smtext-gray-400mb-4" />
                  {results.length} result{results.length !== 1 ? 's' : ''} found

                </p>
                <d iv class Name="s pace-y-2">
        </d iv>
                  {results.map((result, index) => (
                    <L ink key="{index}"
                      to="{result.path}"
                      on Click="{on Close}"
                      class Name="f lex items-center p-4 bg-slate-700/50 hover:bg-slate-700 rounded-lgtransition-colorsgroup" />

                      <d iv class Name="f lex-shrink-0 mr-4text-cyan-400group-hover:text-cyan-300">{result.icon}
                      </d iv>
                      <d iv class Name="f lex-1min-w-0">
        </d iv>
                        <h4 c lass Name="t ext-white font-mediumgroup-hover:text-cyan-300transition-colors">{result.title}
                        </h4>
                        <p c lass Name="t ext-smtext-gray-400mt-1" />
                          {result.description}

                        </p>
                        <s pan class Name="i nline-block mt-2 px-2 py-1 text-xs bg-slate-600text-gray-300rounded">{result.category}
                        </s pan>
                      </d iv>
                      <A rrow Right class Name="w-4 h-4 t ext-gray-400 group-hover:text-cyan-400group-hover:translate-x-1transition-all" />
                    </L ink>
                  ))}

                </d iv>
            )}

          </d iv>
      </d iv>
  </d iv>);
};

export default Search Modal;
