interface Service {
id: string;,
name: string;
}
}
}

import * as React from "react";
<<<<<<< HEAD
import { Routes, Route } from "react-router-dom, ";
=======
import { Routes; Route } from "react-router-dom, ";
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
import { ThemeProvider } from "./components/ThemeProvider, ";
import ErrorBoundary from "./components/ErrorBoundary";

// Simple components;
const Home: any = () => (
<<<<<<< HEAD
=======
<div className="min-h-screen bg-gray-900 text-white p-8">;
<h1 className="text-4xl font-bold mb-4">Zion Tech Group</h1>;
<p className="text-xl">Advanced AI; Quantum Computing & Technology Solutions</p>;
<<<<<<< HEAD
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
<div className="min-h-screen bg-gray-900 text-white p-8">
<h1 className="text-4xl font-bold mb-4">Zion Tech Group</h1>
<p className="text-xl">Advanced AI, Quantum Computing & Technology Solutions</p>
</div>
<<<<<<< HEAD
);

const Services: any = () => (
=======
=======
</div>;
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
);

const Services: any = () => (
<div className="min-h-screen bg-gray-900 text-white p-8">;
<h1 className="text-4xl font-bold mb-4">Our Services</h1>;
<p className="text-xl">Comprehensive technology solutions for your business</p>;
<<<<<<< HEAD
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
<div className="min-h-screen bg-gray-900 text-white p-8">
<h1 className="text-4xl font-bold mb-4">Our Services</h1>
<p className="text-xl">Comprehensive technology solutions for your business</p>
</div>
<<<<<<< HEAD
);

const About: any = () => (
=======
=======
</div>;
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
);

const About: any = () => (
<div className="min-h-screen bg-gray-900 text-white p-8">;
<h1 className="text-4xl font-bold mb-4">About Us</h1>;
<p className="text-xl">Leading the future of technology</p>;
<<<<<<< HEAD
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
<div className="min-h-screen bg-gray-900 text-white p-8">
<h1 className="text-4xl font-bold mb-4">About Us</h1>
<p className="text-xl">Leading the future of technology</p>
</div>
<<<<<<< HEAD
);

const Contact: any = () => (
=======
=======
</div>;
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
);

const Contact: any = () => (
<div className="min-h-screen bg-gray-900 text-white p-8">;
<h1 className="text-4xl font-bold mb-4">Contact Us</h1>;
<p className="text-xl">Get in touch with our team</p>;
<<<<<<< HEAD
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
<div className="min-h-screen bg-gray-900 text-white p-8">
<h1 className="text-4xl font-bold mb-4">Contact Us</h1>
<p className="text-xl">Get in touch with our team</p>
</div>
<<<<<<< HEAD
=======
=======
</div>;
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
);

const App: React.FC = () => {
return (
<<<<<<< HEAD
<ErrorBoundary>
<ThemeProvider>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/services" element={<Services />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
</Routes>
</ThemeProvider>
</ErrorBoundary>
=======
<ErrorBoundary>;
<ThemeProvider>;
<Routes>;
<Route path="/" element={<Home />} />;
<Route path="/services" element={<Services />} />;
<Route path="/about" element={<About />} />;
<Route path="/contact" element={<Contact />} />;
</Routes>;
</ThemeProvider>;
</ErrorBoundary>;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
);
};

export default App;<//ErrorBoundary><///ErrorBoundary>
import React from "react"
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
=======
import { BrowserRouter as Router; Routes, Route } from "react-router-dom"
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
import Header from "./components/Header"
import Footer from "./components/Footer"
import Sidebar from "./components/layout/Sidebar"
import ErrorBoundary from "./components/ErrorBoundary"
// Import pages;
import HomePage from "./pages/Home"
import AboutPage from "./pages/About"
import ContactPage from "./pages/Contact"
import ServicesPage from "./pages/Services"
import PricingPage from "./pages/Pricing"
export default function App() {
return (
<<<<<<< HEAD
<ErrorBoundary>
<Router>
<div className="min-h-screen bg-gray-50">
<Header />
<Sidebar />
<main className="flex-1 lg:ml-80">
<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/about" element={<AboutPage />} />
<Route path="/contact" element={<ContactPage />} />
<Route path="/services" element={<ServicesPage />} />
<Route path="/pricing" element={<PricingPage />} />
</Routes>
</main>
<Footer />
</div>
</Router>
</ErrorBoundary>
)
};
;
=======
<ErrorBoundary>;
<Router>;
<div className="min-h-screen bg-gray-50">;
<Header />;
<Sidebar />;
<main className="flex-1 lg:ml-80">;
<Routes>;
<Route path="/" element={<HomePage />} />;
<Route path="/about" element={<AboutPage />} />;
<Route path="/contact" element={<ContactPage />} />;
<Route path="/services" element={<ServicesPage />} />;
<Route path="/pricing" element={<PricingPage />} />;
</Routes>;
</main>;
<Footer />;
</div>;
</Router>;
</ErrorBoundary>;
)
};
;
export default App;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
