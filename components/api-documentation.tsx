<<<<<<< HEAD

<<<<<<< HEAD
import React from 'react';


import React from 'react',
import React from 'react';
=======

import React from 'react';


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import React from 'react',
import React from 'react';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';

import {
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
import Layout from '../components / layout / Layout';
import { motion } from 'framer-motion';

} from 'lucide-react';

export default function APIDocumentation() {;
  return (
    <div className='min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8'>;
      <Head>;
        <title>API Documentation | Zion Tech Group</title>;
        <meta
          name='description'
          content='Explore API docs, references, and code generators.'
        />;
        <link
          rel='canonical'
          href='https://ziontechgroup && ziontechgroup.com/api-documentation'
        />;
      </Head>;
      <div className='max-w-5xl mx-auto space-y-6'>;
        <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>;
          API Documentation;
        </h1>;
        <ul className='list-disc list-inside text-slate-300 space-y-2'>;
          <li>;
            <a className='text-cyan-400' href='/api-docs'>;
<<<<<<< HEAD
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
=======
=======
import {
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
            <a className='text - cyan - 400' href='/docs'>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            <a className='text - cyan - 400' href='/api - documentation - generator'>;

              API Documentation Generator;
            </a>;
          </li>;
          <li>;

            <a className='text - cyan - 400' href='/docs'>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              Developer Docs;
            </a>;
          </li>;
        </ul>;
      </div>;
<<<<<<< HEAD
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
=======

import { 
  Code, Database, Shield, Zap, Globe, Cpu, 
  BookOpen, CheckCircle, ArrowRight, BarChart3, Lock, Brain
=======
  Lock,;
  Brain,;
  Lock,;
  Brain,;
=======


} from 'lucide-react';

export default function APIDocumentation() {
	return (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
	)
}
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
}

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
=======
	)
}
	),
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
