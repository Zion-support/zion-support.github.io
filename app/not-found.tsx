import { Link } from 'react';
import { Home, ArrowLeft} from 'lucide-react';


const NotFound: React.FC = () => {
return (
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <span className="text-4xl"  >404</span>
          </div>
        <h1 className="w-5h-5ml-2">Page Not Found;
        </h1>
        <p className="w-5h-5ml-2">Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or doesn't exist.;
        </p>
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <Linkto="/" className="flexitems-centerjustify-centerpx-6py-3bg-cyan-600hover:bg-cyan-700text-whitefont-mediumrounded-lgtransition-colors" />
            <HomeclassName="w-5h-5ml-2" />
            Go Home;
          </Link>
          <button;
            onClick="{()" = /> window.history.back()}
            className="flexitems-centerjustify-centerpx-6py-3bg-gray-600hover:bg-gray-700text-whitefont-mediumrounded-lgtransition-colors"
          >
            <ArrowLeftclassName="w-5h-5ml-2" />
            Go Back;
          </button>
          <button;
            onClick="{()" = /> window.location.reload()}
            className="flexitems-centerjustify-centerpx-6py-3bg-blue-600hover:bg-blue-700text-whitefont-mediumrounded-lgtransition-colors"
          >
            <RefreshCwclassName="w-5h-5ml-2" />
            Refresh;
          </button>
        </div>
    </div>
  )
};