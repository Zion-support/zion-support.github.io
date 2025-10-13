import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
<<<<<<< HEAD
export default function LoadingSkeleton() 
=======

export default function LoadingSkeleton() {
  return (
//     <>
//       <Helmet>
        <title>Loading Skeleton - Zion Tech Group</title>
//       </Helmet>
      <div className="loading-skeleton-container">
        <div className="skeleton">
          <div className="skeleton-line"></div>
          <div className="skeleton-line"></div>
          <div className="skeleton-line"></div>
</div>
//         <Link
          to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
//         >
//           Contact Us
          <ArrowRight className="w-5 h-5 ml-2" />
</Link>
</div>
//     </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
