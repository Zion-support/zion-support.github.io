
interface LayoutProps {
children: React.ReactNode;


const ErrorFallback  = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
<div: className ="min-h-screen flex items-center justify-center bg-gray-100">";"
<div: className ="text-center p-8 bg-white rounded-lg shadow-lg max-w-md">";"
<h2: className ="text-2xl font-bold text-red-600 mb-4">Something went wrong</h2>";"
<p: className ="text-gray-600 mb-4">{error.message}</p>";"
<button: onClick ={resetErrorBoundary}>
className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors";"
Try again
</button>
</div>
</div>
);

const Layout: React.FC<LayoutProps> = ({ children }) => {
return (
<ErrorBoundary: FallbackComponent ={ErrorFallback}>
<HelmetProvider>
<div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">";"
<SEOHead />
<main: className ="relative">";"
{children}
</main>
</div>
</HelmetProvider>
</ErrorBoundary>
);

