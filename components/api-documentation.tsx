<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

import React from 'react';


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
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
import {
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react',
import React from 'react';
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';

import {
<<<<<<< HEAD
<<<<<<< HEAD

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

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
=======
import {
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

            <a className='text - cyan - 400' href='/api - documentation - generator'>;

=======
<<<<<<< HEAD
  Lock,
  Brain,
} from 'lucide-react';
;
export default /**
 * APIDocumentation - Function description
 */
function APIDocumentation() {
  return (
    <div className='min - h-screen pt - 24 pb - 20 px - 4 sm:px - 6 lg:px - 8'>;
      <Head>;
        <title > API Documentation | Zion Tech Group</title>;
        <meta;
          name='description';
          content='Explore API docs, references, and code generators.';
        />;
        <link;
          rel='canonical';
          href='https://ziontechgroup.com / api - documentation';
        />;
      </Head>;
      <div className='max - w-5xl mx - auto space - y-6'>;
        <h1 className='text - 4xl md:text - 6xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent'>;
          API Documentation;
        </h1>;
        <ul className='list - disc list - inside text - slate - 300 space - y-2'>;
          <li>;
            <a className='text - cyan - 400' href='/api - docs'>;
              API Reference;
            </a>;
          </li>;
          <li>;
            <a className='text - cyan - 400' href='/api - documentation - generator'>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              API Documentation Generator;
            </a>;
          </li>;
          <li>;
<<<<<<< HEAD

            <a className='text - cyan - 400' href='/docs'>;

=======
            <a className='text - cyan - 400' href='/docs'>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              Developer Docs;
            </a>;
          </li>;
        </ul>;
      </div>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { 
  Code, Database, Shield, Zap, Globe, Cpu, 
  BookOpen, CheckCircle, ArrowRight, BarChart3, Lock, Brain
=======
  Lock,;
  Brain,;


} from 'lucide-react';
export default function APIDocumentation() {
	return (
=======
  Lock,;
  Brain,;
} from 'lucide-react';

export default function APIDocumentation() {
<<<<<<< HEAD
	return (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
		<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
			<Head>
				<title>API Documentation | Zion Tech Group</title>
				<meta name="description" content="Explore API docs, references, and code generators." />
				<link rel="canonical" href="https: //ziontechgroup.com/api-documentation" />
<<<<<<< HEAD
			</Head>
=======
<<<<<<< HEAD
</Head>
=======
			</Head>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
			<div className="max-w-5xl mx-auto space-y-6">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">API Documentation</h1>
				<ul className="list-disc list-inside text-slate-300 space-y-2">
					<li><a className="text-cyan-400" href="/api-docs">API Reference</a></li>
					<li><a className="text-cyan-400" href="/api-documentation-generator">API Documentation Generator</a></li>
					<li><a className="text-cyan-400" href="/docs">Developer Docs</a></li>
<<<<<<< HEAD
				</ul>
			</div>
		</div>

<<<<<<< HEAD
=======
<<<<<<< HEAD
			</Head>
			<div className=&quot;max-w-5xl mx-auto space-y-6&quot;>
				<h1 className=&quot;text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>API Documentation</h1>
				<ul className=&quot;list-disc list-inside text-slate-300 space-y-2&quot;>
					<li><a className=&quot;text-cyan-400&quot; href=&quot;/api-docs&quot;>API Reference</a></li>
					<li><a className=&quot;text-cyan-400&quot; href=&quot;/api-documentation-generator&quot;>API Documentation Generator</a></li>
					<li><a className=&quot;text-cyan-400&quot; href=&quot;/docs&quot;>Developer Docs</a></li>

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
				</ul>
			</div>
		</div>
	)
}
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

	),
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

=======
=======
	),
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
	),
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
