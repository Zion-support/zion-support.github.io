import React from 'react';
import { Helmet } from 'react-helmet-async';

const DemoPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Demo - Zion Tech Group</title>
        <meta name="description" content="Experience our solutions with live demos" />
        <meta name="keywords" content="demo, live demo, solutions showcase" />
      </Helmet>
      <div className=" min-h-scre e n bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        <div className=" contain e r mx-autopx-4py-16">
          <div className=" text-center">
            <h1 className=" tex t -4xl font-boldtext-whitemb-8">Demo</h1>
            <p className=" text- x ltext-gray-300mb-8">
              Experience our solutions with live demos
            </p>
            <div className=" text-gray-400">
              <p>Demos coming soon...</p>
              </div>
        </div>
            </div>
        </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoPage;