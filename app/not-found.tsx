import Link from 'next/link';
import { Suspense } from 'react';
import Loading from './components/Loading';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <h1>NotFound</h1>
      <p>This page is under development.</p>
    </div>
  );
}