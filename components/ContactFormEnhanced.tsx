import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactFormEnhanced: React.FC = () => {
	const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		await new Promise(r => setTimeout(r, 800));
		setIsSubmitting(false);
		setStatus('success');
		setFormData({ name: '', email: '', subject: '', message: '' });
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-3">
			<input
				type="text"
				placeholder="Name"
				value={formData.name}
				onChange={e => setFormData({ ...formData, name: e.target.value })}
				className="w-full px-3 py-2 rounded border"
				required
			/>
			<input
				type="email"
				placeholder="Email"
				value={formData.email}
				onChange={e => setFormData({ ...formData, email: e.target.value })}
				className="w-full px-3 py-2 rounded border"
				required
			/>
			<input
				type="text"
				placeholder="Subject"
				value={formData.subject}
				onChange={e => setFormData({ ...formData, subject: e.target.value })}
				className="w-full px-3 py-2 rounded border"
				required
			/>
			<textarea
				placeholder="Message"
				value={formData.message}
				onChange={e => setFormData({ ...formData, message: e.target.value })}
				rows={5}
				className="w-full px-3 py-2 rounded border"
				required
			/>
			<button disabled={isSubmitting} type="submit" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded">
				<Send className="w-4 h-4 mr-2" /> {isSubmitting ? 'Sending...' : 'Send Message'}
			</button>
			{status === 'success' && <div className="text-green-600">Message sent successfully!</div>}
		</form>
	);
};

export default ContactFormEnhanced;