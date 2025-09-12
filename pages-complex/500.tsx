import { Center } from '@chakra-ui/react';
import Link from 'next/link';
import { NextSeo } from '@/components/NextSeo';
import { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { captureException } from '@/utils/sentry';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/Button';
import { logInfo } from '@/utils/productionLogger';

export default function Custom500() {
	return (
		<div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8">
			        <SEO 
          title="Server Error – Zion Tech Group"
          description="Something went wrong on our end. Please try again or return home."
          keywords={["500", "server error", "Zion Tech Group"]}
        />
			<h1 className="text-5xl font-bold mb-4">500</h1>
			<p className="text-gray-300 mb-8 max-w-xl">Something went wrong on our end. Please try again or return home.</p>
			<a href="/" className="px-6 py-3 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition">Go Home</a>
		</div>
	);
}