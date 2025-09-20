import Link from 'next/link'
import { Button } from '@/components/ui/button'
 
export default function NotFound() {
  return (
    <div className="min-h-screen bg-zion-blue flex items-center justify-center text-white">
      <div className="max-w-md w-full text-center p-8 bg-zion-blue-dark rounded-lg shadow-lg border border-zion-blue-light">
        <h1 className="text-6xl font-bold text-zion-purple mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-white mb-4">Page Not Found</h2>
        <p className="text-gray-300 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/" passHref>
          <Button className="bg-zion-purple hover:bg-zion-purple-light text-white text-lg px-6 py-3 rounded-full shadow-md">
            Go Home
          </Button>
        </Link>
      </div>
    </div>
  )
}