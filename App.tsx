import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './app/page';
import { performanceEnhancer } from './app/utils/performanceEnhancer';
import ErrorBoundary from './app/components/ErrorBoundary';
import PerformanceMonitor from './app/components/PerformanceMonitor';

// Initialize performance monitoring
performanceEnhancer.initialize();

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <PerformanceMonitor>
          <HomePage />
        </PerformanceMonitor>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

// Render the app
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}

export default App;