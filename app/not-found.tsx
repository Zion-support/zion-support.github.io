// 404 Not Found page
import _Link from 'next/link';
import { Suspense as _Suspense } from 'react';
import _Loading from './components/Loading';

export default function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}