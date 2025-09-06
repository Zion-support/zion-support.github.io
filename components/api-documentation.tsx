<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Code, Database, Shield, Zap, Globe, Cpu;
  BookOpen, CheckCircle, ArrowRight, BarChart3, Lock, Brain
 } from 'lucide-react';
origin/cursor/automate-test-improve-and-merge-code-2533
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
} from 'lucide-react';
export default function APIDocumentation() {
origin/cursor/automate-test-improve-and-merge-code-2533
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
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import {
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

=======
            <a className='text - cyan - 400' href='/api - documentation - generator'>;

=======
              API Reference;
            </a>;
          </li>;
          <li>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              API Documentation Generator;
            </a>;
          </li>;
          <li>;
              Developer Docs;
            </a>;
          </li>;
        </ul>;
      </div>;

<<<<<<< HEAD
import { 
  Code, Database, Shield, Zap, Globe, Cpu, 
  BookOpen, CheckCircle, ArrowRight, BarChart3, Lock, Brain
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

=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
} from 'lucide-react';

export default function APIDocumentation() {
	return (
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
		<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
			<Head>
				<title>API Documentation | Zion Tech Group</title>
				<meta name="description" content="Explore API docs, references, and code generators." />
				<link rel="canonical" href="https: //ziontechgroup.com/api-documentation" />

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
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    </div>);	return (
  <div className="min - h-screen pt - 24 pb - 20 px - 4 sm:px-6 lg:px-8">;
  <Head>;
    <title > API Documentation | Zion Tech Group</title>;
    <meta name="description" content="Explore API docs, references, and code generators." />;
    <link rel="canonical" href="https: //ziontechgroup.com / api - documentation" />;
  </Head>;
  <div className="max - w-5xl mx-auto space-y-6">;
    <h1 className="text - 4xl md:text - 6xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip-text text-transparent">API Documentation</h1>;
    <ul className="list - disc list - inside text - slate-300 space-y-2">;
    <li><a className="text-cyan-400" href="/api - docs">API Reference</a></li>;
    <li><a className="text-cyan-400" href="/api - documentation - generator">API Documentation Generator</a></li>;
    <li><a className="text-cyan-400" href="/docs">Developer Docs</a></li>;
    </ul>;
  </div>;
  </div>),
<<<<<<< HEAD
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
	)
}
	),
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308
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
    </div>
  );
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
