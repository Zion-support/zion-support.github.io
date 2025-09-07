<<<<<<< HEAD
import Layout from '../components/layout/Layout';'

import { motion } from 'framer-motion';'

import { Code, Database, Shield, Zap, Globe, Cpu;
  }
  BookOpen, CheckCircle, ArrowRight, BarChart3, Lock, Brain
 } from 'lucide-react';'
import {
} from 'lucide-react';'

export default function APIDocumentation() {
}
return (;
    <div className='min-h-screen pt-24 pb-20 px-4 'sm':px-6 'lg':px-8'>;'

      <Head>;
        <title>API Documentation | Zion Tech Group</title>;
        <meta;
          name='description';'
          content='Explore API docs, references, and code generators.';' />;

        <link,
rel='canonical''

          href=''https'://ziontechgroup.com/api-documentation'' />
      </Head>
      <div className='max-w-5xl mx-auto space-y-6'>'
        <h1 className='text-4xl 'md':text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>'
          API Documentation
        </h1>
        <ul className='list-disc list-inside text-slate-300 space-y-2'>'
          <li>
            <a className='text-cyan-400' href='/api-docs'>'
              API Reference
            </a>
          </li>
          <li>
            <a className='text-cyan-400' href='/api-documentation-generator'>'
              API Documentation Generator
            </a>
          </li>
          <li>
            <a className='text-cyan-400' href='/docs'>'
              Developer Docs
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
max-w-5xl mx-auto space-y-6"> <h1 className=" text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">API Documentation</h1> <ul className=" list-disc list-inside text-slate-300 space-y-2"> <li><a className=" text-cyan-400"href=" /api-docs">API Reference</a></li> <li><a className=" text-cyan-400"href=" /api-documentation-generator">API Documentation Generator</a></li> <li><a className=" text-cyan-400"href=" /docs" >Developer Docs</a></li> </ul> </div> </div>
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Code, Database, Shield, Zap, Globe, Cpu, 
  BookOpen, CheckCircle, ArrowRight, BarChart3, Lock, Brain
 } from 'lucide-react';'
import {
} from 'lucide-react';'
=======
import Layout from '../components/layout/Layout';

=======
max-w-5xl mx-auto space-y-6"> <h1 className=" text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">API Documentation</h1> <ul className=" list-disc list-inside text-slate-300 space-y-2"> <li><a className=" text-cyan-400"href=" /api-docs">API Reference</a></li> <li><a className=" text-cyan-400"href=" /api-documentation-generator">API Documentation Generator</a></li> <li><a className=" text-cyan-400"href=" /docs" >Developer Docs</a></li> </ul> </div> </div>
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
max-w-5xl mx-auto space-y-6"> <h1 className=" text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">API Documentation</h1> <ul className=" list-disc list-inside text-slate-300 space-y-2"> <li><a className=" text-cyan-400"href=" /api-docs">API Reference</a></li> <li><a className=" text-cyan-400"href=" /api-documentation-generator">API Documentation Generator</a></li> <li><a className=" text-cyan-400"href=" /docs" >Developer Docs</a></li> </ul> </div> </div>
=======

<<<<<<< HEAD
import React from 'react';


import React from 'react',
import React from 'react';
=======

import React from 'react';


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Code, Database, Shield, Zap, Globe, Cpu, 
  BookOpen, CheckCircle, ArrowRight, BarChart3, Lock, Brain
 } from 'lucide-react';'
import {
<<<<<<< HEAD
} from 'lucide-react';'
=======
import Layout from '../components/layout/Layout';

=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { motion } from 'framer-motion';

import { Code, Database, Shield, Zap, Globe, Cpu;}
  BookOpen, CheckCircle, ArrowRight, BarChart3, Lock, Brain}
 } from 'lucide-react';
import {}
} from 'lucide-react';
>>>>>>> origin/chore/fix-lint-and-merge

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
>>>>>>> origin/resolved-merge-conflicts
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts

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
<<<<<<< HEAD
            <a className='text-cyan-400' href='/api-docs'>;
=======
<<<<<<< HEAD
            <a className=text-cyan-400' href='/api-docs>;
>>>>>>> origin/resolved-merge-conflicts
              API Reference;
            </a>;
          </li>;
          <li>;
<<<<<<< HEAD
            <a className='text-cyan-400' href='/api-documentation-generator'>;
=======
            <a className=text-cyan-400' href='/api-documentation-generator>;
=======
            <a className='text-cyan-400' href='/api-docs'>;
import {

<<<<<<< HEAD
  Code
  Database
  Shield
  Zap
  Globe
  Cpu
  BookOpen
  CheckCircle
  ArrowRight
  BarChart3
  Lock
  Brain;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
            <a className='text - cyan - 400' href='/docs'>;
=======

            <a className='text - cyan - 400' href='/api - documentation - generator'>;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> origin/resolved-merge-conflicts
              API Documentation Generator;
            </a>;
          </li>;
          <li>;
<<<<<<< HEAD
            <a className='text-cyan-400' href='/docs'>;
=======
<<<<<<< HEAD
            <a className=text-cyan-400' href='/docs'>;
=======

            <a className='text - cyan - 400' href='/docs'>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> origin/resolved-merge-conflicts
              Developer Docs;
            </a>;
          </li>;
        </ul>;
      </div>;
<<<<<<< HEAD
    </div>;
  </div>),
}
  )
	)
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { 
  Code, Database, Shield, Zap, Globe, Cpu, 
  BookOpen, CheckCircle, ArrowRight, BarChart3, Lock, Brain
  Lock,;
  Brain,;


} from 'lucide-react';
export default function APIDocumentation() {
	return (
  Lock,;
  Brain,;
} from 'lucide-react';

export default function APIDocumentation() {
<<<<<<< HEAD
  return (
    <div className='min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8'>
      <Head>
        <title>API Documentation | Zion Tech Group</title>
        <meta
          name='description'
          content='Explore API docs, references, and code generators.'
        />
        <link
          rel='canonical'
          href='https://ziontechgroup.com/api-documentation'
        />
      </Head>
      <div className='max-w-5xl mx-auto space-y-6'>
        <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
          API Documentation
        </h1>
        <ul className='list-disc list-inside text-slate-300 space-y-2'>
          <li>
            <a className='text-cyan-400' href='/api-docs'>
              API Reference
            </a>
          </li>
          <li>
            <a className='text-cyan-400' href='/api-documentation-generator'>
              API Documentation Generator
            </a>
          </li>
          <li>
            <a className='text-cyan-400' href='/docs'>
              Developer Docs
            </a>
          </li>
        </ul>
      </div>
    </div>;
  );	return (
=======
	return (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
	)
}
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
}
}
>>>>>>> origin/chore/fix-lint-and-merge
=======

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
=======
<<<<<<< HEAD
}
}
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

	),
}

<<<<<<< HEAD

	),
}
	),
}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
