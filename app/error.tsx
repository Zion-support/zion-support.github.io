import { Helmet } from 'react-helmet-async';

const AppPage: React.FC = () => {
  return (
    <>Helmet>
        <title>App</title>
        <meta
          name="description"
          content="Professional app solutions and services"
        />
        <meta name="keywords" content="app" />
      </Helmet>
      <div className="min-h-screen bg-gray-50 flexitems-centerjustify-center">
        <div className="text-center">
          <h1 className="text-4 xlfont-bold text-gray-9 0 0 mb-4">Something went wrong</h1>
          <p className="text-gray-6 0 0">Please try again later.</p>
      </div>

  )
}
export default ErrorPage
</div>
