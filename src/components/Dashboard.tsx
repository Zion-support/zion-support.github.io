import React, { useState, useEffect } from 'react';

interface DashboardStats {
	totalProjects: number;
	activeClients: number;
	teamMembers: number;
	satisfactionRate: number;
}

interface Project {
	id: string;
	name: string;
	status: 'completed' | 'in-progress' | 'planning';
	progress: number;
	client: string;
	deadline: string;
}

export const Dashboard: React.FC = () => {
	const [stats, setStats] = useState<DashboardStats>({
		totalProjects: 0,
		activeClients: 0,
		teamMembers: 0,
		satisfactionRate: 0
	});

	const [projects, setProjects] = useState<Project[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Simulate loading data
		const timer = setTimeout(() => {
			setStats({
				totalProjects: 150,
				activeClients: 45,
				teamMembers: 25,
				satisfactionRate: 98
			});

			setProjects([
				{
					id: '1',
					name: 'E-commerce Platform',
					status: 'in-progress',
					progress: 75,
					client: 'TechCorp',
					deadline: '2024-02-15'
				},
				{
					id: '2',
					name: 'AI Chatbot System',
					status: 'completed',
					progress: 100,
					client: 'StartupXYZ',
					deadline: '2024-01-30'
				},
				{
					id: '3',
					name: 'Cloud Migration',
					status: 'planning',
					progress: 25,
					client: 'GlobalTech',
					deadline: '2024-03-20'
				}
			]);

			setIsLoading(false);
		}, 1000);

		return () => clearTimeout(timer);
	}, []);

	const getStatusColor = (status: string) => {
		switch (status) {
			case 'completed': return 'bg-green-100 text-green-800';
			case 'in-progress': return 'bg-blue-100 text-blue-800';
			case 'planning': return 'bg-yellow-100 text-yellow-800';
			default: return 'bg-gray-100 text-gray-800';
		}
	};

	const getStatusIcon = (status: string) => {
		switch (status) {
			case 'completed': return '✓';
			case 'in-progress': return '⚡';
			case 'planning': return '📋';
			default: return '❓';
		}
	};

	if (isLoading) {
		return (
			<div className="bg-white rounded-2xl shadow-xl p-8">
				<div className="animate-pulse">
					<div className="h-8 bg-gray-200 rounded mb-6"></div>
					<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
						{Array.from({ length: 4 }).map((_, i) => (
							<div key={i} className="h-24 bg-gray-200 rounded-lg"></div>
						))}
					</div>
					<div className="space-y-4">
						{Array.from({ length: 3 }).map((_, i) => (
							<div key={i} className="h-20 bg-gray-200 rounded-lg"></div>
						))}
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="bg-white rounded-2xl shadow-xl p-8">
			<div className="mb-8">
				<h2 className="text-3xl font-bold text-gray-800 mb-2">Project Dashboard</h2>
				<p className="text-gray-600">Overview of current projects and team performance</p>
			</div>

			{/* Stats Grid */}
			<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
				<div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-blue-600 font-medium text-sm">Total Projects</p>
							<p className="text-3xl font-bold text-blue-800">{stats.totalProjects}</p>
						</div>
						<div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
							<span className="text-white text-xl">📊</span>
						</div>
					</div>
				</div>

				<div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-green-600 font-medium text-sm">Active Clients</p>
							<p className="text-3xl font-bold text-green-800">{stats.activeClients}</p>
						</div>
						<div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
							<span className="text-white text-xl">👥</span>
						</div>
					</div>
				</div>

				<div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-purple-600 font-medium text-sm">Team Members</p>
							<p className="text-3xl font-bold text-purple-800">{stats.teamMembers}</p>
						</div>
						<div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
							<span className="text-white text-xl">🚀</span>
						</div>
					</div>
				</div>

				<div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-orange-600 font-medium text-sm">Satisfaction Rate</p>
							<p className="text-3xl font-bold text-orange-800">{stats.satisfactionRate}%</p>
						</div>
						<div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
							<span className="text-white text-xl">⭐</span>
						</div>
					</div>
				</div>
			</div>

			{/* Projects Table */}
			<div>
				<h3 className="text-xl font-semibold text-gray-800 mb-6">Recent Projects</h3>
				<div className="space-y-4">
					{projects.map((project) => (
						<div key={project.id} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-200">
							<div className="flex items-center justify-between mb-4">
								<div className="flex items-center space-x-4">
									<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
										<span className="text-blue-600 font-semibold">
											{getStatusIcon(project.status)}
										</span>
									</div>
									<div>
										<h4 className="font-semibold text-gray-800">{project.name}</h4>
										<p className="text-sm text-gray-600">{project.client}</p>
									</div>
								</div>
								<div className="text-right">
									<span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
										{project.status.replace('-', ' ')}
									</span>
									<p className="text-sm text-gray-500 mt-1">Due: {project.deadline}</p>
								</div>
							</div>
							
							{/* Progress Bar */}
							<div className="mb-2">
								<div className="flex justify-between text-sm text-gray-600 mb-1">
									<span>Progress</span>
									<span>{project.progress}%</span>
								</div>
								<div className="w-full bg-gray-200 rounded-full h-2">
									<div 
										className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-500"
										style={{ width: `${project.progress}%` }}
									></div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Quick Actions */}
			<div className="mt-8 pt-6 border-t border-gray-200">
				<h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
				<div className="flex flex-wrap gap-3">
					<button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
						+ New Project
					</button>
					<button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200">
						📊 View Reports
					</button>
					<button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200">
						👥 Manage Team
					</button>
					<button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200">
						⚙️ Settings
					</button>
				</div>
			</div>
		</div>
	);
};