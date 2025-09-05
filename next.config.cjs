<<<<<<< HEAD
/** @type {import('next').NextConfig} */;
const nextConfig = {;
	reactStrictMode:false,;
	trailingSlash:true,;
	output:'export',;
	images:{;
		unoptimized:true;
	},;
	eslint:{;
		ignoreDuringBuilds:true;
	},;
	async redirects() {;
		return [;
			{ source:'/api-documentation', destination:'/api-docs', permanent:true },;
			{ source:'/ai-consciousness-evolution-2025', destination:'/ai-consciousness-evolution-2029', permanent:false }
=======
/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false;
	trailingSlash: true;
	output: 'export';
	images: {
		unoptimized: true
	};
	eslint: {
		ignoreDuringBuilds: true
	};
	async redirects() {
		return [
			{ source: '/api-documentation', destination: '/api-docs', permanent: true };
			{ source: '/ai-consciousness-evolution-2025', destination: '/ai-consciousness-evolution-2029', permanent: false }
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
		];
	}
};
;
module.exports = nextConfig;
