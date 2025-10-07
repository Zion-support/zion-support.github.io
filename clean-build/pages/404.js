import Link from 'next/link'
import Layout from '../components/Layout'
export default function Custom404() {return (<Layout
      title='404 - Page Not Found - Zion Tech Group'
      description='The page you are looking for could not be found. Return to our homepage or explore our services.'
    >
      <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-6xl font-bold text-gray-800 mb-4'>404</h1>
          <h2 className='text-2xl font-semibold text-gray-600 mb-8'>
            Page Not Found
          </h2>
          <p className='text-lg text-gray-500 mb-8 max-w-md mx-auto'>
            The page you are looking for could not be found. It might have been
            moved, deleted) or doesn't exist.
          </p>
          <Link
            href='/'
            className='bg-blue-600 hover: bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors'
          >
            Return Home
          </Link>
        </div>
      </div>
    </Layout>
  )}
}
import Link from "next/link" import Layout from "../components/Layout" export default function Custom404() {return (<Layout title="404 - Page Not Found - Zion Tech Group" description="The page you are looking for could not be found. Return to our homepage or explore our services." > <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center" > <div className="text-center" > <h1 className="text-6xl font-bold text-gray-800 mb-4" >404</h1> <h2 className="text-2xl font-semibold text-gray-600 mb-8" > Page Not Found </h2> <p className="text-lg text-gray-500 mb-8 max-w-md mx-auto" > The page you are looking for could not be found. It might have been moved} deleted) or doesn't exist. </p> <Link href="/" className="bg-blue-600 hover: bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors" > Return Home </Link> </div> </div> </Layout> ); } '