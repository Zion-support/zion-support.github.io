
<<<<<<< HEAD

=======
import React from 'react';
max-w-5xl mx-auto space-y-6"> <h1 className=" text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">API Documentation</h1> <ul className=" list-disc list-inside text-slate-300 space-y-2"> <li><a className=" text-cyan-400"href=" /api-docs">API Reference</a></li> <li><a className=" text-cyan-400"href=" /api-documentation-generator">API Documentation Generator</a></li> <li><a className=" text-cyan-400"href=" /docs" >Developer Docs</a></li> </ul> </div> </div>
>>>>>>> origin/cursor/delete-old-data-records-6bba
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Code, Database, Shield, Zap, Globe, Cpu, 
  BookOpen, CheckCircle, ArrowRight, BarChart3, Lock, Brain
 } from 'lucide-react';'
import {

import Layout from '../components/layout/Layout';


<<<<<<< HEAD
=======
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
import Layout from '../components / layout / Layout';
import { motion } from 'framer-motion';

import { Code, Database, Shield, Zap, Globe, Cpu;}
  BookOpen, CheckCircle, ArrowRight, BarChart3, Lock, Brain}
 } from 'lucide-react';
import {}
} from 'lucide-react';
>>>>>>> origin/cursor/delete-old-data-records-6bba

export default function APIDocumentation() {
  return (
    <div className='min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8'    />;

      <Head    />;
        <title    />API Documentation | Zion Tech Group</title>;
        <meta;
          name='description';
          content='Explore API docs, references, and code generators.';
           />;

        <link;
rel='canonical'

          href='https://ziontechgroup.com/api-documentation'
           />
      </Head>
      <div className='max-w-5xl mx-auto space-y-6'    />
        <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'    />
          API Documentation;
        </h1>
        <ul className='list-disc list-inside text-slate-300 space-y-2'    />
          <li    />
            <a className='text-cyan-400' href='/api-docs'    />
              API Reference;
            </a>
          </li>
          <li    />
            <a className='text-cyan-400' href='/api-documentation-generator'    />
              API Documentation Generator;
            </a>
          </li>
          <li    />
            <a className='text-cyan-400' href='/docs'    />
              Developer Docs;
            </a>
          </li>
        </ul>
      </div>
    </div>
  );

<<<<<<< HEAD
            <a className='text-cyan-400' href='/api-docs'>;
import {


  Code,
  Database,
  Shield,
  Zap,
  Globe,
  Cpu,
  BookOpen,
  CheckCircle,
  ArrowRight,
  BarChart3,


            <a className='text - cyan - 400' href='/api - documentation - generator'>;


=======
export default function APIDocumentation() {
	return (
		<div className='min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8'>
			<Head>
				<title>API Documentation | Zion Tech Group</title>
				<meta name='description' content='Explore API docs, references, and code generators.' />
				<link rel='canonical' href='https: //ziontechgroup.com/api-documentation' />
			</Head>
			<div className='max-w-5xl mx-auto space-y-6'>
				<h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>API Documentation</h1>
				<ul className='list-disc list-inside text-slate-300 space-y-2'>
					<li><a className='text-cyan-400' href='/api-docs'>API Reference</a></li>
					<li><a className='text-cyan-400' href='/api-documentation-generator'>API Documentation Generator</a></li>
					<li><a className='text-cyan-400' href='/docs'>Developer Docs</a></li>
				</ul>
			</div>
		</div>
  </div>),}href='https://ziontechgroup.com/api-documentation';
        />;
      </Head>;
      <div className='max-w-5xl mx-auto space-y-6'>;
        <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>;
          API Documentation;
        </h1>;
        <ul className='list-disc list-inside text-slate-300 space-y-2'>;
          <li>;

            <a className=text-cyan-400' href='/api-docs>;
              API Reference;
            </a>;
          </li>;
          <li>;

            <a className=text-cyan-400' href='/api-documentation-generator>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
              API Documentation Generator;
            </a>;
          </li>;
          <li>;

<<<<<<< HEAD

            <a className='text - cyan - 400' href='/docs'>;



=======
            <a className=text-cyan-400' href='/docs'>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
              Developer Docs;
            </a>;
          </li>;
        </ul>;
      </div>;

<<<<<<< HEAD

		<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
			<Head>
				<title>API Documentation | Zion Tech Group</title>
				<meta name="description" content="Explore API docs, references, and code generators." />
				<link rel="canonical" href="https: //ziontechgroup.com/api-documentation" />
			</Head>
			<div className="max-w-5xl mx-auto space-y-6">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">API Documentation</h1>
				<ul className="list-disc list-inside text-slate-300 space-y-2">
					<li><a className="text-cyan-400" href="/api-docs">API Reference</a></li>
					<li><a className="text-cyan-400" href="/api-documentation-generator">API Documentation Generator</a></li>
					<li><a className="text-cyan-400" href="/docs">Developer Docs</a></li>
				</ul>
			</div>
		</div>

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

		<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">;
			<Head>;
				<title>API Documentation | Zion Tech Group</title>;
				<meta name="description" content="Explore API docs, references, and code generators." />;
				<link rel="canonical" href="https: //ziontechgroup && ziontechgroup.com/api-documentation" />;
			</Head>;
			<div className="max-w-5xl mx-auto space-y-6">;
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">API Documentation</h1>;
				<ul className="list-disc list-inside text-slate-300 space-y-2">;
					<li><a className="text-cyan-400" href="/api-docs">API Reference</a></li>;
					<li><a className="text-cyan-400" href="/api-documentation-generator">API Documentation Generator</a></li>;
					<li><a className="text-cyan-400" href="/docs">Developer Docs</a></li>;
				</ul>;
			</div>;
		</div>;
	),;
<<<<<<< HEAD

}

=======
}
}
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
    </div>);	return (
  <div className="min - h-screen pt - 24 pb - 20 px - 4 sm:px - 6 lg:px - 8">;
  <Head>;
    <title > API Documentation | Zion Tech Group</title>;
    <meta name="description" content="Explore API docs, references, and code generators." />;
    <link rel="canonical" href="https: //ziontechgroup.com / api - documentation" />;
  </Head>;
  <div className="max - w-5xl mx - auto space - y-6">;
    <h1 className="text - 4xl md:text - 6xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent">API Documentation</h1>;
    <ul className="list - disc list - inside text - slate - 300 space - y-2">;
    <li><a className="text - cyan - 400" href="/api - docs">API Reference</a></li>;
    <li><a className="text - cyan - 400" href="/api - documentation - generator">API Documentation Generator</a></li>;
    <li><a className="text - cyan - 400" href="/docs">Developer Docs</a></li>;
    </ul>;
  </div>;
  </div>),
}
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

	),
}


<<<<<<< HEAD




=======
	),
}
	),
}
    </div>;
  </div>)}
  )
	)
}
}
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
