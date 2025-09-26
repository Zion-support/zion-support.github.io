import React, { useState, useEffect } from 'react';

interface Task {
	id: number;
	text: string;
	completed: boolean;
	createdAt: string;
}

interface AppState {
	isLoading: boolean;
	error: string | null;
	data: { message: string } | null;
}

type FilterType = 'all' | 'active' | 'completed';

export default function App(): React.ReactElement {
	const [state, setState] = useState<AppState>({
		isLoading: true,
		error: null,
		data: null
	});

	const [showTaskManager, setShowTaskManager] = useState(false);
	const [tasks, setTasks] = useState<Task[]>([]);
	const [newTaskText, setNewTaskText] = useState('');
	const [filter, setFilter] = useState<FilterType>('all');

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

	// Load tasks from localStorage on mount
	useEffect(() => {
		const savedTasks = localStorage.getItem('tasks');
		if (savedTasks) {
			try {
				setTasks(JSON.parse(savedTasks));
			} catch (error) {
				console.error('Error parsing saved tasks:', error);
			}
		}
	}, []);

	// Save tasks to localStorage whenever tasks change
	useEffect(() => {
		if (tasks.length > 0) {
			localStorage.setItem('tasks', JSON.stringify(tasks));
		}
	}, [tasks]);

	const addTask = () => {
		if (newTaskText.trim()) {
			const newTask: Task = {
				id: Date.now(),
				text: newTaskText.trim(),
				completed: false,
				createdAt: new Date().toISOString()
			};
			setTasks(prev => [...prev, newTask]);
			setNewTaskText('');
		}
	};

	const toggleTask = (id: number) => {
		setTasks(prev => prev.map(task => 
			task.id === id ? { ...task, completed: !task.completed } : task
		));
	};

	const deleteTask = (id: number) => {
		setTasks(prev => prev.filter(task => task.id !== id));
	};

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			addTask();
		}
	};

	const filteredTasks = tasks.filter(task => {
		switch (filter) {
			case 'active':
				return !task.completed;
			case 'completed':
				return task.completed;
			default:
				return true;
		}
	});

	const activeTasks = tasks.filter(task => !task.completed);
	const completedTasks = tasks.filter(task => task.completed);

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

	if (showTaskManager) {
		return (
			<div className="min-h-screen bg-gray-50 py-8">
				<div className="max-w-2xl mx-auto px-4">
					<div className="bg-white rounded-lg shadow-lg p-6">
						<div className="flex justify-between items-center mb-6">
							<h1 className="text-2xl font-bold text-gray-800">Task Manager</h1>
							<button 
								onClick={() => setShowTaskManager(false)}
								className="text-gray-500 hover:text-gray-700"
							>
								← Back
							</button>
						</div>

						{/* Add Task Form */}
						<div className="flex gap-2 mb-6">
							<input
								type="text"
								placeholder="Add a new task..."
								value={newTaskText}
								onChange={(e) => setNewTaskText(e.target.value)}
								onKeyDown={handleKeyDown}
								className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
							<button
								onClick={addTask}
								className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
							>
								Add Task
							</button>
						</div>

						{/* Task Stats */}
						<div className="grid grid-cols-3 gap-4 mb-6">
							<div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
								<div className="text-blue-600 font-semibold">{tasks.length}</div>
								<div className="text-sm text-blue-700">Total</div>
							</div>
							<div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
								<div className="text-green-600 font-semibold">{activeTasks.length}</div>
								<div className="text-sm text-green-700">Active</div>
							</div>
							<div className="bg-purple-50 border border-purple-200 rounded-lg p-3 text-center">
								<div className="text-purple-600 font-semibold">{completedTasks.length}</div>
								<div className="text-sm text-purple-700">Completed</div>
							</div>
						</div>

						{/* Filter Buttons */}
						<div className="flex gap-2 mb-4">
							<button
								onClick={() => setFilter('all')}
								className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors duration-200 ${
									filter === 'all' 
										? 'bg-blue-600 text-white' 
										: 'bg-gray-200 text-gray-700 hover:bg-gray-300'
								}`}
							>
								All ({tasks.length})
							</button>
							<button
								onClick={() => setFilter('active')}
								className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors duration-200 ${
									filter === 'active' 
										? 'bg-blue-600 text-white' 
										: 'bg-gray-200 text-gray-700 hover:bg-gray-300'
								}`}
							>
								Active ({activeTasks.length})
							</button>
							<button
								onClick={() => setFilter('completed')}
								className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors duration-200 ${
									filter === 'completed' 
										? 'bg-blue-600 text-white' 
										: 'bg-gray-200 text-gray-700 hover:bg-gray-300'
								}`}
							>
								Completed ({completedTasks.length})
							</button>
						</div>

						{/* Task List */}
						<div className="space-y-2">
							{filteredTasks.length === 0 ? (
								<div className="text-center py-8 text-gray-500">
									{filter === 'all' ? 'No tasks yet. Add one above!' : 
									 filter === 'active' ? 'No active tasks.' : 'No completed tasks.'}
								</div>
							) : (
								filteredTasks.map(task => (
									<div key={task.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
										<input
											type="checkbox"
											checked={task.completed}
											onChange={() => toggleTask(task.id)}
											className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
										/>
										<span className={`flex-1 ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
											{task.text}
										</span>
										<button
											onClick={() => deleteTask(task.id)}
											title={task.text}
											className="text-red-500 hover:text-red-700 p-1"
										>
											🗑️
										</button>
									</div>
								))
							)}
						</div>
					</div>
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
						<button 
							onClick={() => setShowTaskManager(true)}
							className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
						>
							🚀 Try Task Manager
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

