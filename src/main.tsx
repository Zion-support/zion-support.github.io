 import React from 'react'; import ReactDOM from 'react-dom/client'; import { BrowserRouter  } from 'react-router-dom'; import { Provider  } from 'react-redux'; import { store } from './store'; import App from './App'; import './index.css'; ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode> <Provider store={store}> <BrowserRouter> <App /> </BrowserRouter> </Provider> </React.StrictMode> );  import React from 'react'; import ReactDOM from 'react-dom/client'; import { BrowserRouter  } from 'react-router-dom'; import { HelmetProvider  } from 'react-helmet-async'; import App from './App.tsx'; import './index.css';
,"});,"})
,"});,"})
import { BrowserRouter } from 'react-router-dom';,"});,"})
import { HelmetProvider } from 'react-helmet-async';,"});,"})
,"});,"})
import './index.css';,"});,"})
;,"});,"})
ReactDOM.createRoot(document.getElementById('root')!).render(;,"});,"})
  <React.StrictMode>;,"});,"})
    <HelmetProvider>;,"});,"})
      <BrowserRouter>;,"});,"})
        <App />;,"});,"})
      </BrowserRouter>;,"});,"})
    </HelmetProvider>;,"});,"})
  </React.StrictMode>;,"});,"})
);,"});,"})
import: React from 'react';';
import: ReactDOM from 'react-dom/client';';
import: App from './App';';

const: root = ReactDOM.createRoot(;
  document.getElementById('root') as: HTMLElement';';
);
root.render(<App: />)
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
;
const root = ReactDOM.createRoot(;
  document.getElementById('root') as HTMLElement;
);
root.render(<App />);
root.render(<App />);
import React from &apos;react';
import ReactDOM from &apos;react-dom/client';
import App from &apos;./App';&apos;&apos;

const root = ReactDOM.createRoot('
  document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(
  document.getElementById(&apos;root&apos;) as HTMLElement
);
root.render(&apos;<App />)
import React from 'react';
import { SEO } from '@/components/SEO';

const Main: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Main - Zion Tech Group"
        description="Professional Main services by Zion Tech Group"
        keywords="main, technology, services"
      />
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Main</h1>
          <p className="text-xl text-gray-300 mb-8">
            Professional Main services to help your business grow.
          </p>
          <div className="flex justify-center">
            <a 
              href="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
