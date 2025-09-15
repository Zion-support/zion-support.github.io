import React from 'react';
import dynamic from 'next/dynamic';

interface LoginModalProps {
	isOpen: boolean;
	onOpenChange: (open: boolean) => void;
}

const LoginForm = dynamic(() => import('./login/LoginForm'), { ssr: false });

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onOpenChange }) => {
	if (!isOpen) return null;
	return (
		<div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
			<div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">
				<div className="flex items-center justify-between mb-4">
					<h2 className="text-lg font-semibold">Sign in</h2>
					<button onClick={() => onOpenChange(false)} className="text-gray-500 hover:text-gray-700">✕</button>
				</div>
				<LoginForm />
			</div>
		</div>
	);
};

export default LoginModal;
