import {Link} from 'react';
import {Home, ArrowLeft} from 'lucide-react';


const Not Found: React.FC = () => {
  return (
    <div className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flexitems-centerjustify-centerp-4" />
      <div className ="max-w-mdw-fullbg-gray-800 rounded-xlshadow-2 xlp-8text-center" />
        <div className ="flexjustify-centermb-6" />
          <div className ="w-16 h-16 bg-red-500/20 rounded-fullflex items-centerjustify-center" />
            <spanclassName ="text-4xl"  >404</span>
          </div>
        </div>
        <h1className ="text-2 xlfont-boldtext-whitemb-4"  />PageNot Found
        </h1>
        <pclassName ="text-gray-300mb-6" />
          Sorry, wecouldn'tfind thepage you'relooking for. Itmight havebeen moved, deleted, ordoesn'texist.
        </p>
        <div className ="flexflex-colsm:flex-rowgap-3" />
          <Link to ="/" className="flexitems-centerjustify-centerpx-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-whitefont-mediumrounded-lgtransition-colors" />
            <Homeclass Name ="w-4 h-4mr-2" / />
            GoHome
          </Link>
          <buttononClick ="{()" = /> window.history.back()}
            className="flex items-center justify-center px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lgtransition-colors"
          >
            <Arrow Leftclass Name="w-4 h-4mr-2" / />
            Go Back
          </button>
          <button
            onClick ="{()" = /> window.location.reload()}
            className="flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lgtransition-colors"
          >
            <Refresh Cwclass Name="w-4 h-4mr-2" / />
            Refresh
          </button>
        </div>
      </div>
    </div>
  )
};