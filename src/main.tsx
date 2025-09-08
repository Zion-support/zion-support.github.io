<<<<<<< HEAD

import App from '../App';
import './index.css';


=======
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
	throw new Error('Root element not found');
}
>>>>>>> origin/cursor/delete-old-data-records-6bba

const root = createRoot(rootElement);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
<<<<<<< HEAD

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />

  </React.StrictMode>,
)


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
