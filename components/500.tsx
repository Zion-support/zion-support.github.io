import React from 'react';
import Link from 'next/link';

export default function FiveHundred() {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-3xl font-semibold">500 - Server Error</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Something went wrong on our end.
      </p>
      <Link href="/" className="mt-4 inline-block text-blue-600 hover:text-blue-800">
        Go back home
      </Link>
    </div>
  );
}