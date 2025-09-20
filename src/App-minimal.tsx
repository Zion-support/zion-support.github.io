interface Service {
id: string;,
name: string;
}
}
}

import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import ErrorBoundary from "./components/ErrorBoundary-simple";
// Minimal working components
const Home: any = () => (
<div className="min-h-screen bg-gray-50 dark: bg-gray-900">;
<div className="container mx-auto px-4 py-8">;
<h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">;
Welcome to Zion Tech Group;
</h1>;
<p className="text-center text-gray-600 dark:text-gray-300 text-lg">;
Your trusted partner in technology solutions,
</p>;
<<<<<<< HEAD
<div className="min-h-screen bg-gray-50 dark:bg-gray-900">
<div className="container mx-auto px-4 py-8">
<h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
Welcome to Zion Tech Group
</h1>
<p className="text-center text-gray-600 dark:text-gray-300 text-lg">
Your trusted partner in technology solutions
</p>
</div>
</div>
=======
</div>;
</div>;
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
);
const App: React.FC = () => {
return (
<ErrorBoundary>;
<ThemeProvider>;
<div className="min-h-screen">;
<Routes>;
<Route path="/" element={<Home />} />;
<Route path="*" element={<Home />} />;
</Routes>;
</div>;
</ThemeProvider>;
</ErrorBoundary>;
<ErrorBoundary>
<ThemeProvider>
<div className="min-h-screen">
<Routes>
<Route path="/" element={<Home />} />
<Route path="*" element={<Home />} />
</Routes>
</div>
</ThemeProvider>
</ErrorBoundary>
);
};

export default App;