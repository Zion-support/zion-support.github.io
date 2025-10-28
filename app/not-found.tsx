import Link from 'next/link';
// import { Suspense } from 'react';
import Loading from './components/Loading';

export default function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}