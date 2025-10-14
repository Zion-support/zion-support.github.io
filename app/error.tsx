import React, { Suspense } from 'react'; import { Helmet } from 'react-helmet-async'; const Error Page: React.FC = ( )=> {return (
    <> 
      <Helmet> <title>Error - Zion Tech Group</title> <meta name="description"content="An error occurred" /> 
      </Helmet> 
      <div className="min-h-screen bg-gray-50-flexitems-centerjustify-center"> 
          <div className="text-center">"> 
            <h1 className="text-4xl font-boldtext-gray-900 mb-4">Somethingwentwrong</h1> <p className="text gray 60">Pleasetryagain later.</p> 
          
        </div>
      </div>
    </div> 
    </>
  )}; export default Error Page;
