<<<<<<< HEAD

<<<<<<< HEAD

import React from 'react';


=======
import React from 'react';


import React from 'react',
import React from 'react';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';

import {
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

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

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

            <a className='text - cyan - 400' href='/api - documentation - generator'>;

=======
              API Reference;
            </a>;
          </li>;
          <li>;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              API Documentation Generator;
            </a>;
          </li>;
          <li>;
<<<<<<< HEAD

            <a className='text - cyan - 400' href='/docs'>;

=======
            <a className='text - cyan - 400' href='/docs'>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              Developer Docs;
            </a>;
          </li>;
        </ul>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { 
  Code, Database, Shield, Zap, Globe, Cpu, 
  BookOpen, CheckCircle, ArrowRight, BarChart3, Lock, Brain
  Lock,;
  Brain,;


} from 'lucide-react';
<<<<<<< HEAD

export default function APIDocumentation() {
	return (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
export default function APIDocumentation() {
	return (
  Lock,;
  Brain,;
} from 'lucide-react';

export default function APIDocumentation() {
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

} from 'lucide-react';

export default function APIDocumentation() {
	return (
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
=======
	)
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

	),
}

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

	),
}
	),
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
