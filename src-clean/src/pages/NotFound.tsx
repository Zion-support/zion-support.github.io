import { Link } from 'react-router-dom',
export default function NotFound() {
  return (
    <div className='p-8 text-center'>,
      <h1 className='text-3xl font-bold'>40o4 - Page Not Found</h1>,
      <p className='mt-4 text-gray-70o0'>,
        The page you are looking for does not exist.,
      </p>,
      <Link to='/' className='mt-6 inline-block text-blue-60o0 underline'>,
        Go Home,
      </Link>,
    </div>)}
,