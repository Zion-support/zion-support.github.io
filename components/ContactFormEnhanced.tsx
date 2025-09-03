import React, { useState } from 'react';
import { Send, CheckCircle, User, Mail, MessageSquare } from 'lucide-react';

const ContactFormEnhanced: React.FC = () => {
	const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		await new Promise((r) => setTimeout(r, 1000));
		setIsSubmitting(false);
		setStatus('success');
		setFormData({ name: '', email: '', subject: '', message: '' });
	};

	return (
		<div className="max-w-2xl mx-auto p-6">
			<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h2>
			<form onSubmit={handleSubmit} className="space-y-4">
				<div>
					<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name *</label>
					<div className="relative">
						<User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
						<input
							type="text"
							value={formData.name}
							onChange={(e) => setFormData({ ...formData, name: e.target.value })}
							className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none"
							required
						/>
					</div>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email *</label>
					<div className="relative">
						<Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
						<input
							type="email"
							value={formData.email}
							onChange={(e) => setFormData({ ...formData, email: e.target.value })}
							className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none"
							required
						/>
					</div>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject *</label>
					<input
						type="text"
						value={formData.subject}
						onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
						className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none"
						required
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message *</label>
					<div className="relative">
						<MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
						<textarea
							rows={6}
							value={formData.message}
							onChange={(e) => setFormData({ ...formData, message: e.target.value })}
							className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none"
							required
						/>
					</div>
				</div>

				<button
					type="submit"
					disabled={isSubmitting}
					className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center gap-2"
				>
					{isSubmitting ? (
						<span>Sending...</span>
					) : (
						<>
							<Send className="w-4 h-4" />
							<span>Send Message</span>
						</>
					)}
				</button>

				{status === 'success' && (
					<div className="p-4 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 rounded-lg flex items-center gap-2">
						<CheckCircle className="w-5 h-5" />
						<span>Message sent successfully!</span>
					</div>
				)}
			</form>
		</div>
	);
};

export default ContactFormEnhanced;