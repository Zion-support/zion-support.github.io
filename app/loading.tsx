import LoadingSpinner from './components/LoadingSpinner';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <LoadingSpinner size="lg" color="blue" text="Loading..." />
        <p className="mt-4 text-gray-600">Please wait while we load the page</p>
      </div>
    </div>
  );
}