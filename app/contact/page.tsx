import React from 'react';
import {Helmet} from 'react-helmet-async';

const Contact Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact - ZionTech Group</title>
        <meta name ="description" content="Getin touchwith Zion Tech Groupfor AIand ITsolutions. Contactus forconsultations andsupport." />
      </Helmet>

      <div className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className ="text-center">
            <h1className ="text-4xlmd:text-6xlfont-boldtext-whitemb-6">
              ContactUs
            </h1>
            <pclassName ="text-xltext-gray-300 mb-8 max-w-3xlmx-auto">
              Readyto transformyour business? Getin touchwith ourteam ofexperts.
            </p>
            <div className ="max-w-mdmx-auto">
              <formclassName ="space-y-4">
                <inputtype ="text"
                  placeholder="YourName"
                  className="w-fullpx-4 py-3 rounded-lgbg-gray-800 text-whiteborder border-gray-600 focus:border-cyan-400 focus:outline-none"
                />
                <inputtype ="email"
                  placeholder="YourEmail"
                  className="w-fullpx-4 py-3 rounded-lgbg-gray-800 text-whiteborder border-gray-600 focus:border-cyan-400 focus:outline-none"
                />
                <textareaplaceholder ="YourMessage"
                  rows={4}
                  className="w-fullpx-4 py-3 rounded-lgbg-gray-800 text-whiteborder border-gray-600 focus:border-cyan-400 focus:outline-none"
                />
                <buttontype ="submit"
                  className="w-fullbg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lgfont-semiboldhover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  SendMessage
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact Page;