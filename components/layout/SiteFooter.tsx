import Link from 'next/link'

export default function SiteFooter() {
	return (
		<footer className="border-t border-gray-200 mt-16">
			<div className="mx-auto max-w-7xl px-4 py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-sm text-gray-600">
				<div>
					<h4 className="font-semibold text-gray-900 mb-2">Company</h4>
					<ul className="space-y-1">
						<li><Link href="/about" className="hover:text-cyan-600">About</Link></li>
						<li><Link href="/careers" className="hover:text-cyan-600">Careers</Link></li>
						<li><Link href="/news" className="hover:text-cyan-600">News</Link></li>
						<li><Link href="/contact" className="hover:text-cyan-600">Contact</Link></li>
					</ul>
				</div>
				<div>
					<h4 className="font-semibold text-gray-900 mb-2">Resources</h4>
					<ul className="space-y-1">
						<li><Link href="/blog" className="hover:text-cyan-600">Blog</Link></li>
						<li><Link href="/case-studies" className="hover:text-cyan-600">Case Studies</Link></li>
						<li><Link href="/webinars" className="hover:text-cyan-600">Webinars</Link></li>
						<li><Link href="/privacy" className="hover:text-cyan-600">Privacy</Link></li>
						<li><Link href="/terms" className="hover:text-cyan-600">Terms</Link></li>
					</ul>
				</div>
				<div className="col-span-2">
					<h4 className="font-semibold text-gray-900 mb-2">Subscribe</h4>
					<p className="mb-3">Get updates on new solutions and research.</p>
					<form className="flex gap-2 max-w-md">
						<input type="email" required placeholder="you@example.com" className="flex-1 rounded-md border border-gray-300 px-3 py-2" />
						<button className="rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-white font-medium">Subscribe</button>
					</form>
				</div>
			</div>
			<div className="mx-auto max-w-7xl px-4 py-6 text-xs text-gray-500 border-t border-gray-100">
				© {new Date().getFullYear()} Zion Tech Group. All rights reserved.
			</div>
		</footer>
	)
}