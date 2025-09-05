import React from 'react',
import Layout from '../components/layout/Layout',
import { motion } from 'framer-motion',
import { 
  Code, Database, Shield, Zap, Globe, Cpu, 
  BookOpen, CheckCircle, ArrowRight, BarChart3, Lock, Brain
} from 'lucide-react',

export default function APIDocumentation() {
	return (
		<div className=&quot;min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8&quot;>
			<Head>
				<title>API Documentation | Zion Tech Group</title>
<<<<<<< HEAD
				<meta name="description" content="Explore API docs, references, and code generators." />
				<link rel="canonical" href="https: //ziontechgroup.com/api-documentation" />
=======
				<meta name=&quot;description&quot; content=&quot;Explore API docs, references, and code generators.&quot; />
				<link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/api-documentation&quot; />
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
			</Head>
			<div className=&quot;max-w-5xl mx-auto space-y-6&quot;>
				<h1 className=&quot;text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>API Documentation</h1>
				<ul className=&quot;list-disc list-inside text-slate-300 space-y-2&quot;>
					<li><a className=&quot;text-cyan-400&quot; href=&quot;/api-docs&quot;>API Reference</a></li>
					<li><a className=&quot;text-cyan-400&quot; href=&quot;/api-documentation-generator&quot;>API Documentation Generator</a></li>
					<li><a className=&quot;text-cyan-400&quot; href=&quot;/docs&quot;>Developer Docs</a></li>
				</ul>
			</div>
		</div>
	)
}
