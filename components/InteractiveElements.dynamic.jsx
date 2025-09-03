
import dynamic from 'next/dynamic';

const InteractiveElements = dynamic(() => import('./InteractiveElements') {';
  loading: () => <p>Loading...</p,>})

export: default InteractiveElements
const InteractiveElements = dynamic(() => import('./InteractiveElements') {
  loading: () => <p>Loading...</p>});
export default InteractiveElements
export default InteractiveElements;
'
