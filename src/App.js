import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { AppHeader } from './layout/AppHeader';
// import { Footer } from './components/Footer.jsx';
// import { ChatAssistant } from './components/ChatAssistant';
// Lazy load pages
// const Home = React.lazy(() => import('./pages/Home.jsx'));
// const About = React.lazy(() => import('./pages/About'));
// const Contact = React.lazy(() => import('./pages/Contact'));
// const Blog = React.lazy(() => import('./pages/Blog'));
// const BlogPost = React.lazy(() => import('./pages/BlogPost'));
// const PartnersPage = React.lazy(() => import('./pages/Partners'));
// const Login = React.lazy(() => import('./pages/Login'));
// const FAQ = React.lazy(() => import('./pages/FAQ'));
// const Careers = React.lazy(() => import('./pages/Careers'));
// const Privacy = React.lazy(() => import('./pages/Privacy'));
// const Terms = React.lazy(() => import('./pages/Terms'));
// const Sitemap = React.lazy(() => import('./pages/Sitemap'));
// const GreenIT = React.lazy(() => import('./pages/GreenIT'));
// Loading component
const LoadingSpinner = () => React.createElement('div', { className: 'flex items-center justify-center min-h-screen' },
    React.createElement('div', { className: 'animate-spin rounded-full h-32 w-32 border-b-2 border-zion-cyan' })
);

function App() {
    return React.createElement(Router, null,
        React.createElement('div', { className: 'min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light' },
            React.createElement('header', { className: 'bg-zion-slate-dark p-4' },
                React.createElement('h1', { className: 'text-white text-2xl font-bold' }, 'Zion Tech Group')
            ),
            React.createElement('main', { className: 'flex-1 p-8' },
                React.createElement('div', { className: 'text-center' },
                    React.createElement('h2', { className: 'text-white text-4xl font-bold mb-4' }, 'Welcome to Zion Tech Group'),
                    React.createElement('p', { className: 'text-zion-cyan-light text-xl' }, 'Leading AI & Technology Solutions')
                )
            ),
            React.createElement('footer', { className: 'bg-zion-slate-dark p-4 text-center' },
                React.createElement('p', { className: 'text-zion-cyan-light' }, '© 2027 Zion Tech Group. All rights reserved.')
            )
        )
    );
}
export default App;
