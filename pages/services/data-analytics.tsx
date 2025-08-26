import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function DataAnalyticsPage() {
	return (
		<>
			<Head>
				<title>Data Analytics Services | Zion Tech Group - Data Engineering & Analytics Solutions</title>
				<meta name="description" content="Transform your data into actionable insights with Zion Tech Group's data analytics services. Data engineering, analytics platforms, and real-time insights for informed decision-making." />
				<link rel="canonical" href="https://ziontechgroup.com/services/data-analytics" />
			</Head>
			<main className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
				<div className="container mx-auto px-6 py-16">
					{/* Hero Section */}
					<section className="text-center mb-16">
						<h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
							Data Analytics Services
						</h1>
						<p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
							Transform raw data into actionable insights that drive business growth. Our data analytics expertise helps you build reliable data pipelines, create powerful analytics platforms, and make data-driven decisions.
						</p>
						<div className="flex flex-wrap justify-center gap-4">
							<Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200">
								Get Started
							</Link>
							<Link href="/services" className="px-6 py-3 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-200">
								All Services
							</Link>
						</div>
					</section>

					{/* Data Services Overview */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Our Data Analytics Services</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-green-400/50 transition-all duration-200">
								<h3 className="text-xl font-semibold mb-3 text-green-400">Data Engineering</h3>
								<p className="text-white/70 mb-4">Build robust, scalable data pipelines that collect, process, and transform data efficiently.</p>
								<ul className="text-white/60 text-sm space-y-1">
									<li>• ETL/ELT pipeline development</li>
									<li>• Data warehouse design</li>
									<li>• Real-time data streaming</li>
									<li>• Data quality management</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-emerald-400/50 transition-all duration-200">
								<h3 className="text-xl font-semibold mb-3 text-emerald-400">Business Intelligence</h3>
								<p className="text-white/70 mb-4">Create interactive dashboards and reports that provide actionable business insights.</p>
								<ul className="text-white/60 text-sm space-y-1">
									<li>• Interactive dashboards</li>
									<li>• Custom reporting</li>
									<li>• KPI tracking</li>
									<li>• Data visualization</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-200">
								<h3 className="text-xl font-semibold mb-3 text-blue-400">Advanced Analytics</h3>
								<p className="text-white/70 mb-4">Leverage machine learning and statistical analysis for predictive insights.</p>
								<ul className="text-white/60 text-sm space-y-1">
									<li>• Predictive modeling</li>
									<li>• Statistical analysis</li>
									<li>• Machine learning</li>
									<li>• Pattern recognition</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-purple-400/50 transition-all duration-200">
								<h3 className="text-xl font-semibold mb-3 text-purple-400">Data Strategy</h3>
								<p className="text-white/70 mb-4">Develop comprehensive data strategies aligned with your business objectives.</p>
								<ul className="text-white/60 text-sm space-y-1">
									<li>• Data governance</li>
									<li>• Data architecture</li>
									<li>• Data maturity assessment</li>
									<li>• ROI optimization</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-yellow-400/50 transition-all duration-200">
								<h3 className="text-xl font-semibold mb-3 text-yellow-400">Data Integration</h3>
								<p className="text-white/70 mb-4">Seamlessly integrate data from multiple sources into unified analytics platforms.</p>
								<ul className="text-white/60 text-sm space-y-1">
									<li>• Multi-source integration</li>
									<li>• API development</li>
									<li>• Legacy system integration</li>
									<li>• Real-time synchronization</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-red-400/50 transition-all duration-200">
								<h3 className="text-xl font-semibold mb-3 text-red-400">Data Operations</h3>
								<p className="text-white/70 mb-4">Ensure reliable data operations with monitoring, maintenance, and optimization.</p>
								<ul className="text-white/60 text-sm space-y-1">
									<li>• Performance monitoring</li>
									<li>• Data pipeline maintenance</li>
									<li>• Optimization services</li>
									<li>• 24/7 support</li>
								</ul>
							</div>
						</div>
					</section>

					{/* Data Solutions */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Data Solutions We Build</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<h3 className="text-2xl font-semibold mb-4 text-green-400">Data Warehouses & Lakes</h3>
								<p className="text-white/70 mb-4">
									Design and implement scalable data storage solutions that support both structured and unstructured data.
								</p>
								<ul className="text-white/60 space-y-2">
									<li>• Snowflake data warehouses</li>
									<li>• Amazon Redshift</li>
									<li>• Azure Synapse Analytics</li>
									<li>• Data lake architecture</li>
									<li>• Hybrid cloud solutions</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<h3 className="text-2xl font-semibold mb-4 text-emerald-400">Real-Time Analytics</h3>
								<p className="text-white/70 mb-4">
									Build real-time analytics platforms that provide instant insights for immediate decision-making.
								</p>
								<ul className="text-white/60 space-y-2">
									<li>• Apache Kafka streaming</li>
									<li>• Real-time dashboards</li>
									<li>• Live data processing</li>
									<li>• Event-driven architecture</li>
									<li>• Low-latency analytics</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<h3 className="text-2xl font-semibold mb-4 text-blue-400">Machine Learning Platforms</h3>
								<p className="text-white/70 mb-4">
									Develop ML platforms that automate data analysis and provide predictive insights.
								</p>
								<ul className="text-white/60 space-y-2">
									<li>• Automated ML pipelines</li>
									<li>• Model training platforms</li>
									<li>• Feature engineering</li>
									<li>• Model deployment</li>
									<li>• A/B testing frameworks</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<h3 className="text-2xl font-semibold mb-4 text-purple-400">Data Governance</h3>
								<p className="text-white/70 mb-4">
									Implement comprehensive data governance frameworks for compliance and data quality.
								</p>
								<ul className="text-white/60 space-y-2">
									<li>• Data cataloging</li>
									<li>• Data lineage tracking</li>
									<li>• Quality monitoring</li>
									<li>• Privacy compliance</li>
									<li>• Access controls</li>
								</ul>
							</div>
						</div>
					</section>

					{/* Industries We Serve */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Industries We Transform with Data</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							<Link href="/solutions/healthcare" className="group">
								<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-green-400/50 transition-all duration-200 group-hover:bg-white/10 text-center">
									<h3 className="text-lg font-semibold mb-2 text-green-400">Healthcare</h3>
									<p className="text-white/70 text-sm">Patient analytics, clinical insights, and operational optimization through data.</p>
								</div>
							</Link>
							<Link href="/solutions/finance" className="group">
								<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-emerald-400/50 transition-all duration-200 group-hover:bg-white/10 text-center">
									<h3 className="text-lg font-semibold mb-2 text-emerald-400">Finance</h3>
									<p className="text-white/70 text-sm">Risk assessment, fraud detection, and customer behavior analysis.</p>
								</div>
							</Link>
							<Link href="/solutions/manufacturing" className="group">
								<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-200 group-hover:bg-white/10 text-center">
									<h3 className="text-lg font-semibold mb-2 text-blue-400">Manufacturing</h3>
									<p className="text-white/70 text-sm">Predictive maintenance, quality control, and supply chain optimization.</p>
								</div>
							</Link>
							<Link href="/solutions/retail" className="group">
								<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-purple-400/50 transition-all duration-200 group-hover:bg-white/10 text-center">
									<h3 className="text-lg font-semibold mb-2 text-purple-400">Retail</h3>
									<p className="text-white/70 text-sm">Customer analytics, inventory optimization, and demand forecasting.</p>
								</div>
							</Link>
						</div>
					</section>

					{/* Technology Stack */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Our Technology Stack</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<h3 className="text-xl font-semibold mb-3 text-green-400">Data Storage</h3>
								<p className="text-white/70 mb-4">Modern data storage solutions for scalability and performance.</p>
								<ul className="text-white/60 text-sm space-y-1">
									<li>• Snowflake</li>
									<li>• Amazon Redshift</li>
									<li>• Azure Synapse</li>
									<li>• Google BigQuery</li>
									<li>• Apache Hadoop</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<h3 className="text-xl font-semibold mb-3 text-emerald-400">Data Processing</h3>
								<p className="text-white/70 mb-4">Powerful data processing frameworks for transformation and analysis.</p>
								<ul className="text-white/60 text-sm space-y-1">
									<li>• Apache Spark</li>
									<li>• Apache Kafka</li>
									<li>• Apache Airflow</li>
									<li>• Databricks</li>
									<li>• Apache Flink</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<h3 className="text-xl font-semibold mb-3 text-blue-400">Analytics & BI</h3>
								<p className="text-white/70 mb-4">Advanced analytics and business intelligence tools.</p>
								<ul className="text-white/60 text-sm space-y-1">
									<li>• Tableau</li>
									<li>• Power BI</li>
									<li>• Looker</li>
									<li>• Apache Superset</li>
									<li>• Custom dashboards</li>
								</ul>
							</div>
						</div>
					</section>

					{/* Why Choose Zion for Data Analytics */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Why Choose Zion Tech Group for Data Analytics?</h2>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
							<div>
								<h3 className="text-2xl font-semibold mb-4 text-green-400">Data Expertise</h3>
								<p className="text-white/80 mb-4">
									Our team includes data scientists, engineers, and architects with deep expertise in modern data technologies and best practices.
								</p>
								<ul className="text-white/70 space-y-2">
									<li>• Certified data professionals</li>
									<li>• Experience with big data technologies</li>
									<li>• Industry-specific data solutions</li>
									<li>• Continuous learning and innovation</li>
								</ul>
							</div>
							<div>
								<h3 className="text-2xl font-semibold mb-4 text-emerald-400">Proven Results</h3>
								<p className="text-white/80 mb-4">
									We have successfully delivered data analytics solutions that have transformed businesses across various industries.
								</p>
								<ul className="text-white/70 space-y-2">
									<li>• 100% project success rate</li>
									<li>• Measurable business impact</li>
									<li>• Scalable and maintainable solutions</li>
									<li>• Long-term partnership approach</li>
								</ul>
							</div>
						</div>
					</section>

					{/* CTA Section */}
					<section className="text-center">
						<div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-400/30 rounded-lg p-8">
							<h2 className="text-2xl font-bold mb-4 text-white">Ready to Transform Your Data?</h2>
							<p className="text-white/80 mb-6 max-w-2xl mx-auto">
								Let's discuss how our data analytics expertise can help you unlock the full potential of your data and drive informed decision-making.
							</p>
							<div className="flex flex-wrap justify-center gap-4">
								<Link href="/contact" className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200">
									Start Your Data Journey
								</Link>
								<Link href="/services" className="px-8 py-3 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-200">
									Explore All Services
								</Link>
							</div>
						</div>
					</section>
				</div>
			</main>
		</>
	);
}