import React from "react";

const TermsOfService: React.FC = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 px-4">
			<div className="max-w-4xl mx-auto space-y-8">
				<div className="text-center">
					<h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
					<p className="text-zion-slate-light text-lg">Last updated: {new Date().toLocaleDateString()}</p>
				</div>

				<section>
					<h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
					<p className="text-gray-300 leading-relaxed">
						By accessing and using Zion Tech Group's services, you accept and agree to be bound by the terms of this agreement.
					</p>
				</section>

				<section>
					<h2 className="text-2xl font-semibold text-white mb-4">2. Description of Services</h2>
					<p className="text-gray-300 leading-relaxed">
						Zion Tech Group provides technology consulting, software development, cloud services, cybersecurity solutions, and related technology services.
					</p>
				</section>

				<section>
					<h2 className="text-2xl font-semibold text-white mb-4">3. User Accounts</h2>
					<p className="text-gray-300 leading-relaxed">You are responsible for maintaining the security of your account and password.</p>
				</section>

				<section>
					<h2 className="text-2xl font-semibold text-white mb-4">4. Acceptable Use</h2>
					<p className="text-gray-300 leading-relaxed">
						You agree not to use our services for any unlawful purpose or in any way that could impair our services.
					</p>
				</section>

				<div className="mt-12 text-center">
					<a href="/" className="text-indigo-400 hover:text-indigo-300 font-medium">
						← Back to Home
					</a>
				</div>
			</div>
		</div>
	);
};

export default TermsOfService;