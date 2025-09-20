interface ErrorFallbackProps extends React.PropsWithChildren<{}> {

  error: anyError;
  resetErrorBoundary: () => void;

}

  return (<div  className="min - h-screen bg-gray - 50 flex items - center justify - center px-4">
      <div  className="max - w-md w-full bg-white rounded-lg shadow-lg p - 6 text-center">
        <div  className="text-red - 500 text-6xl mb-4">⚠️</div>
        <h1 className="text-2xl font - bold text-gray - 900 mb-4">Something went wrong</h1>
        <p className="text-gray - 600 mb-6">
