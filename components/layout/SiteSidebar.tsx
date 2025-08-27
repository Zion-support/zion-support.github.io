import Link from 'next/link'
export default function SiteSidebar() {
	return (
		<aside className="hidden lg:block w-64 flex-shrink-0 border-r border-gray-200/60 pr-4">
			<div className="sticky top-20 space-y-6 text-sm">
				<div>
					<h4 className="font-semibold text-gray-900 mb-2">Quick Links</h4>
					<ul className="space-y-1 text-gray-700">
						<li><Link href="/services" className="hover:text-cyan-600">All Services</Link></li>
						<li><Link href="/services/ai" className="hover:text-cyan-600">AI</Link></li>
						<li><Link href="/services/cloud" className="hover:text-cyan-600">Cloud</Link></li>
						<li><Link href="/services/cybersecurity" className="hover:text-cyan-600">Cybersecurity</Link></li>
						<li><Link href="/case-studies" className="hover:text-cyan-600">Case Studies</Link></li>
						<li><Link href="/contact" className="hover:text-cyan-600">Contact</Link></li>
					</ul>
				</div>
				<div>
					<h4 className="font-semibold text-gray-900 mb-2">Company</h4>
					<ul className="space-y-1 text-gray-700">
						<li><Link href="/about" className="hover:text-cyan-600">About</Link></li>
						<li><Link href="/careers" className="hover:text-cyan-600">Careers</Link></li>
						<li><Link href="/news" className="hover:text-cyan-600">News</Link></li>
					</ul>
				</div>
			</div>
		</aside>
	)
}