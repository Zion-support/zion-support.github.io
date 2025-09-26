import React, { useState, useEffect } from 'react';

interface AppState {
	isLoading: boolean;
	error: string | null;
	data: { message: string } | null;
}

export default function App(): React.ReactElement {
	const [state, setState] = useState<AppState>({
		isLoading: true,
		error: null,
		data: null
	});

	useEffect(() => {
		// Simulate loading
		const timer = setTimeout(() => {
			setState(prev => ({
				...prev,
				isLoading: false,
				data: { message: 'App loaded successfully!' }
			}));
		}, 1000);

		return () => clearTimeout(timer);
	}, []);

	if (state.isLoading) {
		return (
			<div className="min-h-screen flex items-center justify-center p-8">
				<div className="text-center">
					<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
					<p className="text-gray-600">Loading...</p>
				</div>
			</div>
		);
	}

	if (state.error) {
		return (
			<div className="min-h-screen flex items-center justify-center p-8">
				<div className="text-center max-w-xl">
					<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
						<strong className="font-bold">Error: </strong>
						<span className="block sm:inline">{state.error}</span>
					</div>
					<button 
						onClick={() => window.location.reload()}
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					>
						Retry
					</button>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-blue-50 to-indigo-100">
			<div className="text-center max-w-2xl">
				<div className="bg-white rounded-2xl shadow-xl p-8">
					<div className="mb-6">
						<div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
							<span className="text-3xl text-white">⚡</span>
						</div>
						<h1 className="text-4xl font-bold text-gray-800 mb-3">
							Zion Tech Group
						</h1>
						<p className="text-gray-600 text-lg mb-6">
							React + Vite app is configured and building correctly.
						</p>
					</div>
					
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
						<div className="bg-green-50 border border-green-200 rounded-lg p-4">
							<div className="text-green-600 font-semibold mb-1">✓ Build</div>
							<div className="text-sm text-green-700">Successful</div>
						</div>
						<div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
							<div className="text-blue-600 font-semibold mb-1">⚡ Vite</div>
							<div className="text-sm text-blue-700">Fast Dev</div>
						</div>
						<div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
							<div className="text-purple-600 font-semibold mb-1">⚛️ React</div>
							<div className="text-sm text-purple-700">Ready</div>
						</div>
					</div>

					<div className="bg-gray-50 rounded-lg p-4 mb-6">
						<p className="text-sm text-gray-600 mb-2">Status:</p>
						<p className="text-green-600 font-medium">{state.data?.message}</p>
					</div>

					<div className="flex flex-col sm:flex-row gap-3 justify-center">
						<button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200">
							Get Started
						</button>
						<button className="border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-2 px-6 rounded-lg transition-colors duration-200">
							Learn More
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

