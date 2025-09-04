import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader.jsx';
import { Footer } from './components/Footer.jsx';
import ChatAssistant from './components/ChatAssistant.tsx';
 
export default function App() {
	return (
		<Router>
			<AppHeader />
			<Routes>
				<Route path="/" element={<div />} />
			</Routes>
			<Footer />
			<ChatAssistant />
		</Router>
	);
}
